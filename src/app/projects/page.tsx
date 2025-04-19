import Headline from "@/components/ui/headline";

export default function ProjectsPage() {
  return (
    <div className="container mx-auto py-8">
      <Headline title="プロジェクト" color="text-kusagi" />

      <div className="washi-container my-8">
        <p className="text-center text-sumi italic">
          このページは現在開発中です。近日中に実装予定です。
        </p>
        <p className="text-center mt-4">
          プロジェクト一覧ページでは、これまでに手がけた主要なプロジェクトを紹介する予定です。
          各プロジェクトの詳細、使用技術、成果などを表示します。
        </p>
        <div className="japanese-divider" />
      </div>
    </div>
  );
}
