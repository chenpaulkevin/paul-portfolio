"use client";
import React from "react";
import { easeInOut, motion } from "framer-motion";

const slideRightVariant = {
  initial: {
    x: -80,
    opacity: 0,
  },
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.1,
      duration: 0.4,
      ease: easeInOut,
    },
  },
};
const slideDownVariant = {
  initial: {
    y: -50,
    opacity: 0,
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: 0.2,
      ease: easeInOut,
    },
  },
};
const slideLeftVariant = {
  initial: {
    x: 80,
    opacity: 0,
  },
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.2,
      ease: easeInOut,
    },
  },
};
const slideUpVariant = {
  initial: {
    y: 80,
    opacity: 0,
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 0.2,
      ease: easeInOut,
    },
  },
};

function BrandGrid() {
  return (
    <section className="my-12">
      <div className="w-full h-full lg:h-[100dvh] container mx-auto py-8">
        <div className="grid grid-rows-4 grid-cols-1 lg:grid-cols-4 h-full gap-8 md:gap-12 lg:gap-4">
          <motion.div
            viewport={{ once: true }}
            variants={slideRightVariant}
            initial="initial"
            whileInView="enter"
            className="row-span-4 h-72 md:h-[40dvh] lg:h-auto lg:col-span-2 w-full bg-accent rounded-2xl flex justify-center items-center"
          >
            01
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            variants={slideDownVariant}
            initial="initial"
            whileInView="enter"
            className="row-span-1 h-72 md:h-[40dvh] lg:h-auto w-full bg-accent rounded-2xl flex justify-center items-center"
          >
            02
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            variants={slideLeftVariant}
            initial="initial"
            whileInView="enter"
            className="row-span-1 h-72 md:h-[40dvh] lg:h-auto w-full bg-accent rounded-2xl flex justify-center items-center"
          >
            03
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            variants={slideLeftVariant}
            initial="initial"
            whileInView="enter"
            className="row-span-1 h-72 md:h-[40dvh] lg:h-auto lg:col-span-2 w-full bg-accent rounded-2xl flex justify-center items-center"
          >
            04
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            variants={slideUpVariant}
            initial="initial"
            whileInView="enter"
            className="row-span-2 h-72 md:h-[40dvh] lg:h-auto lg:col-span-2 w-full bg-accent rounded-2xl flex justify-center items-center"
          >
            05
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default BrandGrid;
