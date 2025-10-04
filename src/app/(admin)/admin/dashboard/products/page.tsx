"use client";
import ProductTable from "@/components/tables/productTable";
import { Tables } from "@/types/database.types";
import { useQuery } from "@tanstack/react-query";

export type ProductData = Tables<"products"> & {
	category: Tables<"categories">;
};

const AllProducts = () => {
	async function fetchProducts() {
		const res = await fetch("/api/admin/products");
		if (!res.ok) throw new Error("Failed to fetch products");
		return res.json();
	}
	const { data, error, isLoading } = useQuery({
		queryKey: ["products"],
		queryFn: fetchProducts,
	});

	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>Error: {(error as Error).message}</p>;
	return (
		<div>
			<ProductTable data={data} />
		</div>
	);
};

export default AllProducts;
