import { Head, useForm, router } from '@inertiajs/react';
import { dashboard } from '@/routes';
import { Button } from '@/components/ui/button';
import { Trash2, Star, Eye, EyeOff } from 'lucide-react';

interface Review {
    id: number;
    nama_reviewer: string;
    rating: number;
    komentar: string;
    is_displayed: boolean;
    order: {
        id: number;
        service: {
            nama_layanan: string;
        }
    }
}

export default function Index({ reviews }: { reviews: Review[] }) {
    const { delete: destroy } = useForm();

    const handleDelete = (id: number) => {
        if (confirm('Yakin ingin menghapus ulasan ini?')) {
            destroy(`/admin/reviews/${id}`);
        }
    };

    const toggleDisplay = (review: Review) => {
        router.put(`/admin/reviews/${review.id}`, {
            is_displayed: !review.is_displayed,
        });
    };

    return (
        <>
            <Head title="Ulasan Pelanggan" />
            <div className="flex h-full flex-1 flex-col gap-6 p-4 md:p-6 lg:p-8">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight">Ulasan Pelanggan</h2>
                        <p className="text-muted-foreground">Kelola testimoni dan pilih mana yang akan tampil di halaman publik.</p>
                    </div>
                </div>

                <div className="flex-1 rounded-xl border border-sidebar-border bg-card shadow-sm">
                    <div className="relative w-full overflow-auto">
                        <table className="w-full caption-bottom text-sm">
                            <thead className="[&_tr]:border-b">
                                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Pelanggan (Layanan)</th>
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Rating & Komentar</th>
                                    <th className="h-12 px-4 text-center align-middle font-medium text-muted-foreground">Status Tampil</th>
                                    <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="[&_tr:last-child]:border-0">
                                {reviews.length > 0 ? (
                                    reviews.map((review) => (
                                        <tr key={review.id} className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                            <td className="p-4 align-middle font-medium">
                                                {review.nama_reviewer}
                                                <div className="mt-1 text-xs font-normal text-muted-foreground">
                                                    {review.order?.service?.nama_layanan || '-'}
                                                </div>
                                            </td>
                                            <td className="p-4 align-middle">
                                                <div className="flex items-center gap-1 mb-1">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star 
                                                            key={i} 
                                                            className={`size-3 ${i < review.rating ? 'fill-amber-400 text-amber-400' : 'text-muted-foreground/30'}`} 
                                                        />
                                                    ))}
                                                </div>
                                                <p className="text-sm line-clamp-2 max-w-[300px]">{review.komentar}</p>
                                            </td>
                                            <td className="p-4 text-center align-middle">
                                                <Button 
                                                    variant={review.is_displayed ? "default" : "outline"}
                                                    size="sm"
                                                    onClick={() => toggleDisplay(review)}
                                                    className={review.is_displayed ? "bg-emerald-600 hover:bg-emerald-700 text-white" : ""}
                                                >
                                                    {review.is_displayed ? (
                                                        <><Eye className="size-4 mr-2" /> Ditampilkan</>
                                                    ) : (
                                                        <><EyeOff className="size-4 mr-2" /> Disembunyikan</>
                                                    )}
                                                </Button>
                                            </td>
                                            <td className="p-4 text-right align-middle">
                                                <Button
                                                    variant="outline"
                                                    size="icon"
                                                    onClick={() => handleDelete(review.id)}
                                                >
                                                    <Trash2 className="size-4 text-destructive" />
                                                </Button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={4} className="p-4 text-center align-middle text-muted-foreground">
                                            Belum ada ulasan.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
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
            title: 'Ulasan Pelanggan',
            href: '/admin/reviews',
        },
    ],
};
