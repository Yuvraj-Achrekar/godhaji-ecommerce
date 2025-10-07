const categoriesList = [
	{ name: "Pickle", image: "/assets/sliders/3.png" },
	{ name: "Amla", image: "/assets/sliders/1.png" },
	{ name: "Papad", image: "/assets/sliders/2.png" },
	{ name: "Snacks", image: "/assets/sliders/1.png" },
];

const ShopByCategory = () => {
	return (
		<section className="section-container">
			<h2 className="section-title mb-2 md:mb-4 text-[#666666]">
				Shop By Category
			</h2>
			<div className="w-20 sm:w-24 h-[5px] mb-2 md:mb-4 rounded-3xl bg-[#b36949]" />

			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center w-full">
				{categoriesList.map((category, index) => (
					<div
						key={index}
						className="flex flex-col items-center justify-center aspect-square bg-transparent p-4">
						<img
							src={category.image}
							alt={category.name}
							className=" object-contain mb-2"
						/>
						<span className="text-sm font-medium text-gray-700">
							{category.name}
						</span>
					</div>
				))}
			</div>
		</section>
	);
};

export default ShopByCategory;
