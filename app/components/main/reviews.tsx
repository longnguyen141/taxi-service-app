import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";
import StarRating from "./rating";

interface paramReview {
  name: string;
  image: string;
  comment: string;
  location: string;
  rating: number;
  id: string;
}

function Reviews({ comment, name, image, location, rating, id }: paramReview) {
  return (
    <motion.div key={id} className="swiper-slide w-[90%]">
      <div className="flex flex-col justify-center items-center mx-auto h-full">
        <FaQuoteLeft className="lg:text-7xl text-5xl text-title mb-6" />
        <p className="lg:max-h-[145px] lg:min-h-[145px] text-md log:text-xl max-w-[874px] mb-4 font-medium line-clamp-6 text-start px-4">
          {comment}
        </p>
        <div className="mb-4">
          <StarRating rating={rating} />
        </div>
        <Image
          className="rounded-[50%] object-cover card-image"
          alt="avatar review"
          src={image || "/logo.png"}
          width={64}
          height={64}
        />
        <div className="text-lg font-medium">{name}</div>
        <div className="text-secondary">{location}</div>
      </div>
    </motion.div>
  );
}

export default Reviews;
