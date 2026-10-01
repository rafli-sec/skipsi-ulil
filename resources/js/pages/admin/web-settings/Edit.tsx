import { Head, useForm } from '@inertiajs/react';
import { dashboard } from '@/routes';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import InputError from '@/components/input-error';
import { useState, useRef } from 'react';
import { ImagePlus } from 'lucide-react';

interface WebSettings {
    hero_title?: string;
    hero_image_path?: string;
    hero_image_2_path?: string;
    hero_image_3_path?: string;
    about_text?: string;
    alamat_kontak?: string;
    no_wa_utama?: string;
}

export default function Edit({ settings }: { settings: WebSettings }) {
    const fileInputRef1 = useRef<HTMLInputElement>(null);
    const fileInputRef2 = useRef<HTMLInputElement>(null);
    const fileInputRef3 = useRef<HTMLInputElement>(null);
    
    const [previewUrl1, setPreviewUrl1] = useState<string | null>(
        settings?.hero_image_path ? `/storage/${settings.hero_image_path}` : null
    );
    const [previewUrl2, setPreviewUrl2] = useState<string | null>(
        settings?.hero_image_2_path ? `/storage/${settings.hero_image_2_path}` : null
    );
    const [previewUrl3, setPreviewUrl3] = useState<string | null>(
        settings?.hero_image_3_path ? `/storage/${settings.hero_image_3_path}` : null
    );

    const { data, setData, post, processing, errors, recentlySuccessful } = useForm({
        hero_title: settings.hero_title || '',
        about_text: settings.about_text || '',
        alamat_kontak: settings.alamat_kontak || '',
        no_wa_utama: settings.no_wa_utama || '',
        hero_image: null as File | null,
        hero_image_2: null as File | null,
        hero_image_3: null as File | null,
        _method: 'put',
    });

    const handleImageChange = (
        e: React.ChangeEvent<HTMLInputElement>, 
        field: 'hero_image' | 'hero_image_2' | 'hero_image_3',
        setPreview: React.Dispatch<React.SetStateAction<string | null>>
    ) => {
        const file = e.target.files?.[0];
        if (file) {
            setData(field, file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/admin/web-settings');
    };

    return (
        <>
            <Head title="Pengaturan Website" />
            <div className="flex h-full flex-1 flex-col gap-6 p-4 md:p-6 lg:p-8">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight">Pengaturan Website</h2>
                        <p className="text-muted-foreground">Kelola teks, informasi kontak, dan gambar yang tampil di halaman publik.</p>
                    </div>
                </div>

                <div className="rounded-xl border border-sidebar-border bg-card shadow-sm">
                    <form onSubmit={submit} className="p-6 space-y-6">
                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <Label htmlFor="hero_title">Judul Utama (Hero Title)</Label>
                                    <Input
                                        id="hero_title"
                                        value={data.hero_title}
                                        onChange={(e) => setData('hero_title', e.target.value)}
                                        placeholder="Contoh: Solusi Terbaik Jasa Sumur Bor"
                                    />
                                    <InputError message={errors.hero_title} />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="about_text">Teks Tentang Kami (About Text)</Label>
                                    <Textarea
                                        id="about_text"
                                        value={data.about_text}
                                        onChange={(e) => setData('about_text', e.target.value)}
                                        rows={4}
                                        placeholder="Tuliskan deskripsi singkat perusahaan..."
                                    />
                                    <InputError message={errors.about_text} />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="alamat_kontak">Alamat Kontak</Label>
                                    <Textarea
                                        id="alamat_kontak"
                                        value={data.alamat_kontak}
                                        onChange={(e) => setData('alamat_kontak', e.target.value)}
                                        rows={3}
                                        placeholder="Contoh: Jl. Poros Kendari..."
                                    />
                                    <InputError message={errors.alamat_kontak} />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="no_wa_utama">Nomor WhatsApp Utama</Label>
                                    <Input
                                        id="no_wa_utama"
                                        value={data.no_wa_utama}
                                        onChange={(e) => setData('no_wa_utama', e.target.value)}
                                        placeholder="Contoh: 6281234567890 (Gunakan awalan 62)"
                                    />
                                    <InputError message={errors.no_wa_utama} />
                                    <p className="text-xs text-muted-foreground">Nomor ini akan digunakan sebagai tujuan tombol "Pesan Sekarang" ke wa.me.</p>
                                </div>
                            </div>
                            
                            <div className="space-y-6">
                                <Label className="text-base font-semibold">Gambar Utama (Hero Images) untuk Carousel</Label>
                                
                                {/* Image 1 */}
                                <div className="space-y-2">
                                    <Label>Gambar 1 (Utama)</Label>
                                    <div 
                                        className={`relative flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-xl transition-colors ${previewUrl1 ? 'border-border' : 'border-muted-foreground/25 hover:bg-muted/50'} overflow-hidden cursor-pointer`}
                                        onClick={() => fileInputRef1.current?.click()}
                                    >
                                        {previewUrl1 ? (
                                            <img src={previewUrl1} alt="Hero 1 Preview" className="w-full h-full object-cover" />
                                        ) : (
                                            <div className="flex flex-col items-center justify-center text-muted-foreground">
                                                <ImagePlus className="w-8 h-8 mb-2" />
                                                <p className="text-xs">Unggah Gambar 1</p>
                                            </div>
                                        )}
                                    </div>
                                    <input 
                                        ref={fileInputRef1}
                                        type="file" 
                                        className="hidden" 
                                        accept="image/*"
                                        onChange={(e) => handleImageChange(e, 'hero_image', setPreviewUrl1)}
                                    />
                                    <InputError message={errors.hero_image} />
                                </div>

                                {/* Image 2 */}
                                <div className="space-y-2">
                                    <Label>Gambar 2</Label>
                                    <div 
                                        className={`relative flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-xl transition-colors ${previewUrl2 ? 'border-border' : 'border-muted-foreground/25 hover:bg-muted/50'} overflow-hidden cursor-pointer`}
                                        onClick={() => fileInputRef2.current?.click()}
                                    >
                                        {previewUrl2 ? (
                                            <img src={previewUrl2} alt="Hero 2 Preview" className="w-full h-full object-cover" />
                                        ) : (
                                            <div className="flex flex-col items-center justify-center text-muted-foreground">
                                                <ImagePlus className="w-8 h-8 mb-2" />
                                                <p className="text-xs">Unggah Gambar 2</p>
                                            </div>
                                        )}
                                    </div>
                                    <input 
                                        ref={fileInputRef2}
                                        type="file" 
                                        className="hidden" 
                                        accept="image/*"
                                        onChange={(e) => handleImageChange(e, 'hero_image_2', setPreviewUrl2)}
                                    />
                                    <InputError message={errors.hero_image_2} />
                                </div>

                                {/* Image 3 */}
                                <div className="space-y-2">
                                    <Label>Gambar 3</Label>
                                    <div 
                                        className={`relative flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-xl transition-colors ${previewUrl3 ? 'border-border' : 'border-muted-foreground/25 hover:bg-muted/50'} overflow-hidden cursor-pointer`}
                                        onClick={() => fileInputRef3.current?.click()}
                                    >
                                        {previewUrl3 ? (
                                            <img src={previewUrl3} alt="Hero 3 Preview" className="w-full h-full object-cover" />
                                        ) : (
                                            <div className="flex flex-col items-center justify-center text-muted-foreground">
                                                <ImagePlus className="w-8 h-8 mb-2" />
                                                <p className="text-xs">Unggah Gambar 3</p>
                                            </div>
                                        )}
                                    </div>
                                    <input 
                                        ref={fileInputRef3}
                                        type="file" 
                                        className="hidden" 
                                        accept="image/*"
                                        onChange={(e) => handleImageChange(e, 'hero_image_3', setPreviewUrl3)}
                                    />
                                    <InputError message={errors.hero_image_3} />
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 pt-4 border-t border-border">
                            <Button type="submit" disabled={processing}>
                                {processing ? 'Menyimpan...' : 'Simpan Pengaturan'}
                            </Button>

                            {recentlySuccessful && (
                                <p className="text-sm text-emerald-600 dark:text-emerald-400">
                                    Berhasil disimpan.
                                </p>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

Edit.layout = {
    breadcrumbs: [
        {
            title: 'Dashboard',
            href: dashboard(),
        },
        {
            title: 'Pengaturan Website',
            href: '/admin/web-settings',
        },
    ],
};
