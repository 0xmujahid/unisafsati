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
              Student Finance Support in the UK
            </h1>
            <div className="max-w-3xl mb-10">
              <p className="text-lg text-gray-200">
                Get expert guidance on navigating the UK student finance system and maximize your financial support options.
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
      <div className="py-16 px-4 sm:px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900">
                Student Finance Support in the UK
              </h2>
              <div className="space-y-4 text-gray-700">
                <p className="animate-fadeIn">
                  Student Finance in England is the financial support offered by the government to students that <span className="font-semibold">meet the eligibility requirements.</span> It helps students pay their University fees and other costs via maintenance loans. This support allows many people across the UK to achieve their academic goals.
                </p>
                <p className="animate-fadeIn">
                  <span className="font-semibold">UNISEF</span> with the application for Student Finance to all students applying with us. We can guide you through the correct forms to complete, how to send documents and other details, help with the documents needed, and all the Student Finance questions you may have.
                </p>
                <p className="animate-fadeIn">
                  <a 
                    href="https://www.gov.uk/government/publications/student-finance-how-youre-assessed-and-paid/student-finance-how-youre-assessed-and-paid-2022-to-2023" 
                    target="_blank" 
                    rel="noopener"
                    className="font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    Learn more about Student Finance.
                  </a>
                </p>
              </div>
              
              <div className="mt-8">
                <Link 
                  href="https://wa.me/447350011170" 
                  target="_blank"
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
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
                  src="https://unisef.co.uk/wp-content/uploads/2023/06/woman-g416151636_1280.jpg"
                  alt="Student studying with financial support"
                  width={1280}
                  height={853}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="py-16 px-4 sm:px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-center text-gray-900">
            How We Can Help With Student Finance
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Application Guidance</h3>
              <p className="text-gray-700">
                We'll guide you through the entire Student Finance application process, ensuring you complete all forms correctly and submit the required documentation on time.
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Deadline Management</h3>
              <p className="text-gray-700">
                We'll help you keep track of important deadlines for applications, renewals, and any additional documentation requirements to ensure you don't miss out on funding.
              </p>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Document Preparation</h3>
              <p className="text-gray-700">
                We'll assist you in preparing and organizing all necessary documents required for your Student Finance application, ensuring everything is in order.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Eligibility Section */}
      <div className="py-16 px-4 sm:px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900">
                Eligibility Requirements
              </h2>
              <p className="text-gray-700 mb-6">
                To be eligible for Student Finance in England, you typically need to meet the following criteria:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Be a UK national or have 'settled status'</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Normally live in England</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Have been living in the UK for 3 years before starting your course</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Be studying at an eligible course at an eligible university or college</span>
                </li>
              </ul>
              <p className="mt-6 text-gray-700">
                Different rules may apply if you're from Scotland, Wales, or Northern Ireland. Our advisors can help determine your eligibility based on your specific circumstances.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900">
                Types of Financial Support
              </h2>
              <div className="space-y-4">
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-bold mb-2 text-blue-700">Tuition Fee Loan</h3>
                  <p className="text-gray-700">Covers the full cost of your tuition fees, paid directly to your university or college.</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-bold mb-2 text-blue-700">Maintenance Loan</h3>
                  <p className="text-gray-700">Helps with living costs such as accommodation, food, and study materials. The amount depends on your household income and where you study.</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-bold mb-2 text-blue-700">Disabled Students' Allowances</h3>
                  <p className="text-gray-700">Extra financial help if you have a disability, long-term health condition, mental health condition, or specific learning difficulty.</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-bold mb-2 text-blue-700">Dependants' Grants</h3>
                  <p className="text-gray-700">Additional support if you have dependants, such as children or adults who rely on you financially.</p>
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