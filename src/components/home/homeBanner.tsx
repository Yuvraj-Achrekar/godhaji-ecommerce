import React from "react";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const HomeBanner = () => {
	return (
		<section className="w-full h-[280px] md:h-[420px] relative flex justify-center items-center bg-black overflow-hidden md:rounded-[10px]">
			{/* Background image */}
			<Image
				src="/assets/home/why.png"
				alt="Home Banner"
				height={124}
				width={288}
				// fill
				className="w-full h-full object-cover"
			/>

			{/* Responsive Overlay */}
			<div
				className="absolute top-0 left-[30%] lg:left-[65%] h-full
        flex flex-col items-center justify-center text-center gap-4 px-3 py-8
        bg-black/40 backdrop-blur-[70%] shadow-lg z-10 rounded-none sm:rounded-lg
        mr-[60px] lg:mr-[180px]">
				<h2 className="text-lg sm:text-2xl md:text-3xl font-semibold text-white break-words">
					Taste Tradition in Every Jar
				</h2>

				<p className="text-xs sm:text-base md:text-lg text-white max-w-md break-words">
					Discover our handcrafted, preservative-free pickles made with love and
					traditional Indian recipes.
				</p>

				<Button className="bg-transparent hover:bg-transparent border-2 justify-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg rounded-[5px] flex items-center text-white border-white">
					<span className="font-medium">Show Products</span>
					<ChevronRight size={20} />
				</Button>
			</div>
		</section>
	);
};

export default HomeBanner;
