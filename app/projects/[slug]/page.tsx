import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Tag } from "@/components/shared";
import { getAllProjects, getProjectBySlug } from "@/lib/mdx";

interface Props {
  params: Promise<{ slug: string }>;
}

export const generateStaticParams = () =>
  getAllProjects().map((p) => ({ slug: p.slug }));

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
  };
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <a
        href="/#projects"
        className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-text transition-colors duration-(--duration-fast) mb-10"
      >
        <svg
          className="w-3.5 h-3.5"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path
            d="M10 12L6 8l4-4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Back
      </a>

      <header className="mb-10">
        <span className="text-4xl" role="img" aria-label={project.title}>
          {project.emoji}
        </span>
        <h1 className="mt-4 text-3xl font-semibold text-text leading-tight">
          {project.title}
        </h1>
        <p className="mt-2 text-muted leading-relaxed">{project.tagline}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        {(project.github || project.demo) && (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border text-sm text-accent hover:bg-surface transition-colors duration-(--duration-fast)"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                Source Code
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border text-sm text-accent hover:bg-surface transition-colors duration-(--duration-fast)"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path
                    d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Live Demo
              </a>
            )}
          </div>
        )}

        <div className="mt-10 border-b border-border" aria-hidden="true" />
      </header>

      <article className="mdx-content">
        <MDXRemote source={project.content} />
      </article>
    </main>
  );
}
