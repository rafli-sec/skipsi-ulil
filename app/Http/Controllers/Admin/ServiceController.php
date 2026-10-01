<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Service;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ServiceController extends Controller
{
    public function index()
    {
        $services = Service::latest()->get();
        return Inertia::render('admin/services/Index', [
            'services' => $services
        ]);
    }

    public function create()
    {
        return Inertia::render('admin/services/Form');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nama_layanan' => 'required|string|max:255',
            'deskripsi' => 'required|string',
            'estimasi_harga' => 'required|numeric|min:0',
            'estimasi_durasi' => 'required|string|max:255',
        ]);

        Service::create($validated);

        return redirect('/admin/services');
    }

    public function edit(Service $service)
    {
        return Inertia::render('admin/services/Form', [
            'service' => $service
        ]);
    }

    public function update(Request $request, Service $service)
    {
        $validated = $request->validate([
            'nama_layanan' => 'required|string|max:255',
            'deskripsi' => 'required|string',
            'estimasi_harga' => 'required|numeric|min:0',
            'estimasi_durasi' => 'required|string|max:255',
        ]);

        $service->update($validated);

        return redirect('/admin/services');
    }

    public function destroy(Service $service)
    {
        $service->delete();

        return redirect('/admin/services');
    }
}
