"use client";
import VariantTable from "@/components/tables/variantsTable";
import { Tables } from "@/types/database.types";
import { useQuery } from "@tanstack/react-query";

export type ProductVariantData = Tables<"product_variants"> & {
	product: Tables<"products">;
};

const AllVariants = () => {
	async function fetchVariants() {
		const res = await fetch("/api/admin/variants");
		if (!res.ok) throw new Error("Failed to fetch products varaints");
		return res.json();
	}
	const { data, error, isLoading } = useQuery({
		queryKey: ["variants"],
		queryFn: fetchVariants,
	});

	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>Error: {(error as Error).message}</p>;
	return (
		<div>
			<VariantTable data={data} />
		</div>
	);
};

export default AllVariants;
