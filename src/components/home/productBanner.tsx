import { Button } from "../ui/button";
import { ChevronRight, Heart, Share2 } from "lucide-react";

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

const ProductBanner = () => {
  return (
    <section className="w-full px-2 sm:px-8 py-12 sm:py-16 bg-white">
      <div className="flex flex-col md:flex-row w-full gap-12 ">
        {/* Left Content */}
        <div className="flex flex-col justify-center md:w-2/5">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 max-w-[450px] break-words">
            Taste Tradition in Every Jar
          </h1>
          <div className="w-20 sm:w-24 h-1 sm:h-2 mt-4 mb-6 rounded-3xl bg-[#b36949]" />
          <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg max-w-[450px] break-words">
            Discover our handcrafted, preservative-free pickles made with love
            and traditional Indian recipes.
          </p>
          <Button className="bg-[#b36949] hover:bg-[#b36949] justify-between px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg rounded-[5px] flex items-center gap-3 max-w-[250px]">
            <span>Show All Products</span>
            <ChevronRight size={20} />
          </Button>
        </div>

        {/* Right Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 justify-center w-full">
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
                <span className="text-xs sm:text-sm font-semibold text-red-600">
                  {category.off} OFF
                </span>
              </div>

              <Button className="bg-[#b36949] hover:bg-[#b36949] justify-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg rounded-[5px] flex items-center   mt-3">
                <span className="font-medium">Add To Cart</span>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductBanner;
