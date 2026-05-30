"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Space_Mono } from "next/font/google";
import STackTowerGame from "@/components/Game"; 

import heroIllustration from "../public/motherchild.png";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const FadeUp = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const PlayfulBackground = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <motion.div
        initial={{ y: "120vh", x: "-10vw", rotate: 45 }}
        animate={{ y: "-20vh", x: "80vw" }}
        transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatDelay: 5.5 }}
        className="absolute bottom-0 left-0 drop-shadow-xl"
      >
        <span className="text-[60px] lg:text-[90px]">🚀</span>
      </motion.div>
    </div>
  );
};

const HeroBanner: React.FC = () => {
  return (
    <section className={`relative w-full min-h-screen bg-[#F7F5E5] flex flex-col overflow-hidden ${spaceMono.className}`}>
      
      <PlayfulBackground />

      {/* MAIN HERO CONTENT - Added pt-[120px] to account for fixed navbar */}
      <main className="relative flex-1 w-full max-w-[1440px] mx-auto px-6 lg:px-[66px] pt-[120px] lg:pt-[160px] pb-[100px] flex flex-col lg:flex-row items-center justify-between z-10 pointer-events-none">

        <div className="w-full lg:w-[583px] flex flex-col items-start gap-6 z-20 pointer-events-auto">

          <FadeUp delay={0.1}>
            <div className="flex items-center gap-3 bg-[#FFD7DD] rounded-lg px-3 py-2 border border-rose-200">
              <div className="w-3 h-3 bg-[#0F9418] rounded-full" />
              <span className="font-sans font-medium text-[16px] text-black">Admission open</span>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <h1
              className="text-5xl lg:text-[56px] lg:leading-[67px] text-black tracking-wide"
              style={{ fontFamily: "'VVDS Fifties', sans-serif", fontWeight: 400 }}
            >
              Where Montessori Meets Motherly Love
            </h1>
          </FadeUp>

          <FadeUp delay={0.3}>
            <p className="text-[16px] leading-[24px] tracking-[-0.01em] text-black max-w-[500px]">
              A warm, nurturing Montessori space where your little one learns through play, builds confidence, and discovers the joy of curiosity - wrapped in a mother's love.
            </p>
          </FadeUp>

          {/* CTA Buttons Row */}
          <FadeUp delay={0.4}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-2 w-full">
              {/* Primary CTA */}
              <button className="w-full sm:w-[207px] h-[52px] flex items-center justify-center bg-[#E2324E] border-[2.5px] border-[#2E5298] shadow-[5px_5px_0px_#2E5298] rounded-[4px] text-[16px] font-bold text-[#000919] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[3px_3px_0px_#2E5298] transition-all active:shadow-none active:translate-y-[5px] active:translate-x-[5px]">
                Schedule a Tour
              </button>

              {/* ── GAME BUTTON ── Drop-in the StackTowerGame component here */}
              <STackTowerGame />
            </div>
          </FadeUp>

        </div>

        {/* Right Image Column */}
        <FadeUp delay={0.5} className="w-full lg:w-auto mt-12 lg:mt-0 lg:absolute lg:right-[40px] lg:top-[120px] z-10 flex justify-center pointer-events-none">
          <div className="relative w-full max-w-[500px] lg:max-w-none lg:w-[878px] h-[400px] lg:h-[590px]">
            <Image
              src={heroIllustration}
              alt="Children playing with Montessori blocks"
              fill
              priority
              className="object-contain object-center lg:object-right"
              sizes="(max-width: 1024px) 100vw, 878px"
            />
          </div>
        </FadeUp>
      </main>

      {/* BOTTOM TICKER */}
      <div className="absolute bottom-0 left-0 w-full h-[54px] bg-[#E2324E] flex items-center overflow-hidden z-30 pointer-events-auto">
        <motion.div
          initial={{ x: "0%" }}
          animate={{ x: "-50%" }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
          className="flex whitespace-nowrap"
        >
          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-[16px] leading-[24px] tracking-[0.05em] text-black px-4">
              My daughter absolutely loves going here every morning. The teachers truly care like family. -
            </span>
          ))}
        </motion.div>
      </div>

    </section>
  );
};

export default HeroBanner;