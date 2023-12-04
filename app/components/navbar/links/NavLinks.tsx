"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
//Components:
import { NavigationLinks, FooterLinks } from "./data";

const linkVariants = {
  initial: {
    opacity: 0,
    x: 50,
  },
  enter: (i: number) => ({
    opacity: [0, 1],
    x: 0,
    transition: {
      duration: 0.5,
      opacity: { duration: 0.35 },
      delay: 0.4 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: (i: number) => ({
    opacity: 0,
    x: 50,
    transition: {
      duration: 0.4,
      opacity: { duration: 0.35 },
      delay: 0 + i * 0.1,
      ease: [0.76, 0, 0.24, 1],
    },
  }),
};
const footerVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: (i: number) => ({
    opacity: [0, 1],
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.6 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: (i: number) => ({
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.3,
      opacity: { duration: 0.2 },
      delay: 0 + i * 0.1,
      ease: [0.76, 0, 0.24, 1],
    },
  }),
};

function NavLinks() {
  return (
    <div className="h-full pt-20 pl-10 pb-10 pr-10 box-border flex flex-col justify-between">
      <div className="text-secondary text-5xl font-semibold flex flex-col gap-4">
        {NavigationLinks.map((link, i) => {
          return (
            <motion.div
              key={i}
              custom={i}
              variants={linkVariants}
              initial="initial"
              animate="enter"
              exit="exit"
              className="link-value"
            >
              <Link
                className="text-secondary"
                href={link.href}
                target={link.target}
              >
                {link.title}
              </Link>
            </motion.div>
          );
        })}
      </div>
      <div className="flex flex-wrap text-secondary">
        {FooterLinks.map((link, i) => {
          return (
            <div key={`f_${i}`} className="w-1/2">
              <motion.div
                className="flex gap-2 "
                custom={i}
                variants={footerVariants}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <Link
                  className="text-secondary"
                  href={link.href}
                  target={link.target}
                >
                  {link.title}
                </Link>
                <div>&#129109;</div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NavLinks;
