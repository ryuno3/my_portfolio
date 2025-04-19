import { z } from "zod";

export const createContactSchema = z.object({
  name: z.string().min(1, "名前は必須です"),
  email: z.string().email("メールアドレスの形式が正しくありません"),
  message: z.string().min(1, "メッセージは必須です"),
});

export type CreateContactDto = z.infer<typeof createContactSchema>;
