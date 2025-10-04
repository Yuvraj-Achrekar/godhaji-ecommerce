"use client";
import InputWithLabel from "@/components/inputWithLabel";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";

function formatDate(date: Date | undefined) {
	if (!date) {
		return "";
	}
	return date.toLocaleDateString("en-US", {
		day: "2-digit",
		month: "long",
		year: "numeric",
	});
}
function isValidDate(date: Date | undefined) {
	if (!date) {
		return false;
	}
	return !isNaN(date.getTime());
}

const AddCoupon = () => {
	const [open, setOpen] = useState(false);
	const [date, setDate] = useState<Date | undefined>(new Date());
	const [month, setMonth] = useState<Date | undefined>(date);
	const [value, setValue] = useState(formatDate(date));
	return (
		<Card className="gap-4">
			<CardHeader>
				<CardTitle className="text-lg">Add Coupon</CardTitle>
			</CardHeader>
			<Separator />
			<CardContent>
				<form action="">
					<div className="grid md:grid-cols-2 w-full gap-6">
						<InputWithLabel
							label="Code"
							inputType="text"
							placeholder="Enter Code"
							name="code"
							required={true}
						/>
						<InputWithLabel
							label="Discount Percentage"
							inputType="number"
							defaultValue={"0"}
							minValue={0}
							maxValue={100}
							name="discount_percentage"
							required={true}
						/>
						<InputWithLabel
							label="Minimum Purchase Amount"
							inputType="number"
							placeholder="Enter minimum order value"
							name="minimum_purchase_amount"
							required={true}
						/>
						<div className="flex flex-col gap-3">
							<Label htmlFor="date" className="px-1">
								Validity
							</Label>
							<div className="relative flex gap-2">
								<Input
									id="date"
									value={value}
									placeholder="June 01, 2025"
									className="bg-background pr-10"
									onChange={(e) => {
										const date = new Date(e.target.value);
										setValue(e.target.value);
										if (isValidDate(date)) {
											setDate(date);
											setMonth(date);
										}
									}}
									onKeyDown={(e) => {
										if (e.key === "ArrowDown") {
											e.preventDefault();
											setOpen(true);
										}
									}}
								/>
								<Popover open={open} onOpenChange={setOpen}>
									<PopoverTrigger asChild>
										<Button
											id="date-picker"
											variant="ghost"
											className="absolute top-1/2 right-2 size-6 -translate-y-1/2">
											<CalendarIcon className="size-3.5" />
											<span className="sr-only">Select date</span>
										</Button>
									</PopoverTrigger>
									<PopoverContent
										className="w-auto overflow-hidden p-0"
										align="end"
										alignOffset={-8}
										sideOffset={10}>
										<Calendar
											mode="single"
											selected={date}
											captionLayout="dropdown"
											month={month}
											onMonthChange={setMonth}
											onSelect={(date) => {
												setDate(date);
												setValue(formatDate(date));
												setOpen(false);
											}}
										/>
									</PopoverContent>
								</Popover>
							</div>
						</div>
					</div>
					<Button className="w-full mt-4">Add Coupon</Button>
				</form>
			</CardContent>
		</Card>
	);
};

export default AddCoupon;
