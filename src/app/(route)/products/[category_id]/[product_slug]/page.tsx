import ProductDetails from "@/components/products/productDetails";

const ProductPage = () =>
	// 	{
	// 	params,
	// }: {
	// 	params: Promise<{ product_slug: string }>;
	// 	}
	{
		// const params = useSearchParams();
		// const { product_slug } = await params;

		return (
			<div>
				<ProductDetails />
			</div>
		);
	};

export default ProductPage;
