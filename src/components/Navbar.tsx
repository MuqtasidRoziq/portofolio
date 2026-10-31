"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

interface NavbarProps {
  unlocked: boolean;
  theme: "dark" | "light";
  onToggleTheme: () => void;
}

const navItems = [
  { name: "Home", href: "#home", id: "home" },
  { name: "About Me", href: "#about", id: "about" },
  { name: "Project", href: "#projects", id: "projects" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export function Navbar({ unlocked, theme, onToggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const isDark = theme === "dark";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Deteksi section yang sedang aktif di viewport
      const scrollPosition = window.scrollY + 200;

      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sembunyikan navbar di awal sebelum unlock
  if (!unlocked) {
    return null;
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveSection(id);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center py-4 px-3 sm:px-4 pointer-events-none transition-all duration-300">
      <div
        className={`pointer-events-auto flex items-center gap-1 sm:gap-1.5 transition-all duration-300 max-w-full overflow-x-auto no-scrollbar ${
          scrolled
            ? isDark
              ? "rounded-full bg-zinc-950/85 backdrop-blur-md px-3 sm:px-4 py-1.5 shadow-lg border border-zinc-800/80"
              : "rounded-full bg-white/90 backdrop-blur-md px-3 sm:px-4 py-1.5 shadow-md border border-zinc-200/90"
            : isDark
            ? "rounded-full bg-zinc-950/40 backdrop-blur-sm px-3 sm:px-4 py-1.5 border border-zinc-800/40"
            : "rounded-full bg-white/60 backdrop-blur-sm px-3 sm:px-4 py-1.5 border border-zinc-200/50"
        }`}
      >
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`relative text-xs sm:text-sm font-medium px-3 sm:px-3.5 py-1.5 rounded-full transition-all duration-200 whitespace-nowrap ${
                isActive
                  ? isDark
                    ? "bg-zinc-100 text-zinc-950 font-semibold shadow-xs"
                    : "bg-zinc-900 text-zinc-100 font-semibold shadow-xs"
                  : isDark
                  ? "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60"
                  : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100"
              }`}
            >
              {item.name}
            </a>
          );
        })}

        {/* Separator Divider */}
        <div
          className={`h-4 w-px mx-0.5 sm:mx-1 ${
            isDark ? "bg-zinc-800" : "bg-zinc-200"
          }`}
        />

        {/* Toggle Dark / Light mode */}
        <button
          onClick={onToggleTheme}
          aria-label="Ganti mode tema"
          className={`p-1.5 sm:p-2 rounded-full transition-all cursor-pointer ${
            isDark
              ? "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/80"
              : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
          }`}
        >
          {isDark ? (
            <Sun className="h-4 w-4 text-amber-400" />
          ) : (
            <Moon className="h-4 w-4 text-zinc-800" />
          )}
        </button>
      </div>
    </nav>
  );
}
