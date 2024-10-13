import React from "react";
import Marquee from "./Marquee";
import Link from "next/link";
import ArrowUpRight from "../../ArrowUpRight";
import ManilaTime from "../../time";

function Footer() {
  return (
    <section className="bg-primary py-4">
      <div className="w-full py-28 lg:py-52 flex items-center relative mb-10 overflow-hidden bg-secondary">
        <Marquee></Marquee>
      </div>

      <div className="w-full bg-primary container mx-auto pt-8">
        <div className="flex flex-col gap-8 h-full justify-between">
          <div className="flex justify-between text-secondary font-bold text-6xl md:text-8xl gap-10">
            <div id="contact-section">
              <h1 className="font-bold mb-10">
                <p>Let&apos;s</p>
                <p>Connect</p>
              </h1>{" "}
              <div className="flex gap-2 md:gap-4 items-center">
                <h1 className="font-semibold text-lg sm:text-2xl md:text-3xl lg:text-5xl">
                  <Link
                    className="mail-to"
                    href="mailto:chenpaulkevindev@gmail.com"
                    target="_self"
                  >
                    chenpaulkevindev@gmail.com
                  </Link>
                </h1>
                <div className="relative flex flex-wrap sm:flex justify-center items-center">
                  <Link href="mailto:paulchen@apexcodeph.com" target="_self">
                    <div className="md:h-10 md:w-10 lg:h-12 lg:w-12 rounded-full p-1 md:bg-secondary justify-center items-center md:text-primary flex text-2xl">
                      <ArrowUpRight
                        props={{
                          bgColor: "bg-primary",
                          width: 3,
                          length: 10,
                        }}
                      ></ArrowUpRight>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="h-24 w-full text-secondary text-base md:text-lg lg:text-xl flex flex-wrap justify-between items-center mt-10">
            <div className="w-full text-center font-bold lg:w-2/12 lg:text-start lg: font-normal flex gap-4">
              <ManilaTime />
            </div>
            <div>
              <Link
                href="https://www.linkedin.com/in/paul-kevin-chen-a74979188/"
                target="_blank"
              >
                <div className="flex items-center justify-center gap-1">
                  <div> LinkedIn</div>
                  <div className="h-6 w-6 flex justify-center items-center">
                    <ArrowUpRight
                      props={{
                        bgColor: "bg-secondary",
                        width: 2,
                        length: 10,
                      }}
                    ></ArrowUpRight>
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <Link
                className="lg:flex hidden"
                href="https://www.behance.net/paulkevinchen"
                target="_blank"
              >
                <div className="lg:flex hidden items-center justify-center gap-1">
                  <div> Behance</div>
                  <div className="h-6 w-6 flex justify-center items-center">
                    <ArrowUpRight
                      props={{
                        bgColor: "bg-secondary",
                        width: 2,
                        length: 10,
                      }}
                    ></ArrowUpRight>
                  </div>
                </div>
              </Link>
            </div>
            <div>
              {" "}
              <Link
                href="https://drive.google.com/file/d/1rItgPR9qkR3eZWpxAg_H3hMWeh1HaVZ3/view?usp=sharing"
                target="_blank"
              >
                <div className="flex items-center justify-center gap-1">
                  <div> Resumé</div>
                  <div className="h-6 w-6 flex justify-center items-center">
                    <ArrowUpRight
                      props={{
                        bgColor: "bg-secondary",
                        width: 2,
                        length: 10,
                      }}
                    ></ArrowUpRight>
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <Link href="#main-header">
                <div className="flex items-center justify-center gap-1">
                  <div> Back to Top</div>
                  <div className="h-6 w-6 flex justify-center items-center -rotate-45">
                    <ArrowUpRight
                      props={{
                        bgColor: "bg-secondary",
                        width: 2,
                        length: 10,
                      }}
                    ></ArrowUpRight>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
