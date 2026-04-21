"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { Fredoka, Nunito } from "next/font/google";

import playgroupImage from "../../public/compressed/young-boy-girl-playing-indoors-with-eco-toys.jpg.webp";
import nurseryImage from "../../public/compressed/young-girl-sitting-table-drawing-colorful-picture-with-crayons.jpg.webp";
import lkgImage from "../../public/compressed/young-child-is-thoughtfully-engaged-with-abacus-suggesting-learning-play-environment.jpg.webp";
import ukgImage from "../../public/compressed/elementary-school-teacher-with-class.jpg.webp";
import daycareImage from "../../public/compressed/happy-family-home-mother-lifting-air-little-toddler-child-daughter-mom-baby-girl-playing-h.jpg.webp";

const headingFont = Fredoka({ subsets: ["latin"], weight: ["600"] });
const bodyFont = Nunito({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

const programs = [
  {
    id: "explorers",
    label: "Playgroup | 2 - 3 Years",
    title: "Little Explorers",
    intro: "A loving first step into school life where toddlers feel secure, engaged, and gently encouraged.",
    copy: "This program focuses on settling, sensory discovery, movement, music, social comfort, and joyful routines that help children feel at ease away from home.",
    bullets: ["Comfort-led settling", "Sensory play", "Music and rhythm", "Early social confidence"],
    image: playgroupImage,
    palette: "from-rose-200 via-white to-amber-100",
    accent: "text-rose-500",
    chip: "bg-rose-500",
  },
  {
    id: "learners",
    label: "Nursery | 3 - 4 Years",
    title: "Curious Learners",
    intro: "A bright, hands-on learning space for imagination, language, creativity, and cheerful exploration.",
    copy: "Children begin recognizing patterns, sounds, colors, numbers, and routines through activities designed to make learning feel playful and deeply engaging.",
    bullets: ["Phonics readiness", "Creative expression", "Group participation", "Confidence building"],
    image: nurseryImage,
    palette: "from-[#e9f4ff] via-white to-[#fff4dd]",
    accent: "text-sky-500",
    chip: "bg-sky-500",
  },
  {
    id: "thinkers",
    label: "LKG | 4 - 5 Years",
    title: "Creative Thinkers",
    intro: "A thoughtful lower kindergarten stage where early academics grow alongside confidence and imagination.",
    copy: "Children explore language, numbers, storytelling, art, and classroom independence with structured support that still feels warm and child-centered.",
    bullets: ["Early reading readiness", "Conceptual learning", "Creative thinking", "Independent habits"],
    image: lkgImage,
    palette: "from-[#f4ecff] via-white to-[#ffeef5]",
    accent: "text-violet-500",
    chip: "bg-violet-500",
  },
  {
    id: "leaders",
    label: "UKG | 5 - 6 Years",
    title: "Future Leaders",
    intro: "A confident bridge into formal schooling with stronger communication, concepts, and classroom readiness.",
    copy: "The UKG experience strengthens focus, numeracy, language, and self-expression while helping children transition smoothly into primary school expectations.",
    bullets: ["School readiness", "Language confidence", "Numeracy foundations", "Expression and focus"],
    image: ukgImage,
    palette: "from-[#e6fbf5] via-white to-[#eef8ff]",
    accent: "text-emerald-500",
    chip: "bg-emerald-500",
  },
  {
    id: "daycare",
    label: "Daycare | Flexible Care",
    title: "Daycare With Heart",
    intro: "A safe, soothing extension of home for children who need warmth, supervision, routine, and engagement through the day.",
    copy: "Our daycare model offers emotional reassurance, rest time, guided play, and mindful care so children feel comfortable and parents feel peaceful.",
    bullets: ["Comfort and supervision", "Routine and rest", "Safe engagement", "Parent peace of mind"],
    image: daycareImage,
    palette: "from-[#fff1da] via-white to-[#ffe7ec]",
    accent: "text-amber-500",
    chip: "bg-amber-500",
  },
];

export default function ProgramsPage() {
  return (
    <div className={`overflow-x-hidden bg-[#fffaf6] text-slate-800 ${bodyFont.className}`}>
      <section className="px-6 pt-32 pb-12 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white px-4 py-2 text-sm font-bold text-amber-600 shadow-sm">
              <Sparkles className="h-4 w-4" />
              MothersPride Learning Journey
            </div>
            <h1 className={`mt-6 text-5xl leading-[1.05] text-slate-900 sm:text-6xl lg:text-7xl ${headingFont.className}`}>
              Programs designed to grow
              <span className="block text-[#e83d59]">with your child, not ahead of them.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
              Every stage at MothersPride is carefully shaped around emotional comfort, joyful exploration, and age-appropriate development so children feel supported as they grow.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl space-y-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              id={program.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`grid overflow-hidden rounded-[38px] border border-white/70 bg-gradient-to-br ${program.palette} shadow-[0_24px_70px_rgba(15,23,42,0.08)] lg:grid-cols-[0.9fr_1.1fr]`}
            >
              <div className="relative min-h-[300px] lg:min-h-[420px]">
                <Image src={program.image} alt={program.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent lg:bg-gradient-to-r lg:from-slate-950/10 lg:to-transparent" />
              </div>

              <div className="p-8 md:p-10 lg:p-12">
                <div className="flex flex-wrap items-center gap-3">
                  <span className={`inline-flex rounded-full px-4 py-2 text-sm font-extrabold uppercase tracking-[0.18em] text-white ${program.chip}`}>
                    {program.label}
                  </span>
                </div>
                <h2 className={`mt-5 text-4xl leading-tight text-slate-900 md:text-5xl ${headingFont.className}`}>{program.title}</h2>
                <p className={`mt-4 text-lg font-bold leading-relaxed ${program.accent}`}>{program.intro}</p>
                <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">{program.copy}</p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {program.bullets.map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/80 px-4 py-3 shadow-sm backdrop-blur">
                      <div className={`flex h-8 w-8 items-center justify-center rounded-full text-white ${program.chip}`}>
                        <Check className="h-4 w-4" />
                      </div>
                      <span className="text-sm font-bold text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>

                <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-900 px-7 py-3 text-sm font-extrabold uppercase tracking-[0.14em] text-white transition-all hover:-translate-y-1 hover:bg-slate-800">
                  Enquire Now
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
