import { Head, useForm, Link } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function Register() {
    const { data, setData, post, processing, errors } = useForm({
        company_name: "",
        city: "",
        name: "",
        email: "",
        phone: "",
        password: "",
        password_confirmation: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route("company.register"));
    };

    return (
        <>
            <Head title="منصة CRM - إنشاء حساب شركة" />

            {/* الخلفية بالكامل بيضاء ناصعة والخطوط منسقة بالاتجاه العربي */}
            <div
                className="min-h-screen flex bg-white text-zinc-900 font-sans"
                dir="rtl"
            >
                {/* RIGHT SIDE - FORM (النصف الأيمن - حقول البيانات) */}
                <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 bg-white relative">
                    <div className="w-full max-w-xl bg-white p-8 rounded-2xl border border-zinc-200/80 shadow-xl shadow-zinc-100 relative z-10">
                        {/* شعار الهوية بالأخضر السعودي الصافي */}
                        <div className="w-12 h-12 rounded-xl bg-[#006C35] flex items-center justify-center text-white font-bold text-xl mb-6 shadow-md shadow-emerald-800/10">
                            س
                        </div>

                        <h1 className="text-2xl font-black text-zinc-900 tracking-tight">
                            إنشاء حساب منشأة جديد
                        </h1>

                        <p className="text-sm text-zinc-500 mt-2 mb-8 leading-relaxed">
                            سجل منشأتك الآن وابدأ أتمتة المعاملات وتتبع الكفلاء
                            والمندوبين.
                        </p>

                        <form onSubmit={submit} className="space-y-5">
                            {/* COMPANY NAME */}
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-zinc-700">
                                    اسم الشركة / المؤسسة
                                </label>
                                <input
                                    type="text"
                                    placeholder="شركة حلول الأعمال المحدودة"
                                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl p-3 text-sm focus:outline-none focus:ring-4 focus:ring-[#006C35]/10 focus:border-[#006C35] transition-all text-right"
                                    value={data.company_name}
                                    onChange={(e) =>
                                        setData("company_name", e.target.value)
                                    }
                                />
                                {errors.company_name && (
                                    <p className="text-red-500 text-xs mt-1 font-medium">
                                        {errors.company_name}
                                    </p>
                                )}
                            </div>

                            {/* TWO COLUMNS FOR CITY & OWNER NAME */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-zinc-700">
                                        المدينة
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="الرياض"
                                        className="w-full bg-zinc-50 border border-zinc-200 rounded-xl p-3 text-sm focus:outline-none focus:ring-4 focus:ring-[#006C35]/10 focus:border-[#006C35] transition-all text-right"
                                        value={data.city}
                                        onChange={(e) =>
                                            setData("city", e.target.value)
                                        }
                                    />
                                    {errors.city && (
                                        <p className="text-red-500 text-xs mt-1 font-medium">
                                            {errors.city}
                                        </p>
                                    )}
                                </div>

                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-zinc-700">
                                        اسم المسؤول المعتمد
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="عبدالله محمد"
                                        className="w-full bg-zinc-50 border border-zinc-200 rounded-xl p-3 text-sm focus:outline-none focus:ring-4 focus:ring-[#006C35]/10 focus:border-[#006C35] transition-all text-right"
                                        value={data.name}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                    />
                                    {errors.name && (
                                        <p className="text-red-500 text-xs mt-1 font-medium">
                                            {errors.name}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* EMAIL & PHONE IN TWO COLUMNS */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-zinc-700">
                                        رقم الجوال
                                    </label>
                                    <input
                                        type="tel"
                                        placeholder="05xxxxxxxx"
                                        className="w-full bg-zinc-50 border border-zinc-200 rounded-xl p-3 text-sm text-left dir-ltr focus:outline-none focus:ring-4 focus:ring-[#006C35]/10 focus:border-[#006C35] transition-all"
                                        value={data.phone}
                                        onChange={(e) =>
                                            setData("phone", e.target.value)
                                        }
                                    />
                                    {errors.phone && (
                                        <p className="text-red-500 text-xs mt-1 font-medium">
                                            {errors.phone}
                                        </p>
                                    )}
                                </div>

                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-zinc-700">
                                        البريد الإلكتروني
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="info@company.sa"
                                        className="w-full bg-zinc-50 border border-zinc-200 rounded-xl p-3 text-sm text-left dir-ltr focus:outline-none focus:ring-4 focus:ring-[#006C35]/10 focus:border-[#006C35] transition-all"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-xs mt-1 font-medium">
                                            {errors.email}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* PASSWORD */}
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-zinc-700">
                                    كلمة المرور
                                </label>
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl p-3 text-sm text-left dir-ltr focus:outline-none focus:ring-4 focus:ring-[#006C35]/10 focus:border-[#006C35] transition-all"
                                    value={data.password}
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                />
                                {errors.password && (
                                    <p className="text-red-500 text-xs mt-1 font-medium">
                                        {errors.password}
                                    </p>
                                )}
                            </div>

                            {/* CONFIRM PASSWORD */}
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-zinc-700">
                                    تأكيد كلمة المرور
                                </label>
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl p-3 text-sm text-left dir-ltr focus:outline-none focus:ring-4 focus:ring-[#006C35]/10 focus:border-[#006C35] transition-all"
                                    value={data.password_confirmation}
                                    onChange={(e) =>
                                        setData(
                                            "password_confirmation",
                                            e.target.value,
                                        )
                                    }
                                />
                            </div>

                            {/* SUBMIT BUTTON */}
                            <button
                                disabled={processing}
                                className="w-full mt-2 bg-[#006C35] hover:bg-[#005428] text-white py-3.5 rounded-xl font-bold transition-all transform hover:-translate-y-0.5 shadow-lg shadow-emerald-800/10 disabled:opacity-50 disabled:pointer-events-none text-base"
                            >
                                {processing
                                    ? "جاري إنشاء الحساب..."
                                    : "تسجيل واعتماد المنشأة"}
                            </button>

                            <p className="text-center text-xs text-zinc-500 mt-4">
                                لديك حساب بالفعل؟{" "}
                                <Link
                                    href={route("login")}
                                    className="text-[#006C35] font-bold hover:underline"
                                >
                                    تسجيل الدخول
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>

                {/* LEFT SIDE - HERO WALLPAPER (النصف الأيسر - واجهة العرض بالأخضر السعودي الصافي) */}
                <div className="hidden lg:flex w-1/2 bg-[#006C35] text-white items-center justify-center p-12 relative overflow-hidden">
                    {/* نمط النقاط الهندسية الشفافة الناعمة لتزيين الخلفية بلمسة رسمية */}
                    <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />

                    <div className="text-center max-w-lg relative z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-medium mb-8">
                            🇸🇦 منصة موحدة معتمدة لخدمات الشركات
                        </div>

                        <h2 className="text-4xl font-black mb-6 leading-tight tracking-wide text-white">
                            نظام إدارة الوكالات ومعاملات الشركات
                        </h2>

                        <p className="text-white/90 text-lg leading-relaxed font-light">
                            منصة ذكية موحدة تتيح لك التحكم المطلق بإدارة شؤون
                            الموظفين، تتبع مسارات التأشيرات، وتنظيم العلاقات
                            القانونية والتجارية مع الكفلاء والمندوبين.
                        </p>

                        {/* إحصائيات بصرية سريعة متناسقة بالأبيض الشفاف والأخضر */}
                        <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-3 gap-4 text-center">
                            <div>
                                <h4 className="text-2xl font-black text-white">
                                    100%
                                </h4>
                                <p className="text-xs text-white/70 mt-1">
                                    أتمتة رقمية
                                </p>
                            </div>
                            <div>
                                <h4 className="text-2xl font-black text-white">
                                    آمن
                                </h4>
                                <p className="text-xs text-white/70 mt-1">
                                    حماية البيانات
                                </p>
                            </div>
                            <div>
                                <h4 className="text-2xl font-black text-white">
                                    مرن
                                </h4>
                                <p className="text-xs text-white/70 mt-1">
                                    توافق الأنظمة
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
