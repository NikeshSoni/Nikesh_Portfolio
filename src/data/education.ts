import type { Certification, EducationItem } from "@/types";

export const education: EducationItem[] = [
  { institution: "Mumbai University", degree: "Bachelor of Science in Computer Science", dates: "2021 – 2024" },
  { institution: "Sikkim Manipal University", degree: "Master of Computer Applications", dates: "2025 – 2027" },
];

// Add a `link` to a certificate only once you have its real credential URL.
export const certifications: Certification[] = [
  { name: "Full-Stack Web Development", issuer: "Udemy", date: "2024" },
  { name: "JavaScript Algorithms and Data Structures", issuer: "freeCodeCamp", date: "2024" },
  { name: "React Developer Certification", issuer: "Meta", date: "2025" },
];
