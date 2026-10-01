import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/layouts/MainLayout';
import { type SharedData } from '@/types';
import { useState, useEffect } from 'react';

interface Order {
    id: number;
    tanggal_pengerjaan: string;
    service_id: number;
}

interface WebSetting {
    id: number;
    hero_title: string;
    hero_image_path: string | null;
    hero_image_2_path: string | null;
    hero_image_3_path: string | null;
    about_text: string;
    no_wa_utama: string;
}

interface Service {
    id: number;
    nama_layanan: string;
    deskripsi: string;
    estimasi_harga: number;
    estimasi_durasi: string;
}

interface Review {
    id: number;
    nama_reviewer: string;
    rating: number;
    komentar: string;
}

interface WelcomeProps extends SharedData {
    web_settings: WebSetting;
    orders: Order[];
    services: Service[];
    reviews: Review[];
}

export default function Welcome({ web_settings, orders, services, reviews }: WelcomeProps) {
    // State for Hero Slider
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        web_settings?.hero_image_path ? `/storage/${web_settings.hero_image_path}` : "https://images.unsplash.com/photo-1541888087425-ce81dfc46928?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
        web_settings?.hero_image_2_path ? `/storage/${web_settings.hero_image_2_path}` : "https://images.unsplash.com/photo-1574347717013-eb1c6bc12052?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
        web_settings?.hero_image_3_path ? `/storage/${web_settings.hero_image_3_path}` : "https://images.unsplash.com/photo-1504307651254-35680f356f58?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000); // Change slide every 5 seconds
        return () => clearInterval(timer);
    }, [slides.length]);



    return (
        <MainLayout>
            <Head title="Beranda" />

            {/* 1. Hero Section with Slider */}
            <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
                {/* Background Slider */}
                {slides.map((slide, index) => (
                    <div 
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <div className="absolute inset-0 bg-forest/60 z-10 mix-blend-multiply"></div> {/* Forest Overlay */}
                        <img 
                            src={slide} 
                            alt={`Slide ${index + 1}`} 
                            className="w-full h-full object-cover transform scale-105 transition-transform duration-[10000ms] ease-out"
                            style={{ transform: index === currentSlide ? 'scale(1.1)' : 'scale(1)' }}
                        />
                    </div>
                ))}

                {/* Hero Content */}
                <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
                    <span className="inline-block py-1 px-4 rounded-full bg-matcha/30 text-cream border border-matcha-light/30 text-sm font-medium tracking-wide mb-6 backdrop-blur-sm">
                        KONTRAKTOR PENGEBORAN SULAWESI TENGGARA
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
                        {web_settings?.hero_title || 'PT Aulia Mutiara Drilling'}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto drop-shadow-md leading-relaxed">
                        Kami ahlinya pengerjaan sumur bor air tanah dan eksplorasi nikel. Didukung tim teknis lapangan yang handal dan armada mesin siap pakai.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/services" className="bg-forest hover:bg-[#283618] text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg hover:-translate-y-1">
                            Lihat Layanan Kami
                        </Link>
                        <Link href="/about" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold py-3 px-8 rounded-xl transition-all hover:-translate-y-1">
                            Profil Perusahaan
                        </Link>
                    </div>
                </div>
                
                {/* Slider Indicators */}
                <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center gap-3">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'w-8 bg-earth' : 'w-2 bg-white/50 hover:bg-white'}`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </section>

            {/* 2. Highlight Perusahaan */}
            <section className="py-24 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-matcha rounded-3xl transform rotate-3 z-0"></div>
                            <img 
                                src="https://images.unsplash.com/photo-1508873699372-7aeab60b44ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                                alt="Tentang Perusahaan" 
                                className="relative z-10 rounded-2xl shadow-xl w-full h-[400px] object-cover"
                            />
                            {/* Floating Badge */}
                            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl z-20 border border-gray-100">
                                <p className="text-4xl font-extrabold text-forest mb-1">10+</p>
                                <p className="text-gray-600 font-medium">Tahun Pengalaman</p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-forest font-bold tracking-wider uppercase text-sm mb-2">Profil Singkat</h2>
                            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">Mitra Terpercaya Proyek Pengeboran Anda</h3>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                {web_settings?.about_text || 'Berbekal jam terbang tinggi di wilayah Sulawesi Tenggara, kami siap membantu penyediaan air bersih hingga tahap awal eksplorasi tambang nikel perusahaan Anda.'}
                            </p>
                            <ul className="space-y-4 mb-8">
                                {[
                                    'Operator mesin bor berpengalaman',
                                    'Armada rig dan kompresor siap jalan',
                                    'Bekerja sesuai standar prosedur keselamatan',
                                    'Anggaran transparan dan bersaing'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                                        <div className="w-6 h-6 rounded-full bg-matcha-light/30 text-forest flex items-center justify-center shrink-0">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Layanan Unggulan */}
            <section className="py-24 px-4 bg-cream border-t border-matcha-light/20">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-forest font-bold tracking-wider uppercase text-sm mb-2">Fokus Utama</h2>
                        <h3 className="text-4xl font-extrabold text-gray-900 mb-6">Layanan Kami</h3>
                        <p className="text-lg text-gray-600">Apapun kondisi medannya, kami siapkan solusi pengeboran yang pas untuk Anda.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {services && services.length > 0 ? (
                            services.slice(0, 4).map((service) => (
                                <div key={service.id} className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col">
                                    <div className="p-8 flex-grow">
                                        <div className="w-16 h-16 bg-matcha/20 text-forest rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-forest group-hover:text-cream transition-all duration-300">
                                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                            </svg>
                                        </div>
                                        <h4 className="text-2xl font-bold text-gray-900 mb-3">{service.nama_layanan}</h4>
                                        <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">{service.deskripsi}</p>
                                    </div>
                                    <div className="px-8 py-6 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                                        <div>
                                            <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Mulai Dari</p>
                                            <p className="text-lg font-bold text-gray-900">Rp {service.estimasi_harga.toLocaleString('id-ID')}</p>
                                        </div>
                                        <Link 
                                            href={`/checkout?service_id=${service.id}`}
                                            className="text-forest font-bold hover:text-earth flex items-center gap-2 group-hover:translate-x-1 transition-transform"
                                        >
                                            Pesan
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                        </Link>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full text-center py-10"><p className="text-gray-500">Data layanan belum tersedia.</p></div>
                        )}
                    </div>
                </div>
            </section>

            {/* 4. Jadwal Pengerjaan (Kalender Statis) */}
            <section className="py-24 px-4 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-matcha blur-3xl opacity-30 z-0"></div>
                
                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                        <div>
                            <h2 className="text-forest font-bold tracking-wider uppercase text-sm mb-2">Transparansi Jadwal</h2>
                            <h3 className="text-4xl font-extrabold text-gray-900">Daftar Antrean Proyek</h3>
                        </div>
                        <p className="text-gray-600 max-w-md">Cek jadwal proyek yang sedang berjalan atau akan segera kami kerjakan.</p>
                    </div>
                    
                    <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-2 md:p-6">
                        {orders && orders.length > 0 ? (
                            <div className="divide-y divide-gray-100">
                                {orders.map((order) => (
                                    <div key={order.id} className="py-6 px-4 md:px-6 flex flex-col sm:flex-row sm:items-center gap-6 hover:bg-gray-50 transition-colors rounded-2xl">
                                        <div className="flex items-center justify-center flex-col bg-forest text-white p-4 rounded-2xl min-w-[100px] shadow-md shadow-forest/20">
                                            <span className="text-xs uppercase font-bold tracking-widest opacity-90">TGL</span>
                                            <span className="text-3xl font-black leading-none my-1">{new Date(order.tanggal_pengerjaan).getDate()}</span>
                                            <span className="text-sm font-semibold">{new Date(order.tanggal_pengerjaan).toLocaleDateString('id-ID', { month: 'short', year: 'numeric' })}</span>
                                        </div>
                                        <div className="flex-grow">
                                            <h4 className="text-xl font-bold text-gray-900 mb-1">Pengerjaan Proyek Layanan #{order.service_id}</h4>
                                            <p className="text-gray-500">Lokasi disamarkan untuk privasi klien.</p>
                                        </div>
                                        <div className="shrink-0">
                                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-green-700 font-semibold text-sm border border-green-100">
                                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                                Telah Terjadwal
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-16 px-4">
                                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                </div>
                                <h4 className="text-lg font-bold text-gray-900 mb-2">Jadwal Masih Kosong</h4>
                                <p className="text-gray-500 max-w-sm mx-auto">Belum ada antrean jadwal pengerjaan proyek yang dipublikasikan saat ini.</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* 5. Testimoni (Reviews) */}
            <section className="py-24 px-4 bg-gray-900 text-white relative overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                    <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-forest/20 blur-[120px]"></div>
                    <div className="absolute top-[60%] -right-[10%] w-[40%] h-[40%] rounded-full bg-matcha-dark/20 blur-[100px]"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-matcha font-bold tracking-wider uppercase text-sm mb-2">Kata Mereka</h2>
                        <h3 className="text-4xl font-extrabold mb-6 text-white">Testimoni Klien</h3>
                        <p className="text-lg text-gray-400">Bukti nyata dari hasil kerja keras tim kami di lapangan.</p>
                    </div>

                    {reviews && reviews.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {reviews.map((review) => (
                                <div key={review.id} className="bg-gray-800/50 backdrop-blur-md rounded-3xl p-8 border border-gray-700/50 hover:bg-gray-800 transition-colors shadow-xl">
                                    <div className="flex text-yellow-400 mb-6 gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className={`w-6 h-6 ${i < review.rating ? 'fill-current' : 'text-gray-600'}`} viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="text-gray-300 text-lg mb-8 leading-relaxed italic">"{review.komentar}"</p>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-forest rounded-full flex items-center justify-center font-bold text-cream text-xl shadow-inner">
                                            {review.nama_reviewer.charAt(0).toUpperCase()}
                                        </div>
                                        <div>
                                            <p className="font-bold text-white text-lg">{review.nama_reviewer}</p>
                                            <p className="text-gray-400 text-sm">Pelanggan Terverifikasi</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12 bg-gray-800/30 rounded-3xl border border-gray-700/50 backdrop-blur-sm max-w-2xl mx-auto">
                            <p className="text-gray-400">Belum ada ulasan yang ditampilkan.</p>
                        </div>
                    )}
                </div>
            </section>
        </MainLayout>
    );
}
