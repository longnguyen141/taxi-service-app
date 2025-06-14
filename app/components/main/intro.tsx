import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motions";

const Intro = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <h3>Tại sao chọn My Taxi?</h3>

      <motion.div
        variants={slideInFromTop(1)}
        className="welcome-box py-[8px] px-[4px] border border-[#7042f88b] opacity-90"
      >
        <li>✅ Phục vụ nội thành – ngoại thành</li>
      </motion.div>
      <motion.div
        variants={slideInFromRight(1)}
        className="welcome-box py-[8px] px-[4px] border border-[#7042f88b] opacity-90"
      >
        <li>✅ Phục vụ nội thành – ngoại thành</li>
      </motion.div>
      <motion.div
        variants={slideInFromLeft(1)}
        className="welcome-box py-[8px] px-[4px] border border-[#7042f88b] opacity-90"
      >
        <li>✅ Phục vụ nội thành – ngoại thành</li>
      </motion.div>
      <div className="container">
        {/* <ul>
          
          <li>✅ Tài xế chuyên nghiệp, thân thiện</li>
          <li>✅ Xe đời mới, sạch sẽ</li>
          <li>✅ Giá cả rõ ràng, không phát sinh</li>
        </ul> */}
      </div>
    </motion.div>
  );
};

export default Intro;
