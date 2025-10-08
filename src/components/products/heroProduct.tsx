"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { useAuth } from "@/providers/authProvider";
import { Poppins } from "next/font/google";
import Image from "next/image";

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

const HeroProduct = () => {
	return (
		<section
			className="custom-container relative overflow-hidden bg-white bg-cover"
			style={{
				backgroundImage: "url(/assets/home/snax.png)",
			}}>
			{/* Content */}
			<div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white gap-4 px-4">
				<p className="hero-subtitle text-black">Home {">"} Shop</p>
				<p className="hero-title text-[54px] text-black">Shop</p>
				<p className="hero-subtitle text-black">
					Savor the taste you’ve always dreamed of.
				</p>
			</div>
		</section>
	);
};

export default HeroProduct;
