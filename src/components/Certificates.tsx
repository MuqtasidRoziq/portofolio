"use client";

import { useState } from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import { Award, Sparkles, ExternalLink, X } from "lucide-react";

interface CertificatesProps {
  theme: "dark" | "light";
}

export function CertificatesSection({ theme }: CertificatesProps) {
  const { certificates } = portfolioData;
  const isDark = theme === "dark";
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!certificates || certificates.length === 0) {
    return null;
  }

  return (
    <section id="certificates" className="py-24 relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-6">
        {/* Section Header */}
        <div data-reveal className="mb-14">
          <h2
            className={`text-3xl sm:text-4xl font-semibold tracking-tight ${
              isDark ? "text-zinc-100" : "text-zinc-900"
            }`}
          >
            Sertifikasi & Lisensi
          </h2>
          <p
            className={`mt-2 text-base max-w-xl ${
              isDark ? "text-zinc-400" : "text-zinc-600"
            }`}
          >
            Bukti pencapaian akademik dan pelatihan profesional yang telah saya selesaikan untuk memperkuat keahlian teknis.
          </p>
        </div>

        {/* 3-Column Certificate Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {certificates.map((cert, idx) => (
            <div
              key={idx}
              data-reveal
              className={`group flex flex-col justify-between rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                isDark
                  ? "bg-zinc-900/40 border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/70"
                  : "bg-white/90 border-zinc-200/90 hover:border-zinc-300 hover:bg-white shadow-xs"
              }`}
            >
              <div>
                {/* Certificate Preview Image */}
                <div
                  onClick={() => setSelectedImage(cert.image)}
                  className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-950/40 border-b border-zinc-500/10 cursor-pointer"
                >
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    width={580}
                    height={403}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/90 text-zinc-900 backdrop-blur-xs shadow-md">
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Lihat Ukuran Penuh</span>
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 space-y-2">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                        isDark
                          ? "bg-emerald-950/60 text-emerald-400 border border-emerald-800/40"
                          : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                      }`}
                    >
                      {cert.category || "Certification"}
                    </span>
                  </div>

                  <h3
                    className={`text-base font-bold tracking-tight line-clamp-2 transition-colors ${
                      isDark
                        ? "text-zinc-100 group-hover:text-white"
                        : "text-zinc-900 group-hover:text-zinc-950"
                    }`}
                  >
                    {cert.title}
                  </h3>

                  <div className="flex items-center gap-1.5 pt-1 text-xs text-zinc-500">
                    <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Penerbit: {cert.issuer}</span>
                  </div>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="px-5 pb-5 pt-2 border-t border-zinc-500/10">
                <button
                  onClick={() => setSelectedImage(cert.image)}
                  className={`w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    isDark
                      ? "bg-zinc-800/80 text-zinc-200 hover:bg-zinc-700 hover:text-white"
                      : "bg-zinc-100 text-zinc-800 hover:bg-zinc-200 hover:text-zinc-950"
                  }`}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Buka Sertifikat</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal for Fullsize Certificate View */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-700 p-2 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              aria-label="Tutup preview"
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-zinc-800/90 text-white hover:bg-zinc-700 cursor-pointer transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative w-full aspect-[4/3] max-h-[82vh] overflow-hidden rounded-xl">
              <Image
                src={selectedImage}
                alt="Sertifikat Penuh"
                fill
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
