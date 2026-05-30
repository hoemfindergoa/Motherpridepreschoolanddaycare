"use client";

import React from "react";
import { motion } from "framer-motion";
import { Space_Mono } from "next/font/google";
import Image, { StaticImageData } from "next/image";

// Make sure your image paths are correct for your project structure
import boywithcup from "@/public/compressed/happy-family-home-mother-lifting-air-little-toddler-child-daughter-mom-baby-girl-playing-h.jpg.webp"
import girlwithbook from "@/public/compressed/heartfelt-moment-mother-embracing-her-newborn-baby-with-pure-love-joy.jpg.webp";
import boywithelephant from "@/public/compressed/maternal-love-mother-baby-white-background.jpg.webp";
import girlonswing from "@/public/compressed/mother-baby.jpg.webp";
import illustrationImage from "@/public/compressed/programillustration.jpg.png";

// Using Space Mono to match the typewriter/brutalist aesthetic of the screenshot
const spaceMono = Space_Mono({ 
  subsets: ["latin"], 
  weight: ["400", "700"] 
});

/* ═══════════════════════════ DATA ═══════════════════════════ */

interface Program {
  id: number;
  title: string;
  ageRange: string;
  description: string;
  image: StaticImageData;
  linkId: string;
  color: string;
}

const programs: Program[] = [
  {
    id: 1,
    title: "Play Group",
    ageRange: "2-3 Years",
    description: "A joyful start with sensory play, comfort, connection, and gentle opportunities for early social discovery.",
    image: boywithcup,
    linkId: "playgroup",
    color: "#E54D35", // Red/Orange from screenshot
  },
  {
    id: 2,
    title: "Nursery", 
    ageRange: "3-4 Years",
    description: "Exploring colors, sounds, numbers, and letters through fun, hands-on learning and playful discovery.",
    image: girlwithbook,
    linkId: "nursery",
    color: "#75C05B", // Green from screenshot
  },
  {
    id: 3,
    title: "Lower Kindergarten",
    ageRange: "4-5 Years",
    description: "Building confidence, self-expression, and early academic readiness within a supportive, warm, and engaging environment.",
    image: boywithelephant,
    linkId: "lkg",
    color: "#DA5396", // Pink from screenshot
  },
  {
    id: 4,
    title: "Upper Kindergarten",
    ageRange: "5-6 Years",
    description: "Preparing children for formal schooling through confidence, independence, clarity, curiosity, and strong foundational learning skills.",
    image: girlonswing,
    linkId: "ukg",
    color: "#A275E1", // Purple from screenshot
  }
];

/* ═══════════════════════════ COMPONENTS ═══════════════════════════ */

const ProgramCard = ({ program, index }: { program: Program; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
      className="group flex flex-col border-[3px] border-black rounded-[6px] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:-translate-x-1"
      style={{ 
        backgroundColor: program.color, 
        boxShadow: "6px 6px 0px #000000" // Hard black drop shadow matching the screenshot
      }}
    >
      {/* Top Image Container */}
      <div className="relative h-48 sm:h-56 w-full border-b-[3px] border-black overflow-hidden bg-white">
        <Image 
          src={program.image} 
          alt={program.title} 
          fill 
          className="object-cover transition-transform duration-500 group-hover:scale-105" 
        />
      </div>

      {/* Content Container */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        
        {/* Age Pill */}
        <div className="bg-black text-white text-[11px] sm:text-xs font-bold px-2.5 py-1 mb-4 w-fit tracking-widest border border-black">
          {program.ageRange}
        </div>

        {/* Title */}
        <h3 className="mb-3 text-[22px] sm:text-[26px] font-bold text-black leading-tight tracking-tight">
          {program.title}
        </h3>
        
        {/* Description */}
        <p className="mb-4 flex-1 text-sm sm:text-[15px] leading-relaxed text-black font-medium">
          {program.description}
        </p>
      </div>
    </motion.div>
  );
};

export default function ProgramsSection() {
  return (
    <section
      id="programs"
      className={`relative w-full min-h-screen bg-[#F7F5E5] overflow-hidden px-4 sm:px-6 lg:px-[66px] py-[80px] lg:py-[120px] ${spaceMono.className}`}
    >
      {/* ── BACKGROUND ILLUSTRATION (Right Side) ── */}
      <div className="absolute inset-y-0 right-0 z-0 w-full md:w-2/3 lg:w-1/2 pointer-events-none opacity-20 lg:opacity-40">
        <div 
          className="relative w-full h-full"
          // Masks the image so it fades out smoothly towards the left
          style={{ maskImage: "linear-gradient(to right, transparent, black 40%)", WebkitMaskImage: "linear-gradient(to right, transparent, black 40%)" }}
        >
          <Image
            src={illustrationImage}
            alt="Program Illustration Background"
            fill
            className="object-cover object-right lg:object-center"
            sizes="(max-width: 804px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-10 max-w-[1400px] mx-auto">
        
        {/* LEFT COLUMN: Header and Grid */}
        <div className="w-full lg:w-[65%]">
          
          {/* Header Section */}
          <div className="mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[40px] sm:text-[50px] lg:text-[60px] font-black font-sans text-black leading-[1.05] mb-6 tracking-tighter">
                Where every child finds <br className="hidden sm:block" />
                <span className="text-[#E2324E]">their rhythm.</span>
              </h2>

              <p className="max-w-2xl text-[13px] sm:text-[15px] leading-relaxed text-black font-bold uppercase tracking-widest">
                Programs designed for every step toward confident school readiness.
              </p>
            </motion.div>
          </div>

          {/* Cards Grid - matches the 2x2 layout of the screenshot */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {programs.map((program, index) => (
              <ProgramCard key={program.id} program={program} index={index} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}