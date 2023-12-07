<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class QRController extends Controller
{
    public function redirect()
    {
        return view('qr', ['lien' => $this->linker()]);
    }

    private function linker()
    {
        return 'http://blod34.archi.engineer/';
    }
}
