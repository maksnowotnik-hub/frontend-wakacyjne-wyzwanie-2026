import ProductGrid from "../components/product-grid";
import { AddProductForm } from "../components/add-product-form";

export default async function Home() {
	const response = await fetch("https://dummyjson.com/products", {
		next: { tags: ["products"] },
	});

	if (!response.ok) {
		throw new Error("Failed to fetch products");
	}

	const data = await response.json();

	return (
		<div className="w-full">
			<AddProductForm />
			<ProductGrid initialData={data.products} />
		</div>
	);
}