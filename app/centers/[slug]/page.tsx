"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { createClient } from "@supabase/supabase-js";
import { 
  ChevronRight, MapPin, Phone, Mail, School, CheckCircle, 
  CalendarCheck, Star, Play, Sparkles, Loader2, Image as ImageIcon,
  Heart, ShieldCheck
} from "lucide-react";
import { Fredoka, Nunito, Quicksand } from 'next/font/google';

// --- SUPABASE CLIENT ---
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// --- FONTS ---
const headingFont = Fredoka({ subsets: ["latin"], weight: ["600"] });
const bodyFont = Nunito({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });
const taglineFont = Quicksand({ subsets: ["latin"], weight: ["600", "700"] });

// --- DOODLE LIBRARY ---
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

// --- TYPES ---
type CenterDetails = {
  id: string;
  name: string;
  city: string;
  state: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  description: string;
  director: string;
  mapEmbed: string;
  facilities: string[];
  image: string; 
  theme: string; 
  status: "open" | "shortly"; 
};

// --- MAIN COMPONENT ---
export default function CenterProfile({ params }: { params: { slug: string } }) {
  const [center, setCenter] = useState<CenterDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // 1. Fetch Data from Supabase
  useEffect(() => {
    const fetchCenterDetails = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('centers')
        .select('*')
        .eq('slug', params.slug)
        .single(); 

      if (error || !data) {
        console.error("Error fetching center details:", error);
        setError(true);
      } else {
        setCenter(data);
      }
      setLoading(false);
    };

    fetchCenterDetails();
  }, [params.slug]);

  // 2. Handle Loading State
  if (loading) {
    return (
      <div className={`w-full min-h-screen flex flex-col items-center justify-center bg-[#fffaf7] ${bodyFont.className}`}>
        <Loader2 className="w-12 h-12 text-[#e83d59] animate-spin mb-4" />
        <h2 className={`text-2xl text-slate-700 ${headingFont.className}`}>Loading Campus Details...</h2>
      </div>
    );
  }

  // 3. Handle 404 / Error State
  if (error || !center) {
    return notFound();
  }

  return (
    <div className={`w-full flex flex-col bg-[#fffaf7] text-slate-800 overflow-x-hidden ${bodyFont.className}`}>
      
      {/* Background Doodles (Global) */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
        <div className="absolute top-32 left-10 rotate-12"><DoodleStar size={50} color="#f29b54" opacity={0.15} /></div>
        <div className="absolute top-60 right-[10%] -rotate-6"><DoodleHeart size={55} color="#e83d59" opacity={0.12} /></div>
        <div className="absolute top-[40%] left-[5%]"><DoodleSquiggle width={90} color="#3b6ca8" opacity={0.15} /></div>
        <div className="absolute top-[70%] right-[8%] rotate-12"><DoodleFlower size={60} color="#10b981" opacity={0.15} /></div>
      </div>

      {/* =========================================
          SECTION 1: HERO & INTRO
      ========================================= */}
      <section className="relative z-10 px-6 pt-32 pb-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl text-center">
          
          {/* Breadcrumb */}
          <motion.div 
             initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
             className="inline-flex items-center gap-2 text-slate-500 text-sm font-extrabold uppercase tracking-widest bg-white/60 backdrop-blur-md px-5 py-2.5 rounded-full mb-8 shadow-sm border border-slate-100"
          >
              <Link href="/" className="hover:text-[#e83d59] transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3 opacity-60" />
              <Link href="/centers" className="hover:text-[#e83d59] transition-colors">Centers</Link>
              <ChevronRight className="w-3 h-3 opacity-60" />
              <span className="text-[#e83d59] truncate max-w-[150px] md:max-w-none">{center.city}</span>
          </motion.div>

          {/* Title Area */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className={`text-5xl md:text-7xl leading-[1.05] text-slate-900 mb-6 ${headingFont.className}`}>
              Welcome to <br className="md:hidden" />
              <span className="text-[#e83d59]">{center.name}</span>
            </h1>
            
            <div className="flex flex-wrap justify-center items-center gap-3 mb-10">
               <span className="flex items-center gap-2 bg-blue-50 text-[#3b6ca8] px-4 py-2 rounded-full font-bold text-sm shadow-sm">
                 <MapPin className="w-4 h-4" /> {center.state}
               </span>
               {center.status === "shortly" ? (
                  <span className="flex items-center gap-2 bg-amber-100 text-amber-600 px-4 py-2 rounded-full font-bold text-sm shadow-sm">
                    <Sparkles className="w-4 h-4" /> Opening Soon
                  </span>
               ) : (
                  <span className="flex items-center gap-2 bg-emerald-100 text-emerald-600 px-4 py-2 rounded-full font-bold text-sm shadow-sm">
                    <CheckCircle className="w-4 h-4" /> Admissions Open
                  </span>
               )}
            </div>
          </motion.div>

          {/* Glassmorphic About Card */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full rounded-[44px] bg-white/70 p-8 shadow-[0_24px_80px_rgba(232,61,89,0.08)] backdrop-blur-md md:p-12 border border-white"
          >
            <DoodleSquiggle width={40} color="#e83d59" opacity={0.8} />
            <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              {center.description || `At MotherHood ${center.city}, we focus on creating a loving, nurturing, and stimulating environment where every child feels secure enough to grow, learn, and thrive with confidence.`}
            </p>
          </motion.div>

        </div>
      </section>

      {/* =========================================
          SECTION 2: CONTACT GRID
      ========================================= */}
      <section className="relative z-10 px-6 pb-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Address */}
          <div className="group relative flex flex-col items-center text-center rounded-[36px] bg-white/80 p-8 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_56px_rgba(15,23,42,0.06)]">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-50 text-rose-500 transition-transform group-hover:scale-110">
              <MapPin className="h-6 w-6" />
            </div>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-slate-400">Campus Address</p>
            <p className="mt-2 text-base font-bold text-slate-700">{center.address}</p>
          </div>

          {/* Phone */}
          <div className="group relative flex flex-col items-center text-center rounded-[36px] bg-white/80 p-8 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_56px_rgba(15,23,42,0.06)]">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 text-amber-500 transition-transform group-hover:scale-110">
              <Phone className="h-6 w-6" />
            </div>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-slate-400">Direct Line</p>
            <p className={`mt-2 text-xl text-slate-800 ${headingFont.className}`}>{center.phone || "To be announced"}</p>
          </div>

          {/* Email */}
          <div className="group relative flex flex-col items-center text-center rounded-[36px] bg-white/80 p-8 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_56px_rgba(15,23,42,0.06)]">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-500 transition-transform group-hover:scale-110">
              <Mail className="h-6 w-6" />
            </div>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-slate-400">Email Us</p>
            <p className="mt-2 text-base font-bold text-slate-700 break-all">{center.email || "info@motherhoodpreschoolanddaycare.com"}</p>
          </div>

        </div>
      </section>

      {/* =========================================
          SECTION 3: FACILITIES & GALLERY (Preparation)
      ========================================= */}
      <section className="relative z-10 bg-[#f0f7ff] pt-20 pb-28 px-6 md:px-10 lg:px-16 overflow-hidden">
        <WaveBottom fill="#fffaf7" /> {/* Transitioning back to main bg later */}
        
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
             <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-bold text-[#3b6ca8] shadow-sm mb-4">
               <ShieldCheck className="h-4 w-4" />
               Campus Details
             </div>
             <h2 className={`text-4xl md:text-5xl text-slate-900 ${headingFont.className}`}>
               Designed for <span className="text-[#3b6ca8]">Joy & Safety</span>
             </h2>
          </div>

          {/* Facilities Pill Grid */}
          <div className="flex flex-wrap justify-center gap-3 mb-24">
            {center.facilities && center.facilities.length > 0 ? (
              center.facilities.map((facility, index) => (
                <div key={index} className="bg-white text-slate-700 px-6 py-3.5 rounded-full font-bold shadow-sm border border-blue-100 flex items-center gap-3 transition-transform hover:-translate-y-1">
                  <CheckCircle className="w-5 h-5 text-[#3b6ca8]" />
                  {facility}
                </div>
              ))
            ) : (
              <div className="text-slate-500 italic font-semibold bg-white px-6 py-3 rounded-full">
                Detailed facilities list coming soon.
              </div>
            )}
          </div>

          {/* Placeholder for Future Photo Gallery */}
          <div className="w-full rounded-[44px] bg-white/60 p-8 md:p-12 border-2 border-dashed border-blue-200 text-center backdrop-blur-sm">
             <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-blue-100 text-[#3b6ca8] mb-6">
                <ImageIcon className="h-10 w-10" />
             </div>
             <h3 className={`text-3xl text-slate-800 mb-3 ${headingFont.className}`}>Campus Gallery</h3>
             <p className="text-slate-500 max-w-md mx-auto font-medium">
               We are currently capturing beautiful moments from this center. High-quality photos of our classrooms, play areas, and events will be added here shortly.
             </p>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 4: MAP & VISIT
      ========================================= */}
      <section className="relative z-10 bg-[#fffaf7] pt-20 pb-28 px-6 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          
          {/* Big Map Card */}
          <div className="flex flex-col overflow-hidden rounded-[44px] bg-white p-4 shadow-[0_24px_80px_rgba(232,61,89,0.08)]">
            <div className="px-6 py-5 md:px-8">
              <div className="flex items-center gap-3 mb-2">
                <DoodleHeart size={24} color="#e83d59" opacity={0.8} />
                <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#e83d59]">Locate Us</p>
              </div>
              <h2 className={`text-3xl text-slate-900 ${headingFont.className}`}>Find us on the map</h2>
            </div>
            
            <div className="relative h-[380px] w-full overflow-hidden rounded-[32px] md:h-[400px]">
              <iframe
                src={center.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale-[0.15] transition-all duration-500 hover:grayscale-0"
              />
            </div>
          </div>

          {/* Quick Info & CTA */}
          <div className="flex flex-col gap-6 justify-center">
            <div className="rounded-[40px] bg-[#fff4f6] p-8 md:p-10 border border-rose-100">
              <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#e83d59] mb-4">Center Director</p>
              <h3 className={`text-3xl text-slate-900 ${headingFont.className}`}>{center.director || "Center Head"}</h3>
              <p className="mt-4 text-slate-600 font-medium leading-relaxed">
                "We look forward to welcoming you and your little one to our campus. Schedule a visit to experience our environment firsthand."
              </p>
            </div>

            <div className="rounded-[40px] bg-[#3b6ca8] p-8 text-white shadow-[0_24px_70px_rgba(59,108,168,0.22)]">
               <h3 className={`text-3xl mb-4 ${headingFont.className}`}>
                 {center.status === "shortly" ? "Be the First to Join!" : "Ready to Join?"}
               </h3>
               <p className="text-blue-100 font-medium mb-8">
                 {center.status === "shortly" 
                   ? `Pre-registrations are opening for ${center.name}. Secure a spot in our founding batch.` 
                   : `Admissions are open for the upcoming session. Let's begin the journey.`
                 }
               </p>
               <Link href="/admission" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-extrabold uppercase tracking-[0.14em] text-[#3b6ca8] transition-all hover:-translate-y-1 hover:shadow-lg">
                  {center.status === "shortly" ? "Pre-Register Now" : "Start Admission"} <Play className="h-4 w-4 fill-[#3b6ca8]" />
               </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}