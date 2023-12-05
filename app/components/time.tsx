"use client";
import React, { useState, useEffect } from "react";

const ManilaTime = () => {
  const [manilaTime, setManilaTime] = useState("");

  useEffect(() => {
    // Function to get the current time in Manila
    const getManilaTime = () => {
      const manilaTimeZone = "Asia/Manila";
      const currentTime = new Date().toLocaleString("en-US", {
        timeZone: manilaTimeZone,
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      });
      setManilaTime(currentTime);
    };

    // Update Manila time every second
    const intervalId = setInterval(getManilaTime, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <p className="whitespace-nowrap">Currently in Manila: {manilaTime}</p>
    </div>
  );
};

export default ManilaTime;
