import { Head, useForm, Link } from '@inertiajs/react';
import { dashboard } from '@/routes';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import InputError from '@/components/input-error';
import { useState, useRef } from 'react';
import { ImagePlus } from 'lucide-react';

interface Gallery {
    id: number;
    title: string;
    image_path: string;
    description: string;
    project_date?: string;
    location?: string;
}

export default function Form({ gallery }: { gallery?: Gallery }) {
    const isEdit = !!gallery;
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(gallery ? `/storage/${gallery.image_path}` : null);

    const { data, setData, post, processing, errors } = useForm({
        title: gallery?.title || '',
        description: gallery?.description || '',
        project_date: gallery?.project_date ? gallery.project_date.substring(0, 10) : '',
        location: gallery?.location || '',
        image: null as File | null,
        _method: isEdit ? 'put' : 'post', // For Inertia file upload with PUT
    });

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setData('image', file);
            setPreviewUrl(URL.createObjectURL(file));
        }
    };

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // When uploading files via Inertia, we must use POST and fake PUT with _method
        if (isEdit) {
            post(`/admin/galleries/${gallery.id}`);
        } else {
            post('/admin/galleries');
        }
    };

    return (
        <>
            <Head title={isEdit ? 'Edit Foto' : 'Tambah Foto'} />
            <div className="flex h-full flex-1 flex-col gap-6 p-4 md:p-6 lg:p-8">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight">
                            {isEdit ? 'Edit Foto Proyek' : 'Tambah Foto Proyek'}
                        </h2>
                        <p className="text-muted-foreground">
                            {isEdit ? 'Perbarui informasi dan gambar proyek.' : 'Unggah foto hasil pekerjaan terbaru.'}
                        </p>
                    </div>
                    <Button variant="outline" asChild>
                        <Link href="/admin/galleries">Kembali</Link>
                    </Button>
                </div>

                <div className="rounded-xl border border-sidebar-border bg-card shadow-sm">
                    <form onSubmit={submit} className="p-6 space-y-6">
                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <Label htmlFor="title">Judul Foto</Label>
                                    <Input
                                        id="title"
                                        value={data.title}
                                        onChange={(e) => setData('title', e.target.value)}
                                        placeholder="Contoh: Pengeboran di Kendari"
                                    />
                                    <InputError message={errors.title} />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="project_date">Tanggal (Opsional)</Label>
                                        <Input
                                            id="project_date"
                                            type="date"
                                            value={data.project_date}
                                            onChange={(e) => setData('project_date', e.target.value)}
                                        />
                                        <InputError message={errors.project_date} />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="location">Lokasi (Opsional)</Label>
                                        <Input
                                            id="location"
                                            value={data.location}
                                            onChange={(e) => setData('location', e.target.value)}
                                            placeholder="Contoh: Morowali"
                                        />
                                        <InputError message={errors.location} />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="description">Deskripsi (Opsional)</Label>
                                    <Textarea
                                        id="description"
                                        value={data.description}
                                        onChange={(e) => setData('description', e.target.value)}
                                        rows={4}
                                        placeholder="Ceritakan detail pekerjaan ini..."
                                    />
                                    <InputError message={errors.description} />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label>Unggah Gambar</Label>
                                <div 
                                    className={`relative flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-xl transition-colors ${previewUrl ? 'border-border' : 'border-muted-foreground/25 hover:bg-muted/50'} overflow-hidden cursor-pointer`}
                                    onClick={() => fileInputRef.current?.click()}
                                >
                                    {previewUrl ? (
                                        <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6 text-muted-foreground">
                                            <ImagePlus className="w-10 h-10 mb-3" />
                                            <p className="text-sm font-medium">Klik untuk mengunggah gambar</p>
                                            <p className="text-xs mt-1">PNG, JPG atau WEBP (Max. 2MB)</p>
                                        </div>
                                    )}
                                </div>
                                <input 
                                    ref={fileInputRef}
                                    type="file" 
                                    className="hidden" 
                                    accept="image/*"
                                    onChange={handleImageChange}
                                />
                                <InputError message={errors.image} />
                            </div>
                        </div>

                        <div className="flex items-center gap-4 pt-4 border-t border-border">
                            <Button type="submit" disabled={processing}>
                                {processing ? 'Menyimpan...' : 'Simpan Foto'}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

Form.layout = {
    breadcrumbs: [
        {
            title: 'Dashboard',
            href: dashboard(),
        },
        {
            title: 'Galeri Proyek',
            href: '/admin/galleries',
        },
    ],
};
