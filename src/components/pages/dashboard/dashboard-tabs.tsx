import Link from "next/link";
import { sawarabiMincho } from "@/fonts/fonts";

interface DashboardTabsProps {
  activeTab: string;
}

export default function DashboardTabs({ activeTab }: DashboardTabsProps) {
  const tabs = [
    { id: "skills", label: "スキル管理" },
    { id: "projects", label: "プロジェクト管理" },
  ];

  return (
    <div className="mt-4">
      <div className={`${sawarabiMincho.className} flex space-x-2 border-b border-washi-300`}>
        {tabs.map((tab) => (
          <Link
            key={tab.id}
            href={`/dashboard?tab=${tab.id}`}
            className={`px-4 py-2 text-lg font-medium 
            ${
              activeTab === tab.id
                ? "text-akane border-b-2 border-akane"
                : "text-sumi hover:text-kusagi"
            }`}
          >
            {tab.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
