import React, { useEffect } from "react";
import { useForm } from "@inertiajs/react";
import Modal from "@/Components/Modal";

interface Delegate {
    id: number;
    name: string;
    phone: string;
}

interface Props {
    isOpen: boolean;
    onClose: () => void;
    delegate: Delegate | null;
}

export default function DelegateForm({ isOpen, onClose, delegate }: Props) {
    const { data, setData, post, put, processing, errors, reset, clearErrors } =
        useForm({
            name: "",
            phone: "",
        });

    // تحديث البيانات عند فتح النافذة للتعديل
    useEffect(() => {
        if (delegate) {
            setData({
                name: delegate.name,
                phone: delegate.phone,
            });
        } else {
            reset();
        }
        clearErrors();
    }, [delegate, isOpen]);

    const submit = (e: React.FormEvent) => {
        e.preventDefault();

        if (delegate) {
            put(route("delegates.update", delegate.id), {
                onSuccess: () => onClose(),
            });
        } else {
            post(route("delegates.store"), {
                onSuccess: () => {
                    reset();
                    onClose();
                },
            });
        }
    };

    return (
        <Modal show={isOpen} onClose={onClose} maxWidth="md">
            <div className="flex flex-col max-h-[90vh]" dir="rtl">
                <div className="p-6 border-b border-zinc-50 flex items-center justify-between">
                    <h3 className="text-lg font-black text-zinc-800">
                        {delegate ? "تعديل بيانات المندوب" : "إضافة مندوب جديد"}
                    </h3>
                    <button
                        onClick={onClose}
                        className="text-zinc-400 hover:text-zinc-600"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                <form onSubmit={submit} className="p-6 space-y-4">
                    <div>
                        <label className="block text-xs font-bold text-zinc-500 mb-1.5 mr-1">
                            اسم المندوب
                        </label>
                        <input
                            type="text"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            className={`w-full px-4 py-2.5 bg-zinc-50 border rounded-xl text-sm transition-all focus:ring-2 ${errors.name ? "border-red-300 focus:ring-red-100" : "border-zinc-200 focus:ring-emerald-100 focus:border-emerald-500"}`}
                            placeholder="أدخل الاسم الرباعي.."
                        />
                        {errors.name && (
                            <p className="text-red-500 text-[10px] mt-1 mr-1 font-bold">
                                {errors.name}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-zinc-500 mb-1.5 mr-1">
                            رقم الهاتف
                        </label>
                        <input
                            type="text"
                            value={data.phone}
                            onChange={(e) => setData("phone", e.target.value)}
                            className={`w-full px-4 py-2.5 bg-zinc-50 border rounded-xl text-sm transition-all focus:ring-2 ${errors.phone ? "border-red-300 focus:ring-red-100" : "border-zinc-200 focus:ring-emerald-100 focus:border-emerald-500"}`}
                            placeholder="مثال: 05XXXXXXXX"
                        />
                        {errors.phone && (
                            <p className="text-red-500 text-[10px] mt-1 mr-1 font-bold">
                                {errors.phone}
                            </p>
                        )}
                    </div>

                    <div className="pt-4 flex gap-3">
                        <button
                            type="submit"
                            disabled={processing}
                            className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl transition-all shadow-md shadow-emerald-100 disabled:opacity-50"
                        >
                            {processing
                                ? "جاري الحفظ.."
                                : delegate
                                  ? "تحديث البيانات"
                                  : "حفظ المندوب"}
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-6 py-3 bg-zinc-100 text-zinc-600 font-bold rounded-xl hover:bg-zinc-200 transition-all"
                        >
                            إلغاء
                        </button>
                    </div>
                </form>
            </div>
        </Modal>
    );
}
