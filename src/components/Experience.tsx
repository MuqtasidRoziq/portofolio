import { portfolioData } from "@/data/portfolio";
import { TechIcon } from "@/components/TechIcon";
import { Briefcase, Calendar, MapPin, Sparkles } from "lucide-react";

interface ExperienceProps {
  theme: "dark" | "light";
}

export function ExperienceSection({ theme }: ExperienceProps) {
  const { experiences } = portfolioData;
  const isDark = theme === "dark";

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-6">
        <div data-reveal className="mb-14">
          <h2
            className={`text-3xl sm:text-4xl font-semibold tracking-tight ${
              isDark ? "text-zinc-100" : "text-zinc-900"
            }`}
          >
            Pengalaman Kerja
          </h2>
          <p
            className={`mt-2 text-base max-w-xl ${
              isDark ? "text-zinc-400" : "text-zinc-600"
            }`}
          >
            Rekam jejak kontribusi profesional saya dalam merancang dan mengembangkan sistem digital di industri.
          </p>
        </div>

        {/* Minimal Timeline with Connecting Line (Tanpa Kotak/Card Berat) */}
        <div className="relative pl-6 sm:pl-8 border-l border-zinc-700/40 dark:border-zinc-800 ml-2 sm:ml-4 space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} data-reveal className="relative">
              {/* Timeline Indicator Dot */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full border-2 transition-colors ${
                  isDark
                    ? "bg-zinc-950 border-emerald-400"
                    : "bg-white border-emerald-500"
                }`}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mx-auto mt-0.5" />
              </div>

              {/* Main Content */}
              <div className="space-y-4">
                {/* Header: Role, Company & Metadata */}
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                    <h3
                      className={`text-lg sm:text-xl font-semibold tracking-tight ${
                        isDark ? "text-zinc-100" : "text-zinc-900"
                      }`}
                    >
                      {exp.company}
                    </h3>
                    <span className="text-zinc-500">·</span>
                    <span
                      className={`text-base font-medium ${
                        isDark ? "text-emerald-400" : "text-emerald-600"
                      }`}
                    >
                      {exp.role}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-zinc-500">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Deskripsi Poin */}
                <ul className="space-y-2 max-w-3xl">
                  {exp.description.map((item, dIdx) => (
                    <li
                      key={dIdx}
                      className={`text-sm leading-relaxed flex items-start gap-2.5 ${
                        isDark ? "text-zinc-300" : "text-zinc-700"
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600 mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack Pills dengan Logo */}
                <div className="pt-2 flex flex-wrap items-center gap-2">
                  {exp.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium border ${
                        isDark
                          ? "bg-zinc-900/60 text-zinc-300 border-zinc-800"
                          : "bg-zinc-50 text-zinc-700 border-zinc-200"
                      }`}
                    >
                      <TechIcon name={tech} className="w-3.5 h-3.5 shrink-0" />
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
