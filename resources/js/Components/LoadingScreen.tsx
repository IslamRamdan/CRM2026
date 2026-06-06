import { useEffect, useState } from "react";
import { router } from "@inertiajs/react";

// =========================================================
// مكوّن شاشة التحميل - Loading Screen
// يستخدم شعار إنجاز سكور مع حركة نبض وحلقة دوارة
// يظهر تلقائياً عند الانتقال بين الصفحات عبر Inertia
// =========================================================

export default function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // الاستماع لأحداث Inertia عند بدء الانتقال وانتهائه
        const startHandler = () => setIsLoading(true);
        const finishHandler = () => setIsLoading(false);

        // عند بدء التنقل بين الصفحات
        const removeStart = router.on("start", startHandler);
        // عند انتهاء التنقل بنجاح أو فشل
        const removeFinish = router.on("finish", finishHandler);

        return () => {
            removeStart();
            removeFinish();
        };
    }, []);

    // إذا لم يكن هناك تحميل، لا نعرض شيئاً
    if (!isLoading) return null;

    return (
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center"
            style={{
                background: "linear-gradient(135deg, #1a2e22 0%, #0f1a14 100%)",
            }}
        >
            {/* الحاوية المركزية */}
            <div className="flex flex-col items-center gap-6">
                {/* الحلقة الدوارة بداخلها الشعار */}
                <div className="relative flex items-center justify-center">
                    {/* الحلقة الخارجية الدوارة */}
                    <div
                        className="w-24 h-24 rounded-full border-4 border-transparent"
                        style={{
                            borderTopColor: "#eab308",
                            borderRightColor: "rgba(234,179,8,0.3)",
                            borderBottomColor: "transparent",
                            borderLeftColor: "rgba(234,179,8,0.15)",
                            animation: "spin 1s linear infinite",
                        }}
                    />

                    {/* الحلقة الداخلية تدور عكسياً */}
                    <div
                        className="absolute w-16 h-16 rounded-full border-4 border-transparent"
                        style={{
                            borderTopColor: "rgba(255,255,255,0.15)",
                            borderBottomColor: "rgba(255,255,255,0.4)",
                            borderRightColor: "transparent",
                            borderLeftColor: "transparent",
                            animation: "spin 1.5s linear infinite reverse",
                        }}
                    />

                    {/* شعار الشركة في المنتصف ينبض */}
                    <div
                        className="absolute w-10 h-10 flex items-center justify-center"
                        style={{ animation: "logoPulse 1.8s ease-in-out infinite" }}
                    >
                        <img
                            src="/logo.png"
                            alt="إنجاز سكور"
                            className="w-full h-full object-contain"
                            style={{ filter: "brightness(0) invert(1)" }}
                        />
                    </div>
                </div>

                {/* نص "جاري التحميل..." */}
                <p
                    className="text-white/70 text-sm font-bold tracking-widest"
                    style={{
                        fontFamily: "'Cairo', sans-serif",
                        animation: "fadeInOut 1.8s ease-in-out infinite",
                    }}
                >
                    جاري التحميل...
                </p>
            </div>

            {/* أنيميشن CSS مضمّنة */}
            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                @keyframes logoPulse {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.6; transform: scale(0.88); }
                }
                @keyframes fadeInOut {
                    0%, 100% { opacity: 0.5; }
                    50% { opacity: 1; }
                }
            `}} />
        </div>
    );
}
