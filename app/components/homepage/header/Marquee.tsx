"use client";
import React from "react";
import { motion } from "framer-motion";

const marqueeVariants = {
  animate: {
    x: ["0%", "-50%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 30,
        ease: "linear",
      },
    },
  },
};

const dividerVariants = {
  animate: {
    rotate: -360,
    transition: {
      rotate: {
        duration: 15,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
      },
    },
  },
};

const generateContent = () => (
  <>
    <span> </span>
    <span>Creative Developer</span>
    <motion.span
      variants={dividerVariants}
      animate="animate"
      className="text-accent text-3xl md:text-4xl lg:text-5xl"
    >
      &#10059;
    </motion.span>
    <span>3D Artist</span>
    <motion.span
      variants={dividerVariants}
      animate="animate"
      className="text-accent text-3xl md:text-4xl lg:text-5xl"
    >
      &#10059;
    </motion.span>
    <span>Hello World Specialist</span>
    <motion.span
      variants={dividerVariants}
      animate="animate"
      className="text-accent text-3xl md:text-4xl lg:text-5xl"
    >
      &#10059;
    </motion.span>
    <span>Figma Wizard</span>
    <motion.span
      variants={dividerVariants}
      animate="animate"
      className="text-accent text-3xl md:text-4xl lg:text-5xl"
    >
      &#10059;
    </motion.span>
  </>
);

function Marquee() {
  return (
    <div className="absolute">
      <motion.div
        variants={marqueeVariants}
        animate="animate"
        className="relative whitespace-nowrap flex"
      >
        <p className="text-primary flex gap-4 items-center font-bold text-5xl md:text-6xl lg:text-7xl">
          {generateContent()}
        </p>
        <p className="text-primary flex gap-4 items-center font-bold text-5xl md:text-6xl lg:text-7xl">
          {generateContent()}
        </p>
      </motion.div>
    </div>
  );
}

export default Marquee;
