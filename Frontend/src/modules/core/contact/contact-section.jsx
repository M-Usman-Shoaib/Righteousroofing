import { ContactInfoCard } from "./contact-info-card";
import { BookingForm } from "../booking/booking-form";
import location from "../../../assets/location.svg";
import email from "../../../assets/email.svg";
import qualityRoof from "../../../assets/contact-roof-repair.svg";
import contactIcon from "../../../assets/contact-icon.svg";
import map from "../../../assets/map.webp";

export function ContactSection() {
  return (
    <div className="my-10 bg-gray-50">
      <div className="mx-auto px-3">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="relative">
            <div className="overflow-hidden shadow-lg h-full lg:min-h-[550px]">
              <img
                src={map}
                alt="Map"
                className="w-100px h-full object-cover"
              />
            </div>

            {/* <div className="hidden lg:block absolute top-25 left-130 transform -translate-x-1/2 -translate-y-1/2 w-[350px] max-w-sm z-10 h-[150px]">
              <div className="bg-white shadow-xl rounded-lg">
                <BookingForm />
              </div>
            </div> */}

            <div className="mt-6 lg:hidden">
              <BookingForm />
            </div>
          </div>

          <div className="space-y-8 lg:mt-20 mt-[50rem]">
            <div className="space-y-4 lg:text-start text-center">
              <div className="flex gap-3 items-center justify-center lg:justify-start">
                <div>
                  <div className="w-7 h-0.5 bg-[#9B1915]"></div>
                  <div className="w-10 h-0.5 bg-[#9B1915] mt-2"></div>
                </div>
                <span className="text-[#9B1915] font-medium text-sm tracking-wide uppercase">
                  Contact Us
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
                Get in Touch with Righteous Roofing Ltd
              </h2>
              <p className="text-gray-600 leading-relaxed">

                Have a roofing issue or need a quote? Our friendly team is ready to help with expert advice and fast, reliable service.

              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ContactInfoCard
                icon={
                  <img
                    src={contactIcon}
                    alt="contactIcon"
                    className="w-6 h-8 text-white"
                  />
                }
                title="Call Us"
                content="01785 318 881"
              />
              <ContactInfoCard
                icon={
                  <img src={email} alt="Email" className="w-6 h-8 text-white" />
                }
                title="Email Us"
                content="info@righteousroofingltd.co.uk"
              />
              <ContactInfoCard
                icon={
                  <img
                    src={location}
                    alt="Location"
                    className="w-6 h-8 text-white"
                  />
                }
                title="Address"
                content="Mesa, Wolverhampton"
              />
              <ContactInfoCard
                icon={
                  <img
                    src={qualityRoof}
                    alt="Quality Roof"
                    className="w-6 h-8 text-white"
                  />
                }
                title="Quality Roof"
                content="Repair"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
