"use client";
import { menuContext } from "@/app/context/menuContext";
import { db } from "@/firebase/firebase.config";
import { collection, getDocs } from "firebase/firestore";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import "swiper/css/effect-cards";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Reviews from "./reviews";

type Review = {
  id: string;
  name: string;
  comment: string;
  location: string;
  image: string;
  rating: number;
};

function RevviewList() {
  const { setMenuActive } = useContext(menuContext);
  const [listReview, setListReview] = useState<Review[]>([]);

  const fetchReview = async () => {
    try {
      const snapshot = await getDocs(collection(db, "review-customers"));
      console.log(
        snapshot.docs.map((doc) => doc.data()),
        "RAW DATA"
      );
      const reviews = snapshot.docs
        .map((doc) => {
          const data = doc.data();
          if (!data || typeof data !== "object") return null; // tránh lỗi
          return {
            id: doc.id,
            name: data.name || "",
            comment: data.comment || "",
            location: data.location || "",
            image: data.image || "",
            rating: data.rating || 0,
          };
        })
        .filter((item) => item !== null); // loại bỏ các phần tử lỗi
      console.log(reviews, "reviews");

      const newList = reviews.slice(0, 6);

      setListReview(newList);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  console.log(listReview, "listReview");

  useEffect(() => {
    fetchReview();
  }, []);

  return (
    <motion.div className="relative mt-10">
      <motion.div
        initial="hidden"
        viewport={{ once: false, amount: 0.6 }}
        whileInView={"show"}
        className=" w-[90%] text-center bg-amber-50 rounded-3xl mx-auto h-[85vh] lg:h-[600px] lg:pb-0 pb-10 lg:pt-10 pt-6 mb-12"
      >
        <motion.div>
          <h1 className="h2 lg:text-3xl text-title mb-0 text-2xl font-bold uppercase">
            Đánh giá khách hàng
          </h1>
        </motion.div>
        <Swiper
          // modules={[EffectCards]}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          effect={"cards"}
          grabCursor
          className="h-[450px] lg:h-[480px] flex justify-center items-center pb-10"
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop
        >
          {listReview?.length > 0 &&
            listReview.map((item, index) => (
              <SwiperSlide
                // key={item.id}
                key={index}
                className="w-[90%] mx-auto"
              >
                <Reviews {...item} />
              </SwiperSlide>
            ))}
        </Swiper>
      </motion.div>
      <motion.div className="w-[200px] absolute top-[97%] left-[50%] translate-x-[-50%] translate-y-[-50%] right-0 bottom-0 rounded-xs">
        <motion.button
          onClick={() => {
            window.location.href = "/list-review";
            setMenuActive("home");
          }}
          className=" font-medium cursor-pointer btn bg-title py-4 px-2 "
        >
          Xem thêm
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

export default RevviewList;
