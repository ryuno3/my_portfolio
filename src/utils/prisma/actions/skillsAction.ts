import { Skill } from "@/generated/prisma";
import prisma from "@/lib/prisma/prismaClient";

export class SkillsAction {
  private NOTFOUND = {
    id: "",
    title: "not found",
    description: null,
    createdAt: new Date(),
  };

  async getAllSkills() {
    try {
      const skills: Skill[] = await prisma.skill.findMany();
      return skills;
    } catch (error) {
      console.error("スキル取得エラー:", error);
      return [];
    }
  }

  async getSkillById(id: string) {
    try {
      const skill: Skill | null = await prisma.skill.findUnique({
        where: { id },
      });
      if (!skill) {
        // スキルが見つからない場合のデフォルト値を返す
        return this.NOTFOUND;
      }
      return skill;
    } catch (error) {
      console.error("スキル取得エラー:", error);
      return this.NOTFOUND;
    }
  }

  // 新しいスキルを作成するメソッド
  async createSkill(data: { title: string; description?: string | null; category?: string }) {
    try {
      console.log("スキル作成:", data);
      // 本来はDBに保存するが、ダミー実装として仮のIDを生成して返す
      return {
        id: `dummy-${Date.now()}`,
        title: data.title,
        description: data.description || null,
        createdAt: new Date(),
      };
    } catch (error) {
      console.error("スキル作成エラー:", error);
      throw new Error("スキルの作成に失敗しました");
    }
  }

  // スキルを更新するメソッド
  async updateSkill(id: string, data: { title?: string; description?: string | null }) {
    try {
      console.log(`スキル更新 ID: ${id}`, data);
      // 本来はDBを更新するが、ダミー実装として更新成功と見なす
      return {
        id,
        title: data.title || "",
        description: data.description || null,
        createdAt: new Date(),
      };
    } catch (error) {
      console.error("スキル更新エラー:", error);
      throw new Error("スキルの更新に失敗しました");
    }
  }

  // スキルを削除するメソッド
  async deleteSkill(id: string) {
    try {
      console.log(`スキル削除 ID: ${id}`);
      // 本来はDBから削除するが、ダミー実装として削除成功と見なす
      return { success: true };
    } catch (error) {
      console.error("スキル削除エラー:", error);
      throw new Error("スキルの削除に失敗しました");
    }
  }

  // スキルの順序を変更するメソッド
  async reorderSkills(orderedIds: string[]) {
    try {
      console.log("スキル並び替え:", orderedIds);
      // 本来はDBの順序を更新するが、ダミー実装として成功と見なす
      return { success: true };
    } catch (error) {
      console.error("スキル並び替えエラー:", error);
      throw new Error("スキルの並び替えに失敗しました");
    }
  }
}
