<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('book_car_statuses', function (Blueprint $table) {
            $table->id();

            $table->string('trang_thai')->unique();
            $table->string('mo_ta')->nullable();

            // $table->timestamps();
        });

        $this->seedData();
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('book_car_statuses');
    }

    private function seedData(): void
    {
        $statuses = [
            ['trang_thai' => 'cho_xac_nhan', 'mo_ta' => 'Chờ xác nhận'],
            ['trang_thai' => 'da_xac_nhan', 'mo_ta' => 'Đã xác nhận'],
            ['trang_thai' => 'hoan_thanh', 'mo_ta' => 'Hoàn thành'],
            ['trang_thai' => 'huy_chuyen', 'mo_ta' => 'Huỷ chuyến'],
        ];

        DB::table('book_car_statuses')->insert($statuses);
    }
};
