"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Heart, Facebook, Instagram, Youtube } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Nunito } from 'next/font/google';

// Placeholder for your logo
import logo from "../../public/logopng.jpg.jpeg"; 

// --- FONTS ---
const bodyFont = Nunito({ subsets: ['latin'], weight: ['500', '600', '700', '800', '900'] });

const Navbar = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  // Scroll Effect & Active Section Detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (pathname === "/") {
        const sections = ["about", "programs", "gallery"];
        let current = "";
        
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
              current = `/#${section}`;
            }
          }
        }
        if (current) setActiveSection(current);
      } else {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const navLinks = [
    { href: "/about", label: "About Us" },
    { href: "/Programs", label: "Programs" },
    { href: "/Whyus", label: "Why Us" },
    { href: "/admission", label: "Admissions" },
    { href: "/franchise", label: "Franchise" },
    { href: "/Ourcenters", label: "Our Centers" },
    { href: "/contact", label: "Contact Us" },
  ];

  // Softened social links utilizing the logo colors where appropriate
  const socialLinks = [
    { 
      icon: Facebook, 
      href: "#", 
      className: "text-[#3B6CA8] bg-blue-50/50 hover:bg-[#3B6CA8] hover:text-white border-blue-100" 
    },
    { 
      icon: Instagram, 
      href: "#", 
      className: "text-[#E83D59] bg-rose-50/50 hover:bg-[#E83D59] hover:text-white border-rose-100" 
    },
    { 
      icon: Youtube, 
      href: "#", 
      className: "text-red-500 bg-red-50/50 hover:bg-red-500 hover:text-white border-red-100" 
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          // Matches the warm off-white background of the hero section
          ? "bg-[#fdfbf7]/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.04)] py-3"
          : "bg-transparent py-4 md:py-6"
      }`}
    >
      <div className="max-w-[1560px] px-4 md:px-12 mx-auto">
        <div className="flex items-center justify-between">

          {/* --- LOGO --- */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="relative w-[220px] md:w-[260px] transition-transform duration-300"
            >
              <Image 
                src={logo} 
                width={260}  
                height={80}
                alt="MotherHood Preschool Logo"
                className="object-contain"
                priority
              />
            </motion.div>
          </Link>

          {/* --- DESKTOP MENU --- */}
          <div className="hidden xl:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = 
                hoveredLink === link.href || 
                pathname === link.href || 
                (pathname === "/" && activeSection === link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(link.href)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className="relative group py-2"
                >
                  {/* Gentle Floating Heart Indicator */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.5 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 5, scale: 0.5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="absolute -top-3 left-1/2 -translate-x-1/2"
                      >
                         <Heart className="w-3.5 h-3.5 text-[#E83D59] fill-[#E83D59]/30 animate-pulse" />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <span className={`text-base transition-colors duration-300 ${
                    isActive ? "text-[#E83D59] font-bold" : "text-gray-600 font-semibold hover:text-[#E83D59]"
                  } ${bodyFont.className}`}>
                    {link.label}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* --- RIGHT ACTIONS --- */}
          <div className="flex items-center gap-4 md:gap-6">
            
            {/* Elegant Button matching Hero Section */}
            <Link href="/admission" className="hidden sm:block">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  bg-[#E83D59] text-white rounded-full px-7 py-2.5 
                  shadow-lg shadow-rose-200 hover:shadow-xl 
                  flex items-center gap-2 text-sm font-bold transition-all
                  ${bodyFont.className} tracking-wide
                `}
              >
                Enroll Now <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>

            {/* Social Icons */}
            <div className="hidden md:flex items-center gap-3 border-l-2 border-gray-100 pl-6">
                {socialLinks.map((social, i) => (
                    <a 
                        key={i} 
                        href={social.href} 
                        target="_blank" 
                        rel="noreferrer"
                        className={`p-2 rounded-full border transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${social.className}`}
                    >
                        <social.icon className="w-4 h-4" />
                    </a>
                ))}
            </div>

            {/* Mobile Toggle */}
            <button
              className="xl:hidden p-2 text-gray-500 hover:text-[#E83D59] hover:bg-rose-50 rounded-full transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE MENU --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="xl:hidden bg-[#fdfbf7] absolute w-full left-0 top-full overflow-y-auto pb-24 shadow-xl"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-3">
              {navLinks.map((link, i) => {
                 const isActive = pathname === link.href || (pathname === "/" && activeSection === link.href);
                 
                 return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, type: "spring", stiffness: 200 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-5 py-4 rounded-2xl text-lg font-bold transition-all border-2 ${bodyFont.className} ${
                        isActive 
                          ? "text-[#E83D59] bg-[#E83D59]/5 border-[#E83D59]/10 shadow-sm" 
                          : "text-gray-600 bg-white border-transparent hover:border-gray-100 shadow-sm"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {isActive ? <Heart className="w-5 h-5 fill-[#E83D59]/30 text-[#E83D59]" /> : <span className="w-5" />}
                        {link.label}
                      </div>
                    </Link>
                  </motion.div>
                 );
              })}
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-6"
              >
                <Link href="/admission" onClick={() => setMobileMenuOpen(false)}>
                  <button className={`
                    w-full bg-[#E83D59] text-white py-4 rounded-2xl font-bold text-lg 
                    shadow-lg shadow-rose-200 flex justify-center items-center gap-2 transition-all
                    ${bodyFont.className} tracking-wide
                  `}>
                    Enroll Now <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
              </motion.div>

              {/* Mobile Socials */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex justify-center gap-4 py-8 border-t-2 border-gray-100 mt-6"
              >
                {socialLinks.map((social, i) => (
                    <a 
                        key={i} 
                        href={social.href} 
                        className={`p-3.5 rounded-full border shadow-sm ${social.className}`}
                    >
                        <social.icon className="w-5 h-5" />
                    </a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
