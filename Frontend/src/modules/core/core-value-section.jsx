import ourMission from "../../assets/our-mission.svg";
import ourVision from "../../assets/our-vision.svg";
import trustedServices from "../../assets/trusted-services.svg";

export function CoreValuesSection() {
  return (
    <div className="py-8 bg-white">
      <div className="max-w-6xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#F3F1F2] text-center p-6 shadow-sm">
          <div className="flex justify-center mb-4">
            <img
              src={ourMission}
              alt="ourMission"
              className="w-10 h-10 text-red-700"
            />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Our Mission
          </h3>
          <p className="text-sm text-gray-600">
            To deliver expert roofing solutions with honesty, quality, and customer-first service. We aim to protect and enhance every property we work on through dependable craftsmanship and transparent communication.

          </p>
        </div>

        <div className="bg-[#9B1915] text-center p-6 shadow-sm text-white">
          <div className="flex justify-center mb-4">
            <img
              src={ourVision}
              alt="ourVision"
              className="w-10 h-10 text-red-700"
            />
          </div>
          <h3 className="text-lg font-semibold mb-2">Our Vision</h3>
          <p className="text-sm">
            To be the most trusted roofing company in Staffordshire and surrounding areas, known for innovation, reliability, and long-lasting results in both residential and commercial roofing projects.
          </p>
        </div>

        <div className="bg-[#F3F1F2] text-center p-6 shadow-sm">
          <div className="flex justify-center mb-4">
            <img
              src={trustedServices}
              alt="trustedServices"
              className="w-10 h-10 text-red-700"
            />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Trusted Services
          </h3>
          <p className="text-sm text-gray-600">
            Righteous Roofing Ltd offers fully insured, professional roofing services—tailored to your needs. From new installations to emergency repairs, we ensure top-quality results that stand the test of time.

          </p>
        </div>
      </div>
    </div>
  );
}
