import {TeamMemberCard} from "./TeamMemberCard";

export default function Home(){
	return(
		<main className="flex min-h-screen items-center justify-center bg-zinc-950 p-4">
			<TeamMemberCard
				name="Maksymilian Nowotnik"
				role="Frontend Developer"
				bio="Uczę się programowania w ramach wakacyjnego wyzwania z KN Solvro"
				skills={["React", "Next.js", "TypeScript", "Tailwind CSS", "Git"]}
			/>
		</main>
	);
}