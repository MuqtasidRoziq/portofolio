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
    bio: "Pengembang perangkat lunak yang berfokus pada pembangunan aplikasi web modern, performan, responsif, dan mudah digunakan.",
    about: [
      "Halo! Saya Muqtasid Roziq, seorang pengembang perangkat lunak yang antusias dalam merancang dan mengembangkan solusi digital dari konsep hingga deployment.",
      "Saya memiliki ketertarikan kuat pada ekosistem web modern seperti React, Next.js, TypeScript, serta arsitektur backend yang andal. Saya selalu berkomitmen untuk menulis kode yang bersih, mudah dipelihara, dan berpusat pada pengalaman pengguna.",
      "Selain ngoding, saya aktif berkolaborasi dalam organisasi teknologi, berbagi pengetahuan dengan komunitas, dan terus mengeksplorasi tren teknologi terbaru."
    ],
    location: "Indonesia",
    email: "muqtasidroziq@example.com",
    github: "https://github.com/muqtasidroziq",
    linkedin: "https://linkedin.com/in/muqtasidroziq",
    instagram: "https://instagram.com/muqtasidroziq",
    availableForHire: true,
  },
  skills: [
    {
      category: "Frontend",
      skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3", "Redux / Zustand"],
    },
    {
      category: "Backend & Database",
      skills: ["Node.js", "Express.js", "PostgreSQL", "MySQL", "Prisma ORM", "RESTful API"],
    },
    {
      category: "Tools & DevOps",
      skills: ["Git & GitHub", "Docker", "Linux / Shell", "Postman", "Vercel", "Figma"],
    },
  ],
  experiences: [
    {
      role: "Full-Stack Web Developer",
      company: "Tech Solutions Inc.",
      period: "2024 - Sekarang",
      location: "Remote / Hybrid",
      description: [
        "Mengembangkan dan memelihara fitur web interaktif menggunakan Next.js, TypeScript, dan Tailwind CSS.",
        "Mengoptimalkan performa halaman web sehingga meningkatkan skor Core Web Vitals hingga 25%.",
        "Merancang integrasi API backend dan manajemen state aplikasi yang efisien dan modular."
      ],
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    },
    {
      role: "Frontend Developer Intern",
      company: "Digital Creative Studio",
      period: "2023 - 2024",
      location: "Indonesia",
      description: [
        "Membangun antarmuka landing page responsif berdasarkan wireframe Figma.",
        "Bekerja sama dengan tim UI/UX dan backend developer untuk memastikan implementasi desain yang presisi.",
        "Menerapkan best practices clean code dan version control menggunakan Git."
      ],
      technologies: ["React.js", "JavaScript", "Tailwind CSS", "Git"],
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
