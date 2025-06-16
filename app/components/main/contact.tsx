"use client";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Gửi dữ liệu qua API hoặc dịch vụ email ở đây
    alert("Cảm ơn bạn đã liên hệ!");
    setFormData({ name: "", email: "", message: "", phone: "" });
  };
  return (
    // <div className="contact" id="contact">
    //   <div className="container">
    //     <h3>Liên hệ đặt xe</h3>
    //     <p>
    //       📞 Gọi ngay: <a href="tel:0123456789">0123456789</a>
    //     </p>
    //     <p>
    //       💬 Chat Zalo: <a href="https://zalo.me">Zalo.me</a>
    //     </p>
    //     <form>
    //       <input type="text" placeholder="Họ tên" required />
    //       <input type="tel" placeholder="Số điện thoại" required />
    //       <input type="text" placeholder="Điểm đón" required />
    //       <input type="text" placeholder="Điểm đến" />
    //       <textarea placeholder="Ghi chú"></textarea>
    //       <button type="submit">Gửi yêu cầu</button>
    //     </form>
    //   </div>
    // </div>
    <div
      id="contact"
      className="bg-white py-16 px-6 md:px-16 max-w-3xl mx-auto scroll-mt-[110px]"
    >
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Liên hệ với chúng tôi
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Họ và tên
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">SĐT</label>
          <input
            type="number"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Nội dung
          </label>
          <textarea
            name="message"
            rows={4}
            required
            value={formData.message}
            onChange={handleChange}
            className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-4 rounded-md transition"
        >
          Gửi liên hệ
        </button>
      </form>
    </div>
  );
};

export default Contact;
