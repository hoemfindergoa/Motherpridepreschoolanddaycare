"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createClient } from "@supabase/supabase-js";
import { 
  Home, ChevronRight, MapPin, Phone, Clock, Navigation,
  ArrowRight, School, Globe, Sparkles, Timer, Loader2
} from "lucide-react";
import { Fredoka, Nunito } from "next/font/google";
import Link from "next/link";

// --- SUPABASE CLIENT ---
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// --- FONTS ---
const headingFont = Fredoka({ subsets: ["latin"], weight: ["600"] });
const bodyFont = Nunito({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

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
      const { data, error } = await supabase.from('Motherhoodcenter').select('*');
      
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
    <div className={`relative overflow-x-hidden bg-[#fffaf7] text-slate-800 min-h-screen ${bodyFont.className}`}>
      
      {/* Background Doodles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-24 left-10 rotate-12"><DoodleStar size={50} color="#f29b54" opacity={0.15} /></div>
        <div className="absolute top-40 right-[15%] -rotate-6"><DoodleHeart size={45} color="#e83d59" opacity={0.15} /></div>
        <div className="absolute top-[40%] left-[5%]"><DoodleFlower size={55} color="#10b981" opacity={0.15} /></div>
        <div className="absolute top-[20%] right-[5%] rotate-12"><DoodleSquiggle width={90} color="#3b6ca8" opacity={0.2} /></div>
      </div>

      {/* ──────────────────────────────────────────────────────────────
          SECTION 1 — HERO & FILTERS
      ────────────────────────────────────────────────────────────── */}
      <section className="relative px-6 pb-12 pt-32 md:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          
          {/* Centered Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-bold text-[#3b6ca8] shadow-sm">
              <MapPin className="h-4 w-4" />
              Our Centers
            </div>
            <h1 className={`mx-auto mt-6 max-w-4xl text-5xl leading-[1.1] text-slate-900 sm:text-6xl lg:text-7xl ${headingFont.className}`}>
              Find your nearest
              <span className="block text-[#3b6ca8]">MotherHood family.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
              Explore our vibrant campuses across the country. Find a loving space for your little one near you.
            </p>
          </motion.div>

          {/* Controls: Tabs & Filters */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-auto w-full max-w-4xl rounded-[44px] bg-white/70 p-6 shadow-[0_24px_80px_rgba(59,108,168,0.08)] backdrop-blur-md md:p-10"
          >
            {/* Tabs */}
            <div className="mb-8 flex justify-center">
              <div className="inline-flex gap-2 rounded-full bg-white p-2 shadow-sm border border-slate-100">
                <button 
                  onClick={() => setActiveTab('open')}
                  className={`flex items-center gap-2 rounded-full px-6 py-3 text-sm font-extrabold uppercase tracking-[0.12em] transition-all duration-300 ${activeTab === 'open' ? 'bg-[#3b6ca8] text-white shadow-md' : 'bg-transparent text-slate-500 hover:bg-slate-50'}`}
                >
                  <Sparkles className="h-4 w-4" />
                  Admission Open
                </button>
                <button 
                  onClick={() => setActiveTab('shortly')}
                  className={`flex items-center gap-2 rounded-full px-6 py-3 text-sm font-extrabold uppercase tracking-[0.12em] transition-all duration-300 ${activeTab === 'shortly' ? 'bg-[#e83d59] text-white shadow-md' : 'bg-transparent text-slate-500 hover:bg-slate-50'}`}
                >
                  <Timer className="h-4 w-4" />
                  Opening Shortly
                </button>
              </div>
            </div>

            {/* Loading State for DB */}
            {loading ? (
              <div className="flex flex-col items-center justify-center py-10">
                <Loader2 className="h-10 w-10 animate-spin text-[#3b6ca8] mb-4" />
                <p className="text-lg font-bold text-slate-500">Loading centers...</p>
              </div>
            ) : Object.keys(activeDB).length > 0 ? (
              /* Dropdowns */
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="flex flex-col gap-2">
                  <label className="ml-2 text-xs font-extrabold uppercase tracking-[0.12em] text-slate-500">Country</label>
                  <div className="relative">
                    <Globe className="absolute left-4 top-[14px] h-5 w-5 text-slate-400" />
                    <select 
                      value={selectedCountry}
                      onChange={(e) => setSelectedCountry(e.target.value)}
                      className="w-full appearance-none rounded-2xl border-2 border-slate-100 bg-white py-3.5 pl-12 pr-10 text-slate-700 outline-none transition-colors focus:border-[#3b6ca8]"
                    >
                      {Object.keys(activeDB).map((country) => (
                        <option key={country} value={country}>{country}</option>
                      ))}
                    </select>
                    <ChevronRight className="pointer-events-none absolute right-4 top-[14px] h-5 w-5 rotate-90 text-slate-400" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="ml-2 text-xs font-extrabold uppercase tracking-[0.12em] text-slate-500">State</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-[14px] h-5 w-5 text-slate-400" />
                    <select 
                      value={selectedState}
                      onChange={(e) => setSelectedState(e.target.value)}
                      disabled={!selectedCountry}
                      className="w-full appearance-none rounded-2xl border-2 border-slate-100 bg-white py-3.5 pl-12 pr-10 text-slate-700 outline-none transition-colors focus:border-[#3b6ca8] disabled:opacity-50"
                    >
                      {selectedCountry && Object.keys(activeDB[selectedCountry] || {}).map((state) => (
                        <option key={state} value={state}>{state}</option>
                      ))}
                    </select>
                    <ChevronRight className="pointer-events-none absolute right-4 top-[14px] h-5 w-5 rotate-90 text-slate-400" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="ml-2 text-xs font-extrabold uppercase tracking-[0.12em] text-slate-500">City</label>
                  <div className="relative">
                    <Navigation className="absolute left-4 top-[14px] h-5 w-5 text-slate-400" />
                    <select 
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.target.value)}
                      disabled={!selectedState}
                      className="w-full appearance-none rounded-2xl border-2 border-slate-100 bg-white py-3.5 pl-12 pr-10 text-slate-700 outline-none transition-colors focus:border-[#3b6ca8] disabled:opacity-50"
                    >
                      {selectedCountry && selectedState && Object.keys(activeDB[selectedCountry]?.[selectedState] || {}).map((city) => (
                        <option key={city} value={city}>{city}</option>
                      ))}
                    </select>
                    <ChevronRight className="pointer-events-none absolute right-4 top-[14px] h-5 w-5 rotate-90 text-slate-400" />
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
      <section className="relative px-6 pb-28 pt-8 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          
          {!loading && centerList.length > 0 ? (
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.1fr]">
              
              {/* LEFT: SCROLLABLE LIST */}
              <div className="flex max-h-[700px] flex-col gap-6 overflow-y-auto pb-4 pr-2 scrollbar-hide lg:pr-4">
                <AnimatePresence mode="wait">
                  {centerList.map((center, index) => (
                    <motion.div
                      key={center.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setActiveCenter(center)}
                      className={`relative cursor-pointer rounded-[32px] border-2 p-7 transition-all duration-300 ${
                        activeCenter?.id === center.id 
                          ? 'border-[#3b6ca8] bg-white shadow-[0_16px_56px_rgba(59,108,168,0.12)]' 
                          : 'border-transparent bg-white/60 hover:bg-white hover:shadow-md'
                      }`}
                    >
                      <div className="mb-4 flex items-start justify-between">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-[#3b6ca8]">
                          <School className="h-6 w-6" />
                        </div>
                        {activeCenter?.id === center.id && (
                          <span className="rounded-full bg-[#3b6ca8] px-3 py-1 text-xs font-bold text-white">
                            Selected
                          </span>
                        )}
                      </div>

                      <h3 className={`mb-3 text-2xl text-slate-900 ${headingFont.className}`}>
                        {center.name}
                      </h3>
                      
                      <div className="space-y-3 text-sm font-semibold text-slate-600">
                        <div className="flex items-start gap-3">
                          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                          <span>{center.address}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Clock className="h-4 w-4 shrink-0 text-slate-400" />
                          <span>{center.hours}</span>
                        </div>
                        {center.phone && (
                          <div className="flex items-center gap-3">
                            <Phone className="h-4 w-4 shrink-0 text-slate-400" />
                            <span>{center.phone}</span>
                          </div>
                        )}
                      </div>

                      <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                        <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400">View Map 👉</span>
                        <Link href={`/centers/${center.slug}`} onClick={(e) => e.stopPropagation()}>
                          <button className="flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider text-white transition-all hover:-translate-y-1 hover:bg-slate-800 hover:shadow-lg">
                            Visit Page <ArrowRight className="h-3 w-3" />
                          </button>
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* RIGHT: STICKY MAP */}
              {activeCenter && (
                <div className="h-[450px] lg:h-[700px] lg:sticky lg:top-10">
                  <motion.div 
                    key={activeCenter.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative h-full w-full overflow-hidden rounded-[44px] bg-white p-3 shadow-[0_24px_80px_rgba(15,23,42,0.1)]"
                  >
                    <div className="relative h-full w-full overflow-hidden rounded-[32px]">
                      <iframe 
                        src={activeCenter.mapEmbed}
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen={true} 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        className="absolute inset-0 grayscale-[0.15] transition-all duration-500 hover:grayscale-0"
                      />
                      
                      {/* Floating Info Card on Map */}
                      <div className="absolute bottom-6 left-6 right-6 rounded-[28px] bg-white/95 p-5 shadow-xl backdrop-blur-md">
                        <h4 className={`flex items-center gap-2 text-xl text-slate-900 ${headingFont.className}`}>
                          <MapPin className="h-5 w-5 text-[#e83d59]" />
                          {activeCenter.name}
                        </h4>
                        <p className="pl-7 pr-4 pt-1 text-sm font-semibold text-slate-600 truncate">
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
            <div className="mx-auto max-w-2xl rounded-[44px] border-2 border-dashed border-slate-200 bg-white/50 p-12 text-center backdrop-blur-sm">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-[24px] bg-blue-50">
                <School className="h-10 w-10 text-[#3b6ca8]" />
              </div>
              
              {activeTab === 'open' ? (
                <>
                  <h3 className={`mb-3 text-3xl text-slate-800 ${headingFont.className}`}>No Centers Available</h3>
                  <p className="mx-auto max-w-md text-lg leading-relaxed text-slate-500">
                    Currently, there are no centers accepting admissions in this area. Please check back later or view our upcoming centers.
                  </p>
                  <button 
                    onClick={() => setActiveTab('shortly')}
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#e83d59] px-7 py-3.5 text-sm font-extrabold uppercase tracking-[0.14em] text-white shadow-md transition-all hover:-translate-y-1 hover:shadow-lg"
                  >
                    View Upcoming Centers
                  </button>
                </>
              ) : (
                <>
                  <h3 className={`mb-3 text-3xl text-slate-800 ${headingFont.className}`}>No upcoming centers found</h3>
                  <p className="text-lg text-slate-500">We don't have any centers opening shortly in this area yet.</p>
                </>
              )}
            </div>
          ) : null}

        </div>
      </section>

    </div>
  );
}