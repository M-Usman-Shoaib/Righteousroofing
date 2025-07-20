import React from "react";
import { BookingForm } from "../core/booking/booking-form";
import { FaqSection } from "../core/faq/faq-section";
import { ServiceCard } from "../core/service-card";
import roofRepairIcon from "../../assets/icon-box-3.svg";
import roofReplacementIcon from "../../assets/roof-replacement.svg";
import roofInstallationIcon from "../../assets/roof-installation.svg";
import heroSectionBg from "../../assets/heroSectionBg.webp";
import manWorking from "../../assets/manWorking.webp";
import { PageHeader } from "../core/page-header";

export function SingleService({ serviceData }) {
// Function to generate URL for sidebar services
    const generateServiceUrl = (serviceName) => {
      return `/service/${serviceName
        .toLowerCase()
        .replace(/[\/&\s]+/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "")}`;
    };

    return (
      <>
        <PageHeader title="Services" secondTitle={serviceData.activeService} />
        <div className="white min-h-screen py-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 px-4">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8 ">
              <img
                src={serviceData.heroImage}
                alt={serviceData.heroImageAlt}
                className="w-full h-80 object-cover rounded-lg"
              />
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-6 text-center lg:text-left">
                {serviceData.mainTitle}
              </h1>
              <p className="text-gray-600 text-center lg:text-left">{serviceData.description}</p>
              <h2 className="text-2xl font-bold text-gray-800 mt-8 text-center lg:text-left">
                {serviceData.extraTitle}
              </h2>
              <p className="text-gray-600 mb-6 text-center lg:text-left">{serviceData.extraDescription}</p> 
              <div className="grid md:grid-cols-3 gap-6">
                {serviceData.serviceCards.map((card, index) => (
                  <ServiceCard
                    key={index}
                    title={card.title}
                    icon={
                      <img
                        src={card.icon}
                        alt={card.title}
                        className="w-16 h-16"
                      />
                    }
                    description={card.description}
                    isDark={card.isDark}
                  />
                ))}
              </div>
              <div className="mt-10">
                <FaqSection faqData={serviceData.faqData} gridClass="px-5" />
              </div>
            </div>
            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-white shadow p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Roofing Services
                </h3>
                <ul className="space-y-2">
                  {serviceData.sidebarServices.map((service, index) => (
                    <li
                      key={index}
                      className={`rounded px-4 py-2 flex justify-between items-center cursor-pointer transition-colors ${service === serviceData.activeService
                          ? "bg-[#9B1915] text-white font-semibold"
                          : "hover:bg-gray-100"
                        }`}
                    >
                      <a
                        href={generateServiceUrl(service)}
                        className="flex justify-between items-center w-full"
                      >
                        {service} <span>&rarr;</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col items-center">
                <div className="relative w-full h-100 overflow-hidden mb-4">
                  <img
                    src={manWorking}
                    alt="Consultation"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
                  <div className="absolute bottom-0 left-0 right-0 bg-[#9B1915] text-white p-4 h-30">
                    <div className="flex items-center justify-center mb-2">
                      <span className="inline-block bg-white text-[#9B1915] rounded-full p-2 mr-2">
                        &#128222;
                      </span>
                      <span className="font-bold">Need Consultation</span>
                    </div>
                    <div className="font-bold text-lg text-center">
                      07883 227 785
                    </div>
                    <div className="text-sm text-center">info@righteousroofingltd.co.uk</div>
                  </div>
                </div>
                <div className="w-full mt-4">
                  <BookingForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
