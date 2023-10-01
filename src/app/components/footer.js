"use client";
import * as React from "react";
import Link from "next/link";
import Logo from "../images/YusongShiWeddingLogo.png";
import Image from "next/image";
import { useState, useEffect } from "react";

const query = `
{
  igPostCollection {
    items{
     slug
     title
     photosCollection{
       items {
         url
       }
     }
   }
     }
 
}
`;

const navItems = [
  { href: "/", text: "Home" },
  { href: "/portfolio", text: "Portfolio" },
  { href: "/blog", text: "Blog" },
  { href: "/faq", text: "FAQs" },
  { href: "/about", text: "About" },
  { href: "/investment", text: "Inquire" },
];

export default function Footer() {
  const [page, setPage] = useState(null);

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

        setPage(data);
      });
  }, []);

  if (!page) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <span>Loading...</span>
      </div>
    );
  }

  const igPost = page.igPostCollection.items[0].photosCollection.items;

  // console.log("can you see", page, igPost);

  return (
    <footer>
      <div className="p-[6vw] lg:py-[2vw] lg:px-[2vw] w-full flex flex-col gap-16 lg:gap-10">
        <div className="hidden md:block py-8">
          <div className="flex overflow-hidden gap-2 w-full">
            {igPost.map((image, index) => (
              <div key={index} className="w-full h-auto aspect-square relative">
                <img
                  src={image.url}
                  alt="ig post for Yusong Wedding"
                  loading="lazy"
                  className="w-full h-auto object-cover aspect-square relative"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:hidden">
          <div className="grid grid-cols-2 gap-2">
            {igPost.map((image, index) => (
              <div key={index} className="w-full h-auto aspect-square relative">
                <img
                  src={image.url}
                  alt="ig post for Yusong Wedding"
                  loading="lazy"
                  className="w-full h-auto object-cover aspect-square relative"
                />
              </div>
            ))}
          </div>
        </div>

        {/* bottom section with link and logo */}
        <div className="flex flex-col md:items-end md:flex-row justify-between text-light gap-10">
          <div className="pb-6 md:pb-0">
            <div className="uppercase font-semibold text-lg md:text-base flex flex-col lg:flex-row gap-2 md:gap-1">
              {navItems.map((item, index) => (
                <React.Fragment key={index}>
                  <Link href={item.href} className="">
                    {item.text}
                  </Link>
                  {index !== navItems.length - 1 && (
                    <span className="hidden lg:block">-</span>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="text-xs pt-2">
              <a>Brand Credit</a>
              <span> | </span>
              <a>Site Credit</a>
            </div>
          </div>
          <div className="flex flex-col md:items-end gap-2 lg:gap-0">
            <div className="w-36 h-auto aspect-[4/1] relative">
              <Link href="/" className="text-2xl font-bold">
                <Image
                  src={Logo}
                  alt="Site Logo"
                  fill={true}
                  style={{ objectFit: "contain" }}
                />
              </Link>
            </div>
            <div>
              <p className="text-xs pr-1">
                @YUSONG SHI PHOTOGRAPHY 2020-PRESENT
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
