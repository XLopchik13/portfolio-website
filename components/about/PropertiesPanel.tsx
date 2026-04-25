import { Tag } from "@/components/shared";

const PROPERTIES = [
  { emoji: "📍", label: "Location", values: ["Warsaw, Poland"] },
  { emoji: "🎯", label: "Focus", values: ["Full Stack", "API Design"] },
  {
    emoji: "⚡",
    label: "Stack",
    values: ["Python", "FastAPI", "TypeScript", "React", "PostgreSQL"],
  },
  { emoji: "🌐", label: "Languages", values: ["English", "Polish", "Russian"] },
  { emoji: "🎓", label: "Education", values: ["HSE University"] },
] as const;

export const PropertiesPanel = () => (
  <div className="rounded-lg border border-border bg-surface p-5 space-y-3">
    {PROPERTIES.map(({ emoji, label, values }) => (
      <div key={label} className="flex items-start gap-3">
        <div className="flex items-center gap-2 w-32 shrink-0 text-sm text-muted pt-0.5">
          <span aria-hidden="true">{emoji}</span>
          <span>{label}</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {values.map((v) => (
            <Tag key={v}>{v}</Tag>
          ))}
        </div>
      </div>
    ))}
  </div>
);
