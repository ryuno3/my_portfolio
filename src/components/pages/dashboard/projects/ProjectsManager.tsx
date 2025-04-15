import { InboxIcon } from "@heroicons/react/24/outline";

// プロジェクト管理のワイヤーフレームとして表示するコンポーネント
export default function ProjectsManager() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-kusagi">プロジェクト一覧</h2>
        <button className="inline-flex items-center px-4 py-2 bg-asagi text-white rounded-md hover:bg-asagi/80 transition-colors">
          新規プロジェクト追加
        </button>
      </div>

      {/* ワイヤーフレーム - 実装予定の表示 */}
      <div className="py-16 flex flex-col items-center justify-center bg-washi-50 rounded-lg border-2 border-dashed border-washi-300">
        <InboxIcon className="h-16 w-16 text-washi-400 mb-4" />
        <h3 className="text-lg font-medium text-sumi mb-2">プロジェクト管理機能は開発中です</h3>
        <p className="text-sm text-sumi-500 max-w-md text-center">
          プロジェクト管理機能は現在実装中です。近日中に公開予定ですので、もう少々お待ちください。
        </p>
      </div>

      {/* 今後実装予定の機能説明 */}
      <div className="mt-8 bg-washi-50 p-4 rounded-lg">
        <h3 className="text-md font-medium text-kusagi mb-2">実装予定の機能</h3>
        <ul className="list-disc list-inside text-sm text-sumi space-y-1">
          <li>プロジェクトの追加、編集、削除</li>
          <li>プロジェクト画像のアップロード</li>
          <li>プロジェクトの詳細情報（使用技術、リンク先など）の管理</li>
          <li>プロジェクトの並び順変更</li>
          <li>公開/非公開設定</li>
        </ul>
      </div>
    </div>
  );
}
