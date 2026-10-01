<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Service;
use App\Models\Order;
use App\Models\WebSetting;
use App\Models\Review;

class PublicController extends Controller
{
    public function index()
    {
        return Inertia::render('public/welcome', [
            'services' => Service::all(),
            'web_settings' => WebSetting::first(),
            'orders' => Order::select('id', 'tanggal_pengerjaan', 'service_id')->whereNotNull('tanggal_pengerjaan')->get(),
            'reviews' => Review::where('is_displayed', true)->orderBy('created_at', 'desc')->get(),
        ]);
    }

    public function services()
    {
        return Inertia::render('public/Services', [
            'services' => Service::all(),
            'web_settings' => WebSetting::first(),
        ]);
    }
}
