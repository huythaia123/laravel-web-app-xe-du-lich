<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class BookCar extends Model
{
    /** @use HasFactory<\Database\Factories\BookCarFactory> */
    use HasFactory, SoftDeletes;

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
        'status_id',
    ];

    protected $attributes = [
        "status_id" => 1 // default is 1 => cho_xac_nhan
    ];

    // Kiểu dữ liệu mong muốn cho từng cột
    protected $casts = [
        'check_hai_chieu' => 'boolean',
        'check_vat' => 'boolean',
        'thoi_gian_don' => 'datetime',
        'thoi_gian_cho' => 'integer',
    ];

    public function status()
    {
        return $this->belongsTo(BookCarStatus::class, 'status_id');
    }
}
