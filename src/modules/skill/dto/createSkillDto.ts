import { z } from "zod";

export const createSkillSchema = z.object({
  title: z.string().min(1, "タイトルは必須です"),
  description: z.string().nullable().optional(),
});

export type CreateSkillDto = z.infer<typeof createSkillSchema>;
