"use client";

import React from "react";
import { motion } from "framer-motion";
import { Home, ChevronRight, Star, Heart, Cloud } from "lucide-react";
import Image from "next/image"; 
import Girlonwing from "../public/boywithelephent.png"; 
import { Titan_One, Nunito } from 'next/font/google';

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

const Admissionheader = () => {
  return (
    <header className={`relative w-full h-auto md:h-[60vh] min-h-[500px] bg-violet-600 flex items-center justify-center overflow-hidden pt-20 pb-32 md:py-0 ${bodyFont.className}`}>
      
      {/* --- BACKGROUND DECORATIONS --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        
        {/* Large Teal Circle (Abstract Hill) */}
        <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute -top-20 -left-20 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl"
        />
        
        {/* Large Pink Circle */}
        <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute top-10 right-[20%] w-80 h-80 bg-rose-400/20 rounded-full blur-3xl"
        />

        {/* Floating Clouds */}
        <motion.div 
           animate={{ x: [0, 20, 0] }}
           transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
           className="absolute top-[15%] left-[10%] text-white opacity-20"
        >
            <Cloud size={64} fill="white" />
        </motion.div>

        <motion.div 
           animate={{ x: [0, -30, 0] }}
           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
           className="absolute top-[25%] right-[35%] text-white opacity-10"
        >
            <Cloud size={48} fill="white" />
        </motion.div>
      </div>

      {/* --- MAIN CONTENT CONTAINER (Grid layout) --- */}
      <div className="relative z-10 w-full max-w-7xl px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* --- LEFT COLUMN: TEXT --- */}
        <div className="text-center md:text-left">
            {/* Breadcrumb Pill */}
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full mb-8 shadow-sm"
            >
                <Home className="w-4 h-4 text-yellow-300" />
                <span className="text-violet-100 font-bold text-sm hover:text-white transition-colors cursor-pointer">Home</span>
                <ChevronRight className="w-4 h-4 text-white/50" />
                <span className="text-white font-bold text-sm">Admission</span>
            </motion.div>

            {/* Title */}
            <motion.h1 
                initial={{ opacity: 0, scale: 0.9, x: -50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
                className={`text-6xl lg:text-7xl text-white mb-2 drop-shadow-md leading-tight ${titleFont.className}`}
            >
               Join Our
               <div className="relative inline-block ml-4">
                 <span className="text-yellow-300 relative z-10">Family</span>
                 
                 {/* Decorative Wavy Underline */}
                 <svg className="absolute -bottom-2 left-0 w-full h-3 text-white/80 z-0" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                 </svg>

                 {/* Floating Heart Icon */}
                 <motion.div 
                   animate={{ y: [0, -5, 0], rotate: [0, 10, 0] }}
                   transition={{ duration: 2, repeat: Infinity }}
                   className="absolute -top-6 -right-6 text-rose-400"
                 >
                    <Heart fill="currentColor" size={32} />
                 </motion.div>
               </div>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg lg:text-2xl text-violet-100 font-semibold max-w-xl mx-auto md:mx-0 leading-relaxed mt-6"
            >
               Admissions are now open for the <span className="text-white font-bold">2026-2027</span> Academic Session.
            </motion.p>
        </div>

        {/* --- RIGHT COLUMN: IMAGE --- */}
        <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ 
                opacity: 1, 
                x: 0,
                y: [0, -15, 0] 
            }}
            transition={{ 
                opacity: { duration: 0.8, delay: 0.3 },
                x: { type: "spring", stiffness: 50, delay: 0.3 },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" } 
            }}
            className="md:block relative z-20 mt-10 md:mt-0"
        >
            <Image 
                src={Girlonwing} 
                alt="Little Dreamer Girl Flying"
                priority 
                className="w-full ml-[2px] md:ml-[200px] h-[250px] md:h-auto max-h-[500px] object-contain drop-shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
            />
        </motion.div>

      </div>

      {/* --- CLOUD/WAVE DIVIDER (Bottom) --- */}
      <div className="absolute bottom-0 left-0 w-full leading-none rotate-180 overflow-hidden z-30">
        <svg 
            className="relative block w-full h-[80px] md:h-[140px]" 
            data-name="Layer 1" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
        >
            {/* Changed fill to match the background color of the next section (violet-300 based on previous context) */}
            <path 
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                className="fill-white" 
            ></path>
        </svg>
      </div>

    </header>
  );
};

export default Admissionheader;