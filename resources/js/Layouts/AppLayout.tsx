import { useState } from "react";
import Sidebar from "@/Components/Sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
    // إدارة حالة الانكماش من الكومبوننت الأب لتحديث مساحة الشاشة بالكامل
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <div
            className="flex bg-zinc-50 min-h-screen text-zinc-900 overflow-x-hidden"
            dir="rtl"
        >
            {/* تمرير الحالات للسايد بار */}
            <Sidebar
                isCollapsed={isCollapsed}
                setIsCollapsed={setIsCollapsed}
            />

            {/* المحتوى الرئيسي يتمدد وينكمش بسلاسة بفضل الترانزيشن */}
            <main className="flex-1 p-6 transition-all duration-350 ease-in-out overflow-y-auto">
                {children}
            </main>
        </div>
    );
}
