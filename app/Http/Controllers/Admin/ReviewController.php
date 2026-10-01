<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Review;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ReviewController extends Controller
{
    public function index()
    {
        $reviews = Review::with('order.service')->latest()->get();
        return Inertia::render('admin/reviews/Index', [
            'reviews' => $reviews
        ]);
    }

    public function update(Request $request, Review $review)
    {
        $validated = $request->validate([
            'is_displayed' => 'required|boolean',
        ]);

        $review->update($validated);

        return redirect()->back();
    }

    public function destroy(Review $review)
    {
        $review->delete();

        return redirect()->back();
    }
}
