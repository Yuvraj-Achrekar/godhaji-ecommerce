"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useMemo } from "react";
import {
	MaterialReactTable,
	useMaterialReactTable,
	type MRT_ColumnDef, //if using TypeScript (optional, but recommended)
} from "material-react-table";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import Link from "next/link";
import { DASHBOARD_ORDERS } from "@/routes/adminRoutes";
import { OrdersTableDataProps } from "@/types/admin.types";

const LatestOrdersTable = ({ data = [] }: { data: OrdersTableDataProps[] }) => {
	const columns = useMemo<MRT_ColumnDef<OrdersTableDataProps>[]>(
		() => [
			{
				accessorKey: "id", //simple recommended way to define a column
				header: "Order ID",
			},
			{
				accessorKey: "status", //simple recommended way to define a column
				header: "Status",
			},
			{
				accessorKey: "final_amount", //simple recommended way to define a column
				header: "Total Amount",
			},
		],
		[]
	);

	//pass table options to useMaterialReactTable
	const table = useMaterialReactTable({
		columns,
		data, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
		enableGlobalFilter: false, //turn off a feature
		enableColumnActions: false, //3 dots menu beside column header
		enableStickyHeader: true,
		enablePagination: false,
		enableSorting: false,
		enableTopToolbar: false,
		enableBottomToolbar: false,
		initialState: { density: "compact" },
		muiTablePaperProps: {
			sx: {
				height: "100%", // <-- make MRT's wrapper fill the parent
				display: "flex",
				flexDirection: "column",
				boxShadow: "none",
				borderRadius: 0,
			},
		},
		muiTableContainerProps: {
			sx: {
				flex: "1 1 auto", // <-- let the table body flex
				overflowY: "auto", // <-- enable scrolling
				boxShadow: "none",
				border: "none",
				borderRadius: 0,
				"& .MuiPaper-root": {
					boxShadow: "none",
					borderRadius: 0,
				},
			},
		},
		muiTableProps: {
			sx: {
				border: "none",
				borderRadius: 0,
				"& .MuiTable-root": {
					border: "none",
				},
				"& .MuiTableCell-root": {
					borderBottom: "1px solid #e5e7eb", // Light gray border, or 'none' for no borders
				},
			},
		},
	});
	return (
		<Card className="h-[400px] flex flex-col gap-4">
			<CardHeader className="flex justify-between">
				<CardTitle>Latest Orders</CardTitle>
				<Button size={"sm"}>
					<Link href={DASHBOARD_ORDERS}>View All</Link>
				</Button>
			</CardHeader>
			<Separator />
			<CardContent className="flex-1 min-h-0 px-2">
				<MaterialReactTable table={table} />
			</CardContent>
		</Card>
	);
};

export default LatestOrdersTable;
