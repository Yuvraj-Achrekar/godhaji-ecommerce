type OverviewCardProps = {
	title: string;
	count: number;
	icon: React.ReactElement;
	color: string;
};

const OverviewCard = ({ title, count, icon, color }: OverviewCardProps) => {
	return (
		<div className="flex justify-between p-4 rounded-md border">
			<div>
				<h4 className="text-gray-500 font-mono">{title}</h4>
				<p className="font-bold">{count}</p>
			</div>
			<div className="flex items-center">
				<div className="rounded-full bg-blue-300 w-10 h-10 flex items-center justify-center">
					{icon}
				</div>
			</div>
		</div>
	);
};

export default OverviewCard;
