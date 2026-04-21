"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle, Clock3, Sparkles, ArrowRight, CheckCircle } from "lucide-react";
import { Fredoka, Nunito } from "next/font/google";

import supportImage from "../../public/compressed/young-mother-with-her-little-baby-boy-having-fun-autumn-park.jpg.webp";

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

const contactItems = [
  { icon: Phone, label: "Call Us", value: "+91 9999606090", tone: "rose", link: "tel:+ 9999606090" },
  { icon: Mail, label: "Email Us", value: "info@motherhoodpreschoolanddaycare.com", tone: "blue", link: "info@motherhoodpreschoolanddaycare.com"},
  { icon: MapPin, label: "Visit Us", value: "Janakpuri, Delhi", tone: "amber", link: "#map" },
];

export default function ContactPage() {
  return (
    <div className={`relative overflow-x-hidden bg-[#fffaf7] text-slate-800 ${bodyFont.className}`}>
      
      {/* Background Doodles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-24 left-10 rotate-12"><DoodleStar size={50} color="#f29b54" opacity={0.15} /></div>
        <div className="absolute top-40 right-[10%] -rotate-6"><DoodleHeart size={45} color="#e83d59" opacity={0.15} /></div>
        <div className="absolute top-[30%] left-[5%]"><DoodleSquiggle width={90} color="#3b6ca8" opacity={0.15} /></div>
        <div className="absolute top-[45%] right-[8%] rotate-12"><DoodleFlower size={55} color="#10b981" opacity={0.15} /></div>
      </div>

      {/* ──────────────────────────────────────────────────────────────
          SECTION 1 — HERO & CONTACT CARDS (Centered)
      ────────────────────────────────────────────────────────────── */}
      <section className="relative px-6 pb-16 pt-32 md:px-10 lg:px-16">
        <div className="mx-auto max-w-8xl">
          
          {/* Centered Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white px-4 py-2 text-sm font-bold text-[#e83d59] shadow-sm">
              <Sparkles className="h-4 w-4" />
              Contact MothersHood
            </div>
            <h1 className={`mx-auto mt-6 max-w-4xl text-5xl leading-[1.1] text-slate-900 sm:text-6xl lg:text-7xl ${headingFont.className}`}>
              Let's make the first visit
              <span className="block text-[#e83d59]">feel incredibly easy.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
              Quick answers, warm guidance, and a campus experience that feels just right for your family. We are here to help.
            </p>
          </motion.div>

          {/* Centered Contact Cards Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            {contactItems.map((item, index) => (
              <a 
                key={item.label} 
                href={item.link}
                className="group relative flex flex-col items-center justify-center rounded-[40px] bg-white/70 p-10 text-center shadow-[0_16px_56px_rgba(15,23,42,0.06)] backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:bg-white/95 hover:shadow-[0_24px_80px_rgba(15,23,42,0.1)]"
              >
                <div
                  className={`mb-5 flex h-16 w-16 items-center justify-center rounded-3xl transition-transform duration-300 group-hover:scale-110 ${
                    item.tone === "rose" ? "bg-rose-100 text-rose-500" :
                    item.tone === "blue" ? "bg-blue-100 text-blue-500" :
                    "bg-amber-100 text-amber-500"
                  }`}
                >
                  <item.icon className="h-7 w-7" />
                </div>
                <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-slate-400">{item.label}</p>
                <p className={`mt-2 text-2xl text-slate-900 ${headingFont.className}`}>{item.value}</p>
              </a>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────
          SECTION 2 — MAP & ADDITIONAL INFO
      ────────────────────────────────────────────────────────────── */}
      <section id="map" className="relative px-6 pb-28 pt-10 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          
          {/* Left: Big Map Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col overflow-hidden rounded-[44px] bg-white p-4 shadow-[0_24px_80px_rgba(59,108,168,0.08)]"
          >
            <div className="px-6 py-5 md:px-8">
              <div className="flex items-center gap-3 mb-2">
                <DoodleSquiggle width={32} color="#3b6ca8" opacity={0.8} />
                <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#3b6ca8]">Visit The Campus</p>
              </div>
              <h2 className={`text-3xl text-slate-900 md:text-4xl ${headingFont.className}`}>See the care in person</h2>
            </div>
            
            <div className="relative h-[380px] w-full overflow-hidden rounded-[32px] md:h-[460px]">
              <iframe
                src="https://maps.google.com/maps?width=600&height=400&hl=en&q=pitampura%20delhi&t=p&z=14&ie=UTF8&iwloc=B&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale-[0.15] transition-all duration-500 hover:grayscale-0"
              />
            </div>
          </motion.div>

          {/* Right: Info Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            {/* Visiting Hours Card */}
            <div className="rounded-[40px] bg-white/60 p-8 shadow-[0_18px_60px_rgba(242,155,84,0.06)] backdrop-blur-sm border border-white md:p-10">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-500">
                  <Clock3 className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-amber-600">Visiting Hours</p>
                  <h3 className={`text-3xl text-slate-900 ${headingFont.className}`}>Mon - Sat</h3>
                </div>
              </div>
              <div className="mt-5 inline-flex rounded-full bg-amber-50 px-5 py-2.5 text-base font-bold text-amber-700">
                9:00 AM to 6:00 PM
              </div>
            </div>

            {/* Quick Chat / WhatsApp Card */}
            <div className="relative flex-1 min-h-[240px] overflow-hidden rounded-[40px] shadow-[0_18px_60px_rgba(16,185,129,0.12)]">
               <Image src={supportImage} alt="Support and campus visit" fill className="object-cover" />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />
               <div className="absolute bottom-6 left-6 right-6 rounded-[28px] bg-white/95 p-6 backdrop-blur-md">
                 <div className="flex items-center gap-3">
                   <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[14px] bg-emerald-100 text-emerald-500">
                     <MessageCircle className="h-5 w-5" />
                   </div>
                   <div>
                     <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-emerald-600">Quick Chat</p>
                     <p className="text-sm font-bold text-slate-700">WhatsApp support for fast replies.</p>
                   </div>
                 </div>
                 <button
                   onClick={() => window.open("https://wa.me/9999606090", "_blank")}
                   className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-5 py-3.5 text-sm font-extrabold uppercase tracking-[0.12em] text-white shadow-[0_8px_24px_rgba(16,185,129,0.3)] transition-all hover:-translate-y-1 hover:bg-emerald-600"
                 >
                   Chat on WhatsApp
                   <ArrowRight className="h-4 w-4" />
                 </button>
               </div>
            </div>

            {/* We Can Help With Card */}
            <div className="rounded-[40px] bg-[#3b6ca8] p-8 text-white shadow-[0_24px_70px_rgba(59,108,168,0.22)]">
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-blue-100">We Can Help With</p>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {["Programs", "Daycare", "Admissions", "Campus Visits"].map((item) => (
                  <div key={item} className="flex items-center gap-2 rounded-[20px] bg-white/10 px-4 py-3 text-sm font-bold backdrop-blur-sm">
                    <CheckCircle className="h-4 w-4 text-blue-200" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </section>
    </div>
  );
}