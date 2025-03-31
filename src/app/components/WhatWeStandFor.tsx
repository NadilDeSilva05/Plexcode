"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function WhatWeStandFor() {
  const [selected, setSelected] = useState("Creativity Without Limits");

  const images: Record<string, string> = {
    "Creativity Without Limits":"/images/otherImage/left-right-brain-functions-conceptyt-600nw-302933039.jpg",
    "Strategic Excellence": "/images/otherImage/arts-education-STEAM.jpeg",
    "Client Collaboration": "/images/otherImage/istockphoto-1412778148-612x612.jpg",
  };

  return (
    <section className="w-full px-6 py-16 transition-colors duration-300 bg-white dark:bg-black">
      <div className="flex flex-col items-center max-w-6xl gap-12 mx-auto md:flex-row">
        {/* Left Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-light tracking-widest text-center text-gray-900 uppercase md:text-left md:text-4xl dark:text-gray-100">
            What <span className="font-bold">We Stand For</span>
          </h2>

          <div className="mt-6 space-y-4">
            {Object.keys(images).map((title) => (
              <div
                key={title}
                className={`pl-4 py-2 cursor-pointer transition-all duration-300 ${
                  selected === title
                    ? "border-l-8 border-black dark:border-white"
                    : "border-l-4 border-gray-300 dark:border-gray-700"
                }`}
                onClick={() => setSelected(title)}
              >
                <h3
                  className={`text-base font-semibold ${
                    selected === title
                      ? "text-black dark:text-white"
                      : "text-gray-700 dark:text-gray-400"
                  }`}
                >
                  {title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {title === "Creativity Without Limits" &&
                    "We push boundaries to create work that stands out."}
                  {title === "Strategic Excellence" &&
                    "Every idea is rooted in a deep understanding of your goals and audience."}
                  {title === "Client Collaboration" &&
                    "Your vision is at the heart of everything we do."}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Smooth Image Change */}
        <div className="relative w-full md:w-1/2">
          <motion.div
            layoutId="image"
            className="w-full h-full"
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <Image
              src={images[selected]}
              alt={selected}
              width={700}
              height={450}
              className="rounded-lg shadow-lg dark:shadow-gray-800"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
