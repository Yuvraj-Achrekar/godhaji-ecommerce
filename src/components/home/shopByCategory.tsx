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
		<section className="container max-w-6xl mx-auto py-10">
			<h2 className="section-title">Shop By Category</h2>
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 justify-center">
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
