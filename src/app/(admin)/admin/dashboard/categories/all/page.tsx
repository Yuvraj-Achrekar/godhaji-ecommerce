"use client";
import CategoriesTable from "@/components/admin/categories/categoriesTable";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const AllCategories = () => {
	async function fetchCategoires() {
		const res = await fetch("/api/admin/category");
		if (!res.ok) throw new Error("Failed to fetch category");
		return res.json();
	}

	const { data, error, isLoading } = useQuery({
		queryKey: ["categories"],
		queryFn: fetchCategoires,
	});

	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>Error: {(error as Error).message}</p>;
	return (
		<div>
			<CategoriesTable data={data} />
		</div>
	);
};

export default AllCategories;
