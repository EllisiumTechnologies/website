import { motion } from "framer-motion";
import React from "react";

const FontAnimation = () => {
  return (
    <div className="h-200 py-10 px-10 w-full">
      <div className="relative w-xl left-0">
        <h1 className="text-black text-[2.6vw] font-extrabold  font-serif">
          Manish is this that
        </h1>
        <motion.div
          initial={{ scaleX:1 }}
          whileInView={{ scaleX:0 }}
          transition={{ duration: 1, delay: 1 }}
          className="h-full w-full absolute origin-right top-0 bg-[#B6BAA8]"
        />
        <motion.div
          initial={{ scaleX:1 }}
          whileInView={{ scaleX:0}}
          transition={{ duration: 0.7, delay: 1 }}
          className="h-full w-full absolute origin-right top-0 bg-black"
        />
        <motion.div
          initial={{ scaleX:1 }}
          whileInView={{ scaleX:0 }}
          transition={{ duration: 0.4, delay: 1 }}
          className="h-full w-full absolute origin-right top-0 bg-[#B6BAA8]"
        />
      </div>
    </div>
  );
};

export default FontAnimation;
