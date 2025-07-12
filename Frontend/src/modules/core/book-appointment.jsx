import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export function BookAppointment() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#9B1915] text-white py-8">
      <div className="max-w-6xl w-full mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <div>
          <p className="text-sm font-medium mb-2">NEED ANY HELP?</p>
          <h3 className="text-2xl lg:text-3xl font-bold">
            Let's book your Appointment with Us now
          </h3>
        </div>
        <button 
          className="btn-zoom bg-white text-red-700 hover:bg-gray-100 px-6 py-3 rounded-md font-semibold flex items-center gap-2 transition-colors whitespace-nowrap"
          onClick={() => navigate('/contact-us')}
        >
          <span className="btn-zoom-content">
            BOOK NOW
            <FaArrowRight />
          </span>
        </button>
      </div>
    </div>
  );
}
