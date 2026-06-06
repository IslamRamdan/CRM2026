<?php

use App\Http\Controllers\Auth\CompanyRegisterController;
use App\Http\Controllers\Company\UserController;
use App\Http\Controllers\Delegate\DelegateController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
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
});


// تسجيل دخول الشركة والاونر
Route::get('/register', [CompanyRegisterController::class, 'create']);
Route::post('/company/register', [CompanyRegisterController::class, 'store'])
    ->name('company.register');

Route::middleware(['auth'])->group(function () {

    Route::get('/employees', [UserController::class, 'index']);
    Route::post('/employees', [UserController::class, 'store']);
    Route::put('/employees/{user}', [UserController::class, 'update']);
    Route::delete('/employees/{user}', [UserController::class, 'destroy']);
});

Route::middleware(['auth', 'verified'])->group(function () {
    // مسارات المندوبين
    Route::get('/delegates', [DelegateController::class, 'index'])->name('delegates.index');
    Route::post('/delegates', [DelegateController::class, 'store'])->name('delegates.store');
    Route::put('/delegates/{delegate}', [DelegateController::class, 'update'])->name('delegates.update');
    Route::delete('/delegates/{delegate}', [DelegateController::class, 'destroy'])->name('delegates.destroy');
});

require __DIR__ . '/auth.php';
