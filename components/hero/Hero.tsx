import { Button, SectionWrapper, Tag } from "@/components/shared";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";

export const Hero = () => (
  <SectionWrapper id="hero" className="pt-32 pb-16">
    <span className="text-5xl" role="img" aria-label="wave">
      ⛩️
    </span>

    <h1 className="mt-6 text-4xl sm:text-5xl font-bold text-text leading-tight tracking-tight">
      {SITE_CONFIG.name}
    </h1>

    <p className="mt-2 text-lg text-muted font-medium">{SITE_CONFIG.title}</p>

    <div className="mt-6 max-w-xl space-y-3 text-text leading-relaxed">
      <p>
        Placeholder bio paragraph one. Describe who you are, what you enjoy
        building, and what makes you different as a developer.
      </p>
      <p>
        Placeholder bio paragraph two. Mention your background, key
        technologies, or the types of problems you love to solve.
      </p>
      <p>
        Placeholder bio paragraph three. What are you currently working on or
        learning? What kind of projects or clients are you looking for?
      </p>
    </div>

    <div className="mt-8 flex flex-wrap gap-3">
      <Button href="#projects" variant="primary">
        View my work
      </Button>
      <Button
        href={SOCIAL_LINKS.github}
        variant="ghost"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </Button>
    </div>

    <div className="mt-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-surface border border-border">
      <span
        className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"
        aria-hidden="true"
      />
      <Tag className="bg-transparent border-none p-0 text-muted">
        Available for freelance &amp; full-time
      </Tag>
    </div>
  </SectionWrapper>
);
