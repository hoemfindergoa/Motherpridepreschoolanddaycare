"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ShieldAlert, Ban, Lock, Megaphone, UserCheck, 
  Settings, FileSignature, Copyright, AlertTriangle, 
  ShieldCheck, Gavel, Scale, Info, FileText, Sparkles
} from "lucide-react";
import { Fredoka, Nunito } from 'next/font/google';

// Assuming you have this CTA component available based on your import
import Ctasection from "@/components/HomeCta"; 

// --- FONTS ---
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

// --- POLICY DATA ---
const policies = [
  { title: "Security Rules", content: "We follow strict security measures to protect systems, data, and users. Any attempt to breach, misuse, or damage platform security is strictly prohibited.", icon: ShieldAlert, tone: "rose" },
  { title: "Prohibited User Content", content: "Users must not post unlawful, offensive, misleading, harmful, or copyrighted content. Any content violating applicable laws or platform guidelines may be removed.", icon: Ban, tone: "amber" },
  { title: "Privacy Policy", content: "We respect your privacy and handle personal information responsibly. Data is collected, stored, and used only as outlined in our Privacy Policy.", icon: Lock, tone: "emerald" },
  { title: "Communications", content: "By using our services, you consent to receive communications via email, phone, SMS, or other channels regarding updates, services, and important notifications.", icon: Megaphone, tone: "blue" },
  { title: "Your Responsibilities", content: "You are responsible for maintaining accurate information, lawful usage, safeguarding account credentials, and complying with all applicable policies.", icon: UserCheck, tone: "rose" },
  { title: "Configurations", content: "Users must ensure required technical configurations, compatible devices, and minimum system requirements to access and use our services efficiently.", icon: Settings, tone: "blue" },
  { title: "Registration Details", content: "Users must provide accurate, complete, and updated registration information. Any false or misleading details may result in suspension.", icon: FileSignature, tone: "amber" },
  { title: "Intellectual Property", content: "All content, trademarks, logos, and materials are owned by us or licensed partners. Unauthorized copying, distribution, or use is strictly prohibited.", icon: Copyright, tone: "emerald" },
  { title: "Limitation of Liability", content: "We are not liable for indirect, incidental, or consequential damages arising from service use, interruptions, technical issues, or third-party actions.", icon: AlertTriangle, tone: "rose" },
  { title: "Indemnification", content: "You agree to indemnify and hold us harmless against claims, losses, damages, or expenses arising from misuse of services or policy violations.", icon: ShieldCheck, tone: "blue" },
  { title: "Waiver", content: "Failure to enforce any provision shall not be considered a waiver of rights. All rights and remedies remain fully enforceable.", icon: Gavel, tone: "amber" },
  { title: "Governing Law", content: "These terms shall be governed and interpreted in accordance with the laws of India, without regard to conflict of law principles.", icon: Scale, tone: "emerald" },
  { title: "Disclaimer", content: "Services are provided on an “as is” basis without warranties. We do not guarantee uninterrupted access, accuracy, or suitability for specific purposes.", icon: Info, tone: "rose" }
];

// --- MAIN COMPONENT ---
export default function PrivacyPolicyPage() {
  return (
    <div className={`relative overflow-x-hidden bg-[#fffaf7] text-slate-800 ${bodyFont.className}`}>
      
      {/* Background Doodles (Global) */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
        <div className="absolute top-32 left-10 rotate-12"><DoodleFlower size={60} color="#10b981" opacity={0.15} /></div>
        <div className="absolute top-52 right-[10%] -rotate-6"><DoodleHeart size={55} color="#e83d59" opacity={0.12} /></div>
        <div className="absolute top-[40%] left-[5%]"><DoodleSquiggle width={90} color="#3b6ca8" opacity={0.15} /></div>
        <div className="absolute top-[70%] right-[8%] rotate-12"><DoodleStar size={50} color="#f29b54" opacity={0.15} /></div>
      </div>

      {/* ──────────────────────────────────────────────────────────────
          SECTION 1 — HERO
      ────────────────────────────────────────────────────────────── */}
      <section className="relative z-10 px-6 pt-32 pb-16 md:px-10 lg:px-16 text-center">
        <div className="mx-auto max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-bold text-[#3b6ca8] shadow-sm backdrop-blur-sm">
              <FileText className="h-4 w-4" />
              Legal & Compliance
            </div>
            
            <h1 className={`mx-auto text-5xl leading-[1.1] text-slate-900 sm:text-6xl lg:text-7xl ${headingFont.className}`}>
              Our commitment to your
              <span className="block text-[#3b6ca8]">trust and safety.</span>
            </h1>
            
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl font-medium">
              Please read our policies carefully to ensure a safe, transparent, and secure experience for everyone in the MothersPride family.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────
          SECTION 2 — POLICY GRID
      ────────────────────────────────────────────────────────────── */}
      <section className="relative z-10 px-6 pb-28 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {policies.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 3) * 0.1, duration: 0.5 }}
                className="group relative flex flex-col rounded-[36px] bg-white/70 p-8 shadow-[0_16px_56px_rgba(15,23,42,0.04)] backdrop-blur-md border border-white transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl overflow-hidden"
              >
                {/* Tone Mapping */}
                <div className={`mb-6 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${
                  item.tone === "rose" ? "bg-rose-100 text-rose-500" :
                  item.tone === "amber" ? "bg-amber-100 text-amber-500" :
                  item.tone === "blue" ? "bg-blue-100 text-blue-500" :
                  "bg-emerald-100 text-emerald-500"
                }`}>
                  <item.icon className="h-6 w-6" />
                </div>
                
                <h3 className={`text-2xl text-slate-900 ${headingFont.className}`}>{item.title}</h3>
                <p className="mt-3 text-base font-medium leading-relaxed text-slate-600 z-10">{item.content}</p>

                {/* Subtle corner highlight */}
                <div className={`absolute -bottom-6 -right-6 h-24 w-24 rounded-full opacity-[0.04] transition-transform duration-500 group-hover:scale-150 ${
                  item.tone === "rose" ? "bg-rose-500" :
                  item.tone === "amber" ? "bg-amber-500" :
                  item.tone === "blue" ? "bg-blue-500" :
                  "bg-emerald-500"
                }`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}