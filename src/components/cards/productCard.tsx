"use client";
import { Heart, Share2 } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { ReviewRating } from "../reviewRating";
import { useRouter } from "next/navigation";
import { ProductWithVariantsAndImages } from "@/hooks/queries";

export const ProductCard = ({
	productDetail,
}: {
	productDetail: ProductWithVariantsAndImages;
}) => {
	const router = useRouter();

	const discount = (
		((productDetail.product_variants[0].mrp -
			productDetail.product_variants[0].selling_price) *
			100) /
		productDetail.product_variants[0].mrp
	).toFixed(0);

	console.log(productDetail.product_images);

	return (
		<Card
			className="p-2 md:p-4 gap-2 border-none rounded-[8px] transition-transform transform hover:-translate-y-1 cursor-pointer"
			onClick={() => {
				router.push(`/products/${productDetail.slug}`);
			}}>
			<div className="relative rounded-[4px]">
				<Image
					src={productDetail.product_images[0].image_url}
					height={128}
					width={128}
					alt={productDetail.name}
					quality={90}
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					className="w-full h-full aspect-square  rounded-[4px]"
				/>
				<div className="absolute left-2 top-2 bg-red-600 text-white text-xs sm:text-sm font-semibold px-4 py-1 rounded-[30px]">
					{discount}% OFF
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
					<span className="text-xs">{productDetail.category_name.name}</span>
					<h2 className="text-base sm:text-lg md:text-xl font-semibold leading-6">
						{productDetail.name}
					</h2>
				</div>
				<div>
					<ReviewRating
						rating={productDetail.average_rating}
						ratingCount={productDetail.total_reviews}
					/>

					<div className="flex justify-between items-center">
						<div className="flex items-center gap-2">
							<span className="text-sm sm:text-base md:text-lg font-[600]">
								Rs. {productDetail.product_variants[0].selling_price}
							</span>
							<span className="text-xs sm:text-sm line-through text-gray-400">
								Rs. {productDetail.product_variants[0].mrp}
							</span>
						</div>
					</div>
				</div>
			</div>
			<Button
				className="rounded-[4px]"
				onClick={(e) => {
					e.stopPropagation();
				}}>
				<span className="font-medium text-sm">ADD TO CART</span>
			</Button>
		</Card>
	);
};
