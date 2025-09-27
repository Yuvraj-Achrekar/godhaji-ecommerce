"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useMemo } from "react";
import {
	MaterialReactTable,
	useMaterialReactTable,
	type MRT_ColumnDef, //if using TypeScript (optional, but recommended)
} from "material-react-table";
import { Tables } from "@/types/database.types";

type CustomersTableProps = {
	data: Tables<"profiles">[];
};

const CustomersTable = ({ data }: CustomersTableProps) => {
	const columns = useMemo<MRT_ColumnDef<Tables<"profiles">>[]>(
		() => [
			{
				accessorKey: "username", //simple recommended way to define a column
				header: "UserName",
				muiTableHeadCellProps: { style: { color: "green" } }, //custom props
				enableHiding: false, //disable a feature for this column
			},
			{
				accessorKey: "full_name", //simple recommended way to define a column
				header: "Full Name",
				muiTableHeadCellProps: { style: { color: "green" } }, //custom props
				enableHiding: false, //disable a feature for this column
			},
			{
				accessorKey: "email", //simple recommended way to define a column
				header: "Email",
				muiTableHeadCellProps: { style: { color: "green" } }, //custom props
				enableHiding: false, //disable a feature for this column
			},
			{
				accessorKey: "user_role", //simple recommended way to define a column
				header: "User Role",
				muiTableHeadCellProps: { style: { color: "green" } }, //custom props
				enableHiding: false, //disable a feature for this column
			},
			// {
			// 	accessorFn: (originalRow) => originalRow.age, //alternate way
			// 	id: "age", //id required if you use accessorFn instead of accessorKey
			// 	header: "Age",
			// 	Header: <i style={{ color: "red" }}>Age</i>, //optional custom markup
			// 	Cell: ({ cell }) => <i>{cell.getValue<number>().toLocaleString()}</i>, //optional custom cell render
			// },
		],
		[]
	);

	const table = useMaterialReactTable({
		columns,
		data, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
		enableRowSelection: true, //enable some features
		enableColumnOrdering: true, //enable a feature for all columns
		enableGlobalFilter: false, //turn off a feature
		muiTableBodyRowProps: { hover: false },
		muiTableProps: {
			sx: {
				border: "1px solid rgba(81, 81, 81, .5)",
				caption: {
					captionSide: "top",
				},
			},
		},
		muiTableHeadCellProps: {
			sx: {
				border: "1px solid rgba(81, 81, 81, .5)",
				fontStyle: "italic",
				fontWeight: "normal",
			},
		},
		muiTableBodyCellProps: {
			sx: {
				border: "1px solid rgba(81, 81, 81, .5)",
			},
		},
	});
	return (
		<Card>
			<CardHeader>
				<CardTitle>All Customers</CardTitle>
			</CardHeader>
			<CardContent>
				<MaterialReactTable table={table} />
			</CardContent>
		</Card>
	);
};

export default CustomersTable;
