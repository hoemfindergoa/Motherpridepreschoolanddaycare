"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Star, Sun, ShieldCheck, ArrowRight, Activity } from "lucide-react";
import { Space_Mono } from "next/font/google";
import Link from "next/link";

// Using Space Mono to match the brutalist/typewriter aesthetic
const spaceMono = Space_Mono({ 
  subsets: ["latin"], 
  weight: ["400", "700"] 
});

// IMPORTANT: Update these paths to your actual images
import daycareImage from "@/public/compressed/young-boy-girl-playing-indoors-with-eco-toys.jpg.webp";
import daycareBgIllustration from "@/public/compressed/daycarebackground.png";

export default function DaycareSection() {
  const features = [
    { icon: Heart, text: "Safe supervision", color: "#E54D35" }, // Red
    { icon: Star, text: "Comforting routine", color: "#F29B54" }, // Orange
    { icon: Sun, text: "Play & rest", color: "#75C05B" }, // Green
    { icon: ShieldCheck, text: "Parent peace of mind", color: "#A275E1" }, // Purple
  ];

  return (
    <section className={`relative w-full py-24 sm:py-32 bg-[#F7F5E5] border-b-2 border-black overflow-hidden ${spaceMono.className}`}>
      
      {/* ── BACKGROUND ILLUSTRATION (Faded on the left) ── */}
      <div className="absolute inset-y-0 left-0 z-0 w-full md:w-2/3 lg:w-1/2 pointer-events-none opacity-20 lg:opacity-30">
        <div 
          className="relative w-full h-full"
          style={{ maskImage: "linear-gradient(to left, transparent, black 60%)", WebkitMaskImage: "linear-gradient(to left, transparent, black 60%)" }}
        >
          <Image
            src={daycareBgIllustration}
            alt="Daycare Background Illustration"
            fill
            className="object-cover object-left"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-[66px]">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE: Content Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white border-2 border-black p-8 sm:p-12 shadow-[8px_8px_0px_#000000]"
          >
            {/* Tag / Label */}
            <div className="inline-flex items-center gap-2 mb-6">
              <Activity className="h-5 w-5 text-[#3B82F6] stroke-[2.5px]" />
              <span className="text-[13px] font-black uppercase tracking-widest text-black">
                Daycare with heart
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-[40px] sm:text-[56px] font-black leading-[1.05] tracking-tighter text-black uppercase mb-8">
              A soft <br className="hidden sm:block" /> extension <br className="hidden sm:block" /> of home.
            </h2>

            {/* Feature Tags */}
            <div className="flex flex-wrap gap-3 sm:gap-4 mb-10">
              {features.map((feature, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-2 bg-[#F7F5E5] border-2 border-black px-4 py-2 shadow-[3px_3px_0px_#000000] hover:-translate-y-1 transition-transform"
                >
                  <feature.icon className="h-4 w-4 stroke-[2.5px]" style={{ color: feature.color }} />
                  <span className="text-[13px] font-bold text-black uppercase tracking-wider">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 bg-[#3B82F6] border-2 border-black px-8 py-4 text-[14px] font-black uppercase tracking-widest text-white transition-transform hover:-translate-y-1 hover:-translate-x-1 shadow-[4px_4px_0px_#000000] active:shadow-none active:translate-y-[4px] active:translate-x-[4px]"
            >
              Ask About Daycare <ArrowRight className="h-4 w-4 stroke-[3px]" />
            </Link>
          </motion.div>

          {/* RIGHT SIDE: Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-[350px] sm:h-[450px] lg:h-[500px] w-full border-2 border-black shadow-[8px_8px_0px_#000000] bg-white overflow-hidden group">
              <Image
                src={daycareImage}
                alt="Children playing in daycare"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              
              {/* Floating Image Tag (matches screenshot "ALL DAY, EVERY DAY") */}
              <div className="absolute top-4 left-4 bg-white border-2 border-black px-4 py-2 shadow-[4px_4px_0px_#000000]">
                <div className="flex items-center gap-2">
                  <Star className="h-3 w-3 text-[#F29B54] stroke-[3px]" />
                  <span className="text-[11px] font-black uppercase tracking-widest text-black">
                    All Day, Every Day
                  </span>
                </div>
              </div>

              {/* Decorative Dot Grid (bottom right corner accent) */}
              <div className="absolute bottom-4 right-4 grid grid-cols-3 gap-1.5 opacity-80 mix-blend-overlay">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="h-1.5 w-1.5 bg-white rounded-full" />
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}