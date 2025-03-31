'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const HeroSection = () => {
  const heroRef = useRef(null);
  const headingRef = useRef(null);
  const subtextRef = useRef(null);
  const [typedText, setTypedText] = useState('');
  const fullText = "WE BUILD DIGITAL WARRIORS FOR THE TECH BATTLEGROUND...";
  const typingSpeed = 30;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(heroRef.current, {
      backgroundPosition: "50% 55%",
      scrollTrigger: {
        trigger: heroRef.current,
        scrub: true
      }
    });

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
    }, 1000);

    return () => {
      clearTimeout(typingTimer);
    };
  }, []);

  const smoothScroll = () => {
    const scrollAmount = window.innerHeight * 0.95;
    const scrollDuration = 1200;
    const startTime = performance.now();
    const startScroll = window.scrollY;

    const animateScroll = (timestamp: DOMHighResTimeStamp) => {
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
      className="relative flex items-center justify-center h-screen px-6 overflow-hidden lg:px-24 lg:justify-between"
      style={{
        backgroundImage: "url('/images/heroSection/360_F_601354629_0qFSLi9pj5sMwvKgAQn9JIZ3qTY8f0FH.png')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="relative z-10 max-w-2xl">
        <h1 
          ref={headingRef}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] to-[#5b5957] mb-6 tracking-widest animate-fadeIn"
        >
          PlexCode
        </h1>

        <p 
          ref={subtextRef}
          className="mt-4 text-base sm:text-lg md:text-xl font-medium text-gray-300 max-w-3xl uppercase tracking-[0.1em] leading-relaxed"
          style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
        >
          {typedText}
          <span className={`ml-1 w-1 h-6 bg-[#b68e17] inline-block ${typedText.length === fullText.length ? 'animate-blink' : ''}`}></span>
        </p>
      </div>

      {/* Scroll Button */}
      <div 
        className="absolute transform -translate-x-1/2 cursor-pointer bottom-8 left-1/2"
        onClick={smoothScroll}
      >
        <div className="flex flex-col items-center animate-bounce">
          <div className="w-10 h-10 rounded-full border-2 border-[#b68e17] flex justify-center items-center">
            <svg
              className="w-6 h-6 text-[#b68e17]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <span className="mt-2 text-xs tracking-wider text-gray-400">SCROLL</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;