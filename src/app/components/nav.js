"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import Logo from "../images/YusongShiWeddingLogo.png";
import Image from "next/image";

const links = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About" },
  { href: "/contact", text: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const line1Variants = {
    open: { rotate: 45, translateY: 5 },
    closed: { rotate: 0, translateY: 0 },
  };

  const line2Variants = {
    open: { rotate: -45, translateY: -5 },
    closed: { rotate: 0, translateY: 0 },
  };

  useEffect(() => {
    if (visible) {
      controls.start({
        y: 0,
        transition: { type: "spring", stiffness: 260, damping: 20 },
      });
    } else {
      controls.start({
        y: "-100%",
        transition: { type: "spring", stiffness: 260, damping: 20 },
      });
    }
  }, [visible, controls]);

  return (
    <motion.div
      animate={controls}
      className="px-8 py-4 lg:px-16 lg:py-8 2xl:px-24 2xl:py-12"
    >
      <nav className="sticky top-0 w-full text-white z-50 bg-transparent">
        <div className="flex items-center justify-between">
          <div className="w-36 2xl:w-40 h-auto aspect-[4/1] relative">
            <Link href="/" className="text-2xl font-bold">
              <Image
                src={Logo}
                alt="Site Logo"
                fill={true}
                style={{ objectFit: "contain" }}
              />
            </Link>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg width="30" height="20">
              <motion.line
                x1="0"
                y1="5"
                x2="30"
                y2="5"
                stroke="#D2C69E"
                strokeWidth="1"
                variants={line1Variants}
                initial={false}
                animate={isOpen ? "open" : "closed"}
              />
              <motion.line
                x1="0"
                y1="15"
                x2="30"
                y2="15"
                stroke="#D2C69E"
                strokeWidth="1"
                variants={line2Variants}
                initial={false}
                animate={isOpen ? "open" : "closed"}
              />
            </svg>
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="fixed inset-0 bg-black flex flex-col items-center justify-center text-center text-light pt-16 z-30">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={`block ${
                index !== 0 ? "mt-4 lg:mt-6" : ""
              } lg:py-1 text-2xl lg:text-5xl uppercase font-semibold`}
              onClick={() => setIsOpen(false)}
            >
              {link.text}
            </Link>
          ))}
          <div className="fixed bottom-0 left-0 right-0 flex items-center justify-center pb-4">
            <a
              href="https://www.twitter.com"
              className="mx-2 text-sm text-light"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com"
              className="mx-2 text-sm text-light"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Navbar;
