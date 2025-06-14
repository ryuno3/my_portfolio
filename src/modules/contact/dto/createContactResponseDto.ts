import { z } from "zod";

export const createContactResponseSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email("メールアドレスの形式が正しくありません"),
  content: z.string().max(500, "問い合わせ内容は500文字以内で入力してください"),
  createdAt: z.date(),
  status: z.enum(["success", "error", "noData"]),
  errors: z
    .object({
      name: z.string().optional(),
      email: z.string().optional(),
      content: z.string().optional(),
      form: z.string().optional(),
    })
    .optional(),
  message: z.string().optional(),
  isSubmitting: z.boolean().optional(),
});

export type CreateContactResponseDto = z.infer<typeof createContactResponseSchema>;
