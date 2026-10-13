import { Link, router, usePage } from '@inertiajs/react';
import { useState } from 'react';

interface MainLayoutProps {
    children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { auth } = usePage().props as any;

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };



    const navLinks = [
        { name: 'Beranda', href: '/' },
        { name: 'Tentang Kami', href: '/about' },
        { name: 'Layanan', href: '/services' },
        { name: 'Galeri Proyek', href: '/gallery' },
        { name: 'Kontak', href: '/contact' },
    ];

    return (
        <div className="min-h-screen flex flex-col font-sans bg-gray-50 text-gray-900 selection:bg-matcha-light/30">
            {/* Navbar with Glassmorphism */}
            <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100 transition-all duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-20">
                        <div className="flex items-center gap-2 group">
                            <Link 
                                href={auth?.user ? "/dashboard" : "/"} 
                                className="font-extrabold text-xl tracking-tight text-gray-900 hover:opacity-80 transition-opacity"
                            >
                                CV. Aisyah Mutiara Drilling
                            </Link>
                        </div>
                        
                        {/* Desktop Menu */}
                        <div className="hidden md:flex md:items-center md:space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-600 hover:text-matcha-dark px-3 py-2 text-sm font-medium transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="flex items-center md:hidden">
                            <button
                                onClick={toggleMenu}
                                className="text-gray-600 hover:text-gray-900 focus:outline-none"
                            >
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    {isMobileMenuOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-white border-t border-gray-100">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-matcha-dark hover:bg-matcha-light/10"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </nav>

            {/* Main Content */}
            <main className="flex-grow pt-20">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 text-white pt-12 pb-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        <div>
                            <h3 className="text-lg font-bold mb-4 text-matcha">CV. Aisyah Mutiara Drilling</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Penyedia layanan jasa sumur bor dan eksplorasi nikel terpercaya, profesional, dan berpengalaman.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-4">Tautan Cepat</h3>
                            <ul className="space-y-2 text-sm text-gray-400">
                                {navLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="hover:text-white transition-colors">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-4">Alamat Kami</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Jalan Badak,<br />
                                Kelurahan Rahandouna, Kecamatan Poasia,<br />
                                Kota Kendari, Sulawesi Tenggara
                            </p>
                            <div className="mt-4">
                                <h4 className="text-sm font-bold mb-2 text-gray-300">Hubungi Kami</h4>
                                <a
                                    href="https://wa.me/6287890622335"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm text-green-400 hover:text-green-300 transition-colors"
                                >
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086.159.058 1.011.477 1.184.564.173.087.289.13.332.202.043.072.043.419-.101.824z" />
                                    </svg>
                                    087890622335
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
                        <p>&copy; {new Date().getFullYear()} CV. Aisyah Mutiara Drilling. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
