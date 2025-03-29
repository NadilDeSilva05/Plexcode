'use client';

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-opacity-90 bg-black text-white p-4 shadow-md fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Company Name aligned left */}
        <h1 className="text-2xl font-bold">plexCode</h1>

        {/* Right side links */}
        <div className="hidden md:flex space-x-6 ml-auto">
          <Link href="/" className="hover:text-gray-300">Home</Link>
          <Link href="/about" className="hover:text-gray-300">About</Link>
          <Link href="/services" className="hover:text-gray-300">Services</Link>
          <Link href="/contact" className="hover:text-gray-300">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu with Framer Motion for animation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden flex flex-col items-center mt-2 space-y-3  p-4"
        >
          <Link href="/" className="hover:text-gray-300">Home</Link>
          <Link href="/about" className="hover:text-gray-300">About</Link>
          <Link href="/services" className="hover:text-gray-300">Services</Link>
          <Link href="/contact" className="hover:text-gray-300">Contact</Link>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
