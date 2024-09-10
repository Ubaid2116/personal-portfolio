import React from "react";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer bg-[#1F1F28] border-t border-t-[#33353F] text-white">
      <div className="container p-6 sm:p-10 md:p-12 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        {/* Branding */}
        <span className="text-2xl sm:text-3xl font-extrabold tracking-wide hover:text-[#A855F7] transition-colors duration-300">
          Ubaid
        </span>

        {/* Tagline */}
        <p className="text-slate-400 text-sm sm:text-base text-center sm:text-left mt-2 sm:mt-0 transition-all hover:text-slate-200">
          Crafting with Passion & Precision.
        </p>

        {/* Social Links */}
        <div className="flex space-x-4 mt-2 sm:mt-0">
          <a
            href="https://github.com/Ubaid2116"
            target="_blank"
            className="group text-slate-500 hover:text-[#A855F7] transition-colors duration-300"
            aria-label="GitHub"
          >
            <FaGithub
              size={20}
              className="group-hover:scale-125 transition-transform duration-300"
            />
          </a>
          <a
            href="https://x.com/ubaidkhan0908?s=09"
            target="_blank"
            className="group text-slate-500 hover:text-[#A855F7] transition-colors duration-300"
            aria-label="Twitter"
          >
            <FaTwitter
              size={20}
              className="group-hover:scale-125 transition-transform duration-300"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-ubaid-hussain-6a6054290/"
            target="_blank"
            className="group text-slate-500 hover:text-[#A855F7] transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn
              size={20}
              className="group-hover:scale-125 transition-transform duration-300"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
