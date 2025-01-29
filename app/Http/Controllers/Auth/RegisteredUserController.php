<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'user_type' => 'required',
            'dob' => 'required',
            'email' => 'required|unique:users',
            'password' => ['required', 'confirmed', 'min:8'],
        ]);
    
        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'user_type' => $request->user_type,
            'dob' => $request->dob,
            'password' => Hash::make($request->password),
        ]);
    
    }
    
}
