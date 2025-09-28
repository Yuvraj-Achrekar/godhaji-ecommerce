import { Headphones, Truck, Clock, RefreshCcw } from "lucide-react";

const categoriesList = [
  {
    name: "Online support",
    icon: Headphones,
    desc: "Dedicated Support Team",
  },
  {
    name: "Free Shipping",
    icon: Truck,
    desc: "Purchases Over $100",
  },
  {
    name: "Timeless Shopping",
    icon: Clock,
    desc: "24/7 Purchasing",
  },
  {
    name: "Product Returns",
    icon: RefreshCcw,
    desc: "No-Questions-Asked Returns",
  },
];

const SupportModel = () => {
  return (
    <section className="section-container">
      <h2 className="section-title text-[#666666]">Shop By Category</h2>
      <div className="w-20 sm:w-24 h-1 sm:h-2 mt-4 mb-6 rounded-3xl bg-[#b36949]" />

      {/* Grid container */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        {categoriesList.map((category, index) => {
          const Icon = category.icon;
          return (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 rounded-md bg-transparent hover:shadow-lg hover:scale-105 transition-transform"
            >
              {/* Icon on left */}
              <div className="flex items-center justify-center w-12 h-12 text-[#9c4f2f] flex-shrink-0">
                <Icon size={32} />
              </div>

              {/* Text on right */}
              <div className="flex flex-col text-center sm:text-left">
                <h2 className="text-sm font-bold text-gray-700">
                  {category.name}
                </h2>
                <h3 className="text-sm font-medium text-gray-500">
                  {category.desc}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SupportModel;
