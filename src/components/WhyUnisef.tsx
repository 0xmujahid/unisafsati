"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

const WhyUnisef = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (contentRef.current) {
              contentRef.current.classList.add('opacity-100', 'translate-x-0');
            }
            if (imageRef.current) {
              imageRef.current.classList.add('opacity-100', 'translate-y-0');
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="why-profilesalome"
      className="bg-[#FFD700] w-full overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" >
        <div className="flex flex-col md:flex-row">
          {/* Left column with text */}
          <div 
            ref={contentRef}
            className="w-full md:w-1/2 py-12 sm:py-16 md:py-24 opacity-0  transition-all duration-1000 ease-out"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 sm:mb-6 leading-tight">
              Why<br />US?
            </h2>
            <div className="max-w-lg">
              <p className="text-black text-base sm:text-lg md:text-xl mb-6 sm:mb-10 leading-relaxed">
                Your trusted educational consultancy. Personalised guidance, extensive network, proven results. 
                We empower students with tailored solutions, continuous support, and insights to unlock 
                academic excellence and a brighter future.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link 
                  href="/#apply-here" 
                  className=" text-black border-2 border-solid  font-bold py-2.5 sm:py-3 px-6 sm:px-8 rounded hover:text-black hover:bg-[#B2835D] transition duration-300 text-center inline-block text-sm sm:text-base shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Apply Now
                </Link>
                <Link 
                  href="https://wa.me/447350011170" 
                  target="_blank"
                  className="bg-[#25D366] text-black font-bold py-2.5 sm:py-3 px-6 sm:px-8 rounded hover:bg-opacity-90 transition duration-300 flex items-center justify-center text-sm sm:text-base shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  <span>Message us on WhatsApp</span>
                  <svg 
                    className="w-3 h-3 sm:w-4 sm:h-4 ml-2" 
                    viewBox="0 0 256 512" 
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                  >
                    <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Right column with image */}
          <div 
            ref={imageRef}
            className="w-full md:w-1/2 md:absolute md:right-0 md:bottom-0 opacity-0  transition-all duration-1000 ease-out mt-6 md:mt-0"
          >
            <div className="relative h-full">
              <Image 
                src="/images/why-unisef.png" 
                alt="UNISEF Education" 
                width={1200} 
                height={1200}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUnisef; 