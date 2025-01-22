"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // Makes sure the animation happens only once
    });
  }, []);

  return (
    <div className="about-section py-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* About Header Section */}
        <div className="about-header text-center mb-8" data-aos="fade-up">
          <h1 className="text-4xl font-bold text-gray-800">Our Story</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Founded in 2010, Artisan Coffee House has been serving the community with carefully crafted coffee and a warm atmosphere.
          </p>
        </div>

        {/* About Content Grid */}
        <div className="about-grid-1 grid gap-8 md:grid-cols-2 mb-12">
          {/* Image Section */}
          <div className="about-image-container relative h-[400px] w-full" data-aos="fade-right">
            <Image
              src="/about.jpg"
              alt="Coffee shop interior"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>

          {/* Text Section */}
          <div className="about-text p-4" data-aos="fade-left">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              We believe that great coffee has the power to bring people together and create memorable moments. Our mission is to provide an exceptional coffee experience while fostering a sense of community.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Every cup we serve is crafted with care, using ethically sourced beans from sustainable farms around the world. Our expert baristas are passionate about their craft and dedicated to serving you the perfect cup every time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
