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
      <div className="py-16 px-4 sm:px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900">
                Elevate Your Educational Journey with Our Specialised (GB) Consultancy Services
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  With our extensive experience, we assist hundreds of students annually in navigating the process of gaining admission to British universities. Our services come at no cost to you!
                </p>
                <p>
                  We are dedicated to helping you find the most suitable educational course, taking into account your individual circumstances, educational requirements, and career goals.
                </p>
                <p>
                  Led by a team of entrepreneurial and professional experts in recruitment, marketing, and consultancy, our mission is to ensure your educational journey becomes a transformative and fulfilling experience.
                </p>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/#apply-here" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition-colors text-center"
                >
                  Apply Now
                </Link>
                <Link 
                  href="https://wa.link/zsv41s" 
                  target="_blank"
                  className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-md flex items-center justify-center transition-colors"
                >
                  <span>Message us on WhatsApp</span>
                  <FaAngleRight className="ml-2" />
                </Link>
              </div>
            </div>
            
            {/* Image */}
            <div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src="https://unisef.co.uk/wp-content/uploads/2023/06/graduation-student.png"
                  alt="Graduation student"
                  width={840}
                  height={863}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Who We Are Section */}
      <div className="py-16 px-4 sm:px-6 md:px-12 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-1">
              <div className="border-b border-blue-400 w-16 mb-4 animate-fadeInLeft"></div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">Who we are</h2>
              <p className="mb-6">
                We offer top-notch UK University Admission services globally, with integrity and transparency.
              </p>
            </div>
            
            {/* Right Column - Grid of Cards */}
            <div className="lg:col-span-4 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1 */}
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:bg-white/20 transition-all duration-300 h-full">
                <h3 className="text-xl font-bold mb-3 text-white">Our Vision</h3>
                <p className="text-gray-200">
                  Our vision is to empower individuals through quality education, personalized guidance, and equal access to opportunities.
                </p>
              </div>
              
              {/* Card 2 */}
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:bg-white/20 transition-all duration-300 h-full">
                <h3 className="text-xl font-bold mb-3 text-white">Our Mission</h3>
                <p className="text-gray-200">
                  Our mission is to transform lives through education by providing comprehensive support, personalized guidance, and equal access to educational opportunities.
                </p>
              </div>
              
              {/* Card 3 */}
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:bg-white/20 transition-all duration-300 h-full">
                <h3 className="text-xl font-bold mb-3 text-white">Our Process</h3>
                <p className="text-gray-200">
                  We guide your success through a streamlined process. From consultation to application support, decision-making to ongoing guidance, we ensure a rewarding journey towards your goals.
                </p>
              </div>
              
              {/* Card 4 */}
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:bg-white/20 transition-all duration-300 h-full">
                <h3 className="text-xl font-bold mb-3 text-white">Our Team</h3>
                <p className="text-gray-200">
                  Trust our expert team to guide you towards success in your educational journey. We bring diverse expertise, from admissions to career advice, to help you make informed decisions and achieve your goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

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
              href="https://wa.link/zsv41s" 
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