import AppLayout from "@/Layouts/AppLayout";
import {
    Users,
    FileCheck,
    UserCheck,
    TrendingUp,
    ArrowUpRight,
    ArrowDownRight,
    Calendar,
    Clock,
    Activity,
} from "lucide-react";

export default function Dashboard() {
    // 📊 بيانات افتراضية ممتازة تمثل حركة العمل في المنصة (التأشيرات، الكفلاء، والمناديب)
    const stats = [
        {
            label: "إجمالي التأشيرات",
            value: "1,248",
            change: "+12.5%",
            isPositive: true,
            icon: FileCheck,
            desc: "تأشيرة صادرة هذا الشهر",
        },
        {
            label: "الكفلاء المسجلين",
            value: "84",
            change: "+4.2%",
            isPositive: true,
            icon: UserCheck,
            desc: "كفيل نشط بالمنظومة",
        },
        {
            label: "المناديب على ذمة المعاملات",
            value: "32",
            change: "-2.1%",
            isPositive: false,
            icon: Users,
            desc: "مناديب في المنافذ حالياً",
        },
        {
            label: "معدل الإنجاز وسرعة المعاملة",
            value: "94.8%",
            change: "+1.8%",
            isPositive: true,
            icon: Activity,
            desc: "ربط وتحديث فوري",
        },
    ];

    // بيانات تجميلية لرسم بياني شريطي (Bar Chart) نقي ومكتوب بالـ Tailwind النظيف بدون مكتبات ثقيلة
    const chartData = [
        { month: "محرم", value: 45, label: "٤٥" },
        { month: "صفر", value: 65, label: "٦٥" },
        { month: "ربيع ١", value: 80, label: "٨٠" },
        { month: "ربيع ٢", value: 95, label: "٩٥" },
        { month: "جمادى ١", value: 70, label: "٧٠" },
        { month: "جمادى ٢", value: 110, label: "١١٠" },
    ];

    // أحدث المعاملات المضافة مؤخراً لتعطي حياة للوحة التحكم
    const recentActivities = [
        {
            id: 1,
            name: "تأشيرة عمل مؤقت - الحج ١٤٤٧",
            sponsor: "شركة مكة للإنشاء",
            status: "مكتمل",
            time: "قبل ١٠ دقائق",
            consulate: "القاهرة",
        },
        {
            id: 2,
            name: "تحديث بيانات كفيل معتمد",
            sponsor: "مجموعة الراجحي للاستثمار",
            status: "جاري المعالجة",
            time: "قبل ٢٥ دقيقة",
            consulate: "الإسكندرية",
        },
        {
            id: 3,
            name: "ربط مندوب جديد ببعثة السويس",
            sponsor: "مؤسسة الضيافة المحدودة",
            status: "مكتمل",
            time: "قبل ساعة",
            consulate: "السويس",
        },
    ];

    return (
        <AppLayout>
            <div className="space-y-6 p-1 p-4 md:p-8" dir="rtl">
                {/* 🇸🇦 هيدر الترحيب بالهوية البصرية المتألقة */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-zinc-100 dark:border-zinc-800 pb-5">
                    <div>
                        <h1 className="text-2xl font-black text-zinc-900 dark:text-zinc-50 tracking-tight">
                            لوحة التحكم والإحصائيات
                        </h1>
                        <p className="text-zinc-500 dark:text-zinc-400 text-xs mt-1 font-medium">
                            مرحباً بك في نظام واثق لأتمتة وربط التأشيرات
                            الحكومية والمناديب.
                        </p>
                    </div>

                    {/* ويدجت التاريخ الفخم */}
                    <div className="flex items-center gap-2 bg-emerald-50/40 dark:bg-emerald-950/20 border border-emerald-100/80 dark:border-emerald-900/40 px-4 py-2 rounded-xl text-emerald-800 dark:text-emerald-400 text-xs font-bold shadow-2xs">
                        <Calendar className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                        <span>التقرير اللحظي الرقمي للشركة</span>
                    </div>
                </div>

                {/* 📈 كروت الإحصائيات الأربعة بتصميم جيت هاب النظيف والأخضر السعودي */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {stats.map((stat, idx) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={idx}
                                className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl p-5 shadow-2xs hover:border-emerald-200 dark:hover:border-emerald-800/60 transition-all duration-200 group relative overflow-hidden"
                            >
                                <div className="flex items-start justify-between">
                                    <div className="space-y-2">
                                        <span className="text-xs font-bold text-zinc-400 dark:text-zinc-500 block">
                                            {stat.label}
                                        </span>
                                        <span className="text-3xl font-black text-zinc-900 dark:text-zinc-100 tracking-tight block">
                                            {stat.value}
                                        </span>
                                    </div>
                                    <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 group-hover:bg-emerald-50 dark:group-hover:bg-emerald-950/40 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                                        <Icon className="w-5 h-5 stroke-[2.5]" />
                                    </div>
                                </div>

                                <div className="mt-4 flex items-center gap-2 text-[11px] border-t border-zinc-50 dark:border-zinc-800/50 pt-3">
                                    <span
                                        className={`flex items-center font-bold px-1.5 py-0.5 rounded-md ${
                                            stat.isPositive
                                                ? "bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400"
                                                : "bg-red-50 dark:bg-red-950/50 text-red-600 dark:text-red-400"
                                        }`}
                                    >
                                        {stat.isPositive ? (
                                            <ArrowUpRight className="w-3 h-3 ml-0.5" />
                                        ) : (
                                            <ArrowDownRight className="w-3 h-3 ml-0.5" />
                                        )}
                                        {stat.change}
                                    </span>
                                    <span className="text-zinc-400 dark:text-zinc-500 font-medium">
                                        {stat.desc}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* 📊 قسم الرسم البياني والنشاطات الأخيرة في صف واحد متناسق */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* الرسوم البيانية التفاعلية (Pure CSS/Tailwind Chart) */}
                    <div className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl p-6 shadow-2xs lg:col-span-2 flex flex-col justify-between">
                        <div className="flex items-center justify-between border-b border-zinc-50 dark:border-zinc-800 pb-4 mb-6">
                            <div>
                                <h3 className="text-sm font-black text-zinc-800 dark:text-zinc-200 flex items-center gap-2">
                                    <TrendingUp className="w-4 h-4 text-emerald-600" />
                                    مخطط إصدار التأشيرات الدوري
                                </h3>
                                <p className="text-[11px] text-zinc-400 dark:text-zinc-500 mt-0.5 font-medium">
                                    معدل المعاملات المربوطة والمنجزة عبر
                                    القنصليات
                                </p>
                            </div>
                            <span className="text-[11px] bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 font-bold px-2.5 py-1 rounded-lg">
                                الشهور الهجرية الحالية
                            </span>
                        </div>

                        {/* خطوط الرسم البياني */}
                        <div className="h-48 flex items-end justify-between gap-3 px-2 pt-4">
                            {chartData.map((data, idx) => (
                                <div
                                    key={idx}
                                    className="flex-1 flex flex-col items-center gap-2 h-full justify-end group/bar"
                                >
                                    {/* رقم القيمة يظهر عند التحويم أو ثابت بشكل خفيف */}
                                    <span className="text-[10px] font-black text-emerald-700 dark:text-emerald-400 opacity-0 group-hover/bar:opacity-100 transition-opacity bg-emerald-50 dark:bg-emerald-950/80 px-1.5 py-0.5 rounded-md mb-1">
                                        {data.label}
                                    </span>
                                    {/* العمود الملون بالأخضر السعودي */}
                                    <div
                                        style={{
                                            height: `${(data.value / 120) * 100}%`,
                                        }}
                                        className="w-full bg-zinc-100 dark:bg-zinc-800 group-hover/bar:bg-emerald-600 dark:group-hover/bar:bg-emerald-500 rounded-t-lg transition-all duration-300 relative overflow-hidden min-h-[5px]"
                                    >
                                        <div className="absolute inset-0 bg-linear-to-t from-black/5 to-transparent" />
                                    </div>
                                    <span className="text-[11px] font-bold text-zinc-500 dark:text-zinc-400 mt-1 whitespace-nowrap">
                                        {data.month}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 🕒 آخر الإجراءات والمعاملات المحدثة بالسيستم */}
                    <div className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl p-6 shadow-2xs flex flex-col justify-between">
                        <div>
                            <div className="flex items-center justify-between border-b border-zinc-50 dark:border-zinc-800 pb-4 mb-4">
                                <h3 className="text-sm font-black text-zinc-800 dark:text-zinc-200 flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-amber-500" />
                                    آخر حركات التأشيرات
                                </h3>
                            </div>

                            <div className="space-y-3.5">
                                {recentActivities.map((act) => (
                                    <div
                                        key={act.id}
                                        className="flex items-start justify-between gap-3 p-2.5 hover:bg-zinc-50/60 dark:hover:bg-zinc-800/40 rounded-xl transition-all border border-transparent hover:border-zinc-100 dark:hover:border-zinc-800"
                                    >
                                        <div className="space-y-1 min-w-0">
                                            <p className="text-xs font-bold text-zinc-800 dark:text-zinc-200 truncate">
                                                {act.name}
                                            </p>
                                            <p className="text-[11px] text-zinc-400 dark:text-zinc-500 truncate font-semibold">
                                                الكفيل: {act.sponsor}
                                            </p>
                                            <div className="flex items-center gap-2 mt-1">
                                                <span className="text-[10px] bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 font-bold px-1.5 py-0.5 rounded-md">
                                                    قنصلية {act.consulate}
                                                </span>
                                                <span className="text-[10px] text-zinc-400 font-medium">
                                                    {act.time}
                                                </span>
                                            </div>
                                        </div>

                                        <span
                                            className={`text-[10px] font-bold px-2 py-0.5 rounded-lg shrink-0 ${
                                                act.status === "مكتمل"
                                                    ? "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400"
                                                    : "bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400"
                                            }`}
                                        >
                                            {act.status}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
