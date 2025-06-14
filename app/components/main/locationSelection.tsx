import { SearchContext } from "@/app/context/searchContext";
import React, { useContext } from "react";
import { AiFillEnvironment, AiFillFacebook, AiFillPhone } from "react-icons/ai";

function LocationSelection() {
  const { searchActive } = useContext(SearchContext);
  return (
    <section className="w-full px-6 py-4">
      <h1 className={`h3 text-center mb-4 ${searchActive ? "hidden" : ""} `}>
        Chúng tôi luôn sẵn sàng nhận cuộc gọi từ bạn 24/7
      </h1>
      <div className="w-full flex items-center justify-around">
        <p className="flex text-xl font-medium justify-center items-center">
          <span>
            <AiFillEnvironment fill="#FF0000" size={24} className="mr-1" />
          </span>{" "}
          Địa chỉ: XXX
        </p>
        <p className="flex text-xl font-medium justify-center items-center">
          <span>
            <AiFillPhone fill="#008000" size={24} className="mr-1" />
          </span>{" "}
          Liên lạc: XXX
        </p>
        <p className="flex text-xl font-medium justify-center items-center">
          <span>
            <AiFillFacebook fill="#0866FF" size={24} className="mr-1" />
          </span>{" "}
          Facebook: XXX
        </p>
      </div>
    </section>
  );
}

export default LocationSelection;
