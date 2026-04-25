import { SectionWrapper } from "@/components/shared";
import { ExperienceTable } from "./ExperienceTable";
import { PropertiesPanel } from "./PropertiesPanel";

export const About = () => (
  <SectionWrapper id="about">
    <div className="flex items-center gap-4 mb-8">
      <p className="text-xs font-mono text-muted uppercase tracking-wider shrink-0">
        About
      </p>
      <div className="flex-1 h-px bg-border" aria-hidden="true" />
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
      <div>
        <h2 className="text-2xl font-semibold text-text leading-snug">
          Background
        </h2>

        <div className="mt-6 space-y-4 text-text leading-relaxed">
          <p>
            Placeholder paragraph about your background — where you started,
            what drew you to software development, and how you've grown.
          </p>
          <p>
            Placeholder paragraph about your technical approach — how you think
            about architecture, code quality, and collaboration.
          </p>
        </div>

        <ExperienceTable />
      </div>

      <aside>
        <PropertiesPanel />
      </aside>
    </div>
  </SectionWrapper>
);
