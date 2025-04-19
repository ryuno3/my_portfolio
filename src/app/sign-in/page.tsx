import SignIn from "@/components/ui/sign-in";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "管理者サインイン | 西野 龍ノ介のポートフォリオ",
  description: "西野 龍ノ介のポートフォリオサイト管理者用のサインインページです。",
};

export default function SignInPage() {
  return (
    <div className="space-y-8">
      <section className="text-center py-8 bg-washi-100 rounded-lg shadow-sm">
        <h1 className="text-3xl font-bold text-kusagi">管理者認証</h1>
        <p className="mt-2 text-sumi">コンテンツ管理のためのサインインページです</p>
      </section>

      <SignIn />
    </div>
  );
}
