import { ChevronRight, Heart, Share2 } from "lucide-react";
import { Button } from "../ui/button";

const categoriesList = [
  {
    subject: "Lemon Pickle",
    description:
      "Brighten up your plate with Godha Brother's lime pickle! Juicy, fresh and tangy taste.",
    price: "RS.100",
    cancelPrice: "RS200",
    rating: "4.5",
    off: "50%",
  },
  {
    subject: "Meat & Fish",
    description:
      "Enjoy premium quality meat and fish products, carefully selected for freshness and taste.",
    price: "RS.150",
    cancelPrice: "RS250",
    rating: "4.7",
    off: "40%",
  },
  {
    subject: "Dairy & Eggs",
    description:
      "Rich and wholesome dairy products including milk, butter, and farm-fresh eggs.",
    price: "RS.120",
    cancelPrice: "RS200",
    rating: "4.6",
    off: "30%",
  },
  {
    subject: "Beverages",
    description:
      "Refreshing beverages and juices made from natural ingredients, perfect for every occasion.",
    price: "RS.80",
    cancelPrice: "RS150",
    rating: "4.4",
    off: "45%",
  },
];

const BestSeller = () => {
  return (
    <section className="section-container">
      <h2 className="section-title text-[#666666]">Our BestSellers</h2>
      <div className="w-20 sm:w-24 h-1 sm:h-2 mt-4 mb-6 rounded-3xl bg-[#b36949]" />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center w-full">
        {categoriesList.map((category, index) => (
          <div
            key={index}
            className="flex flex-col justify-between bg-white rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1 p-4 sm:p-6 h-full relative"
          >
            {/* Image Container */}
            <div className="relative">
              <img
                src={"/assets/home/item.png"}
                alt={category.subject}
                className="w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 mb-4 object-contain mx-auto"
              />

              {/* Top Right Icons */}
              <div className="absolute top-2 right-2 flex flex-col gap-2">
                <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-white shadow-md cursor-pointer">
                  <Heart size={14} className="text-red-500" />
                </div>
                <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-white shadow-md cursor-pointer">
                  <Share2 size={14} className="text-gray-700" />
                </div>
              </div>
            </div>

            {/* Card Content */}
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-sm sm:text-base md:text-lg font-semibold">
                {category.subject}
              </h2>
              <span className="text-xs sm:text-sm font-medium text-gray-500 px-2 py-1 rounded">
                ⭐ {category.rating}
              </span>
            </div>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-4">
              {category.description}
            </p>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="text-sm sm:text-base md:text-lg font-semibold">
                  {category.price}
                </span>
                <span className="text-xs sm:text-sm line-through text-gray-400">
                  {category.cancelPrice}
                </span>
              </div>
              <span className="absolute top-2 left-2 mt-5 bg-red-600 text-white text-xs sm:text-sm font-semibold px-2 py-1 rounded-[30px]">
                {category.off} OFF
              </span>
            </div>
            <Button className="bg-[#b36949] hover:bg-[#b36949] justify-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg rounded-[5px] flex items-center   mt-3">
              <span className="font-medium">Add To Cart</span>
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSeller;
