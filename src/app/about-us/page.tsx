import Link from 'next/link';
import Image from 'next/image';
import { FaAngleRight } from 'react-icons/fa';

export default function AboutUsPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-16 px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 max-w-4xl">
              About Us
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content - First Section */}
      

      {/* Empowering Your Education Section */}
      <div className="py-16 px-4 sm:px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Header Section */}
            <div className="lg:col-span-3 text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
                Empowering Your Education
              </h2>
              <p className="max-w-3xl mx-auto text-gray-700 mb-8">
                We are a dynamic team committed to empowering individuals through education. With a passion for helping students achieve their academic aspirations, we provide comprehensive guidance and support.
              </p>
              <Link 
                href="https://wa.link/zsv41s" 
                target="_blank"
                className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
              >
                <span>Message us on WhatsApp</span>
                <FaAngleRight className="ml-2" />
              </Link>
            </div>
            
            {/* First Row of Cards */}
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Education Enthusiasts</h3>
                <p className="text-gray-700">
                  We are passionate about education and dedicated to empowering individuals through knowledge and learning.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Experienced Professionals</h3>
                <p className="text-gray-700">
                  Our team comprises experienced professionals with diverse backgrounds in education, admissions, and career development.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Advocates for Equal Access</h3>
                <p className="text-gray-700">
                  We believe in equal access to educational opportunities and work tirelessly to break down barriers and create a more inclusive educational landscape.
                </p>
              </div>
            </div>
            
            {/* Second Row of Cards */}
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Student-Centered Approach</h3>
                <p className="text-gray-700">
                  We put your needs and aspirations at the forefront, tailoring our services to ensure your success and satisfaction.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Comprehensive Support</h3>
                <p className="text-gray-700">
                  From admissions assistance to career planning, we offer comprehensive support throughout your educational experience.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Transformative Impact</h3>
                <p className="text-gray-700">
                  We are committed to making a transformative impact in your life, helping you shape a brighter future through education.
                </p>
              </div>
            </div>
            
            {/* Image Column */}
            <div className="flex items-center justify-center">
              <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm">
                <Image 
                  src="https://unisef.co.uk/wp-content/uploads/2023/06/graduation-student.png"
                  alt="Graduation student"
                  width={400}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Join Our Community</h3>
                  <p className="text-gray-700 mb-4">
                    Become part of our growing community of successful students and take the first step towards your educational goals.
                  </p>
                  <Link 
                    href="/#apply-here" 
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4 sm:px-6 md:px-12 bg-blue-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900">
            Ready to Start Your Educational Journey?
          </h2>
          <p className="text-gray-700 mb-8">
            Let us help you navigate the path to academic success. Our expert team is ready to provide personalized guidance and support every step of the way.
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