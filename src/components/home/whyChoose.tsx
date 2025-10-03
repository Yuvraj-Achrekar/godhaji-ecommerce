"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import StarRating from "@/components/ui/starRating";

const reviews = [
  {
    review:
      "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
    name: "Robert Fox",
    designation: "Customer",
    stars: 4.5,
    image: "/assets/home/person.jpg",
  },
  {
    review:
      "Aliquam erat volutpat. Integer nec dui ac massa ullamcorper sagittis. Proin euismod, justo vel laoreet ultricies, velit neque fermentum ex.",
    name: "Emily Johnson",
    designation: "Customer",
    stars: 3,
    image: "/assets/home/person.jpg",
  },
  {
    review:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    name: "Michael Lee",
    designation: "Customer",
    stars: 1,
    image: "/assets/home/person.jpg",
  },
];

const ReviewCard = ({ review, name, designation, stars, image }: any) => (
  <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col justify-between max-w-sm w-full relative">
    <Quote
      size={32}
      className="absolute top-4 left-4 text-[#eddfd8] rounded-full p-1"
      style={{ fill: "#eddfd8", stroke: "#eddfd8" }}
    />
    <p className="text-gray-600 text-sm mt-10">{review}</p>

    <div className="flex justify-between items-center mt-4">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 relative">
          <Image
            src={image}
            alt={name}
            fill
            className="rounded-full object-cover border border-gray-200"
          />
        </div>
        <div>
          <h3 className="text-base font-semibold text-gray-800">{name}</h3>
          <p className="text-xs text-gray-500">{designation}</p>
        </div>
      </div>
      <StarRating rating={stars} />
    </div>
  </div>
);

const CustomerReviews = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 11000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-container1">
      <h2 className="section-title text-[#666666]">Customer Reviews</h2>
      <div className="w-20 sm:w-24 h-1 sm:h-2 mt-4 mb-6 rounded-3xl bg-[#b36949]" />

      <div className="sm:hidden relative">
        {reviews.map((item, index) => (
          <div
            key={index}
            className={`transition-opacity duration-700 ${
              index === current
                ? "opacity-100 z-10"
                : "opacity-0 z-0 absolute inset-0"
            }`}
          >
            <ReviewCard {...item} />
          </div>
        ))}
      </div>

      {/* Desktop/Tablet Grid */}
      <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {reviews.map((item, index) => (
          <ReviewCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
