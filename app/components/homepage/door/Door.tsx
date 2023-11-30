import React from "react";

function Door() {
  return (
    <section className="container mx-auto w-full mt-40 ">
      <div className="flex flex-col h-full justify-center items-center sticky top-20 h-[100dvh]">
        <h1 className="text-primary text-4xl lg:text-7xl font-bold text-center mb-10 lg:mb-36">
          Want to work together?
        </h1>
        <div className="h-[300px] w-[200px] lg:h-[500px] lg:w-[400px] bg-primary rounded-t-full shadow-inner door"></div>
        <div className="flex h-96">
          <div className="door-light h-full w-[305px] lg:w-[600px] relative"></div>
          <div className="door-light-2 h-full w-[305px] lg:w-[600px] relative"></div>
        </div>
      </div>
    </section>
  );
}

export default Door;
