"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import StarRating from "../components/main/rating";
import { Review } from "./page";

type ParamReviewDetail = {
  review: Review;
  onClose: () => void;
};

export default function ReviewModal({ review, onClose }: ParamReviewDetail) {
  return (
    <motion.div className="shadow-2xl fixed inset-0 flex items-center justify-center lg:top-0 top-[80px]">
      <motion.div className="py-2 px-2 rounded-2xl relative lg:h-[70%] h-[90%] w-[70%] bg-white shadow-2xl">
        {/*  <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center"> */}
        <button
          onClick={onClose}
          className="cursor-pointer absolute top-2 right-3 text-3xl lg:text-[50px] text-gray-500 hover:text-black"
        >
          &times;
        </button>
        <div className="flex flex-col justify-center items-center mx-auto h-full">
          <FaQuoteLeft className="lg:block hidden lg:text-7xl text-5xl text-title mb-6" />
          <p className="lg:max-h-[145px] lg:min-h-[145px] text-md log:text-xl max-w-[874px] mb-4 font-medium text-start px-4">
            {review.comment}
          </p>
          <div className="mb-4">
            <StarRating rating={review.rating} />
          </div>
          <Image
            className="rounded-[50%] object-cover card-image"
            alt="avatar review"
            src={review.image || "/logo.png"}
            width={64}
            height={64}
          />
          <div className="text-lg font-medium">{review.name}</div>
          <div className="text-secondary">{review.location}</div>
        </div>
      </motion.div>
    </motion.div>
  );
}
