import { fadeIn } from "@/utils/motions";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <div className="relative w-full bg-white px-6 py-20 md:py-28 flex flex-col-reverse md:flex-row items-center justify-center gap-12 overflow-hidden">
      {/* Ảnh nổi dạng card */}
      <div className="relative w-[300px] h-[350px]">
        {/* Card 1 */}
        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="absolute top-0 left-0 w-40 h-56 bg-white shadow-lg rounded-xl overflow-hidden border"
        >
          <Image src="/img1.png" alt="card1" fill className="object-cover" />
        </motion.div>

        {/* Card 2 */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="absolute top-10 left-[90px] w-44 h-60 bg-white shadow-lg rounded-xl overflow-hidden border z-10"
        >
          <Image src="/img1.png" alt="card2" fill className="object-cover" />
        </motion.div>

        {/* Card 3 */}
        <motion.div
          variants={fadeIn("down", 0.7)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="absolute bottom-0 right-0 w-40 h-56 bg-white shadow-lg rounded-xl overflow-hidden border"
        >
          <Image src="/img1.png" alt="card3" fill className="object-cover" />
        </motion.div>
      </div>

      {/* Nội dung giới thiệu */}
      <motion.div className="max-w-lg text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          <motion.span
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="text-yellow-400"
          >
            Tiêu chí{" "}
          </motion.span>
          <motion.span
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="text-black"
          >
            Dịch vụ
          </motion.span>
        </h2>
        <motion.p
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="text-gray-600 text-base md:text-lg leading-relaxed"
        >
          Chúng tôi không ngừng đổi mới và hoàn thiện dịch vụ để mang đến sự an
          tâm và tiện lợi trong từng chuyến đi. Mỗi hành trình cùng bạn là một
          cam kết về chất lượng và sự chuyên nghiệp.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default About;
