export interface TechSkill {
  name: string;
  image: string;
  category: "frontend" | "backend" | "database" | "tools";
}

export const techSkills: TechSkill[] = [
  // Frontend & Mobile
  {
    name: "React.js",
    image: "/assets/skills/react.svg",
    category: "frontend",
  },
  {
    name: "Next.js",
    image: "/assets/skills/nextjs.svg",
    category: "frontend",
  },
  {
    name: "Flutter",
    image: "/assets/skills/flutter.svg",
    category: "frontend",
  },
  {
    name: "Dart",
    image: "/assets/skills/dart.svg",
    category: "frontend",
  },
  {
    name: "JavaScript",
    image: "/assets/skills/javascript.svg",
    category: "frontend",
  },
  {
    name: "Tailwind CSS",
    image: "/assets/skills/tailwind.svg",
    category: "frontend",
  },
  {
    name: "Bootstrap",
    image: "/assets/skills/bootstrap.svg",
    category: "frontend",
  },

  // Backend
  {
    name: "PHP",
    image: "/assets/skills/php.svg",
    category: "backend",
  },
  {
    name: "Laravel",
    image: "/assets/skills/laravel.svg",
    category: "backend",
  },
  {
    name: "Node.js",
    image: "/assets/skills/nodejs.svg",
    category: "backend",
  },
  {
    name: "Python",
    image: "/assets/skills/python.svg",
    category: "backend",
  },
  {
    name: "Flask",
    image: "/assets/skills/flask.svg",
    category: "backend",
  },

  // Database & Tools
  {
    name: "MySQL",
    image: "/assets/skills/mysql.svg",
    category: "database",
  },
  {
    name: "MongoDB",
    image: "/assets/skills/mongodb.svg",
    category: "database",
  },
  {
    name: "Git",
    image: "/assets/skills/git.svg",
    category: "tools",
  },
  {
    name: "Postman",
    image: "/assets/skills/postman.svg",
    category: "tools",
  },
  {
    name: "Ubuntu",
    image: "/assets/skills/ubuntu.svg",
    category: "tools",
  },
];
