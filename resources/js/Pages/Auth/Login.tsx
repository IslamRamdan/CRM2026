import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false as boolean,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <>
            <Head title="منصة CRM - تسجيل الدخول" />

            {/* الواجهة كاملة بالخلفية البيضاء الناصعة والاتجاه العربي */}
            <div
                className="min-h-screen flex bg-white text-zinc-900 font-sans"
                dir="rtl"
            >
                {/* RIGHT SIDE - GREEN HERO WALLPAPER (الأخضر السعودي الرسمي) */}
                <div className="hidden lg:flex w-1/2 bg-[#006C35] text-white items-center justify-center p-12 relative overflow-hidden">
                    {/* نمط مربعات هندسي ناعم جداً باللون الأبيض الشفاف */}
                    <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />

                    <div className="text-center max-w-lg relative z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-medium mb-8">
                            🇸🇦 منصة موحدة معتمدة لخدمات الشركات
                        </div>

                        <h2 className="text-4xl font-black mb-6 leading-tight tracking-wide text-white">
                            مرحباً بك مجدداً في نظام CRM
                        </h2>

                        <p className="text-white/90 text-base leading-relaxed font-light">
                            تابع إدارة منشأتك، وراقب مسارات التأشيرات والكفلاء
                            والمندوبين بلحظة واحدة ومن مكان واحد.
                        </p>
                    </div>
                </div>

                {/* LEFT SIDE - LOGIN FORM (الأبيض الناصع) */}
                <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 bg-white relative">
                    <div className="w-full max-w-md bg-white p-8 rounded-2xl border border-zinc-200/80 shadow-xl shadow-zinc-100 relative z-10">
                        {/* شعار الهوية بالأخضر السعودي الصافي */}
                        <div className="w-12 h-12 rounded-xl bg-[#006C35] flex items-center justify-center text-white font-bold text-xl mb-6 shadow-md shadow-emerald-800/10">
                            س
                        </div>

                        <h1 className="text-2xl font-black text-zinc-900 tracking-tight">
                            تسجيل الدخول للمنصة
                        </h1>

                        <p className="text-sm text-zinc-500 mt-2 mb-8 leading-relaxed">
                            أدخل بيانات الاعتماد الخاصة بك للوصول إلى لوحة
                            التحكم.
                        </p>

                        {status && (
                            <div className="mb-4 text-sm font-medium text-[#006C35] bg-emerald-50 p-3 rounded-xl border border-emerald-100">
                                {status}
                            </div>
                        )}

                        <form onSubmit={submit} className="space-y-5">
                            {/* EMAIL */}
                            <div className="space-y-1">
                                <InputLabel
                                    htmlFor="email"
                                    value="البريد الإلكتروني"
                                    className="text-zinc-700 font-bold text-xs"
                                />

                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    placeholder="info@company.sa"
                                    className="mt-1 block w-full bg-zinc-50 border-zinc-200 rounded-xl p-3 text-sm text-left dir-ltr focus:ring-[#006C35]/10 focus:border-[#006C35] transition-all"
                                    autoComplete="username"
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                />

                                <InputError
                                    message={errors.email}
                                    className="mt-2 text-xs font-medium text-red-500"
                                />
                            </div>

                            {/* PASSWORD */}
                            <div className="space-y-1">
                                <InputLabel
                                    htmlFor="password"
                                    value="كلمة المرور"
                                    className="text-zinc-700 font-bold text-xs"
                                />

                                <TextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    placeholder="••••••••"
                                    className="mt-1 block w-full bg-zinc-50 border-zinc-200 rounded-xl p-3 text-sm text-left dir-ltr focus:ring-[#006C35]/10 focus:border-[#006C35] transition-all"
                                    autoComplete="current-password"
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                />

                                <InputError
                                    message={errors.password}
                                    className="mt-2 text-xs font-medium text-red-500"
                                />
                            </div>

                            {/* REMEMBER ME & FORGOT PASSWORD */}
                            <div className="flex items-center justify-between text-sm">
                                <label className="flex items-center select-none cursor-pointer">
                                    <Checkbox
                                        name="remember"
                                        checked={data.remember}
                                        className="rounded border-zinc-300 text-[#006C35] focus:ring-[#006C35]/30"
                                        onChange={(e) =>
                                            setData(
                                                "remember",
                                                e.target.checked,
                                            )
                                        }
                                    />
                                    <span className="ms-2 text-xs font-medium text-zinc-600">
                                        تذكرني على هذا الجهاز
                                    </span>
                                </label>

                                {canResetPassword && (
                                    <Link
                                        href={route("password.request")}
                                        className="text-xs font-semibold text-[#006C35] hover:underline transition-colors"
                                    >
                                        نسيت كلمة المرور؟
                                    </Link>
                                )}
                            </div>

                            {/* SUBMIT BUTTON */}
                            <div className="pt-2">
                                <PrimaryButton
                                    className="w-full bg-[#006C35] hover:bg-[#005428] text-white py-3.5 rounded-xl font-bold transition-all transform hover:-translate-y-0.5 shadow-lg shadow-emerald-800/10 justify-center text-sm"
                                    disabled={processing}
                                >
                                    {processing
                                        ? "جاري الدخول..."
                                        : "تسجيل الدخول للمنشأة"}
                                </PrimaryButton>
                            </div>

                            {/* GO TO REGISTER */}
                            <p className="text-center text-xs text-zinc-500 mt-6">
                                منشأة جديدة؟{" "}
                                <Link
                                    href={route("register")}
                                    className="text-[#006C35] font-bold hover:underline"
                                >
                                    إنشاء حساب منشأة جديد
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
