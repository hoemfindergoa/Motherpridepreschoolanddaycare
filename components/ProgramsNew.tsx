"use client";

import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Fredoka, Nunito, Quicksand } from "next/font/google";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import boywithcup from "../public/compressed/happy-family-home-mother-lifting-air-little-toddler-child-daughter-mom-baby-girl-playing-h.jpg.webp";
import girlwithbook from "../public/compressed/heartfelt-moment-mother-embracing-her-newborn-baby-with-pure-love-joy.jpg.webp";
import boywithelephant from "../public/compressed/maternal-love-mother-baby-white-background.jpg.webp";
import girlonswing from "../public/compressed/mother-baby.jpg.webp";

const headingFont = Fredoka({ subsets: ["latin"], weight: ["600"] });
const bodyFont = Nunito({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });
const taglineFont = Quicksand({ subsets: ["latin"], weight: ["600", "700"] });


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

interface Program {
  id: number;
  title: string;
  subtitle: string;
  ageRange: string;
  description: string;
  highlights: string[];
  image: StaticImageData;
  linkId: string;
  accentColor: string;
  bgGradient: string;
}

const programs: Program[] = [
  {
    id: 1,
    title: "Little Explorers",
    subtitle: "Play Group",
    ageRange: "2-3 Years",
    description: "A joyful beginning filled with sensory play, comfort, and gentle social discovery.",
    highlights: ["Sensory Play", "Social Skills", "Music and Movement", "Story Time"],
    image: boywithcup,
    linkId: "explorers",
    accentColor: "#F472B6",
    bgGradient: "from-rose-400/80 via-orange-300/70 to-amber-200/60",
  },
  {
    id: 2,
    title: "Curious Learners",
    subtitle: "Nursery",
    ageRange: "3-4 Years",
    description: "Exploring colours, sounds, numbers, and letters through hands-on discovery and guided play.",
    highlights: ["Numbers and Letters", "Art and Craft", "Group Play", "Phonics"],
    image: girlwithbook,
    linkId: "learners",
    accentColor: "#2DD4BF",
    bgGradient: "from-teal-400/80 via-emerald-300/70 to-sky-200/60",
  },
  {
    id: 3,
    title: "Creative Thinkers",
    subtitle: "LKG",
    ageRange: "4-5 Years",
    description: "Building confidence, expression, and early academic readiness in a warm, imaginative setting.",
    highlights: ["Reading Ready", "STEM Basics", "Drama and Dance", "Creative Arts"],
    image: boywithelephant,
    linkId: "thinkers",
    accentColor: "#A78BFA",
    bgGradient: "from-violet-400/80 via-purple-300/70 to-fuchsia-200/60",
  },
  {
    id: 4,
    title: "Future Leaders",
    subtitle: "UKG",
    ageRange: "5-6 Years",
    description: "Preparing children for formal schooling with confidence, clarity, and joyful independence.",
    highlights: ["School Readiness", "Leadership", "Critical Thinking", "Problem Solving"],
    image: girlonswing,
    linkId: "leaders",
    accentColor: "#FB923C",
    bgGradient: "from-orange-400/80 via-amber-300/70 to-yellow-100/60",
  },
];

const FloatingBlob = ({
  x,
  y,
  width,
  height,
  color,
  delay,
  rotate = 0,
}: {
  x: string;
  y: string;
  width: number;
  height: number;
  color: string;
  delay: number;
  rotate?: number;
}) => (
  <motion.div
    className="pointer-events-none absolute blur-[2px]"
    style={{
      left: x,
      top: y,
      width,
      height,
      background: color,
      borderRadius: "58% 42% 63% 37% / 42% 58% 39% 61%",
      transform: `rotate(${rotate}deg)`,
    }}
    animate={{
      y: [0, -24, 0],
      x: [0, 10, 0],
      opacity: [0.38, 0.7, 0.38],
      scale: [1, 1.08, 1],
      rotate: [rotate, rotate + 6, rotate],
      borderRadius: [
        "58% 42% 63% 37% / 42% 58% 39% 61%",
        "43% 57% 35% 65% / 56% 36% 64% 44%",
        "58% 42% 63% 37% / 42% 58% 39% 61%",
      ],
    }}
    transition={{ duration: 8 + delay, repeat: Infinity, delay, ease: "easeInOut" }}
  />
);

const ProgramCard = ({ program, index }: { program: Program; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.92 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ delay: index * 0.15, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="group relative h-[560px] cursor-pointer overflow-hidden rounded-[36px]"
      whileHover={{ y: -12, transition: { duration: 0.3, ease: "easeOut" } }}
    >
      <div
        className="pointer-events-none absolute inset-0 z-30 rounded-[36px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ boxShadow: `0 0 0 3px ${program.accentColor}50, 0 30px 60px ${program.accentColor}40` }}
      />

      <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105">
        <Image src={program.image} alt={program.title} fill className="object-cover brightness-75" />
      </div>

      <div className={`absolute inset-0 z-[1] bg-gradient-to-t ${program.bgGradient} opacity-72 transition-opacity duration-500 group-hover:opacity-84`} />
      <div className="absolute inset-0 z-[2] bg-gradient-to-t from-black/60 via-transparent to-black/20" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 opacity-10">
        <span className="select-none text-[130px] font-black leading-none text-white">{program.ageRange.split("-")[0]}</span>
      </div>

      <div className="absolute inset-0 z-20 flex flex-col justify-end p-7">
        <p className={`mb-1 text-xs font-bold uppercase tracking-[0.25em] text-white/70 ${taglineFont.className}`}>
          {program.subtitle} | {program.ageRange}
        </p>

        <h3 className={`mb-2 text-4xl leading-tight text-white ${headingFont.className}`}>{program.title}</h3>

        <div className="mb-4 h-1 w-12 rounded-full bg-white/60 transition-all duration-500 group-hover:w-24" />

        <p className={`mb-5 text-sm leading-relaxed text-white/90 ${bodyFont.className}`}>{program.description}</p>

        <div className="mb-5 flex translate-y-4 flex-wrap gap-2 opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
          {program.highlights.map((item) => (
            <span key={item} className="rounded-full border border-white/30 bg-white/20 px-3 py-1 text-[11px] font-bold text-white backdrop-blur-md">
              {item}
            </span>
          ))}
        </div>

        <Link href={`/Programs#${program.linkId}`}>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="flex w-fit items-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-bold shadow-2xl"
            style={{ color: program.accentColor }}
          >
            Explore Program
            <ArrowRight className="h-4 w-4" />
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

const ProgramSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section
      id="programs"
      ref={sectionRef}
      className={`relative overflow-hidden py-28 ${bodyFont.className}`}
      style={{ background: "linear-gradient(160deg, #FFF6F8 0%, #FFF9F4 42%, #EEF6FF 100%)" }}
    >
      <motion.div style={{ y: bgY }} className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-0 h-[520px] w-[560px] rounded-[46%_54%_59%_41%/44%_38%_62%_56%] bg-rose-200/45 blur-[90px]" />
        <div className="absolute -right-32 bottom-0 h-[520px] w-[560px] rounded-[58%_42%_35%_65%/52%_45%_55%_48%] bg-blue-200/42 blur-[90px]" />
        <div className="absolute left-1/2 top-1/2 h-[620px] w-[660px] -translate-x-1/2 -translate-y-1/2 rounded-[39%_61%_49%_51%/58%_41%_59%_42%] bg-purple-100/32 blur-[110px]" />
      </motion.div>

      <FloatingBlob x="3%" y="10%" width={118} height={82} color="rgba(232, 61, 89, 0.22)" delay={0} rotate={-12} />
      <FloatingBlob x="82%" y="7%" width={136} height={94} color="rgba(59, 108, 168, 0.2)" delay={1} rotate={8} />
      <FloatingBlob x="1%" y="62%" width={148} height={104} color="rgba(168, 85, 247, 0.16)" delay={2} rotate={-18} />
      <FloatingBlob x="87%" y="56%" width={126} height={88} color="rgba(16, 185, 129, 0.18)" delay={0.5} rotate={14} />
      <FloatingBlob x="45%" y="3%" width={96} height={66} color="rgba(249, 115, 22, 0.16)" delay={1.5} rotate={-8} />
      <FloatingBlob x="56%" y="76%" width={164} height={112} color="rgba(244, 114, 182, 0.15)" delay={2.5} rotate={10} />

      <div className="relative z-10 mx-auto max-w-[1600px] px-6">
        <div className="mb-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 flex items-center justify-center gap-2">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-rose-400" />
              <p className={`flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#E83D59] ${taglineFont.className}`}>
                <Sparkles className="h-3.5 w-3.5" />
                Our Learning Pathways
                <Sparkles className="h-3.5 w-3.5" />
              </p>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-rose-400" />
            </div>

            <h2 className={`mb-4 text-6xl leading-tight text-[#1a1a2e] md:text-7xl ${headingFont.className}`}>
              Where Every Child{" "}
              <span
              className="relative inline-block text-[#E83D59]"
              >
                Shines
                <motion.svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <motion.path
                    d="M 0 8 Q 50 0 100 8 Q 150 16 200 8"
                    stroke="#E83D59"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                  />
                </motion.svg>
              </span>
            </h2>

            <p className="mx-auto max-w-xl text-lg leading-relaxed text-gray-500">
              Thoughtfully designed programs that grow with your child from first steps to school readiness.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-4">
          {programs.map((program, index) => (
            <ProgramCard key={program.id} program={program} index={index} />
          ))}
        </div>
      </div>
        <WaveBottom fill="#fffaf7" />
    </section>
  );
};

export default ProgramSection;
