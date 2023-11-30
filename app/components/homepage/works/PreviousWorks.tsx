"use client";
import React from "react";
import Image from "next/image";
import { easeInOut, motion } from "framer-motion";
//Components:
import Fangster from "/public/fangster.jpg";
import Philbio from "/public/philbio.jpg";
import Pltrades from "/public/pltrades.jpg";
import Link from "next/link";

const worksVariants = {
  initial: {
    scaleX: 0.96,
  },
  enter: {
    scaleX: 1,
    transition: {
      duration: 0.4,
      ease: easeInOut,
    },
  },
};
const titleVariants = {
  initial: {
    y: "100%",
  },
  enter: {
    y: 0,
    transition: {
      duration: 0.4,
      ease: easeInOut,
    },
  },
};
const platformVariants = {
  initial: {
    y: "100%",
  },
  enter: {
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.4,
      ease: easeInOut,
    },
  },
};
const descriptionVariants = {
  initial: {
    y: "100%",
    opacity: 0,
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.4,
      duration: 0.6,
      ease: easeInOut,
    },
  },
};
const buttonVariant = {
  initial: {
    x: "-280%",
    rotate: -135,
  },
  enter: {
    x: 0,
    rotate: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: easeInOut,
    },
  },
};

const sectionStyles =
  "h-screen w-full relative bg-secondary items-center sticky top-0";
const textStyles =
  "text-5xl md:text-6xl lg:text-7xl text-primary font-black z-10";

const images = [
  {
    href: "https://fangsterparts.com/",
    src: Fangster,
    title: "Fangster",
    platform: "E-Commerce Platform",
    description:
      "Fangster is an experienced manufacturer of motorcycle parts, as well as customized bikes. All products are designed in-house and manufactured rigorously in more than 15 steps.",
  },
  {
    href: "https://www.philbio.org.ph/",
    src: Philbio,
    title: "Philbio",
    platform: "CMS Platform",
    description:
      "PhilBio was established for the specific purpose of furthering the biodiversity conservation activities of the 'Philippines Biodiversity Conservation Programme (PBCP)' initiated in the 1990's.",
  },
  {
    href: "https://pltrades.com/",
    src: Pltrades,
    title: "Pltrades",
    platform: "Stock Trading Social Media",
    description:
      "Pltrades provides graphs of a user's day to day trading activity from a given data and gives rooms for their notes, strategies and styles on how the user was able to achieve their results.",
  },
];

const WorkItem = ({
  href,
  src,
  title,
  platform,
  description,
}: {
  href: string;
  src: any;
  title: string;
  platform: string;
  description: string;
}) => (
  <motion.div
    variants={worksVariants}
    initial="initial"
    whileInView="enter"
    className="sticky top-0 mt-16 lg:mt-96"
  >
    <div className={sectionStyles}>
      <div className="w-full h-full flex justify-center items-center lg:hidden">
        <div className="flex flex-col justify-center h-full">
          <div className="z-10 overflow-hidden text-center mb-2">
            <motion.div
              variants={platformVariants}
              initial="initial"
              whileInView="enter"
            >
              <span className="z-10 text-sm md:text-base lg:text-xl text-primary font-bold">
                {platform}
              </span>
            </motion.div>
          </div>
          <div className="z-10 overflow-hidden w-fit mb-6">
            <motion.div
              variants={titleVariants}
              initial="initial"
              whileInView="enter"
            >
              <h1 className={textStyles}>{title}</h1>
            </motion.div>
          </div>
          <Link href={href} target="_blank">
            <div className="z-10 border-2 h-14 flex justify-center items-center overflow-hidden border-primary relative rounded-xl">
              <motion.div
                className="text-center"
                variants={titleVariants}
                initial="initial"
                whileInView="enter"
              >
                <span className="text-center text-primary text-lg isolate font-bold">
                  Visit Website
                </span>
              </motion.div>
            </div>
          </Link>
        </div>
      </div>
      <div className="z-20 flex w-full h-full py-32 container mx-auto hidden lg:flex">
        <div className="flex flex-col h-full place-content-end w-1/3">
          <div className="z-10 overflow-hidden">
            <motion.div
              variants={platformVariants}
              initial="initial"
              whileInView="enter"
            >
              <span className="z-10 text-primary text-xl w-fit">
                {platform}
              </span>
            </motion.div>
          </div>
          <div className="z-10 overflow-hidden w-fit">
            <motion.div
              variants={titleVariants}
              initial="initial"
              whileInView="enter"
            >
              <h1 className={textStyles}>{title}</h1>
            </motion.div>
          </div>
        </div>
        <div className="flex h-full w-2/4"></div>
        <div className="z-10 flex flex-col justify-between h-full w-1/4">
          <div className="z-10 overflow-hidden w-fit">
            <motion.div
              variants={descriptionVariants}
              initial="initial"
              whileInView="enter"
            >
              <span className="z-10 text-primary">{description}</span>
            </motion.div>
          </div>
          <Link className="place-self-end" href={href} target="_blank">
            <div className="py-2 pr-2 pl-4 w-fit rounded-full border-2 border-primary flex items-center text-primary text-xl gap-2 mr-4">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: { delay: 0.7, duration: 0.2, ease: easeInOut },
                }}
              >
                Visit Website
              </motion.div>
              <motion.div
                variants={buttonVariant}
                initial="initial"
                whileInView="enter"
                className="h-12 w-12 rounded-full bg-primary justify-center items-center text-secondary flex text-4xl"
              >
                &#8599;
              </motion.div>
            </div>
          </Link>
        </div>
      </div>
      <Image
        className="brightness-[40%]"
        alt={`${title} Background Image`}
        src={src}
        placeholder="blur"
        quality={100}
        fill
        sizes="100dvw"
        style={{ objectFit: "cover" }}
      />
    </div>
  </motion.div>
);

const PreviousWorks = () => (
  <section>
    <div className="w-full">
      <div className="h-screen w-full flex justify-center bg-primary items-center sticky top-0">
        <h1 className="text-secondary text-5xl px-4 text-center lg:text-7xl font-bold">
          I like making websites
        </h1>
      </div>

      {images.map((item, index) => (
        <WorkItem key={index} {...item} />
      ))}
    </div>
  </section>
);

export default PreviousWorks;
