import prisma from "@/lib/prisma/prismaClient";
import { SkillRepository } from "../../domain/repositories/skillRepositry";
import { Skill } from "@/generated/prisma";

export class PrismaSkillRepository implements SkillRepository {
  async findAll(): Promise<Skill[]> {
    return await prisma.skill.findMany();
  }

  async findById(id: string): Promise<Skill | null> {
    return await prisma.skill.findUnique({
      where: { id },
    });
  }

  async create(data: { title: string; description?: string | null }): Promise<Skill> {
    return await prisma.skill.create({
      data: {
        title: data.title,
        description: data.description ?? null,
      },
    });
  }

  async update(id: string, data: { title?: string; description?: string | null }): Promise<Skill> {
    return await prisma.skill.update({
      where: { id },
      data,
    });
  }

  async delete(id: string): Promise<void> {
    await prisma.skill.delete({
      where: { id },
    });
  }

  //   並び替え実装時には、スキーマにorderフィールドを追加する。

  //   async reorder(orderedIds: string[]): Promise<void> {

  //     for(let i = 0; i<orderedIds.length; i++){
  //         await prisma.skill.update({
  //             where: { id: orderedIds[i] },
  //             data: {
  //                 order: i
  //             },
  //         });
  // }

  // }
}
