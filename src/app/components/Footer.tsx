import { useEffect, useState } from "react";
import { 
  FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP, FaArrowUp 
} from "react-icons/fa";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  // Show the button when scrolling down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Custom smooth scroll to top with slower speed
  const scrollToTop = () => {
    const scrollDuration = 1000; // Duration in milliseconds (1 second)
    const scrollStep = -window.scrollY / (scrollDuration / 15);
    
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };

  return (
    <div className="relative p-10 text-white bg-black">
      <div className="absolute top-0 left-0 w-full h-[150px] bg-white rounded-b-[50%]" />
      
      
      <div className="relative z-10 flex flex-col items-center justify-between md:flex-row md:items-start">

        <div className="invisible w-full mt-8 md:w-1/2 md:mt-0">
          <h2 className="mb-4 text-2xl font-bold">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">About</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Services</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
          </ul>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="relative flex flex-col items-center justify-between px-6 mt-10 text-sm md:flex-row">
        {/* Company Name on the Left */}
        <div className="mb-4 font-semibold text-white md:mb-0">plexCode</div>

        {/* Social Media Icons in the Center */}
        <div className="flex justify-center gap-4 mb-4 text-lg md:mb-0">
          <a href="#" className="text-white"><FaLinkedinIn /></a>
          <a href="#" className="text-white"><FaPinterestP /></a>
          <a href="#" className="text-white"><FaFacebookF /></a>
          <a href="#" className="text-white"><FaTwitter /></a>
        </div>

        {/* Copyright Text on the Right */}
        <div className="text-sm text-center text-white md:text-right">
          &copy; {new Date().getFullYear()} plexCode. All Rights Reserved
        </div>
      </div>

      {/* Scroll to Top Button */}
      {isVisible && (
        <button 
          onClick={scrollToTop} 
          className="fixed p-3 text-white transition-all duration-300 bg-black rounded-full shadow-lg bottom-24 right-6 hover:bg-gray-800"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={15} />
        </button>
      )}
    </div>
  );
}
