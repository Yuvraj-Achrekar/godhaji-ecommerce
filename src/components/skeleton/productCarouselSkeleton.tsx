import { Skeleton } from "@/components/ui/skeleton";

export default function ProductCarouselSkeleton() {
	return (
		<div className="flex flex-col gap-4 w-full h-full">
			{/* Main Image Skeleton */}
			<div className="relative bg-gray-100 w-full overflow-hidden aspect-square md:h-[460px]">
				<Skeleton className="w-full h-full" />

				{/* Discount Badge Skeleton */}
				<div className="absolute top-4 left-4">
					<Skeleton className="h-7 w-16 rounded-full" />
				</div>

				{/* Action Buttons Skeleton */}
				<div className="absolute top-4 right-4">
					<Skeleton className="h-9 w-9 rounded-full" />
				</div>
				<div className="absolute top-14 right-4">
					<Skeleton className="h-9 w-9 rounded-full" />
				</div>

				{/* Navigation Arrows Skeleton */}
				<div className="absolute left-4 top-1/2 -translate-y-1/2">
					<Skeleton className="h-9 w-9 rounded-full" />
				</div>
				<div className="absolute right-4 top-1/2 -translate-y-1/2">
					<Skeleton className="h-9 w-9 rounded-full" />
				</div>
			</div>

			{/* Thumbnails Skeleton */}
			<div className="flex gap-3 overflow-x-auto scrollbar-default">
				{Array.from({ length: 5 }).map((_, index) => (
					<Skeleton key={index} className="flex-shrink-0 w-1/3 aspect-square" />
				))}
			</div>
		</div>
	);
}
