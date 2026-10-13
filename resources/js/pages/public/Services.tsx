import { Head } from '@inertiajs/react';
import MainLayout from '@/layouts/MainLayout';

interface Service {
    id: number;
    nama_layanan: string;
    deskripsi: string;
    estimasi_harga?: number;
    estimasi_durasi: string;
    harga_ongkos_kerja?: string | null;
    harga_terima_jadi?: string | null;
    catatan_harga?: string | null;
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
    const waNumber = web_settings?.no_wa_utama || '6287890622335';

    const isSumurBor = (name: string) => {
        return name.toLowerCase().includes('sumur') || name.toLowerCase().includes('bor');
    };

    const isEksplorasiNikel = (name: string) => {
        return name.toLowerCase().includes('nikel') || name.toLowerCase().includes('eksplorasi');
    };

    const getWhatsAppUrl = (service: Service) => {
        let text = '';
        if (isSumurBor(service.nama_layanan)) {
            text = `Halo, saya ingin berkonsultasi mengenai layanan ${service.nama_layanan}.\n\n- Pilihan Paket: [Ongkos Kerja / Terima Jadi]\n- Perkiraan Kedalaman: [20-60m / 60-100m]\n- Lokasi Pengerjaan: \n\nMohon informasi jadwal survei dan estimasi biayanya.`;
        } else if (isEksplorasiNikel(service.nama_layanan)) {
            text = `Halo, kami ingin berkonsultasi mengenai layanan ${service.nama_layanan} untuk kebutuhan proyek pertambangan.\n\nMohon informasi mekanisme penawaran RAB kerja sama dan jadwal survei lapangan.`;
        } else {
            text = `Halo, saya ingin berkonsultasi mengenai layanan ${service.nama_layanan}.`;
        }

        return `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
    };

    return (
        <MainLayout>
            <Head title="Layanan & Estimasi Harga" />

            {/* Header Banner */}
            <div className="bg-cream py-14 px-4 border-b border-matcha-light/20">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="inline-block py-1 px-3.5 mb-3 text-xs font-bold uppercase tracking-wider text-forest bg-matcha-light/40 rounded-full">
                        Transparansi & Profesionalitas
                    </span>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
                        Layanan Kami
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Solusi terpercaya untuk pembuatan sumur bor air tanah dan eksplorasi pertambangan dengan armada modern serta tenaga ahli berpengalaman.
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <main className="max-w-6xl mx-auto py-16 px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {services && services.length > 0 ? (
                        services.map((service) => {
                            const sumurBorActive = isSumurBor(service.nama_layanan);
                            const nikelActive = isEksplorasiNikel(service.nama_layanan);
                            const hasPackagePricing = !!(service.harga_ongkos_kerja || service.harga_terima_jadi);

                            return (
                                <div 
                                    key={service.id} 
                                    className="bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col justify-between"
                                >
                                    <div className="p-8 sm:p-10 flex-grow">
                                        {/* Icon & Title */}
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-14 h-14 bg-matcha/20 rounded-2xl flex items-center justify-center text-forest shrink-0">
                                                {sumurBorActive ? (
                                                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                                    </svg>
                                                ) : (
                                                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                                                    </svg>
                                                )}
                                            </div>
                                            <div>
                                                <span className="text-xs font-bold text-forest uppercase tracking-wider">
                                                    {sumurBorActive ? 'Jasa Pengeboran Air' : nikelActive ? 'Layanan Pertambangan' : 'Layanan Khusus'}
                                                </span>
                                                <h2 className="text-2xl font-bold text-gray-900">{service.nama_layanan}</h2>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-gray-600 mb-8 leading-relaxed">
                                            {service.deskripsi}
                                        </p>

                                        {/* Detail Skema Paket Harga Dinamis */}
                                        {hasPackagePricing ? (
                                            <div className="space-y-4 mb-6">
                                                <div className="flex items-center justify-between">
                                                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">
                                                        Estimasi Skema Harga (Kedalaman 20 - 60m)
                                                    </h3>
                                                    <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                                                        Per Titik
                                                    </span>
                                                </div>

                                                {/* 2 Pilihan Paket */}
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                                                    {/* Paket 1: Ongkos Kerja */}
                                                    <div className="bg-gray-50/90 rounded-2xl p-4 border border-gray-200/80 hover:border-matcha transition-colors">
                                                        <span className="inline-block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">
                                                            Paket 1: Jasa Saja
                                                        </span>
                                                        <h4 className="font-bold text-gray-900 text-base mb-1">
                                                            Ongkos Kerja
                                                        </h4>
                                                        <p className="text-xl font-extrabold text-forest mb-1">
                                                            {service.harga_ongkos_kerja || '8 - 15 Juta'}
                                                        </p>
                                                        <p className="text-xs text-gray-500">
                                                            Kedalaman 20 - 60 meter
                                                        </p>
                                                        <div className="mt-3 pt-2.5 border-t border-gray-200/60 text-[11px] text-gray-500">
                                                            * Khusus jasa pengeboran (menyesuaikan kontur tanah).
                                                        </div>
                                                    </div>

                                                    {/* Paket 2: Terima Jadi */}
                                                    <div className="bg-emerald-50/50 rounded-2xl p-4 border border-emerald-200/80 hover:border-forest transition-colors relative">
                                                        <span className="inline-block text-[11px] font-bold text-emerald-800 uppercase tracking-wider mb-1">
                                                            Paket 2: All-In
                                                        </span>
                                                        <h4 className="font-bold text-gray-900 text-base mb-1">
                                                            Terima Jadi
                                                        </h4>
                                                        <p className="text-xl font-extrabold text-forest mb-1">
                                                            {service.harga_terima_jadi || '17 - 45 Juta'}
                                                        </p>
                                                        <p className="text-xs text-gray-600">
                                                            Kedalaman 20 - 60 meter
                                                        </p>
                                                        <div className="mt-3 pt-2.5 border-t border-emerald-200/60 text-[11px] text-emerald-800">
                                                            * Termasuk pipa casing & instalasi mesin pompa air.
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Callout Note untuk Kedalaman 60-100m */}
                                                {service.catatan_harga && (
                                                    <div className="bg-amber-50/90 border border-amber-200 rounded-xl p-4 flex gap-3 text-amber-900">
                                                        <div className="shrink-0 text-amber-600 mt-0.5">
                                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg>
                                                        </div>
                                                        <div className="text-xs leading-relaxed">
                                                            <span className="font-bold block mb-0.5">Catatan Penentuan Harga:</span>
                                                            {service.catatan_harga}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        ) : (
                                            /* Detail Layanan Berbasis Konsultasi RAB (seperti Eksplorasi Nikel) */
                                            <div className="space-y-4 mb-6">
                                                <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200/80">
                                                    <div className="flex items-center justify-between mb-2">
                                                        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Skema Penetapan Biaya</span>
                                                        <span className="text-xs font-bold text-forest bg-matcha-light/40 px-2.5 py-0.5 rounded-full">
                                                            Kontrak Proyek (RAB)
                                                        </span>
                                                    </div>
                                                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                                                        Konsultasi & Penawaran Berbasis RAB
                                                    </h3>
                                                    <p className="text-xs text-gray-600 leading-relaxed">
                                                        {service.catatan_harga || 'Biaya dihitung spesifik berdasarkan volume kedalaman (meter run), titik koordinat konsesi, analisa batuan, dan jangka waktu operasional proyek.'}
                                                    </p>
                                                </div>

                                                {/* Poin Keunggulan Eksplorasi */}
                                                {nikelActive && (
                                                    <div className="bg-white rounded-xl border border-gray-100 p-4 space-y-2.5 text-xs text-gray-700">
                                                        <div className="flex items-center gap-2.5">
                                                            <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 font-bold">✓</span>
                                                            <span>Pemboran Inti (Core Drilling) untuk analisa lapisan bijih nikel</span>
                                                        </div>
                                                        <div className="flex items-center gap-2.5">
                                                            <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 font-bold">✓</span>
                                                            <span>Tim operator & teknisi bersertifikasi keselamatan kerja K3</span>
                                                        </div>
                                                        <div className="flex items-center gap-2.5">
                                                            <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 font-bold">✓</span>
                                                            <span>Armada mesin rig dan kompresor bertekanan tinggi siap jalan</span>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        )}

                                        {/* Estimasi Durasi */}
                                        <div className="flex items-center justify-between text-sm py-3 px-4 bg-gray-50 rounded-xl text-gray-700">
                                            <span className="text-gray-500 font-medium">Estimasi Waktu Pengerjaan:</span>
                                            <span className="font-bold text-gray-900">{service.estimasi_durasi}</span>
                                        </div>
                                    </div>
                                    
                                    {/* Footer Card: Tombol WhatsApp */}
                                    <div className="p-6 bg-gray-50/70 border-t border-gray-100">
                                        <a
                                            href={getWhatsAppUrl(service)}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center w-full bg-forest hover:bg-[#283618] text-cream font-bold py-4 px-6 rounded-2xl transition-all duration-200 gap-3 shadow-md hover:shadow-lg transform active:scale-[0.99]"
                                        >
                                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086.159.058 1.011.477 1.184.564.173.087.289.13.332.202.043.072.043.419-.101.824z" />
                                            </svg>
                                            <span>
                                                {sumurBorActive 
                                                    ? 'Konsultasi & Pesan Sumur Bor' 
                                                    : nikelActive 
                                                    ? 'Konsultasi Proyek Tambang' 
                                                    : 'Konsultasi via WhatsApp'}
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <div className="col-span-full text-center py-16 bg-white rounded-3xl border border-gray-100 shadow-sm">
                            <p className="text-gray-500 font-medium">Belum ada layanan yang tersedia saat ini.</p>
                        </div>
                    )}
                </div>
            </main>
        </MainLayout>
    );
}
