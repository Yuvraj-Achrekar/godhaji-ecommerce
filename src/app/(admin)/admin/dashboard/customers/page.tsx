"use client";

import { useQuery } from "@tanstack/react-query";
import CustomersTable from "@/components/tables/customersTable";

const CustomersPage = () => {
	async function fetchCustomers() {
		const res = await fetch("/api/admin/customers");
		if (!res.ok) throw new Error("Failed to fetch customers");
		return res.json();
	}

	const { data, error, isLoading } = useQuery({
		queryKey: ["customers"],
		queryFn: fetchCustomers,
	});

	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>Error: {(error as Error).message}</p>;

	return (
		<div>
			<CustomersTable data={data} />
		</div>
	);
};

export default CustomersPage;
