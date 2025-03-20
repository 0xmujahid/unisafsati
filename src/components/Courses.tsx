"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Courses = () => {
  // Course data
  const courses = [
    {
      id: 1,
      title: "Short Term Courses",
      description:"For limited time only",
      link: "/courses/shortterm",
      delay: 0,
      className: "min-h-[180px]", // Shortest card
      image: "/images/Foundation1.jpg"
    },
    {
      id: 2,
      title: "Medium Term Courses",
      description:"(Advanced Learner Loan Available)",
      link: "/courses/mediumterm",
      delay: 0,
      className: "min-h-[180px]", // Shortest card
      image: "/images/medium.jpg"
    },
    {
      id: 3,
      title: "Undergraduate",
      description:"",

      link: "/courses/undergraduate",
      delay: 0.3,
      className: "min-h-[220px]", // Medium card
      image: "/images/undergraduate.jpg"
    },
    {
      id: 4,
      title: "Postgraduate",
      description:"",

      link: "/courses/postgraduate",
      delay: 0.6,
      className: "min-h-[260px]", // Tallest card
      image: "/images/postgraduate.jpg"
    }
  ];

  return (
    <section className="py-16 px-6 md:px-12 bg-[#5D16EA] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Discover our courses
            </motion.h2>
          </div>
          {/* <div>
            <motion.p
              className="text-lg text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Expand your knowledge and discover opportunities at our London, Manchester, Birmingham, Southampton, Leeds branch campuses
            </motion.p>
          </div> */}
        </div>
        
        <div className="e-con-inner grid grid-cols-1 md:grid-cols-4 gap-8">
          {courses.map((course) => (
            <motion.div 
              key={course.id}
              className={`e-flex e-con-boxed e-con e-child ${course.className}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: course.delay }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="e-con-inner">
                <div className="outer_box elementor-position-top">
                  <div className="elementor-widget-container">
                    <div className="elementor-image-box-wrapper">
                      <figure className="elementor-image-box-img">
                        <Link href={course.link} tabIndex={-1}>
                          <Image 
                            src={course.image}
                            alt={course.title}
                            width={347}
                            height={231}
                            className="attachment-full size-full"
                          />
                        </Link>
                      </figure>
                      <div className="elementor-image-box-content">
                        <h2 className="elementor-image-box-title">
                          <Link href={course.link}>{course.title}</Link>
                        </h2>
                        <p className='text-sm text-black'>{course.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses; 