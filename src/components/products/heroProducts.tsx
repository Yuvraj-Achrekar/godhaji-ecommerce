"use client";
import { usePathname } from "next/navigation";
import React from "react";

const HeroProducts = () => {
	const pathname = usePathname();

	return <section className="custom-container bg-[#D9D9D9]">hero</section>;
};

export default HeroProducts;
