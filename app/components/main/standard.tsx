import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motions";

function Standard() {
  return (
    <section
      className="flex flex-col items-center px-4 py-6 w-[90%] mx-auto"
      id="standard"
    >
      <motion.div
        variants={fadeIn("down", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
        className="text-center mb-8"
      >
        <h2 className="h2 lg:text-3xl text-2xl font-bold uppercase">
          Chúng tôi không ngừng đổi mới và hoàn thiện từng ngày
        </h2>
        {/* <h2>Nhờ những góp ý tuyệt vời từ bạn</h2> */}
        <p className="text-xl">
          Chúng tôi luôn nổ lực để đem đến cho bạn sự an tâm và tiện lợi để bạn
          luôn có trải nghiệm tốt nhất
        </p>
      </motion.div>
      <motion.div className="flex flex-col lg:flex-row justify-center items-center">
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.6 }}
          className="card my-4 mx-4"
        >
          <div>
            <Image
              className="card-img w-full"
              src={"/img1.png"}
              width={100}
              height={100}
              alt="Standard1"
            />
          </div>
          <div className="card-content">
            <h3 className="card-title">Đảm bảo an toàn</h3>
            <p className="card-desc">
              Chúng tôi luôn cố gắng mang đến bạn sự an tâm trong mỗi chuyến xe
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.6 }}
          className="card my-4 mx-4"
        >
          <div>
            <Image
              className="card-img w-full"
              src={"/img1.png"}
              width={100}
              height={100}
              alt="Standard1"
            />
          </div>
          <div className="card-content">
            <h3 className="card-title">Đảm bảo an toàn</h3>
            <p className="card-desc">
              Chúng tôi luôn cố gắng mang đến bạn sự an tâm trong mỗi chuyến xe
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.6 }}
          className="card my-4 mx-4"
        >
          <div>
            <Image
              className="card-img w-full"
              src={"/img1.png"}
              width={100}
              height={100}
              alt="Standard1"
            />
          </div>
          <div className="card-content">
            <h3 className="card-title">Đảm bảo an toàn</h3>
            <p className="card-desc">
              Chúng tôi luôn cố gắng mang đến bạn sự an tâm trong mỗi chuyến xe
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Standard;
