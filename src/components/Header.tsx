"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaHome, FaCoffee, FaInfoCircle, FaEnvelope } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="bg-[#964b00] text-white p-4 flex justify-between items-center sticky top-0 z-50 aos-init aos-animate"
      data-aos="slide-down"
    >
      {/* Logo Section */}
      <div className="flex items-center">
        <img className="h-10 w-auto mr-2" src="/Logo.png" alt="Logo" />
        <h1 className="text-right">
          <span className="block text-lg font-bold font-dancing-script leading-none">
            Bean Bliss Coffee
          </span>
          <span className="block text-sm italic relative -right-5">
            By Nida
          </span>
        </h1>
      </div>

      {/* Hamburger Menu Icon */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl focus:outline-none"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Navigation Menu */}
      <nav
        className={`${
          menuOpen ? 'flex' : 'hidden'
        } md:flex flex-col md:flex-row items-center md:gap-6 bg-[#964b00] md:bg-transparent absolute md:relative top-full left-0 w-full md:w-auto p-4 md:p-0`}
      >
        <Link
          href="/"
          className="flex items-center gap-2 font-bold hover:text-yellow-400 transition-colors mb-4 md:mb-0"
          onClick={() => setMenuOpen(false)}
        >
          <FaHome /> Home
        </Link>
        <Link
          href="/menu"
          className="flex items-center gap-2 font-bold hover:text-yellow-400 transition-colors mb-4 md:mb-0"
          onClick={() => setMenuOpen(false)}
        >
          <FaCoffee /> Menu
        </Link>
        <Link
          href="/about"
          className="flex items-center gap-2 font-bold hover:text-yellow-400 transition-colors mb-4 md:mb-0"
          onClick={() => setMenuOpen(false)}
        >
          <FaInfoCircle /> About
        </Link>
        <Link
          href="/contact"
          className="flex items-center gap-2 font-bold hover:text-yellow-400 transition-colors"
          onClick={() => setMenuOpen(false)}
        >
          <FaEnvelope /> Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
