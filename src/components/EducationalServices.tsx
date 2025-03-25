"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaAngleRight } from 'react-icons/fa';

const EducationalServices = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slideInUp');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (serviceRefs.current) {
      serviceRefs.current.forEach((ref) => {
        if (ref) observer.observe(ref);
      });
    }

    return () => {
      if (serviceRefs.current) {
        serviceRefs.current.forEach((ref) => {
          if (ref) observer.unobserve(ref);
        });
      }
    };
  }, []);

  return (
    <section className="py-12 sm:py-16 md:py-24" ref={sectionRef} style={{
      backgroundImage: 'linear-gradient(125deg, #101023 45%, #B2835D 100%)',
      backgroundColor: 'transparent'
    }}>
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        {/* Services Icons Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16">
          {/* University Enrollment */}
          <div 
            className="bg-white/5 backdrop-blur-sm rounded-lg p-4 sm:p-6 flex flex-col items-center text-center transition-all duration-300 hover:bg-white/10"
            ref={(el) => { serviceRefs.current[0] = el; }}
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-white flex items-center justify-center mb-3 sm:mb-4">
              <FaArrowRight className="text-white text-lg sm:text-xl" />
            </div>
            <h3 className="text-white text-lg sm:text-xl font-bold mb-2 sm:mb-3">University Enrolment</h3>
            <p className="text-white/80 text-sm sm:text-base">
              Start your educational journey by enrolling in a university. Discover a wide range of programs, gain knowledge, and open doors to a brighter future filled with endless possibilities.
            </p>
          </div>

          {/* Student Finance Assistance */}
          <div 
            className="bg-white/5 backdrop-blur-sm rounded-lg p-4 sm:p-6 flex flex-col items-center text-center transition-all duration-300 hover:bg-white/10"
            ref={(el) => { serviceRefs.current[1] = el; }}
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-white flex items-center justify-center mb-3 sm:mb-4">
              <FaArrowRight className="text-white text-lg sm:text-xl" />
            </div>
            <h3 className="text-white text-lg sm:text-xl font-bold mb-2 sm:mb-3">Assistance with Student Finance Application</h3>
            <p className="text-white/80 text-sm sm:text-base">
              Helping you navigate the student finance application process, ensuring you receive the financial support you need for your education.
            </p>
          </div>

          {/* Guaranteed Placement */}
          <div 
            className="bg-white/5 backdrop-blur-sm rounded-lg p-4 sm:p-6 flex flex-col items-center text-center transition-all duration-300 hover:bg-white/10"
            ref={(el) => { serviceRefs.current[2] = el; }}
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-white flex items-center justify-center mb-3 sm:mb-4">
              <FaArrowRight className="text-white text-lg sm:text-xl" />
            </div>
            <h3 className="text-white text-lg sm:text-xl font-bold mb-2 sm:mb-3">Guaranteed Placement Upon Course Completion</h3>
            <p className="text-white/80 text-sm sm:text-base">
              Securing placement after course completion is guaranteed, ensuring a seamless transition into the next phase of your academic journey.
            </p>
          </div>
        </div>

        {/* Main Content */}
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16"> */}
          {/* Image Column */}
          {/* <div className="hidden lg:flex items-center justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-md">
              <Image 
                src="/images/educational-partner.png" 
                alt="Educational Partner" 
                width={800} 
                height={800}
                className="rounded-lg"
              />
            </div>
          </div> */}

          {/* Content Column */}
          {/* <div className="flex flex-col justify-center order-1 lg:order-2">
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Your Reliable Educational Partner</h2>
            <p className="text-white/80 text-sm sm:text-base mb-4 sm:mb-6">
              Trustworthy and dependable, we are your reliable educational partner. With a commitment to your success, we provide guidance, support, and resources to help you achieve your educational goals.
            </p>
            <Link href="/#apply-here" className="inline-flex items-center bg-white text-[#0f1033] font-bold py-2.5 sm:py-3 px-5 sm:px-6 rounded-md mb-6 sm:mb-10 hover:bg-opacity-90 transition-all duration-300 w-fit text-sm sm:text-base shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              <span>Apply Now</span>
              <FaAngleRight className="ml-2" />
            </Link>

            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Guaranteed Placement After Course Completion.</h2>
            <p className="text-white/80 text-sm sm:text-base">
              Securing placement after course completion is guaranteed, ensuring a seamless transition into the next phase of your academic journey.
            </p>
          </div>
        </div> */}

        {/* Additional Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
          {/* Mature Students */}
          <div 
            className="bg-white  backdrop-blur-sm rounded-lg p-6 sm:p-8 opacity-0 transition-all duration-500"
            ref={(el) => { serviceRefs.current[3] = el; }}
          >
            <h3 className="text-black text-lg sm:text-xl font-bold mb-2 sm:mb-3">Mature student looking to re-start University education?</h3>
            <p className="text-black/80 text-sm sm:text-base">
              The journey of education is ongoing, and sometimes we haven't finished our studies yet, but with determination and support, we can continue towards our academic goals.
            </p>
          </div>

          {/* Professionals */}
          <div 
            className="bg-white  backdrop-blur-sm rounded-lg p-6 sm:p-8 opacity-0 transition-all duration-500"
            ref={(el) => { serviceRefs.current[4] = el; }}
          >
            <h3 className="text-black text-lg sm:text-xl font-bold mb-2 sm:mb-3">We welcome experienced professionals with missing qualifications</h3>
            <p className="text-black/80 text-sm sm:text-base">
              Navigating the educational landscape can be challenging, especially when faced with a missing qualification, but with guidance and determination, alternative pathways can lead to success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationalServices; 