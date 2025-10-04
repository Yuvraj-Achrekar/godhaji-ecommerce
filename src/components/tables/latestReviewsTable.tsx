import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import { DASHBOARD_REVIEWS } from "@/routes/adminRoutes";
const LatestReviewsTable = () => {
	return (
		<Card className="h-full">
			<CardHeader className="my-0 flex justify-between">
				<CardTitle>Latest Reviews</CardTitle>
				<Button size="sm">
					<Link href={DASHBOARD_REVIEWS}>View All</Link>
				</Button>
			</CardHeader>
		</Card>
	);
};

export default LatestReviewsTable;
