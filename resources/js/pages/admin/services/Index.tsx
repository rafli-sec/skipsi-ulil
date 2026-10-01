import { Head, Link, useForm } from '@inertiajs/react';
import { dashboard } from '@/routes';
import { Button } from '@/components/ui/button';
import { Plus, Edit, Trash2 } from 'lucide-react';

interface Service {
    id: number;
    nama_layanan: string;
    deskripsi: string;
    estimasi_harga: number;
    estimasi_durasi: string;
}

export default function Index({ services }: { services: Service[] }) {
    const { delete: destroy } = useForm();

    const handleDelete = (id: number) => {
        if (confirm('Yakin ingin menghapus layanan ini?')) {
            destroy(`/admin/services/${id}`);
        }
    };

    return (
        <>
            <Head title="Kelola Layanan" />
            <div className="flex h-full flex-1 flex-col gap-6 p-4 md:p-6 lg:p-8">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight">Kelola Layanan</h2>
                        <p className="text-muted-foreground">Atur katalog layanan jasa sumur bor dan eksplorasi.</p>
                    </div>
                    <Button asChild>
                        <Link href="/admin/services/create">
                            <Plus className="mr-2 size-4" />
                            Tambah Layanan
                        </Link>
                    </Button>
                </div>

                <div className="flex-1 rounded-xl border border-sidebar-border bg-card shadow-sm">
                    <div className="relative w-full overflow-auto">
                        <table className="w-full caption-bottom text-sm">
                            <thead className="[&_tr]:border-b">
                                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Nama Layanan</th>
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Estimasi Harga</th>
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Estimasi Durasi</th>
                                    <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="[&_tr:last-child]:border-0">
                                {services.length > 0 ? (
                                    services.map((service) => (
                                        <tr key={service.id} className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                            <td className="p-4 align-middle font-medium">
                                                {service.nama_layanan}
                                                <div className="mt-1 max-w-[400px] truncate text-xs font-normal text-muted-foreground">
                                                    {service.deskripsi}
                                                </div>
                                            </td>
                                            <td className="p-4 align-middle">
                                                {new Intl.NumberFormat('id-ID', {
                                                    style: 'currency',
                                                    currency: 'IDR',
                                                    maximumFractionDigits: 0,
                                                }).format(service.estimasi_harga)}
                                            </td>
                                            <td className="p-4 align-middle">{service.estimasi_durasi}</td>
                                            <td className="p-4 text-right align-middle">
                                                <div className="flex items-center justify-end gap-2">
                                                    <Button variant="outline" size="icon" asChild>
                                                        <Link href={`/admin/services/${service.id}/edit`}>
                                                            <Edit className="size-4 text-muted-foreground" />
                                                        </Link>
                                                    </Button>
                                                    <Button
                                                        variant="outline"
                                                        size="icon"
                                                        onClick={() => handleDelete(service.id)}
                                                    >
                                                        <Trash2 className="size-4 text-destructive" />
                                                    </Button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={4} className="p-4 text-center align-middle text-muted-foreground">
                                            Belum ada data layanan.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

Index.layout = {
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
