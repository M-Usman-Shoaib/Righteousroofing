import React from "react";
import manWorking from "../../assets/manWorking.webp";
import quality from "../../assets/service-1.svg";
import speed from "../../assets/service-2.svg";
import warranty from "../../assets/service-3.svg";
import { Counter } from "./counter";

export function WhyChooseUs() {
  return (
    <div className="w-full relative my-15 ">
      <div className="absolute left-1/2 top-0 transform -translate-x-1/2 z-20 max-w-5xl w-full px-6 mx-auto lg:block hidden">
        <Counter />
      </div>

      <div className="block lg:hidden">
        <Counter />
      </div>
      <div className="max-w-6xd mx-auto px-0">
        <div className="relative z-10 pt-24 w-full">
          <div className="flex flex-col md:flex-row w-full min-h-[400px] lg:min-h-[600px]">
            <div className="bg-gray-700 text-white flex-1 md:basis-[60%] p-8 lg:p-12 flex flex-col justify-center">
              <div className="space-y-4">
                <div className="flex items-center gap-3 justify-center lg:justify-start">
                  <div>
                    <div className="w-7 h-0.5 bg-white"></div>
                    <div className="w-10 h-0.5 bg-white mt-2"></div>
                  </div>
                  <span className="text-white font-medium text-sm tracking-wide uppercase">
                    WHY CHOOSE US
                  </span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold leading-tight text-center lg:text-left">
                  Quality roofing for every Structure.
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 mt-8">
                <div className="bg-white text-gray-800 p-6">
                  <div className="w-12 h-12 flex items-center justify-center mb-4">
                    <img src={quality} alt="quality" className="" />
                  </div>
                  <h3 className="font-bold text-lg mb-3">Quality</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    We use premium materials and skilled professionals to ensure
                    long-lasting roofing that meets the industry standards.
                  </p>
                </div>

                <div className="bg-[#9B1915] text-white p-6">
                  <div className="w-12 h-12 bg-opacity-20 flex items-center justify-center mb-4">
                    <img src={speed} alt="speed" className="" />
                  </div>
                  <h3 className="font-bold text-lg mb-3">Speed</h3>
                  <p className="text-sm text-white text-opacity-90 leading-relaxed">
                    Our expert teams ensure timely project
                    completion without compromising on quality or safety.
                  </p>
                </div>

                <div className="bg-white text-gray-800 p-6">
                  <div className="w-12 h-12 flex items-center justify-center mb-4">
                    <img src={warranty} alt="warranty" className="" />
                  </div>
                  <h3 className="font-bold text-lg mb-3">Warranty</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    We stand behind our work with solid warranties that give you
                    long-term protection for your investment.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-1 md:basis-[40%] relative min-h-[400px] lg:min-h-[600px]">
              <img
                src={manWorking}
                alt="Construction worker"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
