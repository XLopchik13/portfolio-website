import { About } from "@/components/about";
import { Hero } from "@/components/hero";
import { Nav } from "@/components/nav";
import { Projects } from "@/components/projects";

export default function Home() {
	return (
		<>
			<Nav />
			<main>
				<Hero />
				<About />
				<Projects />
				{/* Contact */}
			</main>
		</>
	);
}
