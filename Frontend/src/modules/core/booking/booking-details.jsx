import React, { useState, useEffect } from "react";
import house from "../../../assets/house.svg";
import conactIcon from "../../../assets/contact-icon.svg";

export function BookingDetails() {
  const [dotProgress, setDotProgress] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => setDotProgress(95), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="p-8 lg:ps-0 lg:pe-6 space-y-8 text-center lg:text-left">
      <div className="space-y-2 ">
        <div className="flex items-center gap-3 justify-center lg:justify-start">
          <div>
            <div className="w-7 h-0.5 bg-[#9B1915]"></div>
            <div className="w-10 h-0.5 bg-[#9B1915] mt-2"></div>
          </div>
          <span className="text-[#9B1915] font-medium text-sm tracking-wide uppercase text-center lg:text-left">
            BOOKING APPOINTMENT
          </span>
        </div>
      </div>

      <div className="space-y-6 text-center lg:text-start">
        <h1 className="text-3xl lg:text-[45px] font-bold text-gray-800 leading-tight">
          Get your Roofing Solutions With Our Profession
        </h1>

        <p className="text-gray-600 leading-relaxed">
          At Righteous Roofing Ltd, we deliver professional, reliable, and affordable roofing solutions for homes and businesses across the West Midlands. Our team of skilled roofers specializes in everything from minor repairs to complete roof replacements, ensuring durable results that withstand the test of time.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="flex items-start gap-4 justify-center lg:justify-start">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
            <img src={house} alt="house" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Professional</h3>
            <p className="font-semibold text-gray-800">Worker</p>
          </div>
        </div>

        <div className="flex items-start gap-4 justify-center lg:justify-start">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
            <img src={house} alt="house" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Safe and roof</h3>
            <p className="font-semibold text-gray-800">Solution</p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-gray-700 font-medium">Roofing Solutions</span>
          <span className="text-gray-700 font-bold">95%</span>
        </div>
        <div className="relative w-full rounded-full h-3 overflow-hidden">
          <div
            className="absolute top-0 left-0 h-3 w-full"
            style={{ background: "#141422DE" }}
          ></div>
          <div
            className="absolute top-0 left-0 h-3 rounded-full"
            style={{
              width: `${dotProgress}%`,
              background: "#9B1915",
              transition: "width 1s cubic-bezier(0.4,0,0.2,1)",
              zIndex: 1,
            }}
          ></div>
          <div
            className="absolute top-1/2 -translate-y-1/2"
            style={{
              left: `calc(${dotProgress}% - 12px)`,
              transition: "left 1s cubic-bezier(0.4,0,0.2,1)",
              zIndex: 2,
            }}
          >
            <div className="w-5 h-5 bg-[#9B1915] rounded-full border-4 border-gray-200"></div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 justify-center lg:justify-start">
        <div className="w-16 h-16 bg-[#9B1915] rounded-full flex items-center justify-center">
          <img src={conactIcon} alt="contact" />
        </div>
        <div>
          <p className="text-gray-600 text-sm mb-1">Any time Call Us</p>
          <p className="text-gray-800 font-bold text-lg">01785 318 881</p>
        </div>
      </div>
    </div>
  );
}
