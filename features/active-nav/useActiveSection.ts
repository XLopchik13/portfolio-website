"use client";

import { useEffect, useState } from "react";

const resolveId = (id: string) => (id === "" ? "hero" : id);

export const useActiveSection = (sectionIds: string[]): string => {
  const [active, setActive] = useState<string>(sectionIds[0] ?? "");

  useEffect(() => {
    const check = () => {
      const { scrollY, innerHeight } = window;
      const maxScroll = document.documentElement.scrollHeight - innerHeight;
      const cutoff = scrollY + 64;

      let current = sectionIds[0] ?? "";
      for (const id of sectionIds) {
        const el = document.getElementById(resolveId(id));
        if (!el) continue;

        if (el.offsetTop <= cutoff) {
          current = id;
        } else if (el.offsetTop > maxScroll + 64 && scrollY >= maxScroll - 50) {
          current = id;
        }
      }
      setActive(current);
    };

    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, [sectionIds]);

  return active;
};
