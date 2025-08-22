import FaqSection from "@/components/home/faqSection";
import HeroSection from "@/components/home/heroSection";
import HomeBanner from "@/components/home/homeBanner";
import ShopByCategory from "@/components/home/shopByCategory";
import WhyChoose from "@/components/home/whyChoose";
import { Home } from "lucide-react";

const HomePage = () => {
	return (
		<div>
			<HeroSection />
			<ShopByCategory />
			<HomeBanner />
			<WhyChoose />
			<FaqSection />
		</div>
	);
};

export default HomePage;
