import { Skill } from "@/generated/prisma";
import { CreateSkillDto } from "@/modules/skill/dto/createSkillDto";

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

export async function createSkill(data: CreateSkillDto): Promise<Skill> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"}/api/skill`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!res.ok) {
    throw new Error("Skillの作成に失敗しました");
  }

  return res.json();
}

export async function updateSkill(id: string, data: Partial<CreateSkillDto>): Promise<Skill> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"}/api/skill`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, ...data }),
    }
  );
  if (!res.ok) {
    throw new Error("Skillの更新に失敗しました");
  }
  return res.json();
}

export async function deleteSkill(id: string): Promise<void> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"}/api/skill`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    }
  );

  if (!res.ok) {
    throw new Error("Skillの削除に失敗しました");
  }
}
