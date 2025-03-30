"use client";

import { useState, useEffect } from 'react';
import { FaUserFriends, FaLaptop, FaPoundSign, FaTimes, FaGift } from 'react-icons/fa';
import Link from 'next/link';

const PromotionalBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  // Animation effect for elements
  useEffect(() => {
    const interval = setInterval(() => {
      const elements = document.querySelectorAll('.promo-item');
      elements.forEach((element, index) => {
        setTimeout(() => {
          element.classList.add('animate-pulse');
          setTimeout(() => {
            element.classList.remove('animate-pulse');
          }, 500);
        }, index * 300);
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
      <div className="bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-700 text-white p-5 sm:p-8 max-w-3xl mx-4 rounded-xl shadow-2xl relative pointer-events-auto">
        {/* Close button */}
        <button 
          onClick={handleClose}
          className="absolute top-3 right-3 text-white hover:text-gray-200 transition-colors"
          aria-label="Close banner"
        >
          <FaTimes className="text-xl" />
        </button>
        
        {/* Content */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-yellow-300 mb-6 tracking-wide">
            EXCLUSIVE OFFER!
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
            <div className="bg-blue-800 bg-opacity-50 p-4 rounded-lg flex flex-col items-center promo-item transition-all hover:scale-105 hover:bg-blue-900">
              <FaPoundSign className="text-yellow-300 text-3xl mb-3" />
              <span className="text-lg font-bold">Get up to £25,000 by joining us</span>
            </div>
            
            <div className="bg-blue-800 bg-opacity-50 p-4 rounded-lg flex flex-col items-center promo-item transition-all hover:scale-105 hover:bg-blue-900">
              <FaUserFriends className="text-yellow-300 text-3xl mb-3" />
              <span className="text-lg font-bold">Refer A Friend</span>
              <span className="text-sm mt-1">After a successful enrolment</span>
            </div>
            
            <div className="bg-blue-800 bg-opacity-50 p-4 rounded-lg flex flex-col items-center promo-item transition-all hover:scale-105 hover:bg-blue-900">
              <div className="flex mb-3">
                <FaLaptop className="text-yellow-300 text-3xl mr-2" />
                <FaGift className="text-yellow-300 text-3xl" />
              </div>
              <span className="text-lg font-bold">Win a laptop or £500 voucher</span>
            </div>
          </div>
          
          <button 
            className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-8 py-3 rounded-full transition-all transform hover:scale-105 text-lg"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromotionalBanner; 