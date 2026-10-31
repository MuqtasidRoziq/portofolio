import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muqtasid Roziq | Portfolio & Software Engineer",
  description:
    "Portofolio resmi Muqtasid Roziq - Full-Stack Developer & Software Engineer.",
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
