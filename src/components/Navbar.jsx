import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // const navLinks = ["Home", "About", "Services", "Projects", "Contact"];

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    {name: "Education", href: "#education"},
    { name: "Projects", href: "#projects" },
    { name: "Contacts", href: "#contacts" },
  ];

  return (
    
      <nav className="bg-[#6F1AB6] text-white px-4 py-3 sticky top-0 z-50 shadow-md shadow-zinc-800">
        {/* Desktop Navbar */}
        <div className="hidden lg:flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            Madhusudan
            <span className="text-red-500 text-3xl font-bold">.</span>
          </h1>
          <div className="flex gap-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="hover:text-emerald-300 transition"
              >
                {link.name}
              </a>
            ))}
          </div>
          <button className="border cursor-pointer border-white px-4 py-1 rounded-md hover:bg-white hover:text-[#6528F7] transition">
            Contact me
          </button>
        </div>

        {/* Mobile Navbar */}
        <div className="flex lg:hidden justify-between items-center">
          <h1 className="text-xl font-bold">
            Madhusudan<span className="text-red-500 text-2xl font-bold">.</span>
          </h1>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-2xl"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Nav Links */}
        {isOpen && (
  <div className="lg:hidden mt-4 flex flex-col items-start gap-4 px-2">
    {navLinks.map((link, index) => (
      <a
        key={index}
        href={link.href}
        onClick={() => setIsOpen(false)}  // 👈 Close on click
        className="text-base hover:text-emerald-300 transition"
      >
        {link.name}
      </a>
    ))}

    <button
      onClick={() => setIsOpen(false)}  // 👈 Optional: closes menu on contact button too
      className="mt-2 cursor-pointer border border-white px-4 py-1 rounded-md hover:bg-white hover:text-[#6528F7] transition"
    >
      Contact me
    </button>
  </div>
)}

      </nav>
    
  );
};

export default Navbar;
