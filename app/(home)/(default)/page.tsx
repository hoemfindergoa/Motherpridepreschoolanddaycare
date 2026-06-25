import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock3, Heart, School, ShieldCheck, Sparkles } from "lucide-react";
import { Fredoka, Nunito } from "next/font/google";import HeroBanner from '@/components/heropreview'
import ProgramPreview from '@/components/Programpreview'
import DaycareSection from '@/components/daycarepreview'
import FaqSection from '@/components/Faqsection'





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








export default function Page() {
  return (
      <div>
           <HeroBanner />
      <ProgramPreview />
      <DaycareSection />
      <FaqSection/>

      </div>
  );
}