"use client";
import InputWithLabel from "@/components/inputWithLabel";
import MediaPicker from "@/components/mediaPicker";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
const AddProduct = () => {
	const [description, setDescription] = useState("");
	return (
		<Card className="gap-4">
			<CardHeader>
				<CardTitle className="text-lg">Add Product</CardTitle>
			</CardHeader>
			<Separator />
			<CardContent>
				<form>
					<div className="grid md:grid-cols-2 w-full gap-6">
						<InputWithLabel
							label="Name"
							inputType="text"
							placeholder="Enter the name of the product"
							name="name"
							required={true}
						/>
						<InputWithLabel
							label="Slug"
							inputType="text"
							placeholder="Enter the Slug of the product"
							name="slug"
							required={true}
						/>
						<InputWithLabel
							label="Category"
							inputType="text"
							placeholder="Enter the Category of the product"
							name="category"
							required={true}
						/>
						<InputWithLabel
							label="MRP"
							inputType="number"
							placeholder="Enter the MRP of the product"
							name="mrp"
							required={true}
						/>
						<InputWithLabel
							label="Selling Price"
							inputType="number"
							placeholder="Enter the actual selling price of the product"
							name="sellingPrice"
							required={true}
						/>
					</div>
					<div className="grid w-full gap-3 mt-6">
						<Label htmlFor="description">
							Description <span className="text-red-500 ">*</span>
						</Label>
						<Textarea
							id="description"
							name="description"
							placeholder="Type your Description here."
							className="resize-none h-36"
							maxLength={200}
							value={description}
							onChange={(e) => setDescription(e.target.value)}
						/>
						<p className="text-sm text-gray-500 text-right">
							{description.length} / 200 characters
						</p>
					</div>
					<div className="mt-6">
						<MediaPicker />
					</div>
					<Button className="w-full mt-4">Add Product</Button>
				</form>
			</CardContent>
		</Card>
	);
};

export default AddProduct;
