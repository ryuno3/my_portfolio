"use server";

import { Skill } from "@/generated/prisma";
import { CreateSkillUseCase } from "@/modules/skill/application/createSkill.usecase";
import { DeleteSkillUseCase } from "@/modules/skill/application/deleteSkill.usecase";
import { GetAllSkillsUseCase } from "@/modules/skill/application/getAllSkills.usecase";
import { UpdateSkillUseCase } from "@/modules/skill/application/updateSkill.usecase";
import { CreateSkillDto } from "@/modules/skill/dto/createSkillDto";
import { PrismaSkillRepository } from "@/modules/skill/infrastructure/repositories/skillPrismaRepository";

export async function getAllSkills(): Promise<Skill[]> {
  const useCase = new GetAllSkillsUseCase(new PrismaSkillRepository());
  const skills = await useCase.execute();

  return skills;
}

export async function createSkill(data: CreateSkillDto): Promise<Skill> {
  const { title, description } = data;
  const useCase = new CreateSkillUseCase(new PrismaSkillRepository());

  const skill = await useCase.execute({
    title,
    description,
  });

  return skill;
}

export async function updateSkill(id: string, data: Partial<CreateSkillDto>): Promise<Skill> {
  const { title, description } = data;
  const useCase = new UpdateSkillUseCase(new PrismaSkillRepository());

  const skill = await useCase.execute(id, { title, description });

  return skill;
}

export async function deleteSkill(id: string): Promise<void> {
  const useCase = new DeleteSkillUseCase(new PrismaSkillRepository());
  await useCase.execute(id);

  return;
}
