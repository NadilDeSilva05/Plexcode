// pages/index.js
'use client';

import { useState, useEffect,  } from 'react';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import InnovationSections from '../components/InnovationSection';
import WhoWeAre from '../components/WhoWeAre';
import WhatWeStandFor from '../components/WhatWeStandFor';



export default function Home() {
  const [loading, setLoading] = useState(true);
  const [visibleText, setVisibleText] = useState("");
  const [visibleLines, setVisibleLines] = useState<{ text: string; bold?: boolean }[]>([]);
  const [showDomain, setShowDomain] = useState(false);
 

  useEffect(() => {
    const textSequence = [
      { text: "Pioneering ", delay: 0 },
      { text: "Creating ", delay: 1000, bold: true },
      { text: "Excellence", delay: 2000 },
    ];

    // Desktop version (one line)
    textSequence.forEach(({ text, delay, bold }) => {
      setTimeout(() => {
        setVisibleText(prev => prev + (bold ? `<strong>${text}</strong>` : text));
      }, delay);
    });

    // Mobile version (stacked lines)
    textSequence.forEach(({ text, delay, bold }, ) => {
      setTimeout(() => {
        setVisibleLines(prev => [...prev, { text: text.trim(), bold }]);
      }, delay);
    });

    // Hide words and show domain
    setTimeout(() => {
      setVisibleText("");
      setVisibleLines([]);
      setShowDomain(true);
    }, 3800);

    // Hide loader
    setTimeout(() => setLoading(false), 7000);

  }, []);

  return (
    <>
      {loading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-black text-white z-50">
          {/* Desktop Version (hidden on mobile) */}
          <div 
            className="hidden md:block text-center w-full px-4 overflow-hidden"
            style={{
              fontSize: 'clamp(24px, 8vw, 64px)' // Responsive font size
            }}
          >
            {visibleText ? (
              <div 
                className="whitespace-nowrap inline-block"
                dangerouslySetInnerHTML={{ __html: visibleText }}
              />
            ) : showDomain ? (
              <p className="text-lg font-light opacity-75 animate-fade-in">plexCode.com</p>
            ) : null}
          </div>

          {/* Mobile Version (hidden on desktop) */}
          <div 
            className="md:hidden text-center w-full px-4"
          >
            <div className="flex flex-col items-center space-y-3">
              {visibleLines.map((line, index) => (
                <div 
                  key={index}
                  className={`animate-fade-in ${line.bold ? 'font-bold' : ''}`}
                  style={{
                    fontSize: 'clamp(24px, 8vw, 48px)', // Slightly smaller on mobile
                    opacity: 1,
                    animationDelay: `${index * 0.3}s`
                  }}
                >
                  {line.text}
                </div>
              ))}
            </div>
            
            {showDomain && visibleLines.length === 0 && (
              <p className="text-lg font-light opacity-75 animate-fade-in mt-4">
                plexCode.com
              </p>
            )}
          </div>
        </div>
      ) : (
            <div className="mainContent delay-500">
            <Navbar />
            <Hero />
            <InnovationSections />
            <WhoWeAre />
            <WhatWeStandFor />

            
            </div>

      )}

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 1; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>
    </>
  );
}