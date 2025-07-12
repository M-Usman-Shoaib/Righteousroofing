import React from "react";

export function QueryForm({
  heading = "Book Roof solutions",
  bgColor = "#9B1915",
  headingColor,
}) {
  return (
    <div
      className="p-4 lg:p-12 text-white"
      style={{ backgroundColor: bgColor }}
    >
      <div className="space-y-6">
        <h2
          className="text-[24px] font-bold mb-8 text-center lg:text-left"
          style={{ color: headingColor }}
        >
          {heading}
        </h2>

        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-white text-gray-800 border-0 h-12 placeholder:text-gray-500 w-full p-4 rounded"
          />

          <input
            type="email"
            placeholder="Email address"
            className="bg-white text-gray-800 border-0 h-12 placeholder:text-gray-500 w-full p-4 rounded"
          />

          <input
            type="text"
            placeholder="Subject"
            className="bg-white text-gray-800 border-0 h-12 placeholder:text-gray-500 w-full p-4 rounded"
          />

          <textarea
            placeholder="Your Query"
            className="bg-white text-gray-800 border-0 h-35 placeholder:text-gray-500 w-full p-4 rounded"
          />

          <button
            type="submit"
            className="btn-zoom w-full bg-gray-800 hover:bg-gray-700 text-white font-bold py-5 px-6 rounded justify-center"
          >
            <span className="btn-zoom-content">SEND MESSAGE</span>
          </button>
        </form>
      </div>
    </div>
  );
}
