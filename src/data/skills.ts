import type { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    title: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS", "Shadcn UI", "Material UI"],
  },
  {
    id: "backend",
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "Middleware", "API Integration"],
  },
  {
    id: "database",
    title: "Database",
    skills: ["MongoDB", "Mongoose", "PostgreSQL", "Supabase", "Convex"],
  },
  {
    id: "tools",
    title: "Tools",
    skills: ["Git", "GitHub", "Postman", "VS Code", "Figma", "Vercel", "Docker"],
  },
  {
    id: "other",
    title: "Other",
    skills: ["Redux Toolkit", "OpenAI API", "WebSockets", "Responsive Design", "Authentication", "Cloud Deployment"],
  },
];
