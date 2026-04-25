import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
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
    <main className="max-w-3xl mx-auto px-6 py-24">
      <div className="mb-12">
        <span className="text-4xl">{project.emoji}</span>
        <h1 className="mt-4 text-3xl font-semibold text-text">
          {project.title}
        </h1>
        <p className="mt-2 text-muted">{project.tagline}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs px-2 py-1 rounded-sm bg-surface border border-border text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <article className="prose prose-neutral max-w-none">
        <MDXRemote source={project.content} />
      </article>
    </main>
  );
}
