"use client";
import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Image1 from "../../images/LatestStory/Yusong-Wedding---Featured-1.jpg";
import Image2 from "../../images/LatestStory/Yusong-Wedding---Featured-2.jpg";
import Image3 from "../../images/LatestStory/Yusong-Wedding---Featured-3.jpg";
import Image4 from "../../images/LatestStory/Yusong-Wedding---Featured-4.jpg";

const images = [Image1, Image2, Image3, Image4];

const EmblaFull = () => {
  const options = {
    slidesToScroll: 1,
    loop: true,
    containScroll: false,
    dragFree: false,
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, 5000); // 4 seconds per slide

    return () => clearInterval(autoplay);
  }, [emblaApi]);

  return (
    <div className="relative w-full max-w-[1920px] mx-auto overflow-hidden mb-12">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative flex-none w-full"
              style={{ flex: "0 0 100%" }}
            >
              <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh]">
                <Image
                  src={image}
                  alt={`Featured image ${index + 1}`}
                  fill
                  priority={index === 0}
                  className="object-cover"
                  sizes="(max-width: 1920px) 100vw, 1920px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent 85%, rgba(0,0,0,0.3))",
        }}
      />
    </div>
  );
};

export default EmblaFull;
