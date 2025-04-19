export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-washi-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-sm">
        {/* スピナーアニメーション */}
        <div className="inline-block mb-4">
          <div className="w-12 h-12 border-4 border-asagi/30 border-t-asagi rounded-full animate-spin" />
        </div>

        {/* シンプルなテキスト - ドットアニメーションはブラウザが処理するためクライアントコンポーネント不要 */}
        <h2 className="text-xl font-semibold text-kusagi">読み込み中...</h2>
      </div>
    </div>
  );
}
