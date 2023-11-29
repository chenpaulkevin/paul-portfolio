"use client";
import React, { useState } from "react";

function MenuButton({
  isActive,
  setIsActive,
}: {
  isActive: boolean;
  setIsActive: any;
}) {
  return (
    <div
      onClick={() => {
        setIsActive(!isActive);
      }}
      className={`w-16 h-16 relative z-50 overflow-hidden border-2 border-primary rounded-full flex flex-col justify-center items-center ${
        isActive ? "open" : "close"
      }`}
    >
      <div className="bar-1"></div>
      <div className="bar-2"></div>
      <div className="bar-3"></div>
    </div>
  );
}

export default MenuButton;
