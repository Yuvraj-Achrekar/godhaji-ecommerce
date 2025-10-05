// "use client";
import { fetchOrders } from "@/actions/admin";
import AdminHomeClient from "@/components/admin/adminHomeClient";
import CountOverview from "@/components/admin/countOverview";
import { createSupabaseServer } from "@/lib/supabase/server";
import { OverviewTableCounts } from "@/types/admin.types";

const AdminHome = async () => {
	const supabase = await createSupabaseServer();
	const { data: countData } = await supabase.rpc("get_table_counts");
	const countMap = (countData as OverviewTableCounts) || {
		categories: 0,
		products: 0,
		profiles: 0,
		orders: 0,
	};

	return (
		<div className="pb-10">
			<CountOverview countData={countMap} />
			<AdminHomeClient />
		</div>
	);
};

export default AdminHome;
