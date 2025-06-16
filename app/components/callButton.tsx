"use client";

import { FaPhoneAlt } from "react-icons/fa";

const CallButton = () => {
  return (
    <a
      href="tel:0123456789" // Số điện thoại của bạn ở đây
      className="fixed bottom-20 right-6 z-50 flex items-center gap-2 px-4 py-3 bg-green-500 text-white font-semibold rounded-full shadow-lg hover:bg-green-600 transition"
    >
      <FaPhoneAlt />
      Gọi ngay
    </a>
  );
};

export default CallButton;
