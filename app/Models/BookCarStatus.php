<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BookCarStatus extends Model
{
    protected $fillable = [
        "trang_thai",
        "trang_thai"
    ];

    // liên kết đến bảng book car
    public function bookCars()
    {
        return $this->hasMany(BookCar::class, 'status_id');
    }
}
