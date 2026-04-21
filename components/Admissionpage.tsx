"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { CalendarCheck, CheckCircle, ChevronRight, FileText, Loader2, Mail, MessageSquare, Phone, School, ShieldCheck, Sparkles, User, MapPin } from "lucide-react";
import { Fredoka, Nunito } from "next/font/google";

import { EmailFormschemaType } from "@/lib/schema";
import { IEmaildetail } from "@/lib/types";
import familyImage from "../public/compressed/young-mother-with-her-little-baby-boy-having-fun-autumn-park.jpg.webp";

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

function DoodleFlower({ size = 56, color = "#e83d59", opacity = 0.5 }) {
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

function DoodleSquiggle({ width = 80, color = "#e83d59", opacity = 0.4 }) {
  return (
    <svg width={width} height="22" viewBox={`0 0 ${width} 22`} fill="none" aria-hidden="true">
      <path d={`M4 11 Q${width * 0.15} 3 ${width * 0.3} 11 Q${width * 0.45} 19 ${width * 0.6} 11 Q${width * 0.75} 3 ${width} 11`} stroke={color} strokeWidth="2.8" strokeLinecap="round" fill="none" opacity={opacity} />
    </svg>
  );
}

const processSteps = [
  { icon: FileText, title: "Share your enquiry", copy: "Fill in your child and parent details so our team can guide you clearly." },
  { icon: CalendarCheck, title: "Schedule a visit", copy: "Come see the campus, feel the environment, and meet our team." },
  { icon: School, title: "Interaction and fit", copy: "We understand your child's needs and help you choose the right start." },
  { icon: CheckCircle, title: "Begin the journey", copy: "Complete the formalities and step into the MotherHood family." },
];

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

  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div className={`relative overflow-x-hidden bg-[#fffaf7] text-slate-800 ${bodyFont.className}`}>
      
      {/* Background Doodles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 rotate-12"><DoodleHeart size={50} color="#e83d59" opacity={0.15} /></div>
        <div className="absolute top-40 right-[15%] -rotate-6"><DoodleStar size={45} color="#f29b54" opacity={0.2} /></div>
        <div className="absolute top-1/4 left-[5%]"><DoodleFlower size={55} color="#3b6ca8" opacity={0.15} /></div>
        <div className="absolute top-[40%] right-[5%] rotate-12"><DoodleSquiggle width={90} color="#a78bfa" opacity={0.2} /></div>
      </div>

      {/* ──────────────────────────────────────────────────────────────
          SECTION 1 — HERO & FORM (Centered)
      ────────────────────────────────────────────────────────────── */}
      <section className="relative px-6 pb-20 pt-32 md:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          
          {/* Centered Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white px-4 py-2 text-sm font-bold text-[#e83d59] shadow-sm">
              <Sparkles className="h-4 w-4" />
              Admissions Open 2026
            </div>
            <h1 className={`mx-auto mt-6 max-w-4xl text-4xl leading-[1.1] text-slate-900 sm:text-5xl lg:text-6xl ${headingFont.className}`}>
              Begin your child's journey
              <span className="block text-[#0b5bbd]">with warmth & confidence.</span>
            </h1>
           
          </motion.div>

          {/* Centered Glassmorphic Form Container */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-auto w-full rounded-[44px] bg-white/70 p-8 shadow-[0_24px_80px_rgba(232,61,89,0.12)] backdrop-blur-md md:p-12 lg:p-16"
          >
            <div className="mb-10 text-center">
              <DoodleSquiggle width={40} color="#e83d59" opacity={0.8} />
              <h2 className={`mt-3 text-3xl text-slate-800 md:text-4xl ${headingFont.className}`}>Enquiry Form</h2>
            </div>

            <form onSubmit={form.handleSubmit(onHandleSubmit)} className="grid grid-cols-1 gap-6 md:grid-cols-3">
              
              {/* Row 1: 3 Fields */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-extrabold uppercase tracking-[0.12em] text-slate-500">Parent Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-[14px] h-5 w-5 text-slate-400" />
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    placeholder="Your name"
                    disabled={isLoading}
                    className={`w-full rounded-2xl border-2 bg-white py-3.5 pl-12 pr-4 text-slate-700 outline-none transition-colors ${errors.name ? "border-red-400" : "border-slate-100 focus:border-[#e83d59]"}`}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-extrabold uppercase tracking-[0.12em] text-slate-500">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-[14px] h-5 w-5 text-slate-400" />
                  <input
                    {...register("phone", { required: true })}
                    type="tel"
                    placeholder="+91"
                    disabled={isLoading}
                    className={`w-full rounded-2xl border-2 bg-white py-3.5 pl-12 pr-4 text-slate-700 outline-none transition-colors ${errors.phone ? "border-red-400" : "border-slate-100 focus:border-[#e83d59]"}`}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-extrabold uppercase tracking-[0.12em] text-slate-500">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-[14px] h-5 w-5 text-slate-400" />
                  <input
                    {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })}
                    type="email"
                    placeholder="name@example.com"
                    disabled={isLoading}
                    className={`w-full rounded-2xl border-2 bg-white py-3.5 pl-12 pr-4 text-slate-700 outline-none transition-colors ${errors.email ? "border-red-400" : "border-slate-100 focus:border-[#e83d59]"}`}
                  />
                </div>
              </div>

              {/* Row 2: 3 Fields */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-extrabold uppercase tracking-[0.12em] text-slate-500">City</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-[14px] h-5 w-5 text-slate-400" />
                  <input
                    {...register("city", { required: true })}
                    type="text"
                    placeholder="City"
                    disabled={isLoading}
                    className={`w-full rounded-2xl border-2 bg-white py-3.5 pl-12 pr-4 text-slate-700 outline-none transition-colors ${errors.city ? "border-red-400" : "border-slate-100 focus:border-[#e83d59]"}`}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-extrabold uppercase tracking-[0.12em] text-slate-500">State</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-[14px] h-5 w-5 text-slate-400" />
                  <input
                    {...register("state", { required: true })}
                    type="text"
                    placeholder="State"
                    disabled={isLoading}
                    className={`w-full rounded-2xl border-2 bg-white py-3.5 pl-12 pr-4 text-slate-700 outline-none transition-colors ${errors.state ? "border-red-400" : "border-slate-100 focus:border-[#e83d59]"}`}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-extrabold uppercase tracking-[0.12em] text-slate-500">Seeking Admission For</label>
                <div className="relative">
                  <select
                    {...register("admission_seeking")}
                    disabled={isLoading}
                    className="w-full appearance-none rounded-2xl border-2 border-slate-100 bg-white py-3.5 pl-4 pr-12 text-slate-700 outline-none transition-colors focus:border-[#e83d59]"
                  >
                    <option value="Little Explorers - Playgroup (2 - 3 Years)">Play Group (2 - 3 Yrs)</option>
                    <option value="Curious Learners - Nursery (3 - 4 Years)">Nursery (3 - 4 Yrs)</option>
                    <option value="Creative Thinkers - Lower Kindergarten (4 - 5 Years)">LKG (4 - 5 Yrs)</option>
                    <option value="Future Leaders - Upper Kindergarten (5 - 6 Years)">UKG (5 - 6 Yrs)</option>
                    <option value="Daycare">Daycare</option>
                  </select>
                  <ChevronRight className="pointer-events-none absolute right-4 top-[14px] h-5 w-5 rotate-90 text-slate-400" />
                </div>
              </div>

              {/* Row 3: Message Field (Centered/Full Width) */}
              <div className="flex flex-col gap-2 md:col-span-3">
                <label className="text-sm font-extrabold uppercase tracking-[0.12em] text-slate-500 text-center">Message</label>
                <div className="relative mx-auto w-full md:w-3/4">
                  <MessageSquare className="absolute left-4 top-4 h-5 w-5 text-slate-400" />
                  <textarea
                    {...register("message")}
                    rows={4}
                    placeholder="Share anything important about your child or your visit preference."
                    disabled={isLoading}
                    className="w-full resize-none rounded-[24px] border-2 border-slate-100 bg-white py-3.5 pl-12 pr-4 text-slate-700 outline-none transition-colors focus:border-[#e83d59]"
                  />
                </div>
              </div>

              {/* Row 4: Submit Button */}
              <div className="mt-4 flex justify-center md:col-span-3">
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#e83d59] px-10 py-4 text-base font-extrabold uppercase tracking-[0.14em] text-white shadow-[0_8px_24px_rgba(232,61,89,0.35)] transition-all hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(232,61,89,0.45)] ${isLoading ? "cursor-not-allowed opacity-70 hover:translate-y-0" : ""}`}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Sending Enquiry
                    </>
                  ) : (
                    <>
                      Submit Enquiry
                      <ChevronRight className="h-5 w-5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────
          SECTION 2 — INFORMATION BLOCKS (Process & Documents)
      ────────────────────────────────────────────────────────────── */}
      <section className="relative px-6 pb-28 pt-8 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          
          {/* Left: Process Steps */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col rounded-[40px] bg-white/60 p-8 shadow-[0_18px_60px_rgba(59,108,168,0.06)] backdrop-blur-sm border border-white md:p-12"
          >
            <div className="flex items-center gap-3 mb-8">
               <DoodleStar size={24} color="#3b6ca8" opacity={1} />
               <h3 className={`text-3xl text-slate-900 ${headingFont.className}`}>How It Works</h3>
            </div>
            
            <div className="space-y-6">
              {processSteps.map((step, idx) => (
                <div key={step.title} className="relative rounded-[28px] bg-white p-5 shadow-sm transition-transform hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[18px] bg-[#f0f5ff] text-[#3b6ca8]">
                      <step.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className={`text-xl text-slate-800 ${headingFont.className}`}>
                        {idx + 1}. {step.title}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-500">{step.copy}</p>
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
             className="flex flex-col gap-8"
          >
            {/* Image Card */}
            <div className="relative h-[380px] w-full overflow-hidden rounded-[40px] shadow-[0_18px_60px_rgba(242,155,84,0.12)]">
               <Image src={familyImage} alt="Admissions at MotherHood" fill className="object-cover" />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
               
            </div>

            {/* Documents List */}
            <div className="flex flex-1 flex-col rounded-[40px] bg-[#fffcf0] p-8 shadow-[0_18px_60px_rgba(242,155,84,0.06)] md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-[18px] bg-amber-100 text-amber-500">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className={`text-3xl text-slate-900 ${headingFont.className}`}>Keep these ready</h3>
              </div>
              <ul className="grid gap-3">
                {[
                  "Birth certificate of the child",
                  "Passport-size photos (child & parents)",
                  "Parent ID and address proof",
                  "Medical details (if applicable)",
                  "Transfer certificate (if needed)",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-4 rounded-2xl bg-white px-5 py-4 text-sm font-bold text-slate-700 shadow-sm transition-transform hover:-translate-x-1">
                    <CheckCircle className="h-5 w-5 text-amber-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}