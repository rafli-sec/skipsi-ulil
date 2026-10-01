import { Head, useForm, Link } from '@inertiajs/react';
import { dashboard } from '@/routes';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import InputError from '@/components/input-error';

interface Service {
    id: number;
    nama_layanan: string;
}

interface Order {
    id: number;
    nama_pelanggan: string;
    no_wa: string;
    service_id: number;
    tanggal_pengerjaan: string;
    status: 'Diproses' | 'Selesai';
}

export default function Form({ order, services }: { order?: Order; services: Service[] }) {
    const isEdit = !!order;

    // Convert date to YYYY-MM-DD for input type="date"
    const formatDateForInput = (dateString?: string) => {
        if (!dateString) return '';
        // If it's a full ISO string, substring it
        return dateString.substring(0, 10);
    };

    const { data, setData, post, put, processing, errors } = useForm({
        nama_pelanggan: order?.nama_pelanggan || '',
        no_wa: order?.no_wa || '',
        service_id: order?.service_id || (services.length > 0 ? services[0].id : ''),
        tanggal_pengerjaan: formatDateForInput(order?.tanggal_pengerjaan) || '',
        status: order?.status || 'Diproses',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isEdit) {
            put(`/admin/orders/${order.id}`);
        } else {
            post('/admin/orders');
        }
    };

    return (
        <>
            <Head title={isEdit ? 'Edit Jadwal' : 'Tambah Jadwal'} />
            <div className="flex h-full flex-1 flex-col gap-6 p-4 md:p-6 lg:p-8">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight">
                            {isEdit ? 'Edit Jadwal Pengerjaan' : 'Tambah Jadwal Pengerjaan'}
                        </h2>
                        <p className="text-muted-foreground">
                            {isEdit ? 'Perbarui informasi jadwal pelanggan.' : 'Masukkan pelanggan yang telah deal via WhatsApp.'}
                        </p>
                    </div>
                    <Button variant="outline" asChild>
                        <Link href="/admin/orders">Kembali</Link>
                    </Button>
                </div>

                <div className="rounded-xl border border-sidebar-border bg-card shadow-sm">
                    <form onSubmit={submit} className="p-6 space-y-6">
                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="space-y-2">
                                <Label htmlFor="nama_pelanggan">Nama Pelanggan</Label>
                                <Input
                                    id="nama_pelanggan"
                                    value={data.nama_pelanggan}
                                    onChange={(e) => setData('nama_pelanggan', e.target.value)}
                                    placeholder="Contoh: Bapak Budi"
                                />
                                <InputError message={errors.nama_pelanggan} />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="no_wa">Nomor WhatsApp</Label>
                                <Input
                                    id="no_wa"
                                    value={data.no_wa}
                                    onChange={(e) => setData('no_wa', e.target.value)}
                                    placeholder="Contoh: 081234567890"
                                />
                                <InputError message={errors.no_wa} />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="service_id">Layanan yang Dipesan</Label>
                                <select
                                    id="service_id"
                                    className="flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"
                                    value={data.service_id}
                                    onChange={(e) => setData('service_id', e.target.value)}
                                >
                                    {services.map((service) => (
                                        <option key={service.id} value={service.id} className="text-foreground bg-background">
                                            {service.nama_layanan}
                                        </option>
                                    ))}
                                </select>
                                <InputError message={errors.service_id} />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="tanggal_pengerjaan">Tanggal Pengerjaan</Label>
                                <Input
                                    id="tanggal_pengerjaan"
                                    type="date"
                                    value={data.tanggal_pengerjaan}
                                    onChange={(e) => setData('tanggal_pengerjaan', e.target.value)}
                                />
                                <InputError message={errors.tanggal_pengerjaan} />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="status">Status Pengerjaan</Label>
                                <select
                                    id="status"
                                    className="flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"
                                    value={data.status}
                                    onChange={(e) => setData('status', e.target.value as 'Diproses' | 'Selesai')}
                                >
                                    <option value="Diproses" className="text-foreground bg-background">Diproses</option>
                                    <option value="Selesai" className="text-foreground bg-background">Selesai</option>
                                </select>
                                <InputError message={errors.status} />
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
            title: 'Jadwal Pengerjaan',
            href: '/admin/orders',
        },
    ],
};
