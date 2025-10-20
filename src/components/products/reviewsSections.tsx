import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Separator } from "../ui/separator";
import { Textarea } from "../ui/textarea";

const ReviewsSections = ({
	reviews = [],
}: {
	reviews: {
		id: number;
		author: string;
		rating: number;
		title: string;
		content: string;
		time: string;
		avatar: string;
	}[];
}) => {
	return (
		<div>
			<h3 className="text-3xl font-medium mb-8">Customer Reviews</h3>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
				{/* Rating Summary */}
				<div className="space-y-6">
					{/* Overall Rating */}
					<div className="space-y-2">
						<div className="flex gap-1">
							{[...Array(5)].map((_, i) => (
								<span key={i} className="text-yellow-400 text-2xl">
									★
								</span>
							))}
						</div>
						<div className="flex h-full items-baseline gap-2">
							<div className="border-r-2 pr-4 space-x-2">
								<span className="text-5xl font-bold text-gray-900">4.8</span>
								<span className="text-2xl text-gray-600">out of 5</span>
							</div>
							<Separator orientation="vertical" />
							<p className="text-2xl text-gray-600">11 Reviews</p>
						</div>
					</div>

					{/* Rating Bars */}
					<div className="space-y-3">
						{[
							{ stars: 5, count: 8 },
							{ stars: 4, count: 2 },
							{ stars: 3, count: 1 },
							{ stars: 2, count: 0 },
							{ stars: 1, count: 0 },
						].map(({ stars, count }) => (
							<div key={stars} className="flex items-center gap-3">
								<span className="text-sm text-gray-600 w-12">{stars} Star</span>
								<div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
									<div
										className="h-full bg-yellow-400"
										style={{ width: `${(count / 8) * 100}%` }}></div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Review Form */}
				<div className="lg:col-span-2 space-y-6">
					<div className="space-y-4">
						<div className="flex items-center gap-4">
							<Image
								src={"/assets/home/demo_product.png"}
								height={68}
								width={68}
								alt="product-image"
								className="aspect-square"
							/>
							<label className="block text-sm font-medium text-gray-900 mb-2">
								How was the item?
							</label>
						</div>
						<div className="flex gap-2">
							{/* star Rating */}
							{[...Array(5)].map((_, i) => (
								<button
									key={i}
									className="text-3xl text-gray-300 hover:text-yellow-400 transition">
									★
								</button>
							))}
						</div>
						<Textarea
							placeholder="What should other customers know?"
							className="resize-none h-24"
							rows={4}
						/>
					</div>

					{/* Buttons */}
					<div className="flex gap-4">
						<button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition">
							Clear
						</button>
						<button className="px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition">
							Submit Review
						</button>
					</div>
				</div>
			</div>
			{/* Reviews List */}
			<div className="mt-12 space-y-8">
				<div className="flex items-center justify-between">
					<h3 className="text-lg font-bold text-gray-900">11 Reviews</h3>
					<select className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700">
						<option>Newest</option>
						<option>Oldest</option>
						<option>Highest Rated</option>
					</select>
				</div>

				{reviews.map((review) => (
					<div
						key={review.id}
						className="flex gap-4 pb-8 border-b border-gray-200">
						{/* Avatar */}
						<div className="flex-shrink-0">
							<Avatar className="w-12 h-12">
								<AvatarImage src="/assets/home/person.jpg" />
								<AvatarFallback>CN</AvatarFallback>
							</Avatar>
						</div>

						{/* Review Content */}
						<div className="flex-1 space-y-2">
							<h4 className="font-semibold text-gray-900">{review.author}</h4>
							<div className="flex gap-1">
								{[...Array(review.rating)].map((_, i) => (
									<span key={i} className="text-yellow-400 text-sm">
										★
									</span>
								))}
							</div>
							<p className="text-sm font-medium text-gray-700">
								{review.title}
							</p>
							<p className="text-sm text-gray-600 leading-relaxed">
								{review.content}
							</p>
							<div className="flex gap-4 pt-2">
								<span className="text-xs text-gray-500">{review.time}</span>
								<button className="text-xs text-gray-600 hover:text-gray-900">
									Like
								</button>
								<button className="text-xs text-gray-600 hover:text-gray-900">
									Reply
								</button>
							</div>
						</div>
					</div>
				))}

				{/* Load More */}
				<div className="text-center pt-8">
					<button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition">
						Load more
					</button>
				</div>
			</div>
		</div>
	);
};

export default ReviewsSections;
