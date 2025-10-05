"use client";
import { fetchOrders } from "@/actions/admin";
import OrdersTable from "@/components/tables/ordersTable";
import { useQuery } from "@tanstack/react-query";

const OrdersPage = () => {
	const { data, error, isLoading } = useQuery({
		queryKey: ["orders"],
		queryFn: fetchOrders,
	});

	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>Error: {(error as Error).message}</p>;
	return (
		<div className="w-full">
			<OrdersTable data={data} />
		</div>
	);
};

export default OrdersPage;
