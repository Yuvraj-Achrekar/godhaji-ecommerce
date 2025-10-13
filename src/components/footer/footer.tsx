"use client";
import React from "react";
import Image from "next/image";
import { Facebook, Instagram, Smartphone } from "lucide-react";

const Footer = () => {
	const menuData = [
		{
			topic: "Quick Access",
			items: [
				"Home",
				"Shop",
				"Contact Us",
				"Returns and refunds",
				"Track order",
				"FAQ",
			],
		},
		{
			topic: "Shop By",
			items: ["Pickle", "Amla", "Papad", "Snacks"],
		},
		{
			topic: "Customer Services",
			items: [
				"Rules and Regulations",
				"Terms of Use",
				"Return Procedures",
				"Privacy Policy",
			],
		},
	];

	return (
		<footer className="bg-secondary">
			<div className="section-container md:flex-row md:gap-10 ">
				{/* Left side - Logo & Contact */}
				<div className="flex-1/3 space-y-2 break-words">
					<Image
						src="/assets/logo/logo-main-brown.svg"
						height={200}
						width={200}
						alt="Logo-Main"
					/>
					<div className="space-y-4">
						<h2 className="text-lg font-semibold">Stay Connected</h2>
						<p className="text-sm">
							<span className="font-semibold">Address: </span>
							<span className="font-extralight text-sm">
								01, Godha Bhawan, Opp OBC Bank, Near Head Post Office,
								Bhopalganj, Bhilwara, Rajasthan, 311001
							</span>
						</p>
						<p className="text-sm">
							<span className="font-semibold">Phone: </span>
							<span className="">(+91) 80588 24007</span>
						</p>
					</div>

					<div className="space-y-2">
						<h3 className="text-lg font-semibold">Follow us on social media</h3>
						<div className="flex gap-4 text-xl">
							<Facebook className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
							<Instagram className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
							<Smartphone className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
						</div>
					</div>
				</div>

				{/* Right side - Menu sections */}
				<div className="flex-2/3 w-full grid grid-cols-2 md:grid-cols-3 gap-6">
					{menuData.map((section, index) => (
						<div key={index}>
							<h3 className="font-bold mb-4">{section.topic}</h3>
							<ul className="space-y-2">
								{section.items.map((item, idx) => (
									<li
										key={idx}
										className="hover:underline cursor-pointer text-sm sm:text-base">
										{item}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>

			{/* Bottom copyright */}
			<div className="bg-primary w-full flex justify-center items-center h-12 md:h-14">
				<h2 className="text-white text-center text-sm md:text-base">
					© All Rights Reserved for GodhaJi
				</h2>
			</div>
		</footer>
	);
};

export default Footer;
