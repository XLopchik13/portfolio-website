"use client";

import { useAccordion } from "@/features/accordion/useAccordion";
import { ScrollReveal } from "@/features/scroll-reveal/ScrollReveal";
import type { Project } from "@/lib/mdx";
import { ProjectCard } from "./ProjectCard";

interface ProjectListProps {
  projects: Project[];
}

export const ProjectList = ({ projects }: ProjectListProps) => {
  const { toggle, isOpen } = useAccordion();

  return (
    <div className="space-y-3">
      {projects.map((project, i) => (
        <ScrollReveal key={project.slug} delay={i * 75}>
          <ProjectCard
            project={project}
            isOpen={isOpen(project.slug)}
            onToggle={() => toggle(project.slug)}
          />
        </ScrollReveal>
      ))}
    </div>
  );
};
