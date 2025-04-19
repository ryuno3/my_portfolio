import { Skill } from "@/generated/prisma";
import { sawarabiMincho } from "@/fonts/fonts";

// 通常のスキルカードのプロパティ
interface SkillCardProps {
  skill: Skill;
  size?: "small" | "large";
}

// スキルカードコンポーネント
export function SkillCard({ skill, size = "small" }: SkillCardProps) {
  return (
    <div
      className={`text-center p-4 bg-washi-50 rounded-lg shadow-sm h-full transition-transform hover:shadow-md hover:-translate-y-1 ${
        size === "large" ? "p-6" : ""
      }`}
    >
      <div
        className={`text-akane ${size === "large" ? "text-3xl" : "text-2xl"} mb-4 font-medium ${
          sawarabiMincho.className
        }`}
      >
        {skill.title}
      </div>
      <p className={`${size === "large" ? "text-base" : "text-sm"} text-sumi`}>
        {skill.description}
      </p>
    </div>
  );
}

// スケルトンローディングコンポーネント
export function SkillCardSkeleton({ size = "small" }: { size?: "small" | "large" }) {
  return (
    <div
      className={`text-center p-4 bg-washi-50 rounded-lg shadow-sm h-full animate-pulse ${
        size === "large" ? "p-6" : ""
      }`}
    >
      <div
        className={`h-8 bg-washi-200 rounded mb-4 mx-auto w-2/3 ${size === "large" ? "h-10" : ""}`}
      ></div>
      <div className="h-4 bg-washi-200 rounded w-full mb-2"></div>
      <div className="h-4 bg-washi-200 rounded w-4/5 mx-auto"></div>
    </div>
  );
}
