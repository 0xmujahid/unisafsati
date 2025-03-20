"use client";

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { FaCheckCircle, FaExclamationCircle, FaSpinner, FaUser, FaEnvelope, FaPhone, FaBook, FaLock, FaGraduationCap, FaCheck } from 'react-icons/fa';
import Script from 'next/script';

declare global {
  interface Window {
    grecaptcha: any;
    onRecaptchaLoad: () => void;
  }
}

const ApplyHere = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<HTMLDivElement>(null);

  // Initialize reCAPTCHA
  useEffect(() => {
    // Define the callback function for when reCAPTCHA script loads
    window.onRecaptchaLoad = () => {
      if (recaptchaRef.current && window.grecaptcha) {
        window.grecaptcha.render(recaptchaRef.current, {
          sitekey: '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI', // This is Google's test key
          callback: (token: string) => {
            setCaptchaToken(token);
          },
          'expired-callback': () => {
            setCaptchaToken(null);
          }
        });
      }
    };

    return () => {
      // Clean up
      window.onRecaptchaLoad = () => {};
    };
  }, []);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+\s()-]{10,15}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Phone number is invalid';
    }

    if (!captchaToken) {
      newErrors.captcha = 'Please complete the CAPTCHA verification';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real application, you would send the data to your backend here
      // const response = await fetch('/api/apply', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ ...formData, captchaToken })
      // });
      
      // if (!response.ok) throw new Error('Failed to submit form');
      
      setSubmitSuccess(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Reset reCAPTCHA
      if (window.grecaptcha) {
        window.grecaptcha.reset();
        setCaptchaToken(null);
      }
    } catch (error) {
      setSubmitError('There was an error submitting your application. Please try again.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reset success message after 5 seconds
  useEffect(() => {
    if (submitSuccess) {
      const timer = setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [submitSuccess]);

  return (
    <>
      <Script
        src="https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit"
        strategy="afterInteractive"
      />
      
      <section 
        id="apply-here" 
        className="relative py-10 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12"
        style={{
          backgroundImage: "url('')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* No overlay div for transparent background */}
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="backdrop-blur-sm grid grid-cols-1 md:grid-cols-2 gap-0 shadow-xl rounded-lg overflow-hidden border border-gray-100">
            {/* Left column with image - now visible on all screens and appears first */}
            <div className="flex order-1 h-full items-center bg-[#f8f9fa]/80">
              <Image 
                src="/images/register-form.png" 
                alt="Student Application" 
                width={683} 
                height={1024}
                className="w-full h-auto"
                priority
              />
            </div>
            
            {/* Right column with form - appears second */}
            <div className="p-4 bg-white sm:p-6 md:p-8 lg:p-12 col-span-1 md:col-span-1 order-2">
              <div className="mb-4 sm:mb-6 md:mb-8 text-center">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#252A64]">
                  Apply Here
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-2">
                  Unlocking Opportunities for Your Academic Journey
                </p>
              </div>
              
              {submitSuccess ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 sm:p-6 text-center">
                  <FaCheckCircle className="text-green-500 text-2xl sm:text-3xl md:text-4xl mx-auto mb-2 sm:mb-3 md:mb-4" />
                  <h4 className="text-base sm:text-lg md:text-xl font-semibold text-green-700 mb-2">Application Submitted!</h4>
                  <p className="text-xs sm:text-sm md:text-base text-green-600">
                    Thank you for your application. Our team will contact you shortly to discuss the next steps.
                  </p>
                </div>
              ) : (
                <div className="application-form">
                <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2 font-medium flex items-center">
                <FaUser className="mr-2 text-blue-500" />
                Name*
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First"
                    required
                    className="w-full px-4 py-3 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last"
                    required
                    className="w-full px-4 text-black py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2 font-medium flex items-center">
                <FaEnvelope className="mr-2 text-blue-500" />
                Email*
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2 font-medium flex items-center">
                <FaPhone className="mr-2 text-blue-500" />
                Phone*
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2 font-medium flex items-center">
                <FaGraduationCap className="mr-2 text-blue-500" />
                What subject area are you interested in?
              </label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 text-black py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors appearance-none bg-white"
              >
                <option value="">Select a subject</option>
                <option value="business">Business</option>
                <option value="computing">Computing</option>
                <option value="engineering">Engineering</option>
                <option value="health">Health</option>
                <option value="law">Law</option>
                <option value="science">Science</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            
            
            {/* reCAPTCHA element */}
            <div className="my-4">
              <div 
                ref={recaptchaRef} 
                className="g-recaptcha"
              ></div>
              {errors.captcha && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <FaExclamationCircle className="mr-1" />
                  {errors.captcha}
                </p>
              )}
            </div>
            
            <div className="text-center pt-4">
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium w-full md:w-auto min-w-[200px] transform hover:scale-105 transition-transform"
              >
                Submit Application
              </button>
            </div>
          </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ApplyHere; 