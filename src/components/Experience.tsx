import { portfolioData } from "@/data/portfolio";

interface ExperienceProps {
  theme: "dark" | "light";
}

export function ExperienceSection({ theme }: ExperienceProps) {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-14">
          <h2
            className={`text-3xl sm:text-4xl font-bold tracking-tight ${
              theme === "dark" ? "text-zinc-100" : "text-zinc-900"
            }`}
          >
            Pengalaman Kerja
          </h2>
          <p
            className={`mt-3 text-base max-w-xl ${
              theme === "dark" ? "text-zinc-400" : "text-zinc-600"
            }`}
          >
            Riwayat kontribusi profesional dalam pengembangan produk digital nyata.
          </p>
        </div>

        <div className="space-y-16">
          {experiences.map((exp, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-4">
              <div className="md:col-span-4 space-y-1">
                <h3
                  className={`text-lg font-bold ${
                    theme === "dark" ? "text-zinc-100" : "text-zinc-900"
                  }`}
                >
                  {exp.role}
                </h3>
                <p
                  className={`text-sm font-medium ${
                    theme === "dark" ? "text-zinc-400" : "text-zinc-600"
                  }`}
                >
                  {exp.company}
                </p>
                <p className="text-xs text-zinc-500">
                  {exp.period} · {exp.location}
                </p>
              </div>

              <div className="md:col-span-8 space-y-4">
                <ul
                  className={`space-y-2 text-sm ${
                    theme === "dark" ? "text-zinc-300" : "text-zinc-700"
                  }`}
                >
                  {exp.description.map((item, dIdx) => (
                    <li key={dIdx} className="leading-relaxed">
                      • {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className={`text-xs px-2.5 py-1 rounded ${
                        theme === "dark"
                          ? "text-zinc-400 bg-zinc-900"
                          : "text-zinc-600 bg-zinc-100"
                      }`}
                    >
                      {tech}
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
