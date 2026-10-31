"use client";

import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import { ArrowDown, Mail, Sun, Moon } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/SocialIcons";

interface HeroProps {
  unlocked: boolean;
  onExplore: () => void;
  theme: "dark" | "light";
  onToggleTheme: () => void;
}

export function Hero({ unlocked, onExplore, theme, onToggleTheme }: HeroProps) {
  const { personal } = portfolioData;

  return (
    <section
      id="home"
      className="min-h-[100dvh] flex flex-col justify-center items-center px-6 py-20 relative"
    >
      {/* Tombol Tema di Hero saat awal (sebelum navbar muncul) */}
      {!unlocked && (
        <div className="absolute top-6 right-6 z-30">
          <button
            onClick={onToggleTheme}
            aria-label="Ganti mode tema"
            className={`p-2.5 rounded-full transition-colors cursor-pointer ${
              theme === "dark"
                ? "bg-zinc-900 text-amber-300 hover:bg-zinc-800"
                : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
            }`}
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </div>
      )}

      <div className="max-w-5xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Sisi Kiri: Teks, Headline, Deskripsi, Tombol Aksi & Sosmed */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
          {/* H1: Role (Tetap ukuran compact seperti sekarang) */}
          <h1
            className={`text-sm font-semibold tracking-wider uppercase mb-2 ${
              theme === "dark" ? "text-zinc-400" : "text-zinc-500"
            }`}
          >
            {personal.role}
          </h1>

          {/* H2: Name (Tetap ukuran besar seperti sekarang) */}
          <h2
            className={`text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight ${
              theme === "dark" ? "text-zinc-100" : "text-zinc-900"
            }`}
          >
            {personal.name}
          </h2>

          <p
            className={`mt-4 text-base sm:text-lg max-w-xl leading-relaxed ${
              theme === "dark" ? "text-zinc-400" : "text-zinc-600"
            }`}
          >
            {personal.bio}
          </p>

          {/* Action Button: Tentang Saya */}
          <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <button
              onClick={onExplore}
              className={`inline-flex items-center gap-2.5 rounded-full font-semibold px-7 py-3 text-sm active:scale-95 transition-transform cursor-pointer ${
                theme === "dark"
                  ? "bg-zinc-100 text-zinc-950 hover:bg-white"
                  : "bg-zinc-900 text-zinc-50 hover:bg-zinc-800"
              }`}
            >
              <span>Tentang Saya</span>
              <ArrowDown
                className={`h-4 w-4 transition-transform duration-300 ${
                  unlocked ? "translate-y-0.5" : ""
                }`}
              />
            </button>

            <a
              href={`mailto:${personal.email}`}
              className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors ${
                theme === "dark"
                  ? "bg-zinc-900 text-zinc-300 hover:text-white"
                  : "bg-zinc-100 text-zinc-700 hover:text-zinc-900"
              }`}
            >
              <Mail className="h-4 w-4" />
              <span>Email</span>
            </a>
          </div>

          {/* Tombol-tombol Sosial Media: GitHub, LinkedIn, Instagram, Email */}
          <div className="mt-8 flex items-center justify-center lg:justify-start gap-3">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
              className={`p-2.5 rounded-full transition-colors ${
                theme === "dark"
                  ? "bg-zinc-900 text-zinc-400 hover:text-white"
                  : "bg-zinc-100 text-zinc-600 hover:text-zinc-900"
              }`}
            >
              <GithubIcon className="h-5 w-5" />
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className={`p-2.5 rounded-full transition-colors ${
                theme === "dark"
                  ? "bg-zinc-900 text-zinc-400 hover:text-white"
                  : "bg-zinc-100 text-zinc-600 hover:text-zinc-900"
              }`}
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>

            <a
              href={personal.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Instagram"
              className={`p-2.5 rounded-full transition-colors ${
                theme === "dark"
                  ? "bg-zinc-900 text-zinc-400 hover:text-white"
                  : "bg-zinc-100 text-zinc-600 hover:text-zinc-900"
              }`}
            >
              <InstagramIcon className="h-5 w-5" />
            </a>

            <a
              href={`mailto:${personal.email}`}
              aria-label="Mail"
              title="Kirim Email"
              className={`p-2.5 rounded-full transition-colors ${
                theme === "dark"
                  ? "bg-zinc-900 text-zinc-400 hover:text-white"
                  : "bg-zinc-100 text-zinc-600 hover:text-zinc-900"
              }`}
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Sisi Kanan: Foto Profil Solid (Clean, Tanpa Floating/Bayangan Mengambang) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2">
          <div
            className={`w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden relative ${
              theme === "dark" ? "bg-zinc-900" : "bg-zinc-100"
            }`}
          >
            <Image
              src="/profile.webp"
              alt={personal.name}
              fill
              sizes="(max-width: 640px) 224px, (max-width: 1024px) 288px, 320px"
              priority
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
