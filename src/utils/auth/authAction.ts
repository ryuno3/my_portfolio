import { auth, signIn } from "@/auth";
import prisma from "@/lib/prisma/prismaClient";
import { randomUUID } from "crypto";

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

  async signInWithGithub() {
    try {
      await signIn("github");
      // サインインが成功した場合の処理
      const session = await this.getSession();
      const { user } = session;
      if (!user) {
        throw new Error("ユーザー情報が取得できませんでした");
      }
      const { id, name, email } = user;
      if (!id || !name || !email) {
        throw new Error("ユーザー情報が不足しています");
      }

      // ユーザー情報をDBから取得
      const existingUser = await prisma.user.findUnique({
        where: { id },
      });
      if (existingUser) {
        // ユーザーが既に存在する場合の処理
        return;
      }

      // ユーザーが存在しない場合、新規作成
      // 一旦ユーザーのpasswordをUUIDに。あとでどうにかする
      await prisma.user.create({
        data: {
          id: user.id,
          username: "ryunosuke",
          email: user.email ? user.email : "",
          password: randomUUID(),
        },
      });
    } catch (e) {
      console.error("サインインに失敗しました", e);
    }
  }
}
