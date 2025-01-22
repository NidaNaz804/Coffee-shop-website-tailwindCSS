"use client";

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="bg-gradient-to-r from-[#f3e1d4] via-[#e4c3a9] to-[#c28b59] mt-0 pt-0"
    >
      <div className="max-w-[112rem] mx-auto grid grid-cols-1 md:grid-cols-2 items-center h-[650px] p-4">
        {/* Text Section */}
        <div className="text-left">
          <h3 className="text-lg font-semibold text-[#d97706] font-dancing-script">
            Welcome to Beans Bliss___
          </h3>
          <h1 className="text-3xl font-bold font-pacifico mt-2">
            Experience Artisanal{' '}
            <span className="text-[#d97706]">Coffee</span> at Beans Bliss
          </h1>
          <p className="text-base text-gray-600 mt-3">
            Indulge in our carefully crafted brews, made from ethically sourced
            beans and brewed to perfection.
          </p>
          <div className="flex gap-2 mt-4">
            <a href="#menu">
              <button className="bg-[#d97706] text-white py-2 px-4 rounded-md hover:scale-105 transition-transform">
                View Menu
              </button>
            </a>
            <a href="#menu">
              <button className="bg-transparent border-2 border-[#d97706] text-[#d97706] py-2 px-4 rounded-md hover:bg-[#f3e1d4] transition-colors">
                Our Story
              </button>
            </a>
          </div>
        </div>
        {/* Image Section with AOS Animation */}
        <div
          className="flex justify-end"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img
            src="/coffee5.png"
            alt="Coffee"
            className="w-[500px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
