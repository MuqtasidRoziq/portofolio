"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { ExperienceSection } from "@/components/Experience";
import { OrganizationSection } from "@/components/Organization";
import { ProjectsSection } from "@/components/Projects";
import { ContactSection } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { SnowEffect } from "@/components/SnowEffect";

export default function Home() {
  const [unlocked, setUnlocked] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme") as "dark" | "light" | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("portfolio-theme", nextTheme);
  };

  const handleUnlockAndGoAbout = () => {
    setUnlocked(true);
    // Smooth scroll langsung ke section Tentang Saya (#about)
    setTimeout(() => {
      const aboutEl = document.getElementById("about");
      if (aboutEl) {
        aboutEl.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div
      className={`min-h-[100dvh] transition-colors duration-300 flex flex-col relative ${
        theme === "dark" ? "bg-zinc-950 text-zinc-100" : "bg-[#fcfcfc] text-zinc-900"
      } ${!unlocked ? "h-[100dvh] overflow-hidden" : ""}`}
    >
      {/* Efek Salju Halus Turun */}
      <SnowEffect />

      {/* Navbar: Tersembunyi saat di hero awal, muncul setelah tombol tentang saya diklik */}
      <Navbar
        unlocked={unlocked}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main className="flex-1 relative z-10">
        <Hero
          unlocked={unlocked}
          onExplore={handleUnlockAndGoAbout}
          theme={theme}
          onToggleTheme={toggleTheme}
        />

        {unlocked && (
          <div className="animate-in fade-in duration-700">
            <About theme={theme} />
            <Skills theme={theme} />
            <ExperienceSection theme={theme} />
            <OrganizationSection theme={theme} />
            <ProjectsSection theme={theme} />
            <ContactSection theme={theme} />
          </div>
        )}
      </main>

      {unlocked && <Footer theme={theme} />}
    </div>
  );
}
