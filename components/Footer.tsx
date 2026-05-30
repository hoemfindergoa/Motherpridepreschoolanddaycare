"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react";
import { Space_Mono } from "next/font/google";

import logo from "../public/logo.png";
// IMPORTANT: Update this path to your actual big footer image
import footerBigImage from "@/public/compressed/footermother.jpg.png";

// Using Space Mono to match the brutalist/typewriter aesthetic
const spaceMono = Space_Mono({ 
  subsets: ["latin"], 
  weight: ["400", "700"] 
});

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Programs", href: "/Programs" },
  { label: "Admissions", href: "/admission" },
  { label: "Our Centers", href: "/Ourcenters" },
  { label: "Contact", href: "/contact" },

];


/* ═════════ CUSTOM SVG SHAPES ═════════ */

// A playful, hollow bubble with a highlight shine
const CustomBubble = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.15" />
    {/* Shine effect */}
    <path d="M6.5 9C6.5 7.61929 7.61929 6.5 9 6.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

// A brutalist-style 4-point star/sparkle
const CustomStar = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M12 2C12 2 12 10 20 12C12 14 12 22 12 22C12 22 12 14 4 12C12 10 12 2 12 2Z" 
      fill="currentColor" 
      fillOpacity="0.8" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinejoin="round" 
    />
  </svg>
);

/* ═════════ ANIMATED BACKGROUND COMPONENT ═════════ */

const AnimatedBackground = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  
  if (!mounted) return null;

  // Theme colors to make the background pop
  const themeColors = ["text-[#DA5396]", "text-[#75C05B]", "text-[#F29B54]", "text-[#A275E1]", "text-[#E2324E]"];

  // Generate random starting points, speeds, and colors
  // Increased length to 24 because they are smaller now
  const elements = Array.from({ length: 24 }).map((_, i) => {
    const isStar = i % 2 === 0;
    const leftPos = Math.random() * 100; // random left %
    
    // SMALLER SIZES: Much smaller than before
    const sizeClass = isStar ? "w-3 h-3 sm:w-4 sm:h-4" : "w-4 h-4 sm:w-5 sm:h-5";
    const colorClass = themeColors[Math.floor(Math.random() * themeColors.length)];
    
    return {
      id: i,
      isStar,
      left: `${leftPos}%`,
      duration: 20 + Math.random() * 20, // 20s to 40s super smooth, slow fall
      delay: Math.random() * 15,
      rotation: isStar ? (Math.random() > 0.5 ? 360 : -360) : 0, // Stars rotate randomly
      className: `absolute ${sizeClass} ${colorClass} drop-shadow-sm`
    };
  });

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-60">
      {elements.map((el) => (
        <motion.div
          key={el.id}
          // Animating 'y' instead of 'top' ensures hardware-accelerated, buttery smooth movement
          initial={{ y: "-10vh", opacity: 0 }}
          animate={{ 
            y: "110vh", 
            opacity: [0, 1, 1, 0],
            rotate: el.rotation ? [0, el.rotation] : 0 
          }}
          transition={{ 
            duration: el.duration, 
            delay: el.delay, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className={el.className}
          // We set 'left' statically so it falls straight down perfectly
          style={{ left: el.left }}
        >
          {el.isStar ? <CustomStar /> : <CustomBubble />}
        </motion.div>
      ))}
    </div>
  );
};




// A playful, hollow bubble with a highlight shine


/* ═════════ MAIN FOOTER ═════════ */
export default function Footer() {
  return (
    <footer
      className={`relative w-full bg-[#F7F5E5] md:py-[50px] border-t-[4px] border-black overflow-hidden pt-10 sm:pt-14 font-fedorikamedium`}
    >
      <AnimatedBackground />

      {/* ── BACKGROUND IMAGE (Right Side) ── */}
      <div className="md:absolute  inset-y-0 right-0 z-0 w-full md:w-2/3 lg:w-1/2 pointer-events-none opacity-25 lg:opacity-40">
        <div 
          className="relative w-full h-full"
          // This mask fades the image out towards the left so text stays readable
          style={{ maskImage: "linear-gradient(to right, transparent, black 40%)", WebkitMaskImage: "linear-gradient(to right, transparent, black 40%)" }}
        >
          <Image
            src={footerBigImage}
            alt="Background"
            fill
            className="object-cover object-right"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-[66px]">
        
        {/* Main Footer Row (Grid Layout: 3 Columns on Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1.5fr] gap-8 pb-10">
          
          {/* COLUMN 1: Brand & Socials */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <div className="inline-flex items-center bg-white border-[2.5px] border-black p-2 rounded-[4px] shadow-[3px_3px_0px_#000000] w-fit">
              <Image src={logo} alt="MotherHood" className="h-10 w-auto object-contain" />
            </div>
            
            <h2 className="text-[20px] sm:text-[24px] font-bold text-black leading-tight tracking-tight max-w-[280px]">
              Where every child feels at home. 🧸
            </h2>

            <div className="mt-2 flex gap-3">
              {[
                { icon: Facebook, href: "#", bg: "#E2324E" },
                { icon: Instagram, href: "#", bg: "#75C05B" },
                { icon: Youtube, href: "#", bg: "#F29B54" },
              ].map(({ icon: Icon, href, bg }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-10 w-10 items-center justify-center rounded-[4px] border-[2.5px] border-black text-black transition-all hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-none active:translate-y-[4px] active:translate-x-[4px]"
                  style={{ backgroundColor: bg, boxShadow: "3px 3px 0px #000000" }}
                >
                  <Icon className="h-5 w-5 stroke-[2.5px]" />
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
          >
            <h3 className="text-white bg-black inline-block px-2.5 py-1 text-[14px] font-bold uppercase tracking-widest border-[2px] border-black mb-4 shadow-[2px_2px_0px_rgba(0,0,0,0.3)]">
              Explore
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2.5 text-[15px] font-bold text-black hover:text-[#E2324E] transition-colors"
                  >
                    <span className="h-2.5 w-2.5 border-[2px] border-black bg-[#F29B54] group-hover:bg-[#E2324E] transition-colors" />
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
          >
            <h3 className="text-white bg-black inline-block px-2.5 py-1 text-[14px] font-bold uppercase tracking-widest border-[2px] border-black mb-4 shadow-[2px_2px_0px_rgba(0,0,0,0.3)]">
              Say Hello
            </h3>
            <ul className="space-y-3">
              {[
                { icon: Phone, label: "+91 9999606090", bg: "#DA5396" },
                { icon: Mail, label: "info@motherhoodpreschoolanddaycare.com", bg: "#A275E1" },
                { icon: MapPin, label: "Janakpuri, Delhi", bg: "#75C05B" },
              ].map(({ icon: Icon, label, bg }, i) => (
                <li key={i}>
                  <div className="flex items-center gap-3 bg-white border-[2.5px] border-black rounded-[4px] p-2 shadow-[3px_3px_0px_#000000] hover:-translate-y-[2px] transition-transform w-fit">
                    <span 
                      className="flex h-8 w-8 shrink-0 items-center justify-center border-[2px] border-black rounded-[3px]" 
                      style={{ backgroundColor: bg }}
                    >
                      <Icon className="h-4 w-4 text-black stroke-[2.5px]" />
                    </span>
                    <span className="text-[13px] sm:text-[14px] font-bold text-black leading-tight break-all">
                      {label}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t-[3px] border-black py-4 sm:py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[13px] sm:text-[14px] font-bold text-black text-center md:text-left">
            © 2026 MotherHood Preschool. All rights reserved. <br className="sm:hidden" />
            <span className="inline-block mt-2 sm:mt-0 sm:ml-2">
              Made with 💖 by{" "}
              <Link 
                href="https://saasscale.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#E2324E] text-white px-2 py-[1px] border-[2px] border-black hover:bg-black hover:text-white transition-colors ml-1"
              >
                Scale saas
              </Link>
            </span>
          </p>
          
          <div className="flex gap-4 sm:gap-6 text-[13px] sm:text-[14px] font-bold text-black">
            <Link href="/privacy" className="underline decoration-2 underline-offset-4 hover:text-[#E2324E] transition-colors">Privacy</Link>
            <Link href="/privacy" className="underline decoration-2 underline-offset-4 hover:text-[#E2324E] transition-colors">Terms</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}