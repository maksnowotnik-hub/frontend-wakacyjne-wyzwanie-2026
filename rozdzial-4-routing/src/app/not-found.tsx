import Link from "next/link";

export default function NotFound() {
	return (
		<div className="flex flex-col items-center justify-center h-64 gap-6 w-full text-center">
			<h2 className="text-4xl font-bold text-red-500">404</h2>
			<p className="text-xl text-zinc-300">Przykro nam, ale taki zasób (lub użytkownik) nie istnieje.</p>
			<Link
				href="/"
				className="px-6 py-2 bg-zinc-800 text-white rounded-md hover:bg-zinc-700 transition-colors border border-zinc-700"
			>
				Wróć na stronę główną
			</Link>
		</div>
	);
}