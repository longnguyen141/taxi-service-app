import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-20">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & giới thiệu */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">TaxiGo</h2>
          <p className="text-sm text-gray-300">
            Dịch vụ đưa đón khách nhanh chóng, an toàn, tiện lợi — đồng hành
            cùng bạn trên mọi hành trình.
          </p>
        </div>

        {/* Liên kết nhanh */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Liên kết</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#home" className="hover:text-yellow-400">
                Trang chủ
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-yellow-400">
                Dịch vụ
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-yellow-400">
                Giới thiệu
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-400">
                Liên hệ
              </a>
            </li>
          </ul>
        </div>

        {/* Thông tin liên hệ */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Liên hệ</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>📞 0901 234 567</li>
            <li>📧 contact@taxigo.vn</li>
            <li>📍 123 Đường Nguyễn Huệ, TP. Đà Nẵng</li>
          </ul>
        </div>

        {/* Mạng xã hội */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Theo dõi chúng tôi</h3>
          <div className="flex space-x-4 text-gray-300 text-xl">
            <a href="#" className="hover:text-yellow-400">
              🌐
            </a>
            <a href="#" className="hover:text-yellow-400">
              📘
            </a>
            <a href="#" className="hover:text-yellow-400">
              📸
            </a>
          </div>
        </div>
      </div>

      {/* Bản quyền */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        © 2025 TaxiGo. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
