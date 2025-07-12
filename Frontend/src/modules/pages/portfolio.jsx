import React from "react";
import { WorkingProcess } from "../core/process/working-process";
import { TestimonialsSection } from "../core/testimonial/testimonial-section";
import { FaqSection } from "../core/faq/faq-section";
import { ContactSection } from "../core/contact/contact-section";
import { PageHeader } from "../core/page-header";
import { PortfolioSection } from "../core/portfolio/portfolio-section";
import { faqData } from "../core/faq/faqData";
import flatRoofing from "../../assets/flat-roofing.webp";
import faq1 from "../../assets/faq-1.webp";

export function Portfolio() {
  return (
    <>
      <PageHeader title="Portfolio" />
      <PortfolioSection
        title="Portfolio"
        subtitle="Our Featured Projects"
        buttonText="LOAD MORE"
      />
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
