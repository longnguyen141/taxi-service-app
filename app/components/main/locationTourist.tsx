"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/utils/motions";

function LocationTourist() {
  const animation = (e: React.MouseEvent) => {
    const cards = document.querySelectorAll(".card-location");

    const reset = () => {
      cards.forEach((card) => card.classList.remove("animation"));
    };

    const target = e.target as HTMLElement;
    if (!target.closest(".card-location")) return;
    reset();
    if (target && target.parentElement) {
      target.parentElement.classList.add("animation");
    }
  };
  return (
    <motion.div initial="hidden" animate="visible">
      <motion.div
        variants={slideInFromTop(1)}
        className=" w-full flex items-center justify-center text-white"
      >
        <h1 className="h2 text-title text-4xl text-center">
          Hành trình du lịch thêm phần trọn vẹn với dịch vụ xe chất lượng.
        </h1>
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="grid lg:h-[100vh] h-[60vh] place-items-center"
      >
        <div className="flex gap-[0.15rem] p-[0.5rem]">
          <div
            onClick={animation}
            className="card-location relative flex-1 h-[70vmin] cursor-pointer overflow-hidden transition delay-700"
          >
            <Image
              src={"/location1.jpg"}
              alt="img"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
          <div
            onClick={animation}
            className="card-location relative flex-1 h-[70vmin] cursor-pointer overflow-hidden transition delay-700"
          >
            <Image
              src={"/location2.jpg"}
              alt="img"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
          <div
            onClick={animation}
            className="card-location relative flex-1 h-[70vmin] cursor-pointer overflow-hidden transition delay-700"
          >
            <Image
              src={"/location3.jpg"}
              alt="img"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
          <div
            onClick={animation}
            className="card-location relative flex-1 h-[70vmin] cursor-pointer overflow-hidden transition delay-700"
          >
            <Image
              src={"/location4.png"}
              //    src={"/location5.png"}
              alt="img"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
          <div
            onClick={animation}
            className="card-location relative flex-1 h-[70vmin] cursor-pointer overflow-hidden transition delay-700"
          >
            <Image
              src={"/location5.png"}
              alt="img"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
          <div
            onClick={animation}
            className="card-location relative flex-1 h-[70vmin] cursor-pointer overflow-hidden transition delay-700"
          >
            <Image
              src={"/location6.jpg"}
              alt="img"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default LocationTourist;
