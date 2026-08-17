interface TeamMemberCardProps{
	name: string;
	role: string;
	bio: string;
	skills: string[];
}

export function TeamMemberCard({name, role, bio, skills}: TeamMemberCardProps){
	return (
		<div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-7 rounded-3xl shadow-lg max-w-sm sm:max-w-md w-full flex flex-col sm:flex-row items-center sm:items-start gap-5">
			<div className="w-20 h-20 rounded-2xl bg-indigo-600 flex items-center justify-center text-white text-2xl font-bold shrink-0 shadow-md">
				{name.charAt(0)}
			</div>

			<div className="flex flex-col text-center sm:text-left">
				<h2 className="text-xl font-bold tracking-tight">{name}</h2>
				<span className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm mb-2">{role}</span>
				<p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 leading-relaxed">{bio}</p>

				<div className="flex flex-wrap justify-center sm:justify-start gap-2">
					{skills.map((skill, index) => (
						<span 
							key={index} 
							className="bg-indigo-50 dark:bg-zinc-800 text-indigo-700 dark:text-indigo-300 text-xs px-3 py-1 rounded-full font-medium"
						>
							{skill}
						</span>
					))}
				</div>
			</div>
		</div>
	);
}