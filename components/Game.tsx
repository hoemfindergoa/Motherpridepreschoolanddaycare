"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Space_Mono } from "next/font/google";
import { eslint } from "@/next.config";

// ─── Fonts ───────────────────────────────────────────────────────────────────
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// ─── Constants & Configuration ───────────────────────────────────────────────
const TARGET_SCORE = 15;
const STARTING_LIVES = 3;
const GRID_SIZE = 9; // 3x3 grid

const COLORS = [
  "#FFD7DD", // Soft Pink
  "#E2324E", // Red
  "#FFD93D", // Yellow
  "#6BCB77", // Green
  "#4D96FF", // Blue
  "#FF922B", // Orange
  "#CC5DE8", // Purple
  "#20C997", // Teal
  "#F7F5E6", // Off-white
];

const PETS = ["🐶", "🐱", "🐰", "🦊", "🐻", "🐼", "🐸", "🐷", "🐯"];

// ─── Components ──────────────────────────────────────────────────────────────

const Confetti = () => {
  const pieces = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 0.5,
    color: COLORS[i % COLORS.length],
    size: 10 + Math.random() * 10,
    rotate: Math.random() * 360,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-50">
      {pieces.map((p) => (
        <motion.div
          key={p.id}
          className="absolute border-[2px] border-[#0F0A0A]"
          style={{
            left: p.left,
            top: -20,
            width: p.size,
            height: p.size,
            background: p.color,
          }}
          animate={{
            y: ["0%", "120vh"],
            rotate: [p.rotate, p.rotate + 720],
            x: [(Math.random() - 0.5) * 100, (Math.random() - 0.5) * 100],
          }}
          transition={{
            duration: 2.5 + Math.random() * 2,
            delay: p.delay,
            ease: "linear",
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  );
};

const WinModal = ({ onPlayAgain, score }: { onPlayAgain: () => void; score: number }) => (
  <motion.div
    className="absolute inset-0 z-40 flex flex-col items-center justify-center bg-[#F7F5E6]/95 backdrop-blur-sm"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <Confetti />
    <motion.div
      className="relative z-10 flex flex-col items-center p-6 bg-[#F7F5E6] border-[3px] border-[#0F0A0A] shadow-[8px_8px_0px_#0F0A0A] rounded-[4px] w-[90%]"
      initial={{ scale: 0.9, y: 20 }}
      animate={{ scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      <div className="text-[64px] mb-2 drop-shadow-md">🏆</div>
      <h2 className="text-3xl font-bold mb-1 text-[#0F0A0A] tracking-tight">YOU WIN! 🎉</h2>
      <p className="text-[14px] font-bold text-[#2E5298] mb-4">You caught all {score} pets!</p>

      <button
        onClick={onPlayAgain}
        className="w-full h-[48px] bg-[#E2324E] border-[2.5px] border-[#0F0A0A] shadow-[4px_4px_0px_#0F0A0A] rounded-[4px] text-[16px] font-bold text-[#F7F5E6] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_#0F0A0A] active:shadow-none active:translate-y-[4px] active:translate-x-[4px] transition-all"
      >
        Play Again! 🚀
      </button>
    </motion.div>
  </motion.div>
);

const LoseModal = ({ onPlayAgain, score }: { onPlayAgain: () => void; score: number }) => (
  <motion.div
    className="absolute inset-0 z-40 flex flex-col items-center justify-center bg-[#F7F5E6]/95 backdrop-blur-sm"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <motion.div
      className="relative z-10 flex flex-col items-center p-6 bg-[#F7F5E6] border-[3px] border-[#0F0A0A] shadow-[8px_8px_0px_#0F0A0A] rounded-[4px] w-[90%]"
      initial={{ scale: 0.9, y: 20 }}
      animate={{ scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      <div className="text-[64px] mb-2">🏃‍♂️💨</div>
      <h2 className="text-3xl font-bold mb-2 text-[#0F0A0A] tracking-tight">Oh no!</h2>
      <p className="text-[14px] text-center text-[#0F0A0A] mb-6">
        The pets got away! <br />
        You caught <b>{score}</b> pet{score !== 1 ? "s" : ""}.
      </p>

      <button
        onClick={onPlayAgain}
        className="w-full h-[48px] bg-[#FFD93D] border-[2.5px] border-[#0F0A0A] shadow-[4px_4px_0px_#0F0A0A] rounded-[4px] text-[16px] font-bold text-[#0F0A0A] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_#0F0A0A] active:shadow-none active:translate-y-[4px] active:translate-x-[4px] transition-all"
      >
        Try Again 💪
      </button>
    </motion.div>
  </motion.div>
);

// ─── Main Game Component ──────────────────────────────────────────────────────
const PeekABooGame: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [phase, setPhase] = useState<"idle" | "playing" | "win" | "lose">("idle");

  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(STARTING_LIVES);
  
  // Which hole currently has a pet showing
  const [activeHole, setActiveHole] = useState<number | null>(null);
  const [currentPet, setCurrentPet] = useState<string>("🐶");
  const [activeColor, setActiveColor] = useState<string>("#FFD93D");

  // Timers and Audio Refs
  const isPlayingRef = useRef(false); // <--- Added this to fix the stale closure!
  const hideTimerRef = useRef<NodeJS.Timeout | null>(null);
  const nextSpawnTimerRef = useRef<NodeJS.Timeout | null>(null);
  const bgMusicRef = useRef<HTMLAudioElement | null>(null);

  // Initialize Audio
  useEffect(() => {
    if (typeof window !== "undefined") {
      bgMusicRef.current = new Audio("/bg-music.mp3");
      bgMusicRef.current.loop = true;
    }
    return () => {
      if (bgMusicRef.current) {
        bgMusicRef.current.pause();
        bgMusicRef.current = null;
      }
    };
  }, []);

  // Update Audio Intensity based on Score
  useEffect(() => {
    if (bgMusicRef.current && phase === "playing") {
      bgMusicRef.current.playbackRate = 1.0 + (score * (0.5 / TARGET_SCORE));
    }
  }, [score, phase]);

  // Stop/Start Audio based on phase
  useEffect(() => {
    if (bgMusicRef.current) {
      if (phase === "win" || phase === "lose" || phase === "idle") {
        bgMusicRef.current.pause();
      }
    }
  }, [phase]);

  // Clear timers on unmount
  useEffect(() => {
    return () => stopAllTimers();
  }, []);

  const stopAllTimers = () => {
    isPlayingRef.current = false;
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    if (nextSpawnTimerRef.current) clearTimeout(nextSpawnTimerRef.current);
  };

  // Game Loop Logic
  const spawnPet = useCallback((currentScore: number) => {
    if (!isPlayingRef.current) return; // Strict check using Ref instead of Phase

    const randomHole = Math.floor(Math.random() * GRID_SIZE);
    const randomPet = PETS[Math.floor(Math.random() * PETS.length)];
    const color = COLORS[Math.floor(Math.random() * (COLORS.length - 1))];

    setActiveHole(randomHole);
    /* eslint-disable */
    setCurrentPet(randomPet!);
    setActiveColor(color!);

    // Speed formula: starts at 1200ms, drops down to 600ms as score increases
    const visibleDuration = Math.max(600, 1200 - (currentScore * 40));

    hideTimerRef.current = setTimeout(() => {
      if (!isPlayingRef.current) return;

      // Missed pet!
      setActiveHole(null);
      
      setLives((prevLives) => {
        const newLives = prevLives - 1;
        if (newLives <= 0) {
          isPlayingRef.current = false;
          setPhase("lose");
          return 0;
        }
        return newLives;
      });

      // Wait a short moment, then spawn next pet if still playing
      if (isPlayingRef.current) {
        nextSpawnTimerRef.current = setTimeout(() => {
          spawnPet(currentScore);
        }, 500);
      }

    }, visibleDuration);
  }, []);

  const startGame = () => {
    stopAllTimers(); // Reset everything
    
    setScore(0);
    setLives(STARTING_LIVES);
    setActiveHole(null);
    setPhase("playing");
    isPlayingRef.current = true; // Activating strictly via Ref

    if (bgMusicRef.current) {
      bgMusicRef.current.currentTime = 0;
      bgMusicRef.current.playbackRate = 1.0;
      bgMusicRef.current.play().catch((e) => console.log("Audio autoplay prevented by browser:", e));
    }

    // Spawn first pet after a small delay
    nextSpawnTimerRef.current = setTimeout(() => spawnPet(0), 800);
  };

  const handleTapPet = (index: number) => {
    if (!isPlayingRef.current || activeHole !== index) return;

    // Caught it!
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    setActiveHole(null);

    const newScore = score + 1;
    setScore(newScore);

    if (newScore >= TARGET_SCORE) {
      isPlayingRef.current = false;
      setPhase("win");
      return;
    }

    // Spawn next pet quickly
    nextSpawnTimerRef.current = setTimeout(() => {
      spawnPet(newScore);
    }, 400); 
  };

  const closeGame = () => {
    stopAllTimers();
    setIsOpen(false);
    setPhase("idle");
  };

  return (
    <div className={spaceMono.className}>
      {/* ── Game Launch Button (Matches Hero CTA) ── */}
      <button
        onClick={() => { setIsOpen(true); startGame(); }}
        className="w-[207px] sm:w-[207px] h-[52px] flex items-center justify-center bg-[#FFD93D] border-[2.5px] border-[#2E5298] shadow-[5px_5px_0px_#2E5298] rounded-[4px] text-[16px] font-bold text-[#000919] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[3px_3px_0px_#2E5298] transition-all active:shadow-none active:translate-y-[5px] active:translate-x-[5px]"
      >
        🐶 Play Game
      </button>

      {/* ── Game Modal Overlay ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-[#0F0A0A]/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => { 
              if (e.target === e.currentTarget) closeGame();
            }}
          >
            <motion.div
              className="relative overflow-hidden bg-[#F7F5E6] border-[3px] border-[#0F0A0A] shadow-[12px_12px_0px_#0F0A0A] rounded-[8px] flex flex-col"
              style={{ width: 420, maxWidth: "100vw" }}
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b-[3px] border-[#0F0A0A] bg-[#6BCB77]">
                <span className="text-[#0F0A0A] font-bold text-lg tracking-tight">
                  🐾 Peek-a-Boo Pets
                </span>
                <button
                  onClick={closeGame}
                  className="w-[32px] h-[32px] flex items-center justify-center bg-[#E2324E] border-[2px] border-[#0F0A0A] shadow-[2px_2px_0px_#0F0A0A] rounded-[4px] text-white font-bold hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-none transition-all"
                >
                  ✕
                </button>
              </div>

              {/* Status Bar */}
              <div className="bg-[#4D96FF] border-b-[3px] border-[#0F0A0A] py-3 px-5 flex justify-between items-center">
                <div className="flex gap-1">
                  {[...Array(STARTING_LIVES)].map((_, i) => (
                    <span key={i} className={`text-xl transition-all duration-300 ${i < lives ? "opacity-100 scale-100" : "opacity-30 scale-75 grayscale"}`}>
                      ❤️
                    </span>
                  ))}
                </div>
                <div className="text-[#F7F5E6] font-bold flex items-center gap-2">
                  <span>Score:</span>
                  <span className="bg-[#0F0A0A] px-2 py-1 rounded-[4px] text-[#FFD93D]">
                    {score}/{TARGET_SCORE}
                  </span>
                </div>
              </div>

              {/* ── Game Grid ── */}
              <div className="p-6 bg-[#F7F5E6]">
                <div className="grid grid-cols-3 gap-4 mx-auto w-full max-w-[320px]">
                  {[...Array(GRID_SIZE)].map((_, index) => {
                    const isActive = activeHole === index;
                    return (
                      <div
                        key={index}
                        onClick={() => handleTapPet(index)}
                        className="relative w-full aspect-square bg-[#0F0A0A] rounded-[8px] overflow-hidden cursor-pointer shadow-[inset_0px_6px_0px_rgba(0,0,0,0.4)]"
                      >
                        {/* The "Hole" background inside */}
                        <div className="absolute inset-0 bg-[#2b2b2b] m-[3px] rounded-[5px]" />

                        <AnimatePresence>
                          {isActive && (
                            <motion.div
                              initial={{ y: "100%" }}
                              animate={{ y: "0%" }}
                              exit={{ y: "100%" }}
                              transition={{ type: "spring", stiffness: 500, damping: 25 }}
                              className="absolute bottom-0 left-0 right-0 flex items-end justify-center border-t-[3px] border-x-[3px] border-[#0F0A0A] rounded-t-[12px] shadow-[0px_-4px_0px_rgba(0,0,0,0.1)]"
                              style={{ 
                                height: "85%", 
                                backgroundColor: activeColor,
                                margin: "0 4px" // slight inset
                              }}
                            >
                              <span className="text-[50px] leading-none mb-2 drop-shadow-md pointer-events-none select-none">
                                {currentPet}
                              </span>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Instructions */}
              <div className="border-t-[3px] border-[#0F0A0A] bg-[#FFD7DD] py-2 text-center text-[12px] font-bold text-[#0F0A0A]">
                {phase === "playing" ? "Tap the pets before they hide!" : "Get ready to catch them!"}
              </div>

              {/* Win / Lose Modals */}
              <AnimatePresence>
                {phase === "win" && <WinModal onPlayAgain={startGame} score={score} />}
                {phase === "lose" && <LoseModal onPlayAgain={startGame} score={score} />}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PeekABooGame;