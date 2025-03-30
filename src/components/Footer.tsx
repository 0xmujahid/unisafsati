"use client";

import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaFacebook, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
    
      
      {/* Sticky Phone Button */}
      {/* <a 
        href="tel:02039835819" 
        className="fixed bottom-24 right-4 z-50 flex items-center group"
        aria-label="Call us"
      >
        <div className="bg-white text-blue-600 shadow-lg rounded-l-full py-2 pl-4 pr-2 mr-1 transform scale-0 group-hover:scale-100 transition-transform duration-300 origin-right">
          <span className="text-sm font-medium whitespace-nowrap">Call us</span>
        </div>
        <div className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 shadow-lg transition-all duration-300 flex items-center justify-center">
          <FaPhone className="text-xl" />
        </div>
      </a>
       */}
      <footer className="bg-gray-900 text-white pt-12 sm:pt-16 pb-6 sm:pb-8 px-4 sm:px-6 md:px-12 relative overflow-hidden">
      {/* Background decorations */}
        <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-blue-900 rounded-full opacity-10 transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-56 sm:w-80 h-56 sm:h-80 bg-blue-900 rounded-full opacity-10 transform -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          <div>
              <div className="flex items-center mb-4 sm:mb-6">
                <Image 
                  src="/images/logo.png" 
                  alt="PROFILESOLE Logo"
                  width={100}
                  height={100}
                  className="h-auto"
                  priority
                />
                <span className="text-4xl font-bold text-white ml-0" style={{ fontSize: "24px", fontWeight: "bold", marginLeft: "-15px" }}>
                  PROFILE & SALOME
                  <span className="text-sm text-[#FFD700] block leading-tight" style={{ fontSize: "10px" }}>National & international students consultancy</span>
                </span>
              </div>
              <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">
              Your trusted educational consultancy. We provide personalized guidance, extensive network, and proven results to help students achieve academic excellence.
            </p>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">About Us</h3>
              <ul className="space-y-2 sm:space-y-3">
              <li>
                  <Link href="/about" className="text-sm sm:text-base text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Why PROFILE & SALOME?
                </Link>
              </li>
              <li>
                  <Link href="/student-support" className="text-sm sm:text-base text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Student Support
                </Link>
              </li>
              <li>
                  <Link href="/locations" className="text-sm sm:text-base text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Locations
                </Link>
              </li>
              <li>
                  <Link href="/contact" className="text-sm sm:text-base text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Contact Us
                </Link>
              </li>
              <li>
                  <Link href="/apply" className="text-sm sm:text-base text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Apply Now
                </Link>
              </li>
            </ul>
          </div>

            <div className="mt-6 sm:mt-0">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-6 text-white">Courses</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <Link href="/courses/foundation" className="text-sm sm:text-base text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Short Term Courses
                </Link>
              </li>
              <li>
                  <Link href="/courses/foundation" className="text-sm sm:text-base text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Long Term Courses
                </Link>
              </li>
              <li>
                  <Link href="/courses/undergraduate" className="text-sm sm:text-base text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Undergraduate
                </Link>
              </li>
              <li>
                  <Link href="/courses/postgraduate" className="text-sm sm:text-base text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Postgraduate
                </Link>
              </li>
            </ul>
            
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-6 mt-6 sm:mt-10 text-white">Connect With Us</h3>
              <div className="flex space-x-3 sm:space-x-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-blue-600 transition-colors w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center">
                  <FaInstagram size={18} className="sm:text-xl" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-blue-600 transition-colors w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center">
                  <FaFacebook size={18} className="sm:text-xl" />
                </a>
                <a href="https://wa.me/447350011170" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-green-600 transition-colors w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center">
                  <FaWhatsapp size={18} className="sm:text-xl" />
                </a>
                <a href="tel:02039835819" className="bg-gray-800 hover:bg-blue-600 transition-colors w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center">
                  <FaPhone size={18} className="sm:text-xl" />
              </a>
            </div>
          </div>

            <div className="mt-6 lg:mt-0">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-6 text-white">Contact Information</h3>
              <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start">
                  <FaMapMarkerAlt className="text-blue-400 mt-1 mr-2 sm:mr-3 flex-shrink-0 text-base sm:text-lg" />
                <div>
                    <p className="text-sm sm:text-base text-gray-300 font-medium">Address:</p>
                    <p className="text-xs sm:text-sm text-gray-400">Forest House, 16-20 Clement Road, London, Ilford, IG1 1BA</p>
                </div>
              </li>
              <li className="flex items-start">
                  <FaEnvelope  className="text-blue-400 mt-1 mr-2 sm:mr-3 flex-shrink-0 text-base sm:text-lg" />
                <div>
                    <p className="text-sm sm:text-base text-gray-300 font-medium">Email:</p>
                    <p className="text-xs sm:text-sm text-gray-400">info@profilesalome.co.uk</p>
                    <p className="text-xs sm:text-sm text-gray-400">Complaint@profilesalome.co.uk</p>
                    <p className="text-xs sm:text-sm text-gray-400">admin@profilesalome.co.uk</p>
                </div>
              </li>
              <li className="flex items-start">
                  <FaPhone  className="text-blue-400 mt-1 mr-2 sm:mr-3 flex-shrink-0 text-base sm:text-lg" />
                <div>
                    <p className="text-sm sm:text-base text-gray-300 font-medium">Phone:</p>
                    <p className="text-xs sm:text-sm text-gray-400">+447356141418</p>
                    <p className="text-xs sm:text-sm text-gray-400">+447350011170</p>
                </div>
              </li>
            </ul>
             
              
          </div>
        </div>
        
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800 text-xs sm:text-sm text-gray-500">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <p className="text-center sm:text-left">© 2024 PROFILE & SALOME | London – Manchester – Birmingham – Southampton – Leeds</p>
              <div className="mt-3 sm:mt-0 flex space-x-2 sm:space-x-4">
              <Link href="/privacy-policy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
              <span>|</span>
              <Link href="/cookie-policy" className="hover:text-blue-400 transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer; 