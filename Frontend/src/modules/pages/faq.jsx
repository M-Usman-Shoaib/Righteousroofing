import React from "react";
import { TestimonialsSection } from "../core/testimonial/testimonial-section";
import { FaqSection } from "../core/faq/faq-section";
import { ContactSection } from "../core/contact/contact-section";
import { PageHeader } from "../core/page-header";
import { faqData } from "../core/faq/faqData";

export function FAQ() {
  return (
    <>
      <PageHeader title="Frequently Asked Questions" />
      <FaqSection faqData={faqData} showContactForm={true} />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
