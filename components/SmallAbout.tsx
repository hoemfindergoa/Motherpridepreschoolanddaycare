"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Flower2, Heart, Sparkles } from "lucide-react";
import { Quicksand, Nunito } from 'next/font/google';
import Image from "next/image";
import Link from "next/link";

// --- IMAGE IMPORTS ---
// Note: You may want to swap these images with softer, lifestyle photography 
// of mothers/caregivers and children to fully sell the new theme!
import foldedboy from "../public/foldedhandsboy.png";
import girlsasking from "../public/whoweare.png";
import bothcharaters from "../public/bothcharacter.png";

// --- FONTS ---
// Swapped to Quicksand for a soft, rounded, maternal feel
const titleFont = Quicksand({ 
  weight: ['600', '700'], 
  subsets: ['latin'],
  display: 'swap',
});

const bodyFont = Nunito({ 
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
});

// --- REUSABLE WAVE COMPONENT ---
// Kept the waves, but slowed down the animation for a more peaceful flow
const WaveSeparator = ({ position }: { position: "top" | "bottom" }) => {
  const viewBoxWidth = 2000;
  const viewBoxHeight = 100;

  const getWavePath = (count: number) => {
    const waveWidth = viewBoxWidth / count;
    let pathD = "";

    if (position === "top") {
      pathD = `M0,${viewBoxHeight / 2} `;
      for (let i = 0; i < count; i++) {
        pathD += `q ${waveWidth / 4}, 25 ${waveWidth / 2}, 0 t ${waveWidth / 2}, 0 `;
      }
      pathD += `V ${viewBoxHeight} 0 H 0 Z`;
    } else {
      pathD = `M0,${viewBoxHeight / 2} `;
      for (let i = 0; i < count; i++) {
        pathD += `q ${waveWidth / 4}, -25 ${waveWidth / 2}, 0 t ${waveWidth / 2}, 0 `;
      }
      pathD += `V ${viewBoxHeight} H 0 Z`;
    }
    return pathD;
  };

  const mobilePath = getWavePath(5);
  const desktopPath = getWavePath(20);

  const WaveLayer = ({ pathD, opacityClass, duration }: { pathD: string, opacityClass: string, duration: number }) => (
    <motion.div
      className={`absolute inset-0 w-[200%] h-full text-white ${opacityClass}`}
      animate={{ x: position === "top" ? ["0%", "-50%"] : ["-50%", "0%"] }}
      transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
    >
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`} preserveAspectRatio="none">
        <path d={pathD} fill="currentColor"></path>
      </svg>
    </motion.div>
  );

  return (
    <div className={`absolute left-0 w-full h-[90px] sm:h-[120px] overflow-hidden z-20 ${position === "top" ? "top-0" : "bottom-0"}`}>
      <div className="block md:hidden w-full h-full absolute inset-0">
        <WaveLayer pathD={mobilePath} opacityClass="opacity-40" duration={30} />
        <WaveLayer pathD={mobilePath} opacityClass="opacity-100" duration={25} />
      </div>
      <div className="hidden md:block w-full h-full absolute inset-0">
        <WaveLayer pathD={desktopPath} opacityClass="opacity-40" duration={30} />
        <WaveLayer pathD={desktopPath} opacityClass="opacity-100" duration={25} />
      </div>
    </div>
  );
};

// --- DATA REWRITTEN FOR "MOTHERHOOD" THEME ---
const features = [
  {
    id: 1,
    title: "A Mother's Touch",
    description: "Providing a tender, loving environment that feels just like a warm, reassuring hug from home.",
    image: girlsasking,
    ids: "#whowe",
    theme: {
      bg: "bg-rose-50",
      accent: "bg-rose-100",
      border: "border-rose-100",
      text: "text-rose-600",
      button: "bg-rose-400 hover:bg-rose-500",
      shadow: "hover:shadow-[0_15px_40px_rgba(2fb,113,133,0.15)]"
    }
  },
  {
    id: 2,
    title: "Gentle Growth",
    description: "Fostering natural curiosity and emotional well-being at every child's own unique, beautiful pace.",
    image: bothcharaters,
    ids: "#vision",
    theme: {
      bg: "bg-orange-50",
      accent: "bg-orange-100",
      border: "border-orange-100",
      text: "text-orange-600",
      button: "bg-orange-400 hover:bg-orange-500",
      shadow: "hover:shadow-[0_15px_40px_rgba(251,146,60,0.15)]"
    }
  },
  {
    id: 3,
    title: "Rooted in Love",
    description: "Cultivating a safe haven where peace, compassion, and early learning gently blossom together.",
    image: foldedboy,
    ids: "#mission",
    theme: {
      bg: "bg-stone-50",
      accent: "bg-stone-200",
      border: "border-stone-200",
      text: "text-stone-600",
      button: "bg-stone-400 hover:bg-stone-500",
      shadow: "hover:shadow-[0_15px_40px_rgba(120,113,108,0.15)]"
    }
  }
];

const SpreadingLoveSection = () => {
  return (
    <section className={`relative w-full bg-[#fdfbf9] pt-32 pb-28 overflow-hidden ${bodyFont.className}`}>
      
      {/* Top Wave */}
      <WaveSeparator position="top" />

      {/* Soft Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
         <motion.div animate={{ y: [0, -15, 0], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute top-32 left-10 text-rose-200">
            <Heart fill="currentColor" className="w-12 h-12" />
         </motion.div>
         <motion.div animate={{ y: [0, 15, 0], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-40 right-16 text-orange-200">
            <Flower2 fill="currentColor" className="w-14 h-14" />
         </motion.div>
         
         {/* Replaced harsh SVG doodle with soft blurred blobs */}
         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-50 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-20">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-rose-100 shadow-sm text-sm font-bold text-rose-400 mb-6 tracking-widest uppercase"
            >
              <Sparkles className="w-4 h-4" />
              Our Nurturing Philosophy
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className={`${titleFont.className} text-4xl md:text-5xl lg:text-6xl leading-[1.2]`}
            >
              <span className="text-stone-600">Nurturing Little Hearts at</span> <br className="hidden md:block" />
              <span className="text-rose-400 relative inline-block mt-2">
                 Motherhood
                 <svg className="absolute w-full h-4 -bottom-2 left-0 text-rose-200/60" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0,5 Q50,15 100,5" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                 </svg>
              </span>
            </motion.h2>
        </div>

        {/* --- SOFT CARDS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 pt-4">
            {features.map((feature, index) => (
                <Link href={`about/${feature.ids}`} key={feature.id} className="w-full h-full block group">
                    <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        // Smoother, softer hover effect
                        whileHover={{ y: -8 }}
                        className={`
                            relative p-8 md:p-10 rounded-[2.5rem] 
                            bg-white border-2 ${feature.theme.border}
                            shadow-lg ${feature.theme.shadow} transition-all duration-500
                            flex flex-col items-center text-center h-full
                            overflow-hidden
                        `}
                    >
                        {/* Soft Background Accent */}
                        <div className={`absolute top-0 left-0 w-full h-32 ${feature.theme.bg} rounded-t-[2.5rem] transition-all duration-500 group-hover:h-40 -z-10`}></div>
                        
                        {/* Image Container - Changed from pop-out to a gentle floating circle */}
                        <div className={`w-36 h-36 rounded-full ${feature.theme.accent} border-4 border-white shadow-md mb-8 relative flex items-center justify-center overflow-hidden transition-transform duration-500 group-hover:scale-105`}>
                            <Image 
                                src={feature.image} 
                                alt={feature.title}
                                fill
                                className="object-contain p-4"
                            />
                        </div>

                        {/* Card Body */}
                        <h3 className={`${titleFont.className} ${feature.theme.text} text-2xl md:text-3xl mb-4 font-bold`}>
                            {feature.title}
                        </h3>
                        
                        <p className="text-stone-500 font-medium text-base leading-relaxed mb-8 flex-1">
                            {feature.description}
                        </p>

                        {/* Elegant Button */}
                        <div className={`mt-auto ${feature.theme.button} text-white px-6 py-3 rounded-full flex items-center justify-center gap-2 shadow-sm transition-all duration-300 transform group-hover:scale-105`}>
                            <span className="font-bold text-sm">
                                Read More
                            </span>
                            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                    </motion.div>
                </Link>
            ))}
        </div>

      </div>

      {/* Bottom Wave */}
      <WaveSeparator position="bottom" />

    </section>
  );
};

export default SpreadingLoveSection;