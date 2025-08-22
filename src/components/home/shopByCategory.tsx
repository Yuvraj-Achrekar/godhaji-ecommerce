const categoriesList = [
	"Fruits & Vegetables",
	"Meat & Fish",
	"Dairy & Eggs",
	"Beverages",
	"Snacks & Sweets",
	"Bakery & Bread",
	"Frozen Foods",
	"Condiments & Sauces",
];

const ShopByCategory = () => {
	return (
		<section className="section-container">
			<h2 className="section-title">Shop By Category</h2>
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center w-full">
				{categoriesList.map((category, index) => (
					<div key={index} className="aspect-square rounded-md bg-[#D9D9D9]">
						{category}
					</div>
				))}
			</div>
		</section>
	);
};

export default ShopByCategory;
