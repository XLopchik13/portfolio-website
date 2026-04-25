"use client";

import { useActiveSection } from "@/features/active-nav/useActiveSection";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { NavLink } from "./NavLink";

const SECTION_IDS = NAV_LINKS.map((l) => l.href.replace("#", ""));

export const Nav = () => {
  const active = useActiveSection(SECTION_IDS);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <nav
        className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between"
        aria-label="Main navigation"
      >
        <a
          href="/"
          className="text-sm font-semibold text-text hover:opacity-70 transition-opacity duration-150"
        >
          {SITE_CONFIG.name}
        </a>

        <ul className="hidden sm:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <NavLink
                href={link.href}
                label={link.label}
                isActive={active === link.href.replace("#", "")}
              />
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="text-sm font-medium px-4 py-1.5 rounded-md bg-accent text-white hover:opacity-90 transition-opacity duration-150 focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          Get in touch
        </a>
      </nav>
    </header>
  );
};
