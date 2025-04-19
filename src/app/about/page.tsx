import Headline from "@/components/ui/headline";

export default function AboutPage() {
  return (
    <div className="container mx-auto py-8">
      <Headline title="プロフィール" color="text-kusagi" />

      <div className="washi-container my-8">
        <p className="text-center text-sumi italic">
          このページは現在開発中です。近日中に実装予定です。
        </p>
        <p className="text-center mt-4">
          プロフィールページでは、経歴、スキル、趣味・関心などの自己紹介を掲載する予定です。
          また、これまでの職歴や取り組んできたプロジェクトの概要についても紹介します。
        </p>
        <div className="japanese-divider" />
      </div>
    </div>
  );
}
