<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('book_cars', function (Blueprint $table) {
            $table->id();

            $table->string('diem_don');
            $table->string('diem_den');
            $table->boolean('check_hai_chieu')->nullable();
            $table->boolean('check_vat')->nullable();
            $table->string('loai_xe');
            $table->string('ho_ten');
            $table->string('so_dien_thoai');
            $table->dateTime('thoi_gian_don');
            $table->integer('thoi_gian_cho');

            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Schema::table('book_cars', function (Blueprint $table) {
        //     $table->dropSoftDeletes();
        // });
        Schema::dropIfExists('book_cars');
    }
};
