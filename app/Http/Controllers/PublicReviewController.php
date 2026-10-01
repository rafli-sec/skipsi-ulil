<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Review;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PublicReviewController extends Controller
{
    public function create(Order $order)
    {
        // Check if order is 'Selesai' (completed)
        if ($order->status !== 'Selesai') {
            return abort(403, 'Jadwal pengerjaan belum selesai.');
        }

        // Check if a review already exists
        if ($order->review) {
            return Inertia::render('public/ReviewSuccess', [
                'message' => 'Anda sudah memberikan ulasan untuk pesanan ini sebelumnya. Terima kasih!'
            ]);
        }

        return Inertia::render('public/Review', [
            'order' => $order->load('service')
        ]);
    }

    public function store(Request $request, Order $order)
    {
        if ($order->status !== 'Selesai' || $order->review) {
            return abort(403);
        }

        $validated = $request->validate([
            'rating' => 'required|integer|min:1|max:5',
            'komentar' => 'required|string|max:1000',
        ]);

        Review::create([
            'order_id' => $order->id,
            'nama_reviewer' => $order->nama_pelanggan,
            'rating' => $validated['rating'],
            'komentar' => $validated['komentar'],
            'is_displayed' => false, // Default to false until admin approves
        ]);

        return Inertia::render('public/ReviewSuccess', [
            'message' => 'Terima kasih! Ulasan Anda telah berhasil dikirim dan akan ditinjau oleh Admin.'
        ]);
    }
}
