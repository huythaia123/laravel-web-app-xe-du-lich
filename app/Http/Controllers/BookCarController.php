<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreBookCarRequest;
use App\Http\Requests\UpdateBookCarRequest;
use App\Models\BookCar;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class BookCarController extends Controller
{
    public function store(StoreBookCarRequest $request)
    {
        $bookCar = BookCar::create([...$request->input()]);

        // Log::info($bookCar);

        return back()->with('success', 'Đặt xe thành công!');
    }
}
