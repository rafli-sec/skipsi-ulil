import { Head, Link, useForm } from '@inertiajs/react';
import { dashboard } from '@/routes';
import { Button } from '@/components/ui/button';
import { Plus, Edit, Trash2 } from 'lucide-react';

interface Gallery {
    id: number;
    title: string;
    image_path: string;
    description: string;
}

export default function Index({ galleries }: { galleries: Gallery[] }) {
    const { delete: destroy } = useForm();

    const handleDelete = (id: number) => {
        if (confirm('Yakin ingin menghapus foto proyek ini?')) {
            destroy(`/admin/galleries/${id}`);
        }
    };

    return (
        <>
            <Head title="Galeri Proyek" />
            <div className="flex h-full flex-1 flex-col gap-6 p-4 md:p-6 lg:p-8">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight">Galeri Proyek</h2>
                        <p className="text-muted-foreground">Kelola foto-foto dokumentasi hasil kerja.</p>
                    </div>
                    <Button asChild>
                        <Link href="/admin/galleries/create">
                            <Plus className="mr-2 size-4" />
                            Tambah Foto
                        </Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {galleries.length > 0 ? (
                        galleries.map((gallery) => (
                            <div key={gallery.id} className="group relative rounded-xl border border-sidebar-border bg-card shadow-sm overflow-hidden flex flex-col">
                                <div className="aspect-square w-full overflow-hidden bg-muted relative">
                                    <img 
                                        src={`/storage/${gallery.image_path}`} 
                                        alt={gallery.title}
                                        className="h-full w-full object-cover transition-transform group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity group-hover:opacity-100 flex items-center justify-center gap-2">
                                        <Button variant="secondary" size="icon" asChild>
                                            <Link href={`/admin/galleries/${gallery.id}/edit`}>
                                                <Edit className="size-4" />
                                            </Link>
                                        </Button>
                                        <Button variant="destructive" size="icon" onClick={() => handleDelete(gallery.id)}>
                                            <Trash2 className="size-4" />
                                        </Button>
                                    </div>
                                </div>
                                <div className="p-4 flex-1 flex flex-col">
                                    <h3 className="font-semibold text-sm line-clamp-1">{gallery.title}</h3>
                                    
                                    <div className="mt-2 text-xs text-muted-foreground flex flex-col gap-1 mb-2">
                                        {gallery.location && (
                                            <span className="flex items-center gap-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                                                {gallery.location}
                                            </span>
                                        )}
                                        {gallery.project_date && (
                                            <span className="flex items-center gap-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                                                {new Date(gallery.project_date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
                                            </span>
                                        )}
                                    </div>
                                    
                                    <p className="text-xs text-muted-foreground mt-auto line-clamp-2 pt-2 border-t border-border/50">
                                        {gallery.description || 'Tidak ada deskripsi'}
                                    </p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full py-12 text-center text-muted-foreground border rounded-xl border-dashed">
                            Belum ada foto galeri proyek.
                        </div>
                    )}
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
            title: 'Galeri Proyek',
            href: '/admin/galleries',
        },
    ],
};
