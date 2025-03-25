<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\BookCar;
// use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class CarBookingManagerController extends Controller
{
    public function ListCarBooking()
    {
        $bookCars = BookCar::orderBy('id', 'desc')->get();

        return Inertia::render('CarBookingManager', ['listBookCar' => $bookCars]);
    }

    public function pageCarBookingEdit($book_car_id)
    {
        $bookCar = BookCar::where('id', $book_car_id)->first();

        return Inertia::render('CarBookingEdit', ['bookCar' => $bookCar]);
    }


    public function deleteById($book_car_id)
    {
        $bookCar = BookCar::where('id', $book_car_id)->firstOrFail();
        $bookCar->delete();

        return back()->with('success', 'Bản ghi đã được xoá!');
    }
}
