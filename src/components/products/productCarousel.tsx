"use client";

import { useState } from "react";
import {
	Heart,
	Share2,
	ChevronLeft,
	ChevronRight,
	Minus,
	Plus,
} from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";
import { handleCopyLink } from "@/lib/helpers";

export default function ProductCarousel({
	images = [],
	discount,
}: {
	images:
		| {
				image_url: string;
				is_primary: boolean;
		  }[]
		| undefined;
	discount: number;
}) {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	return (
		<div className="flex flex-col gap-4 w-full h-full">
			{/* Main Image */}
			<div className="relative bg-orange-50 w-full overflow-hidden aspect-square md:h-[460px] ">
				<Image
					src={images[currentImageIndex].image_url || "/placeholder.svg"}
					alt="Product"
					fill
					className="object-cover"
				/>

				{/* Discount Badge */}
				<div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
					{discount}% off
				</div>

				{/* Action Buttons */}
				<button className="absolute top-4 right-4 p-2 bg-white rounded-full hover:bg-gray-100">
					<Heart className="w-5 h-5 text-gray-700" />
				</button>
				<button
					className="absolute top-14 right-4 p-2 bg-white rounded-full hover:bg-gray-100"
					onClick={handleCopyLink}>
					<Share2 className="w-5 h-5 text-gray-700" />
				</button>

				{/* Navigation Arrows */}
				<button
					onClick={() =>
						setCurrentImageIndex(
							(prev) => (prev - 1 + images.length) % images.length
						)
					}
					className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full hover:bg-gray-100">
					<ChevronLeft className="w-5 h-5 text-gray-700" />
				</button>
				<button
					onClick={() =>
						setCurrentImageIndex((prev) => (prev + 1) % images.length)
					}
					className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full hover:bg-gray-100">
					<ChevronRight className="w-5 h-5 text-gray-700" />
				</button>
			</div>

			{/* Thumbnails */}
			<div className="flex gap-3 overflow-x-auto scrollbar-default">
				{images.map((thumb, index) => (
					<button
						key={index}
						onClick={() => setCurrentImageIndex(index)}
						className={`relative flex-shrink-0 w-1/3 aspect-square border-2 ${
							currentImageIndex === index ? "border-primary" : "border-gray-200"
						}`}>
						<Image
							src={thumb.image_url || "/placeholder.svg"}
							alt={`Thumbnail ${index + 1}`}
							fill
							className="object-cover"
						/>
					</button>
				))}
			</div>
		</div>
	);
}
