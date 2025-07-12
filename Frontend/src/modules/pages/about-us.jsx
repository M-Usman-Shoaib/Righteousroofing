import React from "react";
import { WorkingProcess } from "../core/process/working-process";
import { TestimonialsSection } from "../core/testimonial/testimonial-section";
import { FaqSection } from "../core/faq/faq-section";
import { ContactSection } from "../core/contact/contact-section";
import { PageHeader } from "../core/page-header";
import { AboutSection } from "../core/about/about-section";
import { CoreValuesSection } from "../core/core-value-section";
import { CommercialBanner } from "../core/commercial-banner";
import { faqData } from "../core/faq/faqData";
import flatRoofing from "../../assets/flat-roofing.webp";
import faq1 from "../../assets/faq-1.webp";

export function AboutUs() {
  return (
    <>
      <PageHeader title="About Us" />
      <AboutSection />
      <CoreValuesSection />
      <CommercialBanner />
      <WorkingProcess />
      <TestimonialsSection />
      <FaqSection
        faqData={faqData}
        showImages={true}
        images={[
          { src: faq1, alt: "FAQ 1" },
          { src: flatRoofing, alt: "Flat Roofing", class: "flex self-end"  },
        ]}
      />
      <ContactSection />
    </>
  );
}
