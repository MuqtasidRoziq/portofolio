import React from "react";
import Image from "next/image";

interface TechIconProps {
  name: string;
  className?: string;
  width?: number;
  height?: number;
}

const ICON_MAP: Record<string, string> = {
  php: "/assets/skills/php.svg",
  laravel: "/assets/skills/laravel.svg",
  javascript: "/assets/skills/javascript.svg",
  javascripts: "/assets/skills/javascript.svg",
  js: "/assets/skills/javascript.svg",
  nodejs: "/assets/skills/nodejs.svg",
  node: "/assets/skills/nodejs.svg",
  react: "/assets/skills/react.svg",
  reactjs: "/assets/skills/react.svg",
  nextjs: "/assets/skills/nextjs.svg",
  next: "/assets/skills/nextjs.svg",
  flutter: "/assets/skills/flutter.svg",
  dart: "/assets/skills/dart.svg",
  python: "/assets/skills/python.svg",
  flask: "/assets/skills/flask.svg",
  mysql: "/assets/skills/mysql.svg",
  git: "/assets/skills/git.svg",
  mongodb: "/assets/skills/mongodb.svg",
  mongo: "/assets/skills/mongodb.svg",
  ubuntu: "/assets/skills/ubuntu.svg",
  linux: "/assets/skills/ubuntu.svg",
  postman: "/assets/skills/postman.svg",
  tailwind: "/assets/skills/tailwind.svg",
  tailwindcss: "/assets/skills/tailwind.svg",
  taildwind: "/assets/skills/tailwind.svg",
  bootstrap: "/assets/skills/bootstrap.svg",
  bootstraps: "/assets/skills/bootstrap.svg",
  postgresql: "/assets/skills/postgresql.svg",
  posgresql: "/assets/skills/postgresql.svg",
  postgres: "/assets/skills/postgresql.svg",
  express: "/assets/skills/express.svg",
  expressjs: "/assets/skills/express.svg",
  java: "/assets/skills/java.svg",
  netbeans: "/globe.svg",
  mediapipe: "/globe.svg",
  seo: "/globe.svg",
  seooptimization: "/globe.svg",
};

export function TechIcon({
  name,
  className = "w-5 h-5",
  width = 24,
  height = 24,
}: TechIconProps) {
  const key = name.toLowerCase().replace(/[\s.-]/g, "");
  const src = ICON_MAP[key] || "/assets/skills/git.svg";

  return (
    <Image
      src={src}
      alt={`${name} icon`}
      width={width}
      height={height}
      className={`object-contain ${className}`}
      loading="lazy"
    />
  );
}
