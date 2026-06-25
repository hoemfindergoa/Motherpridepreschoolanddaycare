"use client";

import React, { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Space_Mono } from "next/font/google";
import Navbar from "../navbar/navbar";

// Ensure these paths match your project structure
import program1 from "@/public/websiteassest/programsection2.png";
import program2 from "@/public/websiteassest/programsection1.png";
import program3 from "@/public/websiteassest/programsection3.png";
import program4 from "@/public/websiteassest/programsection4.png";

// Decorative Assets
import christmastree from "@/public/websiteassest/christmastreenew.png";
import chrismastreeother from "@/public/websiteassest/greenchristmastree.png";
import jupiter from "@/public/websiteassest/jupyter.png";
import dear from "@/public/websiteassest/dear image.png";
import flower from "@/public/websiteassest/sunflower.png";
import Moon from "@/public/websiteassest/moon.png";
import clouds from "@/public/websiteassest/cloud.png";
import balloon from "@/public/websiteassest/baloon.png";

const spaceMono = Space_Mono({ 
  subsets: ["latin"], 
  weight: ["400", "700"] 
});

/* ═══════════════════════════ COMPONENTS ═══════════════════════════ */

// Wavy divider adapted from your home page
function WaveBottom({ fill }: { fill: string }) {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0 pointer-events-none">
      <svg
        className="relative block w-full h-[60px] sm:h-[90px] lg:h-[130px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,64L48,53.3C96,43,192,21,288,26.7C384,32,480,64,576,74.7C672,85,768,75,864,58.7C960,43,1056,21,1152,26.7C1248,32,1344,64,1392,80L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          fill={fill}
        ></path>
      </svg>
    </div>
  );
}

/* ═══════════════════════════ DATA ═══════════════════════════ */

interface ProgramData {
  id: string;
  label: string;
  title: string;
  intro: string;
  copy: string;
  bullets: string[];
  image: StaticImageData;
  color: string;
  bgClass: string;
  nextWaveColor: string;
  decorations: React.ReactNode;
}

const programs: ProgramData[] = [
  {
    id: "playgroup",
    label: "2 - 3 Years",
    title: "Play Group",
    intro: "A loving first step into school life.",
    copy: "This program focuses on settling, sensory discovery, movement, music, social comfort, and joyful routines that help children feel at ease away from home.",
    bullets: ["Comfort-led settling", "Sensory play", "Music and rhythm", "Early social confidence"],
    image: program1,
    color: "#E54D35", 
    bgClass: "bg-red-50",
    nextWaveColor: "#F0FDF4", // green-50 hex
    decorations: (
      <>
        <Image src={flower} alt="sunflower" className="absolute top-20 left-10 w-24 md:w-32 opacity-80 animate-[spin_15s_linear_infinite]" />
        <Image src={dear} alt="deer" className="absolute bottom-32 right-10 w-32 md:w-48 opacity-90" />
      </>
    ),
  },
  {
    id: "nursery",
    label: "3 - 4 Years",
    title: "Nursery",
    intro: "A bright, hands-on learning space.",
    copy: "Children begin recognizing patterns, sounds, colors, numbers, and routines through activities designed to make learning feel playful and deeply engaging.",
    bullets: ["Phonics readiness", "Creative expression", "Group participation", "Confidence building"],
    image: program2,
    color: "#75C05B", 
    bgClass: "bg-green-50",
    nextWaveColor: "#FDF2F8", // pink-50 hex
    decorations: (
      <>
        <Image src={clouds} alt="clouds" className="absolute top-16 right-12 w-32 md:w-48 opacity-70 animate-pulse" />
        <Image src={balloon} alt="balloon" className="absolute bottom-24 left-12 w-24 md:w-36 opacity-90 animate-bounce" />
      </>
    ),
  },
  {
    id: "lkg",
    label: "4 - 5 Years",
    title: "Lower Kindergarten",
    intro: "Academics grow alongside imagination.",
    copy: "Children explore language, numbers, storytelling, art, and classroom independence with structured support that still feels warm and child-centered.",
    bullets: ["Early reading readiness", "Conceptual learning", "Creative thinking", "Independent habits"],
    image: program3,
    color: "#DA5396", 
    bgClass: "bg-pink-50",
    nextWaveColor: "#FAF5FF", // purple-50 hex
    decorations: (
      <>
        <Image src={Moon} alt="moon" className="absolute top-24 left-16 w-24 md:w-32 opacity-80" />
        <Image src={jupiter} alt="jupiter" className="absolute bottom-32 right-16 w-28 md:w-40 opacity-80 animate-[spin_20s_linear_infinite]" />
      </>
    ),
  },
  {
    id: "ukg",
    label: "5 - 6 Years",
    title: "Upper Kindergarten",
    intro: "A confident bridge into formal schooling.",
    copy: "The UKG experience strengthens focus, numeracy, language, and self-expression while helping children transition smoothly into primary school expectations.",
    bullets: ["School readiness", "Language confidence", "Numeracy foundations", "Expression and focus"],
    image: program4,
    color: "#A275E1", 
    bgClass: "bg-purple-50",
    nextWaveColor: "#dbeafe",
    decorations: (
      <>
        <Image src={chrismastreeother} alt="green tree" className="absolute top-24 right-10 w-24 md:w-36 opacity-70 -rotate-6" />
        <Image src={christmastree} alt="tree" className="absolute bottom-24 left-10 w-28 md:w-40 opacity-70 rotate-6" />
      </>
    ),
  },
];

/* ═══════════════════════════ PAGE COMPONENTS ═══════════════════════════ */

const ProgramDetailSection = ({ program, index }: { program: ProgramData; index: number }) => {
  const isEven = index % 2 === 0;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id={program.id}
      className={`relative w-full min-h-screen ${program.bgClass} overflow-hidden px-4 sm:px-6 lg:px-12 pt-24 pb-[160px] ${spaceMono.className}`}
    >
      {/* Absolute Decorative Assets */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {program.decorations}
      </div>

      <div ref={ref} className="relative z-10 max-w-[1400px] mx-auto grid gap-12 lg:gap-20 lg:grid-cols-[1fr_1fr] items-center mt-12">
        
        {/* TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? -40 : 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className={`flex flex-col ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
        >
          {/* Age Pill Badge (Matches Home Page Style) */}
          <div className="self-start mb-6">
            <span 
              className="inline-block text-white text-[13px] sm:text-[15px] font-bold px-4 py-1.5 rounded-full tracking-wider uppercase shadow-md"
              style={{ backgroundColor: program.color }}
            >
              {program.label}
            </span>
          </div>
          
          <h2 
            className="text-[40px] sm:text-[50px] lg:text-[60px] font-black leading-[1.1] mb-4 tracking-tight"
            style={{ color: program.color }}
          >
            {program.title}
          </h2>
          
          <h3 className="text-[20px] sm:text-[24px] font-bold text-[#1E293B] mb-4">
            {program.intro}
          </h3>
          
          <p className="text-[16px] sm:text-[18px] leading-relaxed text-[#475569] font-medium mb-8">
            {program.copy}
          </p>

          {/* Bullet Points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {program.bullets.map((bullet) => (
              <div key={bullet} className="flex items-start gap-3">
                <div 
                  className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full mt-1" 
                  style={{ backgroundColor: program.color }}
                >
                  <Check className="h-4 w-4 text-white" strokeWidth={3} />
                </div>
                <span className="text-[15px] sm:text-[16px] font-bold text-[#1E293B]">
                  {bullet}
                </span>
              </div>
            ))}
          </div>

          <div>
            <Link href={`/contact?program=${program.id}`}
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-[16px] font-extrabold uppercase tracking-wider text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ backgroundColor: program.color }}
            >
              Enquire Now <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </motion.div>

        {/* IMAGE COMPONENT (Matching Home Page float) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className={`relative w-full h-[350px] sm:h-[450px] lg:h-[550px] group ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
        >
          {/* Continuous floating animation wrapper */}
          <div className="relative w-full h-full animate-[bounce_5s_ease-in-out_infinite]">
            <Image 
              src={program.image} 
              alt={program.title} 
              fill 
              className="object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-105" 
            />
          </div>
        </motion.div>
      </div>

      <WaveBottom fill={program.nextWaveColor} />
    </section>
  );
};

/* ═══════════════════════════ MAIN PAGE ═══════════════════════════ */

export default function ProgramsPage() {
  return (
    <div className={`overflow-x-hidden ${spaceMono.className}`}>
      <Navbar />
      
      {/* Hero Intro Section (Styled like Home Page Header) */}
      <section className="relative w-full bg-sky-200 overflow-hidden px-4 sm:px-6 lg:px-12 pt-[140px] pb-[100px] text-center flex flex-col items-center">
        <div className="relative z-10 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-[#E54D35] text-[14px] sm:text-[16px] font-bold px-4 py-1.5 rounded-full mb-6 tracking-[0.15em] uppercase border-2 border-[#E54D35]">
              MotherHood Learning Journey
            </span>
            <h1 className="text-[40px] sm:text-[50px] lg:text-[70px] font-black text-[#0F172A] leading-[1.1] mb-6 tracking-tight">
              Programs designed to grow <br className="hidden sm:block" />
              <span className="text-[#E2324E]">with your child.</span>
            </h1>
            <p className="text-[16px] sm:text-[18px] leading-relaxed text-[#475569] font-bold">
              Every stage at MotherHood is carefully shaped around emotional comfort, joyful exploration, and age-appropriate development so children feel supported as they grow.
            </p>
          </motion.div>
        </div>
        
        {/* Bottom wave linking Hero to first section (Red-50) */}
        <WaveBottom fill="#FEF2F2" /> 
      </section>

      {/* Program Sections */}
      {programs.map((program, index) => (
        <ProgramDetailSection key={program.id} program={program} index={index} />
      ))}
    </div>
  );
}