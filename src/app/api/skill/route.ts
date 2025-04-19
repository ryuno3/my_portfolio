import { CreateSkillUseCase } from "@/modules/skill/application/createSkill.usecase";
import { GetAllSkillsUseCase } from "@/modules/skill/application/getAllSkills.usecase";
import { PrismaSkillRepository } from "@/modules/skill/infrastructure/repositories/skillPrismaRepository";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const useCase = new GetAllSkillsUseCase(new PrismaSkillRepository());
  const skills = await useCase.execute();

  return NextResponse.json(skills);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { title, description } = body;

  const useCase = new CreateSkillUseCase(new PrismaSkillRepository());
  const skill = await useCase.execute({
    title,
    description,
  });

  return NextResponse.json(skill);
}
