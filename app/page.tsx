"use client";

import { useEffect } from "react";
import About from "./components/main/about";
import Standard from "./components/main/standard";
import Contact from "./components/main/contact";
import Footer from "./components/main/footer";
import Hero from "./components/main/hero";
import Service from "./components/main/service";
import LocationTourist from "./components/main/locationTourist";
import RevviewList from "./components/main/revviewList";
import ScrollToTopButton from "./components/main/scrollToTopButton";
import CallButton from "./components/callButton";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.substring(1);
        const el = document.getElementById(id);
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: "smooth" });
          }, 300);
        }
      }
    }
  }, []);

  useEffect(() => {
    const id = window.location.hash.substring(1);

    setTimeout(() => {
      const el2 = document.getElementById(id);
      if (el2) el2.scrollIntoView({ behavior: "smooth" });
    }, 500);
  }, []);

  return (
    <main className="max-w-[1920px] bg-white mx-auto relative overflow-x-hidden">
      <Hero />
      <About />
      <LocationTourist />
      <Standard />
      <RevviewList />
      {/* <Intro /> */}
      <Service />
      <Contact />
      <Footer />
      <ScrollToTopButton />
      <CallButton />
    </main>
  );
}
