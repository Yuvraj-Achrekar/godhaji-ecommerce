"use client";
import React from "react";
import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number; // number from 0 to 5
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          size={24}
          className={
            index < rating
              ? "text-yellow-400 fill-yellow-400" // filled star
              : "text-gray-300" // empty star
          }
        />
      ))}
    </div>
  );
};

export default StarRating;
