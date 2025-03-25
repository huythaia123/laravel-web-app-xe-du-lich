<?php

use App\Http\Controllers\AutocompleteController;
use App\Http\Controllers\BookCarController;
use App\Http\Controllers\Dashboard\CarBookingManagerController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::post('/book-cars', [BookCarController::class, 'store'])
    ->name('book-cars.store');



Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::get("/car-booking-management", [CarBookingManagerController::class, 'ListCarBooking'])
        ->name('car-booking-management');

    Route::get('/car-booking-management/{book_car_id}',  [CarBookingManagerController::class, 'pageCarBookingEdit'])
        ->name('car-booking-management.edit');

    Route::delete('/car-booking-management/{book_car_id}',  [CarBookingManagerController::class, 'deleteById'])
        ->name('car-booking-management.delete');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
