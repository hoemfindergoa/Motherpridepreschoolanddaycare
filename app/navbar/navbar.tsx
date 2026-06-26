"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

// Ensure these paths match your project structure
import logo from "@/public/logo.png";
import logobackground from "@/public/websiteassest/logobackground.png";
import cloud from "@/public/websiteassest/cloud.png";

const navLinks = [
  { href: "/Programs", label: "Programs", color: "#75C05B" }, // Green
  { href: "/Whyus", label: "Why Us", color: "#E2324E" }, // Pink
  { href: "/admission", label: "Admissions", color: "#A275E1" }, // Purple
  { href: "/franchise", label: "Franchisee", color: "#E54D35" }, // Orange
  { href: "/Ourcenters", label: "Our Centers", color: "#38bdf8" }, // Blue
  { href: "/contact", label: "Contact Us", color: "#ffce54" }, // Yellow
];

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  if (!mounted) return null;

  return (
    <>
      {/* --- TOP LEFT LOGO AREA (Only visible at top) --- */}
      <Link href="/">
      <div 
        className={`absolute top-0 left-0 z-[60] transition-opacity duration-300 ${
          scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="w-[180px] md:w-[380px] relative">
          <Image src={logobackground} alt="Motherhood Preschool Background" className="w-full h-auto object-contain" />
          <div className="absolute w-[110px] md:w-[340px] top-0 inset-0 flex items-center justify-center pt-1 pr-2 pb-3 pl-3">
              <Image src={logo} alt="Motherhood Preschool Logo" className="w-full h-auto object-contain" />
          </div>
        </div>
      </div>
            </Link>

      {/* --- STICKY NAVIGATION BAR --- */}
      <header
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 font-sans ${
          /* 👉 Change "bg-transparent" to "bg-[#F7F5E5]" below if you want a solid color at the top instead of transparent */
          scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-6 lg:py-8"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* Sticky Header Logo appears only on scroll */}
          <div className={`transition-opacity duration-300 ${scrolled ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            <Link href="/">
              <Image src={logo} alt="Motherhood Preschool" width={160} height={50} className="object-contain" />
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative py-2 font-bold text-[16px] transition-colors duration-300 z-10 ${
                    // 👉 Changed text-white to text-[#004e9a] so it's always dark blue and visible on light backgrounds
                    isActive ? "text-[#E2324E]" : "text-[#004e9a] hover:text-[#E2324E]" 
                  }`}
                >
                  {link.label}
                  
                  {/* Static, Bolder Scribble Underline (Always visible) */}
                  <div className="absolute -bottom-1.5 left-0 w-full h-[8px] pointer-events-none" style={{ color: link.color }}>
                    <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="w-full h-full overflow-visible drop-shadow-sm">
                      <path
                        d="M 2,10 Q 15,22 30,10 T 60,15 T 98,10"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="8"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </Link>
              );
            })}
            
            {/* Book a Call CTA */}
            <div className="ml-2">
              <Link
                href="/admission"
                className={`block px-7 py-2.5 rounded-full font-bold transition-all duration-300 bg-[#E2324E] text-white ${
                  scrolled
                    ? "hover:bg-[#c92a43] hover:-translate-y-1 hover:shadow-lg"
                    : "border-2 border-[#E2324E] shadow-[0_4px_0_#9f1f33] hover:-translate-y-1 hover:shadow-[0_6px_0_#9f1f33] active:translate-y-1 active:shadow-none"
                }`}
              >
               <motion.button
                   whileHover={{ scale: 1.01 }}
                   whileTap={{ scale: 0.99 }}
                   onClick={() => window.open("https://wa.me/919999606090", "_blank")}
                 >
                     9999606090
                 </motion.button>
              </Link>
            </div>
          </nav>

          {/* Mobile Nav Toggle Icon */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            // 👉 Changed text-white to text-[#004e9a] so the hamburger menu is visible on light backgrounds
            className="lg:hidden z-[110] relative p-2 transition-colors duration-300 text-[#004e9a]"
          >
            {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </header>

      {/* --- MOBILE FULLSCREEN MENU --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-[105] bg-[#F7F5E5] flex flex-col items-center justify-center gap-6 font-sans"
          >
            <div className="absolute top-20 left-10 opacity-40 w-32">
               <Image src={cloud} alt="Cloud" className="w-full h-auto" />
            </div>

            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 + 0.1 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-2xl md:text-3xl font-black tracking-tight transition-colors ${
                    pathname === link.href ? "text-[#E2324E]" : "text-[#004e9a] hover:text-[#E2324E]"
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.05 + 0.1 }}
              className="mt-6"
            >
              <Link
                href="/admission"
                onClick={() => setMobileMenuOpen(false)}
                className="px-8 py-4 bg-[#ffce54] text-[#004e9a] border-2 border-[#004e9a] shadow-[4px_4px_0_#004e9a] text-xl font-bold rounded-full transition-transform active:translate-y-1 active:shadow-none"
              >
 <motion.button
                   whileHover={{ scale: 1.01 }}
                   whileTap={{ scale: 0.99 }}
                   onClick={() => window.open("https://wa.me/919999606090", "_blank")}
                 >
                     9999606090
                 </motion.button>

              
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}