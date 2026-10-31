import { portfolioData } from "@/data/portfolio";
import { GraduationCap, Users, Calendar, Sparkles } from "lucide-react";

interface OrganizationProps {
  theme: "dark" | "light";
}

export function OrganizationSection({ theme }: OrganizationProps) {
  const { education, organizations } = portfolioData;
  const isDark = theme === "dark";

  return (
    <section id="education-organization" className="py-24 relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-6">
        {/* Header Section */}
        <div data-reveal className="mb-14">
          <h2
            className={`text-3xl sm:text-4xl font-semibold tracking-tight ${
              isDark ? "text-zinc-100" : "text-zinc-900"
            }`}
          >
            Pendidikan & Organisasi
          </h2>
          <p
            className={`mt-2 text-base max-w-xl ${
              isDark ? "text-zinc-400" : "text-zinc-600"
            }`}
          >
            Fondasi akademik dan pengalaman kepemimpinan kolaboratif dalam lingkungan teknologi.
          </p>
        </div>

        {/* 2-Card Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* Card 1: Pendidikan (Study) */}
          <div
            data-reveal
            className={`p-6 sm:p-8 rounded-3xl border flex flex-col justify-between transition-all duration-300 ${
              isDark
                ? "bg-zinc-900/40 border-zinc-800/80"
                : "bg-white/90 border-zinc-200/90 shadow-xs"
            }`}
          >
            <div>
              {/* Header Card */}
              <div className="flex items-center gap-3 pb-6 border-b border-zinc-500/10 mb-6">
                <div
                  className={`w-11 h-11 rounded-2xl flex items-center justify-center ${
                    isDark
                      ? "bg-emerald-950/70 text-emerald-400 border border-emerald-800/40"
                      : "bg-emerald-50 text-emerald-600 border border-emerald-200"
                  }`}
                >
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3
                    className={`text-lg font-semibold ${
                      isDark ? "text-zinc-100" : "text-zinc-900"
                    }`}
                  >
                    Pendidikan Formal
                  </h3>
                  <p className="text-xs text-zinc-500">Studi & Program Akademik</p>
                </div>
              </div>

              {/* Konten Pendidikan */}
              <div className="space-y-6">
                {education.map((item, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-zinc-500">
                      <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                      <span>{item.period}</span>
                    </div>

                    <h4
                      className={`text-base sm:text-lg font-semibold tracking-tight ${
                        isDark ? "text-zinc-100" : "text-zinc-900"
                      }`}
                    >
                      {item.degree}
                    </h4>

                    <p
                      className={`text-sm font-medium ${
                        isDark ? "text-emerald-400" : "text-emerald-600"
                      }`}
                    >
                      {item.institution}
                    </p>

                    <p
                      className={`text-xs sm:text-sm leading-relaxed pt-1 ${
                        isDark ? "text-zinc-400" : "text-zinc-600"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Status Footer Badge */}
            <div className="mt-8 pt-4 border-t border-zinc-500/10 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-emerald-500">
                Status: Mahasiswa Aktif
              </span>
            </div>
          </div>

          {/* Card 2: Organisasi & Kepanitiaan */}
          <div
            data-reveal
            className={`p-6 sm:p-8 rounded-3xl border flex flex-col justify-between transition-all duration-300 ${
              isDark
                ? "bg-zinc-900/40 border-zinc-800/80"
                : "bg-white/90 border-zinc-200/90 shadow-xs"
            }`}
          >
            <div>
              {/* Header Card */}
              <div className="flex items-center gap-3 pb-6 border-b border-zinc-500/10 mb-6">
                <div
                  className={`w-11 h-11 rounded-2xl flex items-center justify-center ${
                    isDark
                      ? "bg-sky-950/70 text-sky-400 border border-sky-800/40"
                      : "bg-sky-50 text-sky-600 border border-sky-200"
                  }`}
                >
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3
                    className={`text-lg font-semibold ${
                      isDark ? "text-zinc-100" : "text-zinc-900"
                    }`}
                  >
                    Organisasi & Komunitas
                  </h3>
                  <p className="text-xs text-zinc-500">Peran & Kontribusi Sosial</p>
                </div>
              </div>

              {/* Konten Organisasi */}
              <div className="space-y-6">
                {organizations.map((org, idx) => (
                  <div
                    key={idx}
                    className={`space-y-1.5 ${
                      idx !== 0 ? "pt-5 border-t border-zinc-500/10" : ""
                    }`}
                  >
                    <div className="flex items-center gap-2 text-xs text-zinc-500">
                      <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                      <span>{org.period}</span>
                    </div>

                    <h4
                      className={`text-base font-semibold tracking-tight ${
                        isDark ? "text-zinc-100" : "text-zinc-900"
                      }`}
                    >
                      {org.name}
                    </h4>

                    <p
                      className={`text-sm font-medium ${
                        isDark ? "text-sky-400" : "text-sky-600"
                      }`}
                    >
                      {org.role}
                    </p>

                    {org.description && (
                      <p
                        className={`text-xs leading-relaxed pt-0.5 ${
                          isDark ? "text-zinc-400" : "text-zinc-600"
                        }`}
                      >
                        {org.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Badge */}
            <div className="mt-8 pt-4 border-t border-zinc-500/10">
              <span className="text-xs text-zinc-500">
                Kolaborasi, kepemimpinan & IT support
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
