"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { createClient } from "@supabase/supabase-js";
import { 
  MapPin, Phone, Clock, Navigation,
  ArrowRight, School, Globe, Sparkles, Timer, Loader2
} from "lucide-react";
import { Space_Mono } from "next/font/google";
import Link from "next/link";
import Navbar from "@/app/navbar/navbar";

// --- DECORATIVE ASSETS (Imported from Franchise styling) ---
import clouds from "@/public/websiteassest/cloud.png";
import balloon from "@/public/websiteassest/baloon.png";
import sun from "@/public/websiteassest/sun.png";

// --- FONTS ---
const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"] });

// --- SUPABASE CLIENT ---
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// --- SHARED COMPONENTS ---
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

// --- DATA STRUCTURES ---
type Center = {
  id: string;
  name: string;
  address: string;
  hours: string;
  mapEmbed: string; 
  slug: string;
  phone?: string; 
  country: string;
  state: string;
  city: string;
  status: 'open' | 'shortly';
};

type LocationData = {
  [country: string]: {
    [state: string]: {
      [city: string]: Center[];
    };
  };
};

export default function CentersPage() {
  // DB States
  const [admissionOpenDB, setAdmissionOpenDB] = useState<LocationData>({});
  const [openingShortlyDB, setOpeningShortlyDB] = useState<LocationData>({});
  const [loading, setLoading] = useState(true);

  // TAB STATE
  const [activeTab, setActiveTab] = useState<'open' | 'shortly'>('open');

  // Filter States
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedState, setSelectedState] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");
  
  // Result States
  const [centerList, setCenterList] = useState<Center[]>([]);
  const [activeCenter, setActiveCenter] = useState<Center | null>(null);

  const activeDB = activeTab === 'open' ? admissionOpenDB : openingShortlyDB;

  // --- FETCH DATA FROM SUPABASE ---
  useEffect(() => {
    const fetchCenters = async () => {
      setLoading(true);
      const { data, error } = await supabase.from('motherhoodcenters').select('*');
      
      if (error) {
        console.error("Error fetching centers:", error);
        setLoading(false);
        return;
      }

      const openDB: LocationData = {};
      const shortlyDB: LocationData = {};

      data.forEach((center: Center) => {
        const targetDB = center.status === 'open' ? openDB : shortlyDB;

        if (!targetDB[center.country]) targetDB[center.country] = {};
        if (!targetDB[center.country]![center.state]) targetDB[center.country]![center.state] = {};
        if (!targetDB[center.country]![center.state]![center.city]) targetDB[center.country]![center.state]![center.city] = [];

        const cityArray = targetDB[center.country]![center.state]![center.city];
        if (cityArray) {
          cityArray.push(center);
        }
      });

      setAdmissionOpenDB(openDB);
      setOpeningShortlyDB(shortlyDB);
      setLoading(false);
    };

    fetchCenters();
  }, []);

  // --- HANDLERS ---
  useEffect(() => {
    if (loading) return;
    
    const countries = Object.keys(activeDB);
    if (countries.length > 0) {
      setSelectedCountry(countries[0]!); 
    } else {
      setSelectedCountry("");
      setSelectedState("");
      setSelectedCity("");
      setCenterList([]);
      setActiveCenter(null);
    }
  }, [activeTab, activeDB, loading]);

  useEffect(() => {
    if (!selectedCountry) return;

    const states = Object.keys(activeDB[selectedCountry] || {});
    if (states.length > 0) {
      const firstState = states[0];
      setSelectedState(firstState!);
      
      const cities = Object.keys(activeDB[selectedCountry]?.[firstState!] || {});
      if (cities.length > 0) {
        setSelectedCity(cities[0] ?? "");
      } else {
        setSelectedCity("");
      }
    } else {
      setSelectedState("");
      setSelectedCity("");
    }
  }, [selectedCountry, activeDB]);

  useEffect(() => {
    if (selectedCountry && selectedState) {
        const cities = Object.keys(activeDB[selectedCountry]?.[selectedState] || {});
        if (cities.length > 0) {
            setSelectedCity(cities[0] ?? "");
        } else {
            setSelectedCity("");
        }
    }
  }, [selectedState, selectedCountry, activeDB]);

  useEffect(() => {
    if (selectedCountry && selectedState && selectedCity) {
        const centers = activeDB[selectedCountry]?.[selectedState]?.[selectedCity] || [];
        setCenterList(centers);
        if (centers.length > 0) {
            setActiveCenter(centers[0]!);
        } else {
            setActiveCenter(null);
        }
    } else {
        setCenterList([]);
        setActiveCenter(null);
    }
  }, [selectedCity, selectedState, selectedCountry, activeDB]);

  return (
    <div className={`relative overflow-x-hidden bg-green-100 text-[#0F172A] min-h-screen ${spaceMono.className}`}>
      <Navbar />

      {/* ──────────────────────────────────────────────────────────────
          SECTION 1 — HERO & FILTERS
      ────────────────────────────────────────────────────────────── */}
      <section className="relative px-4 pb-16 pt-[140px] md:pt-[160px] md:px-10 lg:px-16">
        
        {/* Background Sky Assets */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <Image src={clouds} alt="" className="absolute top-24 left-4 md:left-20 w-24 md:w-40 opacity-80 animate-pulse" />
          <Image src={sun} alt="" className="absolute top-32 right-[-20px] md:right-20 w-24 md:w-36 opacity-80 animate-[spin_40s_linear_infinite]" />
          <Image src={balloon} alt="" className="absolute top-60 left-[15%] w-10 md:w-16 opacity-60 animate-bounce" />
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
              <MapPin className="h-4 w-4 md:h-5 md:w-5" />
              Our Centers
            </div>
            <h1 className="mx-auto mt-6 md:mt-8 max-w-4xl text-[36px] sm:text-[50px] lg:text-[65px] font-black leading-[1.05] tracking-tight text-[#0F172A]">
              Find your nearest <br className="hidden sm:block" />
              <span className="text-[#E54D35]">MotherHood family.</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-[15px] md:text-[18px] font-bold text-[#475569] leading-relaxed">
              Explore our vibrant campuses across the country. Find a loving space for your little one near you.
            </p>
          </motion.div>

          {/* Controls: Tabs & Filters Container */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-auto w-full max-w-5xl rounded-[32px] md:rounded-[40px] bg-white shadow-2xl p-6 md:p-12 lg:p-16 border-b-8 border-[#E54D35]"
          >
            {/* Tabs */}
            <div className="mb-10 flex justify-center">
              <div className="inline-flex gap-3 rounded-full bg-slate-100 p-2 border-2 border-slate-200">
                <button 
                  onClick={() => setActiveTab('open')}
                  className={`flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold uppercase tracking-widest transition-all duration-300 ${activeTab === 'open' ? 'bg-[#E54D35] text-white shadow-lg' : 'bg-transparent text-slate-500 hover:bg-slate-200'}`}
                >
                  <Sparkles className="h-5 w-5" />
                  Admission Open
                </button>
                <button 
                  onClick={() => setActiveTab('shortly')}
                  className={`flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold uppercase tracking-widest transition-all duration-300 ${activeTab === 'shortly' ? 'bg-[#3B82F6] text-white shadow-lg' : 'bg-transparent text-slate-500 hover:bg-slate-200'}`}
                >
                  <Timer className="h-5 w-5" />
                  Opening Shortly
                </button>
              </div>
            </div>

            {/* Loading State for DB */}
            {loading ? (
              <div className="flex flex-col items-center justify-center py-10">
                <Loader2 className="h-10 w-10 animate-spin text-[#E54D35] mb-4" />
                <p className="text-lg font-bold text-slate-500">Loading centers...</p>
              </div>
            ) : Object.keys(activeDB).length > 0 ? (
              /* Dropdowns */
              <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
                
                {/* Country */}
                <div className="flex flex-col gap-2">
                  <label className="text-[12px] md:text-[13px] font-bold uppercase tracking-widest text-[#475569]">Country</label>
                  <div className="relative">
                    <Globe className="absolute left-4 top-[14px] h-5 w-5 text-[#94A3B8]" />
                    <select 
                      value={selectedCountry}
                      onChange={(e) => setSelectedCountry(e.target.value)}
                      className="w-full appearance-none rounded-2xl border-2 border-slate-200 bg-slate-50 py-3.5 pl-12 pr-10 text-[#0F172A] font-bold outline-none transition-colors focus:border-[#E54D35]"
                    >
                      {Object.keys(activeDB).map((country) => (
                        <option key={country} value={country}>{country}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute right-4 top-[14px] flex h-5 w-5 items-center justify-center bg-slate-50">
                      <span className="text-[10px] text-slate-400">▼</span>
                    </div>
                  </div>
                </div>

                {/* State */}
                <div className="flex flex-col gap-2">
                  <label className="text-[12px] md:text-[13px] font-bold uppercase tracking-widest text-[#475569]">State</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-[14px] h-5 w-5 text-[#94A3B8]" />
                    <select 
                      value={selectedState}
                      onChange={(e) => setSelectedState(e.target.value)}
                      disabled={!selectedCountry}
                      className="w-full appearance-none rounded-2xl border-2 border-slate-200 bg-slate-50 py-3.5 pl-12 pr-10 text-[#0F172A] font-bold outline-none transition-colors focus:border-[#E54D35] disabled:opacity-50"
                    >
                      {selectedCountry && Object.keys(activeDB[selectedCountry] || {}).map((state) => (
                        <option key={state} value={state}>{state}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute right-4 top-[14px] flex h-5 w-5 items-center justify-center bg-slate-50">
                      <span className="text-[10px] text-slate-400">▼</span>
                    </div>
                  </div>
                </div>

                {/* City */}
                <div className="flex flex-col gap-2">
                  <label className="text-[12px] md:text-[13px] font-bold uppercase tracking-widest text-[#475569]">City</label>
                  <div className="relative">
                    <Navigation className="absolute left-4 top-[14px] h-5 w-5 text-[#94A3B8]" />
                    <select 
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.target.value)}
                      disabled={!selectedState}
                      className="w-full appearance-none rounded-2xl border-2 border-slate-200 bg-slate-50 py-3.5 pl-12 pr-10 text-[#0F172A] font-bold outline-none transition-colors focus:border-[#E54D35] disabled:opacity-50"
                    >
                      {selectedCountry && selectedState && Object.keys(activeDB[selectedCountry]?.[selectedState] || {}).map((city) => (
                        <option key={city} value={city}>{city}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute right-4 top-[14px] flex h-5 w-5 items-center justify-center bg-slate-50">
                      <span className="text-[10px] text-slate-400">▼</span>
                    </div>
                  </div>
                </div>

              </div>
            ) : null}
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────
          SECTION 2 — RESULTS & MAP
      ────────────────────────────────────────────────────────────── */}
      <section className="relative px-4 pb-32 pt-8 md:px-10 lg:px-16 z-10">
        <div className="mx-auto max-w-[1200px]">
          
          {!loading && centerList.length > 0 ? (
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.1fr]">
              
              {/* LEFT: SCROLLABLE LIST */}
              <div className="flex max-h-[750px] flex-col gap-6 overflow-y-auto pb-4 pr-2 scrollbar-hide lg:pr-4">
                <AnimatePresence mode="wait">
                  {centerList.map((center, index) => (
                    <motion.div
                      key={center.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setActiveCenter(center)}
                      className={`relative cursor-pointer rounded-[32px] border-2 p-8 transition-all duration-300 ${
                        activeCenter?.id === center.id 
                          ? 'border-[#E54D35] bg-white shadow-[0_16px_40px_rgba(229,77,53,0.15)] border-b-8' 
                          : 'border-slate-200 bg-white hover:border-[#E54D35]/50 hover:shadow-lg'
                      }`}
                    >
                      <div className="mb-4 flex items-start justify-between">
                        <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border-2 ${activeCenter?.id === center.id ? 'bg-[#E54D35] border-[#E54D35] text-white' : 'bg-slate-50 border-slate-200 text-[#0F172A]'}`}>
                          <School className="h-6 w-6" />
                        </div>
                        {activeCenter?.id === center.id && (
                          <span className="rounded-full border-2 border-[#E54D35] bg-red-50 px-3 py-1 text-[12px] font-bold text-[#E54D35] uppercase tracking-widest">
                            Selected
                          </span>
                        )}
                      </div>

                      <h3 className="mb-4 text-2xl font-black text-[#0F172A]">
                        {center.name}
                      </h3>
                      
                      <div className="space-y-4 text-sm font-bold text-[#475569]">
                        <div className="flex items-start gap-3">
                          <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-slate-400" />
                          <span className="leading-relaxed">{center.address}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Clock className="h-5 w-5 shrink-0 text-slate-400" />
                          <span>{center.hours}</span>
                        </div>
                        {center.phone && (
                          <div className="flex items-center gap-3">
                            <Phone className="h-5 w-5 shrink-0 text-slate-400" />
                            <span>{center.phone}</span>
                          </div>
                        )}
                      </div>

                      <div className="mt-8 flex items-center justify-between border-t-2 border-slate-100 pt-6">
                        <span className="text-[12px] font-bold uppercase tracking-widest text-[#94A3B8]">View Detail 🚀</span>
                        <Link href={`/centers/${center.slug}`} onClick={(e) => e.stopPropagation()}>
                          <button className="flex items-center gap-2 rounded-full border-2 border-[#0F172A] bg-[#0F172A] px-6 py-3 text-[12px] font-bold uppercase tracking-widest text-white transition-all hover:-translate-y-1 hover:bg-transparent hover:text-[#0F172A]">
                            Visit Page <ArrowRight className="h-4 w-4" />
                          </button>
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* RIGHT: STICKY MAP */}
              {activeCenter && (
                <div className="h-[500px] lg:h-[750px] lg:sticky lg:top-10">
                  <motion.div 
                    key={activeCenter.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative h-full w-full overflow-hidden rounded-[40px] bg-white shadow-2xl border-2 border-slate-200 border-b-8 p-3"
                  >
                    <div className="relative h-full w-full overflow-hidden rounded-[28px] border-2 border-slate-100">
                      <iframe 
                        src={activeCenter.mapEmbed}
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen={true} 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        className="absolute inset-0 grayscale-[0.2] transition-all duration-500 hover:grayscale-0"
                      />
                      
                      {/* Floating Info Card on Map */}
                      <div className="absolute bottom-6 left-6 right-6 rounded-[24px] border-2 border-slate-200 bg-white/95 p-6 shadow-xl backdrop-blur-md">
                        <h4 className="flex items-center gap-2 text-xl font-black text-[#0F172A]">
                          <MapPin className="h-6 w-6 text-[#E54D35]" />
                          {activeCenter.name}
                        </h4>
                        <p className="pl-8 pr-4 pt-2 text-[14px] font-bold text-[#475569] truncate">
                          {activeCenter.address}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}
            </div>

          ) : !loading ? (
            
            /* EMPTY STATE */
            <div className="mx-auto max-w-2xl rounded-[40px] border-4 border-dashed border-slate-300 bg-white/60 p-16 text-center backdrop-blur-sm">
              <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-[32px] border-2 border-slate-200 bg-white shadow-sm">
                <School className="h-12 w-12 text-[#94A3B8]" />
              </div>
              
              {activeTab === 'open' ? (
                <>
                  <h3 className="mb-4 text-3xl font-black text-[#0F172A]">No Centers Found</h3>
                  <p className="mx-auto max-w-md text-lg leading-relaxed text-[#475569] font-bold">
                    Currently, there are no centers accepting admissions in this area. Check out our upcoming centers instead!
                  </p>
                  <button 
                    onClick={() => setActiveTab('shortly')}
                    className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-[#E54D35] bg-[#E54D35] px-8 py-4 text-[14px] font-bold uppercase tracking-widest text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-transparent hover:text-[#E54D35]"
                  >
                    View Upcoming Centers
                  </button>
                </>
              ) : (
                <>
                  <h3 className="mb-4 text-3xl font-black text-[#0F172A]">No Upcoming Centers</h3>
                  <p className="text-lg text-[#475569] font-bold">We don't have any centers opening shortly in this area yet.</p>
                </>
              )}
            </div>
          ) : null}

        </div>
      </section>

      <WaveBottom fill="#dbeafe" />
    </div>
  );
}