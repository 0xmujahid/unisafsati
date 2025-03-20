import Link from 'next/link';
import { FaAngleRight } from 'react-icons/fa';

export default function FoundationYearPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16 px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 max-w-4xl">
              Medium Term Courses
            </h1>
            <div className="max-w-3xl mb-10">
              <p className="text-lg text-gray-100">
                Build a solid academic foundation and prepare for success in your undergraduate studies at top UK universities.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link 
                href="/#apply-here" 
                className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-md transition-colors"
              >
                Apply Now
              </Link>
              <Link 
                href="https://wa.link/r9qve5" 
                target="_blank"
                className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-6 rounded-md flex items-center justify-center transition-colors"
              >
                <span>Message us on WhatsApp</span>
                <FaAngleRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 px-4 sm:px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-8">
                <h3 className="text-xl font-bold mb-3 text-blue-700">Program Details</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Master of Business Administration(MBA)</li>
                </ul>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 sticky top-24">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Ready to Apply?</h3>
                <p className="text-gray-700 mb-6">
                  Our expert advisors are here to help you choose the right foundation program and guide you through the application process.
                </p>
                <div className="space-y-4">
                  <Link 
                    href="/#apply-here" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition-colors flex items-center justify-center"
                  >
                    Apply Now
                  </Link>
                  <Link 
                    href="https://wa.link/r9qve5" 
                    target="_blank"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-md flex items-center justify-center transition-colors"
                  >
                    <span>WhatsApp Consultation</span>
                    <FaAngleRight className="ml-2" />
                  </Link>
                </div>
                
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="font-bold text-lg mb-4 text-gray-900">Partner Universities</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center">
                      <FaAngleRight className="text-blue-600 mr-2" />
                      University of Manchester
                    </li>
                    <li className="flex items-center">
                      <FaAngleRight className="text-blue-600 mr-2" />
                      University of Birmingham
                    </li>
                    <li className="flex items-center">
                      <FaAngleRight className="text-blue-600 mr-2" />
                      University of Leeds
                    </li>
                    <li className="flex items-center">
                      <FaAngleRight className="text-blue-600 mr-2" />
                      University of Southampton
                    </li>
                    <li className="flex items-center">
                      <FaAngleRight className="text-blue-600 mr-2" />
                      University of Sheffield
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 