"use client";
import { motion, useAnimate, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

function Door() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [1, 2, 4, 8]);
  const doorY = useTransform(
    scrollYProgress,
    [0, 0.2, 0.3, 0.6, 1],
    ["0px", "200px", "250px", "300px", "400px"]
  );
  return (
    <section ref={ref} className="w-full mt-40 h-[250dvh] overflow-hidden">
      <div className="flex flex-col h-full items-center gap-20 sticky top-0">
        <h1 className="text-primary text-4xl md:text-5xl lg:text-7xl font-bold text-center mb-10 lg:mb-28 sticky top-20">
          Wanna work together?
        </h1>
        <motion.div
          style={{ scale }}
          className="flex flex-col justify-center items-center relative sticky top-20 door-container"
        >
          <motion.div
            style={{ y: doorY }}
            className="bg-primary rounded-t-full shadow-inner door"
          ></motion.div>
          <motion.div style={{ y: doorY }} className="flex h-96 -mt-[1px]">
            <div className="door-light h-[100dvh] w-[300px] md:w-[400px] lg:w-[600px] relative"></div>
            <div className="door-light-2 h-[100dvh] w-[300px] md:w-[400px] lg:w-[600px] relative"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Door;
