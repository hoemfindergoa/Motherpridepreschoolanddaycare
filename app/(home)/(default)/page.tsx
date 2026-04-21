import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock3, Heart, School, ShieldCheck, Sparkles } from "lucide-react";
import { Fredoka, Nunito } from "next/font/google";

import HeroNEW from "@/components/HeroNew";
import ProgramsSection from "@/components/ProgramsNew";
import careImage from "../../../public/compressed/mother-gently-kisses-her-baby-forehead-with-soft-warm-glow-them.jpg.webp";
import familyImage from "../../../public/compressed/close-up-portrait-happy-mother-her-little-daughter-happy-family-motherhood-concept (1).jpg.webp";
import teacherImage from "../../../public/compressed/elementary-school-teacher-with-class.jpg.webp";
import daycareImage from "../../../public/compressed/young-boy-girl-playing-indoors-with-eco-toys.jpg.webp";

const headingFont = Fredoka({ subsets: ["latin"], weight: ["600"] });
const bodyFont = Nunito({ subsets: ["latin"], weight: ["400", "600", "700", "800"] });

/* ═══════════════════════════ DOODLE LIBRARY ═══════════════════════════ */

function DoodleHeart({ size = 48, color = "#e83d59", opacity = 0.55 }: { size?: number; color?: string; opacity?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M24 40s-16-10-16-22a8 8 0 0 1 16 0 8 8 0 0 1 16 0c0 12-16 22-16 22Z"
        stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity={opacity} />
    </svg>
  );
}

function DoodleStar({ size = 34, color = "#f29b54", opacity = 0.6 }: { size?: number; color?: string; opacity?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <path d="M18 4l2.9 8.7H30l-7.4 5.3 2.8 8.7L18 21.4l-7.4 5.3 2.8-8.7L6 13h9.1Z"
        stroke={color} strokeWidth="2.5" strokeLinejoin="round" opacity={opacity} />
    </svg>
  );
}

function DoodleFlower({ size = 56, color = "#e83d59", opacity = 0.5 }: { size?: number; color?: string; opacity?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" aria-hidden="true">
      <circle cx="28" cy="28" r="6" stroke={color} strokeWidth="2.5" opacity={opacity} />
      {[0, 60, 120, 180, 240, 300].map((deg, i) => {
        const r = (deg * Math.PI) / 180;
        const cx = 28 + 13 * Math.cos(r);
        const cy = 28 + 13 * Math.sin(r);
        return (
          <ellipse key={i} cx={cx} cy={cy} rx="5" ry="7.5"
            transform={`rotate(${deg + 90},${cx},${cy})`}
            stroke={color} strokeWidth="2.5" opacity={opacity} />
        );
      })}
    </svg>
  );
}

function DoodleSquiggle({ width = 80, color = "#e83d59", opacity = 0.4 }: { width?: number; color?: string; opacity?: number }) {
  return (
    <svg width={width} height="22" viewBox={`0 0 ${width} 22`} fill="none" aria-hidden="true">
      <path
        d={`M4 11 Q${width * 0.15} 3 ${width * 0.3} 11 Q${width * 0.45} 19 ${width * 0.6} 11 Q${width * 0.75} 3 ${width} 11`}
        stroke={color} strokeWidth="2.8" strokeLinecap="round" fill="none" opacity={opacity}
      />
    </svg>
  );
}

function DoodleBird({ size = 40, color = "#60c5a8", opacity = 0.65 }: { size?: number; color?: string; opacity?: number }) {
  return (
    <svg width={size} height={Math.round(size * 0.7)} viewBox="0 0 40 28" fill="none" aria-hidden="true">
      <path d="M4 16 Q12 8 20 16 Q28 8 36 16" stroke={color} strokeWidth="2.8" strokeLinecap="round" opacity={opacity} />
    </svg>
  );
}

function DoodleDots({ color = "#f29b54", opacity = 0.45 }: { color?: string; opacity?: number }) {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden="true">
      {[0, 1, 2].flatMap(row =>
        [0, 1, 2].map(col => (
          <circle key={`${row}-${col}`} cx={8 + col * 20} cy={8 + row * 20} r="3" fill={color} opacity={opacity} />
        ))
      )}
    </svg>
  );
}

function DoodleSpiral({ size = 44, color = "#a78bfa", opacity = 0.5 }: { size?: number; color?: string; opacity?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <path d="M22 22 Q28 16 28 22 Q28 32 18 32 Q8 32 8 20 Q8 8 22 8 Q38 8 38 22"
        stroke={color} strokeWidth="2.5" strokeLinecap="round" opacity={opacity} />
    </svg>
  );
}

function DoodleZigzag({ width = 80, color = "#3b6ca8", opacity = 0.35 }: { width?: number; color?: string; opacity?: number }) {
  const step = width / 6;
  const pts = [0, 1, 2, 3, 4, 5, 6].map((i) => `${i * step},${i % 2 === 0 ? 4 : 18}`).join(" ");
  return (
    <svg width={width} height="22" viewBox={`0 0 ${width} 22`} fill="none" aria-hidden="true">
      <polyline points={pts} stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity={opacity} />
    </svg>
  );
}

/* ═══════════════════════════ LAYOUT HELPERS ═══════════════════════════ */

function WaveBottom({ fill }: { fill: string }) {
  return (
    <div className="pointer-events-none absolute -bottom-px left-0 w-full overflow-hidden leading-none">
      <svg className="block h-[68px] w-full md:h-[90px]" viewBox="0 0 1440 110" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 40C120 5 240 75 360 50C480 25 600 75 720 50C840 25 960 75 1080 50C1200 25 1320 75 1440 50V110H0V40Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}

function SectionLabel({ text, color = "#e83d59" }: { text: string; color?: string }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <DoodleSquiggle width={28} color={color} opacity={0.9} />
      <p className="text-sm font-extrabold uppercase tracking-[0.22em]" style={{ color }}>{text}</p>
    </div>
  );
}

/* ═══════════════════════════ PILLAR DATA ═══════════════════════════ */

const pillars = [
  { icon: Heart,      title: "Warm Care",       bg: "#fde8ef", color: "#e83d59" },
  { icon: School,     title: "Strong Roots",    bg: "#e8f0fd", color: "#3b6ca8" },
  { icon: ShieldCheck, title: "Safe Hands",     bg: "#fef0d8", color: "#f29b54" },
];

const highlights = [
  { icon: BookOpen,  title: "Play-led learning",    color: "#e83d59", bg: "#fde8ef" },
  { icon: Clock3,    title: "Comforting routine",   color: "#f29b54", bg: "#fef0d8" },
  { icon: Sparkles,  title: "Joyful environment",   color: "#60c5a8", bg: "#e4f8f2" },
];

/* ═══════════════════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════════════════ */

export default function Page() {
  return (
    <div className={`w-full overflow-x-hidden ${bodyFont.className}`}>
      <HeroNEW />
      <ProgramsSection />

      {/* ──────────────────────────────────────────────────────────────
          SECTION 1 — The MothersPride Feeling
      ────────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden px-6 py-28 md:px-10 lg:px-16"
        style={{ background: "linear-gradient(160deg,#fffaf7 0%,#fff5ee 100%)" }}
      >
        {/* Doodle field */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-8 left-8 rotate-12">         <DoodleHeart size={52} color="#e83d59" opacity={0.45} /></div>
          <div className="absolute top-6 left-[30%] -rotate-6">    <DoodleStar size={32} color="#f29b54" opacity={0.55} /></div>
          <div className="absolute top-10 right-[12%]">             <DoodleFlower size={52} color="#e83d59" opacity={0.4} /></div>
          <div className="absolute top-20 right-[3%]">              <DoodleSpiral size={38} color="#a78bfa" opacity={0.5} /></div>
          <div className="absolute bottom-28 left-[2%] rotate-6">  <DoodleFlower size={44} color="#60c5a8" opacity={0.38} /></div>
          <div className="absolute bottom-20 right-[22%]">          <DoodleSquiggle width={88} color="#f29b54" opacity={0.35} /></div>
          <div className="absolute top-1/2 left-[6%]">              <DoodleDots color="#f29b54" opacity={0.4} /></div>
          <div className="absolute top-16 left-[54%]">              <DoodleBird size={44} color="#60c5a8" opacity={0.55} /></div>
          <div className="absolute top-24 left-[60%]">              <DoodleBird size={34} color="#60c5a8" opacity={0.4} /></div>
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">

          {/* LEFT — copy */}
          <div className="rounded-[44px] bg-white/70 p-8 shadow-[0_16px_56px_rgba(232,61,89,0.08)] backdrop-blur-sm md:p-12 lg:p-14">
            <SectionLabel text="The MotherHood Feeling" />

            <h2 className={`text-5xl leading-tight text-slate-800 md:text-6xl ${headingFont.className}`}>
              A warm beginning<br />that already feels<br />
              <span className="text-[#e83d59]">familiar.</span>
            </h2>

            {/* Pillars — icon + title only, no paragraph copy */}
            <div className="mt-10 grid grid-cols-3 gap-4">
              {pillars.map((p) => (
                <div key={p.title}
                  className="flex flex-col items-center gap-3 rounded-[28px] bg-white/80 py-6 px-4 shadow-[0_8px_24px_rgba(15,23,42,0.06)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl" style={{ background: p.bg, color: p.color }}>
                    <p.icon className="h-5 w-5" />
                  </div>
                  <span className={`text-center text-xl text-slate-800 ${headingFont.className}`}>{p.title}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/about"
                className="inline-flex items-center gap-2 rounded-full bg-[#e83d59] px-7 py-3.5 text-sm font-extrabold uppercase tracking-[0.14em] text-white transition-all hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(232,61,89,0.35)]">
                Our Story <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-extrabold uppercase tracking-[0.14em] text-[#3b6ca8] transition-all hover:-translate-y-1 hover:shadow-md">
                Book A Visit
              </Link>
            </div>
          </div>

          {/* RIGHT — image */}
          <div className="relative overflow-hidden rounded-[42px] p-3.5 shadow-[0_28px_80px_rgba(232,61,89,0.12)]"
            style={{ background: "rgba(255,255,255,0.6)" }}>
            <div className="relative min-h-[460px] overflow-hidden rounded-[32px]">
              <Image src={careImage} alt="Motherly care" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-950/25 via-transparent to-rose-100/10" />
              {/* Floating badge */}
              <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-white/85 px-4 py-2 shadow-md backdrop-blur-sm">
                <DoodleHeart size={18} color="#e83d59" opacity={1} />
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#e83d59]">Gentle Beginnings</span>
              </div>
              {/* Doodle overlay */}
              <div className="absolute right-4 bottom-4 opacity-70">
                <DoodleFlower size={48} color="#fff" opacity={0.6} />
              </div>
            </div>
          </div>
        </div>

        <WaveBottom fill="#ffe6dd" />
      </section>

      {/* ──────────────────────────────────────────────────────────────
          SECTION 2 — Why Parents Stay
      ────────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden px-6 py-28 md:px-10 lg:px-16"
        style={{ background: "linear-gradient(160deg,#ffe6dd 0%,#ffeedd 100%)" }}
      >
        {/* Doodles */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 -rotate-12">        <DoodleHeart size={50} color="#f29b54" opacity={0.45} /></div>
          <div className="absolute top-6 right-[30%]">                 <DoodleStar size={28} color="#e83d59" opacity={0.5} /></div>
          <div className="absolute top-12 left-[6%]">                  <DoodleZigzag width={80} color="#f29b54" opacity={0.45} /></div>
          <div className="absolute bottom-24 right-[4%] rotate-6">    <DoodleFlower size={46} color="#f29b54" opacity={0.38} /></div>
          <div className="absolute bottom-16 left-[20%]">              <DoodleDots color="#e83d59" opacity={0.35} /></div>
          <div className="absolute top-1/3 right-[8%]">                <DoodleSpiral size={40} color="#e83d59" opacity={0.4} /></div>
          <div className="absolute top-20 left-[44%]">                 <DoodleBird size={40} color="#f29b54" opacity={0.5} /></div>
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">

          {/* LEFT — image */}
          <div className="relative min-h-[460px] overflow-hidden rounded-[42px] shadow-[0_24px_72px_rgba(242,155,84,0.15)]">
            <Image src={familyImage} alt="Happy family" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-amber-950/20 via-transparent to-white/8" />
            {/* Stat chips */}
           
            {/* Corner doodle */}
            <div className="absolute right-5 top-5 opacity-75">
              <DoodleStar size={30} color="#fff" opacity={0.8} />
            </div>
          </div>

          {/* RIGHT — copy */}
          <div className="rounded-[44px] bg-white/68 p-8 shadow-[0_16px_56px_rgba(242,155,84,0.1)] backdrop-blur-sm md:p-12 lg:p-14">
            <SectionLabel text="Why Parents Stay" color="#f29b54" />
            <h2 className={`text-5xl leading-tight text-slate-800 md:text-6xl ${headingFont.className}`}>
              They feel
              <span className="text-[#f29b54]"> peace of mind.</span>
            </h2>

            <div className="mt-10 flex flex-col gap-4">
              {highlights.map((item) => (
                <div key={item.title}
                  className="flex items-center gap-4 rounded-[24px] bg-white/80 px-5 py-4 shadow-[0_6px_20px_rgba(15,23,42,0.05)]">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl" style={{ background: item.bg, color: item.color }}>
                    <item.icon className="h-5 w-5" />
                  </div>
                  <span className={`text-xl text-slate-800 ${headingFont.className}`}>{item.title}</span>
                  <div className="ml-auto opacity-60">
                    <DoodleSquiggle width={32} color={item.color} opacity={0.8} />
                  </div>
                </div>
              ))}
            </div>

      
          </div>
        </div>

        <WaveBottom fill="#edf5ff" />
      </section>

      {/* ──────────────────────────────────────────────────────────────
          SECTION 3 — Daycare With Heart
      ────────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden px-6 py-28 md:px-10 lg:px-16"
        style={{ background: "linear-gradient(160deg,#edf5ff 0%,#deeeff 100%)" }}
      >
        {/* Doodles */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-8 left-8 rotate-6">          <DoodleFlower size={50} color="#3b6ca8" opacity={0.38} /></div>
          <div className="absolute top-6 left-[35%]">               <DoodleStar size={30} color="#a78bfa" opacity={0.55} /></div>
          <div className="absolute top-10 right-[10%] -rotate-10">  <DoodleHeart size={46} color="#3b6ca8" opacity={0.4} /></div>
          <div className="absolute top-24 right-[3%]">              <DoodleDots color="#3b6ca8" opacity={0.35} /></div>
          <div className="absolute bottom-24 left-[4%] -rotate-6">  <DoodleSpiral size={42} color="#a78bfa" opacity={0.45} /></div>
          <div className="absolute bottom-16 right-[16%]">           <DoodleZigzag width={90} color="#3b6ca8" opacity={0.3} /></div>
          <div className="absolute top-1/2 right-[38%]">             <DoodleBird size={44} color="#3b6ca8" opacity={0.45} /></div>
          <div className="absolute top-16 left-[58%]">               <DoodleBird size={32} color="#a78bfa" opacity={0.45} /></div>
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">

          {/* LEFT — copy */}
          <div className="rounded-[44px] bg-white/68 p-8 shadow-[0_16px_56px_rgba(59,108,168,0.1)] backdrop-blur-sm md:p-12 lg:p-14">
            <SectionLabel text="Daycare With Heart" color="#3b6ca8" />
            <h2 className={`text-5xl leading-tight text-slate-800 md:text-6xl ${headingFont.className}`}>
              A soft extension<br />
              <span className="text-[#3b6ca8]">of home.</span>
            </h2>

            {/* Tags — visual, no body copy */}
            <div className="mt-10 flex flex-wrap gap-3">
              {[
                { label: "Safe supervision", doodle: <DoodleHeart size={16} color="#e83d59" opacity={1} /> },
                { label: "Comforting routine", doodle: <DoodleStar size={16} color="#f29b54" opacity={1} /> },
                { label: "Play & rest", doodle: <DoodleFlower size={16} color="#60c5a8" opacity={1} /> },
                { label: "Parent peace of mind", doodle: <DoodleSpiral size={16} color="#a78bfa" opacity={1} /> },
              ].map(({ label, doodle }) => (
                <span key={label}
                  className="inline-flex items-center gap-2 rounded-full bg-white/90 px-5 py-2.5 text-sm font-bold text-slate-700 shadow-[0_4px_14px_rgba(59,108,168,0.1)]">
                  {doodle} {label}
                </span>
              ))}
            </div>

            <div className="mt-10">
              <Link href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#3b6ca8] px-7 py-3.5 text-sm font-extrabold uppercase tracking-[0.14em] text-white transition-all hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(59,108,168,0.38)]">
                Ask About Daycare <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* RIGHT — image */}
          <div className="relative overflow-hidden rounded-[42px] p-3.5 shadow-[0_28px_80px_rgba(59,108,168,0.14)]"
            style={{ background: "rgba(255,255,255,0.6)" }}>
            <div className="relative min-h-[460px] overflow-hidden rounded-[32px]">
              <Image src={daycareImage} alt="Daycare children playing" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/30 via-transparent to-transparent" />
              {/* Floating badge */}
              <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-white/85 px-4 py-2 shadow-md backdrop-blur-sm">
                <DoodleFlower size={18} color="#3b6ca8" opacity={1} />
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#3b6ca8]">All Day, Every Day</span>
              </div>
              <div className="absolute right-4 bottom-4 opacity-65">
                <DoodleDots color="#fff" opacity={0.7} />
              </div>
            </div>
          </div>
        </div>

        <WaveBottom fill="#fff8f3" />
      </section>

      {/* ──────────────────────────────────────────────────────────────
          SECTION 4 — CTA / Final
      ────────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden px-6 py-28 md:px-10 lg:px-16"
        style={{ background: "linear-gradient(160deg,#fff8f3 0%,#fff4ee 100%)" }}
      >
        {/* Doodles */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-6 left-10 rotate-10">          <DoodleHeart size={50} color="#e83d59" opacity={0.4} /></div>
          <div className="absolute top-8 left-[40%]">                 <DoodleStar size={34} color="#f29b54" opacity={0.5} /></div>
          <div className="absolute top-10 right-[8%] -rotate-8">     <DoodleFlower size={50} color="#a78bfa" opacity={0.38} /></div>
          <div className="absolute top-24 right-[2%]">                <DoodleSpiral size={38} color="#e83d59" opacity={0.4} /></div>
          <div className="absolute bottom-20 left-[5%] rotate-6">    <DoodleDots color="#f29b54" opacity={0.4} /></div>
          <div className="absolute bottom-16 right-[20%]">            <DoodleSquiggle width={90} color="#a78bfa" opacity={0.35} /></div>
          <div className="absolute bottom-12 right-[3%] -rotate-6">  <DoodleHeart size={40} color="#60c5a8" opacity={0.4} /></div>
          <div className="absolute top-16 left-[55%]">                <DoodleBird size={44} color="#e83d59" opacity={0.45} /></div>
          <div className="absolute top-28 left-[62%]">                <DoodleBird size={32} color="#f29b54" opacity={0.4} /></div>
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">

          {/* LEFT — copy */}
          <div className="rounded-[44px] bg-white/70 p-8 shadow-[0_16px_56px_rgba(232,61,89,0.07)] backdrop-blur-sm md:p-12 lg:p-14">
            <SectionLabel text="Ready to Begin?" color="#e83d59" />
            <h2 className={`text-5xl leading-tight text-slate-800 md:text-6xl ${headingFont.className}`}>
              Every journey starts<br />with a
              <span className="text-[#e83d59]"> warm hello.</span>
            </h2>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/Whyus"
                className="inline-flex items-center gap-2 rounded-full bg-[#3b6ca8] px-7 py-3.5 text-sm font-extrabold uppercase tracking-[0.14em] text-white transition-all hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(59,108,168,0.35)]">
                Why Us <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/admission"
                className="inline-flex items-center gap-2 rounded-full bg-[#e83d59] px-7 py-3.5 text-sm font-extrabold uppercase tracking-[0.14em] text-white transition-all hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(232,61,89,0.35)]">
                Start Admission <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Decorative doodle row */}
            <div className="mt-8 flex items-center gap-2 opacity-60">
              <DoodleHeart size={20} color="#e83d59" opacity={1} />
              <DoodleSquiggle width={48} color="#f29b54" opacity={0.9} />
              <DoodleFlower size={20} color="#60c5a8" opacity={1} />
              <DoodleSquiggle width={48} color="#a78bfa" opacity={0.9} />
              <DoodleStar size={20} color="#3b6ca8" opacity={1} />
            </div>
          </div>

          {/* RIGHT — image */}
          <div className="relative min-h-[460px] overflow-hidden rounded-[42px] shadow-[0_24px_72px_rgba(15,23,42,0.12)]">
            <Image src={teacherImage} alt="Teacher and children" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/35 via-transparent to-white/5" />
            {/* Caption card */}
            <div className="absolute bottom-5 left-5 right-5 rounded-[24px] bg-white/80 px-5 py-4 backdrop-blur-md shadow-lg">
              <div className="flex items-center gap-3">
                <DoodleHeart size={22} color="#e83d59" opacity={1} />
                <p className={`text-xl text-slate-800 ${headingFont.className}`}>
                  Calm. Clear. Parent-friendly.
                </p>
              </div>
            </div>
            {/* Corner doodle */}
            <div className="absolute right-5 top-5">
              <DoodleFlower size={42} color="#fff" opacity={0.5} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}