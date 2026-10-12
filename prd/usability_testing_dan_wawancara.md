# PANDUAN USABILITY TESTING & INSTRUMEN WAWANCARA (10 PERTANYAAN)
## Sistem Informasi Jasa Sumur Bor & Eksplorasi (CV. Aisyah Mutiara Drilling)

> **Dokumen Pengujian Pengguna & Pengelola untuk Bab IV Skripsi / Naskah Jurnal Ilmiah**  
> *Karakteristik Sistem:*  
> 1. Pengunjung publik murni sebagai Tamu (*Guest*) dan **tidak ada formulir checkout di web**. Pemesanan dilakukan dengan menekan tombol **"Pesan Sekarang"** yang langsung membuka aplikasi **WhatsApp resmi (wa.me)** dengan format teks pesanan otomatis.  
> 2. Admin mencatat pesanan yang sudah *deal* dari WhatsApp ke dalam Dashboard secara manual agar tanggal pengerjaan tampil di Kalender Publik.

---

## 1. METODOLOGI & PARAMETER PENGUJIAN

### 1.1 Tujuan Pengujian
1. Mengukur tingkat kemudahan (*usability*), kejelasan informasi, dan kenyamanan pemesanan langsung via WhatsApp bagi calon pelanggan.
2. Mengukur efektivitas dashboard admin dalam membantu staf CV. Aisyah Mutiara Drilling mengelola profil website, katalog layanan, arsip pesanan, kalender jadwal, galeri, dan ulasan.
3. Menghimpun data kuantitatif (skor skala Likert 1-5) dan data kualitatif (wawancara terbuka) untuk keperluan **Bab IV Hasil dan Pembahasan Skripsi**.

### 1.2 Parameter Usability & Skala Pengukuran
Pengujian menggunakan instrumen **10 Pertanyaan Inti** untuk masing-masing kelompok pengguna:
- **Pertanyaan 1 s/d 9 (Kuantitatif):** Menggunakan Skala Likert 1 s/d 5 (1 = Sangat Tidak Setuju, 2 = Tidak Setuju, 3 = Netral, 4 = Setuju, 5 = Sangat Setuju).
- **Pertanyaan 10 (Kualitatif / Wawancara):** Berupa pertanyaan terbuka (*open-ended question*) untuk menggali kendala nyata (*pain points*) dan saran pengembangan.

---

## 2. INSTRUMEN PENGUJIAN 1: PENGGUNA / PELANGGAN PUBLIK (10 PERTANYAAN)

### Skenario Uji Coba Pengguna (Task-Based Scenario)
Sebelum menjawab Google Form, responden diminta mencoba sistem dengan tugas singkat:
1. **Membuka website:** Menjelajahi halaman beranda, profil perusahaan, dan alamat kontak kantor.
2. **Melihat layanan:** Membuka menu Layanan untuk melihat nama layanan, estimasi harga, dan estimasi durasi.
3. **Menguji tombol pesan WhatsApp:** Menekan tombol "Pesan Sekarang" dan memastikan sistem mengarahkan ke link `wa.me` dengan teks otomatis (contoh: *"Halo, saya ingin memesan layanan Jasa Sumur Bor"*).
4. **Melihat kalender & portofolio:** Melihat jadwal pengerjaan di kalender publik dan melihat foto di halaman Galeri.

---

### Tabel 10 Pertanyaan Pengguna Publik (Untuk Google Form)

| No | Parameter Pengujian | Rumusan Pertanyaan di Google Form | Tipe Input Google Form | Skala / Opsi |
| :---: | :--- | :--- | :--- | :--- |
| **1** | *Learnability & Info Clarity* | Informasi profil perusahaan, alamat kantor, dan kontak WhatsApp sangat mudah ditemukan dan dibaca dengan jelas di halaman utama. | Skala Linier (*Linear Scale*) | 1 (Sangat Tidak Setuju) – 5 (Sangat Setuju) |
| **2** | *Information Transparency* | Katalog layanan menyajikan deskripsi pekerjaan, estimasi harga, dan estimasi durasi pengerjaan sumur bor secara transparan dan mudah dipahami. | Skala Linier (*Linear Scale*) | 1 (Sangat Tidak Setuju) – 5 (Sangat Setuju) |
| **3** | *Efficiency (Direct WhatsApp CTA)* | Tombol "Pesan Sekarang" yang langsung membuka WhatsApp admin beserta pesan teks otomatis terasa praktis dan memudahkan pemesanan tanpa repot mengisi formulir panjang. | Skala Linier (*Linear Scale*) | 1 (Sangat Tidak Setuju) – 5 (Sangat Setuju) |
| **4** | *Schedule Feature Utility* | Tampilan jadwal pengerjaan proyek di halaman depan membantu Anda mengetahui antrean tanggal pengerjaan yang tersedia secara terbuka. | Skala Linier (*Linear Scale*) | 1 (Sangat Tidak Setuju) – 5 (Sangat Setuju) |
| **5** | *User Trust & Credibility* | Foto dokumentasi pengerjaan di Galeri dan testimoni ulasan pelanggan yang ditampilkan meningkatkan rasa percaya Anda terhadap kualitas jasa perusahaan. | Skala Linier (*Linear Scale*) | 1 (Sangat Tidak Setuju) – 5 (Sangat Setuju) |
| **6** | *Visual Aesthetics (UI)* | Desain antarmuka website (perpaduan warna, banner gambar slider, dan tata letak tulisan) terlihat modern, rapi, dan menarik. | Skala Linier (*Linear Scale*) | 1 (Sangat Tidak Setuju) – 5 (Sangat Setuju) |
| **7** | *Responsiveness & Navigation* | Perpindahan antar halaman (Beranda, Layanan, Galeri, Kontak) terasa responsif, cepat, dan tombol navigasi berfungsi lancar. | Skala Linier (*Linear Scale*) | 1 (Sangat Tidak Setuju) – 5 (Sangat Setuju) |
| **8** | *Ease of Use & Self-Sufficiency* | Saya dapat menjelajahi seluruh isi website dan mengerti cara memesan jasa sumur bor tanpa memerlukan bantuan atau instruksi dari orang lain. | Skala Linier (*Linear Scale*) | 1 (Sangat Tidak Setuju) – 5 (Sangat Setuju) |
| **9** | *Overall Satisfaction* | Secara keseluruhan, saya merasa puas dengan pengalaman menggunakan website ini dan berminat menggunakannya jika membutuhkan jasa pengeboran. | Skala Linier (*Linear Scale*) | 1 (Sangat Tidak Setuju) – 5 (Sangat Setuju) |
| **10** | *Qualitative Feedback (Wawancara)* | Kendala apa yang Anda rasakan saat mencoba website ini, dan apa saran Anda untuk peningkatan website ini ke depannya? | Paragraf (*Paragraph*) | Isian Bebas / Teks Panjang |

---

## 3. INSTRUMEN PENGUJIAN 2: PENGELOLA / ADMIN (10 PERTANYAAN)

### Skenario Uji Coba Pengelola (Task-Based Scenario)
Sebelum menjawab Google Form, staf pengelola mencoba pengoperasian Dashboard Admin:
1. **Login & Dashboard:** Masuk ke sistem admin dan mengecek statistik di halaman dashboard.
2. **Web Settings:** Mengubah judul profil, teks perusahaan, nomor WhatsApp tujuan, atau banner carousel.
3. **Kelola Layanan:** Menambah atau mengubah harga/durasi pada katalog layanan.
4. **Catat Pesanan dari WA:** Memasukkan data pesanan baru yang telah disepakati dari WhatsApp dan menetapkan tanggal pengerjaan lapangan.
5. **Cek Kalender:** Memastikan tanggal pesanan yang berstatus "Diproses" otomatis muncul pada kalender publik.
6. **Galeri & Ulasan:** Mengunggah foto dokumentasi kerja dan mengatur tombol toggle tampil/sembunyi ulasan.

---

### Tabel 10 Pertanyaan Pengelola / Admin (Untuk Google Form)

| No | Parameter Pengujian | Rumusan Pertanyaan di Google Form | Tipe Input Google Form | Skala / Opsi |
| :---: | :--- | :--- | :--- | :--- |
| **1** | *Authentication & Dashboard Clarity* | Proses login admin mudah diakses dan ringkasan data statistik di halaman beranda dashboard dapat dipahami dengan cepat. | Skala Linier (*Linear Scale*) | 1 (Sangat Tidak Setuju) – 5 (Sangat Setuju) |
| **2** | *CMS Web Settings Flexibility* | Menu Pengaturan Web memudahkan admin dalam memperbarui teks profil, nomor WhatsApp pemesanan, dan mengganti gambar banner slider tanpa kendala. | Skala Linier (*Linear Scale*) | 1 (Sangat Tidak Setuju) – 5 (Sangat Setuju) |
| **3** | *Service Management Usability* | Fitur untuk menambah, memperbarui harga/durasi, dan menghapus katalog layanan jasa sumur bor mudah digunakan. | Skala Linier (*Linear Scale*) | 1 (Sangat Tidak Setuju) – 5 (Sangat Setuju) |
| **4** | *Order Entry Workflow* | Alur penginputan data pesanan yang telah disepakati (*deal*) dari WhatsApp pelanggan ke dalam sistem berjalan lancar dan praktis. | Skala Linier (*Linear Scale*) | 1 (Sangat Tidak Setuju) – 5 (Sangat Setuju) |
| **5** | *Schedule Coordination Utility* | Fitur penetapan tanggal kerja yang otomatis tersinkronisasi ke kalender publik sangat membantu koordinasi pengerjaan dan mencegah jadwal bentrok. | Skala Linier (*Linear Scale*) | 1 (Sangat Tidak Setuju) – 5 (Sangat Setuju) |
| **6** | *Portfolio Media Management* | Proses pengunggahan foto dokumentasi pengerjaan lapangan ke halaman Galeri sangat mudah dan tersusun rapi. | Skala Linier (*Linear Scale*) | 1 (Sangat Tidak Setuju) – 5 (Sangat Setuju) |
| **7** | *Review Moderation Control* | Fitur tombol pengalih (*toggle*) memudahkan admin menyaring dan mengontrol ulasan pelanggan yang layak dipublikasikan ke halaman utama. | Skala Linier (*Linear Scale*) | 1 (Sangat Tidak Setuju) – 5 (Sangat Setuju) |
| **8** | *Operational Time Efficiency* | Penggunaan sistem ini terbukti menghemat waktu dan mempermudah arsip pesanan jika dibandingkan pencatatan manual di buku/catatan fisik sebelumnya. | Skala Linier (*Linear Scale*) | 1 (Sangat Tidak Setuju) – 5 (Sangat Setuju) |
| **9** | *Staff Self-Sufficiency* | Admin merasa mandiri dan percaya diri mengoperasikan seluruh menu pada dashboard tanpa perlu bergantung pada bantuan teknis pembuat website. | Skala Linier (*Linear Scale*) | 1 (Sangat Tidak Setuju) – 5 (Sangat Setuju) |
| **10** | *Qualitative Feedback (Wawancara)* | Apa kendala yang masih ditemui saat mengelola data, dan fitur tambahan apa yang paling dibutuhkan perusahaan untuk pengembangan ke depan? | Paragraf (*Paragraph*) | Isian Bebas / Teks Panjang |

---

## 4. METODE ANALISIS & REKAPITULASI DATA UNTUK BAB IV SKRIPSI

### 4.1 Rumus Perhitungan Persentase Kelayakan / Kepuasan (Skala Likert)
Data dari pertanyaan nomor 1 s/d 9 dianalisis menggunakan rumus persentase kelayakan:
$$P = \frac{\sum X}{\sum X_{\text{maksimal}}} \times 100\%$$
- $\sum X$ = Total skor riil yang diperoleh dari seluruh responden
- $\sum X_{\text{maksimal}}$ = Jumlah responden $\times$ Skor tertinggi (5) $\times$ Jumlah butir pertanyaan (9)

### 4.2 Kriteria Interpretasi Skor Kelayakan (Arikunto / Riduwan)
| Rentang Persentase (%) | Kategori Kelayakan / Usability |
| :---: | :---: |
| **81% – 100%** | **Sangat Baik / Sangat Layak** |
| **61% – 80%** | **Baik / Layak** |
| **41% – 60%** | **Cukup / Cukup Layak** |
| **21% – 40%** | **Kurang Baik / Kurang Layak** |
| **0% – 20%** | **Sangat Tidak Baik / Tidak Layak** |

---

### 4.3 Template Tabel Rekapitulasi Data Hasil Uji di Bab IV Skripsi

#### Tabel Rekapitulasi Penilaian Pengguna Publik (Pelanggan)
| No Responden | P1 | P2 | P3 (WA CTA) | P4 | P5 | P6 | P7 | P8 | P9 | Total Skor (Max: 45) | Persentase (%) | Kategori |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| R1 | 5 | 4 | 5 | 4 | 5 | 5 | 4 | 5 | 5 | 42 | 93.3% | Sangat Baik |
| R2 | 4 | 5 | 5 | 4 | 4 | 4 | 5 | 4 | 4 | 39 | 86.7% | Sangat Baik |
| ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... |
| **Rata-rata** | **...** | **...** | **...** | **...** | **...** | **...** | **...** | **...** | **...** | **...** | **...%** | **Sangat Baik** |

---
*Dokumen ini diperbarui khusus untuk struktur sistem tanpa form checkout dengan pemesanan langsung WhatsApp.*
