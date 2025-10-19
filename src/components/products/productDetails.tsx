"use client";
import ProductCarousel from "@/components/products/productCarousel";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";

const ProductDetails = () => {
	const [quantity, setQuantity] = useState(1);
	const [selectedWeight, setSelectedWeight] = useState("200gm");
	return (
		<section className="custom-container h-full lg:min-h-screen">
			<div className="bg-gray-400 h-12"></div>
			<div className="flex flex-col lg:flex-row gap-6 w-full h-full max-w-6xl mx-auto my-10">
				<div className="w-full md:w-[50%] h-full">
					<ProductCarousel />
				</div>
				<div className="w-full md:w-[50%] flex flex-col">
					<div className="flex flex-col gap-4 border-b-2 border-gray-300 pb-6">
						{/* Product Info */}
						<div className="space-y-1 font-medium text-gray-900">
							<p>Pickle</p>
							<h1 className="text-5xl">Lemon Pickle</h1>
						</div>
						<div className="flex items-center gap-3">
							<div className="flex gap-1">
								{[...Array(5)].map((_, i) => (
									<span key={i} className="text-yellow-400 text-lg">
										★
									</span>
								))}
							</div>
							<span className="text-sm text-gray-600">11 Reviews</span>
						</div>

						{/* Description */}
						<p className="text-gray-700 leading-relaxed">
							Brighten up your palate with Godha Brother's lime pickle! Juicy,
							fresh limes like homemade. Tangy taste for every meal, packed with
							flavor.
						</p>

						{/* Price */}
						<div className="flex items-baseline gap-3 font-medium">
							<span className="text-3xl text-gray-900">Rs.100</span>
							<span className="text-lg text-gray-500 line-through">Rs.200</span>
						</div>
					</div>

					{/* Weight Selection */}
					<div className="my-6 flex flex-col gap-4">
						<label className="text-sm font-semibold text-gray-900">
							Weight
						</label>
						<div className="flex gap-3">
							{["200gm", "250gm", "500gm"].map((weight) => (
								<Button
									key={weight}
									onClick={() => setSelectedWeight(weight)}
									className={`px-4 py-2 rounded-lg  text-sm font-medium transition ${
										selectedWeight === weight
											? "bg-primary text-white"
											: "bg-gray-200 text-black hover:border-gray-300 hover:text-white"
									}`}>
									{weight}
								</Button>
							))}
						</div>
					</div>

					{/* Quantity and Buttons */}
					<div className="my-4 space-y-4 w-full">
						<div className="flex gap-4">
							{/* Quantity Selector */}
							<div className="flex items-center border border-gray-300 rounded-lg">
								<button
									onClick={() => setQuantity(Math.max(1, quantity - 1))}
									className="p-2 hover:bg-gray-100">
									<Minus className="w-4 h-4 text-gray-700" />
								</button>
								<span className="px-6 py-2 text-gray-900 font-medium">
									{quantity}
								</span>
								<button
									onClick={() => setQuantity(quantity + 1)}
									className="p-2 hover:bg-gray-100">
									<Plus className="w-4 h-4 text-gray-700" />
								</button>
							</div>
							<button className="grow py-4 border-2 rounded-lg bg-white  hover:bg-primary-foreground">
								Add to Cart
							</button>
						</div>

						{/* Action Buttons */}
						<button className="w-full py-4 border-2 rounded-lg bg-primary text-white ">
							Buy Now
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProductDetails;
