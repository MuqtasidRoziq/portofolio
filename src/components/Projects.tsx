import { portfolioData } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";

interface ProjectsProps {
  theme: "dark" | "light";
}

export function ProjectsSection({ theme }: ProjectsProps) {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-14">
          <h2
            data-reveal
            className={`text-3xl sm:text-4xl font-bold tracking-tight ${
              theme === "dark" ? "text-zinc-100" : "text-zinc-900"
            }`}
          >
            Proyek Pilihan
          </h2>
          <p
            data-reveal
            className={`mt-3 text-base max-w-xl ${
              theme === "dark" ? "text-zinc-400" : "text-zinc-600"
            }`}
          >
            Aplikasi dan solusi digital yang telah saya rancang dan bangun dengan standar performa dan kode rapi.
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, idx) => (
            <article
              key={idx}
              data-reveal
              className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-6"
            >
              <div className="md:col-span-5 space-y-2">
                <div className="flex items-center gap-3">
                  <h3
                    className={`text-xl font-bold ${
                      theme === "dark" ? "text-zinc-100" : "text-zinc-900"
                    }`}
                  >
                    {project.title}
                  </h3>
                </div>

                <div
                  className={`flex items-center gap-3 pt-2 text-sm ${
                    theme === "dark" ? "text-zinc-400" : "text-zinc-600"
                  }`}
                >
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1 transition underline underline-offset-4 ${
                        theme === "dark"
                          ? "text-zinc-300 hover:text-white"
                          : "text-zinc-800 hover:text-zinc-950"
                      }`}
                    >
                      Kunjungi Demo
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1 transition ${
                        theme === "dark"
                          ? "text-zinc-400 hover:text-zinc-200"
                          : "text-zinc-600 hover:text-zinc-900"
                      }`}
                      aria-label="Source code"
                    >
                      <GithubIcon className="h-4 w-4" />
                      <span>Source</span>
                    </a>
                  )}
                </div>
              </div>

              <div className="md:col-span-7 space-y-4">
                <p
                  className={`text-sm sm:text-base leading-relaxed ${
                    theme === "dark" ? "text-zinc-300" : "text-zinc-700"
                  }`}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className={`text-xs px-2.5 py-1 rounded ${
                        theme === "dark"
                          ? "text-zinc-400 bg-zinc-900"
                          : "text-zinc-600 bg-zinc-100"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
