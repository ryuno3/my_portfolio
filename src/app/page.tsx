import { sawarabiMincho } from "./layout";

export default function Home() {
  return (
    <div className="">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <p className="text-lg">Welcome to my Next.js app!</p>
      <p className="text-base">This is a simple example of using Tailwind CSS with Next.js.</p>
      <h1 className="text-6xl">西野</h1>
      <p className={`${sawarabiMincho.className} text-4xl`}>テストテキスト 西野</p>
    </div>
  );
}
