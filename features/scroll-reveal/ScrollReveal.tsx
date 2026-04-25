"use client";

import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { useScrollReveal } from "./useScrollReveal";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export const ScrollReveal = ({
  children,
  delay,
  className,
}: ScrollRevealProps) => {
  const ref = useScrollReveal();

  const style: CSSProperties | undefined = delay
    ? { transitionDelay: `${delay}ms` }
    : undefined;

  return (
    <div
      ref={ref}
      data-scroll-reveal=""
      className={cn(className)}
      style={style}
    >
      {children}
    </div>
  );
};
