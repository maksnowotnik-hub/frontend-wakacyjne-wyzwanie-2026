import Link from "next/link";
import "./globals.css";

export default function RootLayout({
	children,
	stats,
}: Readonly<{
	children: React.ReactNode;
	stats: React.ReactNode;
}>) {
	return (
		<html lang="pl">
			<body className="bg-zinc-950 text-zinc-100 min-h-screen flex flex-col font-sans">
				<nav className="p-4 bg-zinc-900 border-b border-zinc-800 flex gap-6 justify-center shadow-sm">
					<Link 
						href="/" 
						className="text-sm font-medium hover:text-indigo-400 transition-colors"
					>
						Strona Główna
					</Link>
					<Link 
						href="/users" 
						className="text-sm font-medium hover:text-indigo-400 transition-colors"
					>
						Lista Użytkowników
					</Link>
				</nav>
				{stats}
				<main className="flex-1 p-6 flex justify-center">
					{children}
				</main>
			</body>
		</html>
	);
}