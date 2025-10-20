import BestSeller from "@/components/home/bestSellers";
import ProductDetails from "@/components/products/productDetails";
import TabsSection from "@/components/products/tabsSection";

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
				<TabsSection />
				<BestSeller />
			</div>
		);
	};

export default ProductPage;
