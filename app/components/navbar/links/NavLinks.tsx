"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { NavigationLinks, FooterLinks } from "./data";

// Components
const ArrowUpRight = dynamic(() => import("../../ArrowUpRight"));

const linkVariants = {
  initial: { opacity: 0, x: 50 },
  enter: (i: any) => ({
    opacity: [0, 1],
    x: 0,
    transition: {
      duration: 0.5,
      opacity: { duration: 0.35 },
      delay: 0.4 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: (i: any) => ({
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
  initial: { opacity: 0, y: 20 },
  enter: (i: any) => ({
    opacity: [0, 1],
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.6 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: (i: any) => ({
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
        {NavigationLinks.map((link, i) => (
          <motion.div
            key={link.title} // Use a unique key
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
        ))}
      </div>
      <div className="flex flex-wrap text-secondary">
        {FooterLinks.map((link, i) => (
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
                <div className="flex items-center justify-center">
                  <div>{link.title}</div>
                  <div className="h-4 w-4 flex justify-center items-center">
                    <ArrowUpRight
                      props={{
                        bgColor: "bg-secondary",
                        width: 1,
                        length: 10,
                      }}
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NavLinks;
