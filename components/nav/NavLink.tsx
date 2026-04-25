"use client";

import { cn } from "@/lib/cn";

interface NavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
}

export const NavLink = ({ href, label, isActive }: NavLinkProps) => (
  <a
    href={href}
    className={cn(
      "text-sm transition-colors duration-150 hover:text-text",
      isActive ? "text-text font-medium" : "text-muted",
    )}
  >
    {label}
  </a>
);
