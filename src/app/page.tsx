import Link from "next/link";
import MusicIcon from "@/components/icons/MusicIcon";
import { Book } from "lucide-react";

export default function Home() {
	return (
		<main className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-10 font-[family-name:var(--font-geist-sans)]">
			<header className="flex justify-between items-center w-full">
				<div>
					<h1 className="text-5xl font-bold flex items-center gap-2">
						<Book size={48} className="inline text-dodgerBlue" />{" "}
						<span className="text-crimson">devPetete</span>
					</h1>
					<p className="text-2xl">Un sinfín devRecursos...</p>
				</div>

				<nav>
					<ul className="flex gap-4">
						<Link href="/" className="hover:text-crimson">
							Home
						</Link>
						<Link href="/" className="hover:text-crimson">
							Animaciones
						</Link>
						<Link
							href="https://musicforprogramming.net/latest/"
							target="_blank"
							className="hover:text-crimson"
						>
							<MusicIcon size={24} className="text-crimson inline mx-2" />
							musicforprogramming.net
						</Link>
					</ul>
				</nav>
			</header>

			<section>
				<h2 className="text-2xl font-bold">¿Qué es esto?</h2>
				<p className="text-xl">
					Este es un proyecto de aprendizaje de React, Next.js y Tailwind CSS.
				</p>
			</section>

			<footer>
				<h3>Footer</h3>
			</footer>
		</main>
	);
}
