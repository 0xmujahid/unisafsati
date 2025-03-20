"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const ImageDisplay = () => {
  // Define the image data with links
  const images = [
    {
      id: 1,
      src: "/images/star-1.png",
      alt: "Star Image 1",
      title: "Student Finance Support",
      description: "Get expert guidance on securing student finance for your education",
      link: "/student-finance"
    },
    {
      id: 2,
      src: "/images/star-2.png",
      alt: "Star Image 2",
      title: "University Enrollment",
      description: "We help you enroll in the best universities across the UK",
      link: "/courses"
    },
    {
      id: 3,
      src: "/images/star-3.png",
      alt: "Star Image 3",
      title: "Career Guidance",
      description: "Receive professional career guidance to secure your future",
      link: "/about"
    }
  ];

  return (
    <section className="py-16 px-6 md:px-12 text-white" style={{
      backgroundImage: 'linear-gradient(125deg, #252A64 45%, #B2835D 100%)',
      backgroundColor: 'transparent'
    }}>
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-20 h-1 bg-white mx-auto mb-8"
        ></motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((image) => (
            <motion.div 
              key={image.id}
              className="bg-white/10 p-6 rounded-lg overflow-hidden hover:bg-white/20 transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: image.id * 0.1 }}
            >
              <Link href={image.link} className="block">
                <div className="relative h-64 w-full mb-6 flex items-center justify-center">
                  <Image 
                    src={image.src}
                    alt={image.alt}
                    width={200}
                    height={200}
                    className="object-contain transition-transform hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">{image.title}</h3>
                <p className="text-white/80">
                  {image.description}
                </p>
                <div className="mt-4 text-white/90 flex items-center">
                  <span>Learn more</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageDisplay; 