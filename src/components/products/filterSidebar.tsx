"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FilterSidebar() {
	const [expandedSections, setExpandedSections] = useState({
		categories: true,
		taste: true,
		price: true,
		shelfLife: true,
	});

	const toggleSection = (section: string) => {
		setExpandedSections((prev) => ({
			...prev,
			[section]: !prev[section],
		}));
	};

	return (
		<div className="space-y-6">
			{/* Categories */}
			<div>
				<button
					onClick={() => toggleSection("categories")}
					className="flex items-center justify-between w-full mb-4">
					<h3 className="text-sm font-bold text-[#121212] uppercase">
						Categories
					</h3>
					<ChevronDown
						size={16}
						className={`transition ${
							expandedSections.categories ? "rotate-180" : ""
						}`}
					/>
				</button>
				{expandedSections.categories && (
					<div className="space-y-3">
						{[
							"All Products",
							"Pickle",
							"Amla",
							"Papad",
							"Snacks",
							"Combos",
						].map((cat) => (
							<label
								key={cat}
								className="flex items-center gap-2 cursor-pointer">
								<input
									type="checkbox"
									defaultChecked={cat === "Pickle"}
									className="w-4 h-4"
								/>
								<span
									className={`text-sm ${
										cat === "Pickle"
											? "font-semibold text-[#121212]"
											: "text-[#656565]"
									}`}>
									{cat}
								</span>
							</label>
						))}
					</div>
				)}
			</div>

			{/* Taste/Flavor */}
			<div>
				<button
					onClick={() => toggleSection("taste")}
					className="flex items-center justify-between w-full mb-4">
					<h3 className="text-sm font-bold text-[#121212] uppercase">
						Taste / Flavor
					</h3>
					<ChevronDown
						size={16}
						className={`transition ${
							expandedSections.taste ? "rotate-180" : ""
						}`}
					/>
				</button>
				{expandedSections.taste && (
					<div className="space-y-3">
						{["All Flavors", "Spicy", "Mild", "Tangy", "Sweet", "Mixed"].map(
							(flavor) => (
								<label
									key={flavor}
									className="flex items-center gap-2 cursor-pointer">
									<input type="checkbox" className="w-4 h-4" />
									<span className="text-sm text-[#656565]">{flavor}</span>
								</label>
							)
						)}
					</div>
				)}
			</div>

			{/* Price */}
			<div>
				<button
					onClick={() => toggleSection("price")}
					className="flex items-center justify-between w-full mb-4">
					<h3 className="text-sm font-bold text-[#121212] uppercase">Price</h3>
					<ChevronDown
						size={16}
						className={`transition ${
							expandedSections.price ? "rotate-180" : ""
						}`}
					/>
				</button>
				{expandedSections.price && (
					<div className="space-y-3">
						<div className="h-2 bg-[#e9e9e9] rounded-full overflow-hidden">
							<div className="h-full bg-[#9b4f2e] w-1/2"></div>
						</div>
						<div className="text-xs text-[#656565]">Rs.0 - Rs.500</div>
					</div>
				)}
			</div>

			{/* Shelf Life */}
			<div>
				<button
					onClick={() => toggleSection("shelfLife")}
					className="flex items-center justify-between w-full mb-4">
					<h3 className="text-sm font-bold text-[#121212] uppercase">
						Shelf Life
					</h3>
					<ChevronDown
						size={16}
						className={`transition ${
							expandedSections.shelfLife ? "rotate-180" : ""
						}`}
					/>
				</button>
				{expandedSections.shelfLife && (
					<div className="space-y-3">
						{[
							"All",
							"Less than 6 months",
							"6-12 months",
							"More than 1 year",
						].map((life) => (
							<label
								key={life}
								className="flex items-center gap-2 cursor-pointer">
								<input
									type="checkbox"
									defaultChecked={life === "All"}
									className="w-4 h-4"
								/>
								<span
									className={`text-sm ${
										life === "All"
											? "font-semibold text-[#121212]"
											: "text-[#656565]"
									}`}>
									{life}
								</span>
							</label>
						))}
					</div>
				)}
			</div>
		</div>
	);
}
