import { Skill } from "@/generated/prisma";

export async function getAllSkills(): Promise<Skill[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"}/api/skill`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error("Skillの取得に失敗しました");
  }

  return res.json();
}
