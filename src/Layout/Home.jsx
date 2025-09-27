import React from "react";
import { Outlet } from "react-router";
import Banner from "../assets/Banner.png";
import Logo from "../assets/Logo.png";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
const Home = () => {
  return (
    <div>
      <header className="w-full relative">
        {/* Banner + Content */}
        <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] overflow-hidden">
          <img
            src={Banner}
            className="absolute inset-0 w-full h-full object-cover"
            alt="Firecracker Banner"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center drop-shadow-lg z-10 p-4">
            {/* Logo + Title */}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mb-3">
              <img
                src={Logo}
                className="w-16 h-16 sm:w-20 sm:h-20"
                alt="Logo"
              />
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif">
                Make A Spark
              </h1>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 rounded-lg px-4 py-2">
              <a
                href="https://wa.me/919360995061"
                className="flex items-center gap-1 text-sm md:text-base font-semibold"
              >
                <FaWhatsapp className="w-8 h-8 animate-bounce" />
                <span>+91 93609 95061</span>
              </a>
              <a
                href="mailto:createsparkms@gmail.com"
                className="flex items-center gap-1 text-sm md:text-base font-semibold"
              >
                <FaEnvelope className="text-white" />
                <span>makeaspark1117@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <Outlet />
      <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4">
        <aside className="grid-flow-col items-center">
          <img src={Logo} className="w-10 h-10" />
          <p>Bringing Sivakasi’s sparkle to your moments</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a href="https://wa.me/919360995061">
            <FaWhatsapp className="w-8 h-8" />
          </a>
          <a>
            <FaInstagram className="w-8 h-8" />
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Home;
