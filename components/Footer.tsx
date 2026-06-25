"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin, Heart } from "lucide-react";
import { Space_Mono } from "next/font/google";

import logo from "@/public/logo.png"; // Ensure path is correct

// Playful Assets
import sun from "@/public/websiteassest/sun.png";
import cloud from "@/public/websiteassest/cloud.png";
import balloon from "@/public/websiteassest/baloon.png";
import motherChildBottom from "@/public/websiteassest/motherdaughter.png"; 

const spaceMono = Space_Mono({ 
  subsets: ["latin"], 
  weight: ["400", "700"] 
});

const quickLinks = [
  { label: "About Us", href: "/about", color: "#F59E0B" }, // Amber
  { label: "Programs", href: "/Programs", color: "#75C05B" }, // Green
  { label: "Admissions", href: "/admission", color: "#E54D35" }, // Red
  { label: "Our Centers", href: "/Ourcenters", color: "#A275E1" }, // Purple
  { label: "Contact", href: "/contact", color: "#3B82F6" }, // Blue
];

export default function Footer() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <footer className={`relative w-full pt-[40px] bg-blue-100  md:pt-22 pb-6 overflow-hidden text-[#0F172A] ${spaceMono.className}`}>
      
      {/* ── TOP LAYERED CLOUD WAVE ── */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0 pointer-events-none rotate-180">
        <svg
          className="relative block w-full h-[50px] sm:h-[90px] lg:h-[120px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64L48,53.3C96,43,192,21,288,26.7C384,32,480,64,576,74.7C672,85,768,75,864,58.7C960,43,1056,21,1152,26.7C1248,32,1344,64,1392,80L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
             className="fill-blue-100"
          ></path>
        </svg>
      </div>

      {/* ── FLOATING PLAYFUL ASSETS (The Sky Background) ── */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div 
          animate={{ rotate: 360 }} 
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute top-[8%] left-[-5%] md:left-[5%] w-[100px] sm:w-[150px] opacity-80"
        >
          <Image src={sun} alt="Sun" className="w-full h-auto drop-shadow-lg" />
        </motion.div>

        <motion.div 
          animate={{ x: [0, 20, 0] }} 
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[12%] right-[10%] w-[120px] sm:w-[180px] opacity-70"
        >
          <Image src={cloud} alt="Cloud" className="w-full h-auto" />
        </motion.div>
        
        <motion.div 
          animate={{ x: [0, -15, 0] }} 
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[40%] left-[2%] md:left-[10%] w-[100px] sm:w-[160px] opacity-60"
        >
          <Image src={cloud} alt="Cloud" className="w-full h-auto" />
        </motion.div>

        <motion.div 
          animate={{ y: [0, -20, 0] }} 
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[25%] left-[80%] md:left-[85%] w-[70px] sm:w-[100px] opacity-90"
        >
          <Image src={balloon} alt="Balloon" className="w-full h-auto drop-shadow-md" />
        </motion.div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 mt-10 md:mt-16">
        
        {/* TEXT GRID - lg:pr-[380px] reserves right-side space on desktop so text NEVER touches the image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-10 pb-6 md:pb-12 lg:pr-[380px] xl:pr-[450px]">
          
          {/* COLUMN 1: Brand & Socials */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-4 w-fit inline-block border-2 border-white drop-shadow-sm">
              <Image src={logo} alt="MotherHood" className="h-10 md:h-12 w-auto object-contain" />
            </div>
            
            <p className="text-[15px] sm:text-[16px] font-bold text-[#475569] leading-relaxed">
              A warm, nurturing space where your little one learns through play, builds confidence, and discovers joy.
            </p>

            <div className="flex gap-4 mt-2">
              {[
                { icon: Facebook, href: "#", color: "#3B82F6" },
                { icon: Instagram, href: "#", color: "#E54D35" },
                { icon: Youtube, href: "#", color: "#F59E0B" },
              ].map(({ icon: Icon, href, color }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-white drop-shadow-md text-[#0F172A] transition-colors border-2 border-transparent"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = color;
                    e.currentTarget.style.borderColor = color;
                    e.currentTarget.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "white";
                    e.currentTarget.style.borderColor = "transparent";
                    e.currentTarget.style.color = "#0F172A";
                  }}
                >
                  <Icon className="h-5 w-5 md:h-6 md:w-6 stroke-[2.5px]" />
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
            className="w-full"
          >
            <h3 className="text-[18px] md:text-[20px] font-black uppercase tracking-widest mb-6 md:mb-8 flex items-center gap-2 text-[#0F172A]">
              <Heart className="h-5 w-5 text-[#E54D35] fill-[#E54D35]" /> Explore
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-4 text-[15px] sm:text-[16px] md:text-[18px] font-bold text-[#475569] transition-all duration-300 hover:translate-x-2"
                  >
                    <span 
                      className="h-3 w-3 rounded-full transition-transform duration-300 group-hover:scale-125 shadow-sm" 
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="group-hover:text-[#0F172A]">{item.label}</span>
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
            className="w-full md:col-span-2 lg:col-span-1"
          >
            <h3 className="text-[18px] md:text-[20px] font-black uppercase tracking-widest mb-6 md:mb-8 flex items-center gap-2 text-[#0F172A]">
              Say Hello 👋
            </h3>
            <ul className="space-y-4">
              {[
                { icon: Phone, label: "+91 9999606090", color: "#F59E0B" },
                { icon: Mail, label: "info@motherhoodpreschool.com", color: "#A275E1" },
                { icon: MapPin, label: "Janakpuri, Delhi", color: "#75C05B" },
              ].map(({ icon: Icon, label, color }, i) => (
                <li key={i}>
                  <div className="flex items-center gap-4 group w-full bg-white p-3 rounded-2xl drop-shadow-sm border-2 border-white transition-transform duration-300 hover:-translate-y-1 hover:drop-shadow-md overflow-hidden">
                    <span 
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full shadow-sm transition-transform duration-300 group-hover:scale-110" 
                      style={{ backgroundColor: color }}
                    >
                      <Icon className="h-5 w-5 text-white stroke-[2.5px]" />
                    </span>
                    {/* min-w-0 and break-words ensures long emails wrap properly on mobile instead of pushing outside the box */}
                    <span className="text-[14px] sm:text-[16px] font-bold text-[#475569] group-hover:text-[#0F172A] transition-colors leading-tight min-w-0 break-words pr-2">
                      {label}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

        {/* ── MOTHER & CHILD IMAGE ── */}
        {/* Mobile/Tablet: Acts as a normal block element that pushes the bottom bar down. 
            Desktop: Positioned absolutely in the safe empty space on the right. */}
        <div className="w-full flex justify-end lg:absolute lg:bottom-[80px] lg:right-12 z-0 pointer-events-none mt-4 lg:mt-0">
          <div className="w-[260px] sm:w-[320px] lg:w-[360px] xl:w-[420px]">
            <Image
              src={motherChildBottom}
              alt="Mother and Child"
              className="w-full h-auto object-contain object-bottom drop-shadow-2xl"
            />
          </div>
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="relative z-20 border-t-4 border-white py-6 flex flex-col md:flex-row items-center justify-between gap-4 mt-2 lg:mt-8">
          <p className="text-[13px] md:text-[14px] font-bold text-[#475569] text-center md:text-left">
            © 2026 MotherHood Preschool. All rights reserved. <br className="sm:hidden" />
            <span className="inline-block mt-2 sm:mt-0 sm:ml-2">
              Made with 💖 by{" "}
              <Link 
                href="https://saasscale.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#E54D35] hover:text-[#c92a43] transition-colors underline decoration-2 underline-offset-4"
              >
                Scale saas
              </Link>
            </span>
          </p>
          
          <div className="flex gap-4 sm:gap-6 text-[13px] md:text-[14px] font-bold text-[#475569]">
            <Link href="/privacy" className="hover:text-[#E54D35] transition-colors">Privacy Policy</Link>
            <span className="w-1.5 h-1.5 rounded-full bg-[#475569] self-center"></span>
            <Link href="/terms" className="hover:text-[#E54D35] transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}