<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Admin Account
        User::updateOrCreate(
            ['email' => 'admin@sumurbor.com'],
            [
                'name' => 'Admin Sumur Bor',
                'password' => bcrypt('password'),
            ]
        );

        // Default Services
        \App\Models\Service::create([
            'nama_layanan' => 'Jasa Sumur Bor',
            'deskripsi' => 'Layanan pembuatan sumur bor air tanah untuk kebutuhan rumah tangga dan industri.',
            'estimasi_harga' => 5000000,
            'estimasi_durasi' => '3-5 Hari',
        ]);

        \App\Models\Service::create([
            'nama_layanan' => 'Eksplorasi Nikel',
            'deskripsi' => 'Layanan eksplorasi pertambangan nikel dengan tenaga profesional dan peralatan modern.',
            'estimasi_harga' => 50000000,
            'estimasi_durasi' => '1-3 Bulan',
        ]);

        // Default Web Settings
        \App\Models\WebSetting::create([
            'hero_title' => 'Solusi Terbaik Jasa Sumur Bor & Eksplorasi',
            'about_text' => 'Kami adalah penyedia jasa sumur bor dan eksplorasi nikel profesional dan terpercaya.',
            'alamat_kontak' => 'Jl. Poros, Sulawesi Tenggara',
            'no_wa_utama' => '6281234567890', // Dummy valid WA format
        ]);

        // Dummy Orders
        // $order1 = \App\Models\Order::create([
        //     'nama_pelanggan' => 'Bapak Budi',
        //     'no_wa' => '081234567891',
        //     'service_id' => 1,
        //     'tanggal_pengerjaan' => now()->addDays(2),
        //     'status' => 'Diproses',
        // ]);

        // $order2 = \App\Models\Order::create([
        //     'nama_pelanggan' => 'PT Makmur Jaya',
        //     'no_wa' => '081234567892',
        //     'service_id' => 2,
        //     'tanggal_pengerjaan' => now()->addDays(10),
        //     'status' => 'Diproses',
        // ]);

        // $order3 = \App\Models\Order::create([
        //     'nama_pelanggan' => 'Bapak Andi',
        //     'no_wa' => '081234567893',
        //     'service_id' => 1,
        //     'tanggal_pengerjaan' => now()->subDays(5),
        //     'status' => 'Selesai',
        // ]);

        // Dummy Reviews (Only for completed/existing orders)
        // \App\Models\Review::create([
        //     'order_id' => $order3->id,
        //     'nama_reviewer' => 'Bapak Andi',
        //     'rating' => 5,
        //     'komentar' => 'Pekerjaan sangat cepat dan rapi. Air sumur bor yang dihasilkan sangat bersih dan mengalir deras. Sangat direkomendasikan!',
        //     'is_displayed' => true,
        // ]);

        // \App\Models\Review::create([
        //     'order_id' => $order1->id,
        //     'nama_reviewer' => 'Ibu Siti',
        //     'rating' => 4,
        //     'komentar' => 'Pelayanan ramah, teknisi sangat profesional dalam menjelaskan tahapan pengeboran.',
        //     'is_displayed' => true,
        // ]);

        // \App\Models\Review::create([
        //     'order_id' => $order2->id,
        //     'nama_reviewer' => 'PT Makmur Jaya',
        //     'rating' => 5,
        //     'komentar' => 'Tim eksplorasi sangat tangguh dan berpengalaman. Data yang diberikan sangat akurat.',
        //     'is_displayed' => true, // displayed
        // ]);
        
        // \App\Models\Review::create([
        //     'order_id' => $order1->id,
        //     'nama_reviewer' => 'Hamba Allah',
        //     'rating' => 3,
        //     'komentar' => 'Pekerjaan lumayan, tapi sedikit terlambat dari jadwal.',
        //     'is_displayed' => false, // This shouldn't be displayed
        // ]);
    }
}
