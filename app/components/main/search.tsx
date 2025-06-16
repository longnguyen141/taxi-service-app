"use client";
import { SearchContext } from "@/app/context/searchContext";
import React, { useContext } from "react";
import { motion } from "framer-motion";
import LocationSelection from "./locationSelection";
import { slideInFromLeft } from "@/utils/motions";

function Search() {
  const { searchActive } = useContext(SearchContext);
  return (
    <motion.div
      variants={slideInFromLeft(1)}
      initial="hidden"
      animate="visible"
      className={`${
        searchActive
          ? "bg-[#fef3c7] shadow-2xl rounded-none md-h-[80px]"
          : "bg-[#fef3c7] shadow-2xl w-full lg:h-[120px]"
      } hidden lg:block w-full shadow-lg transition-all duration-100`}
    >
      <div className="lg:h-full flex items-center px-6 lg:px-0">
        <LocationSelection />
      </div>
    </motion.div>
  );
}

export default Search;
