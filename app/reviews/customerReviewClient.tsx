"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useContext, useEffect, useRef, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { addDoc, collection } from "firebase/firestore";
import LoadingElement from "../components/main/loading";
import { db } from "@/firebase/firebase.config";
import { menuContext } from "../context/menuContext";
import { useSearchParams, useRouter } from "next/navigation";
interface ContentReview {
  name: string;
  rating: number;
  comment: string;
  image: string;
  location: string;
}

const LoadingPage = dynamic(() => import("../components/main/loading"), {
  ssr: false, // không render ở server
  loading: () => (
    <p className="text-center">
      <LoadingElement size="large" />
    </p>
  ), // fallback ngắn
});

export default function CustomerReviews() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [typeMouse, setTypeMouse] = useState<string>("hover");
  const [submitted, setSubmitted] = useState(false);
  const { setMenuActive } = useContext(menuContext);
  const [isLoadingElement, setIsLoadingElement] = useState(true);

  const [isUploadImage, setIsUploadImage] = useState<boolean>(false);

  const [preview, setPreview] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  const imageRef = useRef<HTMLInputElement>(null);

  const [contentReview, setContentReview] = useState<ContentReview>({
    name: "",
    rating: 5,
    comment: "",
    image: "",
    location: "",
  });

  const [mounted, setMounted] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    await setIsUploadImage(true);
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "upload_preset",
      `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}`
    ); // thay bằng preset thật của bạn

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();

    setPreview(data.url);
    setContentReview({
      ...contentReview,
      image: data.url,
    });
    setTimeout(async () => {
      await setIsUploadImage(false);
    }, 200);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "review-customers"), {
        ...contentReview,
      });
      setSubmitted(true);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const handleClickImage = () => {
    imageRef.current?.click();
  };

  useEffect(() => {
    const token = searchParams.get("access");
    if (token !== process.env.NEXT_PUBLIC_VALID_TOKEN) {
      // Chuyển hướng hoặc hiển thị lỗi
      router.replace("/unauthorized");
    }
  }, [searchParams, router]);

  useEffect(() => {
    setLoaded(false);
    setMounted(true);
  }, [preview]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const idleCallback = window.requestIdleCallback || setTimeout;
      const cancelIdle = window.cancelIdleCallback || clearTimeout;

      const id = idleCallback(
        () => {
          setIsLoadingElement(false);
        },
        { timeout: 2000 }
      );

      return () => cancelIdle(id);
    }
  }, []);

  if (!mounted && isLoadingElement)
    return (
      <div className="h-[100vh] flex justify-center items-center text-center">
        <LoadingPage size={"large"} />
      </div>
    );

  return (
    isLoadingElement === false && (
      <div className="min-h-screen py-16 px-6 bg-gray-50">
        <h1 className="text-3xl font-bold text-center my-8">
          Đánh giá dịch vụ
        </h1>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6 space-y-4"
          >
            <div>
              <label className="block font-medium mb-1">Tên của bạn</label>
              <input
                type="text"
                value={contentReview.name}
                onChange={(e) =>
                  setContentReview({ ...contentReview, name: e.target.value })
                }
                required
                className="w-full border px-4 py-2 rounded-md"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">
                Địa điểm sử dụng dịch vụ:{" "}
              </label>
              <input
                type="text"
                value={contentReview.location}
                onChange={(e) =>
                  setContentReview({
                    ...contentReview,
                    location: e.target.value,
                  })
                }
                required
                className="w-full border px-4 py-2 rounded-md"
              />
            </div>
            <div className="py-2">
              <label
                htmlFor="file"
                className="cursor-pointer px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
              >
                📁 Tải ảnh lên
              </label>
              <input
                type="file"
                accept="image/*"
                id="file"
                onChange={handleFileChange}
                className="hidden"
              />
              {preview && isUploadImage === false && (
                <div className="relative w-[250px]" onClick={handleClickImage}>
                  {!loaded && (
                    <div className="absolute inset-0 bg-gray-300 animate-pulse z-10 rounded-md" />
                  )}
                  <Image
                    src={preview}
                    alt="Preview"
                    width={250}
                    height={250}
                    onLoadingComplete={() => setLoaded(true)}
                    className={` cursor-pointer mt-2 object-cover w-full h-full rounded-md transition-opacity duration-700 ease-in-out ${
                      loaded ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </div>
              )}
              {isUploadImage && (
                <div className="w-[250px] h-[250px] flex justify-center items-center">
                  <LoadingElement size="small" />
                </div>
              )}
            </div>
            <div className="flex">
              {Array(5)
                .fill("_")
                .map((star, index) => (
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
                        setContentReview({
                          ...contentReview,
                          rating: index + 1,
                        });
                      }}
                      className={`transition-colors duration-300 cursor-pointer ${
                        (hoveredIndex !== null && index <= hoveredIndex) ||
                        index < contentReview.rating
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
                value={contentReview.comment}
                onChange={(e) =>
                  setContentReview({
                    ...contentReview,
                    comment: e.target.value,
                  })
                }
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
            <button
              type="submit"
              onClick={() => {
                window.location.href = "/list-review";
                setMenuActive("home");
              }}
              className=" mt-8 cursor-pointer w-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-4 rounded-md transition"
            >
              Xem các phản hồi khác
            </button>
          </div>
        )}
      </div>
    )
  );
}
