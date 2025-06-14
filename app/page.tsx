"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import About from "./components/main/about";
import Standard from "./components/main/standard";
import Contact from "./components/main/contact";
import Footer from "./components/main/footer";
import Hero from "./components/main/hero";
import Service from "./components/main/service";
import LocationTourist from "./components/main/locationTourist";
import RevviewList from "./components/main/revviewList";

export default function Home() {
  // const pathname = usePathname();

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const hash = window.location.hash;
  //     if (hash) {
  //       const id = hash.substring(1);
  //       const el = document.getElementById(id);
  //       if (el) {
  //         setTimeout(() => {
  //           el.scrollIntoView({ behavior: "smooth" });
  //         }, 200); // Chờ 1 chút để DOM render
  //       }
  //     }
  //   }
  // }, [pathname]);

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    // Lần đầu load
    scrollToHash();

    // Mỗi lần hash thay đổi
    window.addEventListener("hashchange", scrollToHash);

    return () => {
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);
  return (
    <main className="max-w-[1920px] bg-white mx-auto relative overflow-hidden">
      <Hero />
      <About />
      <LocationTourist />
      <Standard />
      <RevviewList />
      {/* <Intro /> */}
      <Service />
      <Contact />
      <Footer />
    </main>
  );
}
