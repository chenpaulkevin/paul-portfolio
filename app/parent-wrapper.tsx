"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ReactLenis } from "@studio-freight/react-lenis";

// Components:
import Preloader from "./components/preloader";

interface ParentWrapperProps {
  children: React.ReactNode;
}

const ParentWrapper: React.FC<ParentWrapperProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 2500);

    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <ReactLenis root>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      {children}
    </ReactLenis>
  );
};

export default ParentWrapper;
