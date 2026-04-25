import { SOCIAL_LINKS } from "@/lib/constants";

const LINKS = [
  {
    label: "Email",
    href: `mailto:${SOCIAL_LINKS.email}`,
    value: SOCIAL_LINKS.email,
    emoji: "✉️",
  },
  {
    label: "GitHub",
    href: SOCIAL_LINKS.github,
    value: SOCIAL_LINKS.github.replace("https://", ""),
    emoji: "🐙",
  },
  {
    label: "LinkedIn",
    href: SOCIAL_LINKS.linkedin,
    value: SOCIAL_LINKS.linkedin.replace("https://www.", ""),
    emoji: "💼",
  },
] as const;

export const ContactLinks = () => (
  <div className="space-y-3">
    {LINKS.map(({ label, href, value, emoji }) => (
      <a
        key={label}
        href={href}
        target={href.startsWith("mailto") ? undefined : "_blank"}
        rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
        className="flex items-center gap-3 p-3 rounded-md hover:bg-surface transition-colors duration-(--duration-fast) group"
      >
        <span className="text-lg shrink-0" aria-hidden="true">
          {emoji}
        </span>
        <div className="min-w-0">
          <p className="text-xs font-mono text-muted uppercase tracking-wider">
            {label}
          </p>
          <p className="text-sm text-text group-hover:text-accent transition-colors duration-(--duration-fast) truncate">
            {value}
          </p>
        </div>
      </a>
    ))}
  </div>
);
