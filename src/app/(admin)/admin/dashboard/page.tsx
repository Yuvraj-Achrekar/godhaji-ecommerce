import CountOverview from "@/components/admin/countOverview";
import OrderChart from "@/components/charts/orderChart";
import OrderSummaryChart from "@/components/charts/orderSummaryChart";
import LatestOrdersTable from "@/components/tables/latestOrdersTable";
import LatestReviewsTable from "@/components/tables/latestReviewsTable";

const AdminHome = () => {
	return (
		<div className="pb-10">
			<CountOverview />
			<div className="mt-8 flex flex-col md:flex-row gap-4">
				<div className="w-full md:w-[60%]">
					<OrderChart />
				</div>
				<div className="w-full md:w-[40%]">
					<OrderSummaryChart />
				</div>
			</div>
			<div className="mt-8 flex flex-col md:flex-row gap-4">
				<div className="w-full md:w-[60%]">
					<LatestOrdersTable />
				</div>
				<div className="w-full md:w-[40%]">
					<LatestReviewsTable />
				</div>
			</div>
		</div>
	);
};

export default AdminHome;
