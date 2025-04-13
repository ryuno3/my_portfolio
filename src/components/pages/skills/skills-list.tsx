import { SkillCard } from "@/components/ui/skill-card";
import { SkillsAction } from "@/utils/prisma/skillsAction";

export default async function SkillsList() {
  const skillsAction = new SkillsAction();
  const skills = await skillsAction.getAllSkills();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {skills.map((skill, index) => (
        <SkillCard key={skill.id || index} skill={skill} size="large" />
      ))}
    </div>
  );
}
