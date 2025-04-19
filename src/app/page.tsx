import Headline from "@/components/ui/headline";
import { sawarabiMincho } from "./layout";
import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import SkillsSection from "@/components/section/skills/skills-section";

export default async function Home() {
  return (
    <div className="space-y-16">
      {/* ヒーローセクション */}
      <section className="text-center py-16 bg-washi-100 rounded-lg shadow-sm">
        <h1
          className={`${sawarabiMincho.className} text-5xl md:text-6xl font-bold mb-4 text-kusagi`}
        >
          西野 龍ノ介
        </h1>
        <div className="w-24 h-1 bg-akane mx-auto my-6"></div>
        <p
          className={`${sawarabiMincho.className} text-xl md:text-2xl text-sumi max-w-2xl mx-auto`}
        >
          フルスタックエンジニア
        </p>
      </section>

      {/* 自己紹介セクション */}
      <section className="washi-container">
        <Headline title="はじめまして" color="text-akane" />
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg mb-4">
              普段は、TypeScriptをベースに、Hono（+Prisma）でのバックエンド開発や
              Next.jsでのフロントエンド構築に取り組んでいます。
              これまで飲食・物流業界での現場経験があり、「現場の業務がどうすればもっとスムーズになるか？」という視点からシステムを考えることが得意です。
              その中で、ドメイン駆動設計（DDD）にも関心を持ち、業務理解と設計のつながりを意識した開発を学んでいます。
              UI/UXの設計や、インフラ・デプロイの部分まで自分で手を動かしながら、ビジネスに活きるシステムづくりを目指しています。
            </p>
            <p className="text-lg">
              このポートフォリオサイトでは、私のプロジェクトやスキル、経験を紹介しています。
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="rounded-full border-4 border-washi-200 p-1 overflow-hidden w-64 h-64">
              <Image
                src="/my_image.jpeg"
                alt="西野龍ノ介"
                width={256}
                height={256}
                priority
                className="rounded-full object-cover"
              />
              <div className="w-full h-full rounded-full bg-washi-200 flex items-center justify-center text-kusagi">
                <span className={`${sawarabiMincho.className} text-2xl`}>写真</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* スキルセクション */}
      <Suspense
        fallback={
          <section className="washi-container">
            <Headline title="使用技術" color="text-akane" />
            <div className="h-40 flex items-center justify-center">
              <div className="animate-pulse text-kusagi">読み込み中...</div>
            </div>
          </section>
        }
      >
        <SkillsSection />
      </Suspense>

      {/* コンタクトセクション */}
      <section className="washi-container">
        <Headline title="お問い合わせ" color="text-yamabuki" />
        <p className="text-lg mb-6">
          お問い合わせやお仕事のご依頼は、以下のリンクからお願いいたします。
        </p>
        <div className="flex justify-center">
          <Link
            href="/contact"
            className="bg-kusagi text-washi-50 px-6 py-3 rounded-md hover:bg-opacity-90 transition duration-300"
          >
            お問い合わせ
          </Link>
        </div>
      </section>
    </div>
  );
}
