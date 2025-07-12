import { useState } from "react";
import { IoEye, IoArrowForward } from "react-icons/io5";
import { QueryForm } from "./query-form";
import { useNavigate } from "react-router-dom";

export function FaqSection({
  faqData = [],
  showImages = false,
  showContactForm = false,
  images = [],
  gridClass = "lg:grid-cols-2",
}) {
  const [openFaq, setOpenFaq] = useState(faqData[0]?.id || null);
  const navigate = useNavigate();

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="py-8 bg-[#F3F1F2]">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`grid gap-12 items-center ${gridClass}`}>
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div>
                  <div className="w-7 h-0.5 bg-[#9B1915]"></div>
                  <div className="w-10 h-0.5 bg-[#9B1915] mt-2"></div>
                </div>
                <span className="text-[#9B1915] font-medium text-sm tracking-wide uppercase">
                  FAQ's
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-tight text-center lg:text-left">
                Exceptional craftsmanship for your roof
              </h2>
            </div>

            <div className="space-y-4">
              {faqData.map((faq) => (
                <div key={faq.id} className="border-b border-gray-200 pb-4">
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between text-left py-2 hover:text-red-700 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-gray-800">
                      {faq.question}
                    </h3>
                    <IoEye
                      className={`w-5 h-5 transition-colors ${
                        openFaq === faq.id ? "text-red-700" : "text-gray-400"
                      }`}
                    />
                  </button>

                  {openFaq === faq.id && (
                    <div className="mt-3 pr-8">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <button
              className="btn-zoom bg-[#9B1915] hover:bg-red-800 text-white px-6 py-3 rounded-md font-semibold flex items-center gap-2 transition-colors  mx-auto lg:mx-0"
              onClick={() => navigate("/faq")}
            >
              <span className="btn-zoom-content">
                SEE ALL
                <IoArrowForward className="w-4 h-4" />
              </span>
            </button>
          </div>

          <div className="relative">
            {showImages && images.length > 0 && (
              <div className="flex overflow-hidden">
                {images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img.src}
                    alt={img.alt || ""}
                    className={`w-1/2 h-full ${img.class || ""}`}
                  />
                ))}
              </div>
            )}
            {showContactForm && <QueryForm heading="Ask a Question" />}
          </div>
        </div>
      </div>
    </div>
  );
}
