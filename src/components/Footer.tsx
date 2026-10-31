"use client";

import { useEffect, useState } from "react";
import { portfolioData } from "@/data/portfolio";

interface FooterProps {
  theme: "dark" | "light";
}

export function Footer({ theme }: FooterProps) {
  const { personal } = portfolioData;
  const [year, setYear] = useState<number>(2025);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer
      className={`py-16 text-center text-xs ${
        theme === "dark" ? "text-zinc-500" : "text-zinc-500"
      }`}
    >
      <div className="mx-auto max-w-5xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          &copy; {year}{" "}
          <span
            className={`font-medium ${
              theme === "dark" ? "text-zinc-300" : "text-zinc-700"
            }`}
          >
            {personal.name}
          </span>
          . All rights reserved.
        </div>
        <div className="flex items-center gap-6">
          <a
            href="#about"
            className={`transition-colors ${
              theme === "dark" ? "hover:text-zinc-300" : "hover:text-zinc-800"
            }`}
          >
            Tentang
          </a>
          <a
            href="#skills"
            className={`transition-colors ${
              theme === "dark" ? "hover:text-zinc-300" : "hover:text-zinc-800"
            }`}
          >
            Keahlian
          </a>
          <a
            href="#experience"
            className={`transition-colors ${
              theme === "dark" ? "hover:text-zinc-300" : "hover:text-zinc-800"
            }`}
          >
            Pengalaman
          </a>
          <a
            href="#projects"
            className={`transition-colors ${
              theme === "dark" ? "hover:text-zinc-300" : "hover:text-zinc-800"
            }`}
          >
            Proyek
          </a>
          <a
            href="#contact"
            className={`transition-colors ${
              theme === "dark" ? "hover:text-zinc-300" : "hover:text-zinc-800"
            }`}
          >
            Kontak
          </a>
        </div>
      </div>
    </footer>
  );
}
