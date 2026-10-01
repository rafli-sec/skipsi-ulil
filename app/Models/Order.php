<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = [
        'nama_pelanggan',
        'email',
        'no_hp',
        'service_id',
        'tanggal_pengerjaan',
        'status',
        'alamat',
        'catatan',
    ];

    protected $casts = [
        'tanggal_pengerjaan' => 'date',
    ];

    public function service()
    {
        return $this->belongsTo(Service::class);
    }

    public function review()
    {
        return $this->hasOne(Review::class);
    }
}
