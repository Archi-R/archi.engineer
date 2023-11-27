<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class QRController extends Controller
{
    public function redirect()
    {
        /*
         return Inertia::render('QR', [
            'redirectUrl' => 'https://www.youtube.com/watch?v=OgZzUJud3Q4',
        ]);
        */
        return Inertia::render('Polybottle');
    }
    public function SNS()
    {
        return Inertia::render('StirNSwirl');
    }
}
