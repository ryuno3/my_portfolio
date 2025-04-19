import { Contact } from "@/generated/prisma";
import { ContactRepository } from "../../domain/repositories/contactRepository";
import prisma from "@/lib/prisma/prismaClient";

export class PrismaContactRepository implements ContactRepository {
  async findAll(): Promise<Contact[]> {
    return await prisma.contact.findMany();
  }

  async findById(id: string): Promise<Contact | null> {
    return await prisma.contact.findUnique({
      where: { id },
    });
  }

  async create(data: { name: string; email: string; message: string }): Promise<Contact> {
    return await prisma.contact.create({
      data: {
        name: data.name,
        email: data.email,
        message: data.message,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await prisma.contact.delete({
      where: { id },
    });
  }

  //   並び替え実装時には、スキーマにorderフィールドを追加する。
  //   async reorder(orderedIds: string[]): Promise<void> {
  //     for(let i = 0; i<orderedIds.length; i++){
  //         await prisma.contact.update({
  //             where: { id: orderedIds[i] },
  //             data: {
  //                 order: i
  //             },
  //         });
  //     }
  // }
}
