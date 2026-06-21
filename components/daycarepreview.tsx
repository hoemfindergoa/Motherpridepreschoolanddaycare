"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Star, Sun, ShieldCheck, ArrowRight, Activity } from "lucide-react";
import { Space_Mono } from "next/font/google";
import christmastree from "@/public/websiteassest/moon.png"; // Your Christmas tree
import Link from "next/link";

// Using Space Mono for playful accents
const spaceMono = Space_Mono({ 
  subsets: ["latin"], 
  weight: ["400", "700"] 
});

// IMPORTANT: Update these paths to your actual images
import daycareImage from "@/public/compressed/young-boy-girl-playing-indoors-with-eco-toys.jpg.webp";
import daycareBgIllustration from "@/public/compressed/daycarebackground.png";
import treeImage from "@/public/websiteassest/jupyter.png"; // Your Christmas tree

export default function DaycareSection() {
  const features = [
    { icon: Heart, text: "Safe supervision", color: "#E54D35", bg: "#FDECE9" }, // Red
    { icon: Star, text: "Comforting routine", color: "#F29B54", bg: "#FEF4EB" }, // Orange
    { icon: Sun, text: "Play & rest", color: "#75C05B", bg: "#F1F9EE" }, // Green
    { icon: ShieldCheck, text: "Peace of mind", color: "#A275E1", bg: "#F5F1FC" }, // Purple
  ];

  return (
    <section className={`relative w-full py-24 sm:py-32 lg:py-30 bg-yellow-100 z-10 overflow-hidden ${spaceMono.className}`}>
      
      {/* ── TOP LAYERED DOUBLE WAVE (Matches screenshot perfectly & prevents gaps) ── */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0 pointer-events-none">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[80px] sm:h-[110px] lg:h-[20px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0 pointer-events-none">
        <svg
          className="relative block w-full h-[60px] sm:h-[90px] lg:h-[130px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          {/* Note: Change "fill-white" to match the section directly below this one */}
          <path
            d="M0,64L48,53.3C96,43,192,21,288,26.7C384,32,480,64,576,74.7C672,85,768,75,864,58.7C960,43,1056,21,1152,26.7C1248,32,1344,64,1392,80L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            className="fill-purple-400"
          ></path>
        </svg>
      </div>
       <div className="absolute bottom-14 -left-8 w-36 lg:w-[400px] opacity-70 z-0 hidden md:block rotate-[5deg]">
        <Image src={christmastree} alt="Decorative Tree" className="w-full h-auto object-contain" />
      </div>

       <div className="absolute -top-16 -right-10 w-48 lg:w-[350px] opacity-100 z-0 hidden md:block rotate-[-5deg]">
        <Image src={treeImage} alt="Decorative Green Tree" className="w-full h-auto object-contain" />
      </div>
     

      {/* ── MAIN CONTENT ── */}
      <div className="relative -z-20 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 mt-2">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-4 lg:gap-20 items-center">

      

          
          
          {/* LEFT SIDE: Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left z-10"
          >
            {/* Playful Tag (Matched to screenshot) */}
            <div className="inline-flex items-center justify-center lg:justify-start gap-2 mb-8 bg-white px-5 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
              <Activity className="h-5 w-5 text-[#3B82F6] stroke-[2.5px]" />
              <span className="text-[12px] sm:text-[13px] font-black uppercase tracking-[0.15em] text-[#3B82F6]">
                Daycare with heart
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-[45px] font-fedorikanew sm:text-[55px] lg:text-[52px] font-black leading-[1.05] tracking-tight text-[#0F172A] mb-10">
              A soft extension  of home.
            </h2>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 gap-4 mb-12 w-full max-w-[500px]">
              {features.map((feature, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-3 bg-white px-4 py-3.5 rounded-2xl shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="p-2 rounded-full" style={{ backgroundColor: feature.bg }}>
                    <feature.icon className="h-5 w-5 stroke-[2.5px]" style={{ color: feature.color }} />
                  </div>
                  <span className="text-[13px] sm:text-[14px] font-bold text-[#334155] leading-tight">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 bg-[#E2324E] px-8 py-4 rounded-full text-[15px] font-bold text-white transition-all duration-300 hover:bg-[#c92a43] hover:-translate-y-1 hover:shadow-lg"
            >
              Ask About Daycare <ArrowRight className="h-5 w-5 stroke-[2.5px]" />
            </Link>
          </motion.div>

          {/* RIGHT SIDE: Image Only (Shifted Right) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* The translate-x classes push the image to the right on larger screens */}
            <div className="relative pt-6 -bottom-20 w-full max-w-[800px] lg:translate-x-12 xl:translate-x-20  -z-20">
              <Image
                src={daycareBgIllustration} // Using your imported illustration
                alt="Children playing in daycare"
                className="w-full h-auto object-contain drop-shadow-2xl"
                sizes="(max-width: 1224px) 100vw, 50vw"
                priority // Good practice if this is above the fold
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}