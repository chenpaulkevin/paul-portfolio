import React from "react";
import Script from "next/script";

function Camera() {
  return (
    <section className="py-4 md:py-36">
      <div className="w-full h-screen sticky top-0 flex justify-center items-center z-0">
        <h1 className="text-primary text-center text-5xl lg:text-7xl font-bold">
          I also create 3d stuff
        </h1>
      </div>
      <div className="w-full h-[110dvh] rounded-2xl overflow-hidden z-10 relative">
        <iframe
          title="3d Mouse Follow Showcase"
          className="overflow-hidden sticky top-0"
          src="https://my.spline.design/untitled-66e53400f66cbe099c98911131853d53/"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </section>
  );
}

export default Camera;
