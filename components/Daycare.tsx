"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star, Cloud, Clock, Utensils, Heart, Sun, Sparkles } from "lucide-react";
import Image from "next/image";
import childImage from "../public/boywithbrush.png"; 
import { Fredoka, Nunito, Caveat, Quicksand } from 'next/font/google';
import Link from "next/link";

// --- FONT CONFIGURATION (Aligned with Programs UI) ---
const headingFont = Fredoka({ subsets: ["latin"], weight: ["600"] });
const bodyFont = Nunito({ subsets: ["latin"], weight: ["400", "600", "700", "800"] });
const handwritingFont = Caveat({ subsets: ["latin"], weight: ["400", "700"] });
const taglineFont = Quicksand({ subsets: ["latin"], weight: ["600", "700"] });

const DayCareHero = () => {
  return (
    <section 
      // NEW: Gradient background for warmth and care
      className={`relative w-full min-h-[700px] lg:h-[90vh] overflow-hidden flex items-center ${bodyFont.className}`}
      style={{ background: "linear-gradient(160deg, #FFF5F7 0%, #FFF9F5 40%, #FDF2F8 100%)" }}
    >
      
      {/* --- TOP CLOUD WAVE --- */}
      <div className="absolute top-0 left-0 w-full leading-none overflow-hidden z-30">
        <svg className="relative block w-full h-[60px] md:h-[100px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="white"></path>
        </svg>
      </div>

      {/* --- BACKGROUND DECORATIONS (Softened) --- */}
      <div className="absolute inset-0 pointer-events-none">
         {/* Warm Rose Blob */}
         <motion.div 
           initial={{ scale: 0.8, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           transition={{ duration: 1.5 }}
           className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-rose-200/30 rounded-full blur-[100px]"
        />
        
        {/* Soft Lavender Blob */}
        <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="absolute top-1/4 -right-20 w-[400px] h-[400px] bg-purple-100/40 rounded-full blur-[80px]"
        />

        {/* Floating Sparkle Icons */}
        <motion.div
            className="absolute top-40 right-[15%] text-rose-300/60 hidden md:block"
            animate={{ y: [0, -15, 0], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
            <Sparkles size={48} />
        </motion.div>
      </div>

      {/* --- CONTENT CONTAINER --- */}
      <div className="container mx-auto px-6 relative z-20 h-full pt-32 pb-20">
        <div className="flex flex-col md:flex-row items-center justify-between h-full gap-12">
          
          {/* LEFT: Text Content */}
          <motion.div 
            className="w-full md:w-3/5 text-center md:text-left flex flex-col items-center md:items-start z-30"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Tagline Badge */}
            <div className="flex items-center gap-2 mb-6">
              <Heart className="w-5 h-5 text-rose-500 fill-rose-500/20" />
              <p className={`text-[#E83D59] font-bold uppercase tracking-[0.2em] text-xs ${taglineFont.className}`}>
                Safe, Engaging & Loving Care
              </p>
            </div>

            {/* Headline */}
            <h1 className={`${headingFont.className} leading-tight mb-6`}>
              <span className="block text-5xl md:text-7xl lg:text-8xl text-slate-800">
                HOME AWAY
              </span>
              <span 
                className="block text-5xl md:text-7xl lg:text-8xl mt-2 relative inline-block"
                style={{
                  background: "linear-gradient(135deg, #E83D59, #F97316, #E83D59)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                From Home
                <motion.svg 
                  className="absolute -bottom-4 left-0 w-full h-4 text-rose-400/40" 
                  viewBox="0 0 100 10" 
                  preserveAspectRatio="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                >
                  <path d="M0,5 Q50,10 100,5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </motion.svg>
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-slate-600 text-lg md:text-xl font-medium mb-8 max-w-xl leading-relaxed">
              Our Day Care program offers structured relaxation, nutritious snacks, and supervised play activities giving parents peace of mind.
            </p>

            {/* Feature Highlights (Glassmorphism effect) */}
            <div className="flex flex-wrap gap-3 mb-10 justify-center md:justify-start">
               {[
                 { icon: <Clock className="text-rose-500" />, text: "Flexible Hours" },
                 { icon: <Utensils className="text-orange-500" />, text: "Nutritious Meals" },
                 { icon: <Heart className="text-purple-500" />, text: "Loving Staff" }
               ].map((item, idx) => (
                 <div key={idx} className="flex items-center gap-2 bg-white/60 backdrop-blur-md border border-rose-100/50 px-5 py-2 rounded-2xl text-sm font-bold text-slate-700 shadow-sm">
                   {item.icon} {item.text}
                 </div>
               ))}
            </div>

            {/* CTA Button */}
            <Link href="/contact">
              <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative flex items-center gap-3 bg-white text-rose-500 font-extrabold text-lg py-5 px-12 rounded-3xl shadow-[0_20px_40px_rgba(232,61,89,0.15)] hover:shadow-[0_25px_50px_rgba(232,61,89,0.2)] transition-all duration-300 w-full sm:w-auto border-2 border-rose-50/50"
              >
                  Book a Visit
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>

          {/* RIGHT: Image Section */}
          <motion.div 
            className="w-full md:w-2/5 flex justify-center md:justify-end relative z-20"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="relative w-[320px] h-[400px] md:w-[450px] md:h-[550px] lg:w-[500px] lg:h-[600px]">
                {/* Soft glowing halo behind image */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-gradient-to-br from-rose-200 to-orange-100 rounded-[60px] blur-3xl opacity-40 -z-10 animate-pulse"></div>
                
                <Image
                  src={childImage}
                  alt="Happy child in daycare"
                  fill
                  className="object-contain object-bottom drop-shadow-2xl"
                  priority
                />

                {/* Floating "Love" Badge */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-4 -right-4 bg-white p-4 rounded-3xl shadow-xl flex items-center gap-2"
                >
                  <div className="bg-rose-100 p-2 rounded-xl">
                    <Heart className="text-rose-500 w-5 h-5 fill-rose-500" />
                  </div>
                  <span className={`text-slate-700 font-bold ${handwritingFont.className} text-xl`}>Nurturing Love</span>
                </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* --- BOTTOM CLOUD WAVE (Flipped) --- */}
      <div className="absolute bottom-0 left-0 w-full leading-none rotate-180 overflow-hidden z-30">
        <svg className="relative block w-full h-[60px] md:h-[100px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="white"></path>
        </svg>
      </div>

    </section>
  );
};

export default DayCareHero;