import ProductCarousel from "@/components/products/productCarousel";
import { Minus, Plus } from "lucide-react";
import { ProductInfoWithSlug } from "@/hooks/queries";
import { useEffect, useState } from "react";
import ProductCarouselSkeleton from "../skeleton/productCarouselSkeleton";
import { ReviewRating } from "../reviewRating";
import { Skeleton } from "../ui/skeleton";
import { calculateDiscount } from "@/lib/helpers";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ProductInfoSkeleton from "../skeleton/productInfoSkeleton";

const ProductInfo = ({
	data,
	isLoading,
}: {
	data: ProductInfoWithSlug;
	isLoading: boolean;
}) => {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const router = useRouter();
	const variantIdFromUrl = searchParams.get("variant");

	const [quantity, setQuantity] = useState(1);
	const [selectedVariant, setSelectedVariant] = useState<string | undefined>(
		undefined
	);

	// Pick default variant from data
	const getDefaultVariant = () => {
		if (!data?.product_variants?.length) return undefined;
		return (
			data.product_variants.find((v) => v.name === variantIdFromUrl)?.name ||
			data.product_variants.find((v) => v.is_default)?.name ||
			data.product_variants[0].name
		);
	};

	// Keep URL and selectedVariant in sync
	useEffect(() => {
		if (!data || isLoading) return;

		const currentVariant = variantIdFromUrl || getDefaultVariant();
		setSelectedVariant(currentVariant);

		if (!variantIdFromUrl && currentVariant) {
			const params = new URLSearchParams(searchParams);
			params.set("variant", currentVariant);
			router.replace(`${pathname}?${params.toString()}`, { scroll: false });
		}
	}, [data, variantIdFromUrl]);

	const handleTVariantChange = (variant: string) => {
		const params = new URLSearchParams(searchParams);
		params.set("variant", variant); // set or update param
		router.push(`${pathname}?${params.toString()}`, { scroll: false });
		setSelectedVariant(variant);
	};

	const currentVariantData = data?.product_variants?.find(
		(v) => v.name === selectedVariant
	);

	return (
		<section className="custom-container h-full lg:min-h-screen">
			<div className="bg-gray-400 h-12" />
			<div className="flex flex-col md:flex-row gap-6 w-full h-full max-w-6xl mx-auto py-10 px-4">
				<div className="w-full md:w-[50%] h-full">
					{isLoading ? (
						<ProductCarouselSkeleton />
					) : (
						<ProductCarousel
							images={data.product_images}
							discount={calculateDiscount(
								data.product_variants[0].mrp,
								data.product_variants[0].selling_price
							)}
						/>
					)}
				</div>
				{/* {!currentVariantData ? (
					<div className="w-full md:w-[50%] flex flex-col items-center justify-center text-5xl font-semibold">
						Variant Not Found
					</div>
				) : ( */}
				<div className="w-full md:w-[50%] flex flex-col">
					{isLoading || !currentVariantData ? (
						<ProductInfoSkeleton />
					) : (
						<div className="flex flex-col gap-4 border-b-2 border-gray-300 pb-6">
							{/* Product Info */}
							<div className="space-y-1 font-medium text-gray-900">
								<p>{data.category_name.name}</p>
								<h1 className="text-5xl">{data.name}</h1>
							</div>
							<div className="flex items-center gap-3">
								<ReviewRating
									rating={data.average_rating}
									ratingCount={data.total_reviews}
								/>
							</div>

							{/* Description */}
							<p className="text-gray-700 leading-relaxed">
								{data.description}
							</p>

							{/* Price */}
							<div className="flex items-baseline gap-3 font-medium">
								<span className="text-3xl text-gray-900">
									₹ {currentVariantData.selling_price}
								</span>
								<span className="text-lg text-gray-500 line-through">
									₹ {currentVariantData.mrp}
								</span>
							</div>
						</div>
					)}

					{/* Weight Selection */}
					<div className="my-6 flex flex-col gap-4">
						<label className="text-sm font-semibold text-gray-900">
							Weight
						</label>
						<div className="flex gap-3">
							{isLoading
								? Array.from({ length: 3 }, (_, i) => (
										<Skeleton className="h-10 w-20 rounded-lg" key={i} />
								  ))
								: data.product_variants.map((weight) => (
										<button
											key={weight.name}
											onClick={() => handleTVariantChange(weight.name)}
											className={`px-4 py-2 rounded-lg  text-sm font-medium transition ${
												selectedVariant === weight.name
													? "active-button"
													: "inactive-button"
											}`}>
											{weight.name}
										</button>
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
							<button
								className="grow py-2 lg:py-3 border-2 rounded-lg bg-white hover:bg-primary-foreground"
								disabled={isLoading}>
								Add to Cart
							</button>
						</div>

						{/* Action Buttons */}
						<button
							className="w-full py-2 lg:py-3 border-2 rounded-lg bg-primary text-white disabled:bg-gray-500 disabled:cursor-not-allowed"
							disabled={isLoading}>
							Buy Now
						</button>
					</div>
				</div>
				{/* )} */}
			</div>
		</section>
	);
};

export default ProductInfo;
