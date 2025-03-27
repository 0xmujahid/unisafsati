"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaChevronRight, FaAngleDown } from 'react-icons/fa';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [text, setText] = useState("profile");

  useEffect(() => {
    const interval = setInterval(() => {
      setText((prev) => (prev === "Profile" ? "Salome" : "Profile"));
    }, 2500); // Change text every 2.5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`w-full ${isSticky ? 'fixed top-0 left-0 right-0 z-50 shadow-md animate-slideDown' : ''}`}>
      <div className="bg-white py-3 sm:py-4">
        <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0 pl-2 sm:pl-3 md:pl-5">
              <Link href="/" className="block flex items-center">
                <Image 
                  src="/images/logo.png" 
                  alt="PROFILESOLE Logo"
                  width={100}
                  height={100}
                  className="h-auto"
                  priority
                />
                <span className="text-4xl font-bold text-[#252A64] ml-0" style={{ fontSize: "35px", fontWeight: "bold", transition: "opacity 0.5s ease-in-out", marginLeft: "-15px" }}>
                  {text}
                  <span className="text-sm text-[#FFD700] text-thin block leading-tight" style={{ fontSize: "10px" }}>national & international <br></br> students consultancy</span>
                </span>
              </Link>
            </div>
           

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-10 pr-3 md:pr-5">
              <ul className="flex space-x-4 lg:space-x-10">
                <li>
                  <Link 
                    href="/courses" 
                    className="text-[#252A64] font-bold hover:text-[#B2835D] transition-colors duration-300 py-2 border-b-2 border-transparent hover:border-white text-sm lg:text-base"
                  >
                    Courses
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/student-finance-support" 
                    className="text-[#252A64] font-bold hover:text-[#B2835D] transition-colors duration-300 py-2 border-b-2 border-transparent hover:border-white text-sm lg:text-base"
                  >
                    Student Finance Support
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/about-us" 
                    className="text-[#252A64] font-bold hover:text-[#B2835D] transition-colors duration-300 py-2 border-b-2 border-transparent hover:border-white text-sm lg:text-base"
                  >
                    About us
                  </Link>
                </li>
              </ul>

              {/* CTA Button */}
              <a 
                href="https://wa.me/447350011170"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#252A64] text-white font-bold py-2 px-4 lg:py-2.5 lg:px-6 rounded-md hover:bg-opacity-90 transition-all duration-300 text-sm lg:text-base whitespace-nowrap"
              >
                <span>Book your free call</span>
                <FaChevronRight className="ml-2" />
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden pr-2 sm:pr-3">
              <button 
                onClick={toggleMenu}
                className="text-black p-2"
                aria-label="Toggle Menu"
              >
                {isMenuOpen ? (
                  <HiX className="h-6 w-6" />
                ) : (
                  <HiMenuAlt3 className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden bg-[#0f1033] overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-[300px] py-5 px-4 sm:px-8 opacity-100' : 'max-h-0 py-0 px-4 sm:px-8 opacity-0'
        }`}
      >
        <ul className="flex flex-col space-y-5">
          <li>
            <Link 
              href="/courses" 
              className="block text-white hover:text-gray-300 transition-colors duration-300 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </Link>
          </li>
          <li>
            <Link 
              href="/student-finance-support" 
              className="block text-white hover:text-gray-300 transition-colors duration-300 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Student Finance Support
            </Link>
          </li>
          <li>
            <Link 
              href="/about-us" 
              className="block text-white hover:text-gray-300 transition-colors duration-300 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About us
            </Link>
          </li>
          <li>
            <a 
            href="https://wa.me/447350011170"
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-[#0f1033] font-bold py-2.5 px-6 rounded-md hover:bg-opacity-90 transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Book your free call</span>
              <FaChevronRight className="ml-2" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar; 