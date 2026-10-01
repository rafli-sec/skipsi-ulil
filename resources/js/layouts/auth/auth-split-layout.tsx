import { Link, usePage } from '@inertiajs/react';
import AppLogoIcon from '@/components/app-logo-icon';
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
                        src="https://images.unsplash.com/photo-1504307651254-35680f356f58?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
                        alt="Background" 
                        className="w-full h-full object-cover" 
                    />
                    <div className="absolute inset-0 bg-forest/60 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gray-900/40" />
                </div>
                <Link
                    href={home()}
                    className="relative z-20 flex items-center text-lg font-bold"
                >
                    <div className="w-10 h-10 bg-matcha rounded-lg flex items-center justify-center mr-3 shadow-lg">
                        <span className="text-forest text-xl font-black">A</span>
                    </div>
                    {name}
                </Link>
                
                <div className="relative z-20 mt-auto">
                    <blockquote className="space-y-2">
                        <p className="text-lg">
                            "Menyediakan layanan pengeboran air tanah dan eksplorasi nikel terbaik dengan standar operasional yang tinggi dan tim profesional yang berpengalaman."
                        </p>
                        <footer className="text-sm text-matcha-light">PT Aulia Mutiara Drilling</footer>
                    </blockquote>
                </div>
            </div>
            <div className="w-full lg:p-8">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    <Link
                        href={home()}
                        className="relative z-20 flex items-center justify-center lg:hidden font-bold text-xl"
                    >
                        <div className="w-10 h-10 bg-matcha rounded-lg flex items-center justify-center mr-3 shadow-lg">
                            <span className="text-forest text-xl font-black">A</span>
                        </div>
                        {name}
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
