import { Head, Link, useForm } from '@inertiajs/react';
import { dashboard } from '@/routes';
import { Button } from '@/components/ui/button';
import { Plus, Edit, Trash2, MessageCircle } from 'lucide-react';

interface Order {
    id: number;
    uuid: string;
    nama_pelanggan: string;
    no_hp: string;
    service_id: number;
    tanggal_pengerjaan: string;
    status: 'Diproses' | 'Selesai';
    service: {
        id: number;
        nama_layanan: string;
    };
    review?: {
        id: number;
    } | null;
}

export default function Index({ orders }: { orders: Order[] }) {
    const { delete: destroy } = useForm();

    const handleDelete = (id: number) => {
        if (confirm('Yakin ingin menghapus jadwal ini?')) {
            destroy(`/admin/orders/${id}`);
        }
    };

    const handleKirimWA = (order: Order) => {
        let no_hp = order.no_hp;
        if (no_hp.startsWith('0')) {
            no_hp = '62' + no_hp.substring(1);
        } else if (no_hp.startsWith('+62')) {
            no_hp = no_hp.substring(1);
        }
        
        const reviewUrl = `${window.location.origin}/review/${order.uuid}`;
        const message = `Halo Bpk/Ibu ${order.nama_pelanggan},\n\nTerima kasih telah mempercayakan layanan ${order.service?.nama_layanan || 'kami'} kepada PT Aulia Mutiara Drilling.\n\nKarena pengerjaan telah selesai, mohon kesediaannya meluangkan waktu sebentar untuk memberikan ulasan pelayanan kami melalui tautan berikut:\n${reviewUrl}\n\nTerima kasih!`;
        
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${no_hp}?text=${encodedMessage}`, '_blank');
    };

    return (
        <>
            <Head title="Jadwal Pengerjaan" />
            <div className="flex h-full flex-1 flex-col gap-6 p-4 md:p-6 lg:p-8">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight">Jadwal Pengerjaan</h2>
                        <p className="text-muted-foreground">Kelola antrean dan jadwal pelanggan yang sudah deal via WhatsApp.</p>
                    </div>
                    <Button asChild>
                        <Link href="/admin/orders/create">
                            <Plus className="mr-2 size-4" />
                            Tambah Jadwal
                        </Link>
                    </Button>
                </div>

                <div className="flex-1 rounded-xl border border-sidebar-border bg-card shadow-sm">
                    <div className="relative w-full overflow-auto">
                        <table className="w-full caption-bottom text-sm">
                            <thead className="[&_tr]:border-b">
                                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Pelanggan</th>
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Layanan</th>
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Tanggal</th>
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Status</th>
                                    <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="[&_tr:last-child]:border-0">
                                {orders.length > 0 ? (
                                    orders.map((order) => (
                                        <tr key={order.id} className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                            <td className="p-4 align-middle font-medium">
                                                {order.nama_pelanggan}
                                                <div className="mt-1 text-xs font-normal text-muted-foreground">
                                                    {order.no_hp}
                                                </div>
                                            </td>
                                            <td className="p-4 align-middle">
                                                {order.service?.nama_layanan || '-'}
                                            </td>
                                            <td className="p-4 align-middle">
                                                {new Date(order.tanggal_pengerjaan).toLocaleDateString('id-ID', {
                                                    weekday: 'long',
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric',
                                                })}
                                            </td>
                                            <td className="p-4 align-middle">
                                                <div
                                                    className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${
                                                        order.status === 'Selesai'
                                                            ? 'border-transparent bg-emerald-500/15 text-emerald-700 hover:bg-emerald-500/25 dark:text-emerald-400'
                                                            : 'border-transparent bg-amber-500/15 text-amber-700 hover:bg-amber-500/25 dark:text-amber-400'
                                                    }`}
                                                >
                                                    {order.status}
                                                </div>
                                            </td>
                                            <td className="p-4 text-right align-middle">
                                                <div className="flex items-center justify-end gap-2">
                                                    {order.status === 'Selesai' && !order.review && (
                                                        <Button
                                                            variant="default"
                                                            size="sm"
                                                            className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm"
                                                            onClick={() => handleKirimWA(order)}
                                                        >
                                                            <MessageCircle className="mr-1.5 size-4" />
                                                            Minta Ulasan
                                                        </Button>
                                                    )}
                                                    {order.status === 'Selesai' && order.review && (
                                                        <div className="inline-flex items-center text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full border border-emerald-200 mr-2">
                                                            ✅ Sudah Direview
                                                        </div>
                                                    )}
                                                    <Button variant="outline" size="icon" asChild>
                                                        <Link href={`/admin/orders/${order.id}/edit`}>
                                                            <Edit className="size-4 text-muted-foreground" />
                                                        </Link>
                                                    </Button>
                                                    <Button
                                                        variant="outline"
                                                        size="icon"
                                                        onClick={() => handleDelete(order.id)}
                                                    >
                                                        <Trash2 className="size-4 text-destructive" />
                                                    </Button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={5} className="p-4 text-center align-middle text-muted-foreground">
                                            Belum ada data jadwal.
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
            title: 'Jadwal Pengerjaan',
            href: '/admin/orders',
        },
    ],
};
