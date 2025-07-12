import React from "react";

export function ProcessStep({ step, icon, title, description, active = false }) {
  return (
    <div className="relative flex flex-col items-center text-center">
      <div
        className={`w-60 h-60 flex flex-col items-center justify-center rounded-full shadow-lg px-4 py-6 transition-all duration-300 ${
          active ? "bg-[#2f2933] text-white" : "bg-white text-[#2f2933]"
        }`}
      >
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#9B1915] text-white w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold">
          {step}
        </div>
        <img src={icon} alt={title} className="w-10 h-10 mb-2" />
        <h4 className="font-bold text-lg">{title}</h4>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}
