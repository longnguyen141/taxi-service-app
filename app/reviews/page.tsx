// pages/reviews.tsx hoặc app/reviews/page.tsx
"use client";

import { useState } from "react";
import { AiFillStar } from "react-icons/ai";

export default function CustomerReviews() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [typeMouse, setTypeMouse] = useState<string>("hover");
  const [name, setName] = useState("");
  const [rating] = useState(0);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Gửi dữ liệu đi, có thể tích hợp API tại đây
    console.log({ name, rating, comment });
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen py-16 px-6 bg-gray-50">
      <h1 className="text-3xl font-bold text-center my-8">Đánh giá dịch vụ</h1>

      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6 space-y-4"
        >
          <div>
            <label className="block font-medium mb-1">Tên của bạn</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full border px-4 py-2 rounded-md"
            />
          </div>

          {/* <div>
            <label className="block font-medium mb-1">Số sao đánh giá</label>
            <select
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              required
              className="w-full border px-4 py-2 rounded-md"
            >
              <option value="">Chọn số sao</option>
              {[1, 2, 3, 4, 5].map((star) => (
                <option key={star} value={star}>
                  {star} sao
                </option>
              ))}
            </select>
          </div> */}
          <div className="flex">
            {/* <StarRating rating={4} /> */}
            {Array(5)
              .fill("_")
              .map((star, index) => (
                // <p key={index}>⭐</p>
                // <span key={index} className="text-black hover:text-title">
                //   <AiFillStar
                //     className="size-8 cursor-pointer hover:text-title"
                //     size={24}
                //     fill="black"
                //     strokeWidth={2}
                //     stroke="black"
                //     onMouseOver={(e) => {
                //       const target = e.target as HTMLElement;
                //       target.style.color = "white";
                //     }}
                //     onMouseOut={(e) => {
                //       const target = e.target as HTMLElement;
                //       target.style.color = "black";
                //     }}
                //   />
                // </span>
                <span
                  onMouseEnter={() =>
                    typeMouse === "hover" ? setHoveredIndex(index) : ""
                  }
                  onMouseLeave={() =>
                    typeMouse === "hover" ? setHoveredIndex(null) : ""
                  }
                  key={index}
                  className="text-black hover:text-yellow-400 nth transition-colors duration-300"
                >
                  <AiFillStar
                    onClick={() => {
                      setHoveredIndex(index);
                      setTypeMouse("click");
                    }}
                    className={`transition-colors duration-300 cursor-pointer ${
                      hoveredIndex !== null && index <= hoveredIndex
                        ? "text-yellow-400"
                        : "text-gray-400"
                    }`}
                    size={24}
                  />
                </span>
              ))}
          </div>

          <div>
            <label className="block font-medium mb-1">Nhận xét</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={4}
              required
              className="w-full border px-4 py-2 rounded-md"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-md"
          >
            Gửi đánh giá
          </button>
        </form>
      ) : (
        <div className="max-w-lg mx-auto text-center p-6 bg-white rounded-md shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Cảm ơn bạn đã đánh giá!
          </h2>
          <p>Chúng tôi rất trân trọng phản hồi của bạn.</p>
        </div>
      )}
    </div>
  );
}
