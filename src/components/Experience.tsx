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

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              data-reveal
              className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 hover:shadow-md ${
                isDark
                  ? "bg-zinc-900/40 border-zinc-800/80 hover:border-zinc-700"
                  : "bg-white/90 border-zinc-200/90 hover:border-zinc-300 shadow-xs"
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Info Role, Company & Lokasi */}
                <div className="lg:col-span-5 space-y-3">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg text-xs font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>{exp.role}</span>
                  </div>

                  <h3
                    className={`text-xl sm:text-2xl font-semibold tracking-tight ${
                      isDark ? "text-zinc-100" : "text-zinc-900"
                    }`}
                  >
                    {exp.company}
                  </h3>

                  <div className="space-y-1.5 text-xs text-zinc-500">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Deskripsi & Teknologi */}
                <div className="lg:col-span-7 space-y-5">
                  <ul className="space-y-3">
                    {exp.description.map((item, dIdx) => (
                      <li
                        key={dIdx}
                        className={`text-sm leading-relaxed flex items-start gap-2.5 ${
                          isDark ? "text-zinc-300" : "text-zinc-700"
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Badge Teknologi dengan Real Logo SVG */}
                  <div className="pt-2 border-t border-zinc-500/10">
                    <span className="text-xs font-medium text-zinc-500 block mb-2.5">
                      Teknologi yang Digunakan:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                            isDark
                              ? "bg-zinc-800/80 text-zinc-200 border border-zinc-700/60"
                              : "bg-zinc-100 text-zinc-800 border border-zinc-200"
                          }`}
                        >
                          <TechIcon name={tech} className="w-4 h-4 shrink-0" />
                          <span>{tech}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
