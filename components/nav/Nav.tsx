"use client";

import { useState } from "react";
import { useActiveSection } from "@/features/active-nav/useActiveSection";
import { cn } from "@/lib/cn";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { NavLink } from "./NavLink";

const SECTION_IDS = NAV_LINKS.map((l) => l.href.replace("#", ""));

export const Nav = () => {
  const active = useActiveSection(SECTION_IDS);
  const [menuOpen, setMenuOpen] = useState(false);

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
          className="hidden sm:block text-sm font-medium px-4 py-1.5 rounded-md bg-accent text-white hover:opacity-90 transition-opacity duration-150 focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          Get in touch
        </a>

        <button
          type="button"
          className="sm:hidden p-1.5 -mr-1.5 text-muted hover:text-text transition-colors duration-(--duration-fast)"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? (
            <svg
              className="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
      </nav>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="sm:hidden border-t border-border bg-background/95 backdrop-blur-sm"
        >
          <ul className="max-w-5xl mx-auto px-6 py-2 flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    "block py-2.5 text-sm transition-colors duration-(--duration-fast)",
                    active === link.href.replace("#", "")
                      ? "text-text font-medium"
                      : "text-muted hover:text-text",
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};
