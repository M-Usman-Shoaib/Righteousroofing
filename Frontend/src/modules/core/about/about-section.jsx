import { FaArrowRight } from "react-icons/fa";
import roofRepair from "../../../assets/roof-repair.webp";
import roofReplacement from "../../../assets/roof-replacement.webp";
import flatRoofing from "../../../assets/flat-roofing.webp";
import award from "../../../assets/award.svg";
import { useNavigate } from "react-router-dom";

export function AboutSection() {
  const navigate = useNavigate();
  return (
    <div className="py-8 bg-white">
      <div className="max-w-6xl w-full mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative grid grid-cols-2 gap-4">
          <div className="row-span-2">
            <img
              src={roofRepair}
              alt="Main worker"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
          <div>
            <img
              src={roofReplacement}
              alt="Secondary worker"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
          <div>
            <img
              src={flatRoofing}
              alt="Worker close-up"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-2 text-center lg:text-left">
            <div className="gap-3">
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div>
                  <div className="w-7 h-0.5 bg-[#9B1915]"></div>
                  <div className="w-10 h-0.5 bg-[#9B1915] mt-2"></div>
                </div>
                <span className="text-[#9B1915] font-medium text-sm tracking-wide uppercase">
                  Services
                </span>
              </div>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
              Roofing is our heritage, <br /> Quality is our tradition
            </h2>
            <p className="text-gray-600">
              With over 20 years in the roofing and property maintenance industry, Righteous Roofing Ltd has grown through dedication, integrity, and craftsmanship. Our fully accredited team is trained to industry standards, delivering tailored, long-lasting solutions for domestic and commercial clients. Licensed, insured, and health-and-safety-compliant, we take pride in every roof laid and every property maintained.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <img src={award} alt="Badge" className="w-20 h-20" />
            <div>
              <h3 className="text-3xl font-bold text-gray-800">25+</h3>
              <p className="font-semibold text-gray-700 leading-tight">
                Years Experience
                <br />
                Company
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Ruffers construct and fix roofs using hand tools and other
                equipment. They ensure roofs are stable and waterproof.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <button
              className="btn-zoom mt-4 inline-flex items-center gap-2 bg-[#9B1915] hover:bg-red-800 text-white px-6 py-3 rounded-md font-semibold transition mx-auto lg:mx-0"
              onClick={() => navigate('/contact-us')}
            >
              <span className="btn-zoom-content">
                BOOK AN APPOINTMENT
                <FaArrowRight className="w-4 h-4" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
