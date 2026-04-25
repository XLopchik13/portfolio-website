"use client";

import { useAccordion } from "@/features/accordion/useAccordion";
import type { Project } from "@/lib/mdx";
import { ProjectCard } from "./ProjectCard";

interface ProjectListProps {
  projects: Project[];
}

export const ProjectList = ({ projects }: ProjectListProps) => {
  const { toggle, isOpen } = useAccordion();

  return (
    <div>
      {projects.map((project) => (
        <ProjectCard
          key={project.slug}
          project={project}
          isOpen={isOpen(project.slug)}
          onToggle={() => toggle(project.slug)}
        />
      ))}
    </div>
  );
};
