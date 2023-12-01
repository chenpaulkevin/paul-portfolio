import React from "react";

function Footer() {
  return (
    <section className="bg-primary">
      <div className="w-full bg-primary container mx-auto pt-24">
        <div className="flex flex-col gap-8 h-full justify-between">
          <div className="flex justify-between text-secondary font-bold md:text-8xl gap-10">
            <div className="">
              <h1 className="font-bold mb-10">
                Let&apos;s <br /> Connect
              </h1>{" "}
              <div className="flex gap-4">
                <h1 className="font-semibold text-2xl lg:text-5xl">
                  chenpaulkevin@gmail.com
                </h1>
                <div className="h-12 w-12 rounded-full bg-secondary justify-center items-center text-primary flex text-2xl">
                  &#8599;
                </div>
              </div>
            </div>
          </div>
          <div className="h-24 w-full text-base md:text-lg lg:text-xl flex justify-between items-center mt-10">
            <div>LinkedIn &#8599;</div>
            <div>Github &#8599;</div>
            <div>Behance &#8599;</div>
            <div>Dribbble &#8599;</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
