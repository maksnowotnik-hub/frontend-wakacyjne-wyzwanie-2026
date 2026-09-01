import { notFound } from "next/navigation";

export default async function UserProfilePage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;

	if (parseInt(id) < 1 || parseInt(id) > 3 || isNaN(Number(id))) {
		notFound();
	}

	return (
		<div className="flex flex-col items-center gap-4 mt-10">
			<h1 className="text-3xl font-bold text-indigo-400">Profil użytkownika</h1>
			<p className="text-xl">Oglądasz szczegóły użytkownika o ID: <span className="font-bold">{id}</span></p>
		</div>
	);
}