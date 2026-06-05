import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-bold leading-tight text-zinc-900">
                    لوحة التحكم العامة
                </h2>
            }
        >
            <Head title="لوحة التحكم" />

            {/* ضبط اتجاه الصفحة بالكامل للغة العربية والرمادي الخفيف جداً للخلفية */}
            <div
                className="py-10 bg-zinc-50/50 min-h-[calc(100vh-65px)]"
                dir="rtl"
            >
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 space-y-6">
                    {/* بطاقة الترحيب المخصصة بالهوية السعودية */}
                    <div className="overflow-hidden bg-white border border-zinc-200/80 rounded-2xl shadow-sm relative">
                        {/* شريط جمالي علوي بالأخضر السعودي الصافي */}
                        <div className="h-1.5 w-full bg-[#006C35]" />

                        <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                            <div className="space-y-1">
                                <h3 className="text-xl font-black text-zinc-900 sm:text-2xl">
                                    مرحباً بك في منصة المعاملات الرقمية 🇸🇦
                                </h3>
                                <p className="text-sm text-zinc-500">
                                    لقد قمت بتسجيل الدخول بنجاح. يمكنك الآن
                                    إدارة المنشأة وتتبع الكفلاء والمندوبين بكل
                                    سهولة.
                                </p>
                            </div>

                            {/* زر إجراء سريع متناسق بالأخضر الصافي */}
                            <button className="inline-flex items-center justify-center px-4 py-2.5 bg-[#006C35] hover:bg-[#005428] text-white text-sm font-bold rounded-xl shadow-md shadow-emerald-800/10 transition-all transform hover:-translate-y-0.5 whitespace-nowrap self-start sm:self-center">
                                + معاملة جديدة
                            </button>
                        </div>
                    </div>

                    {/* نظرة عامة - بطاقات إحصائية ذكية مجهزة ومصممة باللون الأبيض والأخضر */}
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {/* كرت 1 */}
                        <div className="bg-white p-6 rounded-2xl border border-zinc-200/80 shadow-sm flex items-center justify-between">
                            <div className="space-y-1">
                                <p className="text-xs font-bold text-zinc-500 tracking-wide uppercase">
                                    المعاملات النشطة
                                </p>
                                <p className="text-2xl font-black text-zinc-900">
                                    12
                                </p>
                            </div>
                            <div className="w-10 h-10 rounded-xl bg-[#006C35]/10 flex items-center justify-center text-[#006C35] font-bold">
                                📁
                            </div>
                        </div>

                        {/* كرت 2 */}
                        <div className="bg-white p-6 rounded-2xl border border-zinc-200/80 shadow-sm flex items-center justify-between">
                            <div className="space-y-1">
                                <p className="text-xs font-bold text-zinc-500 tracking-wide uppercase">
                                    إجمالي الكفلاء
                                </p>
                                <p className="text-2xl font-black text-zinc-900">
                                    45
                                </p>
                            </div>
                            <div className="w-10 h-10 rounded-xl bg-[#006C35]/10 flex items-center justify-center text-[#006C35] font-bold">
                                👥
                            </div>
                        </div>

                        {/* كرت 3 */}
                        <div className="bg-white p-6 rounded-2xl border border-zinc-200/80 shadow-sm flex items-center justify-between">
                            <div className="space-y-1">
                                <p className="text-xs font-bold text-zinc-500 tracking-wide uppercase">
                                    المندوبين المسجلين
                                </p>
                                <p className="text-2xl font-black text-zinc-900">
                                    8
                                </p>
                            </div>
                            <div className="w-10 h-10 rounded-xl bg-[#006C35]/10 flex items-center justify-center text-[#006C35] font-bold">
                                🪪
                            </div>
                        </div>

                        {/* كرت 4 */}
                        <div className="bg-white p-6 rounded-2xl border border-zinc-200/80 shadow-sm flex items-center justify-between">
                            <div className="space-y-1">
                                <p className="text-xs font-bold text-zinc-500 tracking-wide uppercase">
                                    طلبات مكتملة هذا الشهر
                                </p>
                                <p className="text-2xl font-black text-[#006C35]">
                                    124
                                </p>
                            </div>
                            <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-[#006C35] font-bold">
                                ✓
                            </div>
                        </div>
                    </div>

                    {/* مساحة عمل إضافية فارغة جاهزة لتقاريرك أو جداولك القادمة */}
                    <div className="bg-white rounded-2xl border border-zinc-200/80 p-6 shadow-sm">
                        <div className="border-b border-zinc-100 pb-4 mb-4">
                            <h4 className="text-base font-bold text-zinc-900">
                                أحدث النشاطات والمعاملات
                            </h4>
                            <p className="text-xs text-zinc-400 mt-0.5">
                                رصد فوري لآخر التحديثات التي تمت داخل المنشأة
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center py-12 text-center">
                            <div className="w-12 h-12 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-400 mb-3 text-lg">
                                📊
                            </div>
                            <p className="text-sm text-zinc-500 font-medium">
                                لا توجد بيانات مستندات حالية لعرضها
                            </p>
                            <p className="text-xs text-zinc-400 mt-1">
                                المعاملات الجديدة والتقارير ستظهر هنا مباشرة فور
                                إضافتها.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
