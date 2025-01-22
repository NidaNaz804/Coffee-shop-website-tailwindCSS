"use client";

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Features = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[112rem] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Feature Item 1 */}
        <div
          className="text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img
            src="/feature2.jpg"
            alt="Fresh Coffee"
            className="w-[300px] h-[200px] rounded-lg mx-auto mb-4"
          />
          <h3 className="text-lg font-semibold mb-2">Fresh Beans Daily</h3>
          <p className="text-gray-600">
            We source and roast our beans daily for the perfect cup.
          </p>
        </div>

        {/* Feature Item 2 */}
        <div
          className="text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <img
            src="/feature1.jpg"
            alt="Cozy Atmosphere"
            className="w-[300px] h-[200px] rounded-lg mx-auto mb-4"
          />
          <h3 className="text-lg font-semibold mb-2">Cozy Atmosphere</h3>
          <p className="text-gray-600">
            Relax in our carefully designed space.
          </p>
        </div>

        {/* Feature Item 3 */}
        <div
          className="text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          <img
            src="/feature3.jpg"
            alt="Expert Baristas"
            className="w-[300px] h-[200px] rounded-lg mx-auto mb-4"
          />
          <h3 className="text-lg font-semibold mb-2">Expert Baristas</h3>
          <p className="text-gray-600">
            Our skilled team crafts every drink with precision.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
