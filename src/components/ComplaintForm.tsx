"use client";

import { useState, useRef } from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '@/utils/emailjs-init';

const ComplaintForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      // Use EmailJS to send the form data
      const result = await emailjs.sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.COMPLAINT_TEMPLATE_ID,
        e.currentTarget
      );

      if (result.status !== 200) {
        throw new Error('Failed to send complaint');
      }

      // Clear form using the ref
      if (formRef.current) {
        formRef.current.reset();
      }
      
      setSubmitSuccess(true);
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error:', error);
      setSubmitError('Failed to send complaint. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 max-w-xs">
      <div className="flex items-center mb-3">
        <FaExclamationTriangle className="text-red-500 mr-2" />
        <h3 className="text-lg font-semibold text-gray-800">Submit a Complaint</h3>
      </div>
      
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-3">
        <div>
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="w-full px-3 py-2 text-sm text-gray-700 border border-gray-300 rounded-md focus:ring-1 focus:ring-red-500 focus:border-red-500"
          />
        </div>
        
        <div>
          <input
            type="email"
            name="reply_to"
            placeholder="Your Email"
            required
            className="w-full px-3 py-2 text-sm text-gray-700 border border-gray-300 rounded-md focus:ring-1 focus:ring-red-500 focus:border-red-500"
          />
        </div>
        
        <div>
          <select
            name="complaint_type"
            required
            className="w-full px-3 py-2 text-sm text-gray-700 border border-gray-300 rounded-md focus:ring-1 focus:ring-red-500 focus:border-red-500"
          >
            <option value="">Select Complaint Type</option>
            <option value="Service">Service Issue</option>
            <option value="Staff">Staff Behavior</option>
            <option value="Process">Application Process</option>
            <option value="Other">Other</option>
          </select>
        </div>
        
        <div>
          <textarea
            name="message"
            rows={3}
            placeholder="Describe your complaint"
            required
            className="w-full px-3 py-2 text-sm text-gray-700 border border-gray-300 rounded-md focus:ring-1 focus:ring-red-500 focus:border-red-500"
          ></textarea>
        </div>
        
        {submitError && (
          <div className="text-xs text-red-600 p-2 bg-red-50 rounded-md">
            {submitError}
          </div>
        )}
        
        {submitSuccess && (
          <div className="text-xs text-green-600 p-2 bg-green-50 rounded-md">
            Your complaint has been submitted. We'll review it shortly.
          </div>
        )}
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-red-600 hover:bg-red-700 text-white text-sm font-medium py-2 px-4 rounded-md transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Complaint'}
        </button>
      </form>
    </div>
  );
};

export default ComplaintForm; 