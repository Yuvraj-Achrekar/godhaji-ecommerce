import HeroProducts from "@/components/products/heroProducts";
import React, { use } from "react";

const CategoryProductsPage = ({
	params,
}: {
	params: Promise<{ category_id: string }>;
}) => {
	const { category_id } = use(params);
	return (
		<div>
			<HeroProducts />
		</div>
	);
};

export default CategoryProductsPage;
