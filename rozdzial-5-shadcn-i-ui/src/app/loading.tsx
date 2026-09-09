import { Skeleton } from "../../components/ui/skeleton";

export default function Loading() {
	return (
		<div className="flex flex-wrap gap-6 justify-center w-full mt-10">
			{Array(3).fill(0).map((_, key) => (
				<div key={key} className="flex flex-col items-center space-y-4 border border-zinc-200 rounded-xl p-6 w-[250px] shadow-sm">
					<Skeleton className="h-24 w-24 rounded-full" />
					
					<div className="space-y-2 w-full flex flex-col items-center">
						<Skeleton className="h-6 w-3/4" />
						<Skeleton className="h-4 w-1/2" />
					</div>
					
					<Skeleton className="h-10 w-full mt-4" />
				</div>
			))}
		</div>
	);
}