import Navbar from "./components/nav";
import Footer from "./components/footer";
import EmblaCarousel from "./components/Embla/EmblaCarousel";
import problemImg from "./images/San Diego - YS-17.jpg";
import inqueryImg from "./images/Stanley&Rachel-Yusong-Shi-Wedding.jpg";
import Image from "next/image";
import Link from "next/link";
import feature from "./images/LatestStory/Yusong-Wedding---Featured-1.jpg";
import { HiArrowLongDown } from "react-icons/hi2";

export default function page() {
  return (
    <>
      <Navbar />
      <WhatIdo />
      <EmblaCarousel />
      <Problem />
      <Inquery />
      <Footer />
    </>
  );
}

const WhatIdo = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mx-auto mb-16 gap-10">
        <div className="grid grid-cols-1 pb-40">
          <div className="w-full h-auto lg:aspect-[3/2]">
            <Image
              src={feature}
              alt="background image of the section"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
        <div className="scroll-down"></div>
        <div className="flex container mx-auto justify-center text-light text-2xl lg:text-3xl font-bold px-10 lg:px-0 pt-16">
          <h3 className="text-center max-w-3xl leading-9 tracking-tight">
            As a wedding, portrait, and engagement photographer, I specialize in
            providing a range of creative services tailored to elevate your
            needs and maximize your return on investment.
          </h3>
        </div>
        <div className="">
          <Link href="/investment">
            <button className="text-sm lg:text-base font-semibold uppercase px-[calc(100vw/4)] py-3 lg:px-10 lg:py-4 bg-light rounded-full text-dark whitespace-nowrap">
              investment
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

const Problem = () => {
  return (
    <>
      <div className="relative lg:my-16">
        <div className="w-screen h-auto aspect-[4/3] max-h-[1000px]">
          <Image
            src={problemImg}
            alt="background image of the section"
            fill={true}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="absolute inset-0 bg-dark opacity-40 transition-opacity duration-300"></div>
        <h4 className="absolute inset-0 flex items-center justify-center text-center px-4 text-light text-base lg:text-2xl font-bold italic">
          i&apos;ve got 99 problems but a perfect shot ain&apos;t one.
        </h4>
      </div>
    </>
  );
};

const Inquery = () => {
  return (
    <>
      <div className="py-16 w-full max-w-[1440px] flex mx-auto container">
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center mx-auto gap-20 lg:gap-10 px-[6vw] lg:px-[2vw] container">
          <div className="w-full lg:w-1/2 h-auto container">
            <Image
              src={inqueryImg}
              alt="background image of the section"
              style={{ objectFit: "cover", position: "relative" }}
              className="rounded-tl-[500px] rounded-tr-[500px] max-h-[700px] container"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col text-light justify-between gap-10 lg:gap-20 px-12">
              <div className="">
                <h4 className="text-2xl lg:text-3xl uppercase font-semibold italic my-4">
                  Let&apos;s RAISE A toast
                </h4>
                <p className="max-w-1/2 text-sm lg:text-base font-light">
                  a photographs of your perfectly imperfect recollections — the
                  ones worthy of hanging onto.
                </p>
              </div>
              <div className="">
                <Link href="/contact">
                  <button className="text-sm lg:text-base font-semibold uppercase px-[calc(100vw/4)] py-3 lg:px-10 lg:py-4 bg-light rounded-full text-dark whitespace-nowrap">
                    INQUIRE NOW
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
