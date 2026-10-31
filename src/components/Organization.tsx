import { portfolioData } from "@/data/portfolio";

interface OrganizationProps {
  theme: "dark" | "light";
}

export function OrganizationSection({ theme }: OrganizationProps) {
  const { organizations } = portfolioData;

  return (
    <section id="organization" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-14">
          <h2
            data-reveal
            className={`text-3xl sm:text-4xl font-bold tracking-tight ${
              theme === "dark" ? "text-zinc-100" : "text-zinc-900"
            }`}
          >
            Organisasi & Komunitas
          </h2>
          <p
            data-reveal
            className={`mt-3 text-base max-w-xl ${
              theme === "dark" ? "text-zinc-400" : "text-zinc-600"
            }`}
          >
            Aktivitas kepemimpinan, kontribusi komunitas teknologi, dan kerja sama tim.
          </p>
        </div>

        <div className="space-y-16">
          {organizations.map((org, idx) => (
            <div
              key={idx}
              data-reveal
              className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-4"
            >
              <div className="md:col-span-4 space-y-1">
                <h3
                  className={`text-lg font-bold ${
                    theme === "dark" ? "text-zinc-100" : "text-zinc-900"
                  }`}
                >
                  {org.name}
                </h3>
                <p
                  className={`text-sm font-medium ${
                    theme === "dark" ? "text-zinc-400" : "text-zinc-600"
                  }`}
                >
                  {org.role}
                </p>
                <p className="text-xs text-zinc-500">{org.period}</p>
              </div>

              <div className="md:col-span-8">
                <ul
                  className={`space-y-2 text-sm ${
                    theme === "dark" ? "text-zinc-300" : "text-zinc-700"
                  }`}
                >
                  {org.description.map((item, dIdx) => (
                    <li key={dIdx} className="leading-relaxed">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
