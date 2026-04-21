"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { ShieldCheck, HeartHandshake, Sparkles, BookHeart, School, Smile } from "lucide-react";
import { Fredoka, Nunito } from "next/font/google";
import safetyImage from "../../public/compressed/young-european-female-with-daugheters-posing-isolated-white-surface.jpg.webp";
import affectionImage from "../../public/compressed/young-beautiful-darkhaired-mother-holds-her-newborn-daughter-her-arms-cozy-home-family-portrait-motherhood-young-woman-kisses-her-2-month-old-baby.jpg.webp";
import learningImage from "../../public/compressed/young-child-is-thoughtfully-engaged-with-abacus-suggesting-learning-play-environment.jpg.webp";
const headingFont = Fredoka({ subsets: ["latin"], weight: ["600"] });
const bodyFont = Nunito({ subsets: ["latin"], weight: ["400", "600", "700", "800"] });

/* ═══════════════════════ DOODLE COMPONENTS ═══════════════════════ */

function DoodleHeart({ size = 48, color = "#e83d59", opacity = 0.55 }: { size?: number; color?: string; opacity?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M24 40s-16-10-16-22a8 8 0 0 1 16 0 8 8 0 0 1 16 0c0 12-16 22-16 22Z"
        stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity={opacity} />
    </svg>
  );
}

function DoodleStar({ size = 34, color = "#f29b54", opacity = 0.6 }: { size?: number; color?: string; opacity?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <path d="M18 4l2.9 8.7H30l-7.4 5.3 2.8 8.7L18 21.4l-7.4 5.3 2.8-8.7L6 13h9.1Z"
        stroke={color} strokeWidth="2.5" strokeLinejoin="round" opacity={opacity} />
    </svg>
  );
}

function DoodleFlower({ size = 56, color = "#e83d59", opacity = 0.45 }: { size?: number; color?: string; opacity?: number }) {
  const petals = [0, 60, 120, 180, 240, 300];
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" aria-hidden="true">
      <circle cx="28" cy="28" r="6" stroke={color} strokeWidth="2.5" opacity={opacity} />
      {petals.map((deg, i) => {
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

function DoodleSquiggle({ width = 80, color = "#e83d59", opacity = 0.45 }: { width?: number; color?: string; opacity?: number }) {
  return (
    <svg width={width} height="22" viewBox={`0 0 ${width} 22`} fill="none" aria-hidden="true">
      <path
        d={`M4 11 Q${width * 0.15} 3 ${width * 0.3} 11 Q${width * 0.45} 19 ${width * 0.6} 11 Q${width * 0.75} 3 ${width} 11`}
        stroke={color} strokeWidth="2.8" strokeLinecap="round" fill="none" opacity={opacity} />
    </svg>
  );
}

function DoodleBird({ size = 40, color = "#60c5a8", opacity = 0.6 }: { size?: number; color?: string; opacity?: number }) {
  return (
    <svg width={size} height={Math.round(size * 0.7)} viewBox="0 0 40 28" fill="none" aria-hidden="true">
      <path d="M4 16 Q12 8 20 16 Q28 8 36 16"
        stroke={color} strokeWidth="2.8" strokeLinecap="round" opacity={opacity} />
    </svg>
  );
}

function DoodleDots({ color = "#f29b54", opacity = 0.45 }: { color?: string; opacity?: number }) {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden="true">
      {[0, 1, 2].flatMap(row =>
        [0, 1, 2].map(col => (
          <circle key={`${row}-${col}`}
            cx={8 + col * 20} cy={8 + row * 20} r="3"
            fill={color} opacity={opacity} />
        ))
      )}
    </svg>
  );
}

function DoodleSpiral({ size = 44, color = "#a78bfa", opacity = 0.5 }: { size?: number; color?: string; opacity?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <path d="M22 22 Q28 16 28 22 Q28 32 18 32 Q8 32 8 20 Q8 8 22 8 Q38 8 38 22"
        stroke={color} strokeWidth="2.5" strokeLinecap="round" opacity={opacity} />
    </svg>
  );
}

function DoodleZigzag({ width = 80, color = "#3b6ca8", opacity = 0.35 }: { width?: number; color?: string; opacity?: number }) {
  const step = width / 6;
  const pts = [0, 1, 2, 3, 4, 5, 6].map(i => `${i * step},${i % 2 === 0 ? 4 : 18}`).join(" ");
  return (
    <svg width={width} height="22" viewBox={`0 0 ${width} 22`} fill="none" aria-hidden="true">
      <polyline points={pts} stroke={color} strokeWidth="2.5"
        strokeLinecap="round" strokeLinejoin="round" opacity={opacity} />
    </svg>
  );
}

function SectionLabel({ text, color = "#e83d59" }: { text: string; color?: string }) {
  return (
    <div className="flex items-center gap-2 mb-5">
      <DoodleSquiggle width={28} color={color} opacity={0.9} />
      <p className="text-sm font-extrabold uppercase tracking-[0.22em]" style={{ color }}>{text}</p>
    </div>
  );
}

function WaveBottom({ fill }: { fill: string }) {
  return (
    <div className="pointer-events-none absolute -bottom-px left-0 w-full overflow-hidden leading-none">
      <svg className="block h-[64px] w-full md:h-[86px]" viewBox="0 0 1440 110"
        preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 40C120 5 240 75 360 50C480 25 600 75 720 50C840 25 960 75 1080 50C1200 25 1320 75 1440 50V110H0V40Z"
          fill={fill} />
      </svg>
    </div>
  );
}

/* ═══════════════════════ REASON CARDS DATA ═══════════════════════ */

const reasons = [
  {
    icon: HeartHandshake,
    title: "Emotionally Nurturing",
    bg: "#fff0f3",
    iconBg: "#fde8ef",
    iconColor: "#e83d59",
    doodleColor: "#e83d59",
    Doodle: () => <DoodleHeart size={20} color="#e83d59" opacity={0.9} />,
  },
  {
    icon: ShieldCheck,
    title: "Safe & Supported",
    bg: "#f0f5ff",
    iconBg: "#e8f0fd",
    iconColor: "#3b6ca8",
    doodleColor: "#3b6ca8",
    Doodle: () => <DoodleSpiral size={20} color="#3b6ca8" opacity={0.9} />,
  },
  {
    icon: BookHeart,
    title: "Learning With Joy",
    bg: "#fff8ee",
    iconBg: "#fef0d8",
    iconColor: "#f29b54",
    doodleColor: "#f29b54",
    Doodle: () => <DoodleStar size={20} color="#f29b54" opacity={0.9} />,
  },
  {
    icon: School,
    title: "School Readiness",
    bg: "#f0fdf7",
    iconBg: "#d1fae5",
    iconColor: "#10b981",
    doodleColor: "#60c5a8",
    Doodle: () => <DoodleFlower size={20} color="#60c5a8" opacity={0.9} />,
  },
  {
    icon: Smile,
    title: "Parent Partnership",
    bg: "#f5f0ff",
    iconBg: "#ede9fe",
    iconColor: "#7c3aed",
    doodleColor: "#a78bfa",
    Doodle: () => <DoodleSquiggle width={20} color="#a78bfa" opacity={0.9} />,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

/* ═══════════════════════════ PAGE ═══════════════════════════════ */

export default function WhyUsPage() {
  return (
    <div className={`overflow-x-hidden text-slate-800 ${bodyFont.className}`}
      style={{ background: "linear-gradient(180deg,#fffaf7 0%,#fff5ee 100%)" }}>

      {/* ─────────────────────────────────────────────────────────────
          HERO — image mosaic + headline
      ───────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden px-6 pt-32 pb-28 md:px-10 lg:px-16"
        style={{ background: "linear-gradient(160deg,#fffaf7 0%,#fff4ee 100%)" }}
      >
        {/* Doodles */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-12 left-6 rotate-12">           <DoodleHeart size={52} color="#e83d59" opacity={0.4} /></div>
          <div className="absolute top-8 left-[25%] -rotate-6">       <DoodleStar size={30} color="#f29b54" opacity={0.55} /></div>
          <div className="absolute top-16 left-[50%]">                 <DoodleBird size={44} color="#60c5a8" opacity={0.5} /></div>
          <div className="absolute top-24 left-[57%]">                 <DoodleBird size={32} color="#60c5a8" opacity={0.38} /></div>
          <div className="absolute top-10 right-[10%] -rotate-8">     <DoodleFlower size={50} color="#e83d59" opacity={0.38} /></div>
          <div className="absolute top-20 right-[2%]">                 <DoodleSpiral size={40} color="#a78bfa" opacity={0.48} /></div>
          <div className="absolute bottom-24 left-[3%] rotate-6">     <DoodleFlower size={44} color="#60c5a8" opacity={0.35} /></div>
          <div className="absolute bottom-16 left-[18%]">              <DoodleDots color="#f29b54" opacity={0.38} /></div>
          <div className="absolute bottom-20 right-[18%]">             <DoodleSquiggle width={90} color="#e83d59" opacity={0.3} /></div>
          <div className="absolute bottom-10 right-[4%] -rotate-6">   <DoodleHeart size={38} color="#f29b54" opacity={0.4} /></div>
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">

          {/* LEFT — headline */}
          <div>
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 shadow-[0_4px_16px_rgba(232,61,89,0.12)]">
              <Sparkles className="h-4 w-4 text-[#e83d59]" />
              <span className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#e83d59]">Why MothersPride</span>
            </div>

            <h1 className={`text-5xl leading-[1.1] text-slate-800 sm:text-6xl lg:text-7xl ${headingFont.className}`}>
              The feeling<br />your child<br />
              <span className="text-[#3b6ca8]">carries home.</span>
            </h1>

            {/* Decorative doodle row under heading */}
            <div className="mt-6 flex items-center gap-2 opacity-70">
              <DoodleHeart size={22} color="#e83d59" opacity={1} />
              <DoodleSquiggle width={52} color="#f29b54" opacity={0.9} />
              <DoodleFlower size={22} color="#60c5a8" opacity={1} />
              <DoodleSquiggle width={52} color="#a78bfa" opacity={0.9} />
              <DoodleStar size={22} color="#3b6ca8" opacity={1} />
            </div>

            {/* Highlight pill strip */}
            <div className="mt-8 flex flex-wrap gap-3">
              {["Safety", "Affection", "Confidence", "Joy"].map((word, i) => (
                <span key={word}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/85 px-5 py-2.5 text-sm font-bold text-slate-700 shadow-[0_4px_14px_rgba(15,23,42,0.07)]">
                  {[<DoodleHeart size={14} color="#e83d59" opacity={1} />,
                    <DoodleFlower size={14} color="#f29b54" opacity={1} />,
                    <DoodleStar size={14} color="#3b6ca8" opacity={1} />,
                    <DoodleSpiral size={14} color="#60c5a8" opacity={1} />][i]}
                  {word}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT — image mosaic */}
          <div className="grid grid-cols-2 gap-4">
            {/* Tall left image */}
            <div className="row-span-2 relative overflow-hidden rounded-[32px] shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
              <Image src={safetyImage} alt="Happy child and parent" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-900/20 via-transparent to-transparent" />
              {/* Doodle overlay */}
              <div className="absolute right-3 top-3 opacity-70">
                <DoodleFlower size={36} color="#fff" opacity={0.6} />
              </div>
            </div>

            {/* Top-right image */}
            <div className="relative overflow-hidden rounded-[32px] shadow-[0_16px_46px_rgba(15,23,42,0.10)]" style={{ minHeight: "180px" }}>
              <Image src={affectionImage} alt="Motherly affection" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-900/15 via-transparent to-transparent" />
            </div>

            {/* Bottom-right stat card */}
            <div className="flex flex-col justify-center rounded-[32px] bg-white/85 p-6 shadow-[0_14px_40px_rgba(232,61,89,0.08)]">
              <div className="flex items-center gap-2 mb-3">
                <DoodleHeart size={20} color="#e83d59" opacity={1} />
                <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#e83d59]">Our Difference</span>
              </div>
              <p className={`text-xl leading-snug text-slate-800 ${headingFont.className}`}>
                Premium preschool quality with the softness of home.
              </p>
            </div>
          </div>
        </div>

        <WaveBottom fill="#fff8ee" />
      </section>

      {/* ─────────────────────────────────────────────────────────────
          REASONS — icon cards (no body copy, visual-first)
      ───────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden px-6 py-28 md:px-10 lg:px-16"
        style={{ background: "linear-gradient(160deg,#fff8ee 0%,#fff3e6 100%)" }}
      >
        {/* Doodles */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-8 left-8 rotate-10">            <DoodleStar size={34} color="#f29b54" opacity={0.45} /></div>
          <div className="absolute top-6 left-[42%]">                  <DoodleBird size={44} color="#60c5a8" opacity={0.45} /></div>
          <div className="absolute top-10 right-[7%] -rotate-6">      <DoodleHeart size={48} color="#e83d59" opacity={0.38} /></div>
          <div className="absolute bottom-20 left-[2%] rotate-6">     <DoodleZigzag width={90} color="#f29b54" opacity={0.35} /></div>
          <div className="absolute bottom-16 right-[5%]">              <DoodleDots color="#a78bfa" opacity={0.38} /></div>
          <div className="absolute top-1/3 right-[2%]">                <DoodleSpiral size={40} color="#e83d59" opacity={0.38} /></div>
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col items-center text-center">
            <SectionLabel text="What Makes Us Different" color="#f29b54" />
            <h2 className={`text-4xl text-slate-800 md:text-5xl ${headingFont.className}`}>
              Five things families <span className="text-[#f29b54]">feel every day.</span>
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-[32px] p-7 shadow-[0_12px_40px_rgba(15,23,42,0.06)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_56px_rgba(15,23,42,0.1)]"
                style={{ background: reason.bg }}
              >
                {/* Background doodle */}
                <div className="pointer-events-none absolute right-4 bottom-4 opacity-20 transition-opacity group-hover:opacity-35">
                  <DoodleFlower size={64} color={reason.doodleColor} opacity={1} />
                </div>

                <div className="relative">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl"
                    style={{ background: reason.iconBg, color: reason.iconColor }}>
                    <reason.icon className="h-5 w-5" />
                  </div>

                  <h3 className={`text-2xl text-slate-800 ${headingFont.className}`}>{reason.title}</h3>

                  {/* Squiggle underline instead of body copy */}
                  <div className="mt-3">
                    <DoodleSquiggle width={60} color={reason.doodleColor} opacity={0.6} />
                  </div>
                </div>
              </motion.div>
            ))}

            {/* 6th card — CTA / emotional closer */}
            <motion.div
              custom={5}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-[32px] p-7 shadow-[0_12px_40px_rgba(232,61,89,0.12)]"
              style={{ background: "linear-gradient(135deg,#fde8ef,#ffe5cc)" }}
            >
              <div className="pointer-events-none absolute right-3 bottom-3 opacity-25">
                <DoodleHeart size={72} color="#e83d59" opacity={1} />
              </div>
              <div className="relative">
                <DoodleHeart size={24} color="#e83d59" opacity={1} />
                <p className={`mt-4 text-2xl text-slate-800 ${headingFont.className}`}>
                  Come feel the difference for yourself.
                </p>
                <div className="mt-5">
                  <a href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-[#e83d59] px-6 py-2.5 text-sm font-extrabold uppercase tracking-[0.14em] text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(232,61,89,0.35)]">
                    Book A Visit
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <WaveBottom fill="#edf5ff" />
      </section>

      {/* ─────────────────────────────────────────────────────────────
          CLOSING — image + short statement
      ───────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden px-6 py-28 md:px-10 lg:px-16"
        style={{ background: "linear-gradient(160deg,#edf5ff 0%,#deeeff 100%)" }}
      >
        {/* Doodles */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-8 left-6 rotate-6">            <DoodleFlower size={48} color="#3b6ca8" opacity={0.35} /></div>
          <div className="absolute top-6 left-[38%]">                 <DoodleStar size={30} color="#a78bfa" opacity={0.5} /></div>
          <div className="absolute top-12 right-[8%] -rotate-10">    <DoodleHeart size={46} color="#3b6ca8" opacity={0.38} /></div>
          <div className="absolute top-28 right-[2%]">                <DoodleDots color="#3b6ca8" opacity={0.3} /></div>
          <div className="absolute bottom-24 left-[4%] -rotate-6">   <DoodleSpiral size={40} color="#a78bfa" opacity={0.42} /></div>
          <div className="absolute bottom-16 right-[16%]">            <DoodleZigzag width={90} color="#3b6ca8" opacity={0.28} /></div>
          <div className="absolute top-16 left-[55%]">                <DoodleBird size={44} color="#3b6ca8" opacity={0.42} /></div>
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[44px] bg-white/72 shadow-[0_28px_90px_rgba(59,108,168,0.12)] backdrop-blur-sm lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">

            {/* Left — text */}
            <div className="p-10 lg:p-16">
              <SectionLabel text="The MothersPride Experience" color="#3b6ca8" />
              <h2 className={`text-4xl leading-tight text-slate-800 md:text-5xl ${headingFont.className}`}>
                Where confidence grows<br />
                <span className="text-[#3b6ca8]">through comfort.</span>
              </h2>

              {/* 3 visual bullets — no long paragraphs */}
              <div className="mt-10 flex flex-col gap-4">
                {[
                  { doodle: <DoodleHeart size={18} color="#e83d59" opacity={1} />, text: "Emotionally secure, seen as individuals" },
                  { doodle: <DoodleFlower size={18} color="#60c5a8" opacity={1} />, text: "Warm interactions & purposeful learning" },
                  { doodle: <DoodleStar size={18} color="#f29b54" opacity={1} />, text: "Excited to come back the next day" },
                ].map(({ doodle, text }) => (
                  <div key={text} className="flex items-center gap-3 rounded-2xl bg-white/80 px-5 py-4 shadow-[0_4px_16px_rgba(15,23,42,0.05)]">
                    {doodle}
                    <span className="text-[15px] font-700 text-slate-700">{text}</span>
                  </div>
                ))}
              </div>

              {/* Decorative doodle strip */}
              <div className="mt-10 flex items-center gap-2 opacity-60">
                <DoodleHeart size={18} color="#e83d59" opacity={1} />
                <DoodleSquiggle width={40} color="#f29b54" opacity={0.9} />
                <DoodleFlower size={18} color="#60c5a8" opacity={1} />
                <DoodleSquiggle width={40} color="#a78bfa" opacity={0.9} />
                <DoodleStar size={18} color="#3b6ca8" opacity={1} />
              </div>
            </div>

            {/* Right — image with caption */}
            <div className="relative min-h-[360px] overflow-hidden lg:rounded-r-[44px]">
              <Image src={learningImage} alt="Learning with joy" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/30 via-transparent to-transparent" />

              {/* Caption card */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-2xl bg-white/82 px-5 py-4 shadow-lg backdrop-blur-md">
                <DoodleHeart size={20} color="#e83d59" opacity={1} />
                <p className={`text-lg text-slate-800 ${headingFont.className}`}>
                  Every child, seen and celebrated.
                </p>
              </div>

              {/* Corner doodle */}
              <div className="absolute right-4 top-4 opacity-60">
                <DoodleFlower size={40} color="#fff" opacity={0.6} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}