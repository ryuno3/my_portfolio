import { Skill } from "@/generated/prisma";
import prisma from "@/lib/prisma/prismaClient";

export class SkillsAction {
  private NOTFOUND = {
    id: "",
    title: "not found",
    description: "",
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
}
