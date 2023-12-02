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
const marqueeVariants2 = {
  animate: {
    x: ["-50%", "0%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 40,
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
    <span>Hello</span>
    <motion.span
      variants={dividerVariants}
      animate="animate"
      className="text-accent text-5xl md:text-6xl lg:text-7xl"
    >
      &#10059;
    </motion.span>
    <span>Bonjour</span>
    <motion.span
      variants={dividerVariants}
      animate="animate"
      className="text-accent text-5xl md:text-6xl lg:text-7xl"
    >
      &#10059;
    </motion.span>
    <span>Kamusta</span>
    <motion.span
      variants={dividerVariants}
      animate="animate"
      className="text-accent text-5xl md:text-6xl lg:text-7xl"
    >
      &#10059;
    </motion.span>
    <span>Cześć</span>
    <motion.span
      variants={dividerVariants}
      animate="animate"
      className="text-accent text-5xl md:text-6xl lg:text-7xl"
    >
      &#10059;
    </motion.span>
    <span>こんにちは</span>
    <motion.span
      variants={dividerVariants}
      animate="animate"
      className="text-accent text-5xl md:text-6xl lg:text-7xl"
    >
      &#10059;
    </motion.span>
    <span>Вітаю</span>
    <motion.span
      variants={dividerVariants}
      animate="animate"
      className="text-accent text-5xl md:text-6xl lg:text-7xl"
    >
      &#10059;
    </motion.span>
    <span>Kia ora </span>
    <motion.span
      variants={dividerVariants}
      animate="animate"
      className="text-accent text-5xl md:text-6xl lg:text-7xl"
    >
      &#10059;
    </motion.span>
    <span>నమస్తే </span>
    <motion.span
      variants={dividerVariants}
      animate="animate"
      className="text-accent text-5xl md:text-6xl lg:text-7xl"
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
        className="relative whitespace-nowrap flex mb-20"
      >
        <p className="text-primary flex gap-4 items-center font-bold text-6xl md:text-7xl lg:text-9xl">
          {generateContent()}
        </p>
        <p className="text-primary flex gap-4 items-center font-bold text-6xl md:text-7xl lg:text-9xl">
          {generateContent()}
        </p>
      </motion.div>
      <motion.div
        variants={marqueeVariants2}
        animate="animate"
        className="relative whitespace-nowrap flex"
      >
        <p className="text-primary flex gap-4 items-center font-bold text-6xl md:text-7xl lg:text-9xl">
          {generateContent()}
        </p>
        <p className="text-primary flex gap-4 items-center font-bold text-6xl md:text-7xl lg:text-9xl">
          {generateContent()}
        </p>
      </motion.div>
    </div>
  );
}

export default Marquee;
