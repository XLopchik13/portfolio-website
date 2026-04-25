import type { AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	variant?: "primary" | "ghost";
	href: string;
}

export const Button = ({
	variant = "primary",
	href,
	children,
	className,
	...props
}: ButtonProps) => (
	<a
		href={href}
		className={cn(
			"inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-medium transition-opacity duration-150 hover:opacity-85",
			variant === "primary" && "bg-accent text-white",
			variant === "ghost" &&
				"border border-border text-text bg-transparent hover:bg-surface",
			className,
		)}
		{...props}
	>
		{children}
	</a>
);
