export type SocialPlatform = "github" | "linkedin" | "twitter";

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  name: string;
  description: string;
  techStack: string[];
  keyFeatures: string[];
  github: string;
  liveDemo: string;
  thumbnail: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  skills: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  dates: string;
  responsibilities: string[];
  achievements: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  dates: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  /** Only set when a real credential URL exists. */
  link?: string;
}

export type BlogBlock =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "code"; language: string; code: string };

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  /** ISO date, e.g. 2026-08-12 */
  date: string;
  category: string;
  readTime: string;
  content: BlogBlock[];
}

export interface UsesGroup {
  title: string;
  items: string[];
}
