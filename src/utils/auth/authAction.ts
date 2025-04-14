import { auth } from "@/auth";
// import { User } from "@/generated/prisma";
// import prisma from "@/lib/prisma/prismaClient";

export class AuthAction {
  private async getSession() {
    try {
      const session = await auth();
      if (!session) {
        // セッションが取得できない場合の処理
        throw new Error("セッションが取得できませんでした");
      }
      return session;
    } catch (e) {
      console.error("セッション取得エラー:", e);
      throw new Error("セッション取得に失敗しました");
    }
  }
}
