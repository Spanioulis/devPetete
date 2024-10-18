import Link from "next/link";

import { Book } from "lucide-react";
import MusicIcon from "@/components/icons/MusicIcon";

export default function Header() {
	return (
		<header className="flex justify-between items-center w-full p-4 bg-background">
			<Link href="/">
				<h1 className="text-5xl font-bold flex items-center gap-2 text-crimson">
					<Book size={48} className="inline" /> <span>devPetete</span>
				</h1>
				<p className="text-2xl">Un sinfín devRecursos...</p>
			</Link>

			{/* Crear componente Navbar.tsx en components/layout, junto con el Footer.tsx */}
			<nav>
				<ul className="flex gap-4">
					<Link href="/performance" className="hover:text-crimson">
						Performance
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
	);
}
