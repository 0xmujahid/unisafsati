"use client";

import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Hero = () => {

  const texts = [
    "Apply now to study at  British Universities",
  ];
  
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    
    const handleTyping = () => {
      if (isDeleting) {
        // Backspace effect
        setDisplayText(currentText.substring(0, currentIndex - 1));
        setCurrentIndex(prev => prev - 1);
        setTypingSpeed(50); // Faster when deleting
      } else {
        // Typing effect
        setDisplayText(currentText.substring(0, currentIndex + 1));
        setCurrentIndex(prev => prev + 1);
        setTypingSpeed(100); // Normal speed when typing
      }

      // Change direction when reaching ends
      if (!isDeleting && currentIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause at end
      } else if (isDeleting && currentIndex === 0) {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length); // Loop through texts
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentIndex, currentTextIndex, isDeleting, texts, typingSpeed]);
  function scrollToHero() {
    const hero = document.getElementById('apply-here');
    if (hero) {
      // Most reliable scroll method:
      window.scrollTo({
        top: hero.offsetTop,
        behavior: 'smooth'
      });
    } else {
      console.error("Hero section not found!");
    }
  }
 
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" 
      style={{ 
        backgroundImage: 'url("/images/banner.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
      aria-label="Main banner section"
    >
        <div className="absolute inset-0 bg-black/50"></div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#ffd700] mb-6" itemProp="headline">
          {displayText}
          <span className="animate-pulse border-r-2 border-[#ffd700] ml-1"></span>
          </h1>
          <p className="text-xl sm:text-2xl text-[#ffd700] mb-8 max-w-3xl mx-auto" itemProp="description">
            From your university application enrolment to assisting you with your student finance application, PROFILE & SALOME will be by your side, guiding you through every step of the way.
          </p>
          <p className="text-lg sm:text-xl text-[#ffd700] mb-8 max-w-3xl mx-auto">
            <strong>Guaranteed job placement after graduation</strong> <span className="text-white">(limited availability)</span>.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link
              href="#apply-here"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-md transition duration-300"
              aria-label="Apply to study at a British University"
            >
              Apply Now
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 