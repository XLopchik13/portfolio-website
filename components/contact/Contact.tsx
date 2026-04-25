import { SectionWrapper } from "@/components/shared";
import { ScrollReveal } from "@/features/scroll-reveal/ScrollReveal";
import { ContactForm } from "./ContactForm";
import { ContactLinks } from "./ContactLinks";

export const Contact = () => (
  <SectionWrapper id="contact">
    <ScrollReveal>
      <div className="flex items-center gap-4 mb-8">
        <p className="text-xs font-mono text-muted uppercase tracking-wider shrink-0">
          Contact
        </p>
        <div className="flex-1 h-px bg-border" aria-hidden="true" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-2xl font-semibold text-text leading-snug">
            Let&apos;s work together
          </h2>
          <p className="mt-3 text-muted leading-relaxed">
            Open to full-time roles and freelance projects. If you have
            something in mind, reach out — I respond within 24 hours.
          </p>
          <div className="mt-8">
            <ContactLinks />
          </div>
        </div>

        <ContactForm />
      </div>
    </ScrollReveal>
  </SectionWrapper>
);
