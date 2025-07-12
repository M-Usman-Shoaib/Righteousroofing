import React from "react";
import { PageHeader } from "../core/page-header";
import { WhyChooseUs } from "../core/why-choose-us";
import { ContactSection } from "../core/contact/contact-section";
import { TestimonialsSection } from "../core/testimonial/testimonial-section";
import { ServicesSection } from "../core/services/services-section";

export function Service() {
  return (
    <>
      <PageHeader title="Services" />
      <ServicesSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
