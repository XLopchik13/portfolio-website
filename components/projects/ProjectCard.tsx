"use client";

import { Tag } from "@/components/shared";
import { cn } from "@/lib/cn";
import type { Project } from "@/lib/mdx";

interface ProjectCardProps {
	project: Project;
	isOpen: boolean;
	onToggle: () => void;
}

export const ProjectCard = ({
	project,
	isOpen,
	onToggle,
}: ProjectCardProps) => {
	const contentId = `project-content-${project.slug}`;
	const headerId = `project-header-${project.slug}`;

	return (
		<article
			className={cn(
				"rounded-lg border border-border transition-colors duration-(--duration-fast)",
				!isOpen && "hover:border-text/20 hover:bg-surface/60",
			)}
		>
			<button
				id={headerId}
				aria-expanded={isOpen}
				aria-controls={contentId}
				onClick={onToggle}
				onKeyDown={(e) => {
					if (e.key === "Enter" || e.key === " ") {
						e.preventDefault();
						onToggle();
					}
				}}
				className={cn(
					"w-full flex items-center gap-4 px-5 py-4 text-left cursor-pointer transition-colors duration-(--duration-fast)",
					isOpen && "hover:bg-surface/50 rounded-t-lg",
				)}
				type="button"
			>
				<svg
					className={cn(
						"w-3 h-3 shrink-0 text-muted transition-transform duration-(--duration-fast)",
						isOpen && "rotate-90",
					)}
					viewBox="0 0 12 12"
					fill="none"
					aria-hidden="true"
				>
					<path
						d="M4 2l4 4-4 4"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>

				<span
					className="text-2xl shrink-0"
					role="img"
					aria-label={project.title}
				>
					{project.emoji}
				</span>

				<div className="flex-1 min-w-0">
					<div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
						<h3 className="font-semibold text-text">{project.title}</h3>
						<span className="text-sm text-muted">{project.tagline}</span>
					</div>
				</div>

				<div className="hidden sm:flex flex-wrap gap-1.5 ml-4 shrink-0">
					{project.tech.slice(0, 3).map((tag) => (
						<Tag key={tag}>{tag}</Tag>
					))}
					{project.tech.length > 3 && <Tag>+{project.tech.length - 3}</Tag>}
				</div>
			</button>

			<div
				id={contentId}
				role="region"
				aria-labelledby={headerId}
				hidden={!isOpen}
			>
				<div className="border-t border-border" aria-hidden="true" />

				<div className="grid grid-cols-1 sm:grid-cols-[1fr_240px] gap-8 px-5 py-5">
					<div>
						<p className="text-text leading-relaxed">{project.description}</p>

						<table className="mt-6 w-full text-sm border-collapse">
							<tbody>
								<tr className="border-b border-border">
									<td className="py-2 pr-6 text-muted font-medium w-16">
										Stack
									</td>
									<td className="py-2 text-text">{project.tech.join(" · ")}</td>
								</tr>
								<tr>
									<td className="py-2 pr-6 text-muted font-medium">Type</td>
									<td className="py-2 text-text">{project.type}</td>
								</tr>
							</tbody>
						</table>

						<div className="mt-5 flex gap-3">
							{project.github && (
								<a
									href={project.github}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border text-sm text-accent hover:bg-surface transition-colors duration-(--duration-fast)"
								>
									<svg
										className="w-4 h-4"
										viewBox="0 0 24 24"
										fill="currentColor"
										aria-hidden="true"
									>
										<path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
									</svg>
									Source Code
								</a>
							)}
							{project.demo && (
								<a
									href={project.demo}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border text-sm text-accent hover:bg-surface transition-colors duration-(--duration-fast)"
								>
									<svg
										className="w-4 h-4"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										aria-hidden="true"
									>
										<path
											d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
									Live Demo
								</a>
							)}
						</div>
					</div>

					<div
						className="rounded-md bg-surface border border-border flex items-center justify-center h-36 sm:h-full min-h-32"
						aria-label="Project screenshot placeholder"
					>
						<p className="font-mono text-xs text-muted text-center px-4">
							project screenshot
						</p>
					</div>
				</div>
			</div>
		</article>
	);
};
