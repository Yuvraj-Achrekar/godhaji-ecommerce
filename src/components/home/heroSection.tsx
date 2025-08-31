"use client";
import React from "react";
import { Button } from "../ui/button";
import { createSupabaseClient } from "@/lib/supabase/client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const HeroSection = () => {
	const router = useRouter();
	const supabaseSignout = async () => {
		const supabase = createSupabaseClient();
		const { error } = await supabase.auth.signOut();
		if (error) {
			console.log("error", error);

			return toast.error(error.message);
		}
		console.log("Success");

		toast.success("Signed out successfully");
		router.refresh();
	};

	return (
		<section className="custom-container bg-[#D9D9D9] ">
			{/* bg-[url('/hero-bg.jpg')] bg-cover bg-center  */}
			<div className="h-full relative flex justify-center items-center ">
				{/* <div className="absolute inset-0 bg-black/10"></div> */}
				<div className="flex flex-col items-center text-center gap-2 md:gap-6 z-50">
					<div>
						<h1 className="hero-title">Taste Tradition with Every Bite</h1>
						<h3 className="hero-subtitle">
							Authentic Homemade Pickles, Chutneys, Papads & Snacks — Just Like
							Grandma Made!
						</h3>
					</div>
					<Button onClick={supabaseSignout}>Shop Now</Button>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
