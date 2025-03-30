import React, { useState, useEffect } from "react";
import { Facebook, Twitter, Dribbble } from "lucide-react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to check if the scroll position is greater than 10%
  const handleScroll = () => {
    if (window.scrollY > window.innerHeight * 0.1) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Function to smoothly scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer className="relative bg-black text-white mt-10 overflow-hidden">
      {/* Enhanced Multi-layered Sea Wave Animation */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 h-24">
        {/* First wave layer - Slow and deep */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          className="w-full h-full absolute"
          preserveAspectRatio="none"
        >
          <path
            fill="rgba(0, 0, 0, 0.8)"
            d="M0,96L48,85.3C96,75,192,53,288,53.3C384,53,480,75,576,96C672,117,768,139,864,133.3C960,128,1056,96,1152,85.3C1248,75,1344,85,1392,90.7L1440,96V0H0Z"
            className="animate-[wave_20s_linear_infinite]"
          ></path>
        </svg>
        
        {/* Second wave layer - Medium speed */}
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-full absolute"
          preserveAspectRatio="none"
        >
          <path
            fill="rgba(0, 0, 0, 0.6)"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,58.7C672,64,768,96,864,106.7C960,117,1056,107,1152,96C1248,85,1344,75,1392,69.3L1440,64V0H0Z"
            className="animate-[wave_15s_linear_infinite_reverse] opacity-80"
          ></path>
        </svg>
        
        {/* Third wave layer - Fast and surface-level */}
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-full absolute"
          preserveAspectRatio="none"
        >
          <path
            fill="rgba(0, 0, 0, 0.4)"
            d="M0,32L48,37.3C96,43,192,53,288,69.3C384,85,480,107,576,101.3C672,96,768,64,864,48C960,32,1056,32,1152,42.7C1248,53,1344,75,1392,85.3L1440,96V0H0Z"
            className="animate-[wave_10s_linear_infinite] opacity-90"
          ></path>
        </svg>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center relative z-10 gap-4">
        {/* Left - Company Name */}
        <h2 className="text-xl font-bold">plexCode</h2>

        {/* Center - Social Icons */}
        <div className="flex space-x-6">
          <Facebook className="w-5 h-5 cursor-pointer hover:text-gray-400 transition-colors" />
          <Twitter className="w-5 h-5 cursor-pointer hover:text-gray-400 transition-colors" />
          <Dribbble className="w-5 h-5 cursor-pointer hover:text-gray-400 transition-colors" />
        </div>

        {/* Right - Copyright */}
        <p className="text-sm opacity-75">© COPYRIGHT {new Date().getFullYear()} BY PLEXCODE</p>
      </div>

      {/* Scroll to Top Button */}
      {isVisible && (
        <div
          className="fixed lg:bottom-16 bottom-4 right-4 w-[50px] h-[50px] flex justify-center items-center z-50 cursor-pointer"
          onClick={scrollToTop}
        >
          <div className="bg-black text-white p-3 h-[50px] w-[50px] rounded-full shadow-lg hover:bg-gray-600 transition duration-300 flex justify-center items-center">
            {/* Upward Arrow Icon (Material Design) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-arrow-up-circle"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 12a.5.5 0 0 1-.5-.5V3.707l-3.146 3.147a.5.5 0 0 1-.708-.707L8 2.707l4.854 4.854a.5.5 0 0 1-.708.707L8.5 3.707V11.5a.5.5 0 0 1-.5.5z"
              />
            </svg>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
