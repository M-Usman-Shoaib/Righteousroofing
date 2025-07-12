import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import avatar from "../../../assets/avatar.svg";
import { TestimonialCard } from "./testimonial-card";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    id: 1,
    rating: 4,
    title: "It's Very Good Services",
    content:
      "Pellentesque in ipsum id porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit Amet dui.",
    author: {
      name: "Ronald Richards",
      position: "Founder CEO",
      avatar,
    },
  },
  {
    id: 2,
    rating: 5,
    title: "Excellent Roofing Work",
    content:
      "Outstanding service and professional team. They completed our roof repair quickly and efficiently. Highly recommended!",
    author: {
      name: "Sarah Johnson",
      position: "Homeowner",
      avatar,
    },
  },
  {
    id: 3,
    rating: 4,
    title: "Professional Team",
    content:
      "Great experience working with this roofing company. They were punctual, professional, and delivered quality work.",
    author: {
      name: "Mike Davis",
      position: "Property Manager",
      avatar,
    },
  },
  {
    id: 4,
    rating: 5,
    title: "Reliable and Trustworthy",
    content:
      "I was impressed by their attention to detail and commitment to quality. The team was friendly and reliable.",
    author: {
      name: "Emily Clark",
      position: "Business Owner",
      avatar,
    },
  },
  {
    id: 5,
    rating: 5,
    title: "Quick Response Time",
    content:
      "They responded to my inquiry quickly and scheduled the repair within days. The work was top-notch.",
    author: {
      name: "James Lee",
      position: "Landlord",
      avatar,
    },
  },
];

export function TestimonialsSection() {
  const [swiperReady, setSwiperReady] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    setSwiperReady(true);
    const timeout = setTimeout(() => {
      prevRef.current?.classList.remove("swiper-button-disabled");
      nextRef.current?.classList.remove("swiper-button-disabled");
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="py-8 white relative">
      <div className="max-w-6xl w-full mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3">
            <div>
              <div className="w-7 h-0.5 bg-[#9B1915]" />
              <div className="w-10 h-0.5 bg-[#9B1915] mt-2" />
            </div>
            <span className="text-[#9B1915] font-medium text-sm tracking-wide uppercase">
              TESTIMONIAL
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mt-5">
            What Clients Say About Us
          </h2>
        </div>

        <div className="relative mx-2">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={24}
            slidesPerView={3}
            loop={testimonials.length > 3}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            breakpoints={{
              1024: { slidesPerView: 3 },
              768: { slidesPerView: 2 },
              0: { slidesPerView: 1 },
            }}
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id}>
                <TestimonialCard testimonial={t} />
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            ref={prevRef}
            className="btn-zoom absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 w-12 h-12 bg-[#9B1915] rounded-full shadow-lg flex items-center justify-center hover:bg-red-800 transition-colors"
          >
            <span className="btn-zoom-content">
              <IoChevronBack className="w-5 h-5 text-white" />
            </span>
          </button>
          <button
            ref={nextRef}
            className="btn-zoom absolute right-0 top-1/2 translate-x-6 -translate-y-1/2 z-10 w-12 h-12 bg-[#9B1915] rounded-full shadow-lg flex items-center justify-center hover:bg-red-800 transition-colors"
          >
            <span className="btn-zoom-content">
              <IoChevronForward className="w-5 h-5 text-white" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
