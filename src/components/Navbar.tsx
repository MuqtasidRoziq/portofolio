"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

interface NavbarProps {
  unlocked: boolean;
  theme: "dark" | "light";
  onToggleTheme: () => void;
}

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "Tentang Saya", href: "#about" },
  { name: "Project", href: "#projects" },
  { name: "Kontak", href: "#contact" },
];

export function Navbar({ unlocked, theme, onToggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sembunyikan navbar di awal sebelum unlock
  if (!unlocked) {
    return null;
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center py-4 px-4 pointer-events-none transition-colors duration-300">
      <div
        className={`pointer-events-auto flex items-center gap-1.5 transition-colors duration-300 ${
          scrolled
            ? theme === "dark"
              ? "rounded-full bg-zinc-950/80 backdrop-blur-md px-5 py-2 shadow-sm" /* taste-skill-ignore */
              : "rounded-full bg-white/85 backdrop-blur-md px-5 py-2 shadow-sm" /* taste-skill-ignore */
            : "bg-transparent px-2 py-1.5"
        }`}
      >
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={`text-sm font-medium px-3.5 py-1.5 rounded-full transition-colors ${
              theme === "dark"
                ? "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900"
                : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
            }`}
          >
            {item.name}
          </a>
        ))}

        {/* Toggle Dark / Light mode */}
        <button
          onClick={onToggleTheme}
          aria-label="Ganti mode tema"
          className={`ml-1 p-2 rounded-full transition-colors cursor-pointer ${
            theme === "dark"
              ? "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900"
              : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
          }`}
        >
          {theme === "dark" ? (
            <Sun className="h-4 w-4 text-amber-300" />
          ) : (
            <Moon className="h-4 w-4 text-zinc-700" />
          )}
        </button>
      </div>
    </nav>
  );
}
