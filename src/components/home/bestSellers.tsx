import { ProductCard } from "../cards/productCard";
import { categoriesList } from "../../../testData";

const BestSeller = () => {
	// const navigate
	return (
		<section className="section-container">
			<h2 className="section-title mb-2 md:mb-4 text-[#666666]">
				Our BestSellers
			</h2>
			<div className="w-20 sm:w-24 h-[5px] mb-2 md:mb-4 rounded-3xl bg-[#b36949]" />
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center w-full">
				{/* {categoriesList.map((category, index) => {
					return <ProductCard key={index} productDetail={category} />;
				})} */}
			</div>
		</section>
	);
};

export default BestSeller;
