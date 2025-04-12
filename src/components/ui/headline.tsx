import { sawarabiMincho } from "@/app/layout";

export default function Headline({ title, color }: { title: string; color: string }) {
  return <h1 className={`${sawarabiMincho.className} text-3xl jp-heading ${color}`}>{title}</h1>;
}
