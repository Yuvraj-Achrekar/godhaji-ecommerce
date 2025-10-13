"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";

const ProductCarousel = () => {
	const settings = {
		customPaging: function () {
			return (
				<a className="w-full min-h-20">
					<Image
						src={"/assets/home/demo_product.png"}
						alt="product Image"
						// height={200}
						// width={200}
						fill
					/>
				</a>
			);
		},
		dots: true,
		dotsClass: "slick-dots slick-thumb",
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<div className="w-full bg-red-400">
			<Slider {...settings}>
				<div className="w-full max-h-[400px]">
					<Image
						src={"/assets/home/demo_product.png"}
						alt="product Image"
						height={400}
						width={400}
						className="w-full max-h-[400px] object-cover"
					/>
				</div>
				<div className="w-full max-h-[476px]">
					<Image
						src={"/assets/home/demo_product.png"}
						alt="product Image"
						height={400}
						width={400}
						className="w-full object-cover"
					/>
				</div>
			</Slider>
		</div>
	);
};

export default ProductCarousel;
