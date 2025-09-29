import { Tables } from "@/types/database.types";

type OrdersRow = Tables<"orders">;
type ProfilesRow = Tables<"profiles">;
type AddressesRow = Tables<"addresses">;
export type OrdersTable = OrdersRow & {
	profiles: ProfilesRow;
	addresses: AddressesRow;
};

const OrdersPage = () => {
	return <div>Page</div>;
};

export default OrdersPage;
