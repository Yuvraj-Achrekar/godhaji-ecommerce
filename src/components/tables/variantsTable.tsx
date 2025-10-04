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
import { Box, ListItemIcon, MenuItem } from "@mui/material";
import { Download, SquarePen, Trash2 } from "lucide-react";
import Link from "next/link";
import { DASHBOARD_ADD_CATEGORY } from "@/routes/adminRoutes";
import { OrdersTableDataProps } from "@/app/(admin)/admin/dashboard/orders/page";
import { ProductData } from "@/app/(admin)/admin/dashboard/products/page";
import { ProductVariantData } from "@/app/(admin)/admin/dashboard/products/all-variants/page";

type ProductVariantTableProps = {
	data: ProductVariantData[];
};

const columnHelper = createMRTColumnHelper<ProductVariantData>();

const columns = [
	columnHelper.accessor("id", {
		header: "ID",
	}),
	columnHelper.accessor("product.name", {
		header: "Product Name",
	}),
	columnHelper.accessor("name", {
		header: "Variant Name",
	}),
	columnHelper.accessor("mrp", {
		header: "MRP",
	}),
	columnHelper.accessor("selling_price", {
		header: "Selling Price",
	}),
];

const csvConfig = mkConfig({
	fieldSeparator: ",",
	decimalSeparator: ".",
	useKeysAsHeaders: true,
});

const VariantTable = ({ data }: ProductVariantTableProps) => {
	// const handleExportRows = (rows: MRT_Row<Tables<"products">>[]) => {
	// 	const rowData = rows.map((row) => row.original);
	// 	const csv = generateCsv(csvConfig)(rowData);
	// 	download(csvConfig)(csv);
	// };

	const handleExportData = () => {
		// const csv = generateCsv(csvConfig)(data);
		console.log(data);

		// download(csvConfig)(csv);
	};

	const table = useMaterialReactTable({
		columns,
		data, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
		enableRowSelection: true, //enable some features
		enableColumnOrdering: true, //enable a feature for all columns
		enableRowActions: true,
		positionActionsColumn: "last",
		renderRowActionMenuItems: ({ closeMenu, row }) => [
			<MenuItem
				key={0}
				onClick={() => {
					// View profile logic...
					closeMenu();
				}}
				sx={{ m: 0, color: "green" }}>
				<ListItemIcon>
					<SquarePen color="green" />
				</ListItemIcon>
				Edit
			</MenuItem>,
			<MenuItem
				key={1}
				onClick={() => {
					// Send email logic...
					closeMenu();
				}}
				sx={{ m: 0, color: "red" }}>
				<ListItemIcon>
					<Trash2 color="red" />
				</ListItemIcon>
				Delete
			</MenuItem>,
		],
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
					onClick={
						() => {} // handleExportRows(table.getPrePaginationRowModel().rows)
					}>
					<Download />
					Export All Rows
				</Button>
				<Button
					disabled={table.getRowModel().rows.length === 0}
					//export all rows as seen on the screen (respects pagination, sorting, filtering, etc.)
					onClick={
						() => {} // handleExportRows(table.getRowModel().rows)
					}>
					<Download />
					Export Page Rows
				</Button>
				<Button
					disabled={
						!table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()
					}
					//only export selected rows
					onClick={
						() => {} // handleExportRows(table.getSelectedRowModel().rows)
					}>
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
		<Card>
			<CardHeader className="my-0 flex justify-between">
				<CardTitle className="text-2xl">All Products Variants</CardTitle>
				<Button size="sm">
					<Link href={DASHBOARD_ADD_CATEGORY}>Add New</Link>
				</Button>
			</CardHeader>
			<Separator orientation="horizontal" />
			<CardContent className="px-0 bg-amber-300">
				<MaterialReactTable table={table} />
			</CardContent>
		</Card>
	);
};

export default VariantTable;
