import Link from 'next/link';
import Image from 'next/image';
import { FaAngleRight } from 'react-icons/fa';

export default function CoursesPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-16 px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 max-w-4xl">
            Unleash Your Potential at Top-Ranked Universities in the World 
            </h1>
            <div className="max-w-3xl mb-10">
              <p className="text-lg text-gray-200">
              Apply now to study inside and outside the UK. World-class education, diverse disciplines, cutting-edge research, and global connections empower personal growth and success. Seize limitless opportunities for a better tomorrow.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link 
                href="/#apply-here" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition-colors"
              >
                Apply Now
              </Link>
              <Link 
                href="https://wa.me/447350011170" 
                target="_blank"
                className="bg-white text-blue-900 hover:bg-gray-100 font-medium py-3 px-6 rounded-md flex items-center justify-center transition-colors"
              >
                <span>Message us on WhatsApp</span>
                <FaAngleRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Learning Environment Section */}
     

      {/* Our Courses Section */}
      <div className="py-16 px-4 sm:px-6 md:px-12 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Courses</h2>
            <p className="max-w-2xl mx-auto text-gray-200">
              A short introduction to the workshop instructors and why their background should inspire potential student&apos;s confidence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Short term courses */}
            <div className="bg-white text-gray-900 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">Short Term courses</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Prepare for undergraduate studies with our comprehensive short term programs.
                </p>
                <Link 
                  href="/courses/shortterm"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
            {/* Medium Term courses  */}
            <div className="bg-white text-gray-900 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">Medium Term courses</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Prepare for undergraduate studies with our comprehensive medium term programs.
                </p>
                <Link 
                  href="/courses/mediumterm"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
            {/* Undergraduate Card */}
            <div className="bg-white text-gray-900 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
              <div className="h-48 bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">Undergraduate</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Discover our wide range of undergraduate degree programs at top UK universities.
                </p>
                <Link 
                  href="/courses/undergraduate"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
            
            {/* Postgraduate Card */}
            <div className="bg-white text-gray-900 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
              <div className="h-48 bg-gradient-to-r from-green-500 to-teal-600 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">Postgraduate</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Advance your career with our specialized postgraduate and master&apos;s degree programs.
                </p>
                <Link 
                  href="/courses/postgraduate"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 