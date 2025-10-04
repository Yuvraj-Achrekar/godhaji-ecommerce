"use client";
import ReviewsTable from "@/components/tables/reviewsTable";
import VariantTable from "@/components/tables/variantsTable";
import { Tables } from "@/types/database.types";
import { useQuery } from "@tanstack/react-query";

export type ReviewsData = Tables<"reviews"> & {
	product: Tables<"products">;
	user: Tables<"profiles">;
};

const Reviews = () => {
	async function fetchReviews() {
		const res = await fetch("/api/admin/reviews");
		if (!res.ok) throw new Error("Failed to fetch reviews");
		return res.json();
	}
	const { data, error, isLoading } = useQuery({
		queryKey: ["reviews"],
		queryFn: fetchReviews,
	});

	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>Error: {(error as Error).message}</p>;
	return (
		<div>
			<ReviewsTable data={data} />
		</div>
	);
};

export default Reviews;
