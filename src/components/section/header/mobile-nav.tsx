"use client";

import { useState } from "react";
import { navItems } from "./nav-links";
import Link from "next/link";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Hamburger Button */}
      <button
        className="flex flex-col space-y-1.5 p-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="メニューを開く"
      >
        <span
          className={`block w-6 h-0.5 bg-washi-50 transition-transform ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-washi-50 transition-opacity ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-washi-50 transition-transform ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-kusagi bg-opacity-95 flex flex-col">
          <div className="flex justify-end p-6">
            <button
              onClick={() => setIsOpen(false)}
              className="text-washi-50 text-3xl"
              aria-label="メニューを閉じる"
            >
              ✕
            </button>
          </div>
          <nav className="flex-1 flex items-center justify-center">
            <ul className="space-y-6 text-center">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-xl hover:text-washi-100 transition block py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}
