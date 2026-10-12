import { Link, usePage } from '@inertiajs/react';
import { home } from '@/routes';
import type { AuthLayoutProps } from '@/types';

export default function AuthSplitLayout({
    children,
    title,
    description,
}: AuthLayoutProps) {
    const { name } = usePage().props;

    return (
        <div className="relative grid h-dvh flex-col items-center justify-center px-8 sm:px-0 lg:max-w-none lg:grid-cols-2 lg:px-0">
            <div className="relative hidden h-full flex-col p-10 text-white lg:flex dark:border-r overflow-hidden">
                <div className="absolute inset-0">
                    <img 
                        src="/tim1.jpeg" 
                        alt="Background" 
                        loading="eager"
                        className="w-full h-full object-cover" 
                    />
                    <div className="absolute inset-0 bg-forest/60 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gray-900/40" />
                </div>
                <Link
                    href={home()}
                    className="relative z-20 flex items-center gap-2 text-lg font-bold"
                >
                    <span>CV. Aisyah Mutiara Drilling</span>
                </Link>
                
                <div className="relative z-20 mt-auto">
                    <blockquote className="space-y-2">
                        <p className="text-lg">
                            "Berpengalaman 5+ tahun dalam menyediakan layanan pengeboran air tanah dan eksplorasi nikel dengan standar operasional tinggi bersama tim profesional."
                        </p>
                        <footer className="text-sm text-matcha-light">CV. Aisyah Mutiara Drilling</footer>
                    </blockquote>
                </div>
            </div>
            <div className="w-full lg:p-8">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    <Link
                        href={home()}
                        className="relative z-20 flex items-center justify-center lg:hidden gap-2 font-bold text-xl"
                    >
                        <span>CV. Aisyah Mutiara Drilling</span>
                    </Link>
                    <div className="flex flex-col items-start gap-2 text-left sm:items-center sm:text-center">
                        <h1 className="text-xl font-medium">{title}</h1>
                        <p className="text-sm text-balance text-muted-foreground">
                            {description}
                        </p>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
}
