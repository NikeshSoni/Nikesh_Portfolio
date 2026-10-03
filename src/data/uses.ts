import type { UsesGroup } from "@/types";

// Operating system intentionally left out until confirmed (Windows 11 vs macOS).
export const usesGroups: UsesGroup[] = [
  { title: "Hardware", items: ["MacBook Pro 14-inch", "Apple M3 Pro", "18 GB RAM", "512 GB SSD"] },
  { title: "Editor", items: ["Visual Studio Code"] },
  { title: "Tools", items: ["GitHub", "Postman", "Figma", "Docker", "MongoDB Compass", "Google Chrome"] },
  {
    title: "Tech stack",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "PostgreSQL"],
  },
];
