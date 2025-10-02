"use client";
import OrdersTable from "@/components/tables/ordersTable";
import { Tables } from "@/types/database.types";
import { useQuery } from "@tanstack/react-query";

type OrdersRow = Tables<"orders">;
type ProfilesRow = Tables<"profiles">;
type AddressesRow = Tables<"addresses">;
type OrderItemsRow = Tables<"order_items">;
export type OrdersTableDataProps = OrdersRow & {
	profiles: ProfilesRow;
	addresses: AddressesRow;
	order_items: OrderItemsRow[];
};

const OrdersPage = () => {
	async function fetchOrders() {
		const res = await fetch("/api/admin/orders");
		if (!res.ok) throw new Error("Failed to fetch Orders");
		return res.json();
	}

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
