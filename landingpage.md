Bertindaklah sebagai Senior Fullstack Developer. Tolong buatkan saya struktur Frontend (Layout dan Halaman) untuk Sistem Informasi Jasa Sumur Bor menggunakan React 19, Inertia.js v3, TypeScript, dan Tailwind CSS v4. 

Website ini merupakan sistem informasi untuk PT Aulia Mutiara Drilling. Konsepnya adalah Multi-page SPA (Single Page Application), di mana antar halaman dipisahkan namun perpindahannya instan tanpa reload browser.

TUGAS UTAMA:
Buatkan struktur komponen React dengan spesifikasi berikut:

1. LAYOUT UTAMA (MainLayout.tsx)
- Buat sebuah komponen pembungkus yang memiliki Navbar dan Footer.
- Navbar harus responsif (hamburger menu di mobile) dan memuat menu menggunakan komponen <Link> dari Inertia untuk rute berikut: Beranda, Tentang Kami, Layanan, Galeri Proyek, dan Kontak.
- Footer harus mencantumkan teks copyright dan alamat perusahaan: Jalan Badak, Kelurahan Rahandouna, Kecamatan Poasia, Kota Kendari, Sulawesi Tenggara.

2. HALAMAN PUBLIK (Pages)
Tolong buatkan struktur dasar dari 5 halaman terpisah ini (pastikan semuanya dibungkus oleh MainLayout):
- Welcome.tsx (Beranda): Menampilkan hero section penyambutan, ringkasan profil perusahaan, dan daftar jadwal pengerjaan (kalender statis).
- About.tsx (Tentang Kami): Menampilkan sejarah perusahaan serta visi & misi PT Aulia Mutiara Drilling.
- Services.tsx (Layanan): Menampilkan katalog jasa yang berfokus pada Jasa Sumur Bor dan Eksplorasi Nikel. PENTING: Jangan buat form pemesanan. Cukup buatkan tombol "Pesan Sekarang" menggunakan tag <a> biasa yang mengarahkan pengguna ke tautan WhatsApp (wa.me) admin.
- Gallery.tsx (Pengalaman Kerja): Menampilkan grid foto dokumentasi pekerjaan pengeboran (gunakan gambar placeholder sementara).
- Contact.tsx (Kontak): Menampilkan detail kontak (telepon, email), formulir pesan singkat, dan iframe Google Maps statis.

3. PANDUAN PENGKODEAN:
- Gunakan TypeScript interfaces untuk mendefinisikan tipe data props yang diterima dari Laravel Controller (seperti data layanan dan pengaturan web).
- Gunakan class dari Tailwind CSS v4 untuk styling yang bersih dan modern.
- Tolong jangan berikan kode backend (Laravel) dahulu, fokus hasilkan kode untuk MainLayout.tsx dan kelima halaman React di atas.