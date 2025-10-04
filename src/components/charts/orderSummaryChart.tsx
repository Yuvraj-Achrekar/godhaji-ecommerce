"use client";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";
import { useMemo } from "react";
import {
	DefaultLegendContentProps,
	Label,
	Legend,
	Pie,
	PieChart,
} from "recharts";
import { Button } from "../ui/button";
import Link from "next/link";
import { DASHBOARD_ORDERS } from "@/routes/adminRoutes";

const chartData = [
	{ status: "chrome", orders: 275, fill: "var(--color-chrome)" },
	{ status: "safari", orders: 200, fill: "var(--color-safari)" },
	{ status: "firefox", orders: 287, fill: "var(--color-firefox)" },
	{ status: "edge", orders: 173, fill: "var(--color-edge)" },
	{ status: "other", orders: 190, fill: "var(--color-other)" },
];

const renderLegend = (props: DefaultLegendContentProps) => {
	const { payload } = props;
	if (!payload) return null;

	return (
		<ul>
			{payload.map((entry, index) => (
				<li
					key={`item-${index}`}
					className="flex justify-between items-center text-base">
					{entry.value}
					<span
						className="rounded-full p-1 mb-1 text-white"
						style={{ backgroundColor: entry.color }}>
						{entry.payload?.value}
					</span>
				</li>
			))}
		</ul>
	);
};
const chartConfig = {
	orders: {
		label: "Orders",
	},
	chrome: {
		label: "Chrome",
		color: "var(--chart-1)",
	},
	safari: {
		label: "Safari",
		color: "var(--chart-2)",
	},
	firefox: {
		label: "Firefox",
		color: "var(--chart-3)",
	},
	edge: {
		label: "Edge",
		color: "var(--chart-4)",
	},
	other: {
		label: "Other",
		color: "var(--chart-5)",
	},
} satisfies ChartConfig;

const OrderSummaryChart = () => {
	const totalOrders = useMemo(() => {
		return chartData.reduce((acc, curr) => acc + curr.orders, 0);
	}, []);
	return (
		<Card className="h-full flex flex-col">
			<CardHeader className="my-0 flex justify-between">
				<CardTitle>Order Summary</CardTitle>
				<Button size="sm">
					<Link href={DASHBOARD_ORDERS}>View All</Link>
				</Button>
			</CardHeader>
			<CardContent className="flex-1 pb-0">
				<ChartContainer config={chartConfig} className="mx-auto h-full w-full">
					<PieChart>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent hideLabel />}
						/>
						<Pie
							data={chartData}
							dataKey="orders"
							nameKey="status"
							innerRadius={60}
							strokeWidth={50}>
							<Label
								content={({ viewBox }) => {
									if (viewBox && "cx" in viewBox && "cy" in viewBox) {
										return (
											<text
												x={viewBox.cx}
												y={viewBox.cy}
												textAnchor="middle"
												dominantBaseline="middle">
												<tspan
													x={viewBox.cx}
													y={viewBox.cy}
													className="fill-foreground text-3xl font-bold">
													{totalOrders.toLocaleString()}
												</tspan>
												<tspan
													x={viewBox.cx}
													y={(viewBox.cy || 0) + 24}
													className="fill-muted-foreground">
													Orders Status
												</tspan>
											</text>
										);
									}
								}}
							/>
						</Pie>
						<Legend content={renderLegend} />
					</PieChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
};

export default OrderSummaryChart;
