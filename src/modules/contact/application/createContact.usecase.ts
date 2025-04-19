import { ContactRepository } from "../domain/repositories/contactRepository";
import { CreateContactDto } from "../dto/createContactDto";

export class CreateContactUseCase {
  constructor(private readonly contactRepository: ContactRepository) {}

  async execute(dto: CreateContactDto) {
    try {
      const contact = await this.contactRepository.create(dto);
      return contact;
    } catch (error) {
      console.error("contact作成エラー:", error);
      throw new Error("お問い合わせに失敗しました");
    }
  }
}
