import { SkillRepository } from "../domain/repositories/skillRepositry";

export class DeleteSkillUseCase {
  constructor(private readonly skillRepo: SkillRepository) {}

  async execute(id: string) {
    try {
      const skill = await this.skillRepo.findById(id);
      if (!skill) {
        throw new Error("スキルが見つかりません");
      }
      await this.skillRepo.delete(id);
    } catch (error) {
      console.error("スキル取得エラー:", error);
      throw new Error("スキルの取得に失敗しました");
    }
  }
}
