import Image from "next/image";
import React from "react";

const Service = () => {
  return (
    <div className="services mt-[120px]" id="services">
      <div className="container">
        <h3 className="h2 text-center uppercase mb-[50px]">Dịch vụ nổi bật</h3>
        <div className="cards flex lg:flex-row flex-col lg:h-[300px] justify-center items-center">
          <div className="card h-full flex flex-col justify-center items-center my-8">
            <div>
              <Image
                className="w-full h-[120px] object-contain"
                src={"/img1.png"}
                width={100}
                height={100}
                alt="service image"
              />
            </div>
            <h4>🚗 Đi nội thành</h4>
            <p>
              Chỉ từ <strong>150.000đ</strong>
            </p>
          </div>
          <div className="card h-full flex flex-col justify-center items-center my-8">
            <div>
              <Image
                className="w-full h-[120px] object-contain"
                src={"/img1.png"}
                width={100}
                height={100}
                alt="service image"
              />
            </div>
            <h4>✈️ Sân bay</h4>
            <p>
              Chỉ từ <strong>200.000đ</strong>
            </p>
          </div>
          <div className="card h-full flex flex-col justify-center items-center my-8">
            <div>
              <Image
                className="w-full h-[120px] object-contain"
                src={"/img1.png"}
                width={100}
                height={100}
                alt="service image"
              />
            </div>
            <h4>🕒 Thuê theo giờ</h4>
            <p>
              Chỉ <strong>100.000đ/giờ</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
