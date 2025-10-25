"use client";
import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import IngredientsSection from "./ingredientsSection";
import ReviewsSections from "./reviewsSections";
import StorageTipsSection from "./storageTipsSection";

const validTabs = ["ingredients", "storage tips", "reviews"];
const TabsSection = ({
	ingredientsList,
	isLoading,
}: {
	ingredientsList: string[] | undefined;
	isLoading: boolean;
}) => {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const router = useRouter();
	const tabParam = searchParams.get("tab");
	const [activeTab, setActiveTab] = useState<string>(tabParam || "ingredients");

	useEffect(() => {
		if (!tabParam || !validTabs.includes(tabParam)) {
			// If tab is missing or invalid → set "ingredients" as default
			const params = new URLSearchParams(searchParams);
			params.set("tab", "ingredients");
			router.replace(`${pathname}?${params.toString()}`, { scroll: false });
			setActiveTab("ingredients");
		} else {
			setActiveTab(tabParam);
		}
	}, [tabParam, searchParams, router, pathname]);

	const handleTabChange = (tab: string) => {
		const params = new URLSearchParams(searchParams);
		params.set("tab", tab); // set or update param
		router.push(`${pathname}?${params.toString()}`, { scroll: false });
		setActiveTab(tab);
	};

	return (
		<section className="section-container">
			{/* Tabs */}
			<div className="flex gap-14 border-b border-gray-200 mb-2 w-full">
				{["Ingredients", "Storage Tips", "Reviews"].map((tab) => (
					<button
						key={tab}
						onClick={() => {
							handleTabChange(tab.toLowerCase());
						}}
						className={`pb-4 font-medium transition ${
							activeTab === tab.toLowerCase() ? "active-tab" : "inactive-tab"
						}`}>
						{tab}
					</button>
				))}
			</div>
			<div className="w-full">
				{/* Ingredients */}
				{activeTab === "ingredients" && (
					<IngredientsSection ingredientsList={ingredientsList!} />
				)}
				{/* Storage Tips */}
				{activeTab === "storage tips" && <StorageTipsSection />}
				{/* Reviews Content */}
				{activeTab === "reviews" && <ReviewsSections reviews={reviews} />}
			</div>
		</section>
	);
};

export default TabsSection;

const reviews = [
	{
		id: 1,
		author: "Sakshi Patil",
		rating: 5,
		title: "How was the item?",
		content:
			"I bought these homemade snacks a weeks ago and just had to come back and say - absolutely delicious! Every bite reminds me of home-cooked goodness. The flavors are rich, fresh, and perfectly balanced. I'm so happy I found these, and I'll definitely be ordering again!",
		time: "about 1 hour ago",
		avatar: "/diverse-user-avatars.png",
	},
	{
		id: 2,
		author: "Sakshi Patil",
		rating: 5,
		title: "How was the item?",
		content:
			"I bought these homemade snacks a weeks ago and just had to come back and say - absolutely delicious! Every bite reminds me of home-cooked goodness. The flavors are rich, fresh, and perfectly balanced. I'm so happy I found these, and I'll definitely be ordering again!",
		time: "about 1 hour ago",
		avatar: "/diverse-user-avatars.png",
	},
	{
		id: 3,
		author: "Sakshi Patil",
		rating: 5,
		title: "How was the item?",
		content:
			"I bought these homemade snacks a weeks ago and just had to come back and say - absolutely delicious! Every bite reminds me of home-cooked goodness. The flavors are rich, fresh, and perfectly balanced. I'm so happy I found these, and I'll definitely be ordering again!",
		time: "about 1 hour ago",
		avatar: "/diverse-user-avatars.png",
	},
];
