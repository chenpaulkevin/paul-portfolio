import React from "react";

function BrandGrid() {
  return (
    <section>
      <div className="w-full h-full lg:h-[100dvh] container mx-auto py-8">
        <div className="grid grid-rows-4 grid-cols-1 lg:grid-cols-4 h-full gap-8 md:gap-12 lg:gap-4">
          <div className="row-span-4 h-72 md:h-[40dvh] lg:h-auto lg:col-span-2 w-full bg-accent rounded-2xl flex justify-center items-center">
            01
          </div>
          <div className="row-span-1 h-72 md:h-[40dvh] lg:h-auto w-full bg-accent rounded-2xl flex justify-center items-center">
            02
          </div>
          <div className="row-span-1 h-72 md:h-[40dvh] lg:h-auto w-full bg-accent rounded-2xl flex justify-center items-center">
            03
          </div>
          <div className="row-span-1 h-72 md:h-[40dvh] lg:h-auto lg:col-span-2 w-full bg-accent rounded-2xl flex justify-center items-center">
            04
          </div>
          <div className="row-span-2 h-72 md:h-[40dvh] lg:h-auto lg:col-span-2 w-full bg-accent rounded-2xl flex justify-center items-center">
            05
          </div>
        </div>
      </div>
    </section>
  );
}

export default BrandGrid;
