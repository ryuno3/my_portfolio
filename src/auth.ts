import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [GitHub],
  callbacks: {
    async signIn({ user }) {
      // 管理者のみがサインインできるようにする（例: 特定のメールアドレスの確認）
      // ここでは例として単純なチェックを実装していますが、実際は適切な条件を設定してください
      const allowedEmails = process.env.ALLOWED_EMAIL; // 管理者のメールアドレスを設定

      if (!allowedEmails?.includes(user.email || "")) {
        return false; // サインインを拒否
      }

      return true; // サインインを許可
    },
  },
  pages: {
    signIn: "/sign-in",
    error: "/auth-error", // オプション：認証エラーページ
  },
});
