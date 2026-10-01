# Dokumentasi Sistem: Website Profil & Manajemen Jasa Sumur Bor (PT Aulia Mutiara Drilling)

Sistem ini dirancang menggunakan arsitektur modern SPA (*Single Page Application*) dengan *stack* teknologi **Laravel (Backend)** dan **React.js + Inertia.js (Frontend)**, serta *styling* menggunakan **Tailwind CSS v4**. Sistem terbagi menjadi dua bagian utama: **Halaman Publik (Landing Page)** untuk pelanggan dan **Dashboard Admin** untuk pengelolaan konten.

---

## 1. Sistem Autentikasi & Keamanan (Authentication System)
- **Single Admin Account**: Sistem bersifat tertutup. Fitur registrasi (pembuatan akun) dan verifikasi email dimatikan secara *hardcode* di *backend*. Hanya pemilik sistem (Admin) yang memiliki hak akses (*login*).
- **Custom Login Layout**: Halaman login menggunakan desain *Split Layout* premium dua kolom, di mana satu sisi difokuskan untuk formulir, dan sisi lain menampilkan visual perusahaan.
- **Hidden Access (Easter Egg)**: Akses menuju halaman login disembunyikan dari menu publik biasa, dan hanya dapat diakses dengan mengeklik logo inisial perusahaan pada *navbar*.

---

## 2. Dashboard Admin (Panel Manajemen)
Dashboard admin berfungsi sebagai *Content Management System (CMS)* untuk mengontrol seluruh data yang tampil di halaman publik secara dinamis (*real-time*).

### A. Pengaturan Website (Web Settings)
- **Tujuan**: Memodifikasi teks dan gambar identitas utama di halaman beranda tanpa perlu mengubah kode sumber (*source code*).
- **Fitur**:
  - Mengubah Judul Utama (Hero Title).
  - Mengubah Teks Profil / Tentang Perusahaan.
  - Mengubah Alamat Kontak & Nomor WhatsApp Utama.
  - **Manajemen Hero Carousel**: Admin dapat mengunggah hingga 3 gambar berbeda yang akan diputar otomatis (*slider*) pada bagian paling atas halaman beranda. Dilengkapi dengan sistem pratinjau (*preview*) gambar dan auto-hapus gambar lama dari *server storage* untuk menghemat memori.

### B. Kelola Layanan (Service Management)
- **Tujuan**: Mengatur katalog jasa yang ditawarkan (contoh: Pengeboran Air Tanah, Eksplorasi Nikel).
- **Fitur**: CRUD (Create, Read, Update, Delete) data layanan meliputi Nama Layanan, Estimasi Harga, Estimasi Durasi, dan Deskripsi detail.

### C. Jadwal Pengerjaan & Pesanan (Order Management)
- **Tujuan**: Mengelola pesanan yang masuk dari *Guest Checkout* publik.
- **Fitur**:
  - Pencatatan Nama Pelanggan, Email, Nomor WA, Layanan yang dipilih, Alamat, Catatan, dan Tanggal Pengerjaan.
  - **Sistem Status**: Terdapat status **"Menunggu Verifikasi"**, **"Diproses"**, dan **"Selesai"**.
  - Tanggal pengerjaan dan ID Layanan yang ada di tabel ini (kecuali yang berstatus "Menunggu Verifikasi") akan dipublikasikan secara otomatis ke halaman publik sebagai "Transparansi Jadwal" (dengan menyamarkan data pribadi pelanggan untuk alasan privasi).

### D. Galeri Proyek (Project Gallery)
- **Tujuan**: Mengelola foto dokumentasi hasil kerja di lapangan sebagai portofolio.
- **Fitur**:
  - Unggah gambar dengan *preview*.
  - Penyertaan metadata opsional: Judul Foto, Tanggal Proyek, Lokasi Proyek, dan Deskripsi.
  - Ditampilkan dalam format *Grid* yang rapi di menu admin.

### E. Ulasan Pelanggan (Review Moderation)
- **Tujuan**: Sistem moderasi (*Gatekeeping*) testimoni pelanggan.
- **Fitur**:
  - Menampilkan daftar semua ulasan yang dikirim oleh pelanggan.
  - **Fitur Toggle Tampil**: Admin memiliki kontrol penuh (*is_displayed*) untuk menyembunyikan atau menampilkan ulasan tertentu di halaman Testimoni Publik. 

---

## 3. Halaman Publik (Landing Page) & Transaksi
Halaman interaktif yang diakses oleh calon pelanggan. Seluruh data di halaman ini ditarik secara dinamis dari database yang dikelola Admin.

### A. Fitur Utama Halaman Beranda (Welcome Page)
- **Dynamic Hero Carousel**: Slider gambar raksasa di bagian atas yang berganti otomatis setiap 5 detik (data dari Web Settings).
- **Company Profile (Highlight)**: Menampilkan teks "Tentang Perusahaan" dan visual pengalaman perusahaan (data dari Web Settings).
- **Katalog Layanan Unggulan**: Menampilkan daftar layanan yang dibuat admin.
- **Transparansi Jadwal (Live Schedule)**: Menampilkan daftar antrean proyek yang sedang berjalan (Data dari *Jadwal Pengerjaan* Admin).
- **Testimoni Terverifikasi**: Menampilkan *rating* (Bintang 1-5) dan komentar dari pelanggan yang telah dikurasi / diizinkan tampil oleh Admin.

### B. Guest Checkout & Anti-Spam (Sistem Pemesanan)
- **Tujuan**: Fasilitas bagi pelanggan tamu (tanpa akun) untuk memesan layanan secara formal melalui sistem (tidak lagi langsung via WhatsApp).
- **Alur Kerja**:
  1. Pelanggan memilih layanan dan menekan "Pesan Sekarang".
  2. Pelanggan diarahkan ke `/checkout` dan mengisi form (Nama, Email, HP, Alamat).
  3. **Anti-Spam Validation (Backend)**: Sistem memeriksa tabel `orders`. Jika terdapat `email` ATAU `no_hp` yang sama dan masih berstatus `"Menunggu Verifikasi"`, sistem menolak permintaan dan memunculkan *Alert Error* agar pelanggan menunggu pesanan lamanya diproses terlebih dahulu.
  4. Jika lolos validasi, pesanan masuk ke database dengan status `"Menunggu Verifikasi"`. Admin dapat melihatnya di Dashboard dan menghubungi klien.

### C. Portal Ulasan Publik (Public Review Link)
- **Tujuan**: Wadah bagi pelanggan untuk memberikan *rating*.
- **Alur Kerja (Workflow)**:
  1. Setelah pekerjaan di lapangan selesai, Admin mengubah status Jadwal Pengerjaan menjadi **"Selesai"**.
  2. Pelanggan diberikan tautan unik berbasis ID Pesanan (contoh: `/review/1`).
  3. **Validasi Pintar**: Sistem akan menolak jika pelanggan mengakses tautan saat status belum "Selesai", atau jika pelanggan sudah pernah mengirim ulasan sebelumnya.
  4. Pelanggan mengisi Bintang (1-5) dan komentar, yang akan masuk ke tahap moderasi Admin.
