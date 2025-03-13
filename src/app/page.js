"use client";
import Navbar from "./components/nav";
import Footer from "./components/footer";
import EmblaCarousel from "./components/Embla/EmblaCarousel";
import problemImg from "./images/San Diego - YS-17.jpg";
import inqueryImg from "./images/Stanley&Rachel-Yusong-Shi-Wedding.jpg";
import Image from "next/image";
import Link from "next/link";
import feature from "./images/LatestStory/Yusong-Wedding---Featured-1.jpg";
import EmblaFull from "./components/Embla/EmblaFull";

export default function page() {
  return (
    <>
      <Navbar />
      <EmblaFull />
      <WhatIdo />
      <EmblaCarousel />
      <Problem />
      <Footer />
    </>
  );
}

const WhatIdo = () => {
  return (
    <>
      <section className="flex flex-col justify-center items-center mx-auto mb-16 gap-10">
        <div className="scroll-down"></div>
        <div className="flex container mx-auto justify-center text-light px-6 lg:px-0 pt-16">
          <h1 className="text-2xl lg:text-[2.5rem] font-medium text-center max-w-3xl leading-[1.2] tracking-[-0.02em]">
            As a wedding, portrait, and engagement photographer, I specialize in
            providing a range of creative services.
          </h1>
        </div>
        <div className="">
          <Link href="/investment">
            <button className="text-[0.875rem] lg:text-[0.9375rem] font-medium uppercase px-[calc(100vw/4)] py-3 lg:px-10 lg:py-4 bg-light rounded-full text-dark whitespace-nowrap hover:bg-light/90 transition-all">
              investment
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

const Problem = () => {
  return (
    <>
      <section className="relative lg:my-16" aria-label="featured-content">
        <div className="w-screen h-auto aspect-[3/2] max-h-[800px]">
          <Image
            src={problemImg}
            alt="background image of the section"
            fill={true}
            style={{ objectFit: "cover" }}
          />
          <div className="absolute inset-0 bg-dark opacity-40 transition-opacity duration-300"></div>

          {/* Top Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
            <div className="bg-light/10 backdrop-blur-[6px] rounded-[2rem] p-12 lg:p-16 w-[95%] max-w-3xl mx-auto border border-light/20 shadow-2xl">
              <div className="text-center">
                <h2 className="text-xl lg:text-[2rem] uppercase font-medium mb-6 text-light tracking-[-0.02em] leading-[1.2]">
                  Let&apos;s RAISE A toast
                </h2>
                <p className="text-base lg:text-xl font-light text-light/95 max-w-2xl mx-auto mb-10 leading-[1.5]">
                  I&apos;ve got 99 problems but a perfect shot ain&apos;t one.
                </p>
                <Link href="/contact">
                  <button className="text-[0.875rem] lg:text-[0.9375rem] font-medium uppercase px-16 py-4 bg-light/95 backdrop-blur-[2px] rounded-full text-dark whitespace-nowrap hover:bg-light transition-all shadow-lg">
                    INQUIRE NOW
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
