import CountOverview from "@/components/admin/dashboard/countOverview";
import LatestOrders from "@/components/admin/dashboard/latestOrders";
import LatestReviews from "@/components/admin/dashboard/latestReviews";
import OrderChart from "@/components/admin/dashboard/orderChart";
import OrderSummary from "@/components/admin/dashboard/orderSummary";

const AdminHome = () => {
	return (
		<div>
			<CountOverview />
			<div className="mt-8 flex flex-col md:flex-row gap-4">
				<div className="w-full md:w-[60%]">
					<OrderChart />
				</div>
				<div className="w-full md:w-[40%]">
					<OrderSummary />
				</div>
			</div>
			<div className="mt-8 flex flex-col md:flex-row gap-4">
				<div className="w-full md:w-[60%]">
					<LatestOrders />
				</div>
				<div className="w-full md:w-[40%]">
					<LatestReviews />
				</div>
			</div>
		</div>
	);
};

export default AdminHome;
