import { Head, useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import InputError from '@/components/input-error';
import { Star } from 'lucide-react';
import { useState } from 'react';

export default function Review({ order }: { order: any }) {
    const [hoverRating, setHoverRating] = useState(0);

    const { data, setData, post, processing, errors } = useForm({
        rating: 5,
        komentar: '',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post(`/review/${order.id}`);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-muted/40 p-4">
            <Head title="Beri Ulasan" />
            <div className="w-full max-w-md rounded-2xl bg-card p-8 shadow-sm border">
                <div className="mb-6 text-center">
                    <h1 className="text-2xl font-bold tracking-tight">Beri Ulasan</h1>
                    <p className="text-sm text-muted-foreground mt-2">
                        Layanan: <span className="font-medium text-foreground">{order.service?.nama_layanan}</span>
                    </p>
                    <p className="text-sm text-muted-foreground">
                        Atas nama: <span className="font-medium text-foreground">{order.nama_pelanggan}</span>
                    </p>
                </div>

                <form onSubmit={submit} className="space-y-6">
                    <div className="flex flex-col items-center gap-2">
                        <label className="text-sm font-medium">Berapa bintang untuk layanan kami?</label>
                        <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    type="button"
                                    onClick={() => setData('rating', star)}
                                    onMouseEnter={() => setHoverRating(star)}
                                    onMouseLeave={() => setHoverRating(0)}
                                    className="focus:outline-none focus-visible:ring-2 rounded-sm"
                                >
                                    <Star
                                        className={`size-8 transition-colors ${
                                            star <= (hoverRating || data.rating)
                                                ? 'fill-amber-400 text-amber-400'
                                                : 'text-muted-foreground/30'
                                        }`}
                                    />
                                </button>
                            ))}
                        </div>
                        <InputError message={errors.rating} />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="komentar" className="text-sm font-medium">Komentar / Masukan</label>
                        <Textarea
                            id="komentar"
                            value={data.komentar}
                            onChange={(e) => setData('komentar', e.target.value)}
                            placeholder="Ceritakan pengalaman Anda menggunakan jasa kami..."
                            rows={4}
                            className="resize-none"
                        />
                        <InputError message={errors.komentar} />
                    </div>

                    <Button type="submit" className="w-full" disabled={processing}>
                        {processing ? 'Mengirim...' : 'Kirim Ulasan'}
                    </Button>
                </form>
            </div>
        </div>
    );
}
