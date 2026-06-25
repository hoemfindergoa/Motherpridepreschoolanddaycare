"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { CalendarCheck, CheckCircle, ChevronRight, ChevronLeft, FileText, Loader2, Mail, MessageSquare, Phone, School, ShieldCheck, Sparkles, User, MapPin } from "lucide-react";
import { Space_Mono } from "next/font/google";

// Form Logic Imports
import { EmailFormschemaType } from "@/lib/schema";
import { IEmaildetail } from "@/lib/types";

// Navbar
import Navbar from "@/app/navbar/navbar";

// Original Section Images
import familyImage from "@/public/compressed/young-mother-with-her-little-baby-boy-having-fun-autumn-park.jpg.webp";

// Decorative Assets for Carousel & Backgrounds
import christmastree from "@/public/websiteassest/christmastreenew.png";
import jupiter from "@/public/websiteassest/jupyter.png";
import dear from "@/public/websiteassest/dear image.png";
import flower from "@/public/websiteassest/sunflower.png";
import Moon from "@/public/websiteassest/moon.png";
import clouds from "@/public/websiteassest/cloud.png";
import balloon from "@/public/websiteassest/baloon.png";
import sun from "@/public/websiteassest/sun.png";

const spaceMono = Space_Mono({ 
  subsets: ["latin"], 
  weight: ["400", "700"] 
});

/* ═══════════════════════════ COMPONENTS ═══════════════════════════ */

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

/* ═══════════════════════════ DATA ═══════════════════════════ */

const processSteps = [
  { icon: FileText, title: "Share your enquiry", copy: "Fill in your child and parent details so our team can guide you clearly." },
  { icon: CalendarCheck, title: "Schedule a visit", copy: "Come see the campus, feel the environment, and meet our team." },
  { icon: School, title: "Interaction & fit", copy: "We understand your child's needs and help you choose the right start." },
  { icon: CheckCircle, title: "Begin the journey", copy: "Complete the formalities and step into the MotherHood family." },
];

const carouselSlides = [
  {
    title: "Joyful & Safe Play",
    desc: "Vibrant indoor and outdoor play areas designed for physical development and uninhibited joy.",
    asset: balloon,
    color: "#E54D35", // Red
    animation: "animate-bounce"
  },
  {
    title: "Nature-Inspired Learning",
    desc: "Green spaces that encourage children to connect with the environment and learn through sensory experiences.",
    asset: flower,
    color: "#75C05B", // Green
    animation: "animate-[spin_15s_linear_infinite]"
  },
  {
    title: "Cosmic Curiosity",
    desc: "A curriculum that sparks imagination, prompting children to ask questions and explore their universe.",
    asset: jupiter,
    color: "#A275E1", // Purple
    animation: "animate-[spin_20s_linear_infinite]"
  },
  {
    title: "Warm & Nurturing",
    desc: "A motherly approach to caregiving, ensuring every child feels emotionally secure and seen as an individual.",
    asset: dear,
    color: "#F59E0B", // Amber
    animation: ""
  },
];

/* ═══════════════════════════ PAGE COMPONENT ═══════════════════════════ */

export default function AdmissionPage({
  onHandleSubmit,
  defaultEmail,
  isLoading,
}: {
  defaultEmail?: IEmaildetail;
  onHandleSubmit: (data: EmailFormschemaType) => void;
  isLoading: boolean;
}) {
  const form = useForm<EmailFormschemaType>({
    mode: "all",
    defaultValues: {
      email: defaultEmail?.email || "",
      name: defaultEmail?.name,
      phone: defaultEmail?.phone,
      city: defaultEmail?.city,
      state: defaultEmail?.state,
      message: defaultEmail?.message,
      admission_seeking: "Little Explorers - Playgroup (2 - 3 Years)",
    },
  });

  const { register, formState: { errors } } = form;

  // Carousel State
  const [activeSlide, setActiveSlide] = useState(0);
  const currentSlide = carouselSlides[activeSlide] ?? carouselSlides[0];
  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % carouselSlides.length);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);

  return (
    <div className={`relative overflow-x-hidden text-[#0F172A] ${spaceMono.className}`}>
      <Navbar />

      {/* ──────────────────────────────────────────────────────────────
          SECTION 1 — HERO & FORM (Wavy Bottom)
      ────────────────────────────────────────────────────────────── */}
      <section className="relative px-4 pb-[160px] pt-[140px] md:pt-[160px] md:px-10 lg:px-16 bg-pink-200 min-h-screen">
        
        {/* Floating Sky Assets */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <Image src={clouds} alt="clouds" className="absolute top-24 left-4 md:left-20 w-24 md:w-40 opacity-80 animate-pulse" />
          <Image src={sun} alt="sun" className="absolute top-32 right-[-20px] md:right-20 w-24 md:w-36 opacity-80 animate-[spin_40s_linear_infinite]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1200px]">
          
          {/* Centered Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10 md:mb-12 text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#E54D35] bg-white px-5 py-2 text-[14px] md:text-[16px] font-bold text-[#E54D35] shadow-sm uppercase tracking-widest">
              <Sparkles className="h-4 w-4 md:h-5 md:w-5" />
              Admissions Open 2026
            </div>
            <h1 className="mx-auto mt-6 md:mt-8 max-w-4xl text-[36px] sm:text-[50px] lg:text-[65px] font-black leading-[1.05] tracking-tight text-[#0F172A]">
              Begin your child's journey <br className="hidden sm:block" />
              <span className="text-[#E54D35]">with warmth & confidence.</span>
            </h1>
          </motion.div>

          {/* Bold Solid Form Container */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-auto w-full rounded-[32px] md:rounded-[40px] bg-white shadow-2xl p-6 md:p-12 lg:p-16 border-b-8 border-[#E54D35]"
          >
            <div className="mb-8 md:mb-10 text-center">
              <h2 className="text-[28px] md:text-[36px] font-black text-[#0F172A]">Enquiry Form</h2>
            </div>

            <form onSubmit={form.handleSubmit(onHandleSubmit)} className="grid grid-cols-1 gap-5 md:gap-6 md:grid-cols-3">
              
              {/* Row 1: 3 Fields */}
              <div className="flex flex-col gap-2">
                <label className="text-[12px] md:text-[13px] font-bold uppercase tracking-widest text-[#475569]">Parent Name</label>
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
                    {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })}
                    type="email"
                    placeholder="name@example.com"
                    disabled={isLoading}
                    className={`w-full rounded-2xl border-2 bg-slate-50 py-3.5 pl-12 pr-4 text-[#0F172A] font-bold outline-none transition-colors ${errors.email ? "border-[#E54D35] bg-red-50" : "border-slate-200 focus:border-[#E54D35]"}`}
                  />
                </div>
              </div>

              {/* Row 2: 3 Fields */}
              <div className="flex flex-col gap-2">
                <label className="text-[12px] md:text-[13px] font-bold uppercase tracking-widest text-[#475569]">City</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-[14px] h-5 w-5 text-[#94A3B8]" />
                  <input
                    {...register("city", { required: true })}
                    type="text"
                    placeholder="City"
                    disabled={isLoading}
                    className={`w-full rounded-2xl border-2 bg-slate-50 py-3.5 pl-12 pr-4 text-[#0F172A] font-bold outline-none transition-colors ${errors.city ? "border-[#E54D35] bg-red-50" : "border-slate-200 focus:border-[#E54D35]"}`}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[12px] md:text-[13px] font-bold uppercase tracking-widest text-[#475569]">State</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-[14px] h-5 w-5 text-[#94A3B8]" />
                  <input
                    {...register("state", { required: true })}
                    type="text"
                    placeholder="State"
                    disabled={isLoading}
                    className={`w-full rounded-2xl border-2 bg-slate-50 py-3.5 pl-12 pr-4 text-[#0F172A] font-bold outline-none transition-colors ${errors.state ? "border-[#E54D35] bg-red-50" : "border-slate-200 focus:border-[#E54D35]"}`}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[12px] md:text-[13px] font-bold uppercase tracking-widest text-[#475569]">Seeking Admission For</label>
                <div className="relative">
                  <select
                    {...register("admission_seeking")}
                    disabled={isLoading}
                    className="w-full appearance-none rounded-2xl border-2 border-slate-200 bg-slate-50 py-3.5 pl-4 pr-12 text-[#0F172A] font-bold outline-none transition-colors focus:border-[#E54D35]"
                  >
                    <option value="Little Explorers - Playgroup (2 - 3 Years)">Play Group (2 - 3 Yrs)</option>
                    <option value="Curious Learners - Nursery (3 - 4 Years)">Nursery (3 - 4 Yrs)</option>
                    <option value="Creative Thinkers - Lower Kindergarten (4 - 5 Years)">LKG (4 - 5 Yrs)</option>
                    <option value="Future Leaders - Upper Kindergarten (5 - 6 Years)">UKG (5 - 6 Yrs)</option>
                    <option value="Daycare">Daycare</option>
                  </select>
                  <ChevronRight className="pointer-events-none absolute right-4 top-[14px] h-5 w-5 rotate-90 text-[#94A3B8]" />
                </div>
              </div>

              {/* Row 3: Message Field */}
              <div className="flex flex-col gap-2 md:col-span-3 mt-2">
                <label className="text-[12px] md:text-[13px] font-bold uppercase tracking-widest text-[#475569]">Message</label>
                <div className="relative w-full">
                  <MessageSquare className="absolute left-4 top-4 h-5 w-5 text-[#94A3B8]" />
                  <textarea
                    {...register("message")}
                    rows={4}
                    placeholder="Share anything important about your child or your visit preference."
                    disabled={isLoading}
                    className="w-full resize-none rounded-[24px] border-2 border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-[#0F172A] font-bold outline-none transition-colors focus:border-[#E54D35]"
                  />
                </div>
              </div>

              {/* Row 4: Submit Button */}
              <div className="mt-6 flex justify-center md:col-span-3">
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`inline-flex items-center justify-center gap-3 rounded-full bg-[#E54D35] px-8 md:px-10 py-4 md:py-5 text-[14px] md:text-[16px] font-black uppercase tracking-widest text-white transition-all hover:-translate-y-1 hover:shadow-xl ${isLoading ? "cursor-not-allowed opacity-70 hover:translate-y-0 hover:shadow-none" : ""}`}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Submit Enquiry
                      <ChevronRight className="h-5 w-5 md:h-6 md:w-6" strokeWidth={3} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>

        <WaveBottom fill="#E0F2FE" /> {/* Transitions to sky-100 */}
      </section>

      {/* ──────────────────────────────────────────────────────────────
          SECTION 2 — CAROUSEL: "WHAT WE HAVE" (Wavy Bottom)
      ────────────────────────────────────────────────────────────── */}
      <section className="relative px-4 pb-[160px] pt-16 md:pt-24 md:px-10 lg:px-16 bg-sky-100 min-h-[80vh] flex flex-col justify-center">
        
        {/* Background Assets */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <Image src={Moon} alt="moon" className="absolute top-10 left-[5%] w-16 md:w-24 opacity-60" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1200px]">
          <div className="mb-10 md:mb-16 text-center">
            <span className="inline-block text-[#3B82F6] text-[12px] md:text-[14px] font-bold px-4 py-1.5 rounded-full mb-4 tracking-[0.15em] uppercase border-2 border-[#3B82F6]">
              Discover MotherHood
            </span>
            <h2 className="text-[32px] sm:text-[45px] lg:text-[55px] font-black leading-[1.1] tracking-tight text-[#0F172A]">
              What We Offer
            </h2>
          </div>

          {/* Interactive Slides Carousel */}
          <div className="relative w-full max-w-[900px] mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-[32px] md:rounded-[40px] shadow-2xl p-6 md:p-12 border-b-8 flex flex-col md:flex-row items-center gap-8 md:gap-12"
                style={{ borderColor: currentSlide?.color }}
              >
                {/* Visual Asset (The "Slide" Image) */}
                <div className="w-full md:w-1/2 flex justify-center items-center h-[200px] md:h-[280px] bg-slate-50 rounded-[24px]">
                  <Image 
                  src={currentSlide?.asset as StaticImageData}       
                  alt={currentSlide?.title || "Feature Image"}
                    className={`w-32 md:w-48 h-auto object-contain drop-shadow-xl ${currentSlide?.animation}`}
                  />
                </div>
                
                {/* Slide Content */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                  <span 
                    className="inline-block text-white text-[12px] font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest"
                    style={{ backgroundColor: currentSlide?.color }}
                  >
                    Feature 0{activeSlide + 1}
                  </span>
                  <h3 className="text-[26px] md:text-[34px] font-black text-[#0F172A] mb-4 leading-tight">
                    {currentSlide?.title}
                  </h3>
                  <p className="text-[15px] md:text-[18px] font-bold text-[#475569] leading-relaxed">
                    {currentSlide?.desc}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Carousel Controls */}
            <div className="flex items-center justify-center gap-6 mt-10">
              <button 
                onClick={prevSlide} 
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md hover:-translate-y-1 transition-all border-2 border-slate-100"
              >
                <ChevronLeft className="h-6 w-6 text-[#0F172A]" />
              </button>
              
              {/* Dots */}
              <div className="flex gap-2">
                {carouselSlides.map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    className={`h-3 rounded-full transition-all duration-300 ${activeSlide === idx ? "w-10" : "w-3 bg-slate-300"}`}
                    style={{ backgroundColor: activeSlide === idx ? carouselSlides[idx]?.color : undefined }}
                    aria-label={`Go to feature ${idx + 1}`}
                  />
                ))}
              </div>

              <button 
                onClick={nextSlide} 
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md hover:-translate-y-1 transition-all border-2 border-slate-100"
              >
                <ChevronRight className="h-6 w-6 text-[#0F172A]" />
              </button>
            </div>
          </div>
        </div>

        <WaveBottom fill="#F0FDF4" /> {/* Transitions to green-50 */}
      </section>

      {/* ──────────────────────────────────────────────────────────────
          SECTION 3 — PROCESS & DOCUMENTS (Wavy Bottom)
      ────────────────────────────────────────────────────────────── */}
      <section className="relative px-4 pb-[160px] pt-16 md:pt-24 md:px-10 lg:px-16 bg-green-50">
        
        {/* Decorative background trees */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <Image src={christmastree} alt="tree" className="absolute bottom-32 left-[-10px] md:left-[5%] w-24 md:w-36 opacity-70 rotate-6" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-2">
          
          {/* Left: Process Steps */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <div className="mb-8">
              <span className="inline-block text-[#75C05B] text-[12px] md:text-[14px] font-bold px-4 py-1.5 rounded-full mb-3 tracking-[0.15em] uppercase border-2 border-[#75C05B]">
                Process
              </span>
              <h2 className="text-[32px] sm:text-[40px] font-black leading-tight text-[#0F172A]">
                How It Works
              </h2>
            </div>
            
            <div className="space-y-4">
              {processSteps.map((step, idx) => (
                <div key={step.title} className="relative rounded-[24px] bg-white p-5 md:p-6 shadow-md transition-transform hover:-translate-y-1 border-l-[6px] border-[#75C05B]">
                  <div className="flex items-start gap-4 md:gap-5">
                    <div className="flex h-12 w-12 md:h-14 md:w-14 shrink-0 items-center justify-center rounded-full bg-green-50 text-[#75C05B]">
                      <step.icon className="h-6 w-6 md:h-7 md:w-7" />
                    </div>
                    <div>
                      <p className="text-[18px] md:text-[20px] font-black text-[#0F172A]">
                        {idx + 1}. {step.title}
                      </p>
                      <p className="mt-1 md:mt-2 text-[14px] md:text-[15px] font-bold text-[#475569] leading-relaxed">
                        {step.copy}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Required Documents & Photo */}
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="flex flex-col gap-6 md:gap-8 mt-6 lg:mt-0"
          >
            {/* Image Card */}
            <div className="relative h-[250px] md:h-[320px] w-full overflow-hidden rounded-[32px] md:rounded-[40px] shadow-xl">
               <Image src={familyImage} alt="Admissions at MotherHood" fill className="object-cover" />
            </div>

            {/* Documents List */}
            <div className="flex flex-col rounded-[32px] md:rounded-[40px] bg-white p-6 md:p-10 shadow-xl border-b-8 border-[#F59E0B]">
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <div className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-amber-50 text-[#F59E0B]">
                  <ShieldCheck className="h-6 w-6 md:h-7 md:w-7" />
                </div>
                <h3 className="text-[24px] md:text-[30px] font-black text-[#0F172A]">Keep these ready</h3>
              </div>
              <ul className="grid gap-3 md:gap-4">
                {[
                  "Birth certificate of the child",
                  "Passport-size photos",
                  "Parent ID and address proof",
                  "Medical details (if applicable)",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 md:gap-4 rounded-2xl bg-slate-50 border-2 border-slate-100 px-4 md:px-5 py-3 md:py-4 text-[14px] md:text-[15px] font-bold text-[#0F172A] transition-transform hover:-translate-x-1">
                    <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-[#F59E0B] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>
        
        {/* Assuming Footer sits directly below this, transitioning to white/blue-50 depending on your footer background */}
        <WaveBottom fill="#dbeafe" /> 
      </section>
    </div>
  );
}