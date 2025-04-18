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
        Schema::create('questionnaires', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('examination_id')->nullable();
            $table->longText('question')->nullable();
            $table->string('answer_key')->nullable();
            $table->longText('specification')->nullable();
            $table->string('title')->nullable();
            $table->bigInteger('item_number')->nullable();
            $table->string('a')->nullable();
            $table->string('b')->nullable();
            $table->string('c')->nullable();
            $table->string('d')->nullable();
            $table->string('e')->nullable();
            $table->string('image_header')->nullable();
            $table->string('image_a')->nullable();
            $table->string('image_b')->nullable();
            $table->string('image_c')->nullable();
            $table->string('image_d')->nullable();
            $table->string('image_e')->nullable();
            $table->string('isEssay')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('questionnaires');
    }
};
