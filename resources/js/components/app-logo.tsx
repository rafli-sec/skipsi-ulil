import { usePage } from '@inertiajs/react';

import AppLogoIcon from '@/components/app-logo-icon';

export default function AppLogo() {
    return (
        <>
            <div className="flex aspect-square size-8 items-center justify-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground shadow-sm">
                <span className="text-lg font-black">A</span>
            </div>
            <div className="ml-2 grid flex-1 text-left text-sm">
                <span className="mb-0.5 truncate leading-tight font-bold tracking-wide">
                    PT Aulia Mutiara
                </span>
                <span className="text-[10px] uppercase tracking-widest text-sidebar-foreground/70">
                    Drilling Panel
                </span>
            </div>
        </>
    );
}
