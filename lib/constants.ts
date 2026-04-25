export const NAV_LINKS = [
	{ label: "Home", href: "#" },
	{ label: "About", href: "#about" },
	{ label: "Projects", href: "#projects" },
	{ label: "Contact", href: "#contact" },
] as const;

export const SOCIAL_LINKS = {
	github: "https://github.com/XLopchik13",
	linkedin: "https://www.linkedin.com/in/nikita-petrov-it",
	email: "nikita.petrov.it@gmail.com",
} as const;

export const SITE_CONFIG = {
	name: "Nikita Petrov",
	title: "Full Stack Developer",
	description:
		"Full Stack Developer building clean, scalable web applications.",
	url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;
