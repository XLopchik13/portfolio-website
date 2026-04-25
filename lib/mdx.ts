import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const PROJECTS_DIR = path.join(process.cwd(), "content/projects");

export interface ProjectFrontmatter {
  title: string;
  emoji: string;
  tagline: string;
  description: string;
  tech: string[];
  type: string;
  date: string;
  github: string;
  demo: string;
  featured: boolean;
}

export interface Project extends ProjectFrontmatter {
  slug: string;
  content: string;
}

export const getAllProjects = (): Project[] => {
  const files = fs.readdirSync(PROJECTS_DIR).filter((f) => f.endsWith(".mdx"));

  return files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(PROJECTS_DIR, filename), "utf8");
      const { data, content } = matter(raw);
      return { slug, content, ...(data as ProjectFrontmatter) };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getProjectBySlug = (slug: string): Project | undefined => {
  const filepath = path.join(PROJECTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filepath)) return undefined;

  const raw = fs.readFileSync(filepath, "utf8");
  const { data, content } = matter(raw);
  return { slug, content, ...(data as ProjectFrontmatter) };
};
