"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import StarRating from "../components/main/rating";

type Review = {
  id: string;
  name: string;
  content: string;
  rating: number;
};

// Giả lập 100 đánh giá
const mockReviews: Review[] = Array.from({ length: 100 }, (_, i) => ({
  id: `${i + 1}`,
  name: `Khách hàng ${i + 1}`,
  content: `Đây là nội dung đánh giá số ${i + 1}.`,
  rating: Math.floor(Math.random() * 5) + 1,
}));

const REVIEWS_PER_PAGE = 10;

export default function ReviewsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedReviews, setDisplayedReviews] = useState<Review[]>([]);

  useEffect(() => {
    const start = (currentPage - 1) * REVIEWS_PER_PAGE;
    const end = start + REVIEWS_PER_PAGE;
    setDisplayedReviews(mockReviews.slice(start, end));
  }, [currentPage]);

  const totalPages = Math.ceil(mockReviews.length / REVIEWS_PER_PAGE);

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Đánh giá của khách hàng
      </h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {displayedReviews.map((review) => (
          <motion.div
            key={review.id}
            className="card p-4 rounded-2xl shadow-md bg-white"
          >
            <div className="text-lg font-semibold">{review.name}</div>
            <div className="text-yellow-500 flex items-center my-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarRating key={i} rating={5} />
              ))}
            </div>
            <p className="text-gray-700">{review.content}</p>
          </motion.div>
        ))}
      </div>

      {/* Phân trang */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            className={`px-3 py-1 rounded ${
              currentPage === i + 1
                ? "bg-blue-600 text-white"
                : "bg-white border"
            }`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
