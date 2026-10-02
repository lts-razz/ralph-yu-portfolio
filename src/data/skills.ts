export type SkillIcon =
  | "javascript"
  | "typescript"
  | "astro"
  | "react"
  | "tailwindcss"
  | "shadcnui"
  | "heroui"
  | "nodedotjs"
  | "fastapi"
  | "supabase"
  | "postgresql"
  | "mysql"
  | "mongodb"
  | "git"
  | "github"
  | "vercel";

export interface Skill {
  name: string;
  url: string;
  color: string;
  icon: SkillIcon;
}

export interface SkillGroup {
  id: string;
  number: string;
  title: string;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    number: "01",
    title: "Languages",
    skills: [
      {
        name: "JavaScript",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        color: "#b7791f",
        icon: "javascript",
      },
      {
        name: "TypeScript",
        url: "https://www.typescriptlang.org/docs/",
        color: "#3178c6",
        icon: "typescript",
      },
    ],
  },
  {
    id: "frontend-web",
    number: "02",
    title: "Frontend / Web",
    skills: [
      {
        name: "Astro",
        url: "https://docs.astro.build/",
        color: "#bc52ee",
        icon: "astro",
      },
      {
        name: "React",
        url: "https://react.dev/",
        color: "#087ea4",
        icon: "react",
      },
      {
        name: "Tailwind CSS",
        url: "https://tailwindcss.com/docs",
        color: "#0891b2",
        icon: "tailwindcss",
      },
      {
        name: "shadcn/ui",
        url: "https://ui.shadcn.com/docs",
        color: "#64748b",
        icon: "shadcnui",
      },
      {
        name: "HeroUI",
        url: "https://www.heroui.com/docs/guide/introduction",
        color: "#7828c8",
        icon: "heroui",
      },
    ],
  },
  {
    id: "backend-data",
    number: "03",
    title: "Backend / Data",
    skills: [
      {
        name: "Node.js",
        url: "https://nodejs.org/en/docs",
        color: "#339933",
        icon: "nodedotjs",
      },
      {
        name: "FastAPI",
        url: "https://fastapi.tiangolo.com/",
        color: "#009688",
        icon: "fastapi",
      },
      {
        name: "Supabase",
        url: "https://supabase.com/docs",
        color: "#24865b",
        icon: "supabase",
      },
      {
        name: "PostgreSQL",
        url: "https://www.postgresql.org/docs/",
        color: "#336791",
        icon: "postgresql",
      },
      {
        name: "MySQL",
        url: "https://docs.oracle.com/cd/E17952_01/mysql-8.4-en/",
        color: "#4479a1",
        icon: "mysql",
      },
      {
        name: "MongoDB",
        url: "https://www.mongodb.com/docs/",
        color: "#2f7d32",
        icon: "mongodb",
      },
    ],
  },
  {
    id: "tools-deployment",
    number: "04",
    title: "Tools / Deployment",
    skills: [
      {
        name: "Git",
        url: "https://git-scm.com/doc",
        color: "#f05032",
        icon: "git",
      },
      {
        name: "GitHub",
        url: "https://docs.github.com/",
        color: "#6e7681",
        icon: "github",
      },
      {
        name: "Vercel",
        url: "https://vercel.com/docs",
        color: "#64748b",
        icon: "vercel",
      },
    ],
  },
];
