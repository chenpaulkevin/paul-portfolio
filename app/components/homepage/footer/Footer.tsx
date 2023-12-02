import React from "react";
import Marquee from "./Marquee";
import Link from "next/link";

function Footer() {
  return (
    <section className="bg-primary py-4" id="contact-section">
      <div className="w-full py-28 lg:py-52 flex items-center relative mb-10 overflow-hidden bg-secondary">
        <Marquee></Marquee>
      </div>

      <div className="w-full bg-primary container mx-auto pt-8">
        <div className="flex flex-col gap-8 h-full justify-between">
          <div className="flex justify-between text-secondary font-bold text-6xl md:text-8xl gap-10">
            <div className="">
              <h1 className="font-bold mb-10">
                <p>Let&apos;s</p>
                <p>Connect</p>
              </h1>{" "}
              <div className="flex gap-4">
                <h1 className="font-semibold text-2xl lg:text-5xl">
                  chenpaulkevin@gmail.com
                </h1>
                <div className="relative flex justify-center items-center">
                  <div className="h-10 w-10 rounded-full bg-secondary absolute animate-ping opacity-[30%]"></div>
                  <div className="h-12 w-12 rounded-full bg-secondary justify-center items-center text-primary flex text-2xl">
                    &#8599;
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-24 w-full text-secondary text-base md:text-lg lg:text-xl flex justify-between items-center mt-10">
            <div>Currently in Manila (GMT+8)</div>
            <div>
              <Link
                href="https://www.linkedin.com/in/paul-kevin-chen-a74979188/"
                target="_blank"
              >
                LinkedIn &#8599;
              </Link>
            </div>
            <div>
              <Link
                href="https://www.behance.net/paulkevinchen"
                target="_blank"
              >
                Behance &#8599;
              </Link>
            </div>
            <div>Resumé &#8599;</div>
            <div>
              <Link href="/">Back to Top &#x2191;</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
