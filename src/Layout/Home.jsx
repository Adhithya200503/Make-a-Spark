import React from "react";
import { Outlet } from "react-router";
import Banner from "../assets/Banner.png";
import Logo from "../assets/Logo.png";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
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
                  <span>9818806699</span>
                </a>
                <a
                  href="mailto:createsparkms@gmail.com"
                  className="flex items-center space-x-1 text-sm md:text-base font-semibold"
                >
                  <FaEnvelope />
                  <span>createsparkms@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Outlet />
      <footer>fkjfwkj</footer>
    </div>
  );
};

export default Home;
