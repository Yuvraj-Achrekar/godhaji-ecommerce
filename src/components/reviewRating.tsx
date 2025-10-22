import StarRating from "./starRating";

export const ReviewRating = ({
	rating,
	ratingCount,
}: {
	rating: number;
	ratingCount: number;
}) => {
	const formatCount = (count: number) => {
		if (count >= 1000) {
			return (count / 1000).toFixed(1).replace(/\.0$/, "") + "k";
		}
		return count.toString();
	};
	return (
		<div className="flex items-center gap-1 md:gap-2">
			<span className="text-xs md:text-sm text-gray-800">
				{rating.toFixed(2)}
			</span>
			<div className="flex my-2">
				<StarRating rating={rating} size={16} />
			</div>
			<span className="text-xs md:text-sm text-gray-500">
				({formatCount(ratingCount)})
			</span>
		</div>
	);
};
