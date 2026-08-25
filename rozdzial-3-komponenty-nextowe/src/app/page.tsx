import Script from 'next/script';
import { TeamMemberCard } from "./TeamMemberCard";

export default function Home() {
	return (
		<main className="flex min-h-screen items-center justify-center bg-zinc-900 p-6">
			<TeamMemberCard
				name="Maksymilian Nowotnik"
				role="Frontend Developer"
				bio="Tworzę nowoczesne aplikacje webowe w Next.js i testuję możliwości Tailwinda."
				skills={["React", "Next.js", "TypeScript", "Tailwind", "Git"]}
			/>

			<Script id="welcome-alert">
				{`alert("Witaj na stronie członka zespołu!");`}
			</Script>
		</main>
	);
}