import { SectionWrapper } from "@/components/shared";
import { ScrollReveal } from "@/features/scroll-reveal/ScrollReveal";
import { getAllProjects } from "@/lib/mdx";
import { ProjectList } from "./ProjectList";

export const Projects = () => {
  const projects = getAllProjects();

  return (
    <SectionWrapper id="projects">
      <ScrollReveal>
        <div className="flex items-center gap-4 mb-8">
          <p className="text-xs font-mono text-muted uppercase tracking-wider shrink-0">
            Projects
          </p>
          <div className="flex-1 h-px bg-border" aria-hidden="true" />
        </div>
        <h2 className="text-2xl font-semibold text-text mb-8">Selected Work</h2>
      </ScrollReveal>
      <ProjectList projects={projects} />
    </SectionWrapper>
  );
};
