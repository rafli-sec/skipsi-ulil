import { Head, useForm, Link } from '@inertiajs/react';
import { dashboard } from '@/routes';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import InputError from '@/components/input-error';

interface Service {
    id: number;
    nama_layanan: string;
    deskripsi: string;
    estimasi_harga: number;
    estimasi_durasi: string;
}

export default function Form({ service }: { service?: Service }) {
    const isEdit = !!service;

    const { data, setData, post, put, processing, errors } = useForm({
        nama_layanan: service?.nama_layanan || '',
        deskripsi: service?.deskripsi || '',
        estimasi_harga: service?.estimasi_harga || '',
        estimasi_durasi: service?.estimasi_durasi || '',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isEdit) {
            put(`/admin/services/${service.id}`);
        } else {
            post('/admin/services');
        }
    };

    return (
        <>
            <Head title={isEdit ? 'Edit Layanan' : 'Tambah Layanan'} />
            <div className="flex h-full flex-1 flex-col gap-6 p-4 md:p-6 lg:p-8">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight">
                            {isEdit ? 'Edit Layanan' : 'Tambah Layanan'}
                        </h2>
                        <p className="text-muted-foreground">
                            {isEdit ? 'Perbarui informasi layanan yang ada.' : 'Tambahkan layanan baru ke dalam katalog.'}
                        </p>
                    </div>
                    <Button variant="outline" asChild>
                        <Link href="/admin/services">Kembali</Link>
                    </Button>
                </div>

                <div className="rounded-xl border border-sidebar-border bg-card shadow-sm">
                    <form onSubmit={submit} className="p-6 space-y-6">
                        <div className="grid gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="nama_layanan">Nama Layanan</Label>
                                <Input
                                    id="nama_layanan"
                                    value={data.nama_layanan}
                                    onChange={(e) => setData('nama_layanan', e.target.value)}
                                    placeholder="Contoh: Jasa Sumur Bor Dalam"
                                />
                                <InputError message={errors.nama_layanan} />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="deskripsi">Deskripsi</Label>
                                <Textarea
                                    id="deskripsi"
                                    value={data.deskripsi}
                                    onChange={(e) => setData('deskripsi', e.target.value)}
                                    rows={4}
                                    placeholder="Deskripsikan layanan ini..."
                                />
                                <InputError message={errors.deskripsi} />
                            </div>

                            <div className="grid gap-6 md:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="estimasi_harga">Estimasi Harga (Rp)</Label>
                                    <Input
                                        id="estimasi_harga"
                                        type="number"
                                        min="0"
                                        value={data.estimasi_harga}
                                        onChange={(e) => setData('estimasi_harga', e.target.value)}
                                        placeholder="Contoh: 5000000"
                                    />
                                    <InputError message={errors.estimasi_harga} />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="estimasi_durasi">Estimasi Durasi Pengerjaan</Label>
                                    <Input
                                        id="estimasi_durasi"
                                        value={data.estimasi_durasi}
                                        onChange={(e) => setData('estimasi_durasi', e.target.value)}
                                        placeholder="Contoh: 3-5 Hari"
                                    />
                                    <InputError message={errors.estimasi_durasi} />
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 pt-4">
                            <Button type="submit" disabled={processing}>
                                {processing ? 'Menyimpan...' : 'Simpan Data'}
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
            title: 'Kelola Layanan',
            href: '/admin/services',
        },
    ],
};
