<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ArchiveController;

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Auth/Login', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/home' , [HomeController::class, 'index'] );
    Route::get('/archive' , [ArchiveController::class, 'index'] );
    Route::patch('/clients/{id}/archive', [\App\Http\Controllers\ArchiveController::class, 'archiveClient'])->name('clients.archive');

    Route::resource('/clients' , 'App\Http\Controllers\ClientController');
    Route::resource('/dossiers' , 'App\Http\Controllers\DossierController');
    Route::resource('/taches' , 'App\Http\Controllers\TacheController');
   // Route::get('/taches/{id}/edit', [\App\Http\Controllers\TacheController::class, 'edit']);

    Route::resource('/calendar' , 'App\Http\Controllers\CalendarController');

});

// Route::get('/test' , function(){
//     return Inertia::render('Home') ;
// }) ;

require __DIR__.'/auth.php';
