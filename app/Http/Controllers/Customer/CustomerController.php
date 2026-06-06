<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;

use App\Models\Customer;
use App\Models\Delegate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class CustomerController extends Controller
{
    /**
     * صفحة إنشاء عميل
     */
    public function create()
    {
        return Inertia::render('Customers/Create', [
            'delegates' => Delegate::where('company_id', auth()->user()->company_id)
                ->get(['id', 'name']),
        ]);
    }

    public function store(Request $request)
    {
        try {
            // 1. التحقق من البيانات مباشرة داخل الـ Controller
            $validated = $request->validate([
                // البيانات الأساسية
                'name_ar' => ['required', 'string', 'max:255'],
                'name_en' => ['nullable', 'string', 'max:255'],
                'gender' => ['nullable', 'in:male,female'],
                'birth_date' => ['nullable', 'date'],
                'nationality' => ['nullable', 'string', 'max:100'],
                'marital_status' => ['nullable', 'string', 'max:50'],

                // التواصل والعناوين
                'phone' => ['nullable', 'string', 'max:20'],
                'whatsapp' => ['nullable', 'string', 'max:20'],
                'governorate' => ['nullable', 'string', 'max:100'],
                'address' => ['nullable', 'string'],

                // الجواز والهوية
                'passport_number' => ['nullable', 'string', 'max:50'],
                'passport_issue_date' => ['nullable', 'date'],
                'passport_expiry_date' => ['nullable', 'date', 'after_or_equal:passport_issue_date'],
                'passport_issue_place' => ['nullable', 'string', 'max:150'],
                'mrz' => ['nullable', 'string'],
                'national_id' => ['nullable', 'string', 'max:50'],

                // التأشيرات
                'visa_number' => ['nullable', 'string', 'max:50'],
                'e_number' => ['nullable', 'string', 'max:50'],

                // الحالات
                'medical_status' => ['nullable', 'in:booked,fit,unfit'],
                'medical_token' => ['nullable', 'string', 'max:255'],
                'lab_status' => ['nullable', 'in:booked,positive,negative'],
                'enet_status' => ['nullable', 'in:booked,not_booked'],

                // ملاحظات
                'notes' => ['nullable', 'string'],

                // الملفات
                'passport_image' => ['nullable', 'file', 'image'],
                'personal_image' => ['nullable', 'file', 'image'],
                'national_id_image' => ['nullable', 'file', 'image'],
                'job_proof_image' => ['nullable', 'file', 'image'],

                // المندوب
                'delegate_id' => ['nullable', 'exists:delegates,id'],
            ], [
                // =========================
                // رسائل بالعربي
                // =========================

                'name_ar.required' => 'الاسم بالعربية مطلوب',
                'name_ar.string' => 'الاسم بالعربية يجب أن يكون نص',
                'name_ar.max' => 'الاسم بالعربية طويل جدًا',

                'name_en.string' => 'الاسم بالإنجليزية يجب أن يكون نص',

                'gender.in' => 'النوع يجب أن يكون ذكر أو أنثى',

                'birth_date.date' => 'تاريخ الميلاد غير صحيح',

                'nationality.max' => 'الجنسية طويلة جدًا',

                'phone.max' => 'رقم الهاتف غير صالح',
                'whatsapp.max' => 'رقم الواتساب غير صالح',

                'passport_number.max' => 'رقم الجواز طويل جدًا',
                'passport_issue_date.date' => 'تاريخ إصدار الجواز غير صحيح',
                'passport_expiry_date.date' => 'تاريخ انتهاء الجواز غير صحيح',
                'passport_expiry_date.after_or_equal' => 'تاريخ انتهاء الجواز يجب أن يكون بعد أو يساوي تاريخ الإصدار',

                'national_id.max' => 'الرقم القومي غير صالح',

                'medical_status.in' => 'حالة الكشف الطبي غير صحيحة',
                'lab_status.in' => 'حالة المعمل غير صحيحة',
                'enet_status.in' => 'حالة حجز النت غير صحيحة',

                'passport_image.image' => 'صورة الجواز يجب أن تكون صورة',
                'personal_image.image' => 'الصورة الشخصية يجب أن تكون صورة',
                'national_id_image.image' => 'صورة الهوية يجب أن تكون صورة',
                'job_proof_image.image' => 'إثبات المهنة يجب أن يكون صورة',

                'delegate_id.exists' => 'المندوب المختار غير موجود',
            ]);

            // استخدام الترانزأكشن لحماية كتابة الجداول
            DB::transaction(function () use ($request, &$validated) {

                // 2. معالجة وتخزين الملفات والصور المرفوعة (إن وجدت)
                $fileFields = ['passport_image', 'personal_image', 'national_id_image', 'job_proof_image'];
                foreach ($fileFields as $field) {
                    if ($request->hasFile($field)) {
                        $validated[$field] = $request->file($field)->store('customers/attachments', 'public');
                    }
                }

                // 3. تعيين قيم الشركة والمستخدم الحالي تلقائياً من الجلسة
                $validated['company_id'] = Auth::user()->company_id;
                $validated['created_by'] = Auth::id();

                $customerData = array_diff_key($validated, array_flip(['delegate_id']));
                // 4. إنشاء سجل العميل الأساسي
                $customer = Customer::create($customerData);

                // 5. ربط المندوب في الجدول الوسيط (customer_delegate) إذا تم اختياره
                if ($request->filled('delegate_id')) {
                    $customer->delegates()->attach($request->delegate_id, [
                        'assigned_at' => now(),
                        'changed_by'  => Auth::id(),
                        'created_at'  => now(),
                        'updated_at'  => now(),
                    ]);
                }
            });

            return redirect()->route('customers.index')->with('success', 'تم حفظ العميل بنجاح');
        } catch (\Exception $e) {
            return back()->withInput()->withErrors([
                'error' => 'حدث خطأ أثناء الحفظ: ' . $e->getMessage()
            ]);
        }
    }

    /**
     * صفحة عرض العملاء (اختياري)
     */
    public function index()
    {
        $customers = Customer::with('latestDelegate')
            ->where('company_id', auth()->user()->company_id)
            ->latest()
            ->get();

        // للتشخيص مؤقتاً:

        return Inertia::render('Customers/Index', [
            'customers' => $customers
        ]);
    }
}
