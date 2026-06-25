"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, HeartHandshake, Sparkles, BookHeart, School, Smile, ArrowRight } from "lucide-react";
import { Space_Mono } from "next/font/google";
import Navbar from "@/app/navbar/navbar";

// Original Section Images
import safetyImage from "../../public/compressed/young-european-female-with-daugheters-posing-isolated-white-surface.jpg.webp";
import affectionImage from "../../public/compressed/young-beautiful-darkhaired-mother-holds-her-newborn-daughter-her-arms-cozy-home-family-portrait-motherhood-young-woman-kisses-her-2-month-old-baby.jpg.webp";
import learningImage from "../../public/compressed/young-child-is-thoughtfully-engaged-with-abacus-suggesting-learning-play-environment.jpg.webp";

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

/* ═══════════════════════ COMPONENTS ═══════════════════════ */

function WaveBottom({ fill }: { fill: string }) {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0 pointer-events-none">
      <svg
        className="relative block w-full h-[50px] sm:h-[90px] lg:h-[130px]"
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

/* ═══════════════════════ DATA ═══════════════════════ */

const reasons = [
  {
    icon: HeartHandshake,
    title: "Emotionally Nurturing",
    color: "#E54D35", // Red
  },
  {
    icon: ShieldCheck,
    title: "Safe & Supported",
    color: "#3B82F6", // Blue
  },
  {
    icon: BookHeart,
    title: "Learning With Joy",
    color: "#F59E0B", // Amber
  },
  {
    icon: School,
    title: "School Readiness",
    color: "#75C05B", // Green
  },
  {
    icon: Smile,
    title: "Parent Partnership",
    color: "#A275E1", // Purple
  },
];

/* ═══════════════════════════ PAGE ═══════════════════════════════ */

export default function WhyUsPage() {
  return (
    <div className={`overflow-x-hidden text-[#0F172A] ${spaceMono.className}`}>
      <Navbar />

      {/* ─────────────────────────────────────────────────────────────
          HERO — image mosaic + headline
      ───────────────────────────────────────────────────────────── */}
      <section className="relative w-full min-h-screen bg-amber-200 overflow-hidden px-4 sm:px-6 lg:px-12 pt-[120px] md:pt-[160px] pb-[140px] md:pb-[180px]">
        {/* Floating Background Assets - Adjusted for mobile visibility */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <Image src={clouds} alt="clouds" className="absolute top-24 md:top-20 right-[-20px] md:right-10 w-24 md:w-48 opacity-80 animate-pulse" />
          <Image src={flower} alt="flower" className="absolute bottom-32 md:bottom-32 left-[-10px] md:left-10 w-16 md:w-32 opacity-80 animate-[spin_15s_linear_infinite]" />
          {/* Balloon moved to right on mobile so it doesn't overlap title */}
          <Image src={balloon} alt="balloon" className="absolute top-36 md:top-40 right-4 md:right-auto md:left-[45%] w-12 md:w-24 opacity-90 animate-bounce" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto grid gap-10 md:gap-12 lg:grid-cols-[1fr_1fr] items-center">
          
          {/* LEFT — headline */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}
            <div className="mb-4 md:mb-6 inline-flex items-center gap-2 rounded-full border-2 border-[#E54D35] bg-white px-4 py-1.5 md:px-5 md:py-2 shadow-sm">
              <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-[#E54D35]" />
              <span className="text-[12px] sm:text-[14px] md:text-[16px] font-bold uppercase tracking-[0.15em] text-[#E54D35]">
                Why MotherHood
              </span>
            </div>

            <h1 className="text-[38px] sm:text-[50px] lg:text-[75px] font-black leading-[1.05] tracking-tight mb-6 md:mb-8">
              The feeling<br />your child<br />
              <span className="text-[#F59E0B]">carries home.</span>
            </h1>

            {/* Highlight pill strip */}
            <div className="mt-6 md:mt-8 flex flex-wrap gap-2.5 md:gap-4">
              {["Safety", "Affection", "Confidence", "Joy"].map((word, i) => {
                const colors = ["#E54D35", "#F59E0B", "#3B82F6", "#75C05B"];
                return (
                  <span key={word}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 md:px-6 md:py-3 text-[13px] sm:text-[15px] md:text-[17px] font-bold shadow-md transition-transform hover:-translate-y-1"
                    style={{ color: colors[i] }}
                  >
                    <span className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full" style={{ backgroundColor: colors[i] }}></span>
                    {word}
                  </span>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT — image mosaic */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-3 md:gap-4 lg:gap-6 relative mt-6 md:mt-0"
          >
            {/* Tall left image */}
            <div className="row-span-2 relative overflow-hidden rounded-[24px] md:rounded-[32px] sm:rounded-[40px] drop-shadow-2xl h-[240px] sm:h-[350px] lg:h-[500px]">
              <Image src={safetyImage} alt="Happy child and parent" fill className="object-cover" />
            </div>

            {/* Top-right image */}
            <div className="relative overflow-hidden rounded-[24px] md:rounded-[32px] sm:rounded-[40px] drop-shadow-xl h-[115px] sm:h-[165px] lg:h-[240px]">
              <Image src={affectionImage} alt="Motherly affection" fill className="object-cover" />
            </div>

            {/* Bottom-right stat card (Solid colors, no glass) */}
            <div className="flex flex-col justify-center rounded-[24px] md:rounded-[32px] sm:rounded-[40px] bg-[#E54D35] p-4 sm:p-6 md:p-8 drop-shadow-xl h-[115px] sm:h-[165px] lg:h-[240px]">
              <p className="text-[14px] sm:text-[18px] lg:text-[26px] font-bold text-white leading-tight">
                Premium quality with the softness of home.
              </p>
            </div>
          </motion.div>
        </div>

        <WaveBottom fill="#EFF6FF" /> {/* Transitions to blue-50 */}
      </section>

      {/* ─────────────────────────────────────────────────────────────
          REASONS — icon cards 
      ───────────────────────────────────────────────────────────── */}
      <section className="relative w-full min-h-screen bg-blue-50 overflow-hidden px-4 sm:px-6 lg:px-12 pt-20 md:pt-24 pb-[140px] md:pb-[160px]">
        {/* Floating Background Assets */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <Image src={Moon} alt="moon" className="absolute top-10 md:top-16 left-[-10px] md:left-[10%] w-16 md:w-28 opacity-80" />
          <Image src={jupiter} alt="jupiter" className="absolute bottom-28 md:bottom-24 right-[-10px] md:right-[8%] w-20 md:w-36 opacity-80 animate-[spin_20s_linear_infinite]" />
          <Image src={chrismastreeother} alt="tree" className="absolute top-28 md:top-40 right-[-15px] md:right-[15%] w-16 md:w-24 opacity-60 -rotate-12" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto">
          <div className="mb-12 md:mb-16 flex flex-col items-center text-center px-2">
            <span className="inline-block text-[#3B82F6] text-[12px] sm:text-[14px] md:text-[16px] font-bold px-4 py-1.5 rounded-full mb-3 md:mb-4 tracking-[0.15em] uppercase border-2 border-[#3B82F6]">
              What Makes Us Different
            </span>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[60px] font-black leading-[1.1] tracking-tight text-[#0F172A]">
              Five things families <br className="hidden sm:block" />
              <span className="text-[#3B82F6]">feel every day.</span>
            </h2>
          </div>

          <div className="grid gap-4 sm:gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                className="group flex flex-col items-center text-center bg-white rounded-[24px] md:rounded-[32px] p-6 sm:p-8 md:p-10 drop-shadow-xl hover:-translate-y-2 transition-transform duration-300 border-b-[6px] md:border-b-8"
                style={{ borderColor: reason.color }}
              >
                <div 
                  className="flex h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 items-center justify-center rounded-full mb-4 md:mb-6 transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundColor: reason.color }}
                >
                  <reason.icon className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-[18px] sm:text-[22px] md:text-[26px] font-bold text-[#1E293B] leading-tight">
                  {reason.title}
                </h3>
              </motion.div>
            ))}

            {/* 6th card — CTA / emotional closer */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 5 * 0.1, duration: 0.5, ease: "easeOut" }}
              className="flex flex-col items-center justify-center text-center rounded-[24px] md:rounded-[32px] p-6 sm:p-8 md:p-10 drop-shadow-xl border-b-[6px] md:border-b-8 border-[#1E293B]"
              style={{ backgroundColor: "#E54D35" }} // Solid red CTA
            >
              <h3 className="text-[20px] sm:text-[24px] md:text-[28px] font-bold text-white leading-tight mb-6 md:mb-8">
                Come feel the difference for yourself.
              </h3>
              <a href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 md:px-8 md:py-4 text-[14px] md:text-[16px] font-extrabold uppercase tracking-wider text-[#E54D35] transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                Book A Visit <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
              </a>
            </motion.div>
          </div>
        </div>

        <WaveBottom fill="#F0FDF4" /> {/* Transitions to green-50 */}
      </section>

      {/* ─────────────────────────────────────────────────────────────
          CLOSING — image + short statement
      ───────────────────────────────────────────────────────────── */}
      <section className="relative w-full min-h-screen bg-green-50 overflow-hidden px-4 sm:px-6 lg:px-12 pt-16 md:pt-24 pb-[140px] md:pb-[160px]">
        {/* Floating Background Assets */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {/* Deer placed in bottom-left padding area so the white card doesn't hide it on mobile */}
          <Image src={dear} alt="dear" className="absolute bottom-12 md:bottom-24 left-2 md:left-[5%] w-24 md:w-48 opacity-90 z-0" />
          {/* Tree placed in top-right padding area */}
          <Image src={christmastree} alt="tree" className="absolute top-6 md:top-20 right-[-10px] md:right-[5%] w-20 md:w-36 opacity-80 rotate-6 z-0" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto mt-12 md:mt-0">
          <div className="overflow-hidden rounded-[32px] lg:rounded-[50px] bg-white drop-shadow-2xl flex flex-col lg:grid lg:grid-cols-[1fr_1fr] lg:items-stretch">

            {/* Left — text */}
            <div className="p-6 sm:p-10 lg:p-20 flex flex-col justify-center order-2 lg:order-1">
              <span className="self-start inline-block text-[#75C05B] text-[12px] sm:text-[14px] md:text-[16px] font-bold px-4 py-1.5 rounded-full mb-4 md:mb-6 tracking-[0.15em] uppercase border-2 border-[#75C05B]">
                The MotherHood Experience
              </span>
              <h2 className="text-[32px] sm:text-[40px] lg:text-[55px] font-black leading-[1.1] tracking-tight text-[#0F172A] mb-8 md:mb-10">
                Where confidence grows <br className="hidden sm:block" />
                <span className="text-[#75C05B]">through comfort.</span>
              </h2>

              {/* 3 visual bullets - Solid rounded pill style */}
              <div className="flex flex-col gap-3 md:gap-5">
                {[
                  { color: "#E54D35", text: "Emotionally secure, seen as individuals" },
                  { color: "#75C05B", text: "Warm interactions & purposeful learning" },
                  { color: "#F59E0B", text: "Excited to come back the next day" },
                ].map(({ color, text }) => (
                  <div key={text} className="flex items-center gap-3 md:gap-4 rounded-full bg-slate-50 px-4 py-3 md:px-6 md:py-4 border-2 border-slate-100">
                    <div className="w-3 h-3 md:w-4 md:h-4 rounded-full flex-shrink-0" style={{ backgroundColor: color }}></div>
                    <span className="text-[13px] sm:text-[15px] md:text-[17px] font-bold text-[#1E293B]">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — image with continuous float animation */}
            <div className="relative h-[300px] sm:h-[400px] lg:h-auto w-full p-4 sm:p-6 md:p-8 order-1 lg:order-2">
              <div className="relative w-full h-full rounded-[24px] lg:rounded-[40px] overflow-hidden drop-shadow-xl md:drop-shadow-2xl animate-[bounce_6s_ease-in-out_infinite]">
                <Image src={learningImage} alt="Learning with joy" fill className="object-cover" />
                
                {/* Floating Badge instead of glassmorphism block */}
                <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 lg:left-10 lg:right-10 flex items-center justify-center gap-2 md:gap-3 rounded-full bg-white px-4 py-3 md:px-6 md:py-4 shadow-xl">
                  <HeartHandshake className="h-5 w-5 md:h-6 md:w-6 text-[#75C05B]" />
                  <p className="text-[13px] sm:text-[16px] md:text-[20px] font-bold text-[#0F172A] truncate">
                    Every child, seen and celebrated.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        <WaveBottom fill="#dbeafe" /> {/* Final transition to presumed footer */}
      </section>
    </div>
  );
}