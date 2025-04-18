import { SkillRepository } from "@/modules/skill/domain/repositories/skillRepositry";

export class GetAllSkillsUseCase {
  constructor(private readonly skillRepo: SkillRepository) {}

  async execute() {
    return await this.skillRepo.findAll();
  }
}
