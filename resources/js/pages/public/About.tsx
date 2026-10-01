import { Head } from '@inertiajs/react';
import MainLayout from '@/layouts/MainLayout';

export default function About() {
    return (
        <MainLayout>
            <Head title="Tentang Kami" />

            <div className="bg-blue-50 py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Tentang Kami</h1>
                    <p className="text-lg text-gray-600">
                        Mengenal lebih dekat perjalanan dan visi misi PT Aulia Mutiara Drilling.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto py-16 px-4">
                {/* Sejarah Perusahaan */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-2 border-blue-500 pb-2 inline-block">Sejarah Perusahaan</h2>
                    <div className="prose prose-lg text-gray-600 leading-relaxed max-w-none mt-4">
                        <p>
                            PT Aulia Mutiara Drilling didirikan dengan tujuan untuk memberikan solusi terbaik di bidang jasa pengeboran sumur air tanah dan eksplorasi mineral, khususnya nikel, di wilayah Sulawesi Tenggara dan sekitarnya.
                        </p>
                        <p className="mt-4">
                            Berawal dari komitmen untuk mengatasi masalah ketersediaan air bersih dan mendukung industri pertambangan, kami terus berkembang dan berinvestasi pada sumber daya manusia yang handal serta peralatan berteknologi modern guna menjamin kualitas pekerjaan dan kepuasan pelanggan.
                        </p>
                    </div>
                </section>

                {/* Visi dan Misi */}
                <section>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-blue-500">
                            <h3 className="text-2xl font-bold mb-4 text-blue-800 flex items-center gap-3">
                                <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                                Visi
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Menjadi perusahaan jasa pengeboran dan eksplorasi terkemuka yang terpercaya, inovatif, dan berwawasan lingkungan untuk mendukung pembangunan dan kesejahteraan masyarakat.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-green-500">
                            <h3 className="text-2xl font-bold mb-4 text-green-800 flex items-center gap-3">
                                <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                                Misi
                            </h3>
                            <ul className="list-disc list-outside ml-5 text-gray-600 space-y-3">
                                <li>Memberikan pelayanan dan hasil kerja berkualitas tinggi secara tepat waktu.</li>
                                <li>Mengutamakan standar Keselamatan, Kesehatan Kerja, dan Lingkungan (K3L).</li>
                                <li>Mengembangkan kompetensi tenaga kerja yang handal dan profesional.</li>
                                <li>Menjalin hubungan kemitraan yang baik dan saling menguntungkan dengan seluruh klien.</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
