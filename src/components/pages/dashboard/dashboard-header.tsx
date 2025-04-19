import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { sawarabiMincho } from "@/app/layout";
import LogoutButton from "@/components/ui/logout-button";

export default function DashboardHeader() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <Link
            href="/"
            className="inline-flex items-center text-kusagi hover:text-akane transition-colors"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            <span>サイトに戻る</span>
          </Link>
          <h1 className={`${sawarabiMincho.className} text-2xl font-bold text-kusagi`}>
            管理ダッシュボード
          </h1>
        </div>

        <LogoutButton />
      </div>
    </header>
  );
}
