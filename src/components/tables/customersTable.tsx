"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	createMRTColumnHelper,
	MaterialReactTable,
	MRT_Row,
	useMaterialReactTable,
} from "material-react-table";
import { Tables } from "@/types/database.types";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { mkConfig, generateCsv, download } from "export-to-csv";
import { Box, Typography } from "@mui/material";
import { Download } from "lucide-react";
import Link from "next/link";

type CustomersTableProps = {
	data: Tables<"profiles">[];
};

const columnHelper = createMRTColumnHelper<Tables<"profiles">>();

const columns = [
	columnHelper.accessor("username", {
		header: "UserName",
		muiTableHeadCellProps: { style: { color: "green" } }, //custom props
		enableHiding: false, //disable a feature for this column
	}),
	columnHelper.accessor("full_name", {
		header: "Full Name",
	}),
	columnHelper.accessor("email", {
		header: "Email",
	}),
	columnHelper.accessor("user_role", {
		header: "Role",
	}),
];

const csvConfig = mkConfig({
	fieldSeparator: ",",
	decimalSeparator: ".",
	useKeysAsHeaders: true,
});

const CustomersTable = ({ data }: CustomersTableProps) => {
	const handleExportRows = (rows: MRT_Row<Tables<"profiles">>[]) => {
		const rowData = rows.map((row) => row.original);
		const csv = generateCsv(csvConfig)(rowData);
		download(csvConfig)(csv);
	};

	const handleExportData = () => {
		const csv = generateCsv(csvConfig)(data);
		download(csvConfig)(csv);
	};

	const table = useMaterialReactTable({
		columns,
		data, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
		enableRowSelection: true, //enable some features
		enableColumnOrdering: true, //enable a feature for all columns
		renderTopToolbarCustomActions: ({ table }) => (
			<Box
				sx={{
					display: "flex",
					gap: "16px",
					padding: "8px",
					flexWrap: "wrap",
				}}>
				<Button
					//export all data that is currently in the table (ignore pagination, sorting, filtering, etc.)
					onClick={handleExportData}>
					<Download />
					Export All Data
				</Button>
				<Button
					disabled={table.getPrePaginationRowModel().rows.length === 0}
					//export all rows, including from the next page, (still respects filtering and sorting)
					onClick={() =>
						handleExportRows(table.getPrePaginationRowModel().rows)
					}>
					<Download />
					Export All Rows
				</Button>
				<Button
					disabled={table.getRowModel().rows.length === 0}
					//export all rows as seen on the screen (respects pagination, sorting, filtering, etc.)
					onClick={() => handleExportRows(table.getRowModel().rows)}>
					<Download />
					Export Page Rows
				</Button>
				<Button
					disabled={
						!table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()
					}
					//only export selected rows
					onClick={() => handleExportRows(table.getSelectedRowModel().rows)}>
					<Download />
					Export Selected Rows
				</Button>
			</Box>
		),
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
		muiTableContainerProps: {
			sx: {
				boxShadow: "none",
				border: "none",
				borderRadius: 0,
				"& .MuiPaper-root": {
					boxShadow: "none",
					borderRadius: 0,
				},
			},
		},
		muiTablePaperProps: {
			sx: {
				boxShadow: "none",
				borderRadius: 0,
			},
		},
	});
	return (
		<Card className="gap-4">
			<CardHeader className="my-0 flex justify-between">
				<CardTitle className="text-lg">All Customers</CardTitle>
			</CardHeader>
			<Separator />
			<CardContent className="px-0 bg-amber-300">
				<MaterialReactTable table={table} />
			</CardContent>
		</Card>
	);
};

export default CustomersTable;
