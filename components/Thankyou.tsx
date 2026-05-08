"use client";
import React from 'react';
import { motion } from 'framer-motion';
import MegaDiagnosticsNavbar from '@/app/navbar/navbar';

// --- Background Components ---
const BackgroundBeams = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]" />
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-emerald-400/20 to-transparent" />
    </div>
  );
};

const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-emerald-400/30 rounded-full"
          initial={{ y: "100vh", x: `${Math.random() * 100}vw` }}
          animate={{ y: "-10vh" }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5
          }}
        />
      ))}
    </div>
  );
};

function ThankYouPage() {
  return (
    <div className="min-h-screen bg-[#f0fdf4] flex flex-col">
      <MegaDiagnosticsNavbar />

      <main className="flex-1 relative flex items-center justify-center overflow-hidden px-4 py-12">
        <BackgroundBeams />
        <FloatingParticles />

        <div className="relative z-10 w-full max-w-2xl text-center">
          {/* Success Checkmark Animation */}
          <motion.div 
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="mb-8 flex justify-center"
          >
            <div className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-200">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <motion.path 
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" 
                />
              </svg>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-emerald-900 mb-4 tracking-tight">
              Hi Partner! 👋
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-emerald-700 mb-6">
              Details Shared Successfully
            </h2>
          </motion.div>

          {/* Content Body */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-4 mb-10"
          >
            <p className="text-lg text-emerald-800/80 leading-relaxed max-w-lg mx-auto">
              We appreciate your interest in joining <strong>Mothers Hood</strong>. 
              Our specialized team has received your inquiry and is currently reviewing it. 
              We look for passionate partners exactly like you.
            </p>
            <div className="flex justify-center items-center gap-2 text-emerald-600 font-semibold">
              <span className="w-8 h-[2px] bg-emerald-200"></span>
              <span>We will connect with you soon</span>
              <span className="w-8 h-[2px] bg-emerald-200"></span>
            </div>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white/60 backdrop-blur-md border border-emerald-100 p-8 rounded-[40px] shadow-xl shadow-emerald-900/5 max-w-md mx-auto"
          >
            <h3 className="text-emerald-900 font-bold text-xl mb-2">Need Urgent Support?</h3>
            <p className="text-emerald-700/70 text-sm mb-6">
              Our franchise experts are available on WhatsApp for immediate queries.
            </p>
            
            <motion.a 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="https://wa.me/919999996266" 
              target="_blank" 
              className="flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-2xl transition-colors shadow-lg shadow-emerald-500/20"
            >
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
              </svg>
              Chat with Experts
            </motion.a>
          </motion.div>
        </div>

        {/* Decorative Circles */}
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-200/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-400/10 blur-[120px] rounded-full" />
      </main>
    </div>
  );
}

export default ThankYouPage;