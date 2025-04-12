import Link from "next/link";

// Navigation links shared between desktop and mobile views
export const navItems = [
  { name: "ホーム", href: "/" },
  { name: "スキル", href: "/skills" },
  { name: "プロジェクト", href: "/projects" },
  { name: "経歴", href: "/about" },
  { name: "お問い合わせ", href: "/contact/form" },
];

export default function NavLinks() {
  return (
    <nav>
      <ul className="flex space-x-6">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link href={item.href} className="hover:text-washi-100 transition py-2">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
