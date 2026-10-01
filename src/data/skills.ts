export interface SkillGroup {
  id: string;
  title: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "C++", "Java"],
  },
  {
    id: "frontend",
    title: "Frontend",
    skills: ["React", "Vite", "Tailwind CSS", "shadcn/ui", "HeroUI"],
  },
  {
    id: "backend-data",
    title: "Backend and Data",
    skills: ["Node.js", "Express.js", "FastAPI", "Supabase", "PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    id: "tools-deployment",
    title: "Tools and Deployment",
    skills: ["Git", "GitHub", "GitHub Actions", "Vercel"],
  },
];
