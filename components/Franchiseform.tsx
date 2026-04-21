"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { 
  Award, Briefcase, Building2, CheckCircle, ChevronRight, Globe, Loader2, 
  MapPin, Megaphone, Mail, Phone, TrendingUp, User, Wallet 
} from "lucide-react";
import { Fredoka, Nunito } from "next/font/google";

import { FranchiseFormSchemaType } from "@/lib/schema";
import { IFranchiseDetail } from "@/lib/types";
import franchiseHero from "../public/compressed/woman-yellow-dress-with-bunch-children-background.jpg.webp";
import franchiseSupport from "../public/compressed/happy-family-home-mother-lifting-air-little-toddler-child-daughter-mom-baby-girl-playing-h.jpg.webp";

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

const highlights = [
  { icon: TrendingUp, title: "High ROI", tone: "rose" },
  { icon: Megaphone, title: "Marketing Support", tone: "blue" },
  { icon: Award, title: "Strong Brand", tone: "amber" },
  { icon: Globe, title: "Expansion Ready", tone: "emerald" },
];

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

  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div className={`relative overflow-x-hidden bg-[#f4fbf8] text-slate-800 ${bodyFont.className}`}>
      
      {/* Background Doodles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 rotate-12"><DoodleFlower size={60} color="#10b981" opacity={0.15} /></div>
        <div className="absolute top-40 right-[15%] -rotate-6"><DoodleStar size={45} color="#f29b54" opacity={0.2} /></div>
        <div className="absolute top-1/4 left-[5%]"><DoodleHeart size={50} color="#e83d59" opacity={0.15} /></div>
        <div className="absolute top-[40%] right-[5%] rotate-12"><DoodleSquiggle width={90} color="#3b6ca8" opacity={0.2} /></div>
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
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-bold text-emerald-600 shadow-sm">
              <Briefcase className="h-4 w-4" />
              Franchise With MothersPride
            </div>
            <h1 className={`mx-auto mt-6 max-w-4xl text-3xl leading-[1.1] text-slate-900 sm:text-5xl lg:text-6xl ${headingFont.className}`}>
              Build a preschool brand
              <span className="block text-[#10b981]">with heart and scale.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
              A cleaner, more premium franchise journey with strong support, clear positioning, and growth-minded execution. Fill out the form below to receive our detailed brochure.
            </p>
          </motion.div>

          {/* Centered Glassmorphic Form Container */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-auto w-full rounded-[44px] bg-white/70 p-8 shadow-[0_24px_80px_rgba(16,185,129,0.12)] backdrop-blur-md md:p-12 lg:p-16"
          >
            <div className="mb-10 text-center">
              <DoodleSquiggle width={40} color="#10b981" opacity={0.8} />
              <h2 className={`mt-3 text-3xl text-slate-800 md:text-4xl ${headingFont.className}`}>Request Franchise Brochure</h2>
            </div>

            <form onSubmit={form.handleSubmit(onHandleSubmit)} className="grid grid-cols-1 gap-6 md:grid-cols-3">
              
              {/* Row 1: Name, Phone, Email */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-extrabold uppercase tracking-[0.12em] text-slate-500">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-[14px] h-5 w-5 text-slate-400" />
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    placeholder="Your name"
                    disabled={isLoading}
                    className={`w-full rounded-2xl border-2 bg-white py-3.5 pl-12 pr-4 text-slate-700 outline-none transition-colors ${errors.name ? "border-red-400" : "border-slate-100 focus:border-emerald-400"}`}
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
                    className={`w-full rounded-2xl border-2 bg-white py-3.5 pl-12 pr-4 text-slate-700 outline-none transition-colors ${errors.phone ? "border-red-400" : "border-slate-100 focus:border-emerald-400"}`}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-extrabold uppercase tracking-[0.12em] text-slate-500">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-[14px] h-5 w-5 text-slate-400" />
                  <input
                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                    type="email"
                    placeholder="name@example.com"
                    disabled={isLoading}
                    className={`w-full rounded-2xl border-2 bg-white py-3.5 pl-12 pr-4 text-slate-700 outline-none transition-colors ${errors.email ? "border-red-400" : "border-slate-100 focus:border-emerald-400"}`}
                  />
                </div>
              </div>

              {/* Row 2: City, Budget, Property */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-extrabold uppercase tracking-[0.12em] text-slate-500">City / Location</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-[14px] h-5 w-5 text-slate-400" />
                  <input
                    {...register("city", { required: true })}
                    type="text"
                    placeholder="Preferred city"
                    disabled={isLoading}
                    className={`w-full rounded-2xl border-2 bg-white py-3.5 pl-12 pr-4 text-slate-700 outline-none transition-colors ${errors.city ? "border-red-400" : "border-slate-100 focus:border-emerald-400"}`}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-extrabold uppercase tracking-[0.12em] text-slate-500">Investment Budget</label>
                <div className="relative">
                  <Wallet className="absolute left-4 top-[14px] h-5 w-5 text-slate-400" />
                  <select
                    {...register("budget")}
                    disabled={isLoading}
                    className="w-full appearance-none rounded-2xl border-2 border-slate-100 bg-white py-3.5 pl-12 pr-12 text-slate-700 outline-none transition-colors focus:border-emerald-400"
                  >
                    <option value="Playway (5 to 6 lakh)">Playway (5 to 6 lakh)</option>
                    <option value="Montessori (6-7 lakh)">Montessori (6-7 lakh)</option>
                  </select>
                  <ChevronRight className="pointer-events-none absolute right-4 top-[14px] h-5 w-5 rotate-90 text-slate-400" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-extrabold uppercase tracking-[0.12em] text-slate-500">Property Status</label>
                <div className="relative">
                  <Building2 className="absolute left-4 top-[14px] h-5 w-5 text-slate-400" />
                  <select
                    {...register("property")}
                    disabled={isLoading}
                    className="w-full appearance-none rounded-2xl border-2 border-slate-100 bg-white py-3.5 pl-12 pr-12 text-slate-700 outline-none transition-colors focus:border-emerald-400"
                  >
                    <option value="Yes, I own commercial property">Own commercial property</option>
                    <option value="No, I will rent/lease">Will rent/lease</option>
                  </select>
                  <ChevronRight className="pointer-events-none absolute right-4 top-[14px] h-5 w-5 rotate-90 text-slate-400" />
                </div>
              </div>

              {/* Row 3: Submit Button */}
              <div className="mt-4 flex justify-center md:col-span-3">
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-10 py-4 text-base font-extrabold uppercase tracking-[0.14em] text-white shadow-[0_8px_24px_rgba(16,185,129,0.35)] transition-all hover:-translate-y-1 hover:bg-emerald-600 hover:shadow-[0_12px_32px_rgba(16,185,129,0.45)] ${isLoading ? "cursor-not-allowed opacity-70 hover:translate-y-0" : ""}`}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Processing
                    </>
                  ) : (
                    <>
                      Request Franchise Brochure
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
          SECTION 2 — INFORMATION BLOCKS 
      ────────────────────────────────────────────────────────────── */}
      <section className="relative px-6 pb-28 pt-8 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          
          {/* Left: Why It Works & Best Fit */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            {/* Why It Works */}
            <div className="rounded-[40px] bg-white/60 p-8 shadow-[0_18px_60px_rgba(16,185,129,0.06)] backdrop-blur-sm border border-white md:p-10">
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-emerald-600">Why It Works</p>
              <h3 className={`mt-2 text-3xl text-slate-900 ${headingFont.className}`}>The MothersPride Advantage</h3>
              <div className="mt-6 grid gap-4">
                {["Zero royalty model", "End-to-end operational support", "Comprehensive training & branding", "Growth-ready structure"].map((item) => (
                  <div key={item} className="flex items-center gap-4 rounded-2xl bg-white px-5 py-4 text-sm font-bold text-slate-700 shadow-sm transition-transform hover:-translate-x-1">
                    <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Best Fit Card */}
            <div className="rounded-[34px] bg-[#3b6ca8] p-8 text-white shadow-[0_24px_70px_rgba(59,108,168,0.22)]">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/14 text-white">
                  <Building2 className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-blue-100">Best Fit</p>
                  <h3 className={`text-2xl text-white ${headingFont.className}`}>Growth-minded operators</h3>
                </div>
              </div>
              <p className="mt-5 text-base font-medium leading-relaxed text-blue-50">
                Ideal for partners looking for a premium preschool identity, support-led launch process, and long-term scale.
              </p>
            </div>
          </motion.div>

          {/* Right: Highlights Grid & Image */}
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="flex flex-col gap-6"
          >
            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div key={item.title} className="flex flex-col items-center justify-center text-center rounded-[30px] bg-white p-6 shadow-sm border border-slate-100 transition-transform hover:-translate-y-1">
                  <div className={`mb-3 flex h-12 w-12 items-center justify-center rounded-2xl ${
                      item.tone === "rose" ? "bg-rose-100 text-rose-500" :
                      item.tone === "blue" ? "bg-blue-100 text-blue-500" :
                      item.tone === "amber" ? "bg-amber-100 text-amber-500" :
                      "bg-emerald-100 text-emerald-500"
                    }`}>
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className={`text-xl text-slate-800 ${headingFont.className}`}>{item.title}</h3>
                </div>
              ))}
            </div>

            {/* Support System Image */}
            <div className="relative flex-1 min-h-[260px] w-full overflow-hidden rounded-[40px] shadow-[0_18px_60px_rgba(15,23,42,0.1)]">
               <Image src={franchiseSupport} alt="Franchise support" fill className="object-cover" />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent" />
               <div className="absolute bottom-6 left-6 right-6 rounded-[24px] bg-white/90 p-5 backdrop-blur-md">
                 <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#3b6ca8]">Support System</p>
                 <p className="mt-1 text-sm font-bold leading-relaxed text-slate-700">
                   Setup, branding, curriculum, and launch support designed to reduce friction and build momentum.
                 </p>
               </div>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}