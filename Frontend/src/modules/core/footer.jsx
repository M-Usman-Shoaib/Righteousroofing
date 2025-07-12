import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPaperPlane,
} from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import { BookAppointment } from "./book-appointment";
import logo from "../../assets/logo-color.webp";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <div className="w-full relative mt-25">
      <div className="absolute left-1/2 -top-15 transform -translate-x-1/2 z-20 w-11/12 max-w-6xl md:block hidden">
        <BookAppointment />
      </div>
      <div className="block md:hidden">
        <BookAppointment />
      </div>
      <footer className="bg-white pt-25 bg-process-section">
        <div className="py-12">
          <div className="w-full max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div>
                    <img src={logo} alt="Righteous" className="w-[180px]" />
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We proudly serve customers in:
                  Stoke-on-Trent, Stafford, Cannock, Wolverhampton, Nantwich, Tamworth, and all nearby areas.
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-[#9B1915] transition-colors"
                  >
                    <FaFacebookF className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-[#9B1915] transition-colors"
                  >
                    <FaTwitter className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-[#9B1915] transition-colors"
                  >
                    <FaLinkedinIn className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-[#9B1915] transition-colors"
                  >
                    <FaInstagram className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-gray-800 text-lg mb-4">
                  Quick Links
                </h4>
                <ul className="space-y-3">
                  <li>
                    <Link
                      to="/"
                      className="text-gray-600 hover:text-red-700 transition-colors flex items-center gap-2"
                    >
                      <span className="text-red-700">›</span>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about-us"
                      className="text-gray-600 hover:text-red-700 transition-colors flex items-center gap-2"
                    >
                      <span className="text-red-700">›</span>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/service"
                      className="text-gray-600 hover:text-red-700 transition-colors flex items-center gap-2"
                    >
                      <span className="text-red-700">›</span>
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact-us"
                      className="text-gray-600 hover:text-red-700 transition-colors flex items-center gap-2"
                    >
                      <span className="text-red-700">›</span>
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-gray-800 text-lg mb-4">
                  Roofing Services
                </h4>
                <ul className="space-y-3">
                  <li>
                    <Link
                      to="/service/pitched-roofs"
                      className="text-gray-600 hover:text-red-700 transition-colors flex items-center gap-2"
                    >
                      <span className="text-red-700">›</span>
                      Pitched Roofs
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/service/flat-roofs"
                      className="text-gray-600 hover:text-red-700 transition-colors flex items-center gap-2"
                    >
                      <span className="text-red-700">›</span>
                      Flat Roofs
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/service/skylights-velux"
                      className="text-gray-600 hover:text-red-700 transition-colors flex items-center gap-2"
                    >
                      <span className="text-red-700">›</span>
                      Skylights / Velux
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/service/drone-surveys"
                      className="text-gray-600 hover:text-red-700 transition-colors flex items-center gap-2"
                    >
                      <span className="text-red-700">›</span>
                      Drone Surveys
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-gray-800 text-lg mb-4">
                  Subscribe Now
                </h4>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Subscribe our newsletter to get our latest Update & news
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="bg-[#9B1915] flex-1 px-4 py-3 placeholder-white border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-transparent"
                  />
                  <button className="bg-white hover:bg-red-800 hover:text-white text-[#9B1915] px-4 py-3 rounded-r-md transition-colors">
                    <FaPaperPlane className="w-4 h-4 " />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#9B1915] text-white py-4">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm">© 2025 All Rights Reserved Righteous</p>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="btn-zoom w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors"
            >
              <span className="btn-zoom-content">
                <MdOutlineKeyboardDoubleArrowUp className="w-6 h-6 text-[#9B1915]" />
              </span>
            </button>

            <div className="flex items-center gap-4 text-sm">
              <Link
                to="/privacy-policy"
                className="hover:text-gray-200 transition-colors"
              >
                Privacy Policy
              </Link>
              <span>|</span>
              <Link
                to="/terms"
                className="hover:text-gray-200 transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
