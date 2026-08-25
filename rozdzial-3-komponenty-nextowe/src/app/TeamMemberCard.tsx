import Image from 'next/image';
import Link from 'next/link';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['400', '600', '700'],
});

interface TeamMemberCardProps {
	name: string;
	role: string;
	bio: string;
	skills: string[];
}

export function TeamMemberCard({ name, role, bio, skills }: TeamMemberCardProps) {
	return (
		<div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-7 rounded-3xl shadow-lg max-w-sm sm:max-w-md w-full flex flex-col sm:flex-row items-center sm:items-start gap-5">
			<div className="relative w-20 h-20 rounded-2xl overflow-hidden shrink-0 shadow-md">
				<Image 
					src="/avatar.png" 
					alt={name} 
					width={80} 
					height={80} 
					className="object-cover w-full h-full"
				/>
			</div>

			<div className="flex flex-col text-center sm:text-left w-full">
				<h2 className="text-xl font-bold tracking-tight">{name}</h2>
				
				<span className={`${poppins.className} text-indigo-600 dark:text-indigo-400 font-semibold text-sm mb-2`}>
					{role}
				</span>
				
				<p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 leading-relaxed">{bio}</p>

				<div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-4">
					{skills.map((skill, index) => (
						<span 
							key={index} 
							className="bg-indigo-50 dark:bg-zinc-800 text-indigo-700 dark:text-indigo-300 text-xs px-3 py-1 rounded-full font-medium"
						>
							{skill}
						</span>
					))}
				</div>

				<Link 
					href="https://solvro.pwr.edu.pl" 
					target="_blank"
					className="inline-flex items-center justify-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-xl transition-colors shadow-sm"
				>
					Dowiedz się więcej
				</Link>
			</div>
		</div>
	);
}