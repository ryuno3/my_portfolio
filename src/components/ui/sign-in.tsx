import { CodeBracketSquareIcon } from "@heroicons/react/24/outline";
import { sawarabiMincho } from "@/app/layout";
import { auth, signIn } from "@/lib/auth/auth";
import { redirect } from "next/navigation";

export default async function SignIn() {
  const session = await auth();
  if (session) {
    // セッションが存在する場合はダッシュボードにリダイレクト
    await redirect("/dashboard");
  }
  // セッションが存在しない場合はサインインフォームを表示
  // ここでサインインフォームを表示する
  return (
    <div className="max-w-md mx-auto">
      <div className="bg-washi-50 p-8 rounded-lg shadow-md border border-washi-200">
        <p className={`${sawarabiMincho.className} text-sumi mb-6 text-center`}>
          管理者用のサインインページです
        </p>

        <form
          action={async () => {
            "use server";
            await signIn("github");
          }}
          className="w-full"
        >
          <div className="flex justify-center">
            <button
              type="submit"
              className="flex items-center gap-2 bg-kusagi hover:bg-opacity-90 text-washi-50 px-6 py-3 rounded-md transition-all duration-300 shadow-sm"
            >
              <CodeBracketSquareIcon className="h-5 w-5" />
              <span>GitHubでサインイン</span>
            </button>
          </div>
        </form>

        <div className="mt-8 pt-4 border-t border-washi-200 text-center">
          <p className="text-sm text-sumi opacity-80">
            このサインイン機能は管理者（西野龍ノ介）がコンテンツを編集するためのものです
          </p>
        </div>
      </div>
    </div>
  );
}
