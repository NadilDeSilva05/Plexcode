// pages/index.js
'use client';

import { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import InnovationSections from '../components/InnovationSection';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [visibleText, setVisibleText] = useState("");
  const [showDomain, setShowDomain] = useState(false);

  useEffect(() => {
    const textSequence = [
      { text: "Pioneering ", delay: 0 },
      { text: "Creating ", delay: 1000, bold: true },
      { text: "Excellence", delay: 2000 },
    ];

    // Show words one by one
    textSequence.forEach(({ text, delay, bold }) => {
      setTimeout(() => {
        setVisibleText(prev => prev + (bold ? `<strong>${text}</strong>` : text));
      }, delay);
    });

    // Hide words and show domain
    setTimeout(() => {
      setVisibleText("");
      setShowDomain(true);
    }, 3500);

    // Hide loader
    setTimeout(() => setLoading(false), 8000);

  }, []);

  return (
    <>
      {loading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-black text-white z-50">
          <div className="text-center">
            {visibleText ? (
              <div 
                className="text-4xl md:text-6xl whitespace-nowrap transition-opacity duration-500"
                dangerouslySetInnerHTML={{ __html: visibleText }}
              />
            ) : showDomain ? (
              <p className="text-lg font-light opacity-75 animate-fade-in">plexCode.com</p>
            ) : null}
          </div>
        </div>
      ) : (
        <div className="animate-fade-in">
          <Navbar />
          <Hero />
          <InnovationSections />
        </div>
      )}

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 4s ease-in-out forwards;
        }
        strong {
          font-weight: bold;
        }
      `}</style>
    </>
  );
}