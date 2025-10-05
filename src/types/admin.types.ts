import { Tables } from "./database.types";


export type OverviewTableCounts = {
    categories: number;
    products: number;
    profiles: number;
    orders: number;
};
export type OrdersTableDataProps = Tables<"orders"> & {
	profiles: Tables<"profiles">;
	addresses: Tables<"addresses">;
	order_items: Tables<"order_items">[];
};

export interface OrdersChartData {
	month: string;
	orders: number;
}