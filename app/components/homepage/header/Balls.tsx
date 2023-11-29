"use client";
import { reverse } from "dns";
import { motion, useSpring } from "framer-motion";
import React, { useRef } from "react";

const moveHalfCircle = {
  animate: {
    rotate: 90,
    originX: -0.5,
    originY: -0.5,
    transition: {
      rotate: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 20,
        ease: "linear",
      },
    },
  },
};
const moveZigZagRightUp = {
  animate: {
    x: [0, 100, 200, 200],
    y: [-50, 100, 200, 100],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 10,
        ease: "linear",
      },
      y: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 10,
        ease: "linear",
      },
    },
  },
};
const moveZigZagLeftUp = {
  animate: {
    x: [0, -100, -150, -100],
    y: [0, -100, -150, -100],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 20,
        ease: "linear",
      },
      y: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 20,
        ease: "linear",
      },
    },
  },
};
const moveZigZagVertical = {
  animate: {
    x: [0, 200, 300, 500],
    y: [0, 100, 150, 100],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 15,
        ease: "linear",
      },
      y: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 15,
        ease: "linear",
      },
    },
  },
};
const moveZigZagVerticalDown = {
  animate: {
    x: [0, -200, -300, 0],
    y: [0, 150, -150, 0],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 10,
        ease: "linear",
      },
      y: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 10,
        ease: "linear",
      },
    },
  },
};
const moveRight = {
  animate: {
    x: [200, 500],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 10,
        ease: "linear",
      },
    },
  },
};
const moveDown = {
  animate: {
    y: 300,
    transition: {
      y: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 10,
        ease: "linear",
      },
    },
  },
};

function Balls() {
  const spring = {
    stiffness: 100,
    damping: 25,
    mass: 0.8,
  };

  const boundingBoxRef = useRef<HTMLDivElement | null>(null);

  const mousePosition = {
    x: useSpring(0, spring),
    y: useSpring(0, spring),
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const boundingBox = boundingBoxRef.current;
    const { clientX, clientY } = e;

    if (boundingBox) {
      const rect = boundingBox.getBoundingClientRect();
      const rectX = rect.left;
      const rectY = rect.top;

      if (rectX !== undefined && rectY !== undefined) {
        mousePosition.x.set(clientX - (rectX + 280 / 2));
        mousePosition.y.set(clientY - (rectY + 280 / 2));
      } else {
        mousePosition.x.set(clientX);
        mousePosition.y.set(clientY);
      }
    }
  };

  const { x, y } = mousePosition;

  return (
    <div
      ref={boundingBoxRef}
      onMouseMove={handleMouseMove}
      className="h-full w-full relative isolate gradients-container"
    >
      <svg
        className="svg-goo absolute z-10 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <motion.div
        style={{ x, y }}
        className="w-[280px] h-[280px] absolute z-10 rounded-full bg-white opacity-30 mix-blend-soft-light blur-3xl"
      />
      <motion.div
        variants={moveHalfCircle}
        animate="animate"
        className="w-72 h-72 absolute right-0 top-0 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-300 via-red-500 to-red-600 opacity-60 mix-blend-soft-light blur-3xl"
      />
      <motion.div
        variants={moveZigZagLeftUp}
        animate="animate"
        className="w-80 h-80 absolute right-0 bottom-0 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-300 via-indigo-500 to-indigo-600 opacity-60 mix-blend-soft-light blur-3xl"
      ></motion.div>
      <motion.div
        variants={moveRight}
        animate="animate"
        className="w-80 h-80 absolute left-0 bottom-0 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-300 via-emerald-500 to-emerald-600 opacity-60 mix-blend-soft-light blur-3xl"
      ></motion.div>
      <motion.div
        variants={moveZigZagRightUp}
        animate="animate"
        className="w-72 h-72 absolute left-0 top-0 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-300 via-rose-500 to-rose-600 opacity-60 mix-blend-soft-light blur-3xl"
      ></motion.div>
      <motion.div
        variants={moveZigZagVertical}
        animate="animate"
        className="w-80 h-80 absolute left-1/2 bottom-0 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-300 via-purple-500 to-purple-600 opacity-60 mix-blend-soft-light blur-3xl"
      ></motion.div>
      <motion.div
        variants={moveZigZagVerticalDown}
        animate="animate"
        className="w-96 h-96 absolute right-48 bottom-8 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-300 via-sky-500 to-sky-600 opacity-60 mix-blend-soft-light blur-3xl"
      ></motion.div>
      <motion.div
        variants={moveDown}
        animate="animate"
        className="w-72 h-72 absolute right-1/2 top-0 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-300 via-blue-500 to-blue-600 opacity-80 mix-blend-soft-light blur-3xl"
      ></motion.div>
    </div>
  );
}

export default Balls;
