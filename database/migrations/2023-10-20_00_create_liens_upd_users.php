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
        Schema::table('users', function (Blueprint $table) {
            $table->string('privilege')->default('gueux');
        });

        Schema::create('LiensMemes', function (Blueprint $table) {
            $table->id();
            $table->string('lien');
            $table->unsignedBigInteger('created_by');
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('created_by')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('LiensMemes', function (Blueprint $table) {
            $table->dropForeign('LiensMemes_created_by_foreign');
        });

        Schema::dropIfExists('LiensMemes');

        if(Schema::hasColumn('users', 'privilege')){
            Schema::table('users', function (Blueprint $table) {
                $table->dropColumn('privilege');
            });
        }
    }
};
