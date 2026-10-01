Bertindaklah sebagai Senior Fullstack Developer. Buatkan saya kerangka awal proyek (Migration MySQL, Model, Controller, dan halaman React/Inertia dasar) untuk Sistem Informasi Jasa Sumur Bor dengan spesifikasi berikut:

1. TECH STACK PROYEK:
- Backend: Laravel 13 (PHP 8.3+), MySQL, Laravel Fortify (Autentikasi), Laravel Wayfinder (Routing).
- Frontend: React 19, Inertia.js v3, TypeScript 5.7+, Tailwind CSS v4, Radix UI & Lucide React.
- Tooling: Vite 8, PHPStan, Laravel Pint.

2. KONTEKS & BATASAN SISTEM (SANGAT PENTING):
- Ini adalah website company profile dinamis dan katalog layanan.
- TIDAK ADA form pemesanan/checkout di dalam website untuk pengunjung publik. Saat pengunjung menekan tombol "Pesan Sekarang" di halaman layanan, mereka akan langsung diarahkan ke link WhatsApp (wa.me) admin menggunakan format pesan otomatis (contoh: "Halo, saya ingin memesan layanan [Nama Layanan]").
- Hanya Admin yang memiliki akun (di-handle oleh Fortify). Pelanggan bertindak murni sebagai Guest.
- Admin memiliki dashboard untuk mengatur teks web, layanan, dan mencatat jadwal pesanan yang sudah "deal" dari WA secara manual ke dalam sistem. Tujuannya agar jadwal pengerjaan tersebut bisa ditampilkan di Kalender Publik di halaman utama.

3. STRUKTUR TABEL DATABASE (MySQL):
- `users`: id, name, email, password (Bawaan Fortify, pastikan untuk Admin saja).
- `services`: id, nama_layanan, deskripsi, estimasi_harga, estimasi_durasi, jumlah_klik (default 0).
- `orders`: id, nama_pelanggan, no_wa, service_id (FK), tanggal_pengerjaan (diinput manual oleh admin untuk kalender publik), status (enum: 'Diproses', 'Selesai').
- `reviews`: id, order_id (FK), nama_reviewer, rating (1-5), komentar, is_displayed (boolean).
- `web_settings`: id, hero_title, about_text, alamat_kontak, no_wa_utama (digunakan sebagai nomor tujuan untuk tombol pesan WA).

4. INSTRUKSI KODE:
- Generate file migration MySQL beserta relasinya (gunakan constrained foreign keys).
- Generate Model Eloquent dengan typed $fillable.
- Generate DatabaseSeeder untuk 1 Akun Admin, 2 Layanan default ("Jasa Sumur Bor" dan "Eksplorasi Nikel"), dan pengaturan web default (pastikan no_wa_utama terisi dengan nomor dummy yang valid).
- Buat PublicController yang mengirim data 'services', pengaturan 'web_settings' (untuk no WA), dan 'orders' (hanya field tanggal_pengerjaan dan service_id untuk kalender) ke komponen React Welcome.tsx via Inertia.
- Berikan contoh struktur komponen Welcome.tsx menggunakan TypeScript dan Tailwind v4 yang menampilkan layanan beserta tombol "Pesan Sekarang" yang me-return tag <a> dengan href ke wa.me.