import React, { lazy, useRef, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import iconBox1 from "../../assets/icon-box-1.svg";
import iconBox2 from "../../assets/icon-box-2.svg";
import iconBox3 from "../../assets/icon-box-3.svg";
import chimneyRepair from "../../assets/home-slider1.webp";
import flatRoofing from "../../assets/home-slider2.webp";
import heroSectionBG from "../../assets/home-slider3.webp";
import { ServiceCard } from "./service-card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useNavigate } from "react-router-dom";

export function HeroSection2() {
  const cardData = [
    {
      title: "Roof Repair",
      icon: <img src={iconBox1} alt="Roof Repair" />,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor",
      isDark: false,
    },
    {
      title: "Maintenance",
      icon: <img src={iconBox2} alt="Maintenance" />,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor",
      isDark: false,
    },
    {
      title: "Emergency",
      icon: <img src={iconBox3} alt="Emergency" />,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor",
      isDark: false,
    },
    {
      title: "24/7 Team Support",
      icon: <img src={iconBox1} alt="Support" />,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor",
      isDark: false,
    },
  ];

  const images = [chimneyRepair, flatRoofing, heroSectionBG];
  const headings = [
    { label: "Trusted Roofing Experts", link: "/service" },
    { label: "Protect Your Home with", link: "/service/drone-surveys" },
    { label: "Cutting-Edge Drone", link: "/service/skylights-velux" },
  ];
  const head = [
    { label: "Across the UK",link: "/service"},
    { label: "a Weatherproof Roof",link:"/service/drone-surveys"},
    { label: "Inspections", link: "/service/skylights-velux"},
  ]
  const subHeadings = [
    { label: "From minor repairs to full roof replacements" },
    { label: "Built to withstand the British weather" },
    { label: "Accurate, and hassle-free roof assessments" }
  ];
  const sub =[
    {label: "quality craftsmanship you can rely on."},
    {label: "durable, secure, and guaranteed."},
    {label: "no ladders needed."},
  ]
const buttonLinks = [
  "/service",
  "/service/drone-surveys",
  "/service/skylights-velux"
];
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const navigate = useNavigate();

  return (
    <>
      <div className="relative w-full h-[90vh]">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          speed={1500}
          autoplay={{ delay: 40000, disableOnInteraction: false }}
          className="w-full h-full"
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => {
            setTimeout(() => {
              setActiveIndex(swiper.realIndex);
            }, 500);
          }}
        >

          {images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <section
                className="relative w-full h-[90vh] text-white hero-section-bg"
                style={{ "--hero-bg": `url(${img})`, backgroundImage: `url(${img})`, backgroundSize: "cover", backgroundPosition: "center" }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="max-w-6xl w-full mx-auto px-6">
                    <div className="flex flex-col md:flex-col lg:flex-row items-center justify-center lg:justify-between gap-6 h-full w-full text-center">
                      {/* Removed arrows from here */}

                      <div className="text-center lg:text-left ps-0 lg:ps-10 flex-1 mx-auto fade-in-up">
                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl inline-block">
                          {headings[activeIndex].link ? (
                            <h1
                              className="text-4xl md:text-5xl font-bold leading-tight mt-2 cursor-pointer"
                            // onClick={() => navigate(headings[activeIndex].link)}
                            >
                              {headings[idx].label}
                            </h1>
                          ) : (
                            <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-2 cursor-pointer">
                              {headings[idx].label}
                            </h1>
                          )}
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl inline-block">
                          {head[activeIndex].link ? (
                            <h1
                              className="text-4xl md:text-5xl font-bold leading-tight mt-2 cursor-pointer"
                            // onClick={() => navigate(headings[activeIndex].link)}
                            >
                              {head[idx].label}
                            </h1>
                          ) : (
                            <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-2 cursor-pointer">
                              {head[idx].label}
                            </h1>
                          )}
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl mt-4 inline-block">
                          {subHeadings[activeIndex].link ? (
                            <h1
                              className="text-2xl md:text-3xl font-bold leading-tight mt-2 cursor-pointer"
                            // onClick={() => navigate(subHeadings[activeIndex].link)}
                            >
                              {subHeadings[idx].label}
                            </h1>
                          ) : (
                            <h1 className="text-2xl md:text-3xl font-bold leading-tight mt-2 cursor-pointer">
                              {subHeadings[idx].label}
                              
                            </h1>
                          )}
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl mt-3 inline-block">
                          {sub[activeIndex].link ? (
                            <h1
                              className="text-2xl md:text-3xl font-bold leading-tight mt-2 cursor-pointer"
                            // onClick={() => navigate(subHeadings[activeIndex].link)}
                            >
                              {sub[idx].label}
                            </h1>
                          ) : (
                            <h1 className="text-2xl md:text-3xl font-bold leading-tight mt-2 cursor-pointer">
                              {sub[idx].label}
                              
                            </h1>
                          )}
                        </div>
                        <button
                          className="cursor-pointer btn-zoom group mt-6 px-6 py-3 bg-[#9f1313] text-white font-semibold rounded flex items-center gap-2 mx-auto lg:mx-0"
                          onClick={() => navigate(buttonLinks[idx])}
                        >
                          <span className="btn-zoom-content">
                            CALL US <FaArrowRight />
                          </span>
                        </button>
                      </div>

                      {/* Mobile arrows (can be moved if needed) */}
                      <div className="lg:hidden flex flex-row justify-center items-center gap-3 mt-10">
                        <button
                          onClick={() => swiperRef.current?.slidePrev()}
                          className="btn-zoom w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#9f1313]"
                        >
                          <FaArrowLeft />
                        </button>
                        <button
                          onClick={() => swiperRef.current?.slideNext()}
                          className="btn-zoom w-10 h-10 rounded-full bg-[#9f1313] flex items-center justify-center text-white"
                        >
                          <FaArrowRight />
                        </button>
                      </div>

                    </div>
                  </div>
                </div>
              </section>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ✅ Fixed Arrows for Desktop at Bottom-Right */}
        <div className="hidden lg:flex gap-3 absolute bottom-10 right-10 z-20">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="btn-zoom w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#9f1313]"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="btn-zoom w-10 h-10 rounded-full bg-[#9f1313] flex items-center justify-center text-white"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </>
  );
}
