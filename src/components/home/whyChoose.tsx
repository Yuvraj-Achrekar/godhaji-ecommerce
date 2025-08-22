import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import Image from "next/image";

const sampleData = [
	{
		title: "Made with Traditional homemade Recipes",
		image: "/hero-bg.jpg",
	},
	{
		title: "Quality Ingredients Sourced Locally",
		image: "/hero-bg.jpg",
	},
	{
		title: "Fast and Reliable Delivery Service",
		image: "/hero-bg.jpg",
	},
	{
		title: "Customer Satisfaction Guaranteed",
		image: "/hero-bg.jpg",
	},
];

const WhyChoose = () => {
	return (
		<section className="section-container">
			<h2 className="section-title">Why Choose Us</h2>
			<div className="grid grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center w-full">
				{sampleData.map((item, index) => (
					<div
						key={index}
						className="flex flex-col items-center text-center max-w-[150px] gap-4">
						<Image
							src={item.image}
							height={80}
							width={80}
							alt="Choose Card Image"
							className="aspect-square rounded-full self-center"
						/>
						<p className="text-sm">{item.title}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default WhyChoose;
