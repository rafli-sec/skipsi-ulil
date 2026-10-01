<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Service;
use App\Models\WebSetting;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;

class PublicCheckoutController extends Controller
{
    public function create(Request $request)
    {
        $serviceId = $request->query('service_id');
        $selectedService = null;
        
        if ($serviceId) {
            $selectedService = Service::find($serviceId);
        }

        return Inertia::render('public/Checkout', [
            'services' => Service::all(),
            'selectedServiceId' => $selectedService ? $selectedService->id : null,
            'web_settings' => WebSetting::first(),
            'flash' => [
                'success' => session('success')
            ]
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nama_pelanggan' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'no_hp' => 'required|string|max:20',
            'service_id' => 'required|exists:services,id',
            'alamat' => 'required|string',
            'catatan' => 'nullable|string',
        ]);

        // Anti-spam validation
        $existingOrder = Order::where(function ($query) use ($validated) {
            $query->where('email', $validated['email'])
                  ->orWhere('no_hp', $validated['no_hp']);
        })->where('status', 'Menunggu Verifikasi')->first();

        if ($existingOrder) {
            throw ValidationException::withMessages([
                'email' => 'Maaf, Anda masih memiliki pesanan yang sedang menunggu verifikasi. Silakan tunggu admin memproses pesanan Anda sebelumnya.',
                'no_hp' => 'Maaf, Anda masih memiliki pesanan yang sedang menunggu verifikasi. Silakan tunggu admin memproses pesanan Anda sebelumnya.',
            ]);
        }

        $validated['status'] = 'Menunggu Verifikasi';
        
        Order::create($validated);

        // Redirect back to checkout to display the success message handled in Checkout.tsx
        return redirect()->route('checkout.create')->with('success', 'Pesanan Anda berhasil dikirim dan sedang menunggu verifikasi Admin. Admin kami akan menghubungi Anda melalui WhatsApp.');
    }
}
