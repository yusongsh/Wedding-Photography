"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowLongRight } from "react-icons/hi2";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/50 via-dark to-dark z-0" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Logo or Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-light tracking-[-0.02em] leading-[1.2]">
            Yusong Shi
            <span className="block text-xl md:text-2xl lg:text-3xl mt-2 text-light/80">
              Photography
            </span>
          </h1>

          {/* Coming Soon Text */}
          <p className="text-xl md:text-2xl text-light/90 max-w-2xl mx-auto leading-relaxed">
            Something beautiful is in the works. Our new website is coming soon.
          </p>

          {/* Contact Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="pt-8"
          >
            <Link
              href="mailto:yusongshiphoto@gmail.com"
              className="inline-flex items-center gap-2 text-light hover:text-light/80 transition-colors"
            >
              <span className="text-lg">Get in Touch</span>
              <HiArrowLongRight className="w-6 h-6" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 flex justify-center gap-6"
        >
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm lg:text-base font-medium px-6 py-2 bg-light/10 hover:bg-light/20 rounded-full text-light transition-all"
          >
            Instagram
          </Link>
          <Link
            href="mailto:yusongshiphoto@gmail.com"
            className="text-sm lg:text-base font-medium px-6 py-2 bg-light/10 hover:bg-light/20 rounded-full text-light transition-all"
          >
            Email
          </Link>
        </motion.div>

        {/* Location */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-light/60 text-sm"
        >
          Based in New York City & Virginia
          <br />
          Available for Travel Worldwide
        </motion.p>
      </div>
    </main>
  );
}
