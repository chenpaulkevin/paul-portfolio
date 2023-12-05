import React from "react";

const Camera = () => {
  return (
    <section className="py-4 md:py-36">
      <div className="w-full h-screen sticky top-0 flex justify-center items-center z-0 container mx-auto">
        <h1 className="text-primary text-center text-5xl lg:text-7xl font-bold flex flex-col justify-center items-center">
          <p className="text-base hidden xl:flex mb-4 text-center w-auto">
            Move your mouse around below.
          </p>
          I also create 3D stuff
        </h1>
      </div>
      <div className="w-full h-[110vh] bg-bento rounded-2xl overflow-hidden z-10 relative">
        <iframe
          title="3D Mouse Follow Showcase"
          className="overflow-hidden sticky top-0"
          src="https://my.spline.design/untitled-66e53400f66cbe099c98911131853d53/"
          width="100%"
          height="100%"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Camera;
