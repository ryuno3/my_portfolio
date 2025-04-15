import { SkillsAction } from "@/utils/prisma/actions/skillsAction";
import SkillsClient from "./SkillsClient";
import { revalidatePath } from "next/cache";

export default async function SkillsManager() {
  // スキルデータ取得
  const skillsAction = new SkillsAction();
  const skills = await skillsAction.getAllSkills();

  // スキル追加のアクション
  async function addSkill(formData: FormData) {
    "use server";
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;

    const skillsAction = new SkillsAction();
    await skillsAction.createSkill({
      title,
      description,
    });

    revalidatePath("/dashboard");
  }

  // スキル更新のアクション
  async function updateSkill(id: string, formData: FormData) {
    "use server";
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;

    const skillsAction = new SkillsAction();
    await skillsAction.updateSkill(id, {
      title,
      description,
    });

    revalidatePath("/dashboard");
  }

  // スキル削除のアクション
  async function deleteSkill(id: string) {
    "use server";
    const skillsAction = new SkillsAction();
    await skillsAction.deleteSkill(id);

    revalidatePath("/dashboard");
  }

  return (
    <SkillsClient
      initialSkills={skills}
      onAddSkill={addSkill}
      onUpdateSkill={updateSkill}
      onDeleteSkill={deleteSkill}
    />
  );
}
