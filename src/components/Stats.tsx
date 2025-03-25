"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Stats = () => {
  const [enrollmentCount, setEnrollmentCount] = useState(0);
  const [universitiesCount, setUniversitiesCount] = useState(0);
  
  useEffect(() => {
    const enrollmentInterval = setInterval(() => {
      setEnrollmentCount(prev => {
        if (prev < 2000) return prev + 50;
        clearInterval(enrollmentInterval);
        return 2000;
      });
    }, 30);
    
    const universitiesInterval = setInterval(() => {
      setUniversitiesCount(prev => {
        if (prev < 60) return prev + 1;
        clearInterval(universitiesInterval);
        return 60;
      });
    }, 50);
    
    return () => {
      clearInterval(enrollmentInterval);
      clearInterval(universitiesInterval);
    };
  }, []);
  
  return (
    <section className="py-16 px-6 md:px-12 text-white" style={{
      backgroundImage: 'linear-gradient(125deg,rgb(67, 37, 100) 45%, #FFD700 100%)',
      backgroundColor: 'transparent'
    }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div 
            className="flex flex-col items-center text-center md:items-center gap-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i}
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  className="w-12 h-12 text-amber-400"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" 
                    clipRule="evenodd" 
                  />
                </svg>
              ))}
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold">3 Years in Business</h2>
            
            <div className="mt-6">
              <div className="text-xl mb-2">Successful Enrolment</div>
              <div className="text-5xl md:text-7xl font-bold text-amber-400">
                {enrollmentCount.toLocaleString()}+
              </div>
            </div>
            
            <div className="mt-6">
              <div className="text-xl mb-2">UK Universities</div>
              <div className="text-5xl md:text-7xl font-bold text-amber-400">
                {universitiesCount}+
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] mx-auto overflow-hidden rounded-lg">
              <Image
                src="/images/student-image.png"
                alt="Student Success"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Stats; 