import { Skeleton } from "../ui/skeleton";

const ProductInfoSkeleton = () => {
	return (
		<div className="flex flex-col gap-4">
			<div className="flex flex-col gap-4 border-b-2 border-gray-300 pb-6">
				{/* Product Category & Title */}
				<div className="space-y-2 font-medium">
					<Skeleton className="h-5 w-16" /> {/* Category */}
					<Skeleton className="h-12 w-80 max-w-full" /> {/* Title */}
				</div>

				{/* Rating & Reviews */}
				<div className="flex items-center gap-3 my-3">
					{/* Stars */}
					<div className="flex gap-1">
						{[...Array(5)].map((_, i) => (
							<Skeleton key={i} className="h-5 w-5 rounded-sm" />
						))}
					</div>
					{/* Review count */}
					<Skeleton className="h-4 w-20" />
				</div>

				{/* Description - 3 lines */}
				<div className="space-y-2">
					<Skeleton className="h-4 w-full" />
					<Skeleton className="h-4 w-full" />
					<Skeleton className="h-4 w-2/3" />
				</div>

				{/* Price */}
				<div className="flex items-baseline gap-3">
					<Skeleton className="h-10 w-28" /> {/* Current price */}
					<Skeleton className="h-6 w-20" /> {/* Original price */}
				</div>
			</div>
		</div>
	);
};

export default ProductInfoSkeleton;
