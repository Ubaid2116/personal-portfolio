import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-6 sm:p-12 flex flex-col sm:flex-row justify-between items-center">
        <span className="text-lg sm:text-xl font-bold tracking-wide">Ubaid</span>
        <p className="text-slate-600 text-sm sm:text-base text-center sm:text-left mt-2 sm:mt-0">
          Crafting with Passion & Precision.
        </p>
      </div>
    </footer>
  );
};

export default Footer;