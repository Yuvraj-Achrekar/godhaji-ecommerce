import ProductCarousel from "@/components/products/productCarousel";
import Image from "next/image";

const ProductPage = async ({
	params,
}: {
	params: Promise<{ product_slug: string }>;
}) => {
	// const params = useSearchParams();
	const { product_slug } = await params;

	return (
		<div>
			<div className="custom-container">
				<div className="bg-gray-400 h-12"></div>
				<div className="flex flex-col lg:flex-row gap-6 w-full bg-amber-300 max-w-6xl mx-auto mt-10">
					<div className="w-1/2">
						<ProductCarousel />
						{/* <Image
							src={"/assets/home/demo_product.png"}
							alt="product Image"
							height={200}
							width={200}
							className="w-full aspect-square"
						/> */}
					</div>
					<div className="flex-1">
						<div>title-desc</div>
						<div>variants</div>
						<div>buttons</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductPage;
