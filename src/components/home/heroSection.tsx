"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { useAuth } from "@/providers/authProvider";
import { Poppins } from "next/font/google";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "600", "700"],
	display: "swap",
});

const slides = [
	"/assets/home/snax.png",
	"/assets/home/hero-bg.jpg",
	"/assets/home/sanx2.png",
];

const HeroSection = () => {
	const { user } = useAuth();
	const [current, setCurrent] = useState(0);

	// Auto-slide every 9 seconds
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrent((prev) => (prev + 1) % slides.length);
		}, 9000);

		return () => clearInterval(interval);
	}, []);

	return (
		<section className="custom-container relative overflow-hidden bg-white">
			{slides.map((img, index) => (
				<div
					key={index}
					className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-700
            ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"}
          `}
					style={{ backgroundImage: `url(${img})` }}>
					<img
						src={img}
						alt={`slide-${index}`}
						className="w-full h-full object-cover"
					/>
				</div>
			))}

			{/* Content */}
			<div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white gap-4 px-4">
				<h1 className="hero-title text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
					Crafted with Care, Packed with Flavors
				</h1>
				<h3
					className={`${poppins.className} hero-subtitle text-[#949392] text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-[720px] break-words`}>
					Spice up your meals with our handcrafted, home-style pickles and
					crunchy papads.
				</h3>
				<p
					className={`${poppins.className} font-bold text-[#949392] text-sm sm:text-base md:text-lg`}>
					{user?.email?.split("@")[0]}
				</p>
				<Button className="bg-[#b36949] hover:bg-[#b36949] px-4 py-2 text-sm sm:text-base md:text-lg">
					Shop Now
				</Button>
			</div>

			{/* Thick line paginator */}
			<div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
				{slides.map((_, index) => (
					<span
						key={index}
						className={`h-2 rounded-full transition-all duration-300 ${
							index === current ? "w-10 bg-[#b36949]" : "w-6 bg-[#b36949]/50"
						}`}></span>
				))}
			</div>
		</section>
	);
};

export default HeroSection;
