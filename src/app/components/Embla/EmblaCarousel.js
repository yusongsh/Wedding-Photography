"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useState, useEffect } from "react";

const EmblaCarousel = () => {
  const options = {
    slidesToScroll: "auto",
    containScroll: "trimSnaps",
    loop: true,
  };
  const SLIDE_COUNT = 5;
  const slides = Array.from(Array(SLIDE_COUNT).keys());

  const [emblaRef] = useEmblaCarousel(options);

  const query = `
{
  websiteServiceCollection {
    items{
      title
      service
      image{
        url
      }
    }
  } 
}
`;
  const [data, setData] = useState(null);

  useEffect(() => {
    window
      .fetch(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
          },
          body: JSON.stringify({ query }),
        }
      )
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }

        setData(data);
      });
  }, []);

  if (!data) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <span>Loading...</span>
      </div>
    );
  }

  // console.log(data);

  return (
    <div className="w-auto md:w-full py-10">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex text-light">
          {data.websiteServiceCollection.items.map((item, index) => (
            <div key={index} className="relative px-4">
              <img
                src={item.image.url}
                alt="image of service"
                className="h-[20rem] lg:h-[30rem] w-full object-cover aspect-square"
              />
              <h3 className="text-2xl italic font-semibold pt-4 pb-3 uppercase">
                {item.title}
              </h3>
              <div className="text-sm font-light w-[20rem] lg:w-[30rem]">
                {item.service}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
