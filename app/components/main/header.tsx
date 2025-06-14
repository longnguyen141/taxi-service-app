"use client";
import { menuContext } from "@/app/context/menuContext";
import { SearchContext } from "@/app/context/searchContext";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { BiMenuAltRight, BiX } from "react-icons/bi";
// import { useMediaQuery } from "react-responsive";
// import { Link } from "react-scroll";

function Header() {
  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);
  const { menuActive, setMenuActive } = useContext(menuContext);

  const { setSearchActive } = useContext(SearchContext);

  console.log(menuActive, "menu");

  const router = useRouter();

  // const goToSection = (section: string) => {
  //   router.push(`/#${section}`);
  // };

  const goToSection = (section: string) => {
    const currentPath = window.location.pathname;

    if (currentPath !== "/") {
      // Nếu đang ở trang khác, chuyển về trang chính có hash
      router.push(`/#${section}`);
    } else {
      // Nếu đang ở trang chủ, scroll trực tiếp
      const el = document.getElementById(section);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        // Nếu chưa có phần tử, đợi một chút rồi scroll
        setTimeout(() => {
          const el = document.getElementById(section);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }, 1000);
      }
    }
  };

  // useEffect(() => {
  //   if (router.asPath.includes("#")) {
  //     const id = router.asPath.split("#")[1];
  //     const el = document.getElementById(id);
  //     if (el) {
  //       setTimeout(() => {
  //         el.scrollIntoView({ behavior: "smooth" });
  //       }, 100); // đợi một chút để DOM kịp render
  //     }
  //   }
  // }, [router.asPath]);

  // const desktopMode = useMediaQuery({
  //   query: "(min-width: 1024px)",
  // });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setHeader(true);
      } else {
        setHeader(false);
      }

      if (window.scrollY > 550) {
        setSearchActive(true);
      } else {
        setSearchActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header
      className={`${
        header ? "bg-white shadow-md py-2 " : "bg-transparent shadow-none"
      } fixed w-full max-w-[1920px] mx-auto z-50 transition-all duration-300 `}
    >
      <div className="lg:container mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-around">
        <div className="flex justify-between items-center px-4 py-2">
          <Link
            // to="home"
            href="/#home"
            onClick={() => goToSection("home")}
            // smooth={desktopMode}
            // spy={true}
            // offset={-180}
            // duration={1200}
            className={`cursor-pointer text-xl font-medium ${
              menuActive === "home" ? "active" : ""
            }`}
          >
            <Image
              className="mix-blend-multiply"
              src={"/logo.png"}
              height={64}
              width={60}
              alt={""}
            />
          </Link>
          <div
            className="cursor-pointer lg:hidden"
            onClick={() => setNav(!nav)}
          >
            {nav ? (
              <BiX className="text-4xl" />
            ) : (
              <BiMenuAltRight className="text-4xl" />
            )}
          </div>
        </div>
        <nav
          className={`${
            nav ? "max-h-max py-8 px-4 lg:py-0 lg:px-0" : "max-h-0 lg:max-h-max"
          } flex flex-col w-full bg-white gap-y-6 overflow-hidden font-bold 
          lg:font-medium lg:flex-row lg:w-max lg:gap-x-8 lg:h-max 
          lg:bg-transparent lg:pb-0 transition-all duration-150 text-center lg:text-left uppercase
          text-sm lg:text-[15px] lg:normal-case`}
        >
          <Link
            href={"/#home"}
            className={`cursor-pointer text-xl font-medium ${
              menuActive === "home" ? "active" : ""
            }`}
            // to="home"
            // activeClass="active"
            // smooth={desktopMode}
            // onClick={() => goToSection("/#home")}
            onClick={() => {
              setMenuActive("home");
              goToSection("home");
            }}
            // spy={true}
            // offset={-180}
            // duration={1200}
          >
            Trang chủ
          </Link>
          <Link
            className={`cursor-pointer text-xl font-medium ${
              menuActive === "services" ? "active" : ""
            }`}
            // to="services"
            href="/#services"
            onClick={() => {
              setMenuActive("services");
              goToSection("services"); // ✅ truyền đúng chuỗi
            }}
            // onClick={() => setMenuActive("services")}
            // activeClass="active"
            // smooth={desktopMode}
            // spy={true}
            // offset={-250}
            // duration={1200}
          >
            Dịch vụ
          </Link>
          <Link
            //  className={`cursor-pointer text-xl font-medium ${
            //     menuActive === "services" ? "active" : ""
            //   }`}
            //   // to="services"
            //   href="/#services"
            //   onClick={() => {
            //     setMenuActive("services");
            //     goToSection("services"); // ✅ truyền đúng chuỗi
            //   }}
            className={`cursor-pointer text-xl font-medium ${
              menuActive === "contact" ? "active" : ""
            }`}
            // to="contact"
            // activeClass="active"
            onClick={() => {
              setMenuActive("contact");
              // goToSection("contact"); // ✅ truyền đúng chuỗi
            }}
            // smooth={desktopMode}
            href="/#contact" // offset={-80}
            // duration={1200}
          >
            Liên hệ
          </Link>
          <Link
            className={`cursor-pointer text-xl font-medium ${
              menuActive === "sale" ? "active" : ""
            }`}
            // to="sale"
            // activeClass="active"
            onClick={() => {
              setMenuActive("sale");
              goToSection("sale"); // ✅ truyền đúng chuỗi
            }}
            // smooth={desktopMode}
            // spy={true}
            // offset={-180}
            // duration={1200}
            href="#sale"
          >
            Thông tin khuyến mãi
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
