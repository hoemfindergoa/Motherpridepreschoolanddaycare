"use client";

import React from "react";
import { motion } from "framer-motion";
import { Space_Mono } from "next/font/google";
import Image, { StaticImageData } from "next/image";

// Make sure your image paths are correct for your project structure
import program1 from "@/public/websiteassest/programsection2.png";
import program2 from "@/public/websiteassest/programsection1.png";
import program3 from "@/public/websiteassest/programsection3.png";
import program4 from "@/public/websiteassest/programsection4.png";
import christmastree from "@/public/websiteassest/christmastreenew.png";
import chrismastreeother from "@/public/websiteassest/greenchristmastree.png";

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
    image: program1,
    linkId: "playgroup",
    color: "#E54D35", 
  },
  {
    id: 2,
    title: "Nursery", 
    ageRange: "3-4 Years",
    description: "Exploring colors, sounds, numbers, and letters through fun, hands-on learning and playful discovery.",
    image: program2,
    linkId: "nursery",
    color: "#75C05B", 
  },
  {
    id: 3,
    title: "Lower Kindergarten",
    ageRange: "4-5 Years",
    description: "Building confidence, self-expression, and early academic readiness within a supportive, warm, and engaging environment.",
    image: program3,
    linkId: "lkg",
    color: "#DA5396", 
  },
  {
    id: 4,
    title: "Upper Kindergarten",
    ageRange: "5-6 Years",
    description: "Preparing children for formal schooling through confidence, independence, clarity, curiosity, and strong foundational learning skills.",
    image: program4,
    linkId: "ukg",
    color: "#A275E1", 
  }
];

/* ═══════════════════════════ COMPONENTS ═══════════════════════════ */

const ProgramCard = ({ program, index }: { program: Program; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
      className="group flex flex-col items-center text-center cursor-pointer w-full"
    >
      {/* Free-Floating Image Container */}
      <div className="relative w-full h-[220px] sm:h-[260px] lg:h-[280px] transition-all duration-500 group-hover:-translate-y-4">
        <Image 
          src={program.image} 
          alt={program.title} 
          fill 
          className="object-contain transition-transform duration-700 group-hover:scale-110 drop-shadow-md group-hover:drop-shadow-2xl" 
        />
      </div>

      {/* Text Container */}
      <div className="mt-4 w-full flex flex-col items-center px-2">
        <h3 
          className="text-[22px] sm:text-[24px] font-bold text-[#1E293B] leading-tight transition-colors duration-300"
          style={{ color: program.color }}
        >
          {program.title}
        </h3>
        
        {/* Expandable Hover Content */}
        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out w-full">
          <div className="overflow-hidden">
            <div className="pt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 flex flex-col items-center">
              <span 
                className="inline-block text-white text-[11px] font-bold px-3 py-1 rounded-full mb-3 tracking-wider uppercase shadow-sm"
                style={{ backgroundColor: program.color }}
              >
                {program.ageRange}
              </span>
              <p className="text-[14px] sm:text-[15px] leading-relaxed text-[#334155] font-medium max-w-[280px]">
                {program.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function ProgramsSection() {
  return (
    <div className="relative  z-50 ">
        <section
      id="programs"
      className={`relative w-full min-h-screen bg-sky-100 overflow-hidden px-4 sm:px-6 lg:px-12 pt-[100px] pb-[140px] lg:pt-[140px] lg:pb-[180px] ${spaceMono.className}`}
    >
      {/* ── TOP IRREGULAR WAVE ── */}
      <div className="absolute rotate-180  left-0 w-full overflow-hidden leading-none z-0 pointer-events-none">
        <svg
          className="relative  block w-full h-[60px] sm:h-[90px] lg:h-[130px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
        
        </svg>
      </div>

      {/* ── BOTTOM IRREGULAR WAVE ── */}
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
            className="fill-yellow-100"
          ></path>
        </svg>
      </div>

      {/* ── DECORATIVE TREES ── */}
      <div className="absolute top-40 -left-10 w-48 lg:w-64 opacity-100 z-0 hidden md:block rotate-[-5deg]">
        <Image src={chrismastreeother} alt="Decorative Green Tree" className="w-full h-auto object-contain" />
      </div>
      <div className="absolute bottom-24 -right-12 w-56 lg:w-80 opacity-70 z-0 hidden md:block rotate-[5deg]">
        <Image src={christmastree} alt="Decorative Tree" className="w-full h-auto object-contain" />
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-10 max-w-[1400px] mx-auto mt-8 sm:mt-12 flex flex-col items-center">
        
        <div className="mb-12 sm:mb-20 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[40px] sm:text-[50px] lg:text-[60px] font-black font-sans text-[#0F172A] leading-[1.1] mb-4 tracking-tight">
              Where every child finds <br className="hidden sm:block" />
              <span className="text-[#E2324E]">their rhythm.</span>
            </h2>

            <p className="text-[14px] sm:text-[16px] leading-relaxed text-[#475569] font-bold uppercase tracking-[0.15em]">
              Programs designed for every step toward confident school readiness.
            </p>
          </motion.div>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 items-start">
          {programs.map((program, index) => (
            <ProgramCard key={program.id} program={program} index={index} />
          ))}
        </div>

      </div>
    </section>
      
    </div>
  );
}