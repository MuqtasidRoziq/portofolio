import { portfolioData } from "@/data/portfolio";
import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/SocialIcons";

interface ContactProps {
  theme: "dark" | "light";
}

export function ContactSection({ theme }: ContactProps) {
  const { personal } = portfolioData;

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="max-w-2xl">
          <h2
            className={`text-3xl sm:text-4xl font-bold tracking-tight ${
              theme === "dark" ? "text-zinc-100" : "text-zinc-900"
            }`}
          >
            Kontak & Diskusi
          </h2>
          <p
            className={`mt-4 text-base leading-relaxed ${
              theme === "dark" ? "text-zinc-400" : "text-zinc-600"
            }`}
          >
            Tertarik untuk berkolaborasi, berdiskusi mengenai proyek web, atau memiliki peluang kerja sama? Silakan hubungi saya melalui jalur di bawah ini.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href={`mailto:${personal.email}`}
              className={`inline-flex items-center gap-2 rounded-full font-semibold px-6 py-3 text-sm active:scale-95 transition-transform ${
                theme === "dark"
                  ? "bg-zinc-100 text-zinc-950 hover:bg-white"
                  : "bg-zinc-900 text-zinc-50 hover:bg-zinc-800"
              }`}
            >
              <Mail className="h-4 w-4" />
              <span>{personal.email}</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>

            <div className="flex items-center gap-3">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-colors ${
                  theme === "dark"
                    ? "bg-zinc-900 text-zinc-400 hover:text-white"
                    : "bg-zinc-100 text-zinc-600 hover:text-zinc-900"
                }`}
                aria-label="GitHub"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-colors ${
                  theme === "dark"
                    ? "bg-zinc-900 text-zinc-400 hover:text-white"
                    : "bg-zinc-100 text-zinc-600 hover:text-zinc-900"
                }`}
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a
                href={personal.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-colors ${
                  theme === "dark"
                    ? "bg-zinc-900 text-zinc-400 hover:text-white"
                    : "bg-zinc-100 text-zinc-600 hover:text-zinc-900"
                }`}
                aria-label="Instagram"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
