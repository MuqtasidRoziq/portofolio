import { portfolioData } from "@/data/portfolio";
import { TechIcon } from "@/components/TechIcon";
import { MapPin, Briefcase, Mail, CheckCircle2, Sparkles, Terminal } from "lucide-react";

interface AboutProps {
  theme: "dark" | "light";
}

// 8 Teknologi Utama sesuai permintaan
const MAIN_TECHNOLOGIES = [
  { name: "Node.js", label: "Node.js" },
  { name: "Next.js", label: "Next.js" },
  { name: "Flutter", label: "Flutter" },
  { name: "Dart", label: "Dart" },
  { name: "PHP", label: "PHP" },
  { name: "JavaScript", label: "JavaScript" },
  { name: "Tailwind CSS", label: "Tailwind" },
  { name: "Bootstrap", label: "Bootstrap" },
];

export function About({ theme }: AboutProps) {
  const { personal } = portfolioData;
  const isDark = theme === "dark";

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Subtle background glow */}
      <div
        aria-hidden="true"
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none opacity-20 ${
          isDark ? "bg-indigo-600/30" : "bg-sky-400/20"
        }`}
      />

      <div className="mx-auto max-w-5xl px-6 relative z-10">
        {/* Section Header */}
        <div data-reveal className="mb-14">
          <h2
            className={`text-3xl sm:text-4xl font-semibold tracking-tight ${
              isDark ? "text-zinc-100" : "text-zinc-900"
            }`}
          >
            Tentang Saya
          </h2>
          <p
            className={`mt-2 text-base max-w-2xl ${
              isDark ? "text-zinc-400" : "text-zinc-600"
            }`}
          >
            Sekilas mengenai latar belakang, fokus keahlian, dan filosofi saya dalam mengembangkan produk perangkat lunak.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Sisi Kiri: Profil Card & Info Kunci */}
          <div data-reveal className="lg:col-span-5 space-y-4">
            <div
              className={`p-6 rounded-2xl border transition-all duration-300 shadow-sm ${
                isDark
                  ? "bg-zinc-900/60 border-zinc-800/80 backdrop-blur-md"
                  : "bg-white/80 border-zinc-200/90 backdrop-blur-md shadow-zinc-100"
              }`}
            >
              <div className="flex items-center gap-3 pb-5 border-b border-zinc-500/10">
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center font-bold text-lg ${
                    isDark ? "bg-zinc-800 text-zinc-100" : "bg-zinc-100 text-zinc-900"
                  }`}
                >
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h3
                    className={`font-semibold text-base ${
                      isDark ? "text-zinc-100" : "text-zinc-900"
                    }`}
                  >
                    {personal.name}
                  </h3>
                  <p className="text-xs text-zinc-500">{personal.role}</p>
                </div>
              </div>

              {/* Status & Info Cepat */}
              <div className="mt-5 space-y-3.5 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-zinc-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-zinc-500 block text-xs">Lokasi</span>
                    <span
                      className={`font-medium ${
                        isDark ? "text-zinc-200" : "text-zinc-800"
                      }`}
                    >
                      {personal.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Briefcase className="w-4 h-4 text-zinc-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-zinc-500 block text-xs">Status Karir</span>
                    <span className="inline-flex items-center gap-1.5 font-medium text-emerald-500 text-xs">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      Tersedia untuk Pekerjaan / Freelance
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-zinc-400 mt-0.5 shrink-0" />
                  <div className="min-w-0">
                    <span className="text-zinc-500 block text-xs">Email</span>
                    <a
                      href={`mailto:${personal.email}`}
                      className={`font-medium text-xs hover:underline truncate block ${
                        isDark ? "text-zinc-200 hover:text-white" : "text-zinc-800 hover:text-zinc-950"
                      }`}
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Tech Highlights Badge - 8 Teknologi Utama */}
              <div className="mt-6 pt-5 border-t border-zinc-500/10">
                <span className="text-xs font-medium text-zinc-500 block mb-3">
                  Teknologi Utama:
                </span>
                <div className="flex flex-wrap gap-2">
                  {MAIN_TECHNOLOGIES.map((tech, i) => (
                    <span
                      key={i}
                      className={`inline-flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        isDark
                          ? "bg-zinc-800/90 text-zinc-200 border border-zinc-700/60 hover:border-zinc-500"
                          : "bg-zinc-100 text-zinc-800 border border-zinc-200/90 hover:border-zinc-300"
                      }`}
                    >
                      <TechIcon name={tech.name} className="w-4 h-4 shrink-0" />
                      <span>{tech.label}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Metric Highlight Box */}
            <div className="grid grid-cols-2 gap-3">
              <div
                className={`p-4 rounded-xl border text-center transition-all ${
                  isDark
                    ? "bg-zinc-900/40 border-zinc-800/60"
                    : "bg-zinc-50/80 border-zinc-200/70"
                }`}
              >
                <div className={`text-2xl font-bold ${isDark ? "text-zinc-100" : "text-zinc-900"}`}>
                  17+
                </div>
                <div className="text-xs text-zinc-500 mt-1">Tech Stack Dikuasai</div>
              </div>
              <div
                className={`p-4 rounded-xl border text-center transition-all ${
                  isDark
                    ? "bg-zinc-900/40 border-zinc-800/60"
                    : "bg-zinc-50/80 border-zinc-200/70"
                }`}
              >
                <div className={`text-2xl font-bold ${isDark ? "text-zinc-100" : "text-zinc-900"}`}>
                  100%
                </div>
                <div className="text-xs text-zinc-500 mt-1">Dedikasi Solusi</div>
              </div>
            </div>
          </div>

          {/* Sisi Kanan: Cerita & Nilai / Prinsip Kerja */}
          <div data-reveal className="lg:col-span-7 space-y-6">
            <div
              className={`p-6 sm:p-8 rounded-2xl border transition-all ${
                isDark
                  ? "bg-zinc-900/40 border-zinc-800/80"
                  : "bg-white/80 border-zinc-200/80 shadow-xs"
              }`}
            >
              <h3
                className={`text-lg font-semibold mb-4 ${
                  isDark ? "text-zinc-100" : "text-zinc-900"
                }`}
              >
                Kisah & Perjalanan Singkat
              </h3>
              <div
                className={`space-y-4 text-sm sm:text-base leading-relaxed ${
                  isDark ? "text-zinc-300" : "text-zinc-700"
                }`}
              >
                {personal.about.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            {/* Value / Prinsip Kerja Card */}
            <div
              className={`p-6 rounded-2xl border transition-all ${
                isDark
                  ? "bg-zinc-900/30 border-zinc-800/60"
                  : "bg-zinc-50/70 border-zinc-200/70"
              }`}
            >
              <h4
                className={`text-sm font-semibold mb-4 uppercase tracking-wider text-xs ${
                  isDark ? "text-zinc-400" : "text-zinc-600"
                }`}
              >
                Prinsip Utama Kerja Saya
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  {
                    title: "Clean & Maintainable Code",
                    desc: "Kode tersusun rapi, terdokumentasi, dan mudah dikembangkan oleh tim.",
                  },
                  {
                    title: "User-Centered Experience",
                    desc: "Antarmuka intuitif, responsif di berbagai perangkat, dan aksesibel.",
                  },
                  {
                    title: "Modern & Robust Architecture",
                    desc: "Memadukan framework modern dengan performa tinggi dan keamanan teruji.",
                  },
                  {
                    title: "Continuous Learning",
                    desc: "Selalu adaptif mengikuti inovasi teknologi frontend, backend, dan mobile.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-1 shrink-0" />
                    <div>
                      <h5
                        className={`text-xs font-semibold ${
                          isDark ? "text-zinc-200" : "text-zinc-800"
                        }`}
                      >
                        {item.title}
                      </h5>
                      <p className="text-xs text-zinc-500 mt-0.5 leading-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
