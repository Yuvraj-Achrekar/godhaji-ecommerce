"use client";
import { useCategories } from "@/hooks/queries";
import { Skeleton } from "../ui/skeleton";
import Image from "next/image";

const categoriesList = [
	{ name: "Pickle", image: "/assets/sliders/3.png" },
	{ name: "Amla", image: "/assets/sliders/1.png" },
	{ name: "Papad", image: "/assets/sliders/2.png" },
	{ name: "Snacks", image: "/assets/sliders/1.png" },
];

const ShopByCategory = () => {
	const { data, isLoading } = useCategories();
	return (
		<section className="section-container">
			<h2 className="section-title mb-2 md:mb-4 text-[#666666]">
				Shop By Category
			</h2>
			<div className="w-20 sm:w-24 h-[5px] mb-2 md:mb-4 rounded-3xl bg-[#b36949]" />

			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center w-full p-4 md:p-0">
				{isLoading
					? Array.from({ length: 4 }, (_, i) => (
							<div
								className="flex flex-col items-center justify-center aspect-square bg-transparent"
								key={i}>
								<Skeleton className="w-full h-full max-w-[400px] aspect-square mb-2" />
								<Skeleton className="h-5 w-16" />
							</div>
					  ))
					: data?.map((category, index) => (
							<div
								key={index}
								className="flex flex-col items-center justify-center aspect-square bg-transparent">
								<Image
									src={category.image_url}
									alt={category.name}
									height={400}
									width={400}
									className="aspect-square mb-2"
								/>
								<span className="text-sm font-medium text-gray-700">
									{category.name}
								</span>
							</div>
					  ))}
			</div>
		</section>
	);
};

export default ShopByCategory;
