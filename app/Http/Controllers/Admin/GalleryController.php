<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Gallery;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class GalleryController extends Controller
{
    public function index()
    {
        $galleries = Gallery::latest()->get();
        return Inertia::render('admin/galleries/Index', [
            'galleries' => $galleries
        ]);
    }

    public function create()
    {
        return Inertia::render('admin/galleries/Form');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'project_date' => 'nullable|date',
            'location' => 'nullable|string|max:255',
            'image' => 'required|image|max:2048', // max 2MB
        ]);

        $imagePath = $request->file('image')->store('galleries', 'public');

        Gallery::create([
            'title' => $validated['title'],
            'description' => $validated['description'] ?? '',
            'project_date' => $validated['project_date'] ?? null,
            'location' => $validated['location'] ?? null,
            'image_path' => $imagePath,
        ]);

        return redirect('/admin/galleries');
    }

    public function edit(Gallery $gallery)
    {
        return Inertia::render('admin/galleries/Form', [
            'gallery' => $gallery
        ]);
    }

    public function update(Request $request, Gallery $gallery)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'project_date' => 'nullable|date',
            'location' => 'nullable|string|max:255',
            'image' => 'nullable|image|max:2048',
        ]);

        $data = [
            'title' => $validated['title'],
            'description' => $validated['description'] ?? '',
            'project_date' => $validated['project_date'] ?? null,
            'location' => $validated['location'] ?? null,
        ];

        if ($request->hasFile('image')) {
            // Delete old image
            if ($gallery->image_path && Storage::disk('public')->exists($gallery->image_path)) {
                Storage::disk('public')->delete($gallery->image_path);
            }
            $data['image_path'] = $request->file('image')->store('galleries', 'public');
        }

        $gallery->update($data);

        return redirect('/admin/galleries');
    }

    public function destroy(Gallery $gallery)
    {
        if ($gallery->image_path && Storage::disk('public')->exists($gallery->image_path)) {
            Storage::disk('public')->delete($gallery->image_path);
        }
        $gallery->delete();

        return redirect('/admin/galleries');
    }
}
