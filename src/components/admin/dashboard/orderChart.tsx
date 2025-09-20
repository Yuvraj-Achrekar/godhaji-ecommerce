"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
	type ChartConfig,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

const chartConfig = {
	desktop: {
		label: "Desktop",
		color: "#2563eb",
	},
	mobile: {
		label: "Mobile",
		color: "#60a5fa",
	},
} satisfies ChartConfig;

const chartData = [
	{ month: "January", orders: 186 },
	{ month: "February", orders: 305 },
	{ month: "March", orders: 237 },
	{ month: "April", orders: 73 },
	{ month: "May", orders: 209 },
	{ month: "June", orders: 214 },
];
const OrderChart = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Order Overview</CardTitle>
			</CardHeader>
			<CardContent className="p-2 md:px-4">
				<ChartContainer config={chartConfig}>
					<BarChart accessibilityLayer data={chartData}>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey="month"
							tickLine={false}
							tickMargin={10}
							axisLine={false}
							tickFormatter={(value) => value.slice(0, 3)}
						/>
						<YAxis
							axisLine={false}
							tickLine={false}
							tickMargin={10}
							width={50}
						/>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent hideLabel />}
						/>
						<Bar dataKey="orders" fill="var(--color-desktop)" radius={8} />
					</BarChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
};

export default OrderChart;
