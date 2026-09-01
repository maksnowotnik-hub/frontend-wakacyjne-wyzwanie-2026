'use client';

import { useEffect } from 'react';

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<div className="flex flex-col items-center justify-center h-64 gap-4 w-full">
			<h2 className="text-2xl font-bold text-red-500">Coś poszło nie tak!</h2>
			<button
				onClick={() => reset()}
				className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 transition-colors"
			>
				Spróbuj ponownie
			</button>
		</div>
	);
}