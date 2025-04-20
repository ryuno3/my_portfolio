import Headline from "@/components/ui/headline";
import { SkillCard } from "@/components/ui/skill-card";
import { getAllSkills } from "@/lib/api/skills";
import Link from "next/link";

export const revalidate = 60; // 1分ごとに再検証

export default async function SkillsSection() {
  const skills = await getAllSkills();

  // 表示用に最大4つのスキルを選択
  const displaySkills = skills.slice(0, 4);

  return (
    <section className="washi-container">
      <Headline title="技術と経験" color="text-akane" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {displaySkills.map((skill, index) => (
          <SkillCard key={skill.id || index} skill={skill} />
        ))}
        <div className="flex items-center justify-center">
          <Link href="/skills" className="text-kusagi hover:text-asagi transition-colors">
            <p className="font-medium">and more...</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
