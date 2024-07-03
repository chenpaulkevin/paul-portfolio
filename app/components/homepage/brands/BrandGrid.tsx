"use client";
import React from "react";
import { easeInOut, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

//Components:
import MarkDark from "/public/mark-dark.png";
import ApexCode from "/public/apex-code.jpg";
import AddIn from "/public/add-in.jpg";
import Zenyama from "/public/zenyama.jpg";
import Raijin from "/public/raijin.jpg";

const ArrowUpRight = dynamic(() => import("../../ArrowUpRight"));

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
    <section className="md:my-12 overflow-hidden">
      <div className="w-full h-full lg:h-[100dvh] container mx-auto py-8">
        <div className="grid grid-rows-4 grid-cols-1 lg:grid-cols-4 h-full gap-8 md:gap-12 lg:gap-4">
          <motion.div
            viewport={{ once: true }}
            variants={slideRightVariant}
            initial="initial"
            whileInView="enter"
            className="row-span-1 lg:row-span-4 h-72 md:h-[40dvh] lg:h-auto lg:col-span-2 w-full bg-bento overflow-hidden rounded-2xl flex justify-center items-center relative"
          >
            <Link
              className="absolute w-full h-full z-20"
              aria-label="Learn More about Apex Code's Brand Identity Guidelines"
              href="https://www.behance.net/gallery/185866727/Apex-Code-Brand-Guidelines"
              target="_blank"
            ></Link>
            <Image
              src={ApexCode}
              quality={80}
              fill
              alt="Apex Code Brand Identity"
              sizes="(min-width: 1540px) 760px, (min-width: 1280px) 552px, (min-width: 1040px) 440px, (min-width: 780px) 704px, (min-width: 640px) 576px, calc(100vw - 32px)"
              style={{ objectFit: "cover", objectPosition: "right bottom" }}
            ></Image>
            <div className="z-10 absolute flex bottom-4 left-4 ">
              <div className="flex gap-1 items-center justify-center text-xl text-primary py-2 px-4 bg-secondary font-bold rounded-full ">
                Apex Code
                <span className="h-6 w-6 items-center flex justify-center">
                  <ArrowUpRight
                    props={{ bgColor: "bg-primary", width: 2, length: 8 }}
                  />
                </span>
              </div>
            </div>
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            variants={slideDownVariant}
            initial="initial"
            whileInView="enter"
            className="row-span-1 h-72 md:h-[40dvh] lg:h-auto w-full bg-bento rounded-2xl flex justify-center items-center relative overflow-hidden"
          >
            <Link
              className="absolute w-full h-full z-20"
              aria-label="Learn More about Zenyama's Brand Identity Guidelines"
              href="https://www.behance.net/gallery/185920987/Zenyama-Brand-Identity"
              target="_blank"
            ></Link>
            <Image
              src={Zenyama}
              quality={80}
              fill
              alt="Zenyama Brand Identity"
              sizes="(min-width: 1540px) 372px, (min-width: 1280px) 268px, (min-width: 1040px) 212px, (min-width: 780px) 704px, (min-width: 640px) 576px, calc(100vw - 32px)"
              style={{ objectFit: "cover", objectPosition: "center bottom" }}
            ></Image>
            <div className="z-10 absolute flex bottom-4 left-4 ">
              <div className="py-2 px-4 bg-secondary font-bold rounded-full text-primary flex text-xl items-center justify-center gap-1">
                Zenyama{" "}
                <span className="h-6 w-6 items-center flex justify-center">
                  <ArrowUpRight props={{ bgColor: "bg-primary", width: 2 }} />
                </span>
              </div>
            </div>
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            variants={slideLeftVariant}
            initial="initial"
            whileInView="enter"
            className="row-span-1 h-72 md:h-[40dvh] lg:h-auto w-full bg-bento rounded-2xl flex justify-center items-center relative overflow-hidden"
          >
            <Link
              className="absolute w-full h-full z-20"
              aria-label="Learn More about Add In's Brand Identity Guidelines"
              href="https://www.behance.net/gallery/185866985/Add-In-Brand-Guidlines"
              target="_blank"
            ></Link>
            <Image
              src={AddIn}
              quality={80}
              fill
              alt="Add In Brand Identity"
              sizes="(min-width: 1540px) 372px, (min-width: 1280px) 268px, (min-width: 1040px) 212px, (min-width: 780px) 704px, (min-width: 640px) 576px, calc(100vw - 32px)"
              style={{ objectFit: "cover", objectPosition: "center center" }}
            ></Image>
            <div className="z-10 absolute flex bottom-4 left-4 ">
              <div className="flex gap-1 items-center justify-center text-xl text-primary py-2 px-4 bg-secondary font-bold rounded-full ">
                Add In
                <span className="h-6 w-6 items-center flex justify-center">
                  <ArrowUpRight
                    props={{ bgColor: "bg-primary", width: 2, length: 8 }}
                  />
                </span>
              </div>
            </div>
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            variants={slideLeftVariant}
            initial="initial"
            whileInView="enter"
            className="row-span-1 h-72 md:h-[40dvh] lg:h-auto lg:col-span-2 w-full bg-bento rounded-2xl flex justify-center items-center relative overflow-hidden"
          >
            <Link
              className="absolute w-full h-full z-20"
              aria-label="Learn More about Raijin's Brand Identity Guidelines"
              href="https://www.behance.net/gallery/185925425/Raijin-Mock-Up"
              target="_blank"
            ></Link>
            <Image
              src={Raijin}
              quality={80}
              fill
              alt="Raijin Brand Identity"
              sizes="(min-width: 1540px) 760px, (min-width: 1280px) 552px, (min-width: 1040px) 440px, (min-width: 780px) 704px, (min-width: 640px) 576px, calc(100vw - 32px)"
              style={{ objectFit: "cover", objectPosition: "bottom bottom" }}
            ></Image>
            <div className="z-10 absolute flex bottom-4 left-4 ">
              <div className="py-2 px-4 bg-secondary font-bold rounded-full text-primary flex gap-1 text-xl items-center justify-center">
                Raijin Streetwear
                <span className="h-6 w-6 items-center flex justify-center">
                  <ArrowUpRight
                    props={{ bgColor: "bg-primary", width: 2, length: 8 }}
                  />
                </span>
              </div>
            </div>
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            variants={slideUpVariant}
            initial="initial"
            whileInView="enter"
            className="row-span-1 lg:row-span-2 h-72 md:h-[40dvh] lg:h-auto lg:col-span-2 w-full order-first lg:order-last rounded-2xl flex flex-col gap-4 lg:gap-6 justify-center items-center p-4 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-orange-500 to-yellow-300"
          >
            <div className="h-12 w-16 lg:h-16 lg:w-20 lg:-mt-5 relative">
              <Image
                src={MarkDark}
                quality={80}
                fill
                style={{ objectFit: "contain" }}
                sizes="(min-width: 1040px) 80px, 64px"
                alt="Brand Mark"
              ></Image>
            </div>
            <div>
              <h1 className=" text-4xl md:text-5xl font-bold text-center text-secondary leading-normal">
                I help brands create distinct identities{" "}
              </h1>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default BrandGrid;
