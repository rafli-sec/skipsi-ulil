import { Head } from '@inertiajs/react';
import MainLayout from '@/layouts/MainLayout';

interface GalleryItem {
    id: number;
    title: string;
    image_path: string;
    description: string | null;
    project_date: string | null;
    location: string | null;
}

export default function Gallery({ galleries }: { galleries: GalleryItem[] }) {
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
                {galleries.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {galleries.map((project) => (
                            <div key={project.id} className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
                                <div className="relative h-64 bg-gray-200 overflow-hidden">
                                    <img
                                        src={`/storage/${project.image_path}`}
                                        alt={project.title}
                                        loading="lazy"
                                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/20 transition-all duration-300"></div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                                    <div className="flex flex-col gap-1 text-gray-500 text-sm">
                                        {project.location && (
                                            <div className="flex items-center">
                                                <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                Lokasi: {project.location}
                                            </div>
                                        )}
                                        {project.project_date && (
                                            <div className="flex items-center">
                                                <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                {new Date(project.project_date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
                                            </div>
                                        )}
                                    </div>
                                    {project.description && (
                                        <p className="mt-3 text-sm text-gray-600 line-clamp-3">{project.description}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="py-16 text-center text-gray-500 border-2 border-dashed border-gray-200 rounded-xl">
                        Belum ada dokumentasi proyek yang ditampilkan.
                    </div>
                )}
            </main>
        </MainLayout>
    );
}
