import { cn } from "@/lib/cn";

interface TagProps {
	children: React.ReactNode;
	className?: string;
}

export const Tag = ({ children, className }: TagProps) => (
	<span
		className={cn(
			"font-mono text-xs px-2 py-0.5 rounded-sm",
			"bg-surface border border-border text-muted",
			className,
		)}
	>
		{children}
	</span>
);
