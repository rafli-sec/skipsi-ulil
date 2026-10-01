import { Head } from '@inertiajs/react';
import { dashboard } from '@/routes';
import { Briefcase, CalendarClock, CheckCircle, Package } from 'lucide-react';

interface Metrics {
    totalServices: number;
    totalOrders: number;
    processingOrders: number;
    completedOrders: number;
}

interface Order {
    id: number;
    nama_pelanggan: string;
    no_wa: string;
    service_id: number;
    tanggal_pengerjaan: string;
    status: 'Diproses' | 'Selesai';
    created_at: string;
    service: {
        id: number;
        nama_layanan: string;
    };
}

interface DashboardProps {
    metrics: Metrics;
    recentOrders: Order[];
}

export default function Dashboard({ metrics, recentOrders }: DashboardProps) {
    return (
        <>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-6 p-4 md:p-6 lg:p-8">
                {/* Metrics Cards */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="flex flex-col gap-2 rounded-xl border border-sidebar-border bg-card p-6 text-card-foreground shadow-sm">
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-medium tracking-tight">Total Layanan</span>
                            <Briefcase className="size-5 text-muted-foreground" />
                        </div>
                        <div className="text-3xl font-bold">{metrics.totalServices}</div>
                        <span className="text-xs text-muted-foreground">Layanan tersedia di katalog</span>
                    </div>

                    <div className="flex flex-col gap-2 rounded-xl border border-sidebar-border bg-card p-6 text-card-foreground shadow-sm">
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-medium tracking-tight">Total Jadwal</span>
                            <Package className="size-5 text-muted-foreground" />
                        </div>
                        <div className="text-3xl font-bold">{metrics.totalOrders}</div>
                        <span className="text-xs text-muted-foreground">Total keseluruhan pesanan</span>
                    </div>

                    <div className="flex flex-col gap-2 rounded-xl border border-sidebar-border bg-card p-6 text-card-foreground shadow-sm">
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-medium tracking-tight">Sedang Diproses</span>
                            <CalendarClock className="size-5 text-amber-500" />
                        </div>
                        <div className="text-3xl font-bold">{metrics.processingOrders}</div>
                        <span className="text-xs text-muted-foreground">Pesanan belum selesai</span>
                    </div>

                    <div className="flex flex-col gap-2 rounded-xl border border-sidebar-border bg-card p-6 text-card-foreground shadow-sm">
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-medium tracking-tight">Selesai</span>
                            <CheckCircle className="size-5 text-emerald-500" />
                        </div>
                        <div className="text-3xl font-bold">{metrics.completedOrders}</div>
                        <span className="text-xs text-muted-foreground">Pesanan telah selesai</span>
                    </div>
                </div>

                {/* Recent Orders Table */}
                <div className="flex-1 rounded-xl border border-sidebar-border bg-card shadow-sm">
                    <div className="flex items-center p-6 pb-4">
                        <h3 className="font-semibold leading-none tracking-tight">Jadwal Pengerjaan Terbaru</h3>
                    </div>
                    <div className="p-6 pt-0">
                        <div className="relative w-full overflow-auto">
                            <table className="w-full caption-bottom text-sm">
                                <thead className="[&_tr]:border-b">
                                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Pelanggan</th>
                                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Layanan</th>
                                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Tanggal Pengerjaan</th>
                                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="[&_tr:last-child]:border-0">
                                    {recentOrders.length > 0 ? (
                                        recentOrders.map((order) => (
                                            <tr key={order.id} className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                                <td className="p-4 align-middle font-medium">
                                                    <div>{order.nama_pelanggan}</div>
                                                    <div className="text-xs text-muted-foreground">{order.no_wa}</div>
                                                </td>
                                                <td className="p-4 align-middle">{order.service.nama_layanan}</td>
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
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan={4} className="p-4 text-center align-middle text-muted-foreground">
                                                Belum ada jadwal pengerjaan.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

Dashboard.layout = {
    breadcrumbs: [
        {
            title: 'Dashboard',
            href: dashboard(),
        },
    ],
};
