import React, { useEffect } from "react";
import { useForm } from "@inertiajs/react";
import Modal from "@/Components/Modal";

interface Sponsor {
    id: number;
    name: string;
    id_number: string;
    country: string;
    address: string;
}

interface Props {
    isOpen: boolean;
    onClose: () => void;
    sponsor: Sponsor | null;
}

export default function SponsorForm({ isOpen, onClose, sponsor }: Props) {
    // إعداد فورم الـ Inertia المربوط مع فاليـديشن لارافل تلقائياً
    const { data, setData, post, put, processing, errors, reset, clearErrors } =
        useForm({
            name: "",
            id_number: "",
            country: "",
            address: "",
        });

    // تعبئة البيانات في حال وضع "التعديل" وتصفيرها في وضع "الإضافة"
    useEffect(() => {
        if (sponsor) {
            setData({
                name: sponsor.name,
                id_number: sponsor.id_number,
                country: sponsor.country,
                address: sponsor.address,
            });
        } else {
            reset();
        }
        clearErrors();
    }, [sponsor, isOpen]);

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (sponsor) {
            // استدعاء مسار التحديث PUT
            put(route("sponsors.update", sponsor.id), {
                onSuccess: () => onClose(),
            });
        } else {
            // استدعاء مسار الحفظ الجديد POST
            post(route("sponsors.store"), {
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
                        {sponsor ? "تعديل بيانات الكفيل" : "إضافة كفيل جديد"}
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
                    {/* اسم الكفيل */}
                    <div>
                        <label className="block text-xs font-bold text-zinc-500 mb-1.5 mr-1">
                            اسم الكفيل / الشركة الداعمة
                        </label>
                        <input
                            type="text"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            className={`w-full px-4 py-2.5 bg-zinc-50/50 border rounded-xl text-sm transition-all focus:outline-hidden focus:ring-2 ${errors.name ? "border-red-300 focus:ring-red-100" : "border-zinc-200 focus:ring-emerald-100 focus:border-emerald-500"}`}
                            placeholder="أدخل اسم الكفيل بالكامل.."
                        />
                        {errors.name && (
                            <p className="text-red-500 text-[11px] mt-1 mr-1 font-semibold">
                                {errors.name}
                            </p>
                        )}
                    </div>

                    {/* رقم السجل / الهوية والدولة */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-bold text-zinc-500 mb-1.5 mr-1">
                                رقم الهوية / السجل التجاري
                            </label>
                            <input
                                type="text"
                                value={data.id_number}
                                onChange={(e) =>
                                    setData("id_number", e.target.value)
                                }
                                className={`w-full px-4 py-2.5 bg-zinc-50/50 border rounded-xl text-sm transition-all focus:outline-hidden focus:ring-2 ${errors.id_number ? "border-red-300 focus:ring-red-100" : "border-zinc-200 focus:ring-emerald-100 focus:border-emerald-500"}`}
                                placeholder="رقم السجل أو الإقامة الموحد"
                            />
                            {errors.id_number && (
                                <p className="text-red-500 text-[11px] mt-1 mr-1 font-semibold">
                                    {errors.id_number}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-zinc-500 mb-1.5 mr-1">
                                الدولة
                            </label>
                            <input
                                type="text"
                                value={data.country}
                                onChange={(e) =>
                                    setData("country", e.target.value)
                                }
                                className={`w-full px-4 py-2.5 bg-zinc-50/50 border rounded-xl text-sm transition-all focus:outline-hidden focus:ring-2 ${errors.country ? "border-red-300 focus:ring-red-100" : "border-zinc-200 focus:ring-emerald-100 focus:border-emerald-500"}`}
                                placeholder="مثال: المملكة العربية السعودية"
                            />
                            {errors.country && (
                                <p className="text-red-500 text-[11px] mt-1 mr-1 font-semibold">
                                    {errors.country}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* العنوان */}
                    <div>
                        <label className="block text-xs font-bold text-zinc-500 mb-1.5 mr-1">
                            العنوان التفصيلي
                        </label>
                        <textarea
                            value={data.address}
                            onChange={(e) => setData("address", e.target.value)}
                            className={`w-full px-4 py-2.5 bg-zinc-50/50 border rounded-xl text-sm transition-all focus:outline-hidden focus:ring-2 ${errors.address ? "border-red-300 focus:ring-red-100" : "border-zinc-200 focus:ring-emerald-100 focus:border-emerald-500"}`}
                            placeholder="المدينة، الحي، الشارع، المجمع الإداري..."
                            rows={3}
                        />
                        {errors.address && (
                            <p className="text-red-500 text-[11px] mt-1 mr-1 font-semibold">
                                {errors.address}
                            </p>
                        )}
                    </div>

                    {/* أزرار التحكم والـ Actions */}
                    <div className="pt-4 flex gap-3 border-t border-zinc-100 mt-6">
                        <button
                            type="submit"
                            disabled={processing}
                            className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl transition-all shadow-sm shadow-emerald-100 disabled:opacity-50 cursor-pointer text-center text-sm"
                        >
                            {processing
                                ? "جاري الحفظ والرفع.."
                                : sponsor
                                  ? "تحديث كفيل"
                                  : "حفظ كفيل جديد"}
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
