"use client";

import { useState, useEffect } from "react";
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

  // Typing effect animation yang berulang setiap 5 detik setelah selesai
  const fullText = `Hai, Saya ${personal.name}`;
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingDone, setIsTypingDone] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    let isCancelled = false;

    const runTypingLoop = () => {
      let currentIndex = 0;
      setIsTypingDone(false);
      setDisplayedText("");

      const interval = setInterval(() => {
        if (isCancelled) {
          clearInterval(interval);
          return;
        }

        if (currentIndex <= fullText.length) {
          setDisplayedText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
          setIsTypingDone(true);
          // Tunggu 5 detik sebelum mengetik ulang
          timer = setTimeout(() => {
            if (!isCancelled) {
              runTypingLoop();
            }
          }, 5000);
        }
      }, 55);
    };

    // Delay awal saat halaman pertama dimuat
    const initialDelay = setTimeout(() => {
      runTypingLoop();
    }, 700);

    return () => {
      isCancelled = true;
      clearTimeout(initialDelay);
      clearTimeout(timer);
    };
  }, [fullText]);

  return (
    <section
      id="home"
      className="min-h-[100dvh] flex flex-col justify-center items-center px-6 py-20 relative overflow-hidden"
    >
      {/* Tombol Tema di Hero saat awal (sebelum navbar muncul) */}
      {!unlocked && (
        <div className="absolute inset-x-0 top-6 z-30 anim-hero-1 px-6">
          <div className="mx-auto flex max-w-5xl justify-end">
            <button
              onClick={onToggleTheme}
              aria-label="Ganti mode tema"
              className={`p-2.5 rounded-full transition-colors cursor-pointer ${
                theme === "dark"
                  ? "bg-zinc-900 text-zinc-100 hover:bg-zinc-800"
                  : "bg-zinc-100 text-zinc-900 hover:bg-zinc-200"
              }`}
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      )}

      <div className="max-w-5xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Sisi Kiri: Teks, Headline, Deskripsi, Tombol Aksi & Sosmed */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
          {/* H1: Greeting & Nama Lengkap dengan JetBrains Mono font & Typing Effect */}
          <h1
            className={`font-mono text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight min-h-[2.5em] lg:min-h-[2.2em] ${
              theme === "dark" ? "text-zinc-100" : "text-zinc-900"
            }`}
          >
            <span>{displayedText}</span>
            <span
              className={`inline-block w-[3px] sm:w-[4px] h-[0.9em] ml-1 bg-emerald-400 align-baseline ${
                isTypingDone ? "animate-pulse" : "opacity-100"
              }`}
            />
          </h1>

          {/* Deskripsi Singkat yang Natural & Menarik */}
          <p
            className={`mt-4 text-base sm:text-lg max-w-xl leading-relaxed anim-hero-desc ${
              theme === "dark" ? "text-zinc-300" : "text-zinc-600"
            }`}
          >
            {personal.bio}
          </p>

          {/* Action Button: Tentang Saya */}
          <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4 anim-hero-buttons">
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
          </div>

          {/* Tombol-tombol Sosial Media: GitHub, LinkedIn, Instagram, Email */}
          <div className="mt-8 flex items-center justify-center lg:justify-start gap-3 anim-hero-social">
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

        {/* Sisi Kanan: Foto Profil Solid (Aset Asli profile.webp Terkunci & Utuh) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2 anim-hero-photo">
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