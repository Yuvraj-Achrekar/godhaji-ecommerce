import { Card } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

const ProductCardSkeleton = () => {
	return (
		<Card className="p-2 md:p-4 gap-2 border-none rounded-[8px] justify-between">
			{/* Product Image */}
			<div className="relative rounded-[4px]">
				<Skeleton className="w-full h-full aspect-square  rounded-[4px]" />
			</div>

			<div className="flex flex-col gap-2 py-1">
				<div className="space-y-2">
					{/* Category */}
					<Skeleton className="h-4 w-20" />
					{/* Product name */}
					<Skeleton className="h-5 w-full" />
				</div>
				{/* Rating */}
				<div className="flex items-center gap-2">
					<Skeleton className="h-5 w-6" />
					<Skeleton className="h-4 w-24" />
					<Skeleton className="h-5 w-6" />
				</div>
				{/* Price */}
				<div className="flex items-center gap-2">
					<Skeleton className="h-5 w-20" />
					<Skeleton className="h-4 w-16" />
				</div>
			</div>
			{/* Button skeleton */}
			<Skeleton className="h-9 w-full rounded-[4px]" />
		</Card>
	);
};

export default ProductCardSkeleton;
