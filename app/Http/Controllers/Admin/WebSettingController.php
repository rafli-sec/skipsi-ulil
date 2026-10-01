<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\WebSetting;

class WebSettingController extends Controller
{
    public function edit()
    {
        $settings = WebSetting::first() ?? new WebSetting();

        return Inertia::render('admin/web-settings/Edit', [
            'settings' => $settings
        ]);
    }

    public function update(Request $request)
    {
        $validated = $request->validate([
            'hero_title' => 'required|string|max:255',
            'about_text' => 'required|string',
            'alamat_kontak' => 'required|string',
            'no_wa_utama' => 'required|string|max:20',
            'hero_image' => 'nullable|image|max:2048',
            'hero_image_2' => 'nullable|image|max:2048',
            'hero_image_3' => 'nullable|image|max:2048',
        ]);

        $settings = WebSetting::first();
        
        $data = [
            'hero_title' => $validated['hero_title'],
            'about_text' => $validated['about_text'],
            'alamat_kontak' => $validated['alamat_kontak'],
            'no_wa_utama' => $validated['no_wa_utama'],
        ];

        if ($request->hasFile('hero_image')) {
            if ($settings && $settings->hero_image_path && \Illuminate\Support\Facades\Storage::disk('public')->exists($settings->hero_image_path)) {
                \Illuminate\Support\Facades\Storage::disk('public')->delete($settings->hero_image_path);
            }
            $data['hero_image_path'] = $request->file('hero_image')->store('web_settings', 'public');
        }

        if ($request->hasFile('hero_image_2')) {
            if ($settings && $settings->hero_image_2_path && \Illuminate\Support\Facades\Storage::disk('public')->exists($settings->hero_image_2_path)) {
                \Illuminate\Support\Facades\Storage::disk('public')->delete($settings->hero_image_2_path);
            }
            $data['hero_image_2_path'] = $request->file('hero_image_2')->store('web_settings', 'public');
        }

        if ($request->hasFile('hero_image_3')) {
            if ($settings && $settings->hero_image_3_path && \Illuminate\Support\Facades\Storage::disk('public')->exists($settings->hero_image_3_path)) {
                \Illuminate\Support\Facades\Storage::disk('public')->delete($settings->hero_image_3_path);
            }
            $data['hero_image_3_path'] = $request->file('hero_image_3')->store('web_settings', 'public');
        }

        if ($settings) {
            $settings->update($data);
        } else {
            WebSetting::create($data);
        }

        return redirect()->back();
    }
}
