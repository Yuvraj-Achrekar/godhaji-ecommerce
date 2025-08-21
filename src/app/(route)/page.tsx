import HeroSection from "@/components/home/heroSection";
import HomeBanner from "@/components/home/homeBanner";
import ShopByCategory from "@/components/home/shopByCategory";
import { Home } from "lucide-react";

const HomePage = () => {
	return (
		<div>
			<HeroSection />
			<ShopByCategory />
			<HomeBanner />
			<div>Test</div>
		</div>
	);
};

export default HomePage;
