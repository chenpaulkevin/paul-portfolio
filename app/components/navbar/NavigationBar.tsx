"use client";
import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
//Components:
import webLogo from "../../../public/Logo.png";
import MenuButton from "./MenuButton";
import NavLinks from "./links/NavLinks";

const menuVariants = {
  open: {
    width: 350,
    height: 550,
    top: -8,
    right: -8,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  closed: {
    width: 0,
    height: 0,
    top: 0,
    right: 0,
    opacity: 0,
    transition: {
      duration: 0.5,
      delay: 0.35,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

function NavigationBar() {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <nav className="container mx-auto h-28 flex content-center">
        <div className="flex w-full justify-between items-center">
          <div>
            <Link href="/">
              <Image
                className="h-auto w-24"
                src={webLogo}
                alt="Paul Logo"
                priority
              ></Image>
            </Link>
          </div>
          <div className="relative cursor-pointer">
            <MenuButton
              isActive={isActive}
              setIsActive={setIsActive}
            ></MenuButton>
            <motion.div
              variants={menuVariants}
              animate={isActive ? "open" : "closed"}
              initial="closed"
              className="w-[350px] h-[550px] rounded-[2rem] absolute z-40 right-0 top-0 menu"
            >
              <AnimatePresence>{isActive && <NavLinks />}</AnimatePresence>
            </motion.div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavigationBar;
