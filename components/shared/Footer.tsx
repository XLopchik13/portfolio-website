import { SITE_CONFIG } from "@/lib/constants";

export const Footer = () => (
  <footer className="border-t border-border">
    <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
      <p className="text-xs text-muted">
        © {new Date().getFullYear()} {SITE_CONFIG.name}
      </p>
      <a
        href="#hero"
        className="text-xs text-muted hover:text-text transition-colors duration-(--duration-fast)"
      >
        Back to top ↑
      </a>
    </div>
  </footer>
);
