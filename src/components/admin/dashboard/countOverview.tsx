import OverviewCard from "@/components/cards/overviewCard";
import { LayoutDashboard } from "lucide-react";
import React from "react";

const CountOverview = () => {
	return (
		<div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
			<OverviewCard
				title="Category"
				count={10}
				icon={<LayoutDashboard />}
				color="red"
			/>
			<OverviewCard
				title="Category"
				count={10}
				icon={<LayoutDashboard />}
				color="green"
			/>
			<OverviewCard
				title="Category"
				count={10}
				icon={<LayoutDashboard />}
				color="green"
			/>
			<OverviewCard
				title="Category"
				count={10}
				icon={<LayoutDashboard />}
				color="green"
			/>
		</div>
	);
};

export default CountOverview;
