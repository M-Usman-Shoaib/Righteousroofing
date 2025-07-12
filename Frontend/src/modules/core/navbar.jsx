import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaArrowRight,
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import logo from "../../assets/white-logo.svg";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [roofingOpen, setRoofingOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="w-full shadow relative z-50">
      {/* Mobile Header: Logo + Hamburger */}
      <div className="flex items-center justify-between px-4 py-4 bg-[#9B1915] lg:hidden">
        <Link to="/">
          <div className="w-[160px]">

            <img src={logo} alt="logo" className="h-10 object-contain" />

          </div>
        </Link>
        <button onClick={() => setMenuOpen(true)} aria-label="Open menu">
          <FaBars className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex">
        {/* Left Column: Logo */}
        <Link to="/">
          <div className="bg-[#9B1915] text-white flex items-center justify-center px-6 py-6 w-[200px]">
            <img src={logo} alt="logo" />
          </div>
        </Link>

        {/* Right Column */}
        <div className="flex-1 flex flex-col">
          {/* Top Row: Contact + Social */}
          <div className="bg-[#2a232c] text-white text-sm px-4 py-2 flex justify-between items-center">
            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <Link to="/contact-us">
                  <FaPhoneAlt />
                </Link>
                <span><a href="tel:01785 318 881">01785 318 881</a></span>
              </div>
              <div className="flex items-center gap-2">

                <FaEnvelope />

                <span><a href="mailto:info@righteousroofingltd.co.uk">info@righteousroofingltd.co.uk</a></span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">

                <FaFacebookF className="cursor-pointer" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">

                <FaTwitter className="cursor-pointer" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">

                <FaLinkedinIn className="cursor-pointer" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="cursor-pointer" />
              </a>
              <button
                className="ml-4 bg-white text-[#9B1915] px-3 py-1 rounded text-sm font-semibold"
                onClick={() => navigate("/contact-us")}
              >
                GET HELP
              </button>
            </div>
          </div>

          {/* Bottom Row: Nav + Call Button */}
          <div className="bg-white px-4 py-1 flex items-center justify-center">
            <ul className="flex flex-wrap lg:flex-nowrap gap-4 xl:gap-5 text-sm font-semibold text-[#2a232c]">
              <li className="hover:text-[#9B1915] cursor-pointer">
                <Link to="/">HOME</Link>
              </li>
              <li className="hover:text-[#9B1915] cursor-pointer">
                <Link to="/about-us">ABOUT</Link>
              </li>
              <li className="relative group">
                <span className="cursor-pointer hover:text-[#9B1915] flex items-center justify-center xl:gap-x-1">
                  <Link to="/service">ROOFING SERVICES</Link>{" "}
                  <FaChevronDown className="text-xs" />
                </span>
                <ul className="absolute left-0 top-3 mt-1 hidden group-hover:block bg-white shadow-md rounded text-sm py-2 z-50 min-w-[200px]">
                  <li className="px-4 py-2 hover:bg-gray-100 hover:text-[#9B1915] cursor-pointer">
                    <Link to="/service/pitched-roofs">Pitched Roofs</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 hover:text-[#9B1915] cursor-pointer">
                    <Link to="/service/flat-roofs">Flat Roofs</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 hover:text-[#9B1915] cursor-pointer">
                    <Link to="/service/skylights-velux">Skylights / Velux</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 hover:text-[#9B1915] cursor-pointer">
                    <Link to="/service/drone-surveys">Drone Surveys</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 hover:text-[#9B1915] cursor-pointer">
                    <Link to="/service/fascias-soffits">Fascias & Soffits</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 hover:text-[#9B1915] cursor-pointer">
                    <Link to="/service/chimneys">Chimneys</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 hover:text-[#9B1915] cursor-pointer">
                    <Link to="/service/roof-insulation">Roof Insulation</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 hover:text-[#9B1915] cursor-pointer">
                    <Link to="/service/guttering">Guttering</Link>
                  </li>
                </ul>
              </li>
              <li className="hover:text-[#9B1915] cursor-pointer">
                <Link to="/service/home-maintenance">HOME MAINTENANCE</Link>
              </li>
              <li className="hover:text-[#9B1915] cursor-pointer">
                <Link to="/service/drone-surveys">DRONE SURVEYS</Link>
              </li>
              <li className="hover:text-[#9B1915] cursor-pointer">
                <Link to="/service/guttering">GUTTERS</Link>
              </li>
              <li className="hover:text-[#9B1915] cursor-pointer">
                <Link to="/portfolio">PORTFOLIO</Link>
              </li>
              <li className="hover:text-[#9B1915] cursor-pointer">
                <Link to="/contact-us">CONTACT US</Link>
              </li>
            </ul>

            <button className="bg-[#9B1915] text-white px-5 py-2 ms-5 rounded flex items-center gap-2 font-semibold" onClick={() => navigate("/contact-us")}>
              CALL US: 01785 318 881<FaArrowRight />
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Fullscreen Menu (same as before) */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center text-center px-4">
          <button
            className="absolute top-4 right-4"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <FaTimes className="w-6 h-6 text-[#9f1313]" />
          </button>

          <ul className="flex flex-col gap-6 text-lg font-semibold text-[#2a232c] w-full max-w-sm ">
            <li className="text-[#9B1915] cursor-pointer">
              <Link to="/" onClick={() => setMenuOpen(false)}>
                HOME
              </Link>
            </li>
            <li className="cursor-pointer hover:text-[#9B1915]">
              <Link to="/about-us" onClick={() => setMenuOpen(false)}>
                ABOUT
              </Link>
            </li>

            {/* Collapsible Dropdown */}
            <li className="cursor-pointer">
              <div
                onClick={() => setRoofingOpen(!roofingOpen)}
                className="flex justify-center items-center gap-x-1"
              >
                <span>ROOFING SERVICES</span>
                <FaChevronDown
                  className={`transition-transform duration-200 ${roofingOpen ? "rotate-180" : ""
                    }`}
                />
              </div>
              {roofingOpen && (
                <ul className="mt-2 pl-4 text-base flex flex-col gap-2 text-center font-normal">
                  <li className="hover:text-[#9B1915]">
                    <Link
                      to="/service/pitched-roofs"
                      onClick={() => setMenuOpen(false)}
                    >
                      Pitched Roofs
                    </Link>
                  </li>
                  <li className="hover:text-[#9B1915]">
                    <Link
                      to="/service/flat-roofs"
                      onClick={() => setMenuOpen(false)}
                    >
                      Flat Roofs
                    </Link>
                  </li>
                  <li className="hover:text-[#9B1915]">
                    <Link
                      to="/service/skylights-velux"
                      onClick={() => setMenuOpen(false)}
                    >
                      Skylights / Velux
                    </Link>
                  </li>
                  <li className="hover:text-[#9B1915]">
                    <Link
                      to="/service/drone-surveys"
                      onClick={() => setMenuOpen(false)}
                    >
                      Drone Surveys
                    </Link>
                  </li>
                  <li className="hover:text-[#9B1915]">
                    <Link
                      to="/service/fascias-soffits"
                      onClick={() => setMenuOpen(false)}
                    >
                      Fascias & Soffits
                    </Link>
                  </li>
                  <li className="hover:text-[#9B1915]">
                    <Link
                      to="/service/chimneys"
                      onClick={() => setMenuOpen(false)}
                    >
                      Chimneys
                    </Link>
                  </li>
                  <li className="hover:text-[#9B1915]">
                    <Link
                      to="/service/roof-insulation"
                      onClick={() => setMenuOpen(false)}
                    >
                      Roof Insulation
                    </Link>
                  </li>
                  <li className="hover:text-[#9B1915]">
                    <Link
                      to="/service/guttering"
                      onClick={() => setMenuOpen(false)}
                    >
                      Guttering
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li className="cursor-pointer hover:text-[#9B1915]">
              <Link
                to="/service/home-maintenance"
                onClick={() => setMenuOpen(false)}
              >
                HOME MAINTENANCE
              </Link>
            </li>
            <li className="cursor-pointer hover:text-[#9B1915]">
              <Link
                to="/service/drone-surveys"
                onClick={() => setMenuOpen(false)}
              >
                DRONE SURVEYS
              </Link>
            </li>
            <li className="cursor-pointer hover:text-[#9B1915]">
              <Link to="/service/guttering" onClick={() => setMenuOpen(false)}>
                GUTTERS
              </Link>
            </li>
            <li className="cursor-pointer hover:text-[#9B1915]">
              <Link to="/portfolio" onClick={() => setMenuOpen(false)}>
                PORTFOLIO
              </Link>
            </li>
            <li className="cursor-pointer hover:text-[#9B1915]">
              <Link to="/contact-us" onClick={() => setMenuOpen(false)}>
                CONTACT US
              </Link>
            </li>
              <li>
                <button className="mt-4 bg-[#9B1915] text-white px-5 py-2 rounded flex items-center mx-auto gap-2 font-semibold">
                  CALL US: 1234567<FaArrowRight />
                </button>
              </li>
          </ul>
        </div>
      )}
    </div>
  );
}
