import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";
import StarRating from "./rating";

interface paramReview {
  name: string;
  avatar: string;
  message: string;
  location: string;
  star: number;
}

function Reviews({ message, name, avatar, location, star }: paramReview) {
  return (
    <motion.div className="swiper-slide w-[90%]">
      <div className="flex flex-col justify-center items-center mx-auto h-full">
        <FaQuoteLeft className="text-7xl text-title mb-6" />
        <p className="text-2xl lg:text-3xl max-w-[874px] mb-12 font-medium">
          {message}
        </p>
        <StarRating rating={star} />
        <Image
          className="rounded-[50%]"
          alt="avatar review"
          src={avatar}
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
