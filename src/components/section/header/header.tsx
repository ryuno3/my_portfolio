import Link from "next/link";
import NavLinks from "./nav-links";
import MobileNav from "./mobile-nav";
import { sawarabiMincho } from "@/app/layout";

export default function Header() {
  return (
    <header className="bg-kusagi text-washi-50 py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className={`text-xl ${sawarabiMincho.className} font-bold hover:text-washi-100 transition`}
          >
            Portfolio
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavLinks />
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
