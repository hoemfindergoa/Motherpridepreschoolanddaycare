"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react";
import { Fredoka, Nunito } from "next/font/google";

import logo from "../public/logopng.png";

const headingFont = Fredoka({ subsets: ["latin"], weight: ["600"] });
const bodyFont = Nunito({ subsets: ["latin"], weight: ["400", "600", "700", "800"] });

/* ─────────────────────────── DOODLES ─────────────────────────── */

function DoodleHeart({ size = 48, color = "#f29b54", opacity = 0.7 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M24 40s-16-10-16-22a8 8 0 0 1 16 0 8 8 0 0 1 16 0c0 12-16 22-16 22Z"
        fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity={opacity} />
    </svg>
  );
}

function DoodleStar({ size = 36, color = "#e83d59", opacity = 0.65 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <path d="M18 4l2.9 8.7H30l-7.4 5.3 2.8 8.7L18 21.4l-7.4 5.3 2.8-8.7L6 13h9.1L18 4Z"
        fill="none" stroke={color} strokeWidth="2.5" strokeLinejoin="round" opacity={opacity} />
    </svg>
  );
}

function DoodleFlower({ size = 56, color = "#f29b54", opacity = 0.65 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" aria-hidden="true">
      <circle cx="28" cy="28" r="6" fill="none" stroke={color} strokeWidth="2.5" opacity={opacity} />
      {[0, 60, 120, 180, 240, 300].map((deg, i) => {
        const r = (deg * Math.PI) / 180;
        const cx = 28 + 13 * Math.cos(r);
        const cy = 28 + 13 * Math.sin(r);
        return <ellipse key={i} cx={cx} cy={cy} rx="5.5" ry="8" transform={`rotate(${deg + 90},${cx},${cy})`}
          fill="none" stroke={color} strokeWidth="2.5" opacity={opacity} />;
      })}
    </svg>
  );
}

function DoodleSquiggle({ width = 80, color = "#e83d59", opacity = 0.45 }) {
  return (
    <svg width={width} height="24" viewBox={`0 0 ${width} 24`} fill="none" aria-hidden="true">
      <path d={`M4 12 Q${width * 0.15} 4 ${width * 0.3} 12 Q${width * 0.45} 20 ${width * 0.6} 12 Q${width * 0.75} 4 ${width} 12`}
        stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none" opacity={opacity} />
    </svg>
  );
}

function DoodleSpiral({ size = 44, color = "#a78bfa", opacity = 0.5 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <path d="M22 22 Q28 16 28 22 Q28 32 18 32 Q8 32 8 20 Q8 8 22 8 Q38 8 38 22"
        stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none" opacity={opacity} />
    </svg>
  );
}

function DoodleBird({ size = 40, color = "#60c5a8", opacity = 0.7 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 30" fill="none" aria-hidden="true">
      <path d="M4 18 Q12 10 20 18 Q28 10 36 18" stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none" opacity={opacity} />
      <path d="M4 18 Q14 12 20 18" stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none" opacity={opacity} />
    </svg>
  );
}

function DoodleDots({ color = "#f29b54", opacity = 0.5 }) {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" aria-hidden="true">
      {[0, 1, 2].map(row =>
        [0, 1, 2].map(col => (
          <circle key={`${row}-${col}`} cx={10 + col * 20} cy={10 + row * 20} r="3"
            fill={color} opacity={opacity} />
        ))
      )}
    </svg>
  );
}

function TopWave() {
  return (
    <div className="absolute left-0 top-0 w-full overflow-hidden leading-none pointer-events-none">
      <svg className="block w-full" style={{ height: "90px" }} viewBox="0 0 1440 90" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 60C120 20 240 80 360 55C480 30 600 80 720 55C840 30 960 80 1080 55C1200 30 1320 80 1440 60V0H0V60Z" fill="#fff8f0" />
      </svg>
    </div>
  );
}

/* ─────────────────────────── MAIN ─────────────────────────── */

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Programs", href: "/Programs" },
  { label: "Admissions", href: "/admission" },
  { label: "Our Centers", href: "/Ourcenters" },
  { label: "Contact", href: "/contact" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

export default function Footer() {
  return (
    <footer
      className={`relative  overflow-hidden pb-10 pt-[130px] ${bodyFont.className}`}
      style={{ background: "linear-gradient(175deg, #deeeff 0%, #dee3ff 60%, #fde8d5 100%)" }}
    >
      <TopWave />

      {/* ── Scattered Doodles ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-12 left-10 rotate-12"><DoodleHeart size={52} color="#e83d59" opacity={0.55} /></div>
        <div className="absolute top-8 left-[22%] -rotate-6"><DoodleStar size={34} color="#f29b54" opacity={0.6} /></div>
        <div className="absolute top-16 left-[45%] rotate-3"><DoodleFlower size={50} color="#e83d59" opacity={0.45} /></div>
        <div className="absolute top-6 right-[28%] rotate-12"><DoodleStar size={28} color="#a78bfa" opacity={0.6} /></div>
        <div className="absolute top-14 right-16 -rotate-8"><DoodleHeart size={44} color="#f29b54" opacity={0.5} /></div>
        <div className="absolute top-24 right-[6%]"><DoodleSpiral size={40} color="#a78bfa" opacity={0.55} /></div>
        <div className="absolute top-36 left-[8%]"><DoodleDots color="#f29b54" opacity={0.45} /></div>
        <div className="absolute bottom-24 left-[3%] rotate-6"><DoodleFlower size={44} color="#60c5a8" opacity={0.4} /></div>
        <div className="absolute bottom-16 left-[18%]"><DoodleSquiggle width={90} color="#e83d59" opacity={0.35} /></div>
        <div className="absolute bottom-20 right-[15%] -rotate-12"><DoodleStar size={30} color="#f29b54" opacity={0.5} /></div>
        <div className="absolute bottom-10 right-[4%] rotate-6"><DoodleHeart size={38} color="#e83d59" opacity={0.45} /></div>
        <div className="absolute top-40 left-[55%]"><DoodleBird size={42} color="#60c5a8" opacity={0.6} /></div>
        <div className="absolute top-52 right-[35%]"><DoodleDots color="#a78bfa" opacity={0.4} /></div>
      </div>

      <div className="relative px-6 md:px-10 lg:px-16 max-w-7xl mx-auto">

        {/* ── Brand + Nav ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-12 pb-12 border-b-2 border-dashed border-[#f2d4b8] lg:grid-cols-[1.4fr_1fr_1fr]"
        >
          {/* Brand Block */}
          <motion.div custom={0} >
            <div className="inline-flex items-center rounded-[24px] bg-white/90 p-4 shadow-[0_8px_28px_rgba(242,155,84,0.18)]">
              <Image src={logo} alt="MothersPride" className="h-auto w-[160px] object-contain" />
            </div>

            <div className="mt-8 flex items-start gap-3">
              <div className="mt-1 shrink-0"><DoodleHeart size={28} color="#e83d59" opacity={1} /></div>
              <p className={`text-3xl leading-snug text-slate-700 ${headingFont.className}`}>
                Where every child feels at home.
              </p>
            </div>

            <div className="mt-6 flex gap-3">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Youtube, href: "#" },
              ].map(({ icon: Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  custom={i * 0.1}
                  
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white shadow-[0_4px_16px_rgba(232,61,89,0.14)] text-[#e83d59] transition-all"
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div custom={1} >
            <div className="flex items-center gap-2 mb-5">
              <DoodleSquiggle width={32} color="#e83d59" opacity={0.8} />
              <h3 className={`text-2xl text-slate-700 ${headingFont.className}`}>Explore</h3>
            </div>
            <ul className="space-y-3">
              {quickLinks.map((item, i) => (
                <motion.li key={item.label} custom={i * 0.05} >
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 text-[15px] font-700 text-slate-600 transition-all hover:text-[#e83d59]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#f29b54] group-hover:bg-[#e83d59] transition-colors shrink-0" />
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div custom={2} >
            <div className="flex items-center gap-2 mb-5">
              <DoodleSquiggle width={32} color="#f29b54" opacity={0.8} />
              <h3 className={`text-2xl text-slate-700 ${headingFont.className}`}>Say Hello</h3>
            </div>

            <ul className="space-y-4">
              {[
                { icon: Phone, label: "+91 9999996266", color: "#e83d59", bg: "#fde8ef" },
                { icon: Mail, label: "admissions@motherspride.in", color: "#f29b54", bg: "#fef0d8" },
                { icon: Mail, label: "franchise@motherspride.in", color: "#a78bfa", bg: "#f0ebff" },
                { icon: MapPin, label: "Pitampura, Delhi", color: "#60c5a8", bg: "#e4f8f2" },
              ].map(({ icon: Icon, label, color, bg }, i) => (
                <motion.li key={i} custom={i * 0.07}>
                  <div className="flex items-center gap-3 rounded-2xl bg-white/80 px-4 py-3 shadow-[0_4px_16px_rgba(15,23,42,0.05)]">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl" style={{ background: bg }}>
                      <Icon className="h-4 w-4" style={{ color }} />
                    </span>
                    <span className="text-sm font-semibold text-slate-600 leading-snug">{label}</span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>


        {/* ── Bottom Bar ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center justify-between gap-4 pt-8 md:flex-row"
        >
          <p className="flex items-center gap-1.5 text-sm font-semibold text-slate-500">
            © 2026 MothersPride
            <DoodleHeart size={16} color="#e83d59" opacity={1} />
            Made with love for little learners.
          </p>
          <div className="flex gap-5 text-sm font-semibold text-slate-500">
            <Link href="/privacy" className="hover:text-[#e83d59] transition-colors">Privacy</Link>
            <Link href="/privacy" className="hover:text-[#e83d59] transition-colors">Terms</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}