import { Link, router } from '@inertiajs/react';
import { useState } from 'react';

interface MainLayoutProps {
    children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
                                href="/login" 
                                className="flex-shrink-0 w-10 h-10 bg-forest text-white rounded-xl flex items-center justify-center font-bold text-xl shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5"
                                title="Login Admin"
                            >
                                A
                            </Link>
                            <Link href="/" className="font-extrabold text-xl tracking-tight text-gray-900 hover:opacity-80 transition-opacity">
                                PT Aulia Mutiara
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
                            <h3 className="text-lg font-bold mb-4 text-matcha">PT Aulia Mutiara Drilling</h3>
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
                        </div>
                    </div>
                    <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
                        <p>&copy; {new Date().getFullYear()} PT Aulia Mutiara Drilling. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
