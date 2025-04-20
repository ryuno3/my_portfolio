import { SkillRepository } from "../domain/repositories/skillRepositry";

export class DeleteSkillUseCase {
  constructor(private readonly skillRepo: SkillRepository) {}

  async execute(id: string) {
    const skill = await this.skillRepo.findById(id);
    if (!skill) {
      throw new Error("スキルが見つかりません");
    }

    try {
      await this.skillRepo.delete(id);
    } catch (error) {
      console.error("スキル削除エラー:", error);
      throw new Error("スキルの削除に失敗しました");
    }
  }
}
