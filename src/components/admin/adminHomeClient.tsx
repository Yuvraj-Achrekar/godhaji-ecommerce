"use client";
import React, { useState } from "react";
import OrderChart from "../charts/orderChart";
import OrderSummaryChart from "../charts/orderSummaryChart";
import LatestOrdersTable from "../tables/latestOrdersTable";
import LatestReviewsTable from "../tables/latestReviewsTable";
import { fetchOrders } from "@/actions/admin";
import { useQuery } from "@tanstack/react-query";
import { OrdersChartData, OrdersTableDataProps } from "@/types/admin.types";

// function transformOrdersToChartData(orders: any[]): OrdersChartData[] {
// 	const monthMap: Record<string, number> = {};

// 	orders.forEach((order) => {
// 		const date = new Date(order.created_at);
// 		const monthYear = date.toLocaleString("default", {
// 			month: "long",
// 			year: "numeric",
// 		});
// 		monthMap[monthYear] = (monthMap[monthYear] || 0) + 1;
// 	});

// 	return Object.entries(monthMap).map(([month, orders]) => ({ month, orders }));
// }

function transformOrdersToChartData(orders: any[]): OrdersChartData[] {
	if (!orders || orders.length === 0) return [];

	// Group orders by month and year
	const monthMap: Record<string, number> = {};

	orders.forEach((order) => {
		const date = new Date(order.created_at);
		const monthYear = date.toLocaleString("en-US", {
			month: "long",
			year: "numeric",
		});

		// Count orders for each month
		monthMap[monthYear] = (monthMap[monthYear] || 0) + 1;
	});

	// Convert to array and sort chronologically
	return Object.entries(monthMap)
		.map(([month, orders]) => ({
			month,
			orders,
		}))
		.sort((a, b) => {
			const dateA = new Date(a.month);
			const dateB = new Date(b.month);
			return dateA.getTime() - dateB.getTime();
		});
}
const AdminHomeClient = () => {
	const { data, error, isLoading } = useQuery({
		queryKey: ["orders"],
		queryFn: fetchOrders,
		staleTime: 5 * 60 * 1000, // 5 minutes
	});

	const formattedChartData = transformOrdersToChartData(data);

	return (
		<div>
			<div className="mt-6 flex flex-col md:flex-row gap-6">
				<div className="w-full md:w-[60%]">
					<OrderChart data={formattedChartData} />
				</div>
				<div className="w-full md:w-[40%]">
					<OrderSummaryChart />
				</div>
			</div>
			<div className="mt-6 flex flex-col md:flex-row gap-6">
				<div className="w-full md:w-[60%]">
					<LatestOrdersTable data={data} />
				</div>
				<div className="w-full md:w-[40%]">
					<LatestReviewsTable />
				</div>
			</div>
		</div>
	);
};

export default AdminHomeClient;
