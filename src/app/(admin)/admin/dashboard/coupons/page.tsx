"use client";
import CouponsTable from "@/components/tables/couponsTable";
import ProductTable from "@/components/tables/productTable";
import { Tables } from "@/types/database.types";
import { useQuery } from "@tanstack/react-query";

export type CouponsData = Tables<"coupons">;

const AllProducts = () => {
	async function fetchCoupons() {
		const res = await fetch("/api/admin/coupons");
		if (!res.ok) throw new Error("Failed to fetch coupons");
		return res.json();
	}
	const { data, error, isLoading } = useQuery({
		queryKey: ["coupons"],
		queryFn: fetchCoupons,
	});

	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>Error: {(error as Error).message}</p>;
	return (
		<div>
			<CouponsTable data={data} />
		</div>
	);
};

export default AllProducts;
