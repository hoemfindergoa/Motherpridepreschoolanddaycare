"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/app/navbar/navbar";
import { 
  Heart, Sparkles, ShieldCheck, BookOpen, Users, 
  Target, Compass, Image as ImageIcon, ArrowRight 
} from "lucide-react";
import { Space_Mono } from "next/font/google";
import Link from "next/link";

// Using Space Mono to match the brutalist/typewriter aesthetic
const spaceMono = Space_Mono({ 
  subsets: ["latin"], 
  weight: ["400", "700"] 
});

import familyImage from "../../public/compressed/aboutusmain.jpg";
import classroomImage from "../../public/compressed/elementary-school-teacher-with-class.jpg.webp";
import careImage from "../../public/compressed/aboutus.jpg";
// IMPORTANT: Update this path to your actual illustration image
import aboutIllustration from "@/public/compressed/programillustration.jpg.png";

/* ═══════════════════════════ DATA ═══════════════════════════ */

const values = [
  {
    icon: Heart,
    title: "Motherly Care",
    copy: "A gentle first-school experience where emotional comfort matters just as much as learning.",
    bg: "#E54D35", // Red
  },
  {
    icon: BookOpen,
    title: "Purposeful Learning",
    copy: "Play-led exploration, language exposure, creativity, and school readiness woven into routines.",
    bg: "#F29B54", // Orange
  },
  {
    icon: ShieldCheck,
    title: "Safe Environment",
    copy: "Thoughtful supervision, caring teachers, and spaces designed to help children feel secure.",
    bg: "#75C05B", // Green
  },
  {
    icon: Users,
    title: "Family Partnership",
    copy: "We work closely with parents so each child receives continuity of care between home and school.",
    bg: "#A275E1", // Purple
  },
];

export default function AboutPage() {
  return (
    <div className={`relative overflow-x-hidden bg-[#F7F5E5] text-black ${spaceMono.className}`}>
      <Navbar />


  <div>
               {/* Faded Background Illustration */}
        <div className="absolute inset-y-0 right-0 z-0 w-full md:w-2/3 lg:w-1/2 pointer-events-none opacity-25 lg:opacity-40">
          <div 
            className="relative w-full h-[1000px]"
            style={{ maskImage: "linear-gradient(to right, transparent, black 40%)", WebkitMaskImage: "linear-gradient(to right, transparent, black 40%)" }}
          >
            <Image
              src={aboutIllustration}
              alt="Background Illustration"
              fill
              className="object-cover object-right"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
  </div>
      
      {/* ──────────────────────────────────────────────────────────────
          STANDARDIZED INNER PAGE HERO
          (Copy this section to Admissions, Contact, etc.)
      ────────────────────────────────────────────────────────────── */}
      <section className="relative z-10 w-full pt-24 pb-12 sm:pt-32 sm:pb-20 overflow-hidden">
        
 

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-[66px]">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            {/* Page Tag/Label */}
            <div className="mb-6 inline-flex items-center gap-2 bg-[#FFD7DD] border-2 border-black px-3 py-1 font-bold text-black shadow-[3px_3px_0px_#000000] text-xs uppercase tracking-widest">
              <Sparkles className="h-3 w-3" />
              Our Story
            </div>
            
            {/* Page Title */}
            <h1 className="text-[40px] sm:text-[56px] lg:text-[64px] font-black leading-[1.05] tracking-tighter uppercase mb-6">
              About <span className="text-[#E2324E]">MotherHood</span>
            </h1>
            
            {/* Page Description */}
            <p className="text-[15px] sm:text-[17px] leading-relaxed font-bold max-w-2xl bg-white/60 backdrop-blur-sm p-4 border-2 border-black shadow-[4px_4px_0px_#000000]">
              A preschool experience shaped by love, affection, and care. We believe children learn best when they feel emotionally safe, warmly welcomed, and joyfully engaged.
            </p>
          </motion.div>
        </div>
      </section>
      {/* ────────────────── END OF HERO ────────────────── */}

      {/* ──────────────────────────────────────────────────────────────
          SECTION 2 — HIGHLIGHTS
      ────────────────────────────────────────────────────────────── */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-[66px] py-12">
        <div className="mx-auto max-w-[1400px]">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid gap-6 sm:grid-cols-3 max-w-5xl mx-auto"
          >
            {[
              { label: "2-6 yrs", desc: "Thoughtfully nurtured age groups", bg: "#75C05B" },
              { label: "Play-led", desc: "Learning that feels natural and joyful", bg: "#F29B54" },
              { label: "Care+", desc: "Preschool warmth with daycare comfort", bg: "#DA5396" }
            ].map((stat, i) => (
              <div 
                key={i} 
                className="bg-white border-2 border-black p-5 shadow-[4px_4px_0px_#000000] transition-transform hover:-translate-y-1"
              >
                <div 
                  className="text-xl font-black text-black border-2 border-black py-1.5 px-3 inline-block mb-3"
                  style={{ backgroundColor: stat.bg }}
                >
                  {stat.label}
                </div>
                <p className="text-[14px] font-bold text-black uppercase tracking-widest">{stat.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────
          SECTION 3 — VISUAL SHOWCASE
      ────────────────────────────────────────────────────────────── */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-[66px] pb-24">
        <div className="mx-auto max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
              {/* Main Image */}
              <div className="relative min-h-[350px] sm:min-h-[460px] border-2 border-black shadow-[6px_6px_0px_#000000] overflow-hidden bg-white">
                <Image src={familyImage} alt="Mother and child smiling" fill className="object-cover" />
              </div>
              
              {/* Secondary Image + Promise Card */}
              <div className="grid gap-6">
                <div className="relative min-h-[200px] sm:min-h-[220px] border-2 border-black shadow-[6px_6px_0px_#000000] overflow-hidden bg-white">
                  <Image src={classroomImage} alt="Preschool classroom learning" fill className="object-cover" />
                </div>
                
                <div className="flex flex-col justify-center bg-[#E54D35] border-2 border-black shadow-[6px_6px_0px_#000000] p-6 sm:p-8">
                  <p className="bg-black text-white px-3 py-1 text-xs font-bold uppercase tracking-widest w-fit border-2 border-black mb-4">
                    Our Promise
                  </p>
                  <p className="text-[24px] sm:text-[30px] font-black leading-tight text-white tracking-tighter">
                    Where Montessori-inspired learning meets motherly reassurance.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────
          SECTION 4 — CORE VALUES
      ────────────────────────────────────────────────────────────── */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-[66px] py-24 bg-[#A275E1] border-y-2 border-black">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-14 text-center">
            <h2 className="text-[36px] sm:text-[44px] font-black text-black leading-tight tracking-tighter uppercase bg-white border-2 border-black px-6 py-3 shadow-[6px_6px_0px_#000000] inline-block -rotate-1">
              Pillars of our Philosophy
            </h2>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white border-2 border-black p-6 shadow-[6px_6px_0px_#000000] transition-transform hover:-translate-y-1"
              >
                <div 
                  className="mb-5 flex h-12 w-12 items-center justify-center border-2 border-black text-black shadow-[3px_3px_0px_#000000]"
                  style={{ backgroundColor: value.bg }}
                >
                  <value.icon className="h-6 w-6 stroke-2" />
                </div>
                <h3 className="text-[18px] font-black text-black tracking-tight mb-2 uppercase">{value.title}</h3>
                <p className="text-[14px] font-bold leading-relaxed text-black">{value.copy}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────
          SECTION 5 — OUR APPROACH
      ────────────────────────────────────────────────────────────── */}
      <section className="relative z-10 bg-white px-4 sm:px-6 lg:px-[66px] py-24 border-b-2 border-black">
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-center">
          
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative min-h-[400px] sm:min-h-[500px] border-2 border-black shadow-[8px_8px_0px_#000000]"
          >
            <Image src={careImage} alt="Caring preschool environment" fill className="object-cover" />
            <div className="absolute bottom-4 left-4 right-4 bg-white border-2 border-black p-4 shadow-[4px_4px_0px_#000000]">
              <p className="bg-black text-white px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest w-fit border-2 border-black mb-2">
                Why Families Connect
              </p>
              <p className="text-[14px] sm:text-[15px] font-black leading-snug text-black uppercase">
                Because a child's first school should feel nurturing, beautiful, and comforting.
              </p>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 mb-6 bg-[#F29B54] border-2 border-black px-3 py-1 shadow-[3px_3px_0px_#000000]">
              <p className="text-xs font-bold uppercase tracking-widest text-black">Our Approach</p>
            </div>
            
            <h2 className="text-[32px] sm:text-[40px] font-black leading-[1.1] text-black tracking-tighter uppercase mb-6">
              We don't just prepare children for school. <br />
              <span className="text-[#DA5396]">We prepare them to feel confident.</span>
            </h2>
            
            <div className="space-y-5 text-[15px] font-bold leading-relaxed text-black">
              <p>
                At MotherHood, routines are intentional, transitions are gentle, and every classroom interaction is designed to build belonging. Children are encouraged to speak, move, imagine, create, and discover at their own pace.
              </p>
              
              <div className="grid grid-cols-2 gap-4 py-2">
                <div className="flex items-center gap-3 bg-[#F7F5E5] border-2 border-black px-4 py-3 shadow-[3px_3px_0px_#000000]">
                  <Compass className="w-5 h-5 text-[#E54D35] stroke-2" />
                  <span className="text-[13px] font-black text-black uppercase tracking-wider">Self-Discovery</span>
                </div>
                <div className="flex items-center gap-3 bg-[#F7F5E5] border-2 border-black px-4 py-3 shadow-[3px_3px_0px_#000000]">
                  <Target className="w-5 h-5 text-[#75C05B] stroke-2" />
                  <span className="text-[13px] font-black text-black uppercase tracking-wider">Motor Skills</span>
                </div>
              </div>
              
              <p>
                The result is a preschool and daycare environment that feels elevated and warm at the same time: structured enough for growth, tender enough for trust.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────
          SECTION 6 — GALLERY PLACEHOLDER 
      ────────────────────────────────────────────────────────────── */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-[66px] py-24 bg-[#75C05B] border-b-2 border-black">
        <div className="mx-auto max-w-4xl text-center">
           <div className="mb-10">
             <h2 className="text-[36px] sm:text-[46px] font-black text-white leading-tight tracking-tighter uppercase shadow-black drop-shadow-[3px_3px_0px_rgba(0,0,0,1)]">
               Glimpses of Joy
             </h2>
             <p className="mt-4 text-[14px] text-black font-bold uppercase tracking-widest bg-white border-2 border-black px-4 py-2 inline-block shadow-[4px_4px_0px_#000000] rotate-1">
               A sneak peek into daily adventures.
             </p>
           </div>
           
           <div className="w-full bg-white border-2 border-black border-dashed p-10 sm:p-16 shadow-[8px_8px_0px_#000000]">
              <div className="mx-auto flex h-16 w-16 items-center justify-center border-2 border-black bg-[#DA5396] text-black shadow-[4px_4px_0px_#000000] mb-5 -rotate-3">
                 <ImageIcon className="h-8 w-8 stroke-2" />
              </div>
              <h3 className="text-[24px] font-black text-black mb-3 uppercase tracking-tighter">Gallery Coming Soon</h3>
              <p className="text-black max-w-md mx-auto font-bold text-[14px] leading-relaxed">
                We are curating a beautiful collection of photos showcasing our campus, classrooms, and the joyful moments of our little learners. Check back shortly!
              </p>
           </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────
          SECTION 7 — CTA
      ────────────────────────────────────────────────────────────── */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-[66px] py-24 bg-[#F7F5E5]">
        <div className="mx-auto max-w-4xl">
          <motion.div 
            whileHover={{ y: -5, x: -5 }}
            className="bg-[#E2324E] border-2 border-black p-10 sm:p-14 text-center shadow-[10px_10px_0px_#000000] transition-transform"
          >
            <h2 className="text-[32px] sm:text-[44px] font-black text-white uppercase tracking-tighter leading-tight drop-shadow-[3px_3px_0px_rgba(0,0,0,1)]">
              Experience the <br className="hidden sm:block" /> warmth firsthand.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[15px] font-bold text-black bg-white border-2 border-black p-3 shadow-[4px_4px_0px_#000000]">
              Choosing a preschool is a big step. Visit our campus, meet our educators, and see how we make learning feel like home.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/admission" className="inline-flex items-center gap-2 bg-[#F29B54] border-2 border-black px-6 py-3 text-[14px] font-black uppercase tracking-widest text-black transition-transform hover:-translate-y-1 hover:-translate-x-1 shadow-[4px_4px_0px_#000000] active:shadow-none active:translate-y-[4px] active:translate-x-[4px]">
                Start Admission
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white border-2 border-black px-6 py-3 text-[14px] font-black uppercase tracking-widest text-black transition-transform hover:-translate-y-1 hover:-translate-x-1 shadow-[4px_4px_0px_#000000] active:shadow-none active:translate-y-[4px] active:translate-x-[4px]">
                Book a Visit <ArrowRight className="h-4 w-4 stroke-[3px]" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}