"use client";

import React from "react";
import { motion } from "framer-motion";
import { Home, ChevronRight, Cloud } from "lucide-react";
import Image from "next/image";
import { Titan_One, Nunito } from "next/font/google";

import heroFigure from "../public/boywithbrush.png";

const titleFont = Titan_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const bodyFont = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const Whyheader = () => {
  return (
    <header className={`relative flex min-h-[590px] w-full items-center justify-center overflow-hidden bg-[#3b6ca8] pt-20 pb-32 md:h-[70vh] md:py-0 ${bodyFont.className}`}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-white/10 blur-3xl"
        />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute top-10 right-[20%] h-80 w-80 rounded-full bg-[#e83d59]/20 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-[10%] text-white/80"
        >
          <Cloud size={64} fill="white" className="drop-shadow-sm" />
        </motion.div>
        <motion.div
          animate={{ x: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[25%] right-[35%] text-white/60"
        >
          <Cloud size={48} fill="white" className="drop-shadow-sm" />
        </motion.div>
      </div>

      <div className="relative z-10 grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-6 md:grid-cols-2">
        <div className="text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border-2 border-white bg-white/60 px-5 py-2 shadow-sm backdrop-blur-sm"
          >
            <Home className="h-4 w-4 text-[#D33060]" />
            <span className="text-sm font-bold text-[#3E3431]">Home</span>
            <ChevronRight className="h-4 w-4 text-[#9BC6C0]" />
            <span className="text-sm font-bold text-[#D33060]">Why Choose Us</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9, x: -50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
            className={`mb-4 text-5xl font-black leading-tight text-white drop-shadow-md md:text-7xl ${titleFont.className}`}
          >
            Why Parents
            <span className="mt-2 block text-[#ffe2a8]">Trust MothersPride</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mx-auto mt-4 max-w-xl text-lg font-medium leading-relaxed text-white/90 md:mx-0 lg:text-3xl"
          >
            Because every child deserves a loving environment where learning feels joyful, safe, and full of care.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0, y: [0, -15, 0] }}
          transition={{
            opacity: { duration: 0.8, delay: 0.3 },
            x: { type: "spring", stiffness: 50, delay: 0.3 },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
          className="relative z-20 mt-10 md:block md:mt-0"
        >
          <Image
            src={heroFigure}
            alt="MothersPride why us illustration"
            priority
            className="h-[250px] w-full object-contain drop-shadow-xl transition-transform duration-500 hover:rotate-0 md:ml-[200px] md:h-auto md:max-h-[500px] rotate-3"
          />
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 z-30 w-full rotate-180 overflow-hidden leading-none">
        <svg className="relative block h-[80px] w-full md:h-[140px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
          />
        </svg>
      </div>
    </header>
  );
};

export default Whyheader;
