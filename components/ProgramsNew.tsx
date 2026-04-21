"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Fredoka, Nunito } from "next/font/google";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

// Make sure your image paths are correct for your project structure
import boywithcup from "@/public/compressed/happy-family-home-mother-lifting-air-little-toddler-child-daughter-mom-baby-girl-playing-h.jpg.webp"
import girlwithbook from "@/public/compressed/heartfelt-moment-mother-embracing-her-newborn-baby-with-pure-love-joy.jpg.webp";
import boywithelephant from "@/public/compressed/maternal-love-mother-baby-white-background.jpg.webp";
import girlonswing from "@/public/compressed/mother-baby.jpg.webp";
import daycareImage from "@/public/compressed/young-boy-girl-playing-indoors-with-eco-toys.jpg.webp";

const headingFont = Fredoka({ subsets: ["latin"], weight: ["600"] });
const bodyFont = Nunito({ subsets: ["latin"], weight: ["400", "600", "700", "800"] });

/* ═══════════════════════════ DOODLE LIBRARY ═══════════════════════════ */
// Reusing your doodle library so the cards match the main page perfectly

function DoodleHeart({ size = 48, color = "#e83d59", opacity = 0.55 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M24 40s-16-10-16-22a8 8 0 0 1 16 0 8 8 0 0 1 16 0c0 12-16 22-16 22Z"
        stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity={opacity} />
    </svg>
  );
}

function DoodleStar({ size = 34, color = "#f29b54", opacity = 0.6 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <path d="M18 4l2.9 8.7H30l-7.4 5.3 2.8 8.7L18 21.4l-7.4 5.3 2.8-8.7L6 13h9.1Z"
        stroke={color} strokeWidth="2.5" strokeLinejoin="round" opacity={opacity} />
    </svg>
  );
}

function DoodleFlower({ size = 56, color = "#e83d59", opacity = 0.5 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" aria-hidden="true">
      <circle cx="28" cy="28" r="6" stroke={color} strokeWidth="2.5" opacity={opacity} />
      {[0, 60, 120, 180, 240, 300].map((deg, i) => {
        const r = (deg * Math.PI) / 180;
        const cx = 28 + 13 * Math.cos(r);
        const cy = 28 + 13 * Math.sin(r);
        return (
          <ellipse key={i} cx={cx} cy={cy} rx="5" ry="7.5"
            transform={`rotate(${deg + 90},${cx},${cy})`}
            stroke={color} strokeWidth="2.5" opacity={opacity} />
        );
      })}
    </svg>
  );
}

function DoodleSquiggle({ width = 80, color = "#e83d59", opacity = 0.4 }) {
  return (
    <svg width={width} height="22" viewBox={`0 0 ${width} 22`} fill="none" aria-hidden="true">
      <path
        d={`M4 11 Q${width * 0.15} 3 ${width * 0.3} 11 Q${width * 0.45} 19 ${width * 0.6} 11 Q${width * 0.75} 3 ${width} 11`}
        stroke={color} strokeWidth="2.8" strokeLinecap="round" fill="none" opacity={opacity}
      />
    </svg>
  );
}

/* ═══════════════════════════ DATA ═══════════════════════════ */

interface Program {
  id: number;
  title: string;
  ageRange: string;
  description: string;
  image: StaticImageData;
  linkId: string;
  color: string;
  shadow: string;
  doodle: React.ReactNode;
}

const programs: Program[] = [
  {
    id: 1,
    title: "Play Group",
    ageRange: "2-3 Years",
    description: "A joyful beginning filled with sensory play, comfort, and gentle social discovery.",
    image: boywithcup,
    linkId: "playgroup",
    color: "#e83d59", // Rose
    shadow: "rgba(232,61,89,0.12)",
    doodle: <DoodleHeart size={32} color="#e83d59" opacity={0.9} />,
  },
  {
    id: 2,
    title: "Nursery",
    ageRange: "3-4 Years",
    description: "Exploring colours, sounds, numbers, and letters through hands-on discovery.",
    image: girlwithbook,
    linkId: "nursery",
    color: "#f29b54", // Orange
    shadow: "rgba(242,155,84,0.12)",
    doodle: <DoodleStar size={28} color="#f29b54" opacity={0.9} />,
  },
  {
    id: 3,
    title: "Lower Kindergarten",
    ageRange: "4-5 Years",
    description: "Building confidence, expression, and early academic readiness in a warm setting.",
    image: boywithelephant,
    linkId: "lkg",
    color: "#a78bfa", // Purple
    shadow: "rgba(167,139,250,0.12)",
    doodle: <DoodleFlower size={32} color="#a78bfa" opacity={0.9} />,
  },
  {
    id: 4,
    title: "Upper Kindergarten",
    ageRange: "5-6 Years",
    description: "Preparing children for formal schooling with confidence, clarity, and independence.",
    image: girlonswing,
    linkId: "ukg",
    color: "#60c5a8", // Teal
    shadow: "rgba(96,197,168,0.12)",
    doodle: <DoodleStar size={28} color="#60c5a8" opacity={0.9} />,
  }
];

/* ═══════════════════════════ COMPONENTS ═══════════════════════════ */

function SectionLabel({ text, color = "#e83d59" }: { text: string; color?: string }) {
  return (
    <div className="flex items-center justify-center gap-2 mb-4">
      <DoodleSquiggle width={28} color={color} opacity={0.9} />
      <p className="text-sm font-extrabold uppercase tracking-[0.22em]" style={{ color }}>{text}</p>
      <DoodleSquiggle width={28} color={color} opacity={0.9} />
    </div>
  );
}

const ProgramCard = ({ program, index }: { program: Program; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col rounded-[44px] bg-white/70 p-4 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white/90"
      style={{ boxShadow: `0 16px 56px ${program.shadow}` }}
    >
      {/* Image Container */}
      <div className="relative mb-6 h-56 w-full overflow-hidden rounded-[32px]">
        <div className="absolute inset-0 z-10 bg-black/5 transition-opacity duration-300 group-hover:opacity-0" />
        <Image 
          src={program.image} 
          alt={program.title} 
          fill 
          className="object-cover transition-transform duration-700 group-hover:scale-105" 
        />
        
        {/* Floating Age Pill */}
        <div className="absolute left-4 top-4 z-20 flex items-center gap-1.5 rounded-full bg-white/90 px-3.5 py-1.5 shadow-sm backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: program.color }} />
          <span className="text-xs font-bold tracking-wide text-slate-700">{program.ageRange}</span>
        </div>

        {/* Decorative Doodle in corner */}
        <div className="absolute -bottom-2 -right-2 z-20 rotate-12 opacity-80 transition-transform duration-300 group-hover:rotate-0 group-hover:scale-110">
          <div className="rounded-full bg-white/80 p-3 shadow-sm backdrop-blur-md">
            {program.doodle}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col px-4 pb-4">
        <h3 className={`mb-3 text-3xl text-slate-800 ${headingFont.className}`}>
          {program.title}
        </h3>
        
        <p className="mb-8 flex-1 text-base leading-relaxed text-slate-500">
          {program.description}
        </p>

        {/* Action Link */}
        <Link 
          href={`/Programs#${program.linkId}`}
          className="inline-flex w-fit items-center gap-2 rounded-full px-6 py-3 text-sm font-extrabold uppercase tracking-[0.14em] text-white transition-all hover:-translate-y-1"
          style={{ backgroundColor: program.color, boxShadow: `0 8px 24px ${program.shadow.replace('0.12', '0.35')}` }}
        >
          Explore <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
};

export default function ProgramsSection() {
  return (
    <section
      id="programs"
      className={`relative overflow-hidden px-6 py-28 md:px-10 lg:px-16 ${bodyFont.className}`}
      style={{ background: "linear-gradient(160deg, #f8fbff 0%, #fffaf7 100%)" }} 
    >
      {/* Background Doodles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-12 left-10 rotate-12"><DoodleFlower size={60} color="#f29b54" opacity={0.2} /></div>
        <div className="absolute top-20 right-[15%] -rotate-6"><DoodleHeart size={50} color="#a78bfa" opacity={0.25} /></div>
        <div className="absolute top-1/3 left-[5%]"><DoodleStar size={40} color="#60c5a8" opacity={0.3} /></div>
        <div className="absolute bottom-20 right-[5%] rotate-12"><DoodleFlower size={45} color="#e83d59" opacity={0.2} /></div>
        <div className="absolute bottom-10 left-[20%]"><DoodleSquiggle width={100} color="#3b6ca8" opacity={0.15} /></div>
      </div>

      <div className="relative z-10  md:mx-[100px]">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel text="Our Learning Pathways" color="#a78bfa" />
            
            <h2 className={`mb-6 mt-4 text-5xl leading-tight text-slate-800 md:text-6xl ${headingFont.className}`}>
              Where every child finds <br className="hidden md:block" />
              <span className="text-[#a78bfa]">their rhythm.</span>
            </h2>

            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-500">
              Thoughtfully designed programs that grow with your child from their first gentle steps to confident school readiness.
            </p>
          </motion.div>
        </div>

        {/* Masonry-ish Grid Layout for 5 items */}
        {/* Uses 3 columns on large screens. The last 2 items center themselves beautifully. */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {programs.map((program, index) => (
            <div 
              key={program.id} 
              className={index === 4 ? "lg:col-start-1 lg:ml-auto lg:w-[calc(100%-1rem)]" : index === 4 ? "lg:col-start-2 lg:mr-auto lg:w-[calc(100%-1rem)]" : ""}
            >
              <ProgramCard program={program} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}