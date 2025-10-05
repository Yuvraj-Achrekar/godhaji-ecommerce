"use client";
import { useRouter } from "next/navigation";

type OverviewCardProps = {
	title: string;
	count: number | string;
	icon: React.ReactElement;
	bgColor: string;
	color: string;
	href: string;
};

const OverviewCard = ({
	title,
	count,
	icon,
	bgColor,
	color,
	href,
}: OverviewCardProps) => {
	const router = useRouter();
	return (
		<div
			onClick={() => {
				router.push(href);
			}}
			className={`flex justify-between p-4 rounded-md border border-l-5 shadow-md cursor-pointer ${bgColor}`}>
			<div>
				<h4 className="text-gray-500 font-mono">{title}</h4>
				<p className="font-semibold text-4xl">{count}</p>
			</div>
			<div className="flex items-center">
				<div
					className={`rounded-full w-10 h-10 flex items-center justify-center ${color} text-white`}>
					{icon}
				</div>
			</div>
		</div>
	);
};

export default OverviewCard;
