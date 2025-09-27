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
      <header className="w-full flex justify-center mt-3.5">
        <div className="relative w-full h-[200px] overflow-hidden">
          <img
            src={Banner}
            className="absolute inset-0 w-full h-full object-cover"
            alt="Firecracker Banner"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center drop-shadow-lg z-10">
            <div className="flex flex-col justify-center">
              <div className="flex items-center">
                <img src={Logo} className="w-20 h-20" />
                <h1 className="text-4xl text-white font-serif">Make A Spark</h1>
              </div>
              <div className="flex justify-center items-center space-x-4 mt-2">
                <a
                  href="tel:9818806699"
                  className="flex items-center space-x-1 text-sm md:text-base font-semibold"
                >
                  <FaPhoneAlt />
                  <span>+91 93609 95061</span>
                </a>
                <a
                  href="mailto:createsparkms@gmail.com"
                  className="flex items-center space-x-1 text-sm md:text-base font-semibold"
                >
                  <FaEnvelope />
                  <span>makeaspark1117@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Outlet />
      <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4">
        <aside className="grid-flow-col items-center">
          <img src={Logo} className="w-10 h-10" />
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a>
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
