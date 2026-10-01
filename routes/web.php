<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\PublicController;

Route::get('/', [PublicController::class, 'index'])->name('home');
Route::inertia('/about', 'public/About')->name('about');
Route::get('/services', [PublicController::class, 'services'])->name('services');
Route::inertia('/gallery', 'public/Gallery')->name('gallery');
Route::inertia('/contact', 'public/Contact')->name('contact');

Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', [\App\Http\Controllers\Admin\DashboardController::class, 'index'])->name('dashboard');
    
    // Pengaturan Website
    Route::get('/admin/web-settings', [\App\Http\Controllers\Admin\WebSettingController::class, 'edit'])->name('admin.web-settings.edit');
    Route::put('/admin/web-settings', [\App\Http\Controllers\Admin\WebSettingController::class, 'update'])->name('admin.web-settings.update');
    
    // Kelola Layanan
    Route::resource('admin/services', \App\Http\Controllers\Admin\ServiceController::class)->except(['show']);

    // Jadwal Pengerjaan (Orders)
    Route::resource('admin/orders', \App\Http\Controllers\Admin\OrderController::class)->except(['show']);
    
    // Galeri Proyek
    Route::resource('admin/galleries', \App\Http\Controllers\Admin\GalleryController::class)->except(['show']);
    
    // Ulasan (Reviews)
    Route::resource('admin/reviews', \App\Http\Controllers\Admin\ReviewController::class)->except(['create', 'store', 'show']);
});

// Route Publik untuk Review (menggunakan order id atau token)
Route::get('/review/{order}', [\App\Http\Controllers\PublicReviewController::class, 'create'])->name('review.create');
Route::post('/review/{order}', [\App\Http\Controllers\PublicReviewController::class, 'store'])->name('review.store');

// Route Publik untuk Checkout
Route::get('/checkout', [\App\Http\Controllers\PublicCheckoutController::class, 'create'])->name('checkout.create');
Route::post('/checkout', [\App\Http\Controllers\PublicCheckoutController::class, 'store'])->name('checkout.store');

require __DIR__.'/settings.php';
