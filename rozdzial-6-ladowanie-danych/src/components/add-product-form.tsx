'use client';

import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function AddProductForm() {
	const queryClient = useQueryClient();
	const [title, setTitle] = useState("");
	const [price, setPrice] = useState("");
	const [category, setCategory] = useState("");

	const mutation = useMutation({
		mutationFn: async (newProduct: { title: string; price: number; category: string }) => {
			const response = await fetch("https://dummyjson.com/products/add", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(newProduct),
			});
			if (!response.ok) throw new Error("Failed to add product");
			return response.json();
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["products"] });
			setTitle("");
			setPrice("");
			setCategory("");
		},
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!title || !price || !category) return;
		mutation.mutate({ title, price: Number(price), category });
	};

	return (
		<form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mb-8 p-4 border rounded-lg bg-white">
			<h2 className="text-xl font-semibold">Dodaj nowy produkt</h2>
			<Input placeholder="Tytuł" value={title} onChange={(e) => setTitle(e.target.value)} required />
			<Input type="number" placeholder="Cena" value={price} onChange={(e) => setPrice(e.target.value)} required />
			<Input placeholder="Kategoria" value={category} onChange={(e) => setCategory(e.target.value)} required />
			<Button type="submit" disabled={mutation.isPending}>
				{mutation.isPending ? "Dodawanie..." : "Dodaj produkt"}
			</Button>
		</form>
	);
}