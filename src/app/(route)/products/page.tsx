import FaqSection from "@/components/home/faqSection";
import HeroProduct from "@/components/products/heroProduct";
import ProductList from "@/components/products/productList";
import React from "react";

const CategoryPage = () => {
	return (
		<div>
			<HeroProduct />
			<ProductList />
			<FaqSection />
		</div>
	);
};

export default CategoryPage;
