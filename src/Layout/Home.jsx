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
  const copyToClipboard = (text) => {
    // Check if the Clipboard API is available and if the document is secure
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          alert("Mobile number copied!");
        })
        .catch((err) => {
          console.error("Failed to copy using Clipboard API: ", err);
          fallbackCopyTextToClipboard(text);
        });
    } else {
      // Fallback for non-secure contexts or older browsers
      fallbackCopyTextToClipboard(text);
    }
  };

  const fallbackCopyTextToClipboard = (text) => {
    const tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    try {
      const successful = document.execCommand("copy");
      if (successful) {
        alert("Mobile number copied!");
      } else {
        alert("Failed to copy mobile number.");
      }
    } catch (err) {
      console.error("Fallback copy failed: ", err);
      alert("Failed to copy mobile number.");
    }
    document.body.removeChild(tempInput);
  };

  return (
    <div>
     
      <header className="bg-[#1A1625] text-white p-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6">
        <button
          type="button"
          className="flex items-center gap-1 text-sm md:text-base font-semibold focus:outline-none cursor-pointer"
          onClick={() => copyToClipboard("+91 93609 95061")}
        >
          <FaPhoneAlt className="w-6 h-6" />
          <span>+91 93609 95061</span>
        </button>

        <a
          href="mailto:createsparkms@gmail.com"
          className="flex items-center gap-1 text-sm md:text-base font-semibold"
        >
          <FaEnvelope className="text-white" />
          <span>makeaspark1117@gmail.com</span>
        </a>
      </header>

      {/* Main banner section (now cleaner) */}
      <header className="w-full relative">
        <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] overflow-hidden">
          <img
            src={Banner}
            className="absolute inset-0 w-full h-full object-cover"
            alt="Firecracker Banner"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center drop-shadow-lg z-10 pt-35 p-4">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mb-3">
              <img
                src={Logo}
                className="w-30 h-30 sm:w-50 sm:h-50"
                alt="Logo"
              />
              <div className="flex flex-col items-start">
                <h1 className="text-2xl sm:text-3xl md:text-6xl font-serif text-[#C29740]">
                  Make A Spark
                </h1>
                <span className="text-[12px] text-yellow-600">
                  Bringing Sivakasi’s sparkle to your moments
                </span>
              </div>
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
        <nav className="grid-flow-col gap-4 justify-center place-self-center">
          <div className="flex gap-2 items-center">
            <span className="text-xl">Contact us</span>
            <div className="ml-[20px] flex gap-2">
              <a href="https://wa.me/919360995061">
                <FaWhatsapp className="w-8 h-8" />
              </a>
              <a href="https://www.instagram.com/_make_a_spark_?igsh=MTRxeW81dzljdWNobA==">
                <FaInstagram className="w-8 h-8" />
              </a>
            </div>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Home;