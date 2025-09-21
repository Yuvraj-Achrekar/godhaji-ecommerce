"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useMemo } from "react";
import {
	MaterialReactTable,
	useMaterialReactTable,
	type MRT_ColumnDef, //if using TypeScript (optional, but recommended)
} from "material-react-table";

interface Person {
	name: string;
	age: number;
}

//mock data - strongly typed if you are using TypeScript (optional, but recommended)
const data: Person[] = [
	{
		name: "John",
		age: 30,
	},
	{
		name: "Sara",
		age: 25,
	},
];

const LatestOrders = () => {
	const columns = useMemo<MRT_ColumnDef<Person>[]>(
		() => [
			{
				accessorKey: "name", //simple recommended way to define a column
				header: "Name",
				muiTableHeadCellProps: { style: { color: "green" } }, //custom props
				enableHiding: false, //disable a feature for this column
			},
			{
				accessorFn: (originalRow) => originalRow.age, //alternate way
				id: "age", //id required if you use accessorFn instead of accessorKey
				header: "Age",
				Header: <i style={{ color: "red" }}>Age</i>, //optional custom markup
				Cell: ({ cell }) => <i>{cell.getValue<number>().toLocaleString()}</i>, //optional custom cell render
			},
		],
		[]
	);

	//pass table options to useMaterialReactTable
	const table = useMaterialReactTable({
		columns,
		data, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
		enableRowSelection: true, //enable some features
		enableColumnOrdering: true, //enable a feature for all columns
		enableGlobalFilter: false, //turn off a feature
	});
	return (
		<Card>
			<CardHeader>
				<CardTitle>Latest Orders</CardTitle>
			</CardHeader>
			<CardContent>
				<MaterialReactTable table={table} />
			</CardContent>
		</Card>
	);
};

export default LatestOrders;
