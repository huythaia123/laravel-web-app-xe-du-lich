<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BookCar extends Model
{
    /** @use HasFactory<\Database\Factories\BookCarFactory> */
    use HasFactory;

    // Khai báo tên bảng (không bắt buộc nếu theo chuẩn Laravel)
    // protected $table = 'book_cars';

    // Các cột có thể gán giá trị hàng loạt (Mass Assignment)
    protected $fillable = [
        'diem_don',
        'diem_den',
        'check_hai_chieu',
        'check_vat',
        'loai_xe',
        'ho_ten',
        'so_dien_thoai',
        'thoi_gian_don',
        'thoi_gian_cho',
    ];

    // Kiểu dữ liệu mong muốn cho từng cột
    protected $casts = [
        'check_hai_chieu' => 'boolean',
        'check_vat' => 'boolean',
        'thoi_gian_don' => 'datetime',
        'thoi_gian_cho' => 'integer',
    ];
}
