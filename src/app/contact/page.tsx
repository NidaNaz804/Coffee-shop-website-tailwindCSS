"use client";

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // Ensures animation happens only once
    });
  }, []);

  return (
    <div
      id="contact"
      className="contact-section flex items-center justify-center py-24 px-4 bg-cover bg-center"
      style={{ backgroundImage: 'url(/Bg.png)' }}
      data-aos="fade-in"
    >
      <div className="contact-form-container bg-yellow-100 bg-opacity-30 rounded-lg shadow-lg p-8" data-aos="zoom-in">
        {/* Contact Header */}
        <div className="contact-header text-center mb-8" data-aos="fade-up">
          <h1 className="text-4xl font-bold text-orange-500 mb-4 font-cursive">Contact Us</h1>
          <p className="text-lg text-gray-600 mb-6 font-cursive">
            We would love to hear from you! Fill out the form below and we’ll get back to you as soon as possible.
          </p>
        </div>

        {/* Contact Form */}
        <form className="contact-form space-y-6">
          <div>
            <label htmlFor="name" className="text-sm font-semibold text-gray-700 mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="text-sm font-semibold text-gray-700 mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="text-sm font-semibold text-gray-700 mb-2">Message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Your Message"
              rows={5}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md transition-all duration-300 hover:bg-orange-600"
          >
            Send Message
          </button>
        </form>

        {/* Contact Footer */}
        <div className="contact-footer mt-8 text-center">
          <p className="text-gray-600">Or reach us directly:</p>
          <p className="contact-details text-black font-semibold">+92 333-3255677</p>
          <p className="contact-details text-black font-semibold">info@beanbliss.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
