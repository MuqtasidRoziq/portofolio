"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import { TechIcon } from "@/components/TechIcon";
import { GithubIcon } from "@/components/SocialIcons";
import { ArrowLeft, ExternalLink, Sparkles, Sun, Moon } from "lucide-react";

export default function ProjectsPage() {
  const { projects } = portfolioData;
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme") as "dark" | "light" | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("portfolio-theme", nextTheme);
  };

  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "bg-zinc-950 text-zinc-100" : "bg-[#fcfcfc] text-zinc-900"
      }`}
    >
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 backdrop-blur-md border-b border-zinc-500/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/#projects"
            className={`inline-flex items-center gap-2 text-xs sm:text-sm font-semibold transition-colors ${
              isDark ? "text-zinc-300 hover:text-white" : "text-zinc-700 hover:text-zinc-950"
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Proyek</span>
          </Link>

          <button
            onClick={toggleTheme}
            aria-label="Ganti tema"
            className={`p-2 rounded-full transition-colors cursor-pointer ${
              isDark
                ? "bg-zinc-900 text-zinc-100 hover:bg-zinc-800"
                : "bg-zinc-100 text-zinc-900 hover:bg-zinc-200"
            }`}
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-zinc-800" />}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-16 sm:py-20">
        {/* Header Title */}
        <div className="mb-14">
          <h1
            className={`text-3xl sm:text-5xl font-bold tracking-tight ${
              isDark ? "text-zinc-100" : "text-zinc-900"
            }`}
          >
            Semua Proyek & Karya
          </h1>
          <p
            className={`mt-3 text-base sm:text-lg max-w-2xl leading-relaxed ${
              isDark ? "text-zinc-400" : "text-zinc-600"
            }`}
          >
            Daftar lengkap aplikasi web, mobile, sistem CMS, dan aplikasi desktop yang telah saya rancang serta kembangkan secara mandiri maupun kolaboratif.
          </p>
        </div>

        {/* 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {projects.map((project, idx) => (
            <article
              key={idx}
              className={`group flex flex-col justify-between rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                isDark
                  ? "bg-zinc-900/40 border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/70"
                  : "bg-white/90 border-zinc-200/90 hover:border-zinc-300 hover:bg-white shadow-xs"
              }`}
            >
              <div>
                {/* Mockup Preview */}
                <div className="relative aspect-video w-full overflow-hidden bg-zinc-950/60 border-b border-zinc-500/10">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={450}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-zinc-800 text-zinc-500 text-xs">
                      No Preview
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 space-y-2.5">
                  <h2
                    className={`text-base font-bold tracking-tight line-clamp-1 transition-colors ${
                      isDark
                        ? "text-zinc-100 group-hover:text-white"
                        : "text-zinc-900 group-hover:text-zinc-950"
                    }`}
                  >
                    {project.title}
                  </h2>

                  <p
                    className={`text-xs leading-relaxed line-clamp-3 ${
                      isDark ? "text-zinc-400" : "text-zinc-600"
                    }`}
                  >
                    {project.description}
                  </p>

                  <div className="pt-2">
                    <span className="text-[10px] font-medium text-zinc-500 block mb-1.5 uppercase tracking-wider">
                      Teknologi:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[11px] font-medium border ${
                            isDark
                              ? "bg-zinc-800/80 text-zinc-300 border-zinc-700/60"
                              : "bg-zinc-100 text-zinc-700 border-zinc-200"
                          }`}
                        >
                          <TechIcon name={tag} className="w-3 h-3 shrink-0" width={14} height={14} />
                          <span>{tag}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-5 pb-5 pt-3 flex items-center gap-2 border-t border-zinc-500/10">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold transition-all active:scale-95 ${
                      isDark
                        ? "bg-zinc-100 text-zinc-950 hover:bg-white"
                        : "bg-zinc-900 text-zinc-100 hover:bg-zinc-800"
                    }`}
                  >
                    <span>Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <div
                    className={`flex-1 py-2 px-3 rounded-xl text-xs text-center font-medium opacity-40 border ${
                      isDark ? "border-zinc-800 text-zinc-500" : "border-zinc-200 text-zinc-400"
                    }`}
                  >
                    Demo N/A
                  </div>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-medium border transition-all active:scale-95 ${
                      isDark
                        ? "bg-zinc-900/80 text-zinc-300 border-zinc-800 hover:text-white hover:bg-zinc-800"
                        : "bg-zinc-100 text-zinc-700 border-zinc-200 hover:text-zinc-950 hover:bg-zinc-200"
                    }`}
                    aria-label={`Source code GitHub untuk ${project.title}`}
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Repo</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
