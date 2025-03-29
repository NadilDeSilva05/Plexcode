import React from "react";

const Banner = () => {
  return (
    <div
      className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center text-center text-white bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/otherImage/bg.jpg')",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="relative z-10 px-4 max-w-4xl mx-auto">
        <p className="uppercase tracking-wide text-xs sm:text-sm md:text-base mb-2 md:mb-3">
          Driving Innovation and Delivering Cutting-Edge Solutions to Overcome Tomorrow's Most Complex Business Challenges
        </p>
        <div className="w-20 sm:w-24 md:w-32 h-[1px] bg-gray-300 mx-auto mb-3 md:mb-4"></div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light">
          Innovate. Transform. Succeed.
        </h1>
      </div>
    </div>
  );
};

export default Banner;