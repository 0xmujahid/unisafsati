'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SuccessGuide = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (imageRef.current) {
              imageRef.current.classList.add('animate-slideInUp');
            }
            if (contentRef.current) {
              contentRef.current.classList.add('animate-slideInRight');
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
      className="overflow-hidden bg-[#5D16EA] w-full"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Grid container replacing flexbox */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-4">
          {/* Image - Left side on desktop, full width on mobile */}
          <div 
            ref={imageRef}
            className="w-full opacity-0 transform  mt-6 md:mt-0 order-2 md:order-none"
          >
            <div className="h-full w-full flex items-end justify-center">
              <Image
                src="/images/success-guide.png"
                alt="We will guide you to success"
                width={600}
                height={700}
                className="w-full h-auto object-cover object-bottom"
                priority
              />
            </div>
          </div>
          
          {/* Content - Right side on desktop, full width on mobile */}
          <div 
            ref={contentRef}
            className="w-full opacity-0 transform py-8 sm:py-10 md:py-16 px-4 sm:px-6 md:px-12 lg:px-16 order-1 md:order-none"
          >
            <div className="max-w-md md:ml-0 lg:pt-28">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white leading-tight">
                We will guide you to success<span className="text-[#25D366]">.</span>
              </h2>
              <p className="text-white mb-6 sm:mb-8 text-base sm:text-lg">
                Your pathway to success. We provide personalized guidance, support, and resources to help you achieve academic excellence.
              </p>
              <Link 
                href="https://wa.me/447417737777"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#25D366] hover:bg-opacity-90 text-white font-semibold py-2.5 sm:py-3 px-6 sm:px-8 rounded-md transition duration-300 text-sm sm:text-base"
              >
                <svg 
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2" 
                  viewBox="0 0 256 512" 
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                >
                  <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
                </svg>
                Message us on WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessGuide; 