import Navbar from "./components/nav";
import Footer from "./components/footer";
import EmblaCarousel from "./components/Embla/EmblaCarousel";
import problemImg from "./images/San Diego - YS-17.jpg";
import inqueryImg from "./images/Stanley&Rachel-Yusong-Shi-Wedding.jpg";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <>
      <Navbar />
      <div>
        <h1>hellow world</h1>
      </div>
      <EmblaCarousel />
      <Problem />
      <Inquery />
      <Footer />
    </>
  );
}

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
      <div className="py-16 w-full max-w-[1440px] flex mx-auto">
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center mx-auto gap-20 lg:gap-10 px-[6vw] lg:px-[2vw] ">
          <div className="w-full lg:w-1/2 h-auto">
            <Image
              src={inqueryImg}
              alt="background image of the section"
              style={{ objectFit: "cover", position: "relative" }}
              className="rounded-tl-[500px] rounded-tr-[500px] max-h-[700px]"
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
