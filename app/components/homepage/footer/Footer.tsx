import React from "react";
import Marquee from "./Marquee";
import Link from "next/link";

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
                <h1 className="font-semibold text-2xl md:text-3xl lg:text-5xl">
                  <Link href="mailto:chenpaulkevin@gmail.com" target="_self">
                    chenpaulkevin@gmail.com
                  </Link>
                </h1>
                <div className="relative flex justify-center items-center">
                  <Link href="mailto:chenpaulkevin@gmail.com" target="_self">
                    <div className="md:h-10 md:w-10 lg:h-12 lg:w-12 rounded-full md:bg-secondary justify-center items-center md:text-primary flex text-2xl">
                      &#8599;
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="h-24 w-full text-secondary text-base md:text-lg lg:text-xl flex flex-wrap justify-between items-center mt-10">
            <div className="w-full text-center font-bold lg:w-auto lg:text-start lg: font-normal">
              Currently in Manila (GMT+8)
            </div>
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
            <div>
              {" "}
              <Link
                href="https://drive.google.com/file/d/15abrN9Ae31BfoyYeXhdO8TvHpcKxTQC2/view?usp=drive_link"
                target="_blank"
              >
                Resumé &#8599;
              </Link>
            </div>
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
