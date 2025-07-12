import React from "react";
import { useSwiper } from "swiper/react";

export default function SlidePrevButton({ children, className }) {
  const swiper = useSwiper();
  return (
    <button className={className} onClick={() => swiper.slidePrev()}>
      {children}
    </button>
  );
} 