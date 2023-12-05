"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ReactLenis } from "@studio-freight/react-lenis";

//Components:
import Preloader from "./components/preloader";

function ParentWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 2500);
  }, []);
  return (
    <ReactLenis root>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader></Preloader>}
      </AnimatePresence>
      {children}
    </ReactLenis>
  );
}

export default ParentWrapper;
