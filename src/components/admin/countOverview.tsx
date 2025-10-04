import OverviewCard from "@/components/cards/overviewCard";
import { createSupabaseClient } from "@/lib/supabase/client";
import { createSupabaseServer } from "@/lib/supabase/server";
import {
	DASHBOARD_ALL_CATEGORY,
	DASHBOARD_ALL_PRODUCTS,
	DASHBOARD_CUSTOMERS,
	DASHBOARD_ORDERS,
} from "@/routes/adminRoutes";
import { LayoutDashboard } from "lucide-react";
import React from "react";

const tables: Array<"categories" | "products" | "profiles" | "orders"> = [
	"categories",
	"products",
	"profiles",
	"orders",
];
const CountOverview = async () => {
	const supabase = await createSupabaseServer();

	// Fetch all counts in parallel
	const counts = await Promise.all(
		tables.map(async (table) => {
			const { count, error } = await supabase
				.from(table)
				.select("*", { count: "exact", head: true });
			if (error) throw error;
			return { table, count };
		})
	);

	const countMap = Object.fromEntries(counts.map((c) => [c.table, c.count]));
	return (
		<div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
			<OverviewCard
				title="Category"
				count={countMap.categories || 0}
				icon={<LayoutDashboard />}
				href={DASHBOARD_ALL_CATEGORY}
				color="forestgreen"
			/>
			<OverviewCard
				title="Products"
				count={countMap.products || 0}
				icon={<LayoutDashboard />}
				href={DASHBOARD_ALL_PRODUCTS}
				color="dodgerblue"
			/>
			<OverviewCard
				title="Total Customers"
				count={countMap.profiles || 0}
				icon={<LayoutDashboard />}
				href={DASHBOARD_CUSTOMERS}
				color="gold"
			/>
			<OverviewCard
				title="Total orders"
				count={countMap.orders || 0}
				icon={<LayoutDashboard />}
				href={DASHBOARD_ORDERS}
				color="darkviolet"
			/>
		</div>
	);
};

export default CountOverview;
