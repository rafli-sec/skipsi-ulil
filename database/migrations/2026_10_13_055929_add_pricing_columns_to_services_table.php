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
        Schema::table('services', function (Blueprint $table) {
            $table->string('harga_ongkos_kerja')->nullable()->after('estimasi_harga');
            $table->string('harga_terima_jadi')->nullable()->after('harga_ongkos_kerja');
            $table->text('catatan_harga')->nullable()->after('harga_terima_jadi');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('services', function (Blueprint $table) {
            $table->dropColumn(['harga_ongkos_kerja', 'harga_terima_jadi', 'catatan_harga']);
        });
    }
};
