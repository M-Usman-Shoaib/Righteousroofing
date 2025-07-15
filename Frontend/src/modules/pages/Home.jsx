import React, { useEffect, useState } from "react";
import { HeroSection } from "../core/hero-section";
import { HeroSection2 } from "../core/hero-section2"; // <-- mobile
import { Booking } from "../core/booking/booking";
import { WhyChooseUs } from "../core/why-choose-us";
import { FaqSection } from "../core/faq/faq-section";
import { ContactSection } from "../core/contact/contact-section";
import { TestimonialsSection } from "../core/testimonial/testimonial-section";
import { PortfolioSection } from "../core/portfolio/portfolio-section";
import { ServicesSection } from "../core/services/services-section";
import { WorkingProcess } from "../core/process/working-process";
import { faqData } from "../core/faq/faqData";
import flatRoofing from "../../assets/flat-roofing.webp";
import faq1 from "../../assets/faq-1.webp";

export function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Initial check
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile(); // check on mount
    window.addEventListener("resize", checkMobile); // check on resize

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <>
      {isMobile ? <HeroSection2 /> : <HeroSection />}
      <WorkingProcess />
      <Booking />
      <WhyChooseUs />
      <ServicesSection />
      <PortfolioSection
        title="Portfolio"
        subtitle="Our Featured Projects"
      />
      <TestimonialsSection />
      <FaqSection
        faqData={faqData}
        showImages={true}
        images={[
          { src: faq1, alt: "FAQ 1" },
          { src: flatRoofing, alt: "Flat Roofing", class: "flex self-end" },
        ]}
      />
      <ContactSection />
    </>
  );
}
