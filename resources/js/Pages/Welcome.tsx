import { PageProps } from "@/types";
import { Head, Link } from "@inertiajs/react";

export default function Welcome({ auth }: PageProps) {
    return (
        <>
            <Head title="نظام إدارة علاقات العملاء - CRM" />

            <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-zinc-950 dark:text-zinc-50 flex flex-col justify-between relative overflow-hidden">
                {/* تأثير الإضاءة الخلفية المستوحى من الهوية الرقمية الحديثة */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-emerald-500/10 to-transparent blur-3xl pointer-events-none" />

                {/* Header */}
                <header className="relative flex items-center justify-between px-6 py-4 md:px-12 border-b border-emerald-100 dark:border-zinc-900 backdrop-blur-sm bg-white/50 dark:bg-zinc-950/50 z-10">
                    <div className="flex items-center gap-2">
                        {/* أيقونة رمزية للهوية السعودية (نخلة وسيفين مبسطة) */}
                        <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-emerald-600/20">
                            س
                        </div>
                        <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
                            نظام CRM المتكامل
                        </h1>
                    </div>

                    <nav className="flex gap-3 text-sm font-medium">
                        {auth.user ? (
                            <Link
                                href={route("dashboard")}
                                className="px-4 py-2 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 transition-colors shadow-sm"
                            >
                                لوحة التحكم
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route("login")}
                                    className="px-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
                                >
                                    تسجيل الدخول
                                </Link>

                                <Link
                                    href={route("register")}
                                    className="px-4 py-2 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 transition-colors shadow-sm"
                                >
                                    حساب جديد
                                </Link>
                            </>
                        )}
                    </nav>
                </header>

                {/* Main Content & Under Construction Badge */}
                <main className="relative flex-1 flex flex-col items-center justify-center text-center px-4 z-10 max-w-4xl mx-auto my-12">
                    {/* شارة جاري العمل على المشروع بالطابع السعودي الاقتصادي الحديث */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-900/60 text-amber-800 dark:text-amber-400 text-xs font-semibold mb-8 animate-pulse shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-amber-500" />
                        رؤية 2030: جاري العمل على تطوير وبناء المشروع
                    </div>

                    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 dark:text-white leading-tight">
                        إدارة التأشيرات والكفلاء والمندوبين
                    </h2>

                    <p className="mt-6 text-base md:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
                        منصة رقمية متكاملة متوافقة مع الأنظمة واللوائح السعودية
                        لإدارة الشركات، الموظفين، التأشيرات، والكفلاء بكفاءة
                        وسرعة متناهية.
                    </p>

                    {!auth.user && (
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                href={route("register")}
                                className="px-8 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold rounded-xl shadow-lg shadow-emerald-600/20 dark:shadow-emerald-500/10 transition-all transform hover:-translate-y-0.5"
                            >
                                ابدأ تجاربك الآن
                            </Link>
                        </div>
                    )}
                </main>

                {/* Features Grid */}
                <div className="relative max-w-6xl mx-auto w-full px-6 grid sm:grid-cols-2 md:grid-cols-3 gap-6 z-10">
                    <div className="p-6 bg-white/70 dark:bg-zinc-900/50 backdrop-blur-md rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60 shadow-sm hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-all">
                        <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold mb-4">
                            👥
                        </div>
                        <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                            إدارة الموظفين
                        </h3>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2 leading-relaxed">
                            تنظيم فرق العمل وتوزيع الصلاحيات والأدوار للمنشآت
                            المختلفة بكل مرونة.
                        </p>
                    </div>

                    <div className="p-6 bg-white/70 dark:bg-zinc-900/50 backdrop-blur-md rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60 shadow-sm hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-all">
                        <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold mb-4">
                            📄
                        </div>
                        <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                            مسارات التأشيرات
                        </h3>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2 leading-relaxed">
                            أتمتة وتتبع إصدار وتحديث التأشيرات وربطها الفوري
                            بالكفلاء والمندوبين المعتمدين.
                        </p>
                    </div>

                    <div className="p-6 bg-white/70 dark:bg-zinc-900/50 backdrop-blur-md rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60 shadow-sm hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-all sm:col-span-2 md:col-span-1">
                        <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold mb-4">
                            🤝
                        </div>
                        <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                            الحوكمة والكفلاء
                        </h3>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2 leading-relaxed">
                            بناء بيئة منظمة لإدارة بيانات ومستندات الكفلاء
                            والمندوبين تضمن سرعة المعاملات التجارية.
                        </p>
                    </div>
                </div>

                {/* Footer */}
                <footer className="relative text-center py-8 text-zinc-400 dark:text-zinc-600 text-xs tracking-wider z-10 border-t border-zinc-100 dark:border-zinc-900 mt-16 bg-white/20 dark:bg-transparent">
                    نظام CRM لخدمات الأعمال والشركات ©{" "}
                    {new Date().getFullYear()} م
                </footer>
            </div>
        </>
    );
}
