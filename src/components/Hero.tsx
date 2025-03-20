"use client";

import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 md:pb-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-white">
      <div className="max-w-3xl m-0 mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 sm:space-y-6 md:space-y-8"
        >
          <h1 className="text-5xl m-0 sm:text-4xl md:text-5xl font-bold text-[#252A64] leading-tight">
            Apply now to study at a British University in January 2025
          </h1>
          <p className="text-base font-semibold m-0 mt-0 sm:text-lg md:text-xl text-[#34363F] max-w-2xl mx-auto">
            From your university application enrolment to assisting you with your student finance application, 
           PROFILE & SALOME will be by your side, guiding you through every step of the way.
          </p>
          <p className="text-base  m-0 mt-0 sm:text-lg md:text-xl font-semibold text-[#34363F] max-w-2xl mx-auto">
            Guaranteed job placement after graduation (limited availability).
          </p>
          <div className="flex flex-col mt-0 sm:flex-row gap-3 sm:gap-4 justify-center pt-2 sm:pt-4">
            <Link 
              href="/apply" 
              className="bg-[#252A64] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-md  transition-colors text-center font-medium text-sm sm:text-base shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Apply Now
            </Link>
            <a 
              href="https://wa.me/442039835819" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-md  transition-colors font-medium text-sm sm:text-base shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-300"
            >
              <FaWhatsapp size={18} className="sm:text-xl" />
              <span className="whitespace-nowrap">Message us on WhatsApp</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 