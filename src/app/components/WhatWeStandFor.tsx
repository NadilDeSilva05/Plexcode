"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatWeStandFor() {
  const [selected, setSelected] = useState("Creativity Without Limits");

  const images: Record<string, string> = {
    "Creativity Without Limits": "/images/otherImage/left-right-brain-functions-concept-600nw-302933039.jpg",
    "Strategic Excellence": "/images/otherImage/arts-education-STEAM.jpeg",
    "Client Collaboration": "/images/otherImage/istockphoto-1412778148-612x612.jpg",
  };

  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-center md:text-left text-3xl md:text-4xl font-light tracking-widest uppercase">
            What <span className="font-bold">We Stand For</span>
          </h2>

          <div className="mt-6 space-y-4"> {/* Reduced spacing */}
  {Object.keys(images).map((title) => (
    <div
      key={title}
      className={`pl-4 py-2 cursor-pointer transition-all duration-300 ${
        selected === title ? "border-l-8 border-black" : "border-l-4 border-gray-300"
      }`}
      onClick={() => setSelected(title)}
    >
      <h3
        className={`text-base font-semibold ${
          selected === title ? "text-black" : "text-gray-700"
        }`} // Reduced font size
      >
        {title}
      </h3>
      <p className="text-sm text-gray-500"> {/* Reduced paragraph size */}
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

        {/* Right Section - Animated Image */}
        <div className="w-full md:w-1/2 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={selected}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full"
            >
              <Image
                src={images[selected]}
                alt={selected}
                width={700}
                height={450}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
