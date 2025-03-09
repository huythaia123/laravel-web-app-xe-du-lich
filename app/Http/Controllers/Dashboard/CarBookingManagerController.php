<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\BookCar;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class CarBookingManagerController extends Controller
{
    public function ListCarBooking()
    {
        $bookCar = BookCar::all();
        Log::info($bookCar);
        return Inertia::render('CarBookingManager', ['listBookCar' => $bookCar]);
    }
}
