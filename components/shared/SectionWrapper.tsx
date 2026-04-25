import { cn } from "@/lib/cn";
import { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export const SectionWrapper = ({
  id,
  children,
  className,
}: SectionWrapperProps) => (
  <section id={id} className={cn("max-w-5xl mx-auto px-6 py-16", className)}>
    {children}
  </section>
);
