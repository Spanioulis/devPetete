import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Header from "@/components/common/Header";
import Footer from "./components/layout/Footer";

const geistSans = localFont({
	src: "./assets/fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./assets/fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "devPetete",
	description: "El libro devPetete, un sinfín devRecursos...",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]`}
			>
				<Header />

				<aside className="p-4">
					<h2>Aside</h2>
				</aside>

				{children}

				<Footer />
			</body>
		</html>
	);
}
