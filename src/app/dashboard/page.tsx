import React from "react";
import { auth } from "@/lib/auth/auth";
import { redirect } from "next/navigation";
import DashboardHeader from "@/components/pages/dashboard/dashboard-header";
import DashboardTabs from "@/components/pages/dashboard/dashboard-tabs";
import SkillsManager from "@/components/pages/dashboard/skills/skills-manager";
import ProjectsManager from "@/components/pages/dashboard/projects/projects-manager";

interface DashboardPageProps {
  searchParams: Promise<{ tab?: string }>;
}

export default async function DashboardPage({ searchParams }: DashboardPageProps) {
  const session = await auth();
  if (!session) {
    // セッションが存在しない場合はサインインページにリダイレクト
    return redirect("/sign-in");
  }

  // searchParamsをawaitして取得
  const params = await searchParams;
  // アクティブなタブの管理（デフォルトはskills）
  const activeTab = params.tab || "skills";

  return (
    <div className="min-h-screen bg-washi-100">
      <DashboardHeader />

      <main className="max-w-7xl mx-auto px-4 py-6">
        <DashboardTabs activeTab={activeTab} />

        <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
          {activeTab === "skills" ? <SkillsManager /> : <ProjectsManager />}
        </div>
      </main>
    </div>
  );
}
