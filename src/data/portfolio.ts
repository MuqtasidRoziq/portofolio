export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  featured?: boolean;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
}

export interface Organization {
  role: string;
  name: string;
  period: string;
  description: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface PortfolioData {
  personal: {
    name: string;
    role: string;
    bio: string;
    about: string[];
    location: string;
    email: string;
    github: string;
    linkedin: string;
    instagram: string;
    availableForHire: boolean;
  };
  skills: SkillCategory[];
  experiences: Experience[];
  organizations: Organization[];
  projects: Project[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Muhammad Muqtasid Roziq",
    role: "Full-Stack Developer & Software Engineer",
    bio: "Saya adalah seorang developer yang berfokus merancang dan mengembangkan aplikasi web modern yang cepat, elegan, dan mudah digunakan.",
    about: [
      "Halo! Saya Muqtasid Roziq, seorang pengembang perangkat lunak yang antusias dalam merancang dan mengembangkan solusi digital dari konsep hingga deployment.",
      "Saya memiliki ketertarikan kuat pada ekosistem web modern seperti React, Next.js, TypeScript, serta arsitektur backend yang andal. Saya selalu berkomitmen untuk menulis kode yang bersih, mudah dipelihara, dan berpusat pada pengalaman pengguna.",
      "Selain ngoding, saya aktif berkolaborasi dalam organisasi teknologi, berbagi pengetahuan dengan komunitas, dan terus mengeksplorasi tren teknologi terbaru."
    ],
    location: "Tegal, Jawa Tengah, Indonesia",
    email: "muqtasidofficial@gmail.com",
    github: "https://github.com/muqtasidroziq",
    linkedin: "https://www.linkedin.com/in/muhammad-muqtasid-roziq/",
    instagram: "https://www.instagram.com/muqtsdrziq/",
    availableForHire: true,
  },
  skills: [
    {
      category: "Frontend & Mobile",
      skills: ["React.js", "Next.js", "Flutter", "Dart", "JavaScript", "Tailwind CSS", "Bootstrap"],
    },
    {
      category: "Backend & Framework",
      skills: ["PHP", "Laravel", "Node.js", "Python", "Flask"],
    },
    {
      category: "Database & Tools",
      skills: ["MySQL", "MongoDB", "Git", "Postman", "Ubuntu"],
    },
  ],
  experiences: [
    {
      role: "Fullstack Developer Intern",
      company: "PT. Bumi Tekno Indonesia",
      period: "Juli 2026 - November 2026",
      location: "Temanggung, Jawa Tengah, Indonesia",
      description: [
        "Mengembangkan CMS terpusat dan jaringan website satelit untuk manajemen serta distribusi konten multi-platform.",
        "Membangun backend dan skema database menggunakan PHP Native dan MySQL.",
        "Mengintegrasikan layanan pendukung dan automasi data menggunakan Node.js.",
        "Menerapkan optimasi On-Page SEO (meta tags dinamis, sitemap, dan semantic HTML) untuk meningkatkan visibilitas pencarian.",
        "Membangun antarmuka dashboard CMS yang responsif dan user-friendly menggunakan Bootstrap."
      ],
      technologies: ["PHP", "Bootstrap", "MySQL", "Node.js", "SEO Optimization"],
    },
  ],
  organizations: [
    {
      role: "Lead / Core Member",
      name: "Google Developer Student Club / Tech Community",
      period: "2023 - 2024",
      description: [
        "Menginisiasi dan memfasilitasi workshop teknis mengenai web development dan open-source.",
        "Memimpin kepanitiaan tech event dan webinar yang dihadiri oleh ratusan peserta.",
        "Membangun kolaborasi aktif antar anggota untuk mengerjakan mini project bersama."
      ],
    },
    {
      role: "Koordinator Divisi IT & Riset",
      name: "Himpunan Mahasiswa Informatika / Komputer",
      period: "2022 - 2023",
      description: [
        "Mengelola website resmi organisasi dan sistem pendataan kegiatan kampus.",
        "Melakukan sharing session mingguan mengenai pengenalan pemrograman untuk mahasiswa baru.",
        "Mendukung infrastruktur teknologi untuk berbagai agenda dan kompetisi kampus."
      ],
    },
  ],
  projects: [
    {
      title: "Modern Portfolio & Showcase Web",
      description: "Platform portofolio personal interaktif dengan performa tinggi, animasi elegan, dark mode aesthetic, dan navigasi mulus dibangun dengan Next.js App Router.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Responsive Design"],
      link: "https://example.com",
      github: "https://github.com/muqtasidroziq/portofolio",
      featured: true,
    },
    {
      title: "E-Commerce Dashboard & Analytics",
      description: "Dashboard manajemen produk, pesanan, dan analitik penjualan real-time dengan visualisasi data interaktif dan proteksi autentikasi.",
      tags: ["React", "Next.js", "Tailwind CSS", "PostgreSQL", "Prisma"],
      link: "https://example.com",
      github: "https://github.com/muqtasidroziq",
      featured: true,
    },
    {
      title: "Task & Workspace Management App",
      description: "Aplikasi produktivitas berbasis kanban board dengan fitur drag-and-drop, manajemen deadline, dan kolaborasi tim.",
      tags: ["TypeScript", "Next.js", "Tailwind CSS", "REST API"],
      link: "https://example.com",
      github: "https://github.com/muqtasidroziq",
      featured: false,
    },
    {
      title: "Community Event & Ticketing Portal",
      description: "Sistem registrasi kegiatan daring dan luring dengan generator e-ticket dan validasi QR Code.",
      tags: ["Next.js", "Tailwind CSS", "Node.js", "MySQL"],
      link: "https://example.com",
      github: "https://github.com/muqtasidroziq",
      featured: false,
    },
  ],
};
