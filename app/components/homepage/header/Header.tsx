"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
//Components:
import Marquee from "./Marquee";
import Balls from "./Balls";
import LearnMore from "/public/learn-more.png";

const spinAnimation = {
  animate: {
    rotate: 360,
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

function Header() {
  return (
    <section>
      <div className="container mx-auto pt-8 h-[calc(100dvh-7rem)] pb-8">
        <div className="hero flex flex-col gap-8 h-full">
          <div>
            <h1 className="text-primary text-center font-bold text-5xl md:text-6xl lg:text-7xl lg:text-start m-0">
              Hi, I&#39;m Paul.
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <h1 className="hidden lg:flex text-primary text-center font-bold text-5xl md:text-6xl lg:text-7xl lg:text-start m-0">
              Your Next
            </h1>
            <div className="overflow-hidden relative w-full lg:w-1/2 h-20 md:h-24 lg:h-28 py-3 rounded-full border-2 border-primary items-center flex justify-start">
              <Marquee></Marquee>
            </div>
          </div>
          <div className="h-full w-full mt-6 relative rounded-2xl overflow-hidden bg-violet-950 bg-opacity-40">
            <div className="bg-secondary rounded-2xl h-56 w-56 bottom-0 left-0 absolute z-10 hidden lg:flex">
              <div className="flex relative w-full h-full rounded-2xl justify-center items-center text-5xl text-primary">
                <div className="absolute z-20">&#8595;</div>
                <motion.div
                  variants={spinAnimation}
                  animate="animate"
                  className="w-3/4 h-3/4 rounded-full absolute"
                >
                  <Image
                    src={LearnMore}
                    alt="learn more image"
                    fill
                    quality={100}
                    sizes="(max-width: 768px) 0vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                    style={{ objectFit: "cover" }}
                  ></Image>
                </motion.div>
              </div>
              <div className="h-8 w-8 bg-transparent clips absolute rounded-full  -top-8"></div>
              <div className="h-8 w-8 bg-transparent clips absolute rounded-full  bottom-0 -right-8"></div>
            </div>

            <Balls></Balls>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
