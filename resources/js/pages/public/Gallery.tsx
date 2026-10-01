import { Head } from '@inertiajs/react';
import MainLayout from '@/layouts/MainLayout';

export default function Gallery() {
    // Array dummy untuk placeholder galeri proyek
    const projects = [
        { id: 1, title: 'Pengeboran Sumur Bor Rumah Tangga', location: 'Kendari' },
        { id: 2, title: 'Eksplorasi Nikel Tahap Awal', location: 'Konawe Utara' },
        { id: 3, title: 'Pembuatan Sumur Bor Industri', location: 'Morowali' },
        { id: 4, title: 'Pengeboran Air Tanah Dalam', location: 'Kolaka' },
        { id: 5, title: 'Survei Geolistrik', location: 'Bombana' },
        { id: 6, title: 'Instalasi Pompa Submersible', location: 'Kendari' },
    ];

    return (
        <MainLayout>
            <Head title="Galeri Proyek" />

            <div className="bg-blue-50 py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Pengalaman Kerja</h1>
                    <p className="text-lg text-gray-600">
                        Dokumentasi dari berbagai proyek yang telah kami selesaikan dengan sukses.
                    </p>
                </div>
            </div>

            <main className="max-w-7xl mx-auto py-16 px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
                            {/* Placeholder Gambar */}
                            <div className="relative h-64 bg-gray-200 overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                    <svg className="w-16 h-16 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div className="absolute inset-0 bg-blue-900 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                            </div>
                            
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                                <div className="flex items-center text-gray-500 text-sm">
                                    <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    Lokasi: {project.location}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </MainLayout>
    );
}
