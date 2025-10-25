import BestSeller from "@/components/home/bestSellers";
import ProductDetails from "@/components/products/productDetails";
const ProductPage = async ({
	params,
}: {
	params: Promise<{ product_slug: string }>;
}) => {
	const { product_slug } = await params;
	return (
		<div>
			<ProductDetails product_slug={product_slug} />
			<BestSeller />
		</div>
	);
};

export default ProductPage;
