import { useState } from "react";
import { Link, usePage } from "@inertiajs/react";

interface SidebarProps {
    isCollapsed?: boolean; // اختياري في حال أردت تفعيله لاحقاً
}

export default function Sidebar({ isCollapsed = false }: SidebarProps) {
    const { url, props } = usePage();
    const user = props.auth?.user || {
        name: "مستخدم", // قيمة افتراضية في حال لم يكن المستخدم مسجل بعد
        email: "user",
    };
    const company = props.auth?.user?.company || {
        name: "منصة", // قيمة افتراضية في حال لم تكن الشركة مسجلة بعد
        email: "erfa20045@gmail.com",
    };

    // حالة لتخزين نص البحث
    const [searchQuery, setSearchQuery] = useState("");

    const isActive = (href: string) => {
        return url.startsWith(href);
    };

    // مصفوفة عناصر القائمة بناءً على التصميم المرفق في الصورة
    const menuItems = [
        { href: "/dashboard", label: "لوحة التحكم", icon: "📊" },
        {
            href: "/leads",
            label: "العملاء المحتملون",
            icon: "🎯",
            hasDot: true,
        },
        { href: "/delegates", label: "المناديب", icon: "✅" },
        { href: "/groups", label: "المجموعات", icon: "🕌" },
        { href: "/pilgrims", label: "الحجاج", icon: "👥" },
        { href: "/sub-agents", label: "الوكلاء الفرعيون", icon: "🤝" },
        { href: "/visas", label: "التأشيرات", icon: "🛂" },
        { href: "/passport-check", label: "فحص الجوازات", icon: "🪪" },
        { href: "/vaccines", label: "التطعيمات", icon: "💉" },
        { href: "/hotels", label: "الفنادق والغرف", icon: "🏨" },
        { href: "/hotels", label: "الفنادق والغرف", icon: "🏨" },
        { href: "/hotels", label: "الفنادق والغرف", icon: "🏨" },
        { href: "/hotels", label: "الفنادق والغرف", icon: "🏨" },
        { href: "/hotels", label: "الفنادق والغرف", icon: "🏨" },
        { href: "/hotels", label: "الفنادق والغرف", icon: "🏨" },
        { href: "/hotels", label: "الفنادق والغرف", icon: "🏨" },
        { href: "/hotels", label: "الفنادق والغرف", icon: "🏨" },
        { href: "/hotels", label: "الفنادق والغرف", icon: "🏨" },
        { href: "/hotels", label: "الفنادق والغرف", icon: "🏨" },
        { href: "/hotels", label: "الفنادق والغرف", icon: "🏨" },
    ];

    return (
        <aside
            className="w-[280px] min-h-screen bg-white dark:bg-zinc-900 border-l border-zinc-100 dark:border-zinc-800 shadow-sm flex flex-col justify-between sticky top-0 font-sans transition-colors duration-300"
            dir="rtl"
        >
            {/* القسم العلوي (الشعار، التنبيهات، اسم الوكالة، والبحث) */}
            <div>
                {/* لوجو المنصة (Manasek) */}
                <div className="p-4 flex justify-center border-b border-zinc-50 dark:border-zinc-800">
                    <img
                        src="/logo.png"
                        alt="Manasek"
                        className="h-10 w-auto object-contain"
                        onError={(e) => {
                            // حيلة احتياطية في حال لم يجد ملف الصورة يعرض نصاً تجميلياً
                            e.currentTarget.style.display = "none";
                        }}
                    />
                </div>

                {/* معلومات الوكالة الإدارية والتنبيهات */}
                <div className="px-6 py-4 flex items-center justify-between">
                    {/* زر التنبيهات الجانبي الأنيق */}
                    <button className="relative p-2 text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-xl transition-all cursor-pointer">
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
                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.02 6.02 0 00-4.902-5.903m0 0V4a1 1 0 10-2 0v1.097A6.02 6.02 0 006 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v1m6 0H9"
                            />
                        </svg>
                    </button>

                    {/* تفاصيل المنشأة والوكالة */}
                    <div className="text-left">
                        <p className="text-[10px] text-zinc-400 dark:text-zinc-500 font-bold tracking-wide">
                            الشركة
                        </p>
                        <p className="text-base font-black text-zinc-800 dark:text-zinc-100">
                            {company.name}
                        </p>
                    </div>
                </div>

                {/* قائمة روابط التنقل المستوحاة بالكامل من تصميمك */}
                <div className="px-3 overflow-y-auto max-h-[calc(100vh-270px)] custom-scrollbar">
                    <ul className="space-y-1">
                        {menuItems.map((item) => {
                            const active = isActive(item.href);
                            return (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className={`group flex items-center justify-between px-4 py-3 rounded-xl font-bold text-sm transition-all duration-200 relative ${
                                            active
                                                ? "bg-indigo-50/60 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-400"
                                                : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50/80 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100"
                                        }`}
                                    >
                                        {/* الجزء الأيمن: الأيقونة والنص والمؤشر النقطي */}
                                        <div className="flex items-center gap-3">
                                            {/* النقطة الزرقاء التجميلية في الكرت المختار المرفق */}
                                            {item.hasDot && active && (
                                                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse" />
                                            )}
                                            <span className="text-base filter drop-shadow-xs group-hover:scale-105 transition-transform">
                                                {item.icon}
                                            </span>
                                            <span className="font-medium text-[13.5px] tracking-wide">
                                                {item.label}
                                            </span>
                                        </div>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>

            {/* القسم السفلي (بيانات الحساب وزر تسجيل الخروج المستقل) */}
            <div className="p-4 border-t border-zinc-100 dark:border-zinc-800 bg-zinc-50/40 dark:bg-zinc-900/60 space-y-3">
                {/* الملف الشخصي المصغر */}
                <div className="flex items-center justify-between px-2">
                    <div className="flex flex-col text-right min-w-0 overflow-hidden">
                        <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400 truncate mr-1">
                            {user.email}
                        </span>
                    </div>
                    {/* الحرف الأول الافتراضي من الإيميل أو الاسم */}
                    <div className="w-9 h-9 rounded-full bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-100 dark:border-indigo-900 text-indigo-700 dark:text-indigo-400 flex items-center justify-center font-black text-sm uppercase shadow-xs shrink-0">
                        {user.email.charAt(0)}
                    </div>
                </div>

                {/* زر تسجيل الخروج المطابق للجروب السفلي في لقطة الشاشة */}
                <Link
                    href={route("logout")}
                    method="post"
                    as="button"
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:border-red-200 dark:hover:border-red-900 hover:bg-red-50/40 dark:hover:bg-red-950/30 text-zinc-700 dark:text-zinc-300 hover:text-red-600 dark:hover:text-red-400 rounded-xl text-xs font-bold shadow-xs transition-all cursor-pointer"
                >
                    <svg
                        className="w-4 h-4 transform rotate-180"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                    </svg>
                    <span>تسجيل الخروج</span>
                </Link>
            </div>
        </aside>
    );
}
