'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDownIcon } from '@heroicons/react/solid';

const Hero = () => {
  const heroRef = useRef(null);
  const headingRef = useRef(null);
  const subtextRef = useRef(null);
  const ctaRef = useRef(null);
  const [typedText, setTypedText] = useState('');
  const fullText = "WE BUILD DIGITAL WARRIORS FOR THE TECH BATTLEGROUND";
  const typingSpeed = 30; // milliseconds per character

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Continuous subtle pulse animation
    gsap.to(heroRef.current, {
      backgroundPosition: "50% 55%",
      scrollTrigger: {
        trigger: heroRef.current,
        scrub: true
      }
    });

    // Start typing animation after subtext appears
    const typingTimer = setTimeout(() => {
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i < fullText.length) {
          setTypedText(fullText.substring(0, i + 1));
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, typingSpeed);
    }, 1000); // Start after other animations

    return () => {
      clearTimeout(typingTimer);
    };
  }, []);

  const smoothScroll = () => {
    const scrollAmount = window.innerHeight * 1; // Amount to scroll (30% of viewport height)
    const scrollDuration = 1200; // Total scroll time in milliseconds (1.2 seconds)
    const startTime = performance.now();
    const startScroll = window.scrollY;

    const animateScroll = (timestamp: number) => {
      const progress = Math.min((timestamp - startTime) / scrollDuration, 1);
      const scrollPosition = startScroll + progress * scrollAmount;

      window.scrollTo(0, scrollPosition);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

        requestAnimationFrame(animateScroll);
  };

  return (
    <section
      ref={heroRef}
      className="relative h-screen flex items-center justify-center text-center px-6 bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/heroSection/heroSection.jpg')",
        backgroundPosition: "50% 45%",
      }}
    >
      {/* Minimalist grid overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(0deg,transparent,black)]"></div>
      </div>

      <div className="max-w-6xl relative z-10">
        <h1 
          ref={headingRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] to-[#5b5957] mb-6 tracking-tight animate-fadeIn"
        >
          PLEXCODE
        </h1>

        <p 
          ref={subtextRef}
          className="mt-6 text-lg sm:text-xl md:text-xl font-medium text-gray-300 max-w-3xl mx-auto min-h-[3rem] flex justify-center items-center"
          style={{
            textShadow: '0 2px 4px rgba(0,0,0,0.5)',
          }}
        >
          {typedText}
          <span 
            className={`ml-1 w-2 h-8 bg-[#b68e17] inline-block ${typedText.length === fullText.length ? 'animate-blink' : ''}`}></span>
        </p>

        {/* Minimalistic background gradient */}
        <div className="absolute -bottom-20 left-0 right-0 h-40 "></div>
      </div>

      {/* Scrolling indicator with Arrow Icon */}
      <div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer" 
        onClick={smoothScroll}
      >
        <ArrowDownIcon className="w-6 h-6 text-[#b68e17]" />
      </div>
    </section>
  );
};

export default Hero;
