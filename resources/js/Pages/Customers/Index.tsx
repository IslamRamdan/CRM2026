import React, { useState } from "react";
import AppLayout from "@/Layouts/AppLayout";
import { Head, Link } from "@inertiajs/react";
import {
    UserPlus,
    User,
    Phone,
    Briefcase,
    Calendar,
    Edit3,
    Users,
    ChevronLeft,
    LayoutDashboard,
    Search,
    MessageCircle,
} from "lucide-react";

interface Customer {
    id: number;
    name_ar: string;
    phone: string | null;
    whatsapp: string | null;
    personal_image: string | null;
    latest_delegate?: { id: number; name: string }[] | null;
    created_at: string;
}

interface Props {
    customers: Customer[];
}

// ── مساعد تنسيق التاريخ dd/mm/yyyy ─────────────────────────────────────────
function formatDate(iso: string) {
    const d = new Date(iso);
    const dd = String(d.getDate()).padStart(2, "0");
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const yyyy = d.getFullYear();
    return `${dd}/${mm}/${yyyy}`;
}

// ── مكوّن بادج المندوب ───────────────────────────────────────────────────────
function DelegateBadge({ name }: { name?: string | null }) {
    if (!name)
        return (
            <span className="text-zinc-300 dark:text-zinc-600 text-xs font-bold">
                غير محدد
            </span>
        );
    return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 rounded-lg text-[11px] font-black border border-emerald-100 dark:border-emerald-800/50">
            <Briefcase className="w-2.5 h-2.5" />
            {name}
        </span>
    );
}

export default function Index({ customers = [] }: Props) {
    const [search, setSearch] = useState("");

    const filtered = customers.filter(
        (c) =>
            c.name_ar.includes(search) ||
            (c.phone ?? "").includes(search) ||
            (c.latest_delegate?.[0]?.name ?? "").includes(search),
    );

    return (
        <>
            <Head title="إدارة ملفات العملاء" />

            <div className="max-w-7xl mx-auto py-6 px-4" dir="rtl">
                {/* ── الهيدر ─────────────────────────────────────────────── */}
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-8">
                    <div className="space-y-1">
                        <div className="flex items-center gap-2 text-zinc-400 dark:text-zinc-500 text-[10px] font-black tracking-widest uppercase mb-2">
                            <LayoutDashboard className="w-3 h-3" />
                            <span>لوحة التحكم</span>
                            <ChevronLeft className="w-3 h-3" />
                            <span className="text-emerald-600 dark:text-emerald-400">
                                العملاء
                            </span>
                        </div>
                        <div className="flex items-center gap-3">
                            <h1 className="text-2xl font-black text-zinc-900 dark:text-zinc-50 tracking-tight">
                                سجل ملفات العملاء
                            </h1>
                            <span className="px-2.5 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 text-xs font-black rounded-full border border-zinc-200 dark:border-zinc-700">
                                {customers.length} عميل
                            </span>
                        </div>
                    </div>

                    <Link
                        href={route("customers.create")}
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm rounded-2xl transition-all shadow-sm self-start sm:self-auto"
                    >
                        <UserPlus className="w-4 h-4" />
                        <span>إضافة عميل جديد</span>
                    </Link>
                </div>

                {/* ── شريط البحث ─────────────────────────────────────────── */}
                <div className="relative mb-6">
                    <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 dark:text-zinc-500" />
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="ابحث بالاسم أو الهاتف أو المندوب..."
                        className="w-full pr-11 pl-4 py-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-2xl text-sm font-bold text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-300 dark:placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-400 transition-colors"
                    />
                </div>

                {/* ── الجدول ─────────────────────────────────────────────── */}
                <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-right border-collapse">
                            <thead>
                                <tr className="bg-zinc-50 dark:bg-zinc-800/50 border-b border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 text-[10px] font-black tracking-widest uppercase">
                                    <th className="p-4 pr-6 text-right">
                                        العميل
                                    </th>
                                    <th className="p-4 text-center">الهاتف</th>
                                    <th className="p-4 text-center">
                                        الواتساب
                                    </th>
                                    <th className="p-4 text-center">المندوب</th>
                                    <th className="p-4 text-center">
                                        تاريخ التسجيل
                                    </th>
                                    <th className="p-4 pl-6 text-left">
                                        إجراءات
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                                {filtered.length > 0 ? (
                                    filtered.map((customer, i) => (
                                        <tr
                                            key={customer.id}
                                            className="group hover:bg-zinc-50 dark:hover:bg-zinc-800/30 transition-colors"
                                            style={{
                                                animationDelay: `${i * 30}ms`,
                                            }}
                                        >
                                            {/* الاسم */}
                                            <td className="p-4 pr-6 whitespace-nowrap ">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-9 h-9 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-400 dark:text-zinc-500 group-hover:bg-emerald-50 dark:group-hover:bg-emerald-900/30 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-all shrink-0 overflow-hidden justify-center">
                                                        {customer.personal_image ? (
                                                            <img
                                                                src={`/storage/${customer.personal_image}`}
                                                                alt={
                                                                    customer.name_ar
                                                                }
                                                                className="w-full h-full object-cover"
                                                            />
                                                        ) : (
                                                            <User className="w-4 h-4" />
                                                        )}
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">
                                                            {customer.name_ar}
                                                        </p>
                                                        <p className="text-[10px] text-zinc-400 dark:text-zinc-500 font-bold">
                                                            #{customer.id}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>

                                            {/* الهاتف */}
                                            <td className="p-4 whitespace-nowrap">
                                                {customer.phone ? (
                                                    <div
                                                        className="flex items-center gap-1.5 justify-center"
                                                        dir="ltr"
                                                    >
                                                        <Phone className="w-3.5 h-3.5 text-zinc-300 dark:text-zinc-600 shrink-0" />
                                                        <span className="text-xs font-bold text-zinc-700 dark:text-zinc-300">
                                                            {customer.phone}
                                                        </span>
                                                    </div>
                                                ) : (
                                                    <span className="text-zinc-300 dark:text-zinc-700 font-black text-sm">
                                                        —
                                                    </span>
                                                )}
                                            </td>

                                            {/* الواتساب */}
                                            <td className="p-4 whitespace-nowrap">
                                                {customer.whatsapp ? (
                                                    <div
                                                        className="flex items-center gap-1.5 justify-center"
                                                        dir="ltr"
                                                    >
                                                        <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                                                        <span className="text-xs font-bold text-zinc-700 dark:text-zinc-300">
                                                            {customer.whatsapp}
                                                        </span>
                                                    </div>
                                                ) : (
                                                    <span className="text-zinc-300 dark:text-zinc-700 font-black text-sm">
                                                        —
                                                    </span>
                                                )}
                                            </td>

                                            {/* المندوب */}
                                            <td className="p-4 whitespace-nowrap text-center">
                                                <DelegateBadge
                                                    name={
                                                        customer
                                                            .latest_delegate?.[0]
                                                            ?.name
                                                    }
                                                />
                                            </td>

                                            {/* التاريخ */}
                                            <td className="p-4 whitespace-nowrap">
                                                <div className="flex items-center gap-1.5 justify-center">
                                                    <Calendar className="w-3.5 h-3.5 text-zinc-300 dark:text-zinc-600 shrink-0" />
                                                    <span className="text-xs font-bold text-zinc-500 dark:text-zinc-400">
                                                        {formatDate(
                                                            customer.created_at,
                                                        )}
                                                    </span>
                                                </div>
                                            </td>

                                            {/* الإجراءات */}
                                            <td className="p-4 pl-6 whitespace-nowrap text-left">
                                                <div className="inline-flex items-center gap-1 bg-zinc-50 dark:bg-zinc-800 p-1 rounded-xl border border-zinc-200 dark:border-zinc-700 justify-center">
                                                    <Link
                                                        href={""}
                                                        className="p-2 text-zinc-400 dark:text-zinc-500 hover:text-amber-600 dark:hover:text-amber-400 rounded-lg hover:bg-white dark:hover:bg-zinc-700 transition-all"
                                                        title="تعديل البيانات"
                                                    >
                                                        <Edit3 className="w-4 h-4" />
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan={6}
                                            className="p-16 text-center"
                                        >
                                            <div className="flex flex-col items-center gap-4">
                                                <div className="w-14 h-14 rounded-2xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center">
                                                    <Users className="w-6 h-6 text-zinc-300 dark:text-zinc-600" />
                                                </div>
                                                <div className="space-y-1">
                                                    <p className="text-sm font-black text-zinc-900 dark:text-zinc-100">
                                                        {search
                                                            ? "لا توجد نتائج للبحث"
                                                            : "لا يوجد عملاء مسجلين"}
                                                    </p>
                                                    <p className="text-xs text-zinc-400 dark:text-zinc-500 font-bold">
                                                        {search
                                                            ? "جرّب كلمة بحث مختلفة"
                                                            : "ابدأ بإضافة أول عميل للمنظومة الآن."}
                                                    </p>
                                                </div>
                                                {!search && (
                                                    <Link
                                                        href={route(
                                                            "customers.create",
                                                        )}
                                                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs rounded-xl transition-all"
                                                    >
                                                        <UserPlus className="w-3.5 h-3.5" />
                                                        إضافة عميل
                                                    </Link>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* ── فوتر الجدول ──────────────────────────────────────── */}
                    {filtered.length > 0 && (
                        <div className="px-6 py-3 border-t border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-800/20 flex items-center justify-between">
                            <p className="text-[11px] font-bold text-zinc-400 dark:text-zinc-500">
                                {search
                                    ? `${filtered.length} من ${customers.length} نتيجة`
                                    : `إجمالي ${customers.length} عميل`}
                            </p>
                            <p className="text-[11px] font-bold text-zinc-300 dark:text-zinc-600">
                                آخر تحديث:{" "}
                                {formatDate(new Date().toISOString())}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

Index.layout = (page: React.ReactNode) => <AppLayout children={page} />;
