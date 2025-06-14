import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    // <section className="flex items-center bg-red-500 h-[800px]" id="about">
    //   {/* <motion.div className="left-content w-[50%]">
    //     <motion.div>
    //       <Image src={"/img1.png"} width={200} height={60} alt={""} />
    //     </motion.div>
    //     <motion.div>
    //       <Image src={"/img1.png"} width={200} height={60} alt={""} />
    //     </motion.div>
    //     <motion.div>
    //       <Image src={"/img1.png"} width={200} height={60} alt={""} />
    //     </motion.div>
    //   </motion.div>
    //   <motion.div className="right-content w-[50%]">
    //     <h3 className="h2">Dịch vụ của chúng tôi</h3>
    //     <p>
    //       Chúng tôi cung cấp dịch vụ đưa đón khách an toàn, nhanh chóng và tiện
    //       lợi. Với đội ngũ tài xế chuyên nghiệp và hệ thống xe hiện đại, chúng
    //       tôi cam kết mang đến trải nghiệm di chuyển thoải mái và đáng tin cậy –
    //       mọi lúc, mọi nơi.
    //     </p>
    //   </motion.div> */}
    //   <div className="relative w-full bg-white px-6 py-16 md:py-24 flex flex-col md:flex-row items-center justify-center gap-12">
    //     {/* Ảnh nổi kiểu card */}
    //     <div className="relative w-72 h-72">
    //       <motion.div
    //         initial={{ rotate: -10, y: -20, opacity: 0 }}
    //         animate={{ rotate: -5, y: 0, opacity: 1 }}
    //         transition={{ duration: 0.6 }}
    //         className="absolute top-0 left-0 w-40 h-56 bg-white shadow-xl rounded-xl overflow-hidden border"
    //       >
    //         <Image src={"/img1.png"} alt="img1" fill className="object-cover" />
    //       </motion.div>

    //       <motion.div
    //         initial={{ rotate: 10, y: 20, opacity: 0 }}
    //         animate={{ rotate: 5, y: 0, opacity: 1 }}
    //         transition={{ duration: 0.6, delay: 0.3 }}
    //         className="absolute bottom-0 right-0 w-40 h-56 bg-white shadow-xl rounded-xl overflow-hidden border"
    //       >
    //         <Image src={"/img1.png"} alt="img2" fill className="object-cover" />
    //       </motion.div>
    //       <motion.div
    //         initial={{ rotate: 20, y: 40, opacity: 0 }}
    //         animate={{ rotate: 10, y: 0, opacity: 1 }}
    //         transition={{ duration: 0.6, delay: 0.6 }}
    //         className="absolute bottom-[-100px] right-10 w-40 h-56 bg-white shadow-xl rounded-xl overflow-hidden border"
    //       >
    //         <Image src={"/img1.png"} alt="img2" fill className="object-cover" />
    //       </motion.div>
    //     </div>

    //     {/* Text giới thiệu */}
    //     <div className="max-w-lg">
    //       <h2 className="text-3xl md:text-4xl font-semibold mb-4">
    //         <span className="text-yellow-400">Presenting </span>
    //         <span className="text-black">ourselves</span>
    //       </h2>
    //       <p className="text-gray-600 text-base md:text-lg leading-relaxed">
    //         Chúng tôi luôn nỗ lực cải tiến để mang đến dịch vụ đưa đón an toàn,
    //         chuyên nghiệp và tiện lợi nhất. Cam kết đồng hành cùng bạn trên mọi
    //         hành trình.
    //       </p>
    //     </div>
    //   </div>
    // </section>
    <div className="relative w-full bg-white px-6 py-20 md:py-28 flex flex-col md:flex-row items-center justify-center gap-12 overflow-hidden">
      {/* Ảnh nổi dạng card */}
      <div className="relative w-[300px] h-[350px]">
        {/* Card 1 */}
        <motion.div
          initial={{ rotate: -12, x: -60, y: -30, opacity: 0 }}
          animate={{ rotate: -6, x: -30, y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="absolute top-0 left-0 w-40 h-56 bg-white shadow-lg rounded-xl overflow-hidden border"
        >
          <Image src="/img1.png" alt="card1" fill className="object-cover" />
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute top-10 left-[90px] w-44 h-60 bg-white shadow-lg rounded-xl overflow-hidden border z-10"
        >
          <Image src="/img1.png" alt="card2" fill className="object-cover" />
        </motion.div>

        {/* Card 3 */}
        <motion.div
          initial={{ rotate: 12, x: 60, y: 30, opacity: 0 }}
          animate={{ rotate: 6, x: 30, y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="absolute bottom-0 right-0 w-40 h-56 bg-white shadow-lg rounded-xl overflow-hidden border"
        >
          <Image src="/img1.png" alt="card3" fill className="object-cover" />
        </motion.div>
      </div>

      {/* Nội dung giới thiệu */}
      <div className="max-w-lg text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          <span className="text-yellow-400">Presenting </span>
          <span className="text-black">ourselves</span>
        </h2>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          Chúng tôi không ngừng đổi mới và hoàn thiện dịch vụ để mang đến sự an
          tâm và tiện lợi trong từng chuyến đi. Mỗi hành trình cùng bạn là một
          cam kết về chất lượng và sự chuyên nghiệp.
        </p>
      </div>
    </div>
  );
};

export default About;
