import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/layouts/MainLayout';

interface Service {
    id: number;
    nama_layanan: string;
    deskripsi: string;
    estimasi_harga: number;
    estimasi_durasi: string;
}

interface WebSetting {
    id: number;
    no_wa_utama: string;
}

interface ServicesProps {
    services: Service[];
    web_settings: WebSetting;
}

export default function Services({ services, web_settings }: ServicesProps) {

    return (
        <MainLayout>
            <Head title="Layanan Kami" />

            <div className="bg-cream py-12 px-4 border-b border-matcha-light/20">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Layanan Kami</h1>
                    <p className="text-lg text-gray-600">
                        Kami menawarkan solusi komprehensif untuk kebutuhan pengeboran dan eksplorasi Anda.
                    </p>
                </div>
            </div>

            <main className="max-w-6xl mx-auto py-16 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {services && services.length > 0 ? (
                        services.map((service) => (
                            <div key={service.id} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex flex-col transition-transform hover:-translate-y-1">
                                <div className="p-8 flex-grow">
                                    <div className="w-14 h-14 bg-matcha/20 rounded-lg flex items-center justify-center mb-6 text-forest">
                                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                        </svg>
                                    </div>
                                    
                                    <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.nama_layanan}</h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {service.deskripsi}
                                    </p>
                                    
                                    <div className="bg-gray-50 rounded-lg p-5 space-y-3 mb-8">
                                        <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                                            <span className="text-gray-500 font-medium">Estimasi Harga Mulai:</span>
                                            <span className="font-bold text-gray-900">Rp {service.estimasi_harga.toLocaleString('id-ID')}</span>
                                        </div>
                                        <div className="flex items-center justify-between pt-1">
                                            <span className="text-gray-500 font-medium">Estimasi Waktu:</span>
                                            <span className="font-bold text-gray-900">{service.estimasi_durasi}</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="p-6 bg-gray-50 border-t border-gray-100">
                                    <Link
                                        href={`/checkout?service_id=${service.id}`}
                                        className="flex items-center justify-center w-full bg-forest hover:bg-[#283618] text-cream font-bold py-4 px-6 rounded-xl transition-colors gap-2 shadow-sm"
                                    >
                                        Pesan Sekarang
                                    </Link>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-12">
                            <p className="text-gray-500">Belum ada layanan yang tersedia saat ini.</p>
                        </div>
                    )}
                </div>
            </main>
        </MainLayout>
    );
}
