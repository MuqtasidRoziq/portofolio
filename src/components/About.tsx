import { portfolioData } from "@/data/portfolio";

interface AboutProps {
  theme: "dark" | "light";
}

export function About({ theme }: AboutProps) {
  const { personal } = portfolioData;

  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4">
            <h2
              data-reveal
              className={`text-3xl sm:text-4xl font-bold tracking-tight ${
                theme === "dark" ? "text-zinc-100" : "text-zinc-900"
              }`}
            >
              Tentang Saya
            </h2>
            <div data-reveal className="mt-6 space-y-3 text-sm">
              <div>
                <span className="text-zinc-500 block text-xs">Lokasi</span>
                <span
                  className={`font-medium ${
                    theme === "dark" ? "text-zinc-200" : "text-zinc-800"
                  }`}
                >
                  {personal.location}
                </span>
              </div>
              <div>
                <span className="text-zinc-500 block text-xs">Fokus</span>
                <span
                  className={`font-medium ${
                    theme === "dark" ? "text-zinc-200" : "text-zinc-800"
                  }`}
                >
                  {personal.role}
                </span>
              </div>
              <div>
                <span className="text-zinc-500 block text-xs">Email</span>
                <a
                  href={`mailto:${personal.email}`}
                  className={`font-medium hover:underline ${
                    theme === "dark" ? "text-zinc-200" : "text-zinc-800"
                  }`}
                >
                  {personal.email}
                </a>
              </div>
            </div>
          </div>

          <div
            data-reveal
            className={`lg:col-span-8 space-y-6 text-base leading-relaxed ${
              theme === "dark" ? "text-zinc-300" : "text-zinc-700"
            }`}
          >
            {personal.about.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
