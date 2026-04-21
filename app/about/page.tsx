"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Heart, Sparkles, ShieldCheck, BookOpen, Users, 
  Target, Compass, Image as ImageIcon, ArrowRight 
} from "lucide-react";
import { Fredoka, Nunito } from "next/font/google";
import Link from "next/link";

import familyImage from "../../public/compressed/beautiful-mother-with-little-daughter.jpg.webp";
import classroomImage from "../../public/compressed/elementary-school-teacher-with-class.jpg.webp";
import careImage from "../../public/compressed/young-mom-holding-hugging-adorable-baby-enjoying-motherhood-child-care-standing-bedroom-home.jpg.webp";

const headingFont = Fredoka({ subsets: ["latin"], weight: ["600"] });
const bodyFont = Nunito({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

/* ═══════════════════════════ DOODLE LIBRARY ═══════════════════════════ */

function DoodleHeart({ size = 48, color = "#e83d59", opacity = 0.55 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M24 40s-16-10-16-22a8 8 0 0 1 16 0 8 8 0 0 1 16 0c0 12-16 22-16 22Z" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity={opacity} />
    </svg>
  );
}

function DoodleStar({ size = 34, color = "#f29b54", opacity = 0.6 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <path d="M18 4l2.9 8.7H30l-7.4 5.3 2.8 8.7L18 21.4l-7.4 5.3 2.8-8.7L6 13h9.1Z" stroke={color} strokeWidth="2.5" strokeLinejoin="round" opacity={opacity} />
    </svg>
  );
}

function DoodleFlower({ size = 56, color = "#10b981", opacity = 0.5 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" aria-hidden="true">
      <circle cx="28" cy="28" r="6" stroke={color} strokeWidth="2.5" opacity={opacity} />
      {[0, 60, 120, 180, 240, 300].map((deg, i) => {
        const r = (deg * Math.PI) / 180;
        const cx = 28 + 13 * Math.cos(r);
        const cy = 28 + 13 * Math.sin(r);
        return <ellipse key={i} cx={cx} cy={cy} rx="5" ry="7.5" transform={`rotate(${deg + 90},${cx},${cy})`} stroke={color} strokeWidth="2.5" opacity={opacity} />;
      })}
    </svg>
  );
}

function DoodleSquiggle({ width = 80, color = "#3b6ca8", opacity = 0.4 }) {
  return (
    <svg width={width} height="22" viewBox={`0 0 ${width} 22`} fill="none" aria-hidden="true">
      <path d={`M4 11 Q${width * 0.15} 3 ${width * 0.3} 11 Q${width * 0.45} 19 ${width * 0.6} 11 Q${width * 0.75} 3 ${width} 11`} stroke={color} strokeWidth="2.8" strokeLinecap="round" fill="none" opacity={opacity} />
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

/* ═══════════════════════════ DATA ═══════════════════════════ */

const values = [
  {
    icon: Heart,
    title: "Motherly Care",
    copy: "A gentle first-school experience where emotional comfort matters just as much as learning.",
    accent: "rose",
  },
  {
    icon: BookOpen,
    title: "Purposeful Learning",
    copy: "Play-led exploration, language exposure, creativity, and school readiness woven into routines.",
    accent: "amber",
  },
  {
    icon: ShieldCheck,
    title: "Safe Environment",
    copy: "Thoughtful supervision, caring teachers, and spaces designed to help children feel secure.",
    accent: "blue",
  },
  {
    icon: Users,
    title: "Family Partnership",
    copy: "We work closely with parents so each child receives continuity of care between home and school.",
    accent: "emerald",
  },
];

export default function AboutPage() {
  return (
    <div className={`relative overflow-x-hidden bg-[#fffaf7] text-slate-800 ${bodyFont.className}`}>
      
      {/* Background Doodles (Global) */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
        <div className="absolute top-24 left-10 rotate-12"><DoodleStar size={50} color="#f29b54" opacity={0.15} /></div>
        <div className="absolute top-40 right-[10%] -rotate-6"><DoodleHeart size={55} color="#e83d59" opacity={0.12} /></div>
        <div className="absolute top-[40%] left-[5%]"><DoodleSquiggle width={90} color="#3b6ca8" opacity={0.15} /></div>
        <div className="absolute top-[70%] right-[8%] rotate-12"><DoodleFlower size={60} color="#10b981" opacity={0.15} /></div>
      </div>

      {/* ──────────────────────────────────────────────────────────────
          SECTION 1 — HERO
      ────────────────────────────────────────────────────────────── */}
      <section className="relative z-10 px-6 pt-32 pb-16 md:px-10 lg:px-16 text-center">
        <div className="mx-auto max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/80 px-4 py-2 text-sm font-bold text-[#e83d59] shadow-sm backdrop-blur-sm">
              <Sparkles className="h-4 w-4" />
              Our Story
            </div>
            <h1 className={`mx-auto max-w-4xl text-5xl leading-[1.1] text-slate-900 sm:text-6xl lg:text-7xl ${headingFont.className}`}>
              A preschool experience shaped by
              <span className="block text-[#e83d59]">love, affection, and care.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 sm:text-xl">
              MotherHood Preschool & Daycare is built around a simple belief: children learn best when they feel emotionally safe, warmly welcomed, and joyfully engaged. We create that feeling from the very first hello.
            </p>
          </motion.div>

          {/* Highlight Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 grid gap-5 sm:grid-cols-3"
          >
            <div className="rounded-[32px] bg-white/70 p-6 shadow-sm backdrop-blur-md border border-white transition-transform hover:-translate-y-1">
              <p className="text-4xl font-black text-[#e83d59]">2-6 yrs</p>
              <p className="mt-2 text-sm font-bold text-slate-500">Thoughtfully nurtured age groups</p>
            </div>
            <div className="rounded-[32px] bg-white/70 p-6 shadow-sm backdrop-blur-md border border-white transition-transform hover:-translate-y-1">
              <p className="text-4xl font-black text-[#3b6ca8]">Play-led</p>
              <p className="mt-2 text-sm font-bold text-slate-500">Learning that feels natural and joyful</p>
            </div>
            <div className="rounded-[32px] bg-white/70 p-6 shadow-sm backdrop-blur-md border border-white transition-transform hover:-translate-y-1">
              <p className="text-4xl font-black text-[#f29b54]">Care+</p>
              <p className="mt-2 text-sm font-bold text-slate-500">Preschool warmth with daycare comfort</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────
          SECTION 2 — VISUAL SHOWCASE
      ────────────────────────────────────────────────────────────── */}
      <section className="relative z-10 px-6 pb-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[44px] bg-white p-4 shadow-[0_30px_80px_rgba(30,41,59,0.08)]"
          >
            <div className="grid gap-4 sm:grid-cols-[1fr_0.8fr]">
              {/* Main Image */}
              <div className="relative min-h-[460px] overflow-hidden rounded-[36px]">
                <Image src={familyImage} alt="Mother and child smiling" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
              </div>
              
              {/* Secondary Image + Promise Card */}
              <div className="grid gap-4">
                <div className="relative min-h-[220px] overflow-hidden rounded-[32px]">
                  <Image src={classroomImage} alt="Preschool classroom learning" fill className="object-cover" />
                </div>
                <div className="flex flex-col justify-center rounded-[32px] bg-[#fff4f6] p-8">
                  <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#e83d59]">Our Promise</p>
                  <p className={`mt-3 text-3xl leading-tight text-slate-900 ${headingFont.className}`}>
                    Where Montessori-inspired learning meets motherly reassurance.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────
          SECTION 3 — CORE VALUES
      ────────────────────────────────────────────────────────────── */}
      <section className="relative z-10 px-6 pb-28 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className={`text-4xl text-slate-900 md:text-5xl ${headingFont.className}`}>
              The pillars of our <span className="text-[#3b6ca8]">philosophy</span>
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group rounded-[36px] bg-white/80 p-8 shadow-[0_16px_56px_rgba(15,23,42,0.05)] backdrop-blur-md border border-white transition-all hover:-translate-y-2 hover:bg-white hover:shadow-xl"
              >
                <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl transition-transform group-hover:scale-110 ${
                  value.accent === "rose" ? "bg-rose-100 text-rose-500" :
                  value.accent === "amber" ? "bg-amber-100 text-amber-500" :
                  value.accent === "blue" ? "bg-blue-100 text-blue-500" :
                  "bg-emerald-100 text-emerald-500"
                }`}>
                  <value.icon className="h-7 w-7" />
                </div>
                <h3 className={`text-2xl text-slate-900 ${headingFont.className}`}>{value.title}</h3>
                <p className="mt-3 text-base font-medium leading-relaxed text-slate-600">{value.copy}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────
          SECTION 4 — OUR APPROACH & VISION
      ────────────────────────────────────────────────────────────── */}
      <section className="relative z-10 bg-[#eef5ff] px-6 py-28 md:px-10 lg:px-16 overflow-hidden">
        <WaveBottom fill="#fffaf7" />
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative min-h-[500px] overflow-hidden rounded-[44px] shadow-[0_30px_80px_rgba(59,108,168,0.16)]"
          >
            <Image src={careImage} alt="Caring preschool environment" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 rounded-[32px] bg-white/95 p-6 backdrop-blur-md">
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#3b6ca8]">Why Families Connect</p>
              <p className="mt-2 text-lg font-bold leading-relaxed text-slate-800">
                Because a child's first school should feel nurturing, beautiful, and emotionally comforting.
              </p>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <DoodleSquiggle width={32} color="#3b6ca8" opacity={0.8} />
              <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#3b6ca8]">Our Approach</p>
            </div>
            
            <h2 className={`text-4xl leading-tight text-slate-900 md:text-5xl ${headingFont.className}`}>
              We don't just prepare children for school.
              <span className="block text-[#e83d59]">We prepare them to feel confident in it.</span>
            </h2>
            
            <div className="mt-8 space-y-6 text-lg font-medium leading-relaxed text-slate-600">
              <p>
                At MotherHood, routines are intentional, transitions are gentle, and every classroom interaction is designed to build belonging. Children are encouraged to speak, move, imagine, create, and discover at their own pace.
              </p>
              <div className="grid grid-cols-2 gap-4 py-2">
                <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-2xl shadow-sm">
                  <Compass className="w-5 h-5 text-[#f29b54]" />
                  <span className="text-sm font-bold text-slate-700">Self-Discovery</span>
                </div>
                <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-2xl shadow-sm">
                  <Target className="w-5 h-5 text-[#f29b54]" />
                  <span className="text-sm font-bold text-slate-700">Motor Skills</span>
                </div>
              </div>
              <p>
                Our programs support cognitive growth, social confidence, emotional expression, language development, and independence while preserving the softness and affection young children need during these early years.
              </p>
              <p>
                The result is a preschool and daycare environment that feels elevated and warm at the same time: structured enough for growth, tender enough for trust.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────
          SECTION 5 — GALLERY PLACEHOLDER 
      ────────────────────────────────────────────────────────────── */}
      <section className="relative z-10 px-6 py-28 md:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl text-center">
           <div className="mb-10">
             <h2 className={`text-4xl text-slate-900 md:text-5xl ${headingFont.className}`}>
               Glimpses of <span className="text-[#10b981]">Joy</span>
             </h2>
             <p className="mt-4 text-lg text-slate-500 font-medium">A sneak peek into the daily adventures at MotherHood.</p>
           </div>
           
           <div className="w-full rounded-[44px] bg-white/50 p-12 md:p-20 border-2 border-dashed border-emerald-200 backdrop-blur-sm transition-all hover:bg-white/80">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-[32px] bg-emerald-50 text-emerald-500 mb-6">
                 <ImageIcon className="h-12 w-12" />
              </div>
              <h3 className={`text-3xl text-slate-800 mb-3 ${headingFont.className}`}>Gallery Coming Soon</h3>
              <p className="text-slate-500 max-w-md mx-auto font-medium text-lg">
                We are currently curating a beautiful collection of photos showcasing our campus, classrooms, and the joyful moments of our little learners. Check back shortly!
              </p>
           </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────
          SECTION 6 — CTA
      ────────────────────────────────────────────────────────────── */}
      <section className="relative z-10 px-6 pb-28 md:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <motion.div 
            whileHover={{ y: -5 }}
            className="rounded-[44px] bg-gradient-to-br from-[#e83d59] to-[#d42a46] p-10 text-center shadow-[0_24px_80px_rgba(232,61,89,0.25)] md:p-16"
          >
            <h2 className={`text-4xl text-white md:text-5xl ${headingFont.className}`}>
              Experience the warmth firsthand.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg font-medium text-rose-100">
              Choosing a preschool is a big step. We invite you to visit our campus, meet our educators, and see how we make learning feel like home.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/admission" className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-extrabold uppercase tracking-[0.14em] text-[#e83d59] transition-all hover:scale-105 hover:shadow-xl">
                Start Admission
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-transparent px-8 py-4 text-sm font-extrabold uppercase tracking-[0.14em] text-white transition-all hover:bg-white/10">
                Book a Visit <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}