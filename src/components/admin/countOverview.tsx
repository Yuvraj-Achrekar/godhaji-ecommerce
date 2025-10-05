import OverviewCard from "@/components/cards/overviewCard";
import {
	DASHBOARD_ALL_CATEGORY,
	DASHBOARD_ALL_PRODUCTS,
	DASHBOARD_CUSTOMERS,
	DASHBOARD_ORDERS,
} from "@/routes/adminRoutes";
import { OverviewTableCounts } from "@/types/admin.types";
import { LayoutDashboard } from "lucide-react";

const CountOverview = ({ countData }: { countData: OverviewTableCounts }) => {
	return (
		<div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
			<OverviewCard
				title="Total Categories"
				count={countData.categories || 0}
				icon={<LayoutDashboard />}
				href={DASHBOARD_ALL_CATEGORY}
				color="bg-emerald-500"
				bgColor="bg-emerald-100"
			/>
			<OverviewCard
				title="Total Products"
				count={countData.products || 0}
				icon={<LayoutDashboard />}
				href={DASHBOARD_ALL_PRODUCTS}
				color="bg-blue-500"
				bgColor="bg-blue-100"
			/>
			<OverviewCard
				title="Total Customers"
				count={countData.profiles || 0}
				icon={<LayoutDashboard />}
				href={DASHBOARD_CUSTOMERS}
				color="bg-amber-500"
				bgColor="bg-amber-100"
			/>
			<OverviewCard
				title="Total orders"
				count={countData.orders || 0}
				icon={<LayoutDashboard />}
				href={DASHBOARD_ORDERS}
				color="bg-slate-500"
				bgColor="bg-slate-100"
			/>
		</div>
	);
};

export default CountOverview;
