<?php

namespace App\Http\Controllers;

class QRController extends Controller
{
    public function redirect()
    {
        return redirect()->away('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    }
}
