import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

export default function ReviewSuccess({ message }: { message: string }) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-muted/40 p-4">
            <Head title="Ulasan Diterima" />
            <div className="w-full max-w-md rounded-2xl bg-card p-8 shadow-sm border text-center">
                <CheckCircle2 className="mx-auto size-16 text-emerald-500 mb-6" />
                <h1 className="text-2xl font-bold tracking-tight mb-2">Terima Kasih!</h1>
                <p className="text-muted-foreground mb-8">
                    {message}
                </p>
                <Button asChild className="w-full">
                    <Link href="/">Kembali ke Beranda</Link>
                </Button>
            </div>
        </div>
    );
}
