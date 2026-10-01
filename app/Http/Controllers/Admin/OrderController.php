<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\Service;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrderController extends Controller
{
    public function index()
    {
        $orders = Order::with('service')->latest()->get();
        return Inertia::render('admin/orders/Index', [
            'orders' => $orders
        ]);
    }

    public function create()
    {
        return Inertia::render('admin/orders/Form', [
            'services' => Service::all()
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nama_pelanggan' => 'required|string|max:255',
            'no_hp' => 'required|string|max:20',
            'service_id' => 'required|exists:services,id',
            'tanggal_pengerjaan' => 'nullable|date',
            'status' => 'required|in:Menunggu Verifikasi,Diproses,Selesai',
        ]);

        Order::create($validated);

        return redirect('/admin/orders');
    }

    public function edit(Order $order)
    {
        return Inertia::render('admin/orders/Form', [
            'order' => $order,
            'services' => Service::all()
        ]);
    }

    public function update(Request $request, Order $order)
    {
        $validated = $request->validate([
            'nama_pelanggan' => 'required|string|max:255',
            'no_hp' => 'required|string|max:20',
            'service_id' => 'required|exists:services,id',
            'tanggal_pengerjaan' => 'nullable|date',
            'status' => 'required|in:Menunggu Verifikasi,Diproses,Selesai',
        ]);

        $order->update($validated);

        return redirect('/admin/orders');
    }

    public function destroy(Order $order)
    {
        $order->delete();

        return redirect('/admin/orders');
    }
}
