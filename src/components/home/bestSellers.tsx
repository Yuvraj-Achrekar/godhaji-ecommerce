import { ChevronRight, Heart, Share2 } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

const categoriesList = [
	{
		subject: "Lemon Pickle",
		description:
			"Brighten up your plate with Godha Brother's lime pickle! Juicy, fresh and tangy taste.",
		price: "Rs.100",
		cancelPrice: "Rs200",
		category: "Pickle",
		rating: 4.5,
		ratingCount: 1500,
		off: "50%",
	},
	{
		subject: "Lemon Pickle",
		description:
			"Brighten up your plate with Godha Brother's lime pickle! Juicy, fresh and tangy taste.",
		price: "Rs.100",
		cancelPrice: "Rs200",
		category: "Pickle",
		rating: 4.5,
		ratingCount: 1500,
		off: "50%",
	},
	{
		subject: "Lemon Pickle",
		description:
			"Brighten up your plate with Godha Brother's lime pickle! Juicy, fresh and tangy taste.",
		price: "Rs.100",
		cancelPrice: "Rs200",
		category: "Pickle",
		rating: 4.5,
		ratingCount: 1500,
		off: "50%",
	},
	{
		subject: "Lemon Pickle",
		description:
			"Brighten up your plate with Godha Brother's lime pickle! Juicy, fresh and tangy taste.",
		price: "Rs.100",
		cancelPrice: "Rs200",
		category: "Pickle",
		rating: 4.5,
		ratingCount: 1500,
		off: "50%",
	},
];

// Format count into 1.5k etc
const formatCount = (count: number) => {
	if (count >= 1000) {
		return (count / 1000).toFixed(1).replace(/\.0$/, "") + "k";
	}
	return count.toString();
};

const BestSeller = () => {
	return (
		<section className="section-container">
			<h2 className="section-title mb-2 md:mb-4 text-[#666666]">
				Our BestSellers
			</h2>
			<div className="w-20 sm:w-24 h-[5px] mb-2 md:mb-4 rounded-3xl bg-[#b36949]" />
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center w-full">
				{categoriesList.map((category, index) => {
					const totalStars = 5;
					const filledStars = Math.floor(category.rating);
					const emptyStars = totalStars - filledStars;

					return (
						<div
							key={index}
							className="flex flex-col justify-between bg-white rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1 p-2 md:p-4 gap-2">
							<div className="relative">
								<Image
									src={"/assets/home/demo_product.png"}
									height={128}
									width={128}
									alt={category.subject}
									className="w-full h-full aspect-square object-cover rounded-lg"
								/>
								<div className="absolute left-2 top-2 bg-red-600 text-white text-xs sm:text-sm font-semibold px-4 py-1 rounded-[30px]">
									{category.off} OFF
								</div>
								<div className="absolute top-2 right-2 flex flex-col gap-2">
									<div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-white shadow-md cursor-pointer">
										<Heart size={14} className="text-red-500" />
									</div>
									<div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-white shadow-md cursor-pointer">
										<Share2 size={14} className="text-gray-700" />
									</div>
								</div>
							</div>

							<div className="flex flex-col gap-1">
								<div>
									<span className="text-xs">{category.category}</span>
									<h2 className="text-base sm:text-lg md:text-xl font-semibold">
										{category.subject}
									</h2>
								</div>
								<div>
									<div className="flex items-center gap-1 ">
										<span className="text-sm font-medium text-gray-800">
											{category.rating}
										</span>
										<div className="flex">
											{[...Array(filledStars)].map((_, i) => (
												<span
													key={i}
													className="text-yellow-400 text-sm sm:text-base">
													★
												</span>
											))}
											{[...Array(emptyStars)].map((_, i) => (
												<span
													key={i}
													className="text-gray-300 text-sm sm:text-base">
													★
												</span>
											))}
										</div>
										<span className="text-xs sm:text-sm text-gray-500">
											({formatCount(category.ratingCount)})
										</span>
									</div>

									<div className="flex justify-between items-center">
										<div className="flex items-center gap-2">
											<span className="text-sm sm:text-base md:text-lg font-[600]">
												{category.price}
											</span>
											<span className="text-xs sm:text-sm line-through text-gray-400">
												{category.cancelPrice}
											</span>
										</div>
									</div>
								</div>
								<Button className="bg-[#b36949] hover:bg-[#b36949] justify-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg rounded-[5px] flex items-center">
									<span className="font-medium text-sm">ADD TO CART</span>
								</Button>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default BestSeller;
