export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

export const SOCIAL_LINKS = {
  github: "https://github.com/placeholder",
  linkedin: "https://linkedin.com/in/placeholder",
  email: "placeholder@email.com",
} as const;

export const SITE_CONFIG = {
  name: "Your Name",
  title: "Full Stack Developer",
  description: "Full Stack Developer building clean, scalable web applications.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;
