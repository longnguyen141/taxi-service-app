import Image from "next/image";
import React from "react";

function Standard() {
  return (
    <section
      className="flex flex-col items-center px-4 py-6 w-[90%] mx-auto"
      id="standard"
    >
      <div className="text-center mb-8">
        <h2 className="h2">
          Chúng tôi không ngừng đổi mới và hoàn thiện từng ngày
        </h2>
        {/* <h2>Nhờ những góp ý tuyệt vời từ bạn</h2> */}
        <p className="text-xl">
          Chúng tôi luôn nổ lực để đem đến cho bạn sự an tâm và tiện lợi để bạn
          luôn có trải nghiệm tốt nhất
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <div className="card my-4 mx-4">
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
        </div>
        <div className="card my-4 mx-4">
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
        </div>
        <div className="card my-4 mx-4">
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
        </div>
      </div>
    </section>
  );
}

export default Standard;
