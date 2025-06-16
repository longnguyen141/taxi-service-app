import Image from "next/image";
import React from "react";

const Service = () => {
  return (
    <div className="services scroll-mt-[200px] mt-[120px]" id="services">
      <div className="container">
        <h3 className="h2 text-title lg:text-3xl text-2xl text-center uppercase mb-[50px]">
          Dịch vụ nổi bật
        </h3>
        <div className="cards flex lg:flex-row flex-col lg:h-[300px] justify-center items-center">
          <div className="card-service lg:h-full flex flex-col justify-center items-center px-4 py-4 my-8 mx-4">
            <div>
              <Image
                className="w-full h-[120px] object-contain"
                src={"/img1.png"}
                width={100}
                height={100}
                alt="service image"
              />
            </div>
            <h4 className="my-3">🚗 Đi nội thành</h4>
            <p>
              Chỉ từ <strong>150.000đ</strong>
            </p>
          </div>
          <div className="card-service lg:h-full flex flex-col justify-center items-center px-4 py-4 my-8 mx-4">
            <div>
              <Image
                className="w-full h-[120px] object-contain"
                src={"/img1.png"}
                width={100}
                height={100}
                alt="service image"
              />
            </div>
            <h4 className="my-3">✈️ Sân bay</h4>
            <p>
              Chỉ từ <strong>200.000đ</strong>
            </p>
          </div>
          <div className="card-service lg:h-full flex flex-col justify-center items-center px-4 py-4 my-8 mx-4">
            <div>
              <Image
                className="w-full h-[120px] object-contain"
                src={"/img1.png"}
                width={100}
                height={100}
                alt="service image"
              />
            </div>
            <h4 className="my-3">🕒 Thuê theo giờ</h4>
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
