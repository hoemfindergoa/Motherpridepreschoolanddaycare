"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin, Heart } from "lucide-react";

import logo from "../public/logo.png";

// Playful Assets
import sun from "@/public/websiteassest/sun.png";
import cloud from "@/public/websiteassest/cloud.png";
import balloon from "@/public/websiteassest/baloon.png";
import motherChildBottom from "@/public/websiteassest/motherdaughter.png"; 

const quickLinks = [
  { label: "About Us", href: "/about", color: "#F29B54" },
  { label: "Programs", href: "/Programs", color: "#75C05B" },
  { label: "Admissions", href: "/admission", color: "#E2324E" },
  { label: "Our Centers", href: "/Ourcenters", color: "#A275E1" },
  { label: "Contact", href: "/contact", color: "#3B82F6" },
];

export default function Footer() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <footer className="relative w-full bg-sky-50 pt-32 pb-6 overflow-hidden font-sans">
      
      {/* ── TOP LAYERED CLOUD WAVE ── */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0 pointer-events-none">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[80px] sm:h-[120px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,80C672,85,768,75,864,64C960,53,1056,43,1152,48C1248,53,1344,75,1392,85.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            className="fill-purple-400"
          ></path>
        </svg>
      </div>

      {/* ── FLOATING PLAYFUL ASSETS (The Sky Background) ── */}
      
      {/* Sun */}
      <motion.div 
        animate={{ rotate: 360 }} 
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute top-[10%] left-[5%] z-0 w-[120px] sm:w-[150px] opacity-90"
      >
        <Image src={sun} alt="Sun" className="w-full h-auto drop-shadow-lg" />
      </motion.div>

      {/* Floating Clouds */}
      <motion.div 
        animate={{ x: [0, 20, 0] }} 
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[10%] z-0 w-[140px] sm:w-[180px] opacity-80"
      >
        <Image src={cloud} alt="Cloud" className="w-full h-auto" />
      </motion.div>
      <motion.div 
        animate={{ x: [0, -15, 0] }} 
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[30%] left-[4%] z-0 w-[160px] sm:w-[220px] opacity-70"
      >
        <Image src={cloud} alt="Cloud" className="w-full h-auto" />
      </motion.div>

      {/* Hot Air Balloon */}
      <motion.div 
        animate={{ y: [0, -20, 0] }} 
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] left-[8%] md:left-[90%] z-0 w-[90px] sm:w-[120px] opacity-90"
      >
        <Image src={balloon} alt="Balloon" className="w-full h-auto drop-shadow-md" />
      </motion.div>

      {/* ── MOTHER & CHILD IMAGE (Bottom Right) ── */}
      <div className="absolute bottom-0 right-[-5%] md:right-[2%] z-0 w-[220px] sm:w-[350px] md:w-[450px] opacity-80 md:opacity-100 pointer-events-none">
        <Image
          src={motherChildBottom}
          alt="Mother and Child"
          className="w-full h-auto object-contain object-bottom drop-shadow-2xl"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

      {/* ── MAIN CONTENT (Wrapped in relative z-10 so it sits above the background) ── */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 mt-[10px]">
        
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1.5fr] gap-8 pb-16">
          
          {/* COLUMN 1: Brand & Socials */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-5"
          >
            <div className=" mt-[80px] p-3  w-fit">
              <Image src={logo} alt="MotherHood" className="h-12 w-auto object-contain" />
            </div>

            <div className="flex gap-4 mt-2">
              {[
                { icon: Facebook, href: "#", color: "#3B5998" },
                { icon: Instagram, href: "#", color: "#E1306C" },
                { icon: Youtube, href: "#", color: "#FF0000" },
              ].map(({ icon: Icon, href, color }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md text-slate-500 transition-colors hover:text-white"
                  style={{ '--hover-color': color } as React.CSSProperties}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = color)}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'white')}
                >
                  <Icon className="h-6 w-6 stroke-[2px]" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* COLUMN 2: Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="w-full mt-8 md:mt-[80px]"
          >
            <h3 className="text-slate-900 text-[18px] font-black uppercase tracking-widest mb-6 flex items-center gap-2">
              <Heart className="h-5 w-5 text-[#E2324E] fill-[#E2324E]" /> Explore
            </h3>
            <ul className="space-y-4 font-fedorikanew">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-4 text-[16px] font-extrabold transition-all duration-300 hover:translate-x-2"
                    style={{ color: item.color }}
                  >
                    <span 
                      className="h-2 w-2 rounded-full shadow-sm transition-transform duration-300 group-hover:scale-150" 
                      style={{ backgroundColor: item.color }}
                    />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* COLUMN 3: Contact */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full mt-8 md:mt-[80px]"
          >
            <h3 className="text-slate-900 text-[18px] font-black uppercase tracking-widest mb-6 flex items-center gap-2">
              Say Hello 👋
            </h3>
            <ul className="space-y-5">
              {[
                { icon: Phone, label: "+91 9999606090", bg: "#FEF4EB", color: "#F29B54" },
                { icon: Mail, label: "info@motherhoodpreschool.com", bg: "#F5F1FC", color: "#A275E1" },
                { icon: MapPin, label: "Janakpuri, Delhi", bg: "#F1F9EE", color: "#75C05B" },
              ].map(({ icon: Icon, label, bg, color }, i) => (
                <li key={i}>
                  <div className="flex items-center gap-4 group w-full cursor-default">
                    <span 
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:shadow-md" 
                      style={{ backgroundColor: bg }}
                    >
                      <Icon className="h-5 w-5" style={{ color: color }} />
                    </span>
                    <span className="text-[16px] font-extrabold text-slate-700 group-hover:text-slate-900 transition-colors leading-tight break-all">
                      {label}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="relative z-10 border-t-[2px] border-sky-200/60 py-6 flex flex-col md:flex-row items-center justify-between gap-4 rounded-t-3xl">
          <p className="text-[14px] font-bold text-slate-600 text-center md:text-left">
            © 2026 MotherHood Preschool. All rights reserved. <br className="sm:hidden" />
            <span className="inline-block mt-2 sm:mt-0 sm:ml-2">
              Made with 💖 by{" "}
              <Link 
                href="https://saasscale.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#E2324E] hover:text-[#c92a43] transition-colors"
              >
                Scale saas
              </Link>
            </span>
          </p>
          
          <div className="flex gap-6 text-[14px] font-bold text-slate-600">
            <Link href="/privacy" className="hover:text-[#E2324E] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#E2324E] transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}