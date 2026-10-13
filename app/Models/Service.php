<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    protected $fillable = [
        'nama_layanan',
        'deskripsi',
        'estimasi_harga',
        'harga_ongkos_kerja',
        'harga_terima_jadi',
        'catatan_harga',
        'estimasi_durasi',
        'jumlah_klik',
    ];

    public function orders()
    {
        return $this->hasMany(Order::class);
    }
}
