<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class WebSetting extends Model
{
    protected $fillable = [
        'hero_title',
        'hero_image_path',
        'hero_image_2_path',
        'hero_image_3_path',
        'about_text',
        'alamat_kontak',
        'no_wa_utama',
    ];
}
