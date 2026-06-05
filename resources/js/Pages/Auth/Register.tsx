import { Head, useForm } from "@inertiajs/react";
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
            <Head title="إنشاء شركة" />

            <div className="min-h-screen flex bg-gray-50">
                {/* LEFT SIDE - FORM */}
                <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
                    <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
                        <h1 className="text-2xl font-bold text-right mb-1">
                            إنشاء حساب شركة
                        </h1>

                        <p className="text-sm text-gray-500 text-right mb-6">
                            سجل شركتك وابدأ إدارة الموظفين والمعاملات
                        </p>

                        <form onSubmit={submit} className="space-y-4">
                            {/* COMPANY NAME */}
                            <div>
                                <label className="text-sm">اسم الشركة</label>
                                <input
                                    className="w-full border rounded-lg p-2 mt-1"
                                    value={data.company_name}
                                    onChange={(e) =>
                                        setData("company_name", e.target.value)
                                    }
                                />
                                {errors.company_name && (
                                    <p className="text-red-500 text-sm">
                                        {errors.company_name}
                                    </p>
                                )}
                            </div>

                            {/* OWNER NAME */}
                            <div>
                                <label className="text-sm">اسم المسؤول</label>
                                <input
                                    className="w-full border rounded-lg p-2 mt-1"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                />
                                {errors.name && (
                                    <p className="text-red-500 text-sm">
                                        {errors.name}
                                    </p>
                                )}
                            </div>

                            {/* EMAIL */}
                            <div>
                                <label className="text-sm">
                                    البريد الإلكتروني
                                </label>
                                <input
                                    className="w-full border rounded-lg p-2 mt-1"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm">
                                        {errors.email}
                                    </p>
                                )}
                            </div>

                            {/* PHONE */}
                            <div>
                                <label className="text-sm">رقم الهاتف</label>
                                <input
                                    className="w-full border rounded-lg p-2 mt-1"
                                    value={data.phone}
                                    onChange={(e) =>
                                        setData("phone", e.target.value)
                                    }
                                />
                            </div>

                            {/* PASSWORD */}
                            <div>
                                <label className="text-sm">كلمة المرور</label>
                                <input
                                    type="password"
                                    className="w-full border rounded-lg p-2 mt-1"
                                    value={data.password}
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                />
                            </div>

                            {/* CONFIRM PASSWORD */}
                            <div>
                                <label className="text-sm">
                                    تأكيد كلمة المرور
                                </label>
                                <input
                                    type="password"
                                    className="w-full border rounded-lg p-2 mt-1"
                                    value={data.password_confirmation}
                                    onChange={(e) =>
                                        setData(
                                            "password_confirmation",
                                            e.target.value,
                                        )
                                    }
                                />
                            </div>

                            {/* BUTTON */}
                            <button
                                disabled={processing}
                                className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition"
                            >
                                إنشاء الشركة
                            </button>
                        </form>
                    </div>
                </div>

                {/* RIGHT SIDE - HERO */}
                <div className="hidden lg:flex w-1/2 bg-green-700 text-white items-center justify-center p-10">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold mb-4">
                            نظام إدارة الوكالات
                        </h2>

                        <p className="text-green-100">
                            إدارة الشركات – الموظفين – التأشيرات – الكفلاء
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
