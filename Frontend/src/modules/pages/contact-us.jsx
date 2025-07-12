import React from "react";
import { ContactDetailsSection } from "../core/contact/contact-details-section";
import { PageHeader } from "../core/page-header";

export function Contact() {
  return (
    <>
      <PageHeader title="Contact Us" />
      <ContactDetailsSection />
      {/* add map here */}
    </>
  );
}
