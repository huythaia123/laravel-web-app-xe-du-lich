<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreBookCarRequest;
use App\Http\Requests\UpdateBookCarRequest;
use App\Models\BookCar;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class BookCarController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    // public function index()
    // {
    //     //
    // }

    /**
     * Show the form for creating a new resource.
     */
    // public function create()
    // {
    //     //
    // }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBookCarRequest $request)
    {
        $bookCar = BookCar::create($request->input());
        // Log::info($request->input());

        return back()->with('success', 'Đặt xe thành công!');
    }

    /**
     * Display the specified resource.
     */
    // public function show(BookCar $bookCar)
    // {
    //     //
    // }

    /**
     * Show the form for editing the specified resource.
     */
    // public function edit(BookCar $bookCar)
    // {
    //     //
    // }

    /**
     * Update the specified resource in storage.
     */
    // public function update(UpdateBookCarRequest $request, BookCar $bookCar)
    // {
    //     //
    // }



    /**
     * Remove the specified resource from storage.
     */
    // public function destroy(BookCar $bookCar)
    // {
    //     //
    // }
}
