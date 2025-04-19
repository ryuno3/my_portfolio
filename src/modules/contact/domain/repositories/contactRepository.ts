import { Contact } from "@/generated/prisma";

export interface ContactRepository {
  findAll(): Promise<Contact[]>;
  findById(id: string): Promise<Contact | null>;
  create(data: { name: string; email: string; message: string }): Promise<Contact>;
  delete(id: string): Promise<void>;

  //   並び替え実装時には、スキーマにorderフィールドを追加する。

  //   reorder(orderedIds: string[]): Promise<void>;
}
