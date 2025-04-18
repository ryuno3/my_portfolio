import { SkillRepository } from "../domain/repositories/skillRepositry";

export class CreateSkillUseCase {
  constructor(private readonly skillRepo: SkillRepository) {}

  async execute(dto: CreateSkillDto) {
    try {
      const skill = await this.skillRepo.create(dto);
      return skill;
    } catch (error) {
      console.error("スキル作成エラー:", error);
      throw new Error("スキルの作成に失敗しました");
    }
  }
}
