export interface Project {
  title: string;
  description: string;
  image?: string;
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

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface Organization {
  role: string;
  name: string;
  period: string;
  description?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Certificate {
  title: string;
  issuer: string;
  image: string;
  category?: string;
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
  education: Education[];
  organizations: Organization[];
  certificates: Certificate[];
  projects: Project[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Muhammad Muqtasid Roziq",
    role: "Full-Stack Developer & Software Engineer",
    bio: "Mahasiswa Teknik Informatika yang berfokus pada Fullstack Web Development dan Mobile App Development, berpengalaman membangun aplikasi modern yang scalable, efisien, dan berpusat pada pengguna.",
    about: [
      "Saya adalah mahasiswa Teknik Informatika yang berfokus mendalam pada Fullstack Web Development dan Mobile App Development.",
      "Berpengalaman merancang serta membangun aplikasi web dan mobile end-to-end melalui berbagai proyek nyata dan kolaborasi tim. Keahlian teknis saya mencakup arsitektur antarmuka modern, perancangan RESTful API, manajemen database terstruktur, sistem autentikasi yang aman, hingga integrasi sistem secara menyeluruh dengan teknologi utama seperti Laravel, Next.js, dan Flutter.",
      "Terbiasa bekerja secara mandiri maupun bersinergi dalam tim lintas fungsi, dengan komitmen kuat pada pemecahan masalah (problem solving), komunikasi efektif, serta kecepatan beradaptasi dengan teknologi baru."
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
  education: [
    {
      degree: "Sarjana Terapan Teknik Informatika",
      institution: "Universitas Harkat Negeri",
      period: "September 2023 - Sekarang",
      description: "Mendalami rekayasa perangkat lunak dengan fokus pada pengembangan sistem web full-stack, mobile computing, manajemen basis data, dan implementasi algoritma modern.",
    },
  ],
  organizations: [
    {
      role: "Staff Divisi Kominfo",
      name: "Hima Prodi Teknik Informatika",
      period: "Februari 2025 - Januari 2026",
      description: "Bertanggung jawab atas pengelolaan media komunikasi digital, produksi konten edukasi teknologi, dan publikasi informasi kegiatan program studi.",
    },
    {
      role: "IT Support",
      name: "INVOFEST (Informatics Festival)",
      period: "November 2025",
      description: "Mengawal kelancaran infrastruktur teknis, kestabilan jaringan, dan troubleshooting sistem pendukung selama berlangsungnya festival teknologi.",
    },
  ],
  certificates: [
    {
      title: "Belajar Dasar Pemrograman Web",
      issuer: "Dicoding Academy",
      image: "/assets/sertifikat/webdasar.webp",
      category: "Web Development",
    },
    {
      title: "Belajar Dasar Pemrograman JavaScript",
      issuer: "Dicoding Academy",
      image: "/assets/sertifikat/javascripts.webp",
      category: "Programming Language",
    },
    {
      title: "Belajar Membuat Front-End Web untuk Pemula",
      issuer: "Dicoding Academy",
      image: "/assets/sertifikat/front-end.webp",
      category: "Frontend Development",
    },
  ],
  projects: [
    {
      title: "My Bouquet Tegal Website",
      description: "Website Profile Untuk UMKM My Bouquet Tegal yang menampilkan katalog produk, informasi layanan, dan integrasi pemesanan online.",
      image: "/assets/projects/mybouquet.webp",
      tags: ["Next.js", "Tailwind CSS", "SQLite", "Node.js", "Claudfare"],
      link: "https://mybouquettegal.biz.id",
      github: "https://github.com/MuqtasidRoziq/MyBouquetTegal.git",
    },
    {
      title: "CMS mysch.id",
      description: "Content Management System (CMS) terpusat untuk mengelola, menerbitkan, dan mendistribusikan semua konten ke berbagai website satelit sekolah.",
      image: "/assets/projects/porto-cms.webp",
      tags: ["PHP", "Bootstrap", "MySQL", "Node.js"],
      link: undefined,
      github: "https://github.com/muqtasidroziq",
    },
    {
      title: "Landing Page absensisiswa.co.id",
      description: "Website satelit terintegrasi dari CMS mysch.id yang berfungsi sebagai platform landing page dan informasi presensi siswa digital.",
      image: "/assets/projects/websatelite.webp",
      tags: ["PHP", "Bootstrap", "MySQL", "Node.js"],
      link: "https://absensisiswa.co.id",
      github: "https://github.com/muqtasidroziq",
    },
    {
      title: "Landing Page websitesekolah.co.id",
      description: "Website satelit terintegrasi dari CMS mysch.id yang berfungsi sebagai platform landing page dan informasi presensi siswa digital.",
      image: "/assets/projects/websitesekolah.webp",
      tags: ["PHP", "Bootstrap", "MySQL", "Node.js"],
      link: "https://websitesekolah.co.id",
      github: "https://github.com/muqtasidroziq",
    },
    {
      title: "Personal Portfolio & Showcase",
      description: "Website portofolio interaktif dengan animasi pengetikan real-time, responsive design, serta dark/light mode modern.",
      image: "/assets/projects/porto.webp",
      tags: ["Next.js", "React.js", "TypeScript", "Tailwind CSS"],
      link: "https://muqtasidroziq.my.id",
      github: "https://github.com/muqtasidroziq/portofolio",
    },
    {
      title: "Teraparent (Mobile App)",
      description: "Aplikasi mobile identifikasi & monitoring anak berkebutuhan khusus (ADHD, speech delay, autisme) lengkap dengan rekomendasi terapis dan psikiater.",
      image: "/assets/projects/teraparent.webp",
      tags: ["Flutter", "PostgreSQL", "Express.js", "MongoDB"],
      link: "https://play.google.com/store/apps/details?id=com.hn.teraprent&pcampaignid=web_share",
      github: "https://github.com/MuqtasidRoziq/TeraparentApp",
    },
    {
      title: "Dietkuy",
      description: "Aplikasi mobile rekomendasi pola diet cerdas berbasis klasifikasi postur tubuh menggunakan visi komputer (MediaPipe).",
      image: "/assets/projects/mobile-app.svg",
      tags: ["Flutter", "Flask", "MySQL", "MediaPipe"],
      link: undefined,
      github: "https://github.com/MuqtasidRoziq/dietapps-mobile",
    },
    {
      title: "Web E-Commerce Phone",
      description: "Website e-commerce katalog dan transaksi penjualan berbagai jenis handphone yang dibangun untuk proyek tugas akhir semester 4.",
      image: "/assets/projects/ticketing-event.svg",
      tags: ["Laravel", "MySQL", "Node.js"],
      link: undefined,
      github: "https://github.com/MuqtasidRoziq/e-commerce-el.git",
    },
    {
      title: "Point Of Sale (POS) UMKM Crepes",
      description: "Aplikasi kasir desktop untuk operasional usaha mikro UMKM Crepes yang memudahkan pencatatan transaksi dan pelaporan penjualan.",
      image: "/assets/projects/ticketing-event.svg",
      tags: ["Java", "NetBeans"],
      link: undefined,
      github: "https://github.com/MuqtasidRoziq/kasir-crepes",
    },
  ],
};
