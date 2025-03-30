import Link from 'next/link';
import Image from 'next/image';
import { FaAngleRight } from 'react-icons/fa';

export default function StudentFinanceSupportPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-16 px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 max-w-4xl">
              Student Finance Support 
            </h1>
            <div className="max-w-3xl mb-10">
              <p className="text-lg text-gray-200">
                Get expert guidance on navigating the global student finance system and maximize your financial support options.
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

      {/* Main Content */}
      

      

      {/* CTA Section */}
      <div className="py-16 px-4 sm:px-6 md:px-12 bg-blue-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900">
            Get Expert Support with Your Student Finance Application
          </h2>
          <p className="text-gray-700 mb-8">
            Don't navigate the complex world of student finance alone. Our expert advisors are here to help you maximize your funding opportunities and ensure a smooth application process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/#apply-here" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition-colors"
            >
              Apply Now
            </Link>
            <Link 
              href="https://wa.me/447350011170" 
              target="_blank"
              className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-md flex items-center justify-center transition-colors"
            >
              <span>Message us on WhatsApp</span>
              <FaAngleRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 