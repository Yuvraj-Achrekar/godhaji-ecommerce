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

interface Person {
	name: string;
	age: number;
}

//mock data - strongly typed if you are using TypeScript (optional, but recommended)
const data: Person[] = Array.from({ length: 30 }).map((_, i) => ({
	name: i % 2 === 0 ? "John" : "Sara",
	age: 20 + (i % 10),
}));

const LatestOrdersTable = () => {
	const columns = useMemo<MRT_ColumnDef<Person>[]>(
		() => [
			{
				accessorKey: "name", //simple recommended way to define a column
				header: "Name",
				// muiTableHeadCellProps: { style: { color: "green" } }, //custom props
				enableHiding: false, //disable a feature for this column
			},
			{
				accessorFn: (originalRow) => originalRow.age, //alternate way
				id: "age", //id required if you use accessorFn instead of accessorKey
				header: "Age",
				// Header: <i style={{ color: "red" }}>Age</i>, //optional custom markup
				Cell: ({ cell }) => <i>{cell.getValue<number>().toLocaleString()}</i>, //optional custom cell render
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
