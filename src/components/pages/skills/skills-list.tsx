import { SkillCard } from "@/components/ui/skill-card";
import { getAllSkills } from "@/lib/api/skills";

export const revalidate = 60; // 1分ごとに再検証

export default async function SkillsList() {
  const skills = await getAllSkills();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {skills.map((skill, index) => (
        <SkillCard key={skill.id || index} skill={skill} size="large" />
      ))}
    </div>
  );
}
