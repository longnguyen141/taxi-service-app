"use client";

import React, { useContext, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

// slide css
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// // slide module
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import Taxi1 from "../../../public/hero1.jpg";
import Taxi2 from "../../../public/hero2.jpg";
import Taxi3 from "../../../public/hero3.jpg";
import Search from "./search";
import { SearchContext } from "@/app/context/searchContext";
import { slideInFromLeft, slideInFromTop } from "@/utils/motions";
import { Link } from "react-scroll";
import { useMediaQuery } from "react-responsive";
import { menuContext } from "@/app/context/menuContext";

function Hero() {
  const { searchActive } = useContext(SearchContext);
  const { setMenuActive } = useContext(menuContext);
  const desktopMode = useMediaQuery({
    query: "(min-width: 1300px)",
  });
  const [activeIndex, setActiveIndex] = useState(0);

  const textVariants = [
    {
      hidden: { opacity: 0, x: -100 },
      visible: { opacity: 1, x: 0 },
    },
    {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    },
    {
      hidden: { opacity: 0, x: 100 },
      visible: { opacity: 1, x: 0 },
    },
  ];

  const slides = [
    {
      title: "Dịch vụ taxi an toàn & tiện lợi",
      description:
        "Chúng tôi cam kết đưa bạn đến nơi an toàn, đúng giờ và thoải mái.",
      image: Taxi1,
    },
    {
      title: "Đặt xe dễ dàng chỉ với một cú chạm",
      description: "Ứng dụng thông minh giúp bạn gọi xe mọi lúc, mọi nơi.",
      image: "/hero2.jpg",
    },
    {
      title: "Đội ngũ tài xế chuyên nghiệp",
      description: "Lịch sự – Nhiệt tình – Tận tâm – Phục vụ 24/7.",
      image: "/hero3.jpg",
    },
  ];
  return (
    <section className="pt-20 w-full bg-[#b2b7c2]/10" id="home">
      <div className="container mx-auto h-full lg:pt-10">
        {/* <Swiper
          navigation={true}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop
        >
          <SwiperSlide>
            <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-start h-full ">
              <motion.div
                initial="hidden"
                animate="visible"
                viewport={{ once: false, amount: 0.6 }}
                // whileInView={"show"}
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
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-start h-full ">
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
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              className="w-full object-contain h-[520px]"
              src={Taxi3}
              alt={"hero 3"}
            />
          </SwiperSlide>
        </Swiper> */}
        {/* <Swiper
          slidesPerView={1}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {[0, 1, 2].map((index) => (
            <SwiperSlide key={index}>
              <div className="h-96 bg-gray-100 flex flex-col items-center justify-center gap-4">
                <div className="text-2xl font-bold">Slide {index + 1}</div>

                <motion.div
                  initial="hidden"
                  animate={activeIndex === index ? "visible" : "hidden"}
                  variants={textVariants[index]}
                  transition={{ duration: 0.6 }}
                  className="text-lg text-gray-700"
                >
                  Đây là nội dung xuất hiện theo hướng khác nhau
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper> */}
        <Swiper slidesPerView={1} loop>
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[600px]">
                {/* Background Image */}
                <Image
                  src={slide.image}
                  alt={`Taxi slide ${index + 1}`}
                  fill
                  className="object-cover"
                  priority
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-center px-6 text-white text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="max-w-2xl"
                  >
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-xl mb-6">
                      {slide.description}
                    </p>
                    <Link
                      smooth={desktopMode}
                      spy={true}
                      offset={-80}
                      duration={1200}
                      onClick={() => setMenuActive("contact")}
                      to="contact"
                      className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full shadow-md hover:bg-yellow-300 transition"
                    >
                      Liên hệ ngay
                    </Link>
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* {searchActive ? (
        <div className="fixed top-[92px] z-20 w-full max-w-[1920px]">
          <Search />
        </div>
      ) : (
        <div className=" w-full  mx-auto">
          <Search />
        </div>
      )} */}

      {/* <div className="container">
        <h2>Dịch vụ taxi an toàn – nhanh chóng – đúng giờ</h2>
        <a href="#contact" className="btn-primary">
          🚕 Đặt xe ngay
        </a>
      </div> */}
      {/* 
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            className="w-full object-contain h-[520px]"
            src={Taxi1}
            alt={"hero 1"}
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image
            className="w-full object-contain h-[520px]"
            src={Taxi2}
            alt={"hero 2"}
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image
            className="w-full object-contain h-[520px]"
            src={Taxi3}
            alt={"hero 3"}
          />
        </SwiperSlide>
      </Swiper> */}
    </section>
  );
}

export default Hero;
