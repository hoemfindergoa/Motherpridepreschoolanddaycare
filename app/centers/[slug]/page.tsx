"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { createClient } from "@supabase/supabase-js";
import { 
  ChevronRight, 
  MapPin, 
  Phone, 
  Mail, 
  School,
  CheckCircle,
  CalendarCheck,
  Star,
  Play,
  Sparkles,
  Loader2
} from "lucide-react";
import { Titan_One, Nunito } from 'next/font/google';

// --- SUPABASE CLIENT ---
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// --- FONTS ---
const titleFont = Titan_One({ 
  weight: '400', 
  subsets: ['latin'],
  display: 'swap',
});

const bodyFont = Nunito({ 
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  display: 'swap',
});

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
  status: "open" | "shortly"; // Matched to your DB format
};

// --- REUSABLE WAVE COMPONENT ---
const WaveSeparator = ({ position, color }: { position: "top" | "bottom", color: string }) => {
  return (
    <div className={`absolute left-0 w-full h-[60px] md:h-[100px] overflow-hidden z-20 ${position === "top" ? "top-0" : "bottom-0"}`}>
       <svg className={`relative block w-full h-full ${color}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
           {position === "top" ? (
               <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
           ) : (
               <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="currentColor"></path>
           )}
       </svg>
    </div>
  );
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
        .single(); // .single() expects exactly one row to match

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
      <div className="w-full min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <Loader2 className="w-12 h-12 text-teal-500 animate-spin mb-4" />
        <h2 className={`text-2xl font-bold text-slate-700 ${titleFont.className}`}>Loading Center...</h2>
      </div>
    );
  }

  // 3. Handle 404 / Error State
  if (error || !center) {
    return notFound();
  }

  // Fallback theme and image if not provided in DB
  const currentTheme = center.theme || "from-teal-400 via-emerald-400 to-green-400";
  const currentImage = center.image || "bg-teal-200";

  return (
    <div className={`w-full flex flex-col bg-white ${bodyFont.className}`}>
      
      {/* =========================================
          HEADER SECTION (Dynamic Theme)
      ========================================= */}
      <header className={`relative w-full h-[60vh] min-h-[550px] bg-gradient-to-r ${currentTheme} flex items-center justify-center overflow-hidden`}>
        
        {/* Background Icons */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
           <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-20 left-10">
              <School className="w-24 h-24 text-white" />
           </motion.div>
           <motion.div animate={{ rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-20 right-10">
              <Star className="w-20 h-20 text-yellow-100 fill-yellow-100" />
           </motion.div>
        </div>

        <div className="relative z-10 text-center px-4 mt-8 max-w-4xl">
          {/* Breadcrumb */}
          <div className="inline-flex items-center gap-2 text-white/90 text-sm font-bold bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/30">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3 opacity-75" />
              <Link href="/Ourcenters" className="hover:text-white transition-colors">Centers</Link>
              <ChevronRight className="w-3 h-3 opacity-75" />
              <span className="text-white truncate max-w-[150px] md:max-w-none">{center.city}</span>
          </div>

          <h1 className={`text-4xl md:text-6xl font-black text-white drop-shadow-md mb-4 leading-tight ${titleFont.className}`}>
            {center.name}
          </h1>
          
          <div className="flex flex-wrap justify-center items-center gap-4 text-white font-bold text-lg mt-4">
             <span className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full"><MapPin className="w-5 h-5" /> {center.state}</span>
             {center.status === "shortly" && (
                <span className="flex items-center gap-2 bg-amber-400 text-amber-900 px-3 py-1 rounded-full animate-pulse"><Sparkles className="w-5 h-5" /> Opening Soon</span>
             )}
          </div>
        </div>

        <WaveSeparator position="bottom" color="text-slate-50" />
      </header>


      {/* =========================================
          SECTION 1: INFO GRID (Slate-50)
      ========================================= */}
      <section className="relative w-full bg-slate-50 pt-4 pb-2 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
           
           {/* Info Cards Grid */}
           <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 ">
              
              {/* Address */}
              <motion.div 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="bg-white rounded-[2rem] p-6 shadow-xl border-b-4 border-rose-400 flex flex-col items-center text-center gap-3"
              >
                 <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center text-rose-500">
                    <MapPin className="w-6 h-6" />
                 </div>
                 <div>
                    <h3 className="font-bold text-slate-800">Address</h3>
                    <p className="text-slate-500 text-sm font-medium">{center.address}</p>
                 </div>
              </motion.div>

              {/* Phone */}
              <motion.div 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.1 }}
                 viewport={{ once: true }}
                 className="bg-white rounded-[2rem] p-6 shadow-xl border-b-4 border-amber-400 flex flex-col items-center text-center gap-3"
              >
                 <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-500">
                    <Phone className="w-6 h-6" />
                 </div>
                 <div>
                    <h3 className="font-bold text-slate-800">Phone</h3>
                    <p className="text-slate-500 text-sm font-medium">{center.phone || "To be announced"}</p>
                 </div>
              </motion.div>

              {/* Email */}
              <motion.div 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.2 }}
                 viewport={{ once: true }}
                 className="bg-white rounded-[2rem] p-6 shadow-xl border-b-4 border-sky-400 flex flex-col items-center text-center gap-3"
              >
                 <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center text-sky-500">
                    <Mail className="w-6 h-6" />
                 </div>
                 <div>
                    <h3 className="font-bold text-slate-800">Email</h3>
                    <p className="text-slate-500 text-sm font-medium break-all">{center.email || "admissions@motherspride.in"}</p>
                 </div>
              </motion.div>

           </div>

           {/* About Section */}
           <div className="mt-20 flex flex-col lg:flex-row items-center gap-12">
              <div className="w-full lg:w-1/2">
                  <h2 className={`text-3xl md:text-5xl font-black text-slate-900 mb-6 ${titleFont.className}`}>
                    Welcome to <span className="text-teal-500">{center.city}</span>
                  </h2>
                  <p className="text-slate-600 text-lg leading-relaxed mb-6">
                    {center.description || "Information about this center will be updated shortly."}
                  </p>
                  <p className="text-slate-600 text-lg leading-relaxed mb-8">
                    At MothersPride {center.city}, we focus on creating a loving, nurturing, and stimulating environment where every child feels secure enough to grow, learn, and thrive with confidence.
                  </p>
                  
                  {center.status === "shortly" ? (
                      <button className="bg-amber-400 text-amber-900 cursor-default font-bold py-3 px-8 rounded-full shadow-lg flex items-center gap-2 opacity-80">
                         Opening Shortly <Sparkles className="w-5 h-5" />
                      </button>
                  ) : (
                      <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2">
                         Book a Campus Tour <CalendarCheck className="w-5 h-5" />
                      </button>
                  )}
              </div>
              <div className="w-full lg:w-1/2 flex justify-center">
                  <div className={`relative w-full max-w-md aspect-square rounded-[3rem] ${currentImage} border-8 border-white shadow-2xl overflow-hidden`}>
                      <div className="w-full h-full flex flex-col items-center justify-center text-slate-700/50 font-black text-2xl gap-2">
                         <School className="w-16 h-16 opacity-30" />
                         <span>Image Placeholder</span>
                         <span className="text-sm opacity-60 font-normal">({center.name})</span>
                      </div>
                  </div>
              </div>
           </div>

        </div>
        <WaveSeparator position="bottom" color="text-white" />
      </section>


      {/* =========================================
          SECTION 2: FACILITIES & MAP (White)
      ========================================= */}
      <section className="w-full bg-white py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-6">
           
           {/* Facilities Grid */}
           <div className="text-center mb-16">
              <h2 className={`text-3xl md:text-5xl font-black text-slate-900 mb-4 ${titleFont.className}`}>
                Center <span className="text-amber-500">Facilities</span>
              </h2>
           </div>

           <div className="flex flex-wrap justify-center gap-4 mb-20">
              {center.facilities && center.facilities.length > 0 ? (
                center.facilities.map((facility, index) => (
                   <motion.div 
                     key={index}
                     whileHover={{ scale: 1.05 }}
                     className="bg-amber-50 text-amber-800 px-6 py-3 rounded-full font-bold shadow-sm border border-amber-100 flex items-center gap-2"
                   >
                      <CheckCircle className="w-5 h-5 text-amber-500" />
                      {facility}
                   </motion.div>
                ))
              ) : (
                <p className="text-slate-500 italic">Facilities details coming soon.</p>
              )}
           </div>

           {/* Large Map */}
           <div className="w-full h-[450px] rounded-[3rem] overflow-hidden border-8 border-slate-50 shadow-inner relative">
                <iframe 
                   src={center.mapEmbed}
                   width="100%" 
                   height="100%" 
                   style={{ border: 0 }} 
                   allowFullScreen={true} 
                   loading="lazy" 
                   referrerPolicy="no-referrer-when-downgrade"
                   className="grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                ></iframe>
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-6 py-3 rounded-xl shadow-lg border border-slate-200">
                    <p className="font-bold text-slate-800 text-sm uppercase tracking-wide">Locate Us</p>
                    <p className="text-slate-600 font-bold text-lg">{center.name}</p>
                </div>
           </div>

        </div>
      </section>


      {/* =========================================
          SECTION 3: CTA (Colored)
      ========================================= */}
      <section className={`relative w-full bg-gradient-to-r ${currentTheme} py-20 overflow-hidden`}>
         <WaveSeparator position="top" color="text-white" />
         
         <div className="container mx-auto px-6 relative z-10 text-center text-white">
            <h2 className={`text-4xl md:text-5xl font-black mb-6 ${titleFont.className}`}>
               {center.status === "shortly" ? "Be the First to Join!" : "Ready to Join the Family?"}
            </h2>
            <p className="text-xl font-bold opacity-90 mb-8 max-w-2xl mx-auto">
               {center.status === "shortly" 
                 ? `Pre-registrations are open for ${center.name}. Secure your child's spot in our founding batch!` 
                 : `Admissions are open for the upcoming academic year at ${center.name}. Secure your spot today!`
               }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Link href={"/admission"}>
               <button className="bg-white text-slate-800 font-bold py-4 px-10 rounded-full shadow-xl hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                  {center.status === "shortly" ? "Pre-Register Now" : "Apply Now"} <Play className="w-4 h-4 fill-slate-800" />
               </button>
               </Link>
               <button className="bg-transparent border-4 border-white text-white font-bold py-4 px-10 rounded-full hover:bg-white/10 transition-all">
                 Download Brochure
               </button>
            </div>
         </div>
      </section>

    </div>
  );
}
