import React from "react";
import { useSwiper } from "swiper/react";

export default function SlideNextButton({ children, className }) {
  const swiper = useSwiper();
  return (
    <button className={className} onClick={() => swiper.slideNext()}>
      {children}
    </button>
  );
} 