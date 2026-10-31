"use client";

import { useState } from "react";
import Image from "next/image";
import { techSkills, TechSkill } from "@/data/skills";
import { Sparkles, Code2, Layers, Cpu, Wrench } from "lucide-react";

interface SkillsProps {
  theme: "dark" | "light";
}

export function Skills({ theme }: SkillsProps) {
  const [activeFilter, setActiveFilter] = useState<"all" | TechSkill["category"]>("all");
  const isDark = theme === "dark";

  const filteredTech =
    activeFilter === "all"
      ? techSkills
      : techSkills.filter((item) => item.category === activeFilter);

  const filterTabs = [
    { key: "all", label: `Semua (${techSkills.length})`, icon: Sparkles },
    { key: "frontend", label: "Frontend & Mobile", icon: Layers },
    { key: "backend", label: "Backend", icon: Cpu },
    { key: "database", label: "Database", icon: Code2 },
    { key: "tools", label: "Tools & OS", icon: Wrench },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-6">
        {/* Header Section */}
        <div data-reveal className="mb-12">
          <h2
            className={`text-3xl sm:text-4xl font-semibold tracking-tight ${
              isDark ? "text-zinc-100" : "text-zinc-900"
            }`}
          >
            Keahlian & Teknologi
          </h2>
          <p
            className={`mt-2 text-base max-w-2xl ${
              isDark ? "text-zinc-400" : "text-zinc-600"
            }`}
          >
            Koleksi teknologi, bahasa pemrograman, framework, dan tools yang saya gunakan dalam mengembangkan produk perangkat lunak.
          </p>
        </div>

        {/* Filter Categories Pill */}
        <div data-reveal className="flex flex-wrap items-center gap-2 mb-10">
          {filterTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeFilter === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveFilter(tab.key as typeof activeFilter)}
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  isActive
                    ? isDark
                      ? "bg-zinc-100 text-zinc-900 shadow-sm font-semibold"
                      : "bg-zinc-900 text-zinc-100 shadow-sm font-semibold"
                    : isDark
                    ? "bg-zinc-900/60 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/80 border border-zinc-800"
                    : "bg-zinc-100 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/80 border border-zinc-200"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tech Stack Clean Grid: Image, Name, Category */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {filteredTech.map((tech, idx) => (
            <div
              key={idx}
              data-reveal
              className={`group flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
                isDark
                  ? "bg-zinc-900/50 border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/90"
                  : "bg-white/80 border-zinc-200/80 hover:border-zinc-300 hover:bg-white shadow-xs"
              }`}
            >
              <div
                className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center p-2.5 shrink-0 transition-transform duration-300 group-hover:scale-110 ${
                  isDark
                    ? "bg-zinc-800/80 group-hover:bg-zinc-800 border border-zinc-700/50"
                    : "bg-zinc-100 group-hover:bg-zinc-200/70 border border-zinc-200/80"
                }`}
              >
                <Image
                  src={tech.image}
                  alt={tech.name}
                  width={28}
                  height={28}
                  className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
                  loading="lazy"
                />
              </div>

              <div className="min-w-0">
                <h3
                  className={`text-sm font-semibold truncate transition-colors ${
                    isDark ? "text-zinc-100 group-hover:text-white" : "text-zinc-900 group-hover:text-zinc-950"
                  }`}
                >
                  {tech.name}
                </h3>
                <span className="text-[11px] capitalize text-zinc-500 block truncate">
                  {tech.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
