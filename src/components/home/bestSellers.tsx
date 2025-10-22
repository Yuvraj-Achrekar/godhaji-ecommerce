import { ProductCard } from "../cards/productCard";

const categoriesList = [
	{
		subject: "Lemon Pickle",
		description:
			"Brighten up your plate with Godha Brother's lime pickle! Juicy, fresh and tangy taste.",
		price: "Rs.100",
		cancelPrice: "Rs200",
		category: "Pickle",
		rating: 4.7,
		ratingCount: 150,
		off: "50%",
	},
	{
		subject: "Lemon Pickle",
		description:
			"Brighten up your plate with Godha Brother's lime pickle! Juicy, fresh and tangy taste.",
		price: "Rs.100",
		cancelPrice: "Rs200",
		category: "Pickle",
		rating: 3.5,
		ratingCount: 1500,
		off: "50%",
	},
	{
		subject: "Lemon Pickle",
		description:
			"Brighten up your plate with Godha Brother's lime pickle! Juicy, fresh and tangy taste.",
		price: "Rs.100",
		cancelPrice: "Rs200",
		category: "Pickle",
		rating: 3.7,
		ratingCount: 1500,
		off: "50%",
	},
	{
		subject: "Lemon Pickle",
		description:
			"Brighten up your plate with Godha Brother's lime pickle! Juicy, fresh and tangy taste.",
		price: "Rs.100",
		cancelPrice: "Rs200",
		category: "Pickle",
		rating: 5,
		ratingCount: 1500,
		off: "50%",
	},
];

// Format count into 1.5k etc
const formatCount = (count: number) => {
	if (count >= 1000) {
		return (count / 1000).toFixed(1).replace(/\.0$/, "") + "k";
	}
	return count.toString();
};

const BestSeller = () => {
	// const navigate
	return (
		<section className="section-container">
			<h2 className="section-title mb-2 md:mb-4 text-[#666666]">
				Our BestSellers
			</h2>
			<div className="w-20 sm:w-24 h-[5px] mb-2 md:mb-4 rounded-3xl bg-[#b36949]" />
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center w-full">
				{categoriesList.map((category, index) => {
					const totalStars = 5;
					const filledStars = Math.floor(category.rating);
					const emptyStars = totalStars - filledStars;

					return (
						<ProductCard
							key={index}
							productDetail={category}
							stars={{ emptyStars, filledStars }}
							formatCount={formatCount}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default BestSeller;
