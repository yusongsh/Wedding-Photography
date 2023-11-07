"use client";
import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { HiArrowLongRight, HiArrowLongLeft } from "react-icons/hi2";

const EmblaFull = () => {
  const options = {
    slidesToScroll: "auto",
    containScroll: "trimSnaps",
    loop: true,
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [isPlaying, setIsPlaying] = useState(false);
  const autoplayInterval = 3000; // 3 seconds

  useEffect(() => {
    if (!emblaApi) return;

    const play = () => {
      setIsPlaying(true);
      emblaApi.scrollTo(emblaApi.selectedScrollSnap() + 1);
    };

    if (isPlaying) {
      const timer = setInterval(play, autoplayInterval);
      return () => clearInterval(timer);
    }

    return () => {};
  }, [emblaApi, isPlaying]);

  const toggleAutoplay = () => {
    setIsPlaying(!isPlaying);
  };

  const slideNext = () => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  };

  const slidePrev = () => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  };

  return (
    <div className="pb-24 overflow-hidden" ref={emblaRef}>
      <div className="flex flex-row">
        <div className="bg-yellow-300 w-screen h-[40rem] flex-none">
          Slide 1
        </div>
        <div className="bg-red-300 w-screen h-[40rem] flex-none">Slide 2</div>
        <div className="bg-blue-300 w-screen h-[40rem] flex-none">Slide 3</div>
      </div>
      <div className="flex flex-row justify-center items-center mx-auto text-light text-2xl gap-4 my-4">
        <button onClick={slidePrev}>
          <HiArrowLongLeft />
        </button>
        <button onClick={slideNext}>
          <HiArrowLongRight />
        </button>
      </div>
      {/* <button onClick={toggleAutoplay}>
        {isPlaying ? "Pause" : "Autoplay"}
      </button> */}
    </div>
  );
};

export default EmblaFull;
