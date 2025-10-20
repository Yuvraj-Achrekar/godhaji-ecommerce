const IngredientsSection = ({
	ingredientsList = [],
}: {
	ingredientsList: string[];
}) => {
	return (
		<div>
			<ul className="grid grid-cols-2 md:grid-cols-3 list-disc marker:text-primary font-medium text-base md:text-lg space-y-2">
				{ingredientsList.map((ingredient, index) => (
					<li key={index} className="ml-4 mr-2">
						{ingredient}
					</li>
				))}
			</ul>
		</div>
	);
};

export default IngredientsSection;

// #B26949
