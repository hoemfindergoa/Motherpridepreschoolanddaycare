"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Plus, 
  Minus, 
  Baby, 
  BookOpen, 
  ShieldCheck, 
  Clock, 
  Sparkles, 
  MessageCircle, 
  Search,
  School,
  Smile,
  Calendar,
  HelpCircle,
  Phone
} from "lucide-react";
import { Titan_One, Nunito } from 'next/font/google';

// --- FONTS ---
const titleFont = Titan_One({ 
  weight: '400', 
  subsets: ['latin'],
  display: 'swap',
});

const bodyFont = Nunito({ 
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  display: 'swap',
});

// --- TYPES & DATA ---
type ThemeColor = 'rose' | 'sky' | 'purple' | 'teal' | 'amber';

const themeColors: ThemeColor[] = ['rose', 'sky', 'purple', 'teal', 'amber'];

const faqData = [
  {
    question: "What age groups do you accept?",
    answer: "We welcome children from 2 to 6 years, offering age-appropriate programs for infants, toddlers, preschoolers and kindergarten learners.",
    icon: Baby
  },
  {
    question: "What curriculum does the preschool follow?",
    answer: "We follow a play-based, Montessori-inspired and early learning approach that focuses on holistic development—academic, social, emotional, and physical growth.",
    icon: BookOpen
  },
  {
    question: "Is your daycare safe and secure?",
    answer: "Yes. Our daycare follows strict safety protocols, CCTV surveillance, secure entry-exit systems, trained staff, and regular hygiene and safety audits.",
    icon: ShieldCheck
  },
  {
    question: "What are the preschool and daycare timings?",
    answer: "Preschool operates during morning hours, while daycare offers flexible full-day and half-day options to support working parents.",
    icon: Clock
  },
  {
    question: "What activities will my child be engaged in?",
    answer: "Children participate in Montessori activities, storytelling, phonics, numeracy, art & craft, music, dance, sensory play and outdoor activities designed for joyful learning.",
    icon: Sparkles
  },
  {
    question: "How do you ensure hygiene and cleanliness?",
    answer: "Our classrooms, toys and play areas are cleaned and sanitized with regular handwashing routines and child-friendly hygiene practices.",
    icon: Sparkles
  },
  {
    question: "How do you communicate with parents?",
    answer: "We maintain regular communication through parent-teacher meetings, progress updates, activity photos, and direct communication channels.",
    icon: MessageCircle
  },
  {
    question: "Do you offer CCTV access to parents?",
    answer: "CCTV access is available as per school policy, ensuring transparency while maintaining privacy and safety standards.",
    icon: Search
  },
  {
    question: "What is the admission process?",
    answer: "Admissions include counseling, school visit, form submission, and orientation, ensuring a smooth and comfortable onboarding for both child and parents.",
    icon: School
  },
  {
    question: "Is there a trial or settling period?",
    answer: "Yes. We offer a settling-in period to help children adapt comfortably to the new environment at their own pace.",
    icon: Smile
  },
  {
    question: "Do you celebrate festivals and special days?",
    answer: "Absolutely. We celebrate festivals, birthdays, theme days, and cultural events to encourage social skills, creativity, and inclusivity.",
    icon: Calendar
  },
  {
    question: "What makes Little Dreamers different?",
    answer: "Our child-centric approach, safe environment, trained educators, engaging curriculum, and strong parent partnership make us a trusted choice.",
    icon: HelpCircle
  },
  {
    question: "How can parents schedule a school visit?",
    answer: "Parents can call us, visit the campus, or fill out the inquiry form, and our team will schedule a convenient school tour.",
    icon: Phone
  }
];

// --- STYLES HELPER ---
const getThemeStyles = (color: ThemeColor) => {
  const styles = {
    rose:   { border: 'border-rose-200', activeBorder: 'border-rose-400', bg: 'bg-rose-50', text: 'text-rose-700', icon: 'text-rose-500' },
    sky:    { border: 'border-sky-200', activeBorder: 'border-sky-400', bg: 'bg-sky-50', text: 'text-sky-700', icon: 'text-sky-500' },
    purple: { border: 'border-purple-200', activeBorder: 'border-purple-400', bg: 'bg-purple-50', text: 'text-purple-700', icon: 'text-purple-500' },
    teal:   { border: 'border-teal-200', activeBorder: 'border-teal-400', bg: 'bg-teal-50', text: 'text-teal-700', icon: 'text-teal-500' },
    amber:  { border: 'border-amber-200', activeBorder: 'border-amber-400', bg: 'bg-amber-50', text: 'text-amber-700', icon: 'text-amber-500' },
  };
  return styles[color];
};

// --- FAQ ITEM COMPONENT ---
const FAQItem = ({ item, index, isOpen, onClick }: { item: any, index: number, isOpen: boolean, onClick: () => void }) => {
  
  // FIX: Added "|| 'rose'" to ensure undefined is never passed to getThemeStyles
  const themeKey: ThemeColor = themeColors[index % themeColors.length] || 'rose';
  
  const theme = getThemeStyles(themeKey);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className={`
        w-full mb-4 rounded-[30px] border-2 bg-white overflow-hidden transition-all duration-300
        ${isOpen ? `${theme.activeBorder} shadow-lg` : `${theme.border} shadow-sm hover:shadow-md`}
      `}
    >
      <button 
        onClick={onClick}
        className={`w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none ${isOpen ? theme.bg : 'bg-white'}`}
      >
        <div className="flex items-center gap-4">
          <div className={`
             hidden md:flex w-10 h-10 rounded-full items-center justify-center shrink-0 
             ${isOpen ? 'bg-white' : theme.bg}
          `}>
             <item.icon className={`w-5 h-5 ${theme.icon}`} />
          </div>
          <span className={`text-lg md:text-xl font-bold ${isOpen ? theme.text : 'text-slate-700'}`}>
            {item.question}
          </span>
        </div>
        
        <div className={`
          w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300
          ${isOpen ? 'bg-white rotate-180' : `${theme.bg} rotate-0`}
        `}>
           {isOpen ? (
             <Minus className={`w-5 h-5 ${theme.icon}`} />
           ) : (
             <Plus className={`w-5 h-5 ${theme.icon}`} />
           )}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className={`p-6 pt-0 ${theme.bg}`}>
               <p className="text-slate-600 font-semibold leading-relaxed ml-0 md:ml-14 border-t border-slate-200/50 pt-4">
                 {item.answer}
               </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// --- MAIN SECTION COMPONENT ---
const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`w-full py-20 bg-white relative overflow-hidden ${bodyFont.className}`}>
      
      {/* Background Doodles */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30">
        <div className="absolute top-20 right-10 w-32 h-32 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
        <div className="absolute top-40 -left-10 w-40 h-40 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-12">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
           >
             <h2 className={`text-4xl md:text-6xl uppercase leading-tight ${titleFont.className} text-slate-800`}>
               Parent <span className="text-rose-500">FAQs</span>
             </h2>
             <p className="text-slate-500 text-lg mt-3 font-bold">
               Answers to your most common questions
             </p>
           </motion.div>
        </div>

        <div className="flex flex-col">
          {faqData.map((item, index) => (
            <FAQItem 
              key={index} 
              item={item} 
              index={index} 
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FaqSection;