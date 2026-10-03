import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "society-management-system",
    name: "Society Management System",
    description:
      "A full-stack society management platform for managing residents, complaints, maintenance, visitors, and announcements.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT"],
    keyFeatures: [
      "Role-based authentication",
      "Resident management",
      "Complaint management",
      "Maintenance tracking",
      "Visitor management",
      "Admin dashboard",
      "Announcements",
    ],
    github: "https://github.com/NikeshSoni/Mantance-App",
    liveDemo: "https://github.com/NikeshSoni/Mantance-App",
    thumbnail: "/images/projects/society-management.png",
  },
  {
    slug: "google-docs-clone",
    name: "Google Docs Clone",
    description:
      "A collaborative document editor inspired by Google Docs with rich-text editing and real-time collaboration.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Convex", "Clerk", "Tiptap"],
    keyFeatures: [
      "Real-time document editing",
      "User authentication",
      "Rich-text editor",
      "Document sharing",
      "Collaborative editing",
      "Responsive workspace",
    ],
    github: "https://github.com/NikeshSoni/google_docs",
    liveDemo: "https://docs-dev-psi.vercel.app/",
    thumbnail: "/images/projects/google-docs.png",
  },
  {
    slug: "crypto-trading-dashboard",
    name: "Crypto Trading Dashboard",
    description:
      "Under Development:  A modern cryptocurrency trading dashboard for monitoring market prices, portfolios, trades, and analytics.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Node.js", "Express.js", "WebSocket"],
    keyFeatures: [
      "Live crypto prices",
      "Trading dashboard",
      "Portfolio tracking",
      "Market charts",
      "Trade history",
      "Watchlist",
      "Dark mode",
    ],
    github: "https://www.linkedin.com/in/nikesh-rajbhar-13a20824b/",
    liveDemo: "https://x.com/Nikesh12111615",
    thumbnail: "/images/projects/crypto-dashboard.png",
  },
  {
    slug: "ai-career-auditor",
    name: "AI Career Auditor",
    description:
      "Under Development:  An AI-powered resume analysis platform that evaluates resumes and provides ATS-focused suggestions.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI API", "Node.js", "PDF Parser"],
    keyFeatures: [
      "Resume PDF upload",
      "AI resume analysis",
      "ATS score",
      "Skill analysis",
      "Improvement suggestions",
      "Job description matching",
    ],
    github: "https://github.com/NikeshSoni",
    liveDemo: "https://x.com/Nikesh12111615",
    thumbnail: "/images/projects/ai-career-auditor.png",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
