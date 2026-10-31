import { portfolioData } from "@/data/portfolio";

interface SkillsProps {
  theme: "dark" | "light";
}

export function Skills({ theme }: SkillsProps) {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-14">
          <h2
            data-reveal
            className={`text-3xl sm:text-4xl font-semibold tracking-tight ${
              theme === "dark" ? "text-zinc-100" : "text-zinc-900"
            }`}
          >
            Keahlian & Teknologi
          </h2>
          <p
            data-reveal
            className={`mt-3 text-base max-w-xl ${
              theme === "dark" ? "text-zinc-400" : "text-zinc-600"
            }`}
          >
            Koleksi teknologi, arsitektur, dan perkakas teknis yang saya gunakan dalam membangun sistem web.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((group, idx) => (
            <div key={idx} data-reveal className="space-y-4">
              <h3
                className={`text-sm font-semibold pb-2 ${
                  theme === "dark" ? "text-zinc-200" : "text-zinc-800"
                }`}
              >
                {group.category}
              </h3>
              <ul className="space-y-2.5">
                {group.skills.map((skill, sIdx) => (
                  <li
                    key={sIdx}
                    className={`text-sm font-medium ${
                      theme === "dark" ? "text-zinc-300" : "text-zinc-700"
                    }`}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
