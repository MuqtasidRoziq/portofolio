import Link from "next/link";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import { TechIcon } from "@/components/TechIcon";
import { GithubIcon } from "@/components/SocialIcons";
import { Sparkles, ExternalLink, ArrowRight } from "lucide-react";

interface ProjectsProps {
  theme: "dark" | "light";
}

export function ProjectsSection({ theme }: ProjectsProps) {
  const { projects } = portfolioData;
  const isDark = theme === "dark";

  // Batasi hanya 6 project yang tampil di beranda utama
  const displayedProjects = projects.slice(0, 6);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-6">
        {/* Section Header */}
        <div data-reveal className="mb-14">
          <h2
            className={`text-3xl sm:text-4xl font-semibold tracking-tight ${
              isDark ? "text-zinc-100" : "text-zinc-900"
            }`}
          >
            Projects
          </h2>
          <p
            className={`mt-2 text-base max-w-xl ${
              isDark ? "text-zinc-400" : "text-zinc-600"
            }`}
          >
            Koleksi aplikasi web, mobile, dan sistem perangkat lunak yang telah saya rancang dan kembangkan.
          </p>
        </div>

        {/* 3-Column Responsive Card Grid (Maksimal 6 Proyek) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {displayedProjects.map((project, idx) => (
            <article
              key={idx}
              data-reveal
              className={`group flex flex-col justify-between rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                isDark
                  ? "bg-zinc-900/40 border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/70"
                  : "bg-white/90 border-zinc-200/90 hover:border-zinc-300 hover:bg-white shadow-xs"
              }`}
            >
              {/* Bagian Atas: Preview Gambar Mockup */}
              <div>
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

                {/* Konten Card: Judul & Deskripsi */}
                <div className="p-5 sm:p-5.5 space-y-2.5">
                  <h3
                    className={`text-base font-bold tracking-tight line-clamp-1 transition-colors ${
                      isDark
                        ? "text-zinc-100 group-hover:text-white"
                        : "text-zinc-900 group-hover:text-zinc-950"
                    }`}
                  >
                    {project.title}
                  </h3>

                  <p
                    className={`text-xs leading-relaxed line-clamp-3 ${
                      isDark ? "text-zinc-400" : "text-zinc-600"
                    }`}
                  >
                    {project.description}
                  </p>

                  {/* Teknologi yang digunakan dengan Real Logo */}
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

              {/* Bagian Bawah: Action Buttons (Demo & Github Links) */}
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

        {/* Tombol Lihat Selengkapnya */}
        <div data-reveal className="mt-14 flex justify-center">
          <Link
            href="/projects"
            className={`group inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 active:scale-95 border ${
              isDark
                ? "bg-zinc-900/80 text-zinc-200 border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700 hover:text-white shadow-xs"
                : "bg-white text-zinc-800 border-zinc-200/90 hover:bg-zinc-50 hover:border-zinc-300 hover:text-zinc-950 shadow-xs"
            }`}
          >
            <span>Lihat Semua Proyek ({projects.length})</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-emerald-500" />
          </Link>
        </div>
      </div>
    </section>
  );
}
