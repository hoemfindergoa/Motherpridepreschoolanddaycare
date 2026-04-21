"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Sparkles, ShieldCheck, BookOpen, Users } from "lucide-react";
import { Fredoka, Nunito } from "next/font/google";

import familyImage from "../../public/compressed/beautiful-mother-with-little-daughter.jpg.webp";
import classroomImage from "../../public/compressed/elementary-school-teacher-with-class.jpg.webp";
import careImage from "../../public/compressed/young-mom-holding-hugging-adorable-baby-enjoying-motherhood-child-care-standing-bedroom-home.jpg.webp";

const headingFont = Fredoka({ subsets: ["latin"], weight: ["600"] });
const bodyFont = Nunito({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

const values = [
  {
    icon: Heart,
    title: "Motherly Care",
    copy: "A gentle first-school experience where emotional comfort matters just as much as learning.",
    accent: "rose",
  },
  {
    icon: BookOpen,
    title: "Purposeful Learning",
    copy: "Play-led exploration, language exposure, creativity, and school readiness woven into everyday routines.",
    accent: "amber",
  },
  {
    icon: ShieldCheck,
    title: "Safe Environment",
    copy: "Thoughtful supervision, caring teachers, and spaces designed to help children feel secure and settled.",
    accent: "blue",
  },
  {
    icon: Users,
    title: "Family Partnership",
    copy: "We work closely with parents so each child receives continuity of care between home and school.",
    accent: "emerald",
  },
];

export default function AboutPage() {
  return (
    <div className={`overflow-x-hidden bg-[#fff9f5] text-slate-800 ${bodyFont.className}`}>
      <section className="relative overflow-hidden px-6 pt-32 pb-16 md:px-10 lg:px-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(232,61,89,0.12),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(59,108,168,0.12),_transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/80 px-4 py-2 text-sm font-bold text-rose-500 shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4" />
              About MothersPride
            </div>
            <h1 className={`max-w-3xl text-5xl leading-[1.05] text-slate-900 sm:text-6xl lg:text-7xl ${headingFont.className}`}>
              A preschool experience shaped by
              <span className="block text-[#e83d59]">love, affection, and care.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
              MothersPride Preschool & Daycare is built around a simple belief: children learn best when they feel emotionally safe, warmly welcomed, and joyfully engaged. We create that feeling from the very first hello.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[28px] bg-white p-5 shadow-[0_20px_60px_rgba(231,94,120,0.12)]">
                <p className="text-3xl font-extrabold text-[#e83d59]">2-6 yrs</p>
                <p className="mt-1 text-sm font-semibold text-slate-500">Thoughtfully nurtured age groups</p>
              </div>
              <div className="rounded-[28px] bg-white p-5 shadow-[0_20px_60px_rgba(59,108,168,0.12)]">
                <p className="text-3xl font-extrabold text-[#3b6ca8]">Play-led</p>
                <p className="mt-1 text-sm font-semibold text-slate-500">Learning that feels natural and joyful</p>
              </div>
              <div className="rounded-[28px] bg-white p-5 shadow-[0_20px_60px_rgba(245,158,11,0.14)]">
                <p className="text-3xl font-extrabold text-amber-500">Care+</p>
                <p className="mt-1 text-sm font-semibold text-slate-500">Preschool warmth with daycare comfort</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-8 h-44 w-44 rounded-full bg-rose-200/50 blur-3xl" />
            <div className="absolute -right-4 bottom-8 h-40 w-40 rounded-full bg-blue-200/50 blur-3xl" />
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="relative overflow-hidden rounded-[42px] bg-white p-4 shadow-[0_30px_80px_rgba(30,41,59,0.14)]"
            >
              <div className="grid gap-4 sm:grid-cols-[1fr_0.75fr]">
                <div className="relative min-h-[420px] overflow-hidden rounded-[30px]">
                  <Image src={familyImage} alt="Mother and child smiling" fill className="object-cover" />
                </div>
                <div className="grid gap-4">
                  <div className="relative min-h-[200px] overflow-hidden rounded-[26px]">
                    <Image src={classroomImage} alt="Preschool classroom learning" fill className="object-cover" />
                  </div>
                  <div className="rounded-[26px] bg-[#fff3f6] p-5">
                    <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#e83d59]">Our Promise</p>
                    <p className={`mt-3 text-2xl leading-tight text-slate-900 ${headingFont.className}`}>
                      Where Montessori-inspired learning meets motherly reassurance.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-6 py-8 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-4">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              className="rounded-[30px] border border-white/60 bg-white/90 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)]"
            >
              <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl ${
                value.accent === "rose"
                  ? "bg-rose-100 text-rose-500"
                  : value.accent === "amber"
                    ? "bg-amber-100 text-amber-500"
                    : value.accent === "blue"
                      ? "bg-blue-100 text-blue-500"
                      : "bg-emerald-100 text-emerald-500"
              }`}>
                <value.icon className="h-6 w-6" />
              </div>
              <h3 className={`text-2xl text-slate-900 ${headingFont.className}`}>{value.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-slate-600">{value.copy}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative min-h-[420px] overflow-hidden rounded-[42px] shadow-[0_30px_80px_rgba(30,41,59,0.16)]">
            <Image src={careImage} alt="Caring preschool environment" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 rounded-[28px] bg-white/88 p-5 backdrop-blur">
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#3b6ca8]">Why Families Connect</p>
              <p className="mt-2 text-base font-semibold leading-relaxed text-slate-700">
                Because a child&apos;s first school should feel nurturing, beautiful, and emotionally comforting.
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#e83d59]">Our Approach</p>
            <h2 className={`mt-4 text-4xl leading-tight text-slate-900 md:text-5xl ${headingFont.className}`}>
              We don&apos;t just prepare children for school.
              <span className="block text-[#3b6ca8]">We prepare them to feel confident in it.</span>
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-slate-600">
              <p>
                At MothersPride, routines are intentional, transitions are gentle, and every classroom interaction is designed to build belonging. Children are encouraged to speak, move, imagine, create, and discover at their own pace.
              </p>
              <p>
                Our programs support cognitive growth, social confidence, emotional expression, language development, and independence while preserving the softness and affection young children need during these early years.
              </p>
              <p>
                The result is a preschool and daycare environment that feels elevated and warm at the same time: structured enough for growth, tender enough for trust.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
