"use client";
import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import NavLink from "./NavLink"; // Import NavLink component

const navLinks = [
  { title: "About", path: "#about-section" },
  { title: "Projects", path: "#projects-section" },
  { title: "Contact", path: "#contact-section" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const toggleNavbar = () => setNavbarOpen(!navbarOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-30 bg-[#121212] bg-opacity-90 border-b border-[#33353F] shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 lg:py-4">
        <Link
          href="/"
          className="text-3xl font-bold text-white hover:text-[#ff6347] transition-colors duration-300"
        >
          Ubaid .
        </Link>
        <div className="block md:hidden">
          <button
            onClick={toggleNavbar}
            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white transition-colors duration-300"
          >
            {navbarOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
        <div
          className={`absolute top-0 left-0 right-0 bg-[#121212] bg-opacity-90 md:static md:bg-transparent md:flex md:items-center md:space-x-8 md:mt-0 mt-16 ${
            navbarOpen ? "block" : "hidden"
          } transition-all duration-300 ease-in-out`}
          id="navbar"
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 p-4 md:p-0">
            {navLinks.map((link, index) => (
              <li key={index} className="text-center md:text-left">
                <NavLink
                  href={link.path}
                  title={link.title}
                  className="text-white hover:text-[#ff6347] transition-colors duration-300"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

