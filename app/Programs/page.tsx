"use client";

import React, { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { Fredoka, Nunito } from "next/font/google";

import playgroupImage from "../../public/compressed/young-boy-girl-playing-indoors-with-eco-toys.jpg.webp";
import nurseryImage from "../../public/compressed/young-girl-sitting-table-drawing-colorful-picture-with-crayons.jpg.webp";
import lkgImage from "../../public/compressed/young-child-is-thoughtfully-engaged-with-abacus-suggesting-learning-play-environment.jpg.webp";
import ukgImage from "../../public/compressed/elementary-school-teacher-with-class.jpg.webp";
import daycareImage from "../../public/compressed/happy-family-home-mother-lifting-air-little-toddler-child-daughter-mom-baby-girl-playing-h.jpg.webp";

const headingFont = Fredoka({ subsets: ["latin"], weight: ["600"] });
const bodyFont = Nunito({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

/* ═══════════════════════════ DOODLE LIBRARY ═══════════════════════════ */

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

function WaveBottom({ fill }: { fill: string }) {
  return (
    <div className="pointer-events-none absolute -bottom-px left-0 z-10 w-full overflow-hidden leading-none">
      <svg className="block h-[40px] w-full md:h-[60px]" viewBox="0 0 1440 110" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 40C120 5 240 75 360 50C480 25 600 75 720 50C840 25 960 75 1080 50C1200 25 1320 75 1440 50V110H0V40Z" fill={fill} />
      </svg>
    </div>
  );
}

function SectionLabel({ text, color = "#e83d59" }: { text: string; color?: string }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <DoodleSquiggle width={28} color={color} opacity={0.9} />
      <p className="text-sm font-extrabold uppercase tracking-[0.22em]" style={{ color }}>{text}</p>
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
  bgGradient: string;
  nextBg: string;
  shadow: string;
}

const programs: ProgramData[] = [
  {
    id: "playgroup",
    label: "2 - 3 Years",
    title: "Play Group",
    intro: "A loving first step into school life.",
    copy: "This program focuses on settling, sensory discovery, movement, music, social comfort, and joyful routines that help children feel at ease away from home.",
    bullets: ["Comfort-led settling", "Sensory play", "Music and rhythm", "Early social confidence"],
    image: playgroupImage,
    color: "#e83d59", // Rose
    bgGradient: "linear-gradient(160deg, #fffaf7 0%, #fff5ee 100%)",
    nextBg: "#f0f7ff",
    shadow: "rgba(232,61,89,0.08)",
  },
  {
    id: "nursery",
    label: "3 - 4 Years",
    title: "Nursery",
    intro: "A bright, hands-on learning space.",
    copy: "Children begin recognizing patterns, sounds, colors, numbers, and routines through activities designed to make learning feel playful and deeply engaging.",
    bullets: ["Phonics readiness", "Creative expression", "Group participation", "Confidence building"],
    image: nurseryImage,
    color: "#0ea5e9", // Sky Blue
    bgGradient: "linear-gradient(160deg, #f0f7ff 0%, #e6f0fa 100%)",
    nextBg: "#f8f4ff",
    shadow: "rgba(14,165,233,0.08)",
  },
  {
    id: "lkg",
    label: "4 - 5 Years",
    title: "Lower Kindergarten",
    intro: "Academics grow alongside imagination.",
    copy: "Children explore language, numbers, storytelling, art, and classroom independence with structured support that still feels warm and child-centered.",
    bullets: ["Early reading readiness", "Conceptual learning", "Creative thinking", "Independent habits"],
    image: lkgImage,
    color: "#8b5cf6", // Violet
    bgGradient: "linear-gradient(160deg, #f8f4ff 0%, #f0eaff 100%)",
    nextBg: "#ecfdf5",
    shadow: "rgba(139,92,246,0.08)",
  },
  {
    id: "ukg",
    label: "5 - 6 Years",
    title: "Upper Kindergarten",
    intro: "A confident bridge into formal schooling.",
    copy: "The UKG experience strengthens focus, numeracy, language, and self-expression while helping children transition smoothly into primary school expectations.",
    bullets: ["School readiness", "Language confidence", "Numeracy foundations", "Expression and focus"],
    image: ukgImage,
    color: "#10b981", // Emerald
    bgGradient: "linear-gradient(160deg, #ecfdf5 0%, #e0f8eb 100%)",
    nextBg: "#fffcf0",
    shadow: "rgba(16,185,129,0.08)",
  },
  {
    id: "daycare",
    label: "1 - 6 Years",
    title: "Daycare",
    intro: "A safe, soothing extension of home.",
    copy: "Our daycare model offers emotional reassurance, rest time, guided play, and mindful care so children feel comfortable and parents feel peaceful.",
    bullets: ["Comfort and supervision", "Routine and rest", "Safe engagement", "Parent peace of mind"],
    image: daycareImage,
    color: "#f59e0b", // Amber
    bgGradient: "linear-gradient(160deg, #fffcf0 0%, #fff4dd 100%)",
    nextBg: "#ffffff", // Transitions to white for the footer
    shadow: "rgba(245,158,11,0.08)",
  },
];

/* ═══════════════════════════ COMPONENTS ═══════════════════════════ */

const ProgramSection = ({ program, index }: { program: ProgramData; index: number }) => {
  const isEven = index % 2 === 0;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id={program.id}
      className="relative overflow-hidden px-6 py-24 md:px-10 lg:px-16"
      style={{ background: program.bgGradient }}
    >
      {/* Background Doodles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {isEven ? (
          <>
            <div className="absolute top-10 left-10 rotate-12"><DoodleHeart size={50} color={program.color} opacity={0.2} /></div>
            <div className="absolute bottom-20 right-[10%]"><DoodleFlower size={60} color={program.color} opacity={0.15} /></div>
          </>
        ) : (
          <>
            <div className="absolute top-20 right-[15%] -rotate-6"><DoodleStar size={45} color={program.color} opacity={0.2} /></div>
            <div className="absolute bottom-10 left-[5%]"><DoodleSquiggle width={100} color={program.color} opacity={0.2} /></div>
          </>
        )}
      </div>

      <div ref={ref} className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
        
        {/* TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? -40 : 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className={`flex flex-col rounded-[44px] bg-white/70 p-8 shadow-xl backdrop-blur-sm md:p-12 lg:p-14 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
          style={{ boxShadow: `0 16px 56px ${program.shadow}` }}
        >
          <SectionLabel text={program.label} color={program.color} />
          
          <h2 className={`text-4xl leading-tight text-slate-800 md:text-5xl lg:text-6xl ${headingFont.className}`}>
            {program.title}
          </h2>
          <p className="mt-4 text-xl font-bold" style={{ color: program.color }}>
            {program.intro}
          </p>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            {program.copy}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {program.bullets.map((bullet) => (
              <span 
                key={bullet}
                className="inline-flex items-center gap-2 rounded-full bg-white/90 px-5 py-2.5 text-sm font-bold text-slate-700 shadow-sm"
              >
                <div className="flex h-5 w-5 items-center justify-center rounded-full" style={{ backgroundColor: program.color }}>
                  <Check className="h-3 w-3 text-white" />
                </div>
                {bullet}
              </span>
            ))}
          </div>

          <div className="mt-10">
            <Link href={`/contact?program=${program.id}`}
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-extrabold uppercase tracking-[0.14em] text-white transition-all hover:-translate-y-1 hover:shadow-lg"
              style={{ backgroundColor: program.color, boxShadow: `0 8px 24px ${program.shadow.replace('0.08', '0.35')}` }}
            >
              Enquire Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>

        {/* IMAGE COMPONENT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className={`relative overflow-hidden rounded-[42px] p-3.5 shadow-2xl ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
          style={{ background: "rgba(255,255,255,0.6)" }}
        >
          <div className="relative min-h-[400px] w-full overflow-hidden rounded-[32px] md:min-h-[500px]">
            <Image src={program.image} alt={program.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
            
            {/* Floating Badge */}
            <div className={`absolute ${isEven ? 'left-5 top-5' : 'right-5 top-5'} flex items-center gap-2 rounded-full bg-white/85 px-4 py-2 shadow-md backdrop-blur-sm`}>
              {isEven ? <DoodleHeart size={18} color={program.color} opacity={1} /> : <DoodleStar size={18} color={program.color} opacity={1} />}
              <span className="text-xs font-extrabold uppercase tracking-widest" style={{ color: program.color }}>
                {program.title}
              </span>
            </div>
            
            {/* Decorative Overlay Doodle */}
            <div className={`absolute ${isEven ? 'bottom-5 right-5' : 'bottom-5 left-5'} opacity-75`}>
              <DoodleFlower size={42} color="#ffffff" opacity={0.8} />
            </div>
          </div>
        </motion.div>
      </div>

      <WaveBottom fill={program.nextBg} />
    </section>
  );
};

/* ═══════════════════════════ MAIN PAGE ═══════════════════════════ */

export default function ProgramsPage() {
  return (
    <div className={`overflow-x-hidden text-slate-800 ${bodyFont.className}`}>
      
      {/* Hero Intro Section */}
      <section className="bg-[#fffaf7] px-6 pb-12 pt-32 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white px-4 py-2 text-sm font-bold text-amber-600 shadow-sm">
              <Sparkles className="h-4 w-4" />
              MotherHood Learning Journey
            </div>
            <h1 className={`mt-6 text-5xl leading-[1.05] text-slate-900 sm:text-6xl lg:text-7xl ${headingFont.className}`}>
              Programs designed to grow
              <span className="block text-[#e83d59]">with your child.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
              Every stage at MotherHood is carefully shaped around emotional comfort, joyful exploration, and age-appropriate development so children feel supported as they grow.
            </p>
          </div>
        </div>
      </section>

      {/* Program Sections */}
      {programs.map((program, index) => (
        <ProgramSection key={program.id} program={program} index={index} />
      ))}
    </div>
  );
}