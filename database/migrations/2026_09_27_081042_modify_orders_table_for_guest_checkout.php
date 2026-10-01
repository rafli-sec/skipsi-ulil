<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('orders', function (Blueprint $table) {
            $table->renameColumn('no_wa', 'no_hp');
            $table->string('email')->nullable()->after('nama_pelanggan');
            $table->text('alamat')->nullable();
            $table->text('catatan')->nullable();
        });
        
        \Illuminate\Support\Facades\DB::statement("ALTER TABLE orders MODIFY COLUMN status ENUM('Menunggu Verifikasi', 'Diproses', 'Selesai') DEFAULT 'Menunggu Verifikasi'");
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        \Illuminate\Support\Facades\DB::statement("ALTER TABLE orders MODIFY COLUMN status ENUM('Diproses', 'Selesai') DEFAULT 'Diproses'");
        
        Schema::table('orders', function (Blueprint $table) {
            $table->renameColumn('no_hp', 'no_wa');
            $table->dropColumn(['email', 'alamat', 'catatan']);
        });
    }
};
