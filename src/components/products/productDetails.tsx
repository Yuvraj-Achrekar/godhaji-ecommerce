"use client";

import { useProductBySlug } from "@/hooks/queries";
import TabsSection from "./tabsSection";
import ProductInfo from "./productInfo";

const ProductDetails = ({ product_slug }: { product_slug: string }) => {
	const { data, isLoading } = useProductBySlug(product_slug);

	return (
		<div>
			<ProductInfo data={data!} isLoading={isLoading} />
			<TabsSection ingredientsList={data?.ingredients} isLoading={isLoading} />
		</div>
	);
};

export default ProductDetails;
