import { Head, Link } from "@inertiajs/react";

export default function Welcome() {
    return (
        <>
            <Head title="نظام إدارة التأشيرات" />

            <div dir="rtl" className="min-h-screen bg-white">
                {/* Header */}
                <header className="sticky top-0 z-50 bg-white shadow-sm">
                    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                        <img src="logo.png" alt="Logo" className="h-14" />

                        <div className="flex gap-3">
                            <Link
                                href={route("login")}
                                className="border-2 border-green-700 text-green-700 px-5 py-2 rounded-lg"
                            >
                                تسجيل الدخول
                            </Link>

                            <Link
                                href={route("register")}
                                className="bg-green-700 text-white px-5 py-2 rounded-lg"
                            >
                                إنشاء شركة
                            </Link>
                        </div>
                    </div>
                </header>

                {/* Hero */}
                <section className="container mx-auto px-6 py-20">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-5xl font-bold leading-relaxed">
                                منصة متكاملة لإدارة
                                <span className="text-green-700">
                                    {" "}
                                    التأشيرات والكفلاء
                                </span>
                            </h1>

                            <p className="text-gray-600 mt-6 text-lg">
                                إدارة التأشيرات والكفلاء والموظفين والمندوبين من
                                مكان واحد بسهولة وسرعة.
                            </p>

                            <div className="mt-8 flex gap-4">
                                <Link
                                    href={route("register")}
                                    className="bg-green-700 text-white px-8 py-4 rounded-xl"
                                >
                                    ابدأ الآن
                                </Link>

                                <Link
                                    href={route("login")}
                                    className="border border-green-700 text-green-700 px-8 py-4 rounded-xl"
                                >
                                    تسجيل الدخول
                                </Link>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <img
                                src="/img/Gemini_Generated_Image_9x3vz49x3vz49x3v.png"
                                alt="Passport"
                                className="max-w-md rounded-3xl shadow-2xl"
                            />
                        </div>
                    </div>
                </section>

                {/* Stats */}
                <section className="bg-gray-50 py-16">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-3 text-center">
                            <div>
                                <h3 className="text-4xl font-bold text-green-700">
                                    +50K
                                </h3>
                                <p>تأشيرة</p>
                            </div>

                            <div>
                                <h3 className="text-4xl font-bold text-green-700">
                                    +500
                                </h3>
                                <p>شركة</p>
                            </div>

                            <div>
                                <h3 className="text-4xl font-bold text-green-700">
                                    99%
                                </h3>
                                <p>نجاح العمليات</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features */}
                <section className="container mx-auto py-20 px-6">
                    <h2 className="text-center text-4xl font-bold mb-12">
                        مميزات النظام
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white shadow rounded-xl p-6">
                            <h3 className="font-bold mb-2">التأشيرات</h3>
                            <p>إدارة كاملة للتأشيرات.</p>
                        </div>

                        <div className="bg-white shadow rounded-xl p-6">
                            <h3 className="font-bold mb-2">الكفلاء</h3>
                            <p>إدارة الكفلاء وربطهم بالتأشيرات.</p>
                        </div>

                        <div className="bg-white shadow rounded-xl p-6">
                            <h3 className="font-bold mb-2">الموظفين</h3>
                            <p>صلاحيات متعددة للموظفين.</p>
                        </div>

                        <div className="bg-white shadow rounded-xl p-6">
                            <h3 className="font-bold mb-2">المندوبين</h3>
                            <p>متابعة المندوبين بسهولة.</p>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-slate-900 text-white py-8 text-center">
                    © {new Date().getFullYear()} جميع الحقوق محفوظة
                </footer>
            </div>
        </>
    );
}
