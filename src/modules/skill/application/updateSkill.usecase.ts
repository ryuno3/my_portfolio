import { SkillRepository } from "../domain/repositories/skillRepositry";
import { UpdateSkillDto } from "../dto/updateSkillDto";

export class UpdateSkillUseCase {
  constructor(private readonly skillRepo: SkillRepository) {}

  async execute(id: string, data: Partial<UpdateSkillDto>) {
    const skill = await this.skillRepo.findById(id);
    if (!skill) {
      throw new Error("スキルが見つかりません");
    }
    try {
      const updatedSkill = await this.skillRepo.update(id, data);
      return updatedSkill;
    } catch (error) {
      console.error("スキル更新エラー:", error);
      throw new Error("スキルの更新に失敗しました");
    }
  }
}
