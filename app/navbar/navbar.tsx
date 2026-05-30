"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Space_Mono } from "next/font/google";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Adjust path based on your folder structure
import logoImage from "../../public/logo.png"; 

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Navbar = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/about", label: "About Us" },
    { href: "/programs", label: "Programs" },
    { href: "/why-us", label: "Why Us" },
    { href: "/admissions", label: "Admissions" },
    { href: "/franchisee", label: "Franchisee" },
    { href: "/our-centers", label: "Our Centers" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 ${spaceMono.className}`}>
      {/* Top Black Line Accent */}
      <div className="w-full h-[2px] bg-[#0F0A0A]" />

      {/* Main Navbar */}
      <nav className="relative w-full h-[89px] bg-[#F7F5E6] border-b-2 border-[#D3D3D3] shadow-sm">
        <div className="max-w-[1440px] mx-auto h-full px-6 lg:px-16 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="relative w-[180px] sm:w-[240px] h-[40px] sm:h-[51px]">
            <Image 
              src={logoImage} 
              alt="Motherhood Preschool Logo" 
              fill 
              className="object-contain object-left" 
              priority 
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-6 text-[14px] text-[#0F0A0A] font-bold">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className={`hover:underline hover:text-[#E2324E] transition-colors ${
                  pathname === link.href ? "underline text-[#E2324E]" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Desktop CTA */}
            <Link 
              href="/contact" 
              className="hidden sm:flex items-center justify-center w-[170px] h-[52px] bg-[#E2324E] border-[2.5px] border-[#2E5298] shadow-[5px_5px_0px_#2E5298] rounded-[4px] text-[16px] font-bold text-[#000919] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[3px_3px_0px_#2E5298] active:shadow-none active:translate-y-[5px] active:translate-x-[5px] transition-all"
            >
              Book a Call →
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              className="lg:hidden flex items-center justify-center w-[44px] h-[44px] bg-[#F7F5E6] border-[2px] border-[#0F0A0A] rounded-[4px] shadow-[3px_3px_0px_#0F0A0A] hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-[2px_2px_0px_#0F0A0A] active:shadow-none active:translate-y-[3px] active:translate-x-[3px] transition-all text-[#0F0A0A]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden absolute top-[91px] left-0 w-full bg-[#F7F5E6] border-b-2 border-[#D3D3D3] shadow-lg overflow-hidden origin-top"
          >
            <div className="flex flex-col px-6 py-8 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[16px] font-bold text-[#0F0A0A] border-b-2 border-[#E5E3D4] pb-3 hover:text-[#E2324E] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              
              <Link 
                href="/contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="mt-6 flex items-center justify-center w-full h-[56px] bg-[#E2324E] border-[2.5px] border-[#2E5298] shadow-[5px_5px_0px_#2E5298] rounded-[4px] text-[16px] font-bold text-[#000919] active:shadow-none active:translate-y-[5px] active:translate-x-[5px] transition-all"
              >
                Book a Call →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;