import { ContactRepository } from "../domain/repositories/contactRepository";

export class DeleteContactUseCase {
  constructor(private readonly contactRepository: ContactRepository) {}

  async execute(id: string) {
    const contact = await this.contactRepository.findById(id);
    if (!contact) {
      throw new Error("問い合わせ内容が見つかりません");
    }
    try {
      await this.contactRepository.delete(id);
    } catch (error) {
      console.error("contact削除エラー:", error);
      throw new Error("削除に失敗しました");
    }
  }
}
