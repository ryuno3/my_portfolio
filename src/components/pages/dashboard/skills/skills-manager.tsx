import SkillsClient from "./skill-client";
import { revalidatePath } from "next/cache";
import { createSkill, deleteSkill, getAllSkills, updateSkill } from "@/lib/api/skills";
import { UpdateSkillDto } from "@/modules/skill/dto/updateSkillDto";

export default async function SkillsManager() {
  // スキルデータ取得
  const skills = await getAllSkills();

  // スキル追加のアクション
  async function addSkill(formData: FormData) {
    "use server";
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;

    await createSkill({
      title,
      description,
    });

    revalidatePath("/dashboard");
  }

  // スキル更新のアクション
  async function handleUpdateSkill(id: string, formData: FormData) {
    "use server";
    const title = formData.get("title") as Partial<UpdateSkillDto["title"]>;
    // descriptionはnullを許可するため、型アサーションを使用
    const description = formData.get("description") as UpdateSkillDto["description"];

    await updateSkill(id, { title, description });

    revalidatePath("/dashboard");
  }

  // スキル削除のアクション
  async function handleDeleteSkill(id: string) {
    "use server";
    await deleteSkill(id);

    revalidatePath("/dashboard");
  }

  return (
    <SkillsClient
      initialSkills={skills}
      onAddSkill={addSkill}
      onUpdateSkill={handleUpdateSkill}
      onDeleteSkill={handleDeleteSkill}
    />
  );
}
