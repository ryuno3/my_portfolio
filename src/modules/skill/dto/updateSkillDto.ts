import { z } from "zod";

export const updateSkillSchema = z.object({
  id: z.string().uuid("IDはUUID形式である必要があります"),
  title: z.string().min(1, "タイトルは必須です"),
  description: z.string().nullable().optional(),
});
export type UpdateSkillDto = z.infer<typeof updateSkillSchema>;
