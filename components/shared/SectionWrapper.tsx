import { cn } from "@/lib/cn";

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export const SectionWrapper = ({
  id,
  children,
  className,
}: SectionWrapperProps) => (
  <section id={id} className={cn("max-w-5xl mx-auto px-6 py-24", className)}>
    {children}
  </section>
);
