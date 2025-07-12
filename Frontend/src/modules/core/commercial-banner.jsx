import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import roofReplacement from "../../assets/roof-replacement.webp";
export function CommercialBanner() {
  const navigate = useNavigate();
  return (
    <section className="relative">
      <div className="relative h-[400px] md:h-[500px] bg-black/60">
        <img
          src={roofReplacement}
          alt="Roof Worker"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <span className="uppercase text-sm tracking-widest text-white/80 mb-2">
            Offers Roof Leak & Roof Repair Services
          </span>
          <h1 className="text-3xl md:text-5xl font-bold max-w-3xl leading-snug">
            Commercial roofing solutions for your business
          </h1>
          <button 
            className="btn-zoom mt-6 bg-[#9B1915] hover:bg-red-800 text-white px-6 py-3 rounded-md font-semibold flex items-center gap-2 transition"
            onClick={() => navigate('/contact-us')}
          >
            <span className="btn-zoom-content">
              Get a Quotation
              <FaArrowRight className="w-4 h-4" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

