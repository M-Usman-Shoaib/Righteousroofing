import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { portfolioItems } from "./portfolio-data";
import { filterCategories } from "./filter-categories";
import { PortfolioCard } from "./portfolio-card";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";

export function PortfolioSection({ title, subtitle, buttonText }) {
  const [activeFilter, setActiveFilter] = useState("all");
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const filteredItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (prevRef.current && nextRef.current) {
        prevRef.current.classList.remove("swiper-button-disabled");
        nextRef.current.classList.remove("swiper-button-disabled");
      }
    }, 100);
    return () => clearTimeout(timeout);
  }, [activeFilter]);

  return (
    <div className="py-8 bg-white relative">
      <div className="max-w-6xl w-full mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center text-center gap-3">
            <div>
              <div className="w-7 h-0.5 bg-[#9B1915]"></div>
              <div className="w-10 h-0.5 bg-[#9B1915] mt-2"></div>
            </div>
            <span className="text-[#9B1915] font-medium text-sm tracking-wide uppercase">
              {title}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2f2933] mt-5">
            {subtitle}
          </h2>
          <div className="flex flex-wrap justify-center gap-2 mb-8 mt-10">
            {filterCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`btn-zoom cursor-pointer px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeFilter === category.id
                    ? "bg-[#9B1915] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <span className="btn-zoom-content">{category.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={24}
            slidesPerView={3}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            loop={filteredItems.length > 3}
            breakpoints={{
              1024: { slidesPerView: 3 },
              768: { slidesPerView: 2 },
              0: { slidesPerView: 1 },
            }}
          >
            {filteredItems.map((item) => (
              <SwiperSlide key={item.id}>
                <PortfolioCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            ref={prevRef}
            className="btn-zoom absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <span className="btn-zoom-content">
              <IoChevronBack className="w-5 h-5 text-gray-600" />
            </span>
          </button>
          <button
            ref={nextRef}
            className="btn-zoom absolute right-0 top-1/2 translate-x-4 -translate-y-1/2 z-10 w-12 h-12 bg-[#9B1915] rounded-full shadow-lg flex items-center justify-center hover:bg-red-800 transition-colors"
          >
            <span className="btn-zoom-content">
              <IoChevronForward className="w-5 h-5 text-white" />
            </span>
          </button>
        </div>

        {buttonText && (
          <div className="mt-10 flex justify-center">
            <button className="btn-zoom bg-[#9B1915] text-white px-6 py-3 rounded font-semibold flex items-center gap-2 hover:bg-[#950e0e] transition">
              <span className="btn-zoom-content">
                {buttonText} <FaArrowRight />
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
