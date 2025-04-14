import React from "react";
import LogoutButton from "./LogoutButton";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth();
  if (!session) {
    // セッションが存在しない場合はサインインページにリダイレクト
    return redirect("/sign-in");
  }
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">DashboardPage</h1>
        <LogoutButton />
      </div>
      <div className="dashboard-content">{/* ダッシュボードのコンテンツがここに入ります */}</div>
    </div>
  );
}
