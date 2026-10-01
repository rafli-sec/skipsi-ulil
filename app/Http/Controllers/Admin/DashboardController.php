<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Service;
use App\Models\Order;

class DashboardController extends Controller
{
    public function index()
    {
        $totalServices = Service::count();
        $totalOrders = Order::count();
        $processingOrders = Order::where('status', 'Diproses')->count();
        $completedOrders = Order::where('status', 'Selesai')->count();

        $recentOrders = Order::with('service')
            ->orderBy('created_at', 'desc')
            ->limit(5)
            ->get();

        return Inertia::render('dashboard', [
            'metrics' => [
                'totalServices' => $totalServices,
                'totalOrders' => $totalOrders,
                'processingOrders' => $processingOrders,
                'completedOrders' => $completedOrders,
            ],
            'recentOrders' => $recentOrders,
        ]);
    }
}
