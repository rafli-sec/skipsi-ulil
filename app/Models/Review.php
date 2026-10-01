<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    protected $fillable = [
        'order_id',
        'nama_reviewer',
        'rating',
        'komentar',
        'is_displayed',
    ];

    protected $casts = [
        'is_displayed' => 'boolean',
    ];

    public function order()
    {
        return $this->belongsTo(Order::class);
    }
}
