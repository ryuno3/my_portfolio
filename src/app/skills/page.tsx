import { Suspense } from "react";
import Headline from "@/components/ui/headline";
import { SkillCardSkeleton } from "@/components/ui/skill-card";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { sawarabiMincho } from "../layout";
import SkillsList from "@/components/pages/skills/skills-list";

export const metadata = {
  title: "技術と経験 | 西野 龍ノ介のポートフォリオ",
  description: "西野 龍ノ介のスキルと技術経験の一覧",
};

// スキルのローディング状態
function SkillsLoadingState() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {[...Array(8)].map((_, index) => (
        <SkillCardSkeleton key={index} size="large" />
      ))}
    </div>
  );
}

export default function SkillsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center text-kusagi hover:text-akane transition-colors"
        >
          <ArrowLeftIcon className="h-4 w-4 mr-2" />
          <span>ホームに戻る</span>
        </Link>
      </div>

      <div className="mb-12 text-center">
        <h1
          className={`${sawarabiMincho.className} text-4xl md:text-5xl font-bold mb-4 text-kusagi`}
        >
          技術と経験
        </h1>
        <div className="w-24 h-1 bg-akane mx-auto my-6"></div>
        <p className="text-lg text-sumi max-w-2xl mx-auto">
          これまでに習得してきた技術スタックと経験の一覧です。
          日々新しい技術の学習に取り組んでいます。
        </p>
      </div>

      <section className="washi-container">
        <Headline title="スキル一覧" color="text-akane" />

        <Suspense fallback={<SkillsLoadingState />}>
          <SkillsList />
        </Suspense>
      </section>

      <section className="washi-container mt-16">
        <Headline title="技術への取り組み" color="text-asagi" />
        <div className="bg-washi-50 p-6 rounded-lg shadow-sm">
          <p className="text-lg mb-4">
            技術スタックの選定は、プロジェクトの要件や目的に合わせて行っています。
            特にTypeScriptを中心に、フロントエンドではNext.js、バックエンドではHonoやPrismaを活用しています。
          </p>
          <p className="text-lg mb-4">
            設計面では、ドメイン駆動設計（DDD）の考え方を取り入れ、ビジネスの本質を反映したシステム構築を心がけています。
            また、UIデザインからインフラ構築まで一貫して手掛けることで、エンドツーエンドでの価値提供を目指しています。
          </p>
          <p className="text-lg">
            新しい技術への探求心を持ちながらも、本質的な課題解決を常に意識しています。
          </p>
        </div>
      </section>
    </div>
  );
}
