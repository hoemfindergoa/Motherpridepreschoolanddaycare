"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star, Cloud, Heart } from "lucide-react";
import { Titan_One, Nunito } from 'next/font/google';
import Image from "next/image";
import Link from "next/link";

// --- CORE IMAGE IMPORTS ---
import foldedboy from "../public/foldedhandsboy.png";
import girlsasking from "../public/whoweare.png";
import bothcharaters from "../public/bothcharacter.png";

// --- GALLERY IMAGE IMPORTS (Replace these with your actual local images) ---
import gallery1 from "@/public/gallery1.jpeg";
import gallery2 from "@/public/gallery9.jpeg";
import gallery3 from "@/public/gallery3.jpeg";
import gallery4 from "@/public/gallery6.jpeg";
import gallery5 from "@/public/gallery5.jpeg";
import gallery6 from "@/public/gallery4.jpeg";
import gallery7 from "@/public/gallery7.jpeg";

// --- FONTS ---
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

// --- REUSABLE WAVE COMPONENT ---
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
        <WaveLayer pathD={mobilePath} opacityClass="opacity-40" duration={20} />
        <WaveLayer pathD={mobilePath} opacityClass="opacity-100" duration={15} />
      </div>
      <div className="hidden md:block w-full h-full absolute inset-0">
        <WaveLayer pathD={desktopPath} opacityClass="opacity-40" duration={20} />
        <WaveLayer pathD={desktopPath} opacityClass="opacity-100" duration={15} />
      </div>
    </div>
  );
};

// --- DATA ---


// --- GALLERY BENTO GRID DATA ---
const galleryItems = [
  { src: gallery1, spanClass: "md:col-span-2 md:row-span-2", alt: "Kids playing" }, // Large block
  { src: gallery2, spanClass: "md:col-span-1 md:row-span-1", alt: "Art class" }, // Small block
  { src: gallery3, spanClass: "md:col-span-1 md:row-span-1", alt: "Outdoor fun" }, // Small block
  { src: gallery4, spanClass: "md:col-span-1 md:row-span-2", alt: "Reading time" }, // Tall block
  { src: gallery5, spanClass: "md:col-span-1 md:row-span-1", alt: "Group activity" }, // Small block
  { src: gallery6, spanClass: "md:col-span-2 md:row-span-1", alt: "Music room" }, // Wide block
  { src: gallery7, spanClass: "md:col-span-1 md:row-span-1", alt: "Playground" }  // Small block
];

const SpreadingLoveSection = () => {
  return (
    <section className={`relative w-full bg-sky-400 pt-28 pb-24 overflow-hidden ${bodyFont.className}`}>
      
      {/* Top Wave */}
      <WaveSeparator position="top" />

      {/* Floating Background Doodles */}
      <div className="absolute inset-0 pointer-events-none">
         <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-40 left-10 text-rose-200">
            <Heart fill="currentColor" className="w-16 h-16" />
         </motion.div>
         <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute bottom-40 right-10 text-amber-200">
            <Star fill="currentColor" className="w-20 h-20" />
         </motion.div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl opacity-5">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#000000" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.2,-19.2,95.8,-5.3C93.5,8.6,82.1,21.5,71.2,32.7C60.3,43.9,49.9,53.4,38.1,61.9C26.3,70.4,13.1,77.9,-0.7,79.1C-14.5,80.3,-29,75.2,-41.7,67.3C-54.4,59.4,-65.4,48.8,-73.4,36.2C-81.4,23.6,-86.4,9,-84.9,-4.9C-83.4,-18.8,-75.4,-32,-65.3,-43.3C-55.2,-54.6,-43.1,-63.9,-30.3,-71.9C-17.5,-79.9,-4,-86.6,8.5,-85.1C21,-83.6,42,-73.9,44.7,-76.4Z" transform="translate(100 100)" />
            </svg>
         </div>
      </div>

      <div className="md:mx-44 mx-4 mb-12 px-6 relative z-10">
        
     

        {/* --- GALLERY BENTO GRID SECTION --- */}
        <div className="mt-10 text-center">
          
            <h2 className={`${titleFont.className} text-5xl md:text-6xl leading-tight mb-16`}>
              <span className="text-[#3E3431]">Explore Our </span> 
              <span className="text-amber-300 relative inline-block">
                  Gallery
                  <svg className="absolute w-full h-6 -bottom-4 left-0 text-sky-300" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0,5 Q50,15 100,5" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                  </svg>
              </span>
            </h2>

            {/* The 12-Cell, 4-Column Grid that fits exactly 7 items perfectly */}
            <div className="grid grid-cols-1 md:grid-cols-4 md:auto-rows-[320px] gap-4 md:gap-6">
              {galleryItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.6, type: "spring" }}
                  viewport={{ once: true }}
                  className={`
                    relative group overflow-hidden bg-white
                    rounded-[2.5rem] border-4 border-white/50 shadow-xl 
                    ${item.spanClass} 
                    min-h-[550px] md:min-h-0
                  `}
                >
                  <Image 
                    src={item.src} 
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gentle overlay on hover to give it life */}
                  <div className="absolute inset-0 bg-rose-500/0 group-hover:bg-rose-500/10 transition-colors duration-300 rounded-[2.3rem]"></div>
                </motion.div>
              ))}
            </div>
        </div>

      </div>

      {/* Bottom Wave */}
      <WaveSeparator position="bottom" />

    </section>
  );
};

export default SpreadingLoveSection;