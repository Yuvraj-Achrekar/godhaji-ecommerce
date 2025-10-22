import FaqSection from "@/components/home/faqSection";
import HeroSection from "@/components/home/heroSection";
import HomeBanner from "@/components/home/homeBanner";
import ShopByCategory from "@/components/home/shopByCategory";
import CustomerReviews from "@/components/home/whyChoose";
import ProductBanner from "@/components/home/productBanner";
import BestSeller from "@/components/home/bestSellers";
import SupportModel from "@/components/home/supportModel";
const HomePage = () => {
	return (
		<div>
			<HeroSection />
			{/* <ProductBanner /> */}
			<BestSeller />
			<ShopByCategory />
			<SupportModel />
			<HomeBanner />
			<CustomerReviews />
			<FaqSection />
		</div>
	);
};

export default HomePage;
