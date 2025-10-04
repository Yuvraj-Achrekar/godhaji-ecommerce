"use client";
import { useRouter } from "next/navigation";

type OverviewCardProps = {
	title: string;
	count: number;
	icon: React.ReactElement;
	color: string;
	href: string;
};

const OverviewCard = ({
	title,
	count,
	icon,
	color,
	href,
}: OverviewCardProps) => {
	const router = useRouter();
	return (
		<div
			onClick={() => {
				router.push(href);
			}}
			className="flex justify-between p-4 rounded-md border border-l-5 shadow-md cursor-pointer"
			style={{ borderColor: color }}>
			<div>
				<h4 className="text-gray-500 font-mono">{title}</h4>
				<p className="font-bold">{count}</p>
			</div>
			<div className="flex items-center">
				<div
					className="rounded-full w-10 h-10 flex items-center justify-center text-white"
					style={{ backgroundColor: color }}>
					{icon}
				</div>
			</div>
		</div>
	);
};

export default OverviewCard;
