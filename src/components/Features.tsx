"use client";

import { motion } from 'framer-motion';
import { FaUniversity, FaPoundSign, FaBriefcase } from 'react-icons/fa';

const Features = () => {
  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  };

  return (
    <section className="py-16 px-6 md:px-12 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-blue-50 opacity-50 -skew-y-6 transform -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
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
          className="w-20 h-1 bg-blue-600 mx-auto mb-12"
        ></motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            className="p-8 border border-gray-200 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow group"
            custom={0}
            initial="hidden"
            animate="visible"
            variants={featureVariants}
          >
            <div className="text-blue-600 mb-6 transform group-hover:scale-110 transition-transform">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                <FaUniversity size={32} />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">University Enrolment</h3>
            <p className="text-gray-700">
              Start your educational journey by enrolling in a university. Discover a wide range of programs, gain knowledge, and open doors to a brighter future filled with endless possibilities.
            </p>
          </motion.div>

          <motion.div 
            className="p-8 border border-gray-200 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow group"
            custom={1}
            initial="hidden"
            animate="visible"
            variants={featureVariants}
          >
            <div className="text-blue-600 mb-6 transform group-hover:scale-110 transition-transform">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                <FaPoundSign size={32} />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">Assistance with Student Finance Application</h3>
            <p className="text-gray-700">
              Helping you navigate the student finance application process, ensuring you receive the financial support you need for your education.
            </p>
          </motion.div>

          <motion.div 
            className="p-8 border border-gray-200 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow group"
            custom={2}
            initial="hidden"
            animate="visible"
            variants={featureVariants}
          >
            <div className="text-blue-600 mb-6 transform group-hover:scale-110 transition-transform">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                <FaBriefcase size={32} />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">Guaranteed Placement Upon Course Completion</h3>
            <p className="text-gray-700">
              Securing placement after course completion is guaranteed, ensuring a seamless transition into the next phase of your academic journey.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features; 