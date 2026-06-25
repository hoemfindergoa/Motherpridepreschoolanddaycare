"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle, Clock3, Sparkles, ArrowRight, CheckCircle } from "lucide-react";
import { Fredoka, Nunito } from "next/font/google";
import Navbar from "../navbar/navbar";

import supportImage from "../../public/compressed/young-mother-with-her-little-baby-boy-having-fun-autumn-park.jpg.webp";

const headingFont = Fredoka({ subsets: ["latin"], weight: ["600"] });
const bodyFont = Nunito({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

/* ═══════════════════════════ ANIMATION VARIANTS ═══════════════════════════ */
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const popUpItem: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 90, damping: 14 } 
  },
};

const contactItems = [
  { icon: Phone, label: "Call Us", value: "+91 9999606090", tone: "rose", link: "tel:+9999606090" },
  { icon: Mail, label: "Email Us", value: "info@motherhoodpreschoolanddaycare.com", tone: "blue", link: "mailto:info@motherhoodpreschoolanddaycare.com"},
  { icon: MapPin, label: "Visit Us", value: "Janakpuri, Delhi", tone: "amber", link: "#map" },
];

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
        />
      </svg>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className={`relative overflow-x-hidden bg-[#fffaf7] text-slate-800 ${bodyFont.className}`}>
      <Navbar />

      {/* ═══════════════════════════ TOP WAVY HERO BACKGROUND ═══════════════════════════ */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-0 pointer-events-none">
        <svg viewBox="0 0 1440 450" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto min-h-[380px] object-cover">
          <path d="M0,288L60,266.7C120,245,240,203,360,202.7C480,203,600,245,720,250.7C840,256,960,224,1080,197.3C1200,171,1320,149,1380,138.7L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" className="fill-rose-100"  />
          <path d="M0,160L80,176C160,192,320,224,480,213.3C640,203,800,149,960,138.7C1120,128,1280,160,1360,176L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" className="fill-rose-00" opacity="0.5"/>
        </svg>
      </div>

      {/* ──────────────────────────────────────────────────────────────
          SECTION 1 — HERO & CONTACT CARDS (Centered)
      ────────────────────────────────────────────────────────────── */}
      <section className="relative z-10 px-6 pb-20 pt-32 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          
          {/* Centered Header */}
          <motion.div 
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white px-4 py-2 text-sm font-bold text-[#e83d59] shadow-sm"
            >
              <Sparkles className="h-4 w-4" />
              Contact MothersHood
            </motion.div>
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
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            {contactItems.map((item) => (
              <motion.a 
                variants={popUpItem}
                whileHover={{ y: -8, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                key={item.label} 
                href={item.link}
                target={item.link.startsWith("http") ? "_blank" : undefined}
                className="group relative flex w-full flex-col items-center justify-center overflow-hidden rounded-[36px] bg-white/80 p-6 sm:p-10 text-center shadow-[0_16px_40px_rgba(15,23,42,0.04)] backdrop-blur-md transition-shadow border border-white/60 hover:bg-white hover:shadow-[0_24px_60px_rgba(15,23,42,0.08)]"
              >
                <div
                  className={`mb-5 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${
                    item.tone === "rose" ? "bg-rose-50 text-rose-500" :
                    item.tone === "blue" ? "bg-blue-50 text-blue-500" :
                    "bg-amber-50 text-amber-500"
                  }`}
                >
                  <item.icon className="h-7 w-7" />
                </div>
                
                <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-slate-400">
                  {item.label}
                </p>
                
                <p className={`mt-2 w-full break-all text-lg sm:text-xl lg:text-2xl text-slate-900 ${headingFont.className}`}>
                  {item.value}
                </p>
              </motion.a>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ═══════════════════════════ MIDDLE WAVY DIVIDER ═══════════════════════════ */}
      <div className="w-full overflow-hidden leading-[0] pointer-events-none -mb-1">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0,64C120,85.3,360,128,600,122.7C840,117,1080,64,1320,42.7C1380,32,1440,53,1440,53L1440,120L1380,120C1320,120,1080,120,840,120C600,120,360,120,120,120L0,120Z" fill="#ffffff" />
        </svg>
      </div>

      {/* ──────────────────────────────────────────────────────────────
          SECTION 2 — MAP & ADDITIONAL INFO
      ────────────────────────────────────────────────────────────── */}
      <section id="map" className="relative z-10 bg-white px-6 pb-28 pt-10 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          
          {/* Left: Big Map Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col overflow-hidden rounded-[36px] bg-[#fffaf7] p-4 shadow-[0_16px_50px_rgba(59,108,168,0.04)] border border-slate-100"
          >
            <div className="px-6 py-5 md:px-8">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#3b6ca8] mb-1">Visit The Campus</p>
              <h2 className={`text-3xl text-slate-900 md:text-4xl ${headingFont.className}`}>See the care in person</h2>
            </div>
            
            <div className="relative h-[380px] w-full overflow-hidden rounded-[28px] md:h-[460px]">
              <iframe
                src="https://maps.google.com/maps?width=600&height=400&hl=en&q=pitampura%20delhi&t=p&z=14&ie=UTF8&iwloc=B&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale-[0.10] transition-all duration-500 hover:grayscale-0"
              />
            </div>
          </motion.div>

          {/* Right: Info Cards */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6"
          >
            {/* Visiting Hours Card */}
            <motion.div variants={popUpItem} className="rounded-[36px] bg-[#fffaf7] p-8 shadow-[0_16px_40px_rgba(242,155,84,0.04)] border border-slate-100 md:p-10">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-500">
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
            </motion.div>

            {/* Quick Chat / WhatsApp Card */}
            <motion.div variants={popUpItem} className="relative flex-1 min-h-[250px] overflow-hidden rounded-[36px] shadow-[0_16px_40px_rgba(16,185,129,0.08)]">
               <Image src={supportImage} alt="Support and campus visit" fill className="object-cover transition-transform duration-700 hover:scale-103" />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
               <div className="absolute bottom-6 left-6 right-6 rounded-[24px] bg-white/95 p-6 backdrop-blur-md">
                 <div className="flex items-center gap-3">
                   <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-500">
                     <MessageCircle className="h-5 w-5" />
                   </div>
                   <div>
                     <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-emerald-600">Quick Chat</p>
                     <p className="text-sm font-bold text-slate-700">WhatsApp support for fast replies.</p>
                   </div>
                 </div>
                 <motion.button
                   whileHover={{ scale: 1.01 }}
                   whileTap={{ scale: 0.99 }}
                   onClick={() => window.open("https://wa.me/9999606090", "_blank")}
                   className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-5 py-3.5 text-sm font-extrabold uppercase tracking-[0.12em] text-white shadow-[0_8px_20px_rgba(16,185,129,0.2)] transition-colors hover:bg-emerald-600"
                 >
                   Chat on WhatsApp
                   <ArrowRight className="h-4 w-4" />
                 </motion.button>
               </div>
            </motion.div>

            {/* We Can Help With Card */}
            <motion.div variants={popUpItem} className="rounded-[36px] bg-[#3b6ca8] p-8 text-white shadow-[0_20px_50px_rgba(59,108,168,0.15)]">
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-blue-100">We Can Help With</p>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {["Programs", "Daycare", "Admissions", "Campus Visits"].map((item) => (
                  <div key={item} className="flex items-center gap-2 rounded-[16px] bg-white/10 px-4 py-3 text-sm font-bold backdrop-blur-sm">
                    <CheckCircle className="h-4 w-4 text-blue-200" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

          </motion.div>
        </div>
         <WaveBottom fill="#dbeafe" />
      </section>
    </div>
  );
}