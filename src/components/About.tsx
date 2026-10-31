import { portfolioData } from "@/data/portfolio";
import { MapPin, Mail, Sparkles, GraduationCap, Code2, Smartphone } from "lucide-react";

interface AboutProps {
  theme: "dark" | "light";
}

export function About({ theme }: AboutProps) {
  const { personal } = portfolioData;
  const isDark = theme === "dark";

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-6">
        {/* Section Heading */}
        <div data-reveal className="mb-14">
          <h2
            className={`text-3xl sm:text-4xl font-semibold tracking-tight ${
              isDark ? "text-zinc-100" : "text-zinc-900"
            }`}
          >
            Tentang Saya
          </h2>
          <p
            className={`mt-2 text-base max-w-xl ${
              isDark ? "text-zinc-400" : "text-zinc-600"
            }`}
          >
            Mengenal lebih dekat latar belakang akademik, spesialisasi, dan pendekatan saya dalam rekayasa perangkat lunak.
          </p>
        </div>

        {/* 2-Column Minimalist & Modern Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Sisi Kiri: Biodata Singkat & Fokus Utama */}
          <div data-reveal className="lg:col-span-4 space-y-6">
            <div className="space-y-1.5">
              <h3
                className={`text-xl sm:text-2xl font-bold tracking-tight ${
                  isDark ? "text-zinc-100" : "text-zinc-900"
                }`}
              >
                {personal.name}
              </h3>
              <p
                className={`text-sm font-medium ${
                  isDark ? "text-emerald-400" : "text-emerald-600"
                }`}
              >
                {personal.role}
              </p>
            </div>

            {/* Fokus Keahlian Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium border ${
                  isDark
                    ? "bg-zinc-900/60 text-zinc-300 border-zinc-800"
                    : "bg-zinc-50 text-zinc-700 border-zinc-200"
                }`}
              >
                <Code2 className="w-3.5 h-3.5 text-sky-400" />
                <span>Web Fullstack</span>
              </span>
              <span
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium border ${
                  isDark
                    ? "bg-zinc-900/60 text-zinc-300 border-zinc-800"
                    : "bg-zinc-50 text-zinc-700 border-zinc-200"
                }`}
              >
                <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
                <span>Mobile App</span>
              </span>
            </div>

            {/* Info Kontak & Lokasi */}
            <div
              className={`space-y-3.5 pt-4 border-t text-sm ${
                isDark ? "border-zinc-800 text-zinc-300" : "border-zinc-200 text-zinc-700"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <GraduationCap className="w-4 h-4 text-zinc-400 shrink-0" />
                <span className="text-xs sm:text-sm">Teknik Informatika</span>
              </div>

              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-zinc-400 shrink-0" />
                <span className="text-xs sm:text-sm">{personal.location}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-zinc-400 shrink-0" />
                <a
                  href={`mailto:${personal.email}`}
                  className={`text-xs sm:text-sm hover:underline truncate transition-colors ${
                    isDark ? "hover:text-white" : "hover:text-zinc-950"
                  }`}
                >
                  {personal.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <span className="relative flex h-2.5 w-2.5 shrink-0 ml-0.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-xs sm:text-sm font-medium text-emerald-500">
                  Tersedia untuk Pekerjaan / Freelance
                </span>
              </div>
            </div>
          </div>

          {/* Sisi Kanan: Narasi Deskripsi yang Nyaman Dibaca */}
          <div
            data-reveal
            className={`lg:col-span-8 space-y-4 text-base leading-relaxed ${
              isDark ? "text-zinc-300" : "text-zinc-700"
            }`}
          >
            {personal.about.map((paragraph, idx) => (
              <p key={idx}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
