"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

// Exact provided imports with your specific assets
import christmastreebig from "@/public/websiteassest/christmastreenew.png";
import sun from "@/public/websiteassest/sun.png";
import greenbigtree from "@/public/websiteassest/greenbigtree.png";
import motherdaughter from "@/public/websiteassest/motherdaughter.png";
import cloud from "@/public/websiteassest/cloud.png";
import redbuilding from "@/public/websiteassest/redbuilding.png";
import orangebuilding from "@/public/websiteassest/orangebuilding.png";
import purplebuilding from "@/public/websiteassest/purplebuilding.png";
import yellowbuilding from "@/public/websiteassest/yellowbuilding.png";
import grassbig from "@/public/websiteassest/grassbig.png";
import greeensmalltrre from "@/public/websiteassest/greensmalltree.png";
import balloon from "@/public/websiteassest/baloon.png";
import wheremontsarimeetlovebackground from "@/public/websiteassest/wheremontessarimeetlovebackground.png";
import logo from "@/public/logo.png";
import logobackground from "@/public/websiteassest/logobackground.png";

// Background hill assets
import yellomountain from "@/public/websiteassest/yelllowhill.png";
import bluemountain from "@/public/websiteassest/blueehill.png";

const navLinks = [
  { href: "/Programs", label: "Programs", color: "#75C05B" }, // Green
  { href: "/Whyus", label: "Why Us", color: "#E2324E" }, // Pink
  { href: "/admission", label: "Admissions", color: "#A275E1" }, // Purple
  { href: "/franchise", label: "Franchisee", color: "#E54D35" }, // Orange
  { href: "/Ourcenters", label: "Our Centers", color: "#38bdf8" }, // Blue
  { href: "/contact", label: "Contact Us", color: "#ffce54" }, // Yellow
];

const HeroBanner: React.FC = () => {
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
    <section className="relative w-full min-h-[70vh] md:min-h-[100vh] bg-[#004e9a] flex flex-col overflow-hidden font-sans">
      <div className="absolute -bottom-8 left-0 w-full overflow-hidden z-50 leading-none  pointer-events-none">
        <svg
          className="relative block w-full h-[60px] sm:h-[90px] lg:h-[130px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          {/* Note: Change "fill-white" to match the section directly below this one */}
          <path
            d="M0,64L48,53.3C96,43,192,21,288,26.7C384,32,480,64,576,74.7C672,85,768,75,864,58.7C960,43,1056,21,1152,26.7C1248,32,1344,64,1392,80L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            className="fill-sky-100"
          ></path>
        </svg>
      </div>

      {/* --- STICKY NAVIGATION BAR --- */}
      <header
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-6 lg:py-8"
          }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex justify-between items-center">

          {/* Logo appears only on scroll */}
          <div className={`transition-opacity duration-300 ${scrolled ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            <Link href="/">
              <Image src={logo} alt="Motherhood Preschool" width={160} height={50} className="h-[50px] w-[220px]" />
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
                  className={`relative py-2 font-bold text-[16px] transition-colors duration-300 z-10 ${scrolled
                    ? isActive ? "text-[#E2324E]" : "text-[#004e9a] hover:text-[#E2324E]"
                    : "text-white"
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
                        strokeWidth="8" // Increased from 5 to 8 to make it bold
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
                className={`block px-7 py-2.5 rounded-full font-bold transition-all duration-300 ${scrolled
                  ? "bg-[#E2324E] text-white hover:bg-[#c92a43] hover:-translate-y-1 hover:shadow-lg"
                  : "bg-[#E2324E] text-white border-2 border-[#E2324E] shadow-[0_4px_0_#9f1f33] hover:-translate-y-1 hover:shadow-[0_6px_0_#9f1f33] active:translate-y-1 active:shadow-none"
                  }`}
              >
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => window.open("https://wa.me/918929296266", "_blank")}
                >
                  8929296266
                </motion.button>
              </Link>
            </div>
          </nav>

          {/* Mobile Nav Toggle Icon */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden z-[110] relative p-2 transition-colors duration-300 ${scrolled || mobileMenuOpen ? "text-[#004e9a]" : "text-white"
              }`}
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
            className="fixed inset-0 z-[105] bg-[#F7F5E5] flex flex-col items-center justify-center gap-6"
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
                  className={`text-2xl md:text-3xl font-black tracking-tight transition-colors ${pathname === link.href ? "text-[#E2324E]" : "text-[#004e9a] hover:text-[#E2324E]"
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
                  onClick={() => window.open("https://wa.me/918929296266", "_blank")}
                >
                  8929296266
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- BACKGROUND HILL IMAGES --- */}
      <div className="absolute bottom-0 w-[100%] h-[48%] z-10">
        <Image src={bluemountain} alt="Blue Hill" fill className="object-cover object-left-top" priority />
      </div>
      <div className="absolute top-[45%] left-[-10%] w-[110%] h-[75%] z-0">
        <Image src={yellomountain} alt="Yellow Hill" fill className="object-cover object-left-top" priority />
      </div>

      {/* --- DECORATIVE STARS --- */}
      {[
        { top: "12%", left: "35%", delay: 0 },
        { top: "28%", left: "30%", delay: 1.5 },
        { top: "30%", left: "62%", delay: 0.5 },
        { top: "40%", left: "95%", delay: 1 },
      ].map((star, i) => (
        <motion.div
          key={i}
          className="absolute text-[#ffce54] text-xl md:text-2xl select-none z-20"
          style={{ top: star.top, left: star.left }}
          animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 3, repeat: Infinity, delay: star.delay }}
        >
          ✦
        </motion.div>
      ))}

      {/* --- TOP LEFT LOGO AREA (Only visible at top) --- */}
      <div className="absolute top-0 left-0 z-[60]">
        <div className="w-[180px] md:w-[380px]">
          <Image src={logobackground} alt="Motherhood Preschool Background" className="w-full h-auto object-contain" />
          <div className="absolute w-[110px] md:w-[340px] top-0 inset-0 flex items-center justify-center pt-1 pr-2 pb-3 pl-3">
            <Image src={logo} alt="Motherhood Preschool Logo" className="w-full h-auto object-contain" />
          </div>
        </div>
      </div>

      {/* --- TYPOGRAPHY & RIBBON (Slightly reduced to match downscaled assets) --- */}
      <div className="absolute top-[46%] md:top-[15%] left-[5%] md:left-[40%] w-[90%] md:w-auto md:max-w-[550px] z-40">
        <p className="text-pink-300 font-fedorikamedium font-medium text-sm md:text-[18px] leading-relaxed drop-shadow-sm">
          A warm, nurturing Montessori space where your little one learns through play, builds confidence and discovers the joy of curiosity — wrapped in a mother&apos;s love.
        </p>
      </div>

      <div className="absolute top-[30%] md:top-[32%] left-[42%] md:left-[38%] z-40 w-[180px] md:w-[280px]">
        <div className="relative w-full h-full">
          <Image src={wheremontsarimeetlovebackground} alt="Ribbon background" className="w-full h-auto" />
          <div className="absolute inset-0 flex items-center justify-center pt-1 pr-2 pb-3 pl-3">
            <span className="text-white font-bold text-[11px] md:text-sm leading-tight text-center">
              Where Montessori <br /> Meets Motherly Love
            </span>
          </div>
        </div>
      </div>

      {/* --- FLOATING SKY ELEMENTS (Sizes significantly reduced) --- */}
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 80, repeat: Infinity, ease: "linear" }} className="absolute top-[14%] left-[38%] md:left-[8%] z-20 w-[10%] min-w-[70px] max-w-[110px]">
        <Image src={sun} alt="Sun" className="w-full h-auto" />
      </motion.div>

      <motion.div animate={{ x: [0, 10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[28%] left-[2%] z-30 w-[12%] min-w-[90px] max-w-[250px]">
        <Image src={cloud} alt="Cloud" className="w-full h-auto" />
      </motion.div>

      <motion.div animate={{ x: [0, -10, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[20%] left-[14%] z-20 w-[14%] min-w-[100px] max-w-[220px]">
        <Image src={cloud} alt="Cloud" className="w-full h-auto" />
      </motion.div>

      <motion.div animate={{ x: [0, 8, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[32%] left-[26%] z-20 w-[9%] min-w-[60px] max-w-[160px]">
        <Image src={cloud} alt="Cloud" className="w-full h-auto scale-75" />
      </motion.div>

      <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[12%] md:top-[18%] right-[8%] z-30 w-[9%] min-w-[60px] max-w-[150px]">
        <Image src={balloon} alt="Balloon" className="w-full h-auto" />
      </motion.div>

      {/* --- MIDGROUND: BUILDINGS & TREES (Scaled down and clustered tighter) --- */}
      <div className="absolute bottom-[0%] left-[6%] z-30 w-[9%] min-w-[50px] max-w-[220px]">
        <Image src={purplebuilding} alt="Building" className="w-full h-auto" />
      </div>

      <div className="absolute bottom-[1%] left-[17%] z-30 w-[8%] min-w-[55px] max-w-[210px]">
        <Image src={redbuilding} alt="Building" className="w-full h-auto" />
      </div>

      <div className="absolute bottom-[1%] left-[28%] z-20 w-[4%] min-w-[30px] max-w-[75px]">
        <Image src={greenbigtree} alt="Tree" className="w-full h-auto" />
      </div>

      <div className="absolute bottom-[1%] left-[31%] z-30 w-[3%] min-w-[25px] max-w-[65px]">
        <Image src={greeensmalltrre} alt="Tree" className="w-full h-auto" />
      </div>

      <div className="absolute bottom-[1%] left-[33%] z-30 w-[5%] min-w-[40px] max-w-[90px]">
        <Image src={orangebuilding} alt="Building" className="w-full h-auto hue-rotate-60 brightness-110" />
      </div>

      <div className="absolute bottom-[1%] left-[39%] z-30 w-[7%] min-w-[40px] max-w-[380px]">
        <Image src={yellowbuilding} alt="Building" className="w-full h-auto brightness-110" />
      </div>

      <div className="absolute bottom-[2%] left-[47%] z-20 w-[3%] min-w-[25px] max-w-[50px]">
        <Image src={greenbigtree} alt="Tree" className="w-full h-auto" />
      </div>

      <div className="absolute bottom-[2%] left-[50%] z-30 w-[3%] min-w-[25px] max-w-[50px]">
        <Image src={christmastreebig} alt="Pine Tree" className="w-full h-auto" />
      </div>

      {/* --- FOREGROUND: MOTHER/DAUGHTER & GRASS (Scaled down to prevent overlap) --- */}
      <div className="absolute bottom-[3%] md:bottom-[0%] -right-[2%] md:right-[15%] z-40 w-[70%] md:w-[42%] max-w-[600px]">
        <Image src={motherdaughter} alt="Mother and Daughter" className="w-full h-auto object-contain object-bottom" priority />
      </div>

      {/* Grass slightly lowered so it doesn't cover as much */}
      <div className="absolute top-[90%] md:top-[85%] left-0 w-full h-[12%] md:h-[18%] z-40 pointer-events-none flex items-end">
        <Image src={grassbig} alt="Grass Foreground" className="w-full h-full object-cover object-bottom" priority />
      </div>

    </section>
  );
};

export default HeroBanner;