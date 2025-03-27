"use client";

import { useState } from 'react';
import { FaQuestionCircle, FaTimesCircle } from 'react-icons/fa';
import ComplaintForm from './ComplaintForm';

const Sidebar = () => {
  const [showComplaint, setShowComplaint] = useState(false);

  return (
    <div className="fixed right-0 top-1/3 z-50 flex flex-col items-end">
      {/* Complaint Button */}
      <button
        onClick={() => setShowComplaint(!showComplaint)}
        className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-l-md shadow-lg flex items-center transition-all duration-300"
        aria-label={showComplaint ? "Close complaint form" : "Open complaint form"}
      >
        {showComplaint ? (
          <>
            <FaTimesCircle className="mr-2" />
            <span>Close</span>
          </>
        ) : (
          <>
            <FaQuestionCircle className="mr-2" />
            <span>Complaint</span>
          </>
        )}
      </button>

      {/* Complaint Form Slide-out */}
      <div
        className={`bg-white shadow-xl rounded-l-lg overflow-hidden transition-all duration-300 ${
          showComplaint ? 'max-w-xs' : 'max-w-0'
        }`}
      >
        {showComplaint && <ComplaintForm />}
      </div>
    </div>
  );
};

export default Sidebar; 