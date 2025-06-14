"use client";

import React, { JSX } from "react";
import { AiFillStar } from "react-icons/ai";

type StarRatingProps = {
  rating: number; // ví dụ: 3.5
};

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const stars: JSX.Element[] = [];
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;

  Array(full)
    .fill(null)
    .forEach((_, i) =>
      stars.push(
        <span key={`full-${i}`} className="text-yellow-400">
          <AiFillStar size={24} fill="yellow" />
        </span>
      )
    );

  if (half) {
    stars.push(
      <span key="half" className="text-yellow-400">
        <AiFillStar size={24} fill="black" />
      </span> // Hoặc thay bằng biểu tượng nửa sao tuỳ ý
    );
  }

  Array(empty)
    .fill(null)
    .forEach((_, i) =>
      stars.push(
        <span key={`empty-${i}`} className="text-gray-300">
          <AiFillStar size={24} fill="black" strokeWidth={2} stroke="black" />
        </span>
      )
    );

  return <div className="flex">{stars}</div>;
};

export default StarRating;
