import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://muqtasidroziq.dev"),
  title: {
    default: "Muqtasid Roziq | Full-Stack Developer & Software Engineer",
    template: "%s | Muqtasid Roziq",
  },
  description:
    "Portofolio Full-Stack Developer yang berfokus pada pengembangan web dan solusi digital inovatif, responsif, serta mudah digunakan.",
  keywords: [
    "Muqtasid Roziq",
    "Full-Stack Developer",
    "Software Engineer",
    "Web Developer Indonesia",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Tailwind CSS",
    "Node.js Developer",
    "Frontend Developer",
    "Backend Developer",
  ],
  authors: [{ name: "Muqtasid Roziq", url: "https://github.com/muqtasidroziq" }],
  creator: "Muqtasid Roziq",
  publisher: "Muqtasid Roziq",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.webp",
    shortcut: "/favicon.webp",
    apple: "/favicon.webp",
  },
  openGraph: {
    title: "Muqtasid Roziq | Full-Stack Developer & Software Engineer",
    description:
      "Portofolio profesional Muqtasid Roziq. Eksplorasi keahlian teknis, riwayat proyek web, pengalaman kerja, dan kolaborasi.",
    type: "website",
    locale: "id_ID",
    siteName: "Muqtasid Roziq Portfolio",
    images: [
      {
        url: "/profile.png",
        width: 800,
        height: 800,
        alt: "Muqtasid Roziq - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muqtasid Roziq | Full-Stack Developer & Software Engineer",
    description:
      "Portofolio resmi Muqtasid Roziq - Full-Stack Developer & Software Engineer.",
    images: ["/profile.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} scroll-smooth antialiased`}
    >
      <body className="bg-zinc-950 text-zinc-100 font-sans min-h-[100dvh]">
        {children}
      </body>
    </html>
  );
}
