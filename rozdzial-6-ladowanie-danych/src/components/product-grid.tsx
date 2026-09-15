'use client';

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Product } from "../types/product";
import { Input } from "./ui/input";
import { ProductCard } from "./product-card";

interface ProductGridProps {
	initialData: Product[];
}

export default function ProductGrid({ initialData }: ProductGridProps) {
	const [search, setSearch] = useState("");

	const { data } = useQuery({
		queryKey: ["products", search],
		queryFn: async () => {
			const res = await fetch(`https://dummyjson.com/products/search?q=${search}`);
			if (!res.ok) throw new Error("Failed to fetch");
			const json = await res.json();
			return json.products as Product[];
		},
		initialData: search === "" ? initialData : undefined,
		staleTime: 60_000,
	});

	return (
		<div className="flex flex-col gap-6">
			<Input
				placeholder="Szukaj produktów..."
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				className="max-w-md"
			/>
			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{data?.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</div>
	);
}