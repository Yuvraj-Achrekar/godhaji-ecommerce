"use client";
import React, { useState } from "react";
import OrderChart from "../charts/orderChart";
import OrderSummaryChart from "../charts/orderSummaryChart";
import LatestOrdersTable from "../tables/latestOrdersTable";
import LatestReviewsTable from "../tables/latestReviewsTable";
import { fetchOrders } from "@/actions/admin";
import { useQuery } from "@tanstack/react-query";
import { OrdersChartData } from "@/types/admin.types";

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
const AdminHomeClient = () => {
	const { data, error, isLoading } = useQuery({
		queryKey: ["orders"],
		queryFn: fetchOrders,
		staleTime: 5 * 60 * 1000, // 5 minutes
	});
	// const formattedChartData = transformOrdersToChartData(data || []);
	return (
		<div>
			<div className="mt-6 flex flex-col md:flex-row gap-6">
				<div className="w-full md:w-[60%]">
					<OrderChart data={[]} />
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
