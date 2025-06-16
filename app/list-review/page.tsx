"use client";

import { db } from "@/firebase/firebase.config";
import { collection, getDocs } from "firebase/firestore";
import Image from "next/image";
import { useEffect, useState } from "react";
import LoadingElement from "../components/main/loading";
import StarRating from "../components/main/rating";
import ReviewModal from "./reviewModal";

export type Review = {
  id: string;
  name: string;
  comment: string;
  location: string;
  image: string;
  rating: number;
};

const REVIEWS_PER_PAGE = 6;

export default function ReviewsPage() {
  const [listReview, setListReview] = useState<Review[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [displayedReviews, setDisplayedReviews] = useState<Review[]>([]);
  const [selectedReview, setSelectedReview] = useState<Review>({
    id: "",
    name: "",
    comment: "",
    location: "",
    image: "",
    rating: 5,
  });

  useEffect(() => {
    const start = (currentPage - 1) * REVIEWS_PER_PAGE;
    const end = start + REVIEWS_PER_PAGE;
    setDisplayedReviews(listReview.slice(start, end));
  }, [currentPage, listReview]);

  const fetchReview = async () => {
    try {
      const snapshot = await getDocs(collection(db, "review-customers"));
      const reviews = snapshot.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name,
        comment: doc.data().comment,
        location: doc.data().location,
        image: doc.data().image,
        rating: doc.data().rating,
      }));

      setListReview(reviews);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  console.log(listReview, "listReview");

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
    fetchReview();
  }, []);

  const totalPages = Math.ceil(listReview.length / REVIEWS_PER_PAGE);

  return (
    <div className="min-h-[100vh] bg-gray-50 p-4 pt-30">
      <h1 className="text-2xl lg:text-3xl text-title font-bold mb-4 text-center uppercase">
        Đánh giá của khách hàng
      </h1>
      {isLoading ? (
        <div className="min-h-[80vh] flex justify-center items-center">
          <LoadingElement size="medium" />
        </div>
      ) : (
        <>
          <div className="min-h-[80vh] grid justify-center gap-4 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {displayedReviews.map((review) => (
              <div
                key={review?.id}
                onClick={() => {
                  const item = {
                    id: review.id,
                    name: review.name,
                    comment: review.comment,
                    location: review.location,
                    image: review.image,
                    rating: review.rating,
                  };
                  setSelectedReview(item);
                }}
                className="max-h-[300px] min-w-[300px] max-w-[400px] w-[400px] bg-white shadow-lg rounded-xl p-6 mx-auto space-y-4"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 relative rounded-full overflow-hidden">
                    <Image
                      src={review.image || "/logo.png"}
                      alt={`Ảnh của ${review.name}`}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{review.name}</h3>
                    <p className="text-sm text-gray-500">{review.location}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-1">
                  <StarRating rating={review.rating} />
                </div>

                <p className="text-gray-700 line-clamp-4">{review.comment}</p>
              </div>
            ))}
          </div>

          {/* Phân trang */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                className={`cursor-pointer px-3 py-1 rounded ${
                  currentPage === i + 1
                    ? "bg-title text-white"
                    : "bg-white border"
                }`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </>
      )}
      {selectedReview?.id !== "" && (
        <ReviewModal
          review={selectedReview}
          onClose={() =>
            setSelectedReview({
              id: "",
              name: "",
              comment: "",
              location: "",
              image: "",
              rating: 5,
            })
          }
        />
      )}
    </div>
  );
}
