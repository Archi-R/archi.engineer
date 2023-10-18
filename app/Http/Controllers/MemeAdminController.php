<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Inertia\Inertia;
use function Laravel\Prompts\alert;

class MemeAdminController extends Controller
{
    public function login()
    {
        return Inertia::render('MemeAdmin');
    }

    public function dashboard(Request $request)
    {
        $login = $request->input('login');
        $password = $request->input('password');
        if ($login == 'Squirrel' && $password == 'macadamia') {
            return Inertia::render('MemeDashboard');
        } else {
            // Authentification échouée, renvoyer une erreur
            return Inertia::render('MemeAdmin', [
                'error' => 'Login ou mot de passe incorrect'
            ]);
        }
    }
}
