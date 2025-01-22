import React from 'react';
import { BiCoffeeTogo } from 'react-icons/bi';
import { LuFacebook } from 'react-icons/lu';
import { FaInstagram } from 'react-icons/fa6';
import { LuTwitter } from 'react-icons/lu';

const Footer = () => {
  return (
    <footer className="bg-cover bg-center text-white py-12" style={{ backgroundImage: 'url(/coffee-footer.jpg)' }}>
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Footer Item 1 */}
          <div className="flex flex-col">
            <div className="flex items-center mb-4">
              <BiCoffeeTogo className="w-6 h-6 mr-2 text-gray-300" />
              <span className="text-xl font-bold">Beans Bliss</span>
            </div>
            <p className="text-sm text-gray-200">
              Crafting perfect moments, one cup at a time. Visit us for an unforgettable coffee experience.
            </p>
          </div>

          {/* Footer Item 2 - Hours */}
          <div className="flex flex-col">
            <h3 className="text-lg font-bold uppercase tracking-wider mb-4">Hours</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Monday - Thursday: 9am - 11pm</li>
              <li>Friday - Saturday: 9am - 12am</li>
              <li>Sunday: 9am - 11pm</li>
            </ul>
          </div>

          {/* Footer Item 3 - Connect With Us */}
          <div className="flex flex-col">
            <h3 className="text-lg font-bold uppercase tracking-wider mb-4">Connect With Us</h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <LuFacebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <LuTwitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center border-t border-gray-600 pt-6">
          <p className="text-sm text-gray-200">
            © 2025 | Beans Bliss Coffee House. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
