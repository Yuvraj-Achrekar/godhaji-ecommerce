import { Heart, Share2 } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { ReviewRating } from "../reviewRating";

export const ProductCard = ({
	productDetail,
}: {
	productDetail: {
		name: string;
		description: string;
		selling_price: number;
		mrp: number;
		category: string;
		rating: number;
		ratingCount: number;
		off: string;
	};
}) => {
	return (
		<Card className="p-2 md:p-4 gap-2 border-none rounded-[8px] transition-transform transform hover:-translate-y-1">
			<div className="relative rounded-[4px]">
				<Image
					src={"/assets/home/demo_product.png"}
					height={128}
					width={128}
					alt={productDetail.name}
					className="w-full h-full aspect-square object-cover rounded-[4px]"
				/>
				<div className="absolute left-2 top-2 bg-red-600 text-white text-xs sm:text-sm font-semibold px-4 py-1 rounded-[30px]">
					{productDetail.off} OFF
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

			<div className="flex flex-col">
				<div>
					<span className="text-xs">{productDetail.category}</span>
					<h2 className="text-base sm:text-lg md:text-xl font-semibold leading-6">
						{productDetail.name}
					</h2>
				</div>
				<div>
					<ReviewRating
						rating={productDetail.rating}
						ratingCount={productDetail.ratingCount}
					/>

					<div className="flex justify-between items-center">
						<div className="flex items-center gap-2">
							<span className="text-sm sm:text-base md:text-lg font-[600]">
								Rs. {productDetail.selling_price}
							</span>
							<span className="text-xs sm:text-sm line-through text-gray-400">
								Rs. {productDetail.mrp}
							</span>
						</div>
					</div>
				</div>
			</div>
			<Button className="rounded-[4px]">
				<span className="font-medium text-sm">ADD TO CART</span>
			</Button>
		</Card>
	);
};
