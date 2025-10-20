"use client";

import { useState } from "react";
import FilterSidebar from "./filterSidebar";

const products = Array.from({ length: 12 }, (_, i) => ({
	id: i + 1,
	name: "Lemon Pickle",
	price: 100,
	originalPrice: 200,
	discount: 50,
	rating: 5,
	reviews: 1000,
	image: "/lemon-pickle-jar.jpg",
}));

export default function ProductList() {
	const [sortBy, setSortBy] = useState("popularity");

	return (
		<section className="bg-white py-12">
			<div className="max-w-7xl mx-auto px-4">
				{/* Header with Filter and Sort */}
				<div className="flex items-center justify-between mb-8">
					<div className="flex items-center gap-2">
						<span className="text-[#9b4f2e] text-lg">⚙️</span>
						<span className="text-[#121212] font-semibold">Filter</span>
					</div>
					<div className="flex items-center gap-4">
						<span className="text-[#121212] font-semibold">Pickle</span>
						<div className="flex items-center gap-2">
							<span className="text-sm text-[#656565]">Sort by</span>
							<select
								value={sortBy}
								onChange={(e) => setSortBy(e.target.value)}
								className="text-sm text-[#121212] bg-white border border-[#e9e9e9] rounded px-3 py-2 cursor-pointer">
								<option value="popularity">Popularity</option>
								<option value="price-low">Price: Low to High</option>
								<option value="price-high">Price: High to Low</option>
								<option value="newest">Newest</option>
							</select>
						</div>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					{/* Sidebar */}
					<div className="md:col-span-1">
						<FilterSidebar />
					</div>

					{/* Products Grid */}
					<div className="md:col-span-3">
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
							{products.map((product) => (
								// <ProductCard key={product.id} product={product} />
								<div>Hii</div>
							))}
						</div>

						{/* Load More Button */}
						<div className="flex justify-center mt-12">
							<button className="px-8 py-2 border border-[#121212] text-[#121212] rounded hover:bg-[#f2f2f2] transition font-medium">
								Load more
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
