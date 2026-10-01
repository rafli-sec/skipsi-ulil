import { Head, useForm, Link } from '@inertiajs/react';
import MainLayout from '@/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import InputError from '@/components/input-error';
import { type SharedData } from '@/types';
import { CheckCircle2, AlertTriangle, ArrowLeft } from 'lucide-react';

interface Service {
    id: number;
    nama_layanan: string;
    deskripsi: string;
    estimasi_harga: number;
}

interface WebSetting {
    id: number;
    hero_title: string;
}

interface CheckoutProps extends SharedData {
    services: Service[];
    selectedServiceId: number | null;
    web_settings: WebSetting;
}

export default function Checkout({ services, selectedServiceId, web_settings, flash }: CheckoutProps & { flash: { success?: string } }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        nama_pelanggan: '',
        email: '',
        no_hp: '',
        service_id: selectedServiceId?.toString() || (services.length > 0 ? services[0].id.toString() : ''),
        alamat: '',
        catatan: '',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/checkout');
    };

    if (flash?.success) {
        return (
            <MainLayout>
                <Head title="Pemesanan Berhasil" />
                <div className="min-h-[70vh] flex items-center justify-center py-20 px-4">
                    <div className="max-w-md w-full bg-white rounded-3xl p-10 text-center shadow-xl border border-gray-100">
                        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                            <CheckCircle2 className="w-12 h-12 text-green-600" />
                        </div>
                        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Pemesanan Diterima!</h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            {flash.success}
                        </p>
                        <p className="text-sm text-gray-500 mb-8 bg-gray-50 p-4 rounded-xl">
                            Admin kami akan segera memverifikasi pesanan Anda dan menghubungi Anda melalui WhatsApp untuk kordinasi lebih lanjut.
                        </p>
                        <Link href="/">
                            <Button className="w-full h-12 text-lg bg-forest hover:bg-[#283618] text-cream">Kembali ke Beranda</Button>
                        </Link>
                    </div>
                </div>
            </MainLayout>
        );
    }

    return (
        <MainLayout>
            <Head title="Formulir Pemesanan" />
            
            <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 min-h-screen">
                <div className="max-w-3xl mx-auto">
                    <div className="mb-8 flex items-center justify-between">
                        <div>
                            <Link href="/services" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-forest mb-2 transition-colors">
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Kembali ke Layanan
                            </Link>
                            <h1 className="text-3xl font-extrabold text-gray-900">Formulir Pemesanan</h1>
                            <p className="text-gray-600 mt-2">Lengkapi data di bawah ini untuk memulai proyek Anda.</p>
                        </div>
                    </div>

                    <div className="bg-white py-10 px-6 shadow-xl rounded-3xl sm:px-10 border border-gray-100">
                        {/* Anti-spam Validation Error Alert */}
                        {(errors.email || errors.no_hp) && (
                            <div className="mb-8 p-6 bg-red-50 border border-red-200 rounded-2xl flex items-start gap-4 animate-in slide-in-from-top-4 fade-in duration-300">
                                <AlertTriangle className="w-8 h-8 text-red-600 shrink-0 mt-1" />
                                <div>
                                    <h3 className="text-red-800 font-bold text-lg mb-1">Pesanan Tertunda Terdeteksi</h3>
                                    <p className="text-red-700 leading-relaxed">
                                        {errors.email || errors.no_hp}
                                    </p>
                                </div>
                            </div>
                        )}

                        <form onSubmit={submit} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <Label htmlFor="nama_pelanggan" className="text-gray-700 font-semibold">Nama Lengkap</Label>
                                    <Input
                                        id="nama_pelanggan"
                                        type="text"
                                        name="nama_pelanggan"
                                        value={data.nama_pelanggan}
                                        className="h-12 border-gray-200 focus:ring-forest focus:border-forest"
                                        onChange={(e) => setData('nama_pelanggan', e.target.value)}
                                        required
                                        placeholder="Cth: Budi Santoso"
                                    />
                                    <InputError message={errors.nama_pelanggan} />
                                </div>

                                <div className="space-y-3">
                                    <Label htmlFor="no_hp" className="text-gray-700 font-semibold">Nomor WhatsApp Aktif</Label>
                                    <Input
                                        id="no_hp"
                                        type="tel"
                                        name="no_hp"
                                        value={data.no_hp}
                                        className="h-12 border-gray-200 focus:ring-forest focus:border-forest"
                                        onChange={(e) => setData('no_hp', e.target.value)}
                                        required
                                        placeholder="Cth: 08123456789"
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <Label htmlFor="email" className="text-gray-700 font-semibold">Alamat Email Aktif</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="h-12 border-gray-200 focus:ring-forest focus:border-forest"
                                    onChange={(e) => setData('email', e.target.value)}
                                    required
                                    placeholder="Cth: budi.santoso@email.com"
                                />
                            </div>

                            <div className="space-y-3">
                                <Label htmlFor="service_id" className="text-gray-700 font-semibold">Layanan yang Dibutuhkan</Label>
                                <select
                                    id="service_id"
                                    name="service_id"
                                    value={data.service_id}
                                    className="flex h-12 w-full items-center justify-between rounded-md border border-gray-200 bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-forest disabled:cursor-not-allowed disabled:opacity-50"
                                    onChange={(e) => setData('service_id', e.target.value)}
                                    required
                                >
                                    <option value="" disabled>Pilih Layanan</option>
                                    {services.map((service) => (
                                        <option key={service.id} value={service.id}>
                                            {service.nama_layanan} - Rp {service.estimasi_harga.toLocaleString('id-ID')}
                                        </option>
                                    ))}
                                </select>
                                <InputError message={errors.service_id} />
                            </div>

                            <div className="space-y-3">
                                <Label htmlFor="alamat" className="text-gray-700 font-semibold">Alamat Lengkap Lokasi Proyek</Label>
                                <Textarea
                                    id="alamat"
                                    name="alamat"
                                    value={data.alamat}
                                    className="min-h-[100px] border-gray-200 focus:ring-forest focus:border-forest"
                                    onChange={(e) => setData('alamat', e.target.value)}
                                    required
                                    placeholder="Isi dengan alamat lengkap (Jalan, RT/RW, Kelurahan, Kecamatan, Kota)"
                                />
                                <InputError message={errors.alamat} />
                            </div>

                            <div className="space-y-3">
                                <Label htmlFor="catatan" className="text-gray-700 font-semibold">Catatan Tambahan (Opsional)</Label>
                                <Textarea
                                    id="catatan"
                                    name="catatan"
                                    value={data.catatan}
                                    className="min-h-[80px] border-gray-200 focus:ring-forest focus:border-forest"
                                    onChange={(e) => setData('catatan', e.target.value)}
                                    placeholder="Contoh: Kedalaman air tanah yang dibutuhkan atau jenis tanah di lokasi"
                                />
                                <InputError message={errors.catatan} />
                            </div>

                            <div className="pt-6 border-t border-gray-100">
                                <Button
                                    type="submit"
                                    className="w-full h-14 text-lg font-bold bg-forest hover:bg-[#283618] text-cream transition-all hover:shadow-lg hover:shadow-forest/20"
                                    disabled={processing}
                                >
                                    {processing ? 'Memproses Pesanan...' : 'Kirim Pesanan Sekarang'}
                                </Button>
                                <p className="text-center text-sm text-gray-500 mt-4">
                                    Dengan mengirim pesanan, Anda setuju untuk dihubungi oleh tim PT Aulia Mutiara Drilling.
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
