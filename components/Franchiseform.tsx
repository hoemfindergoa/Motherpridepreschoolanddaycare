"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import {
  Award, Briefcase, Building2, CheckCircle, ChevronLeft, ChevronRight,
  Loader2, MapPin, Megaphone, Mail, Phone, Sparkles, TrendingUp, User, Wallet
} from "lucide-react";
import { Space_Mono } from "next/font/google";

import { FranchiseFormSchemaType } from "@/lib/schema";
import { IFranchiseDetail } from "@/lib/types";
import Navbar from "@/app/navbar/navbar";
import { StaticImageData } from "next/image";

// ── Decorative Assets (same set as AdmissionPage + extras) ──────────────────
import christmastree from "@/public/websiteassest/christmastreenew.png";
import jupiter from "@/public/websiteassest/jupyter.png";
import dear from "@/public/websiteassest/dear image.png";
import flower from "@/public/websiteassest/sunflower.png";
import Moon from "@/public/websiteassest/moon.png";
import clouds from "@/public/websiteassest/cloud.png";
import balloon from "@/public/websiteassest/baloon.png";
import sun from "@/public/websiteassest/sun.png";
import franchiseSupport from "../public/compressed/happy-family-home-mother-lifting-air-little-toddler-child-daughter-mom-baby-girl-playing-h.jpg.webp";
import franchiseHero from "../public/compressed/unconditional.webp";

const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"] });

/* ═══════════════ SHARED COMPONENTS ═══════════════════════════════════════ */

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

/* ═══════════════ CAROUSEL DATA ════════════════════════════════════════════ */

const benefitSlides = [
  {
    id: 0,
    tag: "Growth",
    title: "Zero Royalty Model",
    desc: "Keep 100% of what you earn. Our franchise runs on a one-time setup fee — no monthly cuts, no hidden royalties eating your margin.",
    asset: balloon,
    color: "#E54D35",
    animation: "animate-bounce",
    stat: "0%",
    statLabel: "Royalty fee",
  },
  {
    id: 1,
    tag: "Support",
    title: "Full Marketing Arsenal",
    desc: "Campaigns, creatives, social media strategy, and parent outreach — your dedicated support team has every marketing lever covered.",
    asset: flower,
    color: "#10b981",
    animation: "animate-[spin_12s_linear_infinite]",
    stat: "360°",
    statLabel: "Marketing cover",
  },
  {
    id: 2,
    tag: "Brand",
    title: "Trusted Name, Instant Trust",
    desc: "Walk into any neighbourhood with a brand parents already recognise and respect. Years of goodwill, yours from day one.",
    asset: jupiter,
    color: "#A275E1",
    animation: "animate-[spin_18s_linear_infinite]",
    stat: "50+",
    statLabel: "Partner centres",
  },
  {
    id: 3,
    tag: "Curriculum",
    title: "Award-Winning Curriculum",
    desc: "Montessori-aligned, activity-driven programmes built by child development experts. Your teachers get full training — no guesswork.",
    asset: dear,
    color: "#F59E0B",
    animation: "",
    stat: "15+",
    statLabel: "Years of R&D",
  },
  {
    id: 4,
    tag: "Scale",
    title: "Low Investment, High Returns",
    desc: "Start at ₹5–7 lakh. With optimised centre models and proven enrolment pipelines, break-even typically hits within the first year.",
    asset: Moon,
    color: "#3B82F6",
    animation: "animate-pulse",
    stat: "< 1yr",
    statLabel: "Avg. break-even",
  },
];

/* ═══════════════ PAGE COMPONENT ════════════════════════════════════════════ */

export default function FranchisePage({
  onHandleSubmit,
  defaultFranchise,
  isLoading,
}: {
  defaultFranchise?: IFranchiseDetail;
  onHandleSubmit: (data: FranchiseFormSchemaType) => void;
  isLoading: boolean;
}) {
  const form = useForm<FranchiseFormSchemaType>({
    mode: "all",
    defaultValues: {
      name: defaultFranchise?.name || "",
      email: defaultFranchise?.email || "",
      phone: defaultFranchise?.phone || "",
      city: defaultFranchise?.city || "",
      budget: defaultFranchise?.budget || "Playway (5 to 6 lakh)",
      property: defaultFranchise?.property || "Yes, I own commercial property",
    },
  });

  const { register, formState: { errors } } = form;

  // ── Auto-scrolling Carousel ───────────────────────────────────────────────
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!paused) {
        setActiveSlide((prev) => (prev + 1) % benefitSlides.length);
      }
    }, 3200);
  };

  useEffect(() => {
    startTimer();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [paused]);

  const goTo = (idx: number) => {
    setActiveSlide(idx);
    startTimer();
  };
  const nextSlide = () => goTo((activeSlide + 1) % benefitSlides.length);
  const prevSlide = () => goTo((activeSlide - 1 + benefitSlides.length) % benefitSlides.length);

  const slide = benefitSlides[activeSlide];

  /* ──────────────────────────────────────────────────────────────────────── */
  return (
    <div className={`relative overflow-x-hidden text-[#0F172A] ${spaceMono.className}`}>
      <Navbar />

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 1 — HERO & FORM
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative px-4 pb-[160px] bg-rose-200 pt-[140px] md:pt-[160px] md:px-10 lg:px-16 bg--200 min-h-screen">

        {/* Sky assets */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <Image src={clouds} alt="" className="absolute top-24 left-4 md:left-20 w-24 md:w-40 opacity-80 animate-pulse" />
          <Image src={sun} alt="" className="absolute top-32 right-[-20px] md:right-20 w-24 md:w-36 opacity-80 animate-[spin_40s_linear_infinite]" />
          <Image src={balloon} alt="" className="absolute top-60 left-[45%] w-10 md:w-16 opacity-40 animate-bounce" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1200px]">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10 md:mb-12 text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#E54D35] bg-white px-5 py-2 text-[14px] md:text-[16px] font-bold text-[#E54D35] shadow-sm uppercase tracking-widest">
              <Sparkles className="h-4 w-4 md:h-5 md:w-5" />
              Franchise Opportunity 2026
            </div>
            <h1 className="mx-auto mt-6 md:mt-8 max-w-4xl text-[36px] sm:text-[50px] lg:text-[65px] font-black leading-[1.05] tracking-tight text-[#0F172A]">
              Build a preschool brand <br className="hidden sm:block" />
              <span className="text-[#E54D35]">with heart and scale.</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-[15px] md:text-[18px] font-bold text-[#475569] leading-relaxed">
              A franchise journey with strong support, clear positioning, and growth-minded execution. Fill the form to receive our detailed brochure.
            </p>
          </motion.div>

                  {/* Form Container */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-auto w-full rounded-[32px] md:rounded-[40px] bg-white shadow-2xl p-6 md:p-12 lg:p-16 border-b-8 border-[#E54D35]"
          >
            <div className="mb-8 md:mb-10 text-center">
              <span className="inline-flex items-center gap-2 rounded-full border-2 border-[#E54D35] px-4 py-1.5 text-[12px] font-bold uppercase tracking-widest text-[#E54D35]">
                <Briefcase className="h-4 w-4" />
                Franchise Enquiry
              </span>
              <h2 className="text-[28px] md:text-[36px] font-black text-[#0F172A] mt-4">Request Your Brochure</h2>
            </div>

            <form onSubmit={form.handleSubmit(onHandleSubmit)} className="grid grid-cols-1 gap-5 md:gap-6 md:grid-cols-3">

              {/* Row 1 */}
              <div className="flex flex-col gap-2">
                <label className="text-[12px] md:text-[13px] font-bold uppercase tracking-widest text-[#475569]">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-[14px] h-5 w-5 text-[#94A3B8]" />
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    placeholder="Your name"
                    disabled={isLoading}
                    className={`w-full rounded-2xl border-2 bg-slate-50 py-3.5 pl-12 pr-4 text-[#0F172A] font-bold outline-none transition-colors ${errors.name ? "border-[#E54D35] bg-red-50" : "border-slate-200 focus:border-[#E54D35]"}`}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[12px] md:text-[13px] font-bold uppercase tracking-widest text-[#475569]">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-[14px] h-5 w-5 text-[#94A3B8]" />
                  <input
                    {...register("phone", { required: true })}
                    type="tel"
                    placeholder="+91"
                    disabled={isLoading}
                    className={`w-full rounded-2xl border-2 bg-slate-50 py-3.5 pl-12 pr-4 text-[#0F172A] font-bold outline-none transition-colors ${errors.phone ? "border-[#E54D35] bg-red-50" : "border-slate-200 focus:border-[#E54D35]"}`}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[12px] md:text-[13px] font-bold uppercase tracking-widest text-[#475569]">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-[14px] h-5 w-5 text-[#94A3B8]" />
                  <input
                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                    type="email"
                    placeholder="name@example.com"
                    disabled={isLoading}
                    className={`w-full rounded-2xl border-2 bg-slate-50 py-3.5 pl-12 pr-4 text-[#0F172A] font-bold outline-none transition-colors ${errors.email ? "border-[#E54D35] bg-red-50" : "border-slate-200 focus:border-[#E54D35]"}`}
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="flex flex-col gap-2">
                <label className="text-[12px] md:text-[13px] font-bold uppercase tracking-widest text-[#475569]">City / Location</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-[14px] h-5 w-5 text-[#94A3B8]" />
                  <input
                    {...register("city", { required: true })}
                    type="text"
                    placeholder="Preferred city"
                    disabled={isLoading}
                    className={`w-full rounded-2xl border-2 bg-slate-50 py-3.5 pl-12 pr-4 text-[#0F172A] font-bold outline-none transition-colors ${errors.city ? "border-[#E54D35] bg-red-50" : "border-slate-200 focus:border-[#E54D35]"}`}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[12px] md:text-[13px] font-bold uppercase tracking-widest text-[#475569]">Investment Budget</label>
                <div className="relative">
                  <Wallet className="absolute left-4 top-[14px] h-5 w-5 text-[#94A3B8]" />
                  <select
                    {...register("budget")}
                    disabled={isLoading}
                    className="w-full appearance-none rounded-2xl border-2 border-slate-200 bg-slate-50 py-3.5 pl-12 pr-12 text-[#0F172A] font-bold outline-none transition-colors focus:border-[#E54D35]"
                  >
                    <option value="Playway (5 to 6 lakh)">Playway (5 to 6 lakh)</option>
                    <option value="Montessori (6-7 lakh)">Montessori (6-7 lakh)</option>
                  </select>
                  <ChevronRight className="pointer-events-none absolute right-4 top-[14px] h-5 w-5 rotate-90 text-[#94A3B8]" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[12px] md:text-[13px] font-bold uppercase tracking-widest text-[#475569]">Property Status</label>
                <div className="relative">
                  <Building2 className="absolute left-4 top-[14px] h-5 w-5 text-[#94A3B8]" />
                  <select
                    {...register("property")}
                    disabled={isLoading}
                    className="w-full appearance-none rounded-2xl border-2 border-slate-200 bg-slate-50 py-3.5 pl-12 pr-12 text-[#0F172A] font-bold outline-none transition-colors focus:border-[#E54D35]"
                  >
                    <option value="Yes, I own commercial property">Own commercial property</option>
                    <option value="No, I will rent/lease">Will rent / lease</option>
                  </select>
                  <ChevronRight className="pointer-events-none absolute right-4 top-[14px] h-5 w-5 rotate-90 text-[#94A3B8]" />
                </div>
              </div>

              {/* Submit */}
              <div className="mt-6 flex justify-center md:col-span-3">
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`inline-flex items-center justify-center gap-3 rounded-full bg-[#E54D35] px-8 md:px-10 py-4 md:py-5 text-[14px] md:text-[16px] font-black uppercase tracking-widest text-white transition-all hover:-translate-y-1 hover:shadow-xl ${isLoading ? "cursor-not-allowed opacity-70 hover:translate-y-0 hover:shadow-none" : ""}`}
                >
                  {isLoading ? (
                    <><Loader2 className="h-5 w-5 animate-spin" /> Processing...</>
                  ) : (
                    <>Request Franchise Brochure <ChevronRight className="h-5 w-5 md:h-6 md:w-6" strokeWidth={3} /></>
                  )}
                </button>
              </div>
            </form>
          </motion.div>

          {/* Hero image strip */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative w-full mt-10 h-[220px] md:h-[400px] rounded-[32px] md:rounded-[40px] overflow-hidden mb-10 shadow-2xl border-b-8 border-[#E54D35]"
          >
            <Image src={franchiseHero} alt="MotherHood Preschool franchise" fill className="object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 md:left-10">
              <span className="text-white text-[12px] font-black uppercase tracking-widest opacity-70">Partnering across India</span>
              <p className="text-white text-[22px] md:text-[30px] font-black leading-tight mt-1"> Growing every year.</p>
            </div>
          </motion.div>

  
        </div>

        <WaveBottom fill="#E0F2FE" />
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 2 — AUTO-SCROLLING BENEFITS CAROUSEL
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        className="relative px-4 pb-[160px] pt-16 md:pt-24 md:px-10 lg:px-16 bg-sky-100 min-h-[85vh] flex flex-col justify-center"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Background assets */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <Image src={Moon} alt="" className="absolute top-10 left-[5%] w-16 md:w-24 opacity-50" />
          <Image src={christmastree} alt="" className="absolute bottom-28 right-[3%] w-20 md:w-32 opacity-40 -rotate-6" />
          <Image src={flower} alt="" className="absolute top-[20%] right-[8%] w-14 md:w-20 opacity-30 animate-[spin_20s_linear_infinite]" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1200px]">

          {/* Section header */}
          <div className="mb-10 md:mb-16 text-center">
            <span className="inline-block text-[#E54D35] text-[12px] md:text-[14px] font-bold px-4 py-1.5 rounded-full mb-4 tracking-[0.15em] uppercase border-2 border-[#E54D35]">
              Why Partner With Us
            </span>
            <h2 className="text-[32px] sm:text-[45px] lg:text-[55px] font-black leading-[1.1] tracking-tight text-[#0F172A]">
              The MotherHood <span className="text-[#E54D35]">Advantage</span>
            </h2>
            <p className="mt-4 text-[15px] md:text-[17px] font-bold text-[#475569] max-w-xl mx-auto leading-relaxed">
              Five reasons thousands of partners chose to grow with us — and stayed.
            </p>
          </div>

          {/* Progress bar */}
          <div className="flex gap-1.5 mb-6 max-w-[900px] mx-auto px-2">
            {benefitSlides.map((s, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                className="relative flex-1 h-1.5 rounded-full bg-white/50 overflow-hidden"
                aria-label={`Go to ${s.title}`}
              >
                {idx === activeSlide && (
                  <motion.div
                    key={`progress-${activeSlide}-${paused}`}
                    className="absolute inset-0 rounded-full"
                    style={{ backgroundColor: slide?.color }}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: paused ? 0 : 3.2, ease: "linear" }}
                  />
                )}
                {idx < activeSlide && (
                  <div className="absolute inset-0 rounded-full" style={{ backgroundColor: benefitSlides[idx]?.color }} />
                )}
              </button>
            ))}
          </div>

          {/* Main carousel card */}
          <div className="relative w-full max-w-[900px] mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, x: 40, scale: 0.97 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -40, scale: 0.97 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="bg-white rounded-[32px] md:rounded-[40px] shadow-2xl p-6 md:p-12 border-b-8 flex flex-col md:flex-row items-center gap-8 md:gap-12"
                style={{ borderColor: slide?.color }}
              >
                {/* Asset panel */}
                <div
                  className="w-full md:w-[42%] flex flex-col justify-center items-center h-[200px] md:h-[280px] rounded-[24px] shrink-0 relative overflow-hidden"
                  style={{ backgroundColor: `${slide?.color}12` }}
                >
                    <Image
                      src={slide?.asset as StaticImageData}
                    alt={slide?.title || "Feature Image"}
                    className={`w-28 md:w-44 h-auto object-contain drop-shadow-xl relative z-10 ${slide?.animation}`}
                  />
                  {/* Big stat in bottom-left corner */}
                  <div
                    className="absolute bottom-4 left-4 rounded-2xl px-4 py-2 text-white"
                    style={{ backgroundColor: slide?.color }}
                  >
                    <p className="text-[22px] md:text-[28px] font-black leading-none">{slide?.stat}</p>
                    <p className="text-[10px] md:text-[12px] font-bold uppercase tracking-wider opacity-90">{slide?.statLabel}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-[58%] text-center md:text-left">
                  <span
                    className="inline-block text-white text-[11px] font-black px-3 py-1 rounded-full mb-4 uppercase tracking-widest"
                    style={{ backgroundColor: slide?.color }}
                  >
                    {slide?.tag} — 0{activeSlide + 1} / 0{benefitSlides.length}
                  </span>
                  <h3 className="text-[24px] md:text-[34px] font-black text-[#0F172A] mb-4 leading-tight">
                    {slide?.title}
                  </h3>
                  <p className="text-[14px] md:text-[17px] font-bold text-[#475569] leading-relaxed">
                    {slide?.desc}
                  </p>

                  {/* Mini quick-facts row */}
                  <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-3">
                    {benefitSlides.map((s, idx) => (
                      <button
                        key={idx}
                        onClick={() => goTo(idx)}
                        className={`text-[11px] font-black uppercase tracking-wider px-3 py-1.5 rounded-full border-2 transition-all ${
                          idx === activeSlide
                            ? "text-white border-transparent"
                            : "text-[#94A3B8] border-slate-200 hover:border-slate-300"
                        }`}
                        style={idx === activeSlide ? { backgroundColor: slide?.color, borderColor: slide?.color } : {}}
                      >
                        {s?.tag}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Arrow controls */}
            <div className="flex items-center justify-center gap-6 mt-10">
              <button
                onClick={prevSlide}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md hover:-translate-y-1 transition-all border-2 border-slate-100"
                aria-label="Previous benefit"
              >
                <ChevronLeft className="h-6 w-6 text-[#0F172A]" />
              </button>

              {/* Dot indicators */}
              <div className="flex gap-2">
                {benefitSlides.map((s, idx) => (
                  <button
                    key={idx}
                    onClick={() => goTo(idx)}
                    className="h-3 rounded-full transition-all duration-300"
                    style={{
                      width: activeSlide === idx ? "40px" : "12px",
                      backgroundColor: activeSlide === idx ? s.color : "#CBD5E1",
                    }}
                    aria-label={`Go to ${s.title}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md hover:-translate-y-1 transition-all border-2 border-slate-100"
                aria-label="Next benefit"
              >
                <ChevronRight className="h-6 w-6 text-[#0F172A]" />
              </button>
            </div>

            {/* Pause indicator */}
            {paused && (
              <p className="text-center text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest mt-4">
                ⏸ Paused — hover away to resume
              </p>
            )}
          </div>
        </div>

        <WaveBottom fill="#F0FDF4" />
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 3 — WHY IT WORKS + SUPPORT IMAGE
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative px-4 pb-[160px] pt-16 md:pt-24 md:px-10 lg:px-16 bg-green-50">

        {/* Decorative */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <Image src={christmastree} alt="" className="absolute bottom-32 left-[-10px] md:left-[4%] w-24 md:w-36 opacity-60 rotate-6" />
          <Image src={dear} alt="" className="absolute top-10 right-[6%] w-16 md:w-24 opacity-30" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-2">

          {/* Left: Why It Works */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <div className="mb-8">
              <span className="inline-block text-[#10b981] text-[12px] md:text-[14px] font-bold px-4 py-1.5 rounded-full mb-3 tracking-[0.15em] uppercase border-2 border-[#10b981]">
                The Edge
              </span>
              <h2 className="text-[32px] sm:text-[40px] font-black leading-tight text-[#0F172A]">
                Why It Works
              </h2>
            </div>

            <div className="space-y-4">
              {[
                { icon: TrendingUp, text: "Zero royalty — keep every rupee you earn", color: "#E54D35" },
                { icon: Megaphone, text: "End-to-end marketing and branding support", color: "#10b981" },
                { icon: Award, text: "Comprehensive teacher training built in", color: "#F59E0B" },
                { icon: Building2, text: "Ops handholding from setup to first batch", color: "#A275E1" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="relative rounded-[24px] bg-white p-5 md:p-6 shadow-md transition-transform hover:-translate-y-1 border-l-[6px]"
                  style={{ borderLeftColor: item.color }}
                >
                  <div className="flex items-center gap-4 md:gap-5">
                    <div
                      className="flex h-12 w-12 md:h-14 md:w-14 shrink-0 items-center justify-center rounded-full"
                      style={{ backgroundColor: `${item.color}18`, color: item.color }}
                    >
                      <item.icon className="h-6 w-6 md:h-7 md:w-7" />
                    </div>
                    <p className="text-[16px] md:text-[18px] font-black text-[#0F172A] leading-snug">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Best-fit callout */}
            <div className="mt-6 rounded-[28px] bg-[#0F172A] p-6 md:p-8 text-white shadow-xl">
              <div className="flex items-center gap-4 mb-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white shrink-0">
                  <Building2 className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Best Fit For</p>
                  <p className="text-[18px] md:text-[22px] font-black text-white leading-tight">Growth-minded operators</p>
                </div>
              </div>
              <p className="text-[14px] md:text-[15px] font-bold text-slate-300 leading-relaxed">
                Ideal for partners looking for a premium preschool identity, support-led launch, and long-term scale — without the headache of building from scratch.
              </p>
            </div>
          </motion.div>

          {/* Right: Highlights grid + image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6 mt-6 lg:mt-0"
          >
            {/* 2×2 stat cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: TrendingUp, title: "High ROI", stat: "< 1yr", tone: "#E54D35" },
                { icon: Megaphone, title: "Marketing", stat: "360°", tone: "#3B82F6" },
                { icon: Award, title: "Brand Trust", stat: "15 yrs", tone: "#F59E0B" },
                { icon: CheckCircle, title: "Zero Royalty", stat: "0%", tone: "#10b981" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col items-center justify-center text-center rounded-[28px] bg-white p-5 md:p-6 shadow-md border-b-4 transition-transform hover:-translate-y-1"
                  style={{ borderBottomColor: item.tone }}
                >
                  <div
                    className="mb-3 flex h-12 w-12 items-center justify-center rounded-full"
                    style={{ backgroundColor: `${item.tone}18`, color: item.tone }}
                  >
                    <item.icon className="h-6 w-6" />
                  </div>
                  <p className="text-[24px] md:text-[28px] font-black text-[#0F172A] leading-none">{item.stat}</p>
                  <p className="text-[12px] font-bold uppercase tracking-widest text-[#475569] mt-1">{item.title}</p>
                </div>
              ))}
            </div>

            {/* Support image card */}
            <div className="relative flex-1 min-h-[260px] w-full overflow-hidden rounded-[32px] md:rounded-[40px] shadow-xl border-b-8 border-[#E54D35]">
              <Image src={franchiseSupport} alt="Franchise support team" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 via-[#0F172A]/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-[22px] bg-white p-4 md:p-5">
                <p className="text-[11px] font-black uppercase tracking-widest text-[#E54D35]">Support System</p>
                <p className="mt-1 text-[13px] md:text-[14px] font-bold text-[#0F172A] leading-relaxed">
                  Setup, branding, curriculum, and launch support designed to reduce friction and build real momentum.
                </p>
              </div>
            </div>
          </motion.div>

        </div>

        <WaveBottom fill="#dbeafe" />
      </section>
    </div>
  );
}