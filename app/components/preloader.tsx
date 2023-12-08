import React, { useEffect, useState } from "react";

import { easeInOut, motion } from "framer-motion";
const preloaderVars = {
  initial: {
    y: 0,
    borderRadius: "0% 0% 0% 0%",
  },
  exit: {
    y: "-100vh",
    borderRadius: "0% 0% 45% 45%",
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.2,
    },
  },
};
const wordVars = {
  initial: {
    opacity: 0,
    y: "-100%",
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.2,
      ease: easeInOut,
    },
  },
};

export default function Preloader() {
  const [index, setIndex] = useState(0);
  const words = [
    "Hello",
    "你好",
    "Bonjour",
    "こんにちは",
    "Привет",
    "Kamusta",
    "안녕하세요",
    "ہیلو",
    "Welcome",
  ];
  useEffect(() => {
    if (index === words.length - 1) return;
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index === 0 ? 1000 : 200
    );
  }, [index, words.length]);
  return (
    <>
      <motion.div
        key="background"
        variants={preloaderVars}
        initial="initial"
        exit="exit"
        className="top-0 left-0 subpixel-antialiased bg-primary fixed z-50 h-screen w-full flex items-center justify-center font-black tracking-wider text-4xl md:text-7xl lg:text-9xl text-secondary z-[100]"
      >
        <motion.p
          key="words"
          variants={wordVars}
          initial="initial"
          animate="enter"
        >
          {words[index]}
        </motion.p>
      </motion.div>
    </>
  );
}
