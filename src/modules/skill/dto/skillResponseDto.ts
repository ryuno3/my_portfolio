import { Skill } from "@/generated/prisma";

export type SkillResponseDto = Pick<Skill, "id" | "title" | "description" | "createdAt">;
