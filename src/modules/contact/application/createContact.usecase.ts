import { ContactRepository } from "../domain/repositories/contactRepository";
import { CreateContactDto } from "../dto/createContactDto";
import { CreateContactResponseDto } from "../dto/createContactResponseDto";

export class CreateContactUseCase {
  constructor(private readonly contactRepository: ContactRepository) {}

  async execute(dto: CreateContactDto) {
    try {
      const contact: CreateContactDto = await this.contactRepository.create(dto);

      // gmail送信処理
      const res = await fetch(process.env.NEXT_PUBLIC_GMAIL_API_URL as string, {
        method: "POST",
        body: JSON.stringify({
          type: "contact",
          params: {
            name: dto.name,
            email: dto.email,
            content: dto.message,
          },
        }),
      });

      const data: CreateContactResponseDto = await res.json();

      if (!data.status) {
        throw new Error("Gmail送信に失敗しました");
      }

      return contact;
    } catch (error) {
      // エラーハンドリング
      console.error("contact作成エラー:", error);
      console.log("お問い合わせ内容:", dto);
      console.log("url", process.env.NEXT_PUBLIC_GMAIL_API_URL);

      throw new Error("お問い合わせに失敗しました");
    }
  }
}
