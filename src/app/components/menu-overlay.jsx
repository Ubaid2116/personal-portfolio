import React from "react";
import NavLink from "./navlink";

const MenuOverlay = ({ links }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[#121212] bg-opacity-90 flex items-center justify-center z-40">
      <ul className="flex flex-col items-center space-y-4">
        {links.map((link, index) => (
          <li key={index}>
            <NavLink 
              href={link.path} 
              title={link.title} 
              className="text-white text-xl font-semibold hover:text-[#ff6347] transition-colors duration-300"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuOverlay;

