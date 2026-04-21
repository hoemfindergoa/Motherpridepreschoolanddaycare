"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import { Titan_One, Nunito, Caveat } from 'next/font/google';

// --- FONT CONFIGURATION ---
const titleFont = Titan_One({ 
  weight: '400', 
  subsets: ['latin'],
  display: 'swap',
});

const bodyFont = Nunito({ 
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  display: 'swap',
});

const handwritingFont = Caveat({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

const offices = [
  {
    state: "Delhi",
    address: "B1/622, Pillar No. 575, Janakpuri, New Delhi - 110058",
    color: "bg-teal-50",
    accent: "text-teal-600",
    border: "border-teal-100",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=B1/622,+Pillar+No.+575,+Janakpuri,+New+Delhi+-+110058"
  },
  {
    state: "Andhra Pradesh",
    address: "D No. 14-11-219, Ashok Nagar, Kanuru, Vijayawada, Andhra Pradesh - 520007",
    color: "bg-orange-50",
    accent: "text-orange-600",
    border: "border-orange-100",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=D+No.+14-11-219,+Ashok+Nagar,+Kanuru,+Vijayawada,+Andhra+Pradesh+-+520007"
  },
];

const OurOffices = () => {
  const handleRedirect = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className={`relative py-24 bg-white overflow-hidden ${bodyFont.className}`}>
      {/* Decorative Background Blobs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-100/40 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`inline-block px-4 py-1 mb-4 text-xl text-amber-600 bg-amber-100 rounded-full shadow-sm rotate-[-1deg] ${handwritingFont.className} font-bold border border-amber-200`}
          >
            Find us near you!
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={`${titleFont.className} text-4xl md:text-5xl text-slate-800 relative inline-block`}
          >
            OUR OFFICES
            <svg className="absolute w-full h-3 -bottom-2 left-0 text-orange-300" viewBox="0 0 100 10" preserveAspectRatio="none">
               <path d="M0,5 Q50,10 100,5" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {offices.map((office, index) => (
            <motion.div
              key={office.state}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => handleRedirect(office.mapUrl)}
              className={`relative p-8 rounded-[2rem] border-2 cursor-pointer ${office.border} ${office.color} transition-all duration-300 shadow-sm hover:shadow-xl group`}
            >
              {/* Floating Pin Icon */}
              <div className="absolute -top-5 right-8 p-3 rounded-2xl bg-white shadow-md group-hover:rotate-12 transition-transform">
                <MapPin className={`w-6 h-6 ${office.accent}`} />
              </div>

              <h3 className={`${titleFont.className} text-xl mb-4 text-slate-700`}>
                {office.state}
              </h3>

              <div className="space-y-4 min-h-[80px]">
                <div className="flex gap-3 text-slate-600">
                  <Navigation className="w-5 h-5 shrink-0 mt-1 opacity-70" />
                  <p className="text-sm font-bold leading-relaxed">
                    {office.address}
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200/50">
                <div className={`text-sm font-extrabold uppercase tracking-wider flex items-center gap-2 ${office.accent}`}>
                  Get Directions
                  <motion.div 
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-sm"
                  >
                    →
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurOffices;