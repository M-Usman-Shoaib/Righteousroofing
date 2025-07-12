import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { ProcessStep } from "./process-step";
import iconInspection from "../../../assets/inspection.svg";
import iconQuotation from "../../../assets/quotation.svg";
import iconService from "../../../assets/services.svg";
import iconFollowUp from "../../../assets/follow-up.svg";
import { useNavigate } from "react-router-dom";

const steps = [
  {
    step: "01",
    icon: iconInspection,
    title: "Consultation",
    description: "Discuss your requirements with us for the best solution.",
  },
  {
    step: "02",
    icon: iconQuotation,
    title: "Quotation",
    description: "Get a clear and customized quote tailored to your needs.",
    active: true,
  },
  {
    step: "03",
    icon: iconService,
    title: "Service",
    description: "Our team delivers high-quality, professional service on time.",
  },
  {
    step: "04",
    icon: iconFollowUp,
    title: "Follow-Up",
    description: "We ensure your satisfaction with timely follow-up and support.",
  },
];

export function WorkingProcess() {
  const navigate = useNavigate();
  return (
    <section className="py-20 bg-process-section">
      <div className="max-w-6xl w-full mx-auto text-center">
        <div className="flex items-center justify-center text-center gap-3">
          <div>
            <div className="w-7 h-0.5 bg-[#9B1915]"></div>
            <div className="w-10 h-0.5 bg-[#9B1915] mt-2"></div>
          </div>
          <span className="text-[#9B1915] font-medium text-sm tracking-wide uppercase">
            How it works
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-[#2f2933] mb-12 mt-5">
          Standard Working Process
        </h2>
        <div className="flex flex-wrap justify-center gap-13 relative z-10">
          {steps.map((step, index) => (
            <ProcessStep key={index} {...step} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <button 
            className="btn-zoom bg-[#9B1915] text-white px-6 py-3 rounded font-semibold flex items-center gap-2 hover:bg-[#950e0e] transition"
            onClick={() => navigate('/contact-us')}
          >
            <span className="btn-zoom-content">
              BOOK NOW    <FaArrowRight />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
