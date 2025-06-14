"use client";
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import Reviews from "./reviews";
import { Autoplay, EffectCards, Pagination } from "swiper/modules";
import "swiper/css/effect-cards";

function RevviewList() {
  const ListReviews = [
    {
      message:
        "Dịch vụ rất tốt, tài xế thân thiện, nhiệt tình, giá cả phải chăng. Nếu có chuyến đi tương tự tôi vẫn sẽ lựa chọn dịch vụ bên bạn",
      avatar: "/img1.png",
      name: "Long",
      location: "Đà Nẵng",
      star: 4,
    },
    {
      message:
        "Dịch vụ rất tốt, tài xế thân thiện, nhiệt tình, giá cả phải chăng. Nếu có chuyến đi tương tự tôi vẫn sẽ lựa chọn dịch vụ bên bạn",
      avatar: "/img1.png",
      name: "Long",
      location: "Đà Nẵng",
      star: 5,
    },
    {
      message:
        "Dịch vụ rất tốt, tài xế thân thiện, nhiệt tình, giá cả phải chăng. Nếu có chuyến đi tương tự tôi vẫn sẽ lựa chọn dịch vụ bên bạn",
      avatar: "/img1.png",
      name: "Long",
      location: "Đà Nẵng",
      star: 4,
    },
    {
      message:
        "Dịch vụ rất tốt, tài xế thân thiện, nhiệt tình, giá cả phải chăng. Nếu có chuyến đi tương tự tôi vẫn sẽ lựa chọn dịch vụ bên bạn",
      avatar: "/img1.png",
      name: "Long",
      location: "Đà Nẵng",
      star: 5,
    },
    {
      message:
        "Dịch vụ rất tốt, tài xế thân thiện, nhiệt tình, giá cả phải chăng. Nếu có chuyến đi tương tự tôi vẫn sẽ lựa chọn dịch vụ bên bạn",
      avatar: "/img1.png",
      name: "Long",
      location: "Đà Nẵng",
      star: 4,
    },
  ];

  return (
    <motion.div className="relative">
      <motion.div
        initial="hidden"
        viewport={{ once: false, amount: 0.6 }}
        whileInView={"show"}
        className=" w-[90%] text-center bg-amber-50 rounded-3xl mx-auto lg:h-[600px] h-full lg:pb-0 pb-10 lg:pt-10 mb-12"
      >
        <motion.div>
          <h1 className="lg:h2 text-title mt-2 text-2xl font-bold uppercase">
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
          className="h-[500px] lg:h-[450px] flex justify-center items-center pb-10"
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop
        >
          {ListReviews.map((item, index) => (
            <SwiperSlide key={index} className="w-[90%] mx-auto">
              <Reviews {...item} />
            </SwiperSlide>
          ))}
          {/* <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-start h-full ">
              <motion.div
                initial="hidden"
                animate="visible"
                className="text-center lg:max-w-xl lg:text-left mt-16 lg:mt-0 "
              >
                <motion.div
                  variants={slideInFromTop(1)}
                  className="text-5xl font-medium py-[8px] px-[4px] opacity-90"
                >
                  Explore the finest{<br />}
                  <span className="text-accent-default">Global</span> Offers
                </motion.div>
                <motion.div
                  variants={slideInFromLeft(1)}
                  className="py-[8px] px-[4px] opacity-90"
                >
                  <p className="description max-w-[550px] mx-auto lg:mx-0 mb-6 lg:mb-0">
                    Find your idea ride for any adventure with our diverse range
                    of affordable and dependable car rentals
                  </p>
                </motion.div>
                <h1 className="h1"></h1>
              </motion.div>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={slideInFromTop(1)}
                //   className="relative w-full h-full max-h-[50vh] md:max-w-[70vw]
                // lg:max-w-[860px] lg:max-h-[542px]
                // "
              >
                <Image
                  className=" object-contain h-[420px]"
                  src={Taxi2}
                  alt={"hero 1"}
                />
              </motion.div>
            </div> */}
        </Swiper>
      </motion.div>
      <motion.div className="w-[200px] absolute top-[97%] left-[50%] translate-x-[-50%] translate-y-[-50%] right-0 bottom-0 rounded-xs">
        <motion.button className=" font-medium cursor-pointer btn bg-title py-4 px-2 ">
          Xem thêm
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

export default RevviewList;
