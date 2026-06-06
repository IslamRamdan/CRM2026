import React, { useEffect } from "react";
import { useForm } from "@inertiajs/react";

import Modal from "@/Components/Modal";

interface Sponsor {
    id: number;
    name: string;
}

interface Visa {
    id: number;
    name: string;
    type: string;
    issue_number: string;
    consulate: string;
    issue_date_hijri: string;
    sponsor_id: number;
}

interface Props {
    isOpen: boolean;
    onClose: () => void;
    visa: Visa | null;
    sponsors: Sponsor[];
}

export default function VisaForm({
    isOpen,
    onClose,
    visa,
    sponsors = [],
}: Props) {
    // إعداد فورم الـ Inertia المربوط مع فاليـديشن لارافل تلقائياً
    const { data, setData, post, put, processing, errors, reset, clearErrors } =
        useForm({
            name: "",
            type: "",
            issue_number: "",
            consulate: "", // سيتم تخزين خيار القنصلية المحدد هنا
            sponsor_id: "",
            issue_date_hijri: "",
        });

    // تعبئة البيانات في حال وضع "التعديل" وتصفيرها في وضع "الإضافة"
    useEffect(() => {
        if (visa) {
            setData({
                name: visa.name,
                type: visa.type,
                issue_number: visa.issue_number,
                consulate: visa.consulate,
                sponsor_id: visa.sponsor_id.toString(),
                issue_date_hijri: visa.issue_date_hijri,
            });
        } else {
            reset();
        }
        clearErrors();
    }, [visa, isOpen]);

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (visa) {
            put(route("visas.update", visa.id), {
                onSuccess: () => onClose(),
            });
        } else {
            post(route("visas.store"), {
                onSuccess: () => {
                    reset();
                    onClose();
                },
            });
        }
    };

    return (
        <Modal show={isOpen} onClose={onClose} maxWidth="lg">
            <div className="flex flex-col max-h-[90vh]" dir="rtl">
                {/* هيدر المودال */}
                <div className="p-5 border-b border-zinc-100 flex items-center justify-between bg-zinc-50/50 rounded-t-2xl">
                    <h3 className="text-base font-black text-zinc-800">
                        {visa ? "تعديل بيانات التأشيرة" : "إضافة تأشيرة جديدة"}
                    </h3>
                    <button
                        onClick={onClose}
                        className="text-zinc-400 hover:text-zinc-600 p-1.5 hover:bg-zinc-100 rounded-lg transition-all cursor-pointer"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                {/* فورم الإدخال */}
                <form
                    onSubmit={handleFormSubmit}
                    className="p-6 overflow-y-auto space-y-4 flex-1"
                >
                    {/* اسم التأشيرة */}
                    <div>
                        <label className="block text-xs font-bold text-zinc-500 mb-1.5 mr-1">
                            اسم التأشيرة / الوصف
                        </label>
                        <input
                            type="text"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            className={`w-full px-4 py-2.5 bg-zinc-50/50 border rounded-xl text-sm transition-all focus:outline-hidden focus:ring-2 ${errors.name ? "border-red-300 focus:ring-red-100" : "border-zinc-200 focus:ring-emerald-100 focus:border-emerald-500"}`}
                            placeholder="مثال: تأشيرة موسم الحج 1447"
                        />
                        {errors.name && (
                            <p className="text-red-500 text-[11px] mt-1 mr-1 font-semibold">
                                {errors.name}
                            </p>
                        )}
                    </div>

                    {/* نوع التأشيرة واختيار الكفيل */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-bold text-zinc-500 mb-1.5 mr-1">
                                نوع التأشيرة
                            </label>
                            <select
                                value={data.type}
                                onChange={(e) =>
                                    setData("type", e.target.value)
                                }
                                className={`w-full px-4 py-2.5 bg-zinc-50/50 border rounded-xl text-sm transition-all focus:outline-hidden focus:ring-2 ${errors.type ? "border-red-300 focus:ring-red-100" : "border-zinc-200 focus:ring-emerald-100 focus:border-emerald-500"}`}
                            >
                                <option value="">
                                    -- اختر نوع التأشيرة --
                                </option>
                                <option value="work_temp_hajj_umrah">
                                    تأشيرة العمل المؤقت للحج والعمرة
                                </option>
                                <option value="work">تأشيرة عمل</option>
                                <option value="temporary_work">
                                    تأشيرة عمل مؤقت
                                </option>
                            </select>
                            {errors.type && (
                                <p className="text-red-500 text-[11px] mt-1 mr-1 font-semibold">
                                    {errors.type}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-zinc-500 mb-1.5 mr-1">
                                اختيار الكفيل المرتبط
                            </label>
                            <select
                                value={data.sponsor_id}
                                onChange={(e) =>
                                    setData("sponsor_id", e.target.value)
                                }
                                className={`w-full px-4 py-2.5 bg-zinc-50/50 border rounded-xl text-sm transition-all focus:outline-hidden focus:ring-2 ${errors.sponsor_id ? "border-red-300 focus:ring-red-100" : "border-zinc-200 focus:ring-emerald-100 focus:border-emerald-500"}`}
                            >
                                <option value="">
                                    -- اختر الكفيل المعتمد --
                                </option>
                                {sponsors.map((sponsor) => (
                                    <option key={sponsor.id} value={sponsor.id}>
                                        {sponsor.name}
                                    </option>
                                ))}
                            </select>
                            {errors.sponsor_id && (
                                <p className="text-red-500 text-[11px] mt-1 mr-1 font-semibold">
                                    {errors.sponsor_id}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* رقم الصادر والقنصلية (سليكت الجديدة) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-bold text-zinc-500 mb-1.5 mr-1">
                                رقم الصادر / الإصدار
                            </label>
                            <input
                                type="text"
                                value={data.issue_number}
                                onChange={(e) =>
                                    setData("issue_number", e.target.value)
                                }
                                className={`w-full px-4 py-2.5 bg-zinc-50/50 border rounded-xl text-sm transition-all focus:outline-hidden focus:ring-2 ${errors.issue_number ? "border-red-300 focus:ring-red-100" : "border-zinc-200 focus:ring-emerald-100 focus:border-emerald-500"}`}
                                placeholder="أدخل رقم الصادر الإلكتروني"
                            />
                            {errors.issue_number && (
                                <p className="text-red-500 text-[11px] mt-1 mr-1 font-semibold">
                                    {errors.issue_number}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-zinc-500 mb-1.5 mr-1">
                                القنصلية / البعثة
                            </label>
                            <select
                                value={data.consulate}
                                onChange={(e) =>
                                    setData("consulate", e.target.value)
                                }
                                className={`w-full px-4 py-2.5 bg-zinc-50/50 border rounded-xl text-sm transition-all focus:outline-hidden focus:ring-2 ${errors.consulate ? "border-red-300 focus:ring-red-100" : "border-zinc-200 focus:ring-emerald-100 focus:border-emerald-500"}`}
                            >
                                <option value="">-- اختر القنصلية --</option>
                                <option value="القاهرة">القاهرة</option>
                                <option value="الإسكندرية">الإسكندرية</option>
                                <option value="السويس">السويس</option>
                            </select>
                            {errors.consulate && (
                                <p className="text-red-500 text-[11px] mt-1 mr-1 font-semibold">
                                    {errors.consulate}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* التاريخ الهجري */}
                    <div>
                        <label className="block text-xs font-bold text-zinc-500 mb-1.5 mr-1">
                            تاريخ الإصدار (هجري)
                        </label>
                        <input
                            type="text"
                            value={data.issue_date_hijri}
                            onChange={(e) =>
                                setData("issue_date_hijri", e.target.value)
                            }
                            className={`w-full px-4 py-2.5 bg-zinc-50/50 border rounded-xl text-sm transition-all focus:outline-hidden focus:ring-2 ${errors.issue_date_hijri ? "border-red-300 focus:ring-red-100" : "border-zinc-200 focus:ring-emerald-100 focus:border-emerald-500"}`}
                            placeholder="مثال: 15/08/1447"
                        />
                        {errors.issue_date_hijri && (
                            <p className="text-red-500 text-[11px] mt-1 mr-1 font-semibold">
                                {errors.issue_date_hijri}
                            </p>
                        )}
                    </div>

                    {/* أزرار الإجراءات والـ Actions */}
                    <div className="pt-4 flex gap-3 border-t border-zinc-100 mt-6">
                        <button
                            type="submit"
                            disabled={processing}
                            className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl transition-all shadow-sm shadow-emerald-100 disabled:opacity-50 cursor-pointer text-center text-sm"
                        >
                            {processing
                                ? "جاري الحفظ والربط.."
                                : visa
                                  ? "تحديث التأشيرة"
                                  : "حفظ التأشيرة والربط"}
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-5 py-3 bg-zinc-100 text-zinc-600 font-bold rounded-xl hover:bg-zinc-200 transition-all cursor-pointer text-sm"
                        >
                            إلغاء
                        </button>
                    </div>
                </form>
            </div>
        </Modal>
    );
}
