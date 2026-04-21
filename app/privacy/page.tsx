"use client";

import React from "react";
import { motion } from "framer-motion";
import Admissionheader from "@/components/AdmissioHeader";
import Ctasection from "@/components/HomeCta";
import { 
  ShieldAlert, 
  Ban, 
  Lock, 
  Megaphone, 
  UserCheck, 
  Settings, 
  FileSignature, 
  Copyright, 
  AlertTriangle, 
  ShieldCheck, 
  Gavel, 
  Scale, 
  Info,
  FileText
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

// --- REUSABLE WAVE COMPONENT (Exact copy from Admission Page) ---
interface WaveSeparatorProps {
  position: "top" | "bottom";
  color: string; 
}

const WaveSeparator: React.FC<WaveSeparatorProps> = ({ position, color }) => {
  const viewBoxWidth = 2000;
  const viewBoxHeight = 100;

  const getWavePath = (count: number) => {
    const waveWidth = viewBoxWidth / count;
    let pathD = "";

    if (position === "top") {
      pathD = `M0,${viewBoxHeight / 2} `;
      for (let i = 0; i < count; i++) {
        pathD += `q ${waveWidth / 4}, 25 ${waveWidth / 2}, 0 t ${waveWidth / 2}, 0 `;
      }
      pathD += `V ${viewBoxHeight} 0 H 0 Z`;
    } else {
      pathD = `M0,${viewBoxHeight / 2} `;
      for (let i = 0; i < count; i++) {
        pathD += `q ${waveWidth / 4}, -25 ${waveWidth / 2}, 0 t ${waveWidth / 2}, 0 `;
      }
      pathD += `V ${viewBoxHeight} H 0 Z`;
    }
    return pathD;
  };

  const mobilePath = getWavePath(5);
  const desktopPath = getWavePath(20);

  const WaveLayer = ({ pathD, opacityClass, duration }: { pathD: string, opacityClass: string, duration: number }) => (
    <motion.div
      className={`absolute inset-0 w-[200%] h-full ${color} ${opacityClass}`}
      animate={{ x: position === "top" ? ["0%", "-50%"] : ["-50%", "0%"] }}
      transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
    >
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`} preserveAspectRatio="none">
        <path d={pathD} fill="currentColor"></path>
      </svg>
    </motion.div>
  );

  return (
    <div className={`absolute left-0 w-full h-[60px] md:h-[100px] overflow-hidden z-20 ${position === "top" ? "top-0" : "bottom-0"}`}>
      <div className="block md:hidden w-full h-full absolute inset-0">
        <WaveLayer pathD={mobilePath} opacityClass="opacity-40" duration={20} />
        <WaveLayer pathD={mobilePath} opacityClass="opacity-100" duration={15} />
      </div>
      <div className="hidden md:block w-full h-full absolute inset-0">
        <WaveLayer pathD={desktopPath} opacityClass="opacity-40" duration={20} />
        <WaveLayer pathD={desktopPath} opacityClass="opacity-100" duration={15} />
      </div>
    </div>
  );
};

// --- POLICY DATA ---
const policies = [
  { 
    title: "Security Rules", 
    content: "We follow strict security measures to protect systems, data, and users. Any attempt to breach, misuse, or damage platform security is strictly prohibited.", 
    icon: ShieldAlert, 
    color: "bg-rose-100 text-rose-600 border-rose-200" 
  },
  { 
    title: "Prohibited User Content", 
    content: "Users must not post unlawful, offensive, misleading, harmful, or copyrighted content. Any content violating applicable laws or platform guidelines may be removed without notice.", 
    icon: Ban, 
    color: "bg-orange-100 text-orange-600 border-orange-200" 
  },
  { 
    title: "Privacy Policy", 
    content: "We respect your privacy and handle personal information responsibly. Data is collected, stored, and used only as outlined in our Privacy Policy.", 
    icon: Lock, 
    color: "bg-emerald-100 text-emerald-600 border-emerald-200" 
  },
  { 
    title: "Communications", 
    content: "By using our services, you consent to receive communications via email, phone, SMS, or other channels regarding updates, services, and important notifications.", 
    icon: Megaphone, 
    color: "bg-sky-100 text-sky-600 border-sky-200" 
  },
  { 
    title: "Your Responsibilities", 
    content: "You are responsible for maintaining accurate information, lawful usage, safeguarding account credentials, and complying with all applicable policies and regulations.", 
    icon: UserCheck, 
    color: "bg-violet-100 text-violet-600 border-violet-200" 
  },
  { 
    title: "Configurations", 
    content: "Users must ensure required technical configurations, compatible devices, and minimum system requirements to access and use our services efficiently.", 
    icon: Settings, 
    color: "bg-slate-100 text-slate-600 border-slate-200" 
  },
  { 
    title: "Registration Details", 
    content: "Users must provide accurate, complete, and updated registration information. Any false or misleading details may result in suspension or termination of access.", 
    icon: FileSignature, 
    color: "bg-indigo-100 text-indigo-600 border-indigo-200" 
  },
  { 
    title: "Intellectual Property", 
    content: "All content, trademarks, logos, and materials are owned by us or licensed partners. Unauthorized copying, distribution, or use is strictly prohibited.", 
    icon: Copyright, 
    color: "bg-yellow-100 text-yellow-600 border-yellow-200" 
  },
  { 
    title: "Limitation of Liability", 
    content: "We are not liable for indirect, incidental, or consequential damages arising from service use, interruptions, technical issues, or third-party actions.", 
    icon: AlertTriangle, 
    color: "bg-red-100 text-red-600 border-red-200" 
  },
  { 
    title: "Indemnification", 
    content: "You agree to indemnify and hold us harmless against claims, losses, damages, or expenses arising from misuse of services or policy violations.", 
    icon: ShieldCheck, 
    color: "bg-teal-100 text-teal-600 border-teal-200" 
  },
  { 
    title: "Waiver", 
    content: "Failure to enforce any provision shall not be considered a waiver of rights. All rights and remedies remain fully enforceable.", 
    icon: Gavel, 
    color: "bg-fuchsia-100 text-fuchsia-600 border-fuchsia-200" 
  },
  { 
    title: "Governing Law", 
    content: "These terms shall be governed and interpreted in accordance with the laws of India, without regard to conflict of law principles.", 
    icon: Scale, 
    color: "bg-blue-100 text-blue-600 border-blue-200" 
  },
  { 
    title: "Disclaimer", 
    content: "Services are provided on an “as is” basis without warranties. We do not guarantee uninterrupted access, accuracy, or suitability for specific purposes.", 
    icon: Info, 
    color: "bg-gray-100 text-gray-600 border-gray-200" 
  }
];

// --- MAIN COMPONENT ---
const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className={`w-full mt-8 flex flex-col ${bodyFont.className}`}>

      {/* =========================================
          SECTION: HEADER & CARDS (Violet/Sky Theme mix)
      ========================================= */}
      <section className="relative w-full bg-sky-300 pt-16 pb-24 overflow-hidden min-h-screen">
         
         {/* Top Wave (White -> Sky) */}
         <WaveSeparator position="top" color="text-white" />
        
        {/* Background Doodle Pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-20 top-20">
           <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,0 Q50,100 100,0" fill="none" stroke="#0ea5e9" strokeWidth="0.5" strokeDasharray="2,2"/>
           </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
           {/* Header Text */}
           <div className="text-center mb-8">
             <div className="flex items-center justify-center mb-4">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg animate-bounce">
                    <FileText className="w-10 h-10 text-sky-500" />
                </div>
             </div>
             <h2 className={`text-4xl md:text-5xl font-black text-sky-900 mb-2 ${titleFont.className}`}>
               Privacy & <span className="text-white drop-shadow-md">Terms</span>
             </h2>
             <p className="text-sky-800 text-lg max-w-2xl mx-auto">
               Please read our policies carefully to ensure a safe and secure experience for everyone.
             </p>
           </div>

           {/* Cards Grid */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {policies.map((item, index) => (
                 <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-[1.5rem] p-6 shadow-xl border-b-[6px] border-r-[4px] border-sky-900/10 flex flex-col gap-3 relative overflow-hidden group"
                 >
                    {/* Header of Card */}
                    <div className="flex items-center gap-4">
                       <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-sm ${item.color}`}>
                          <item.icon className="w-6 h-6" />
                       </div>
                       <h3 className="text-xl font-black text-slate-800 leading-tight">
                         {item.title}
                       </h3>
                    </div>
                    
                    {/* Content */}
                    <p className="text-slate-600 text-sm leading-relaxed font-medium">
                       {item.content}
                    </p>
                    
                    {/* Decorative Corner Circle */}
                    <div className={`absolute -bottom-4 -right-4 w-16 h-16 rounded-full opacity-10 ${item.color.split(' ')[0]}`}></div>
                 </motion.div>
              ))}
           </div>
        </div>

        {/* Bottom Wave: Transitions to White */}
        <WaveSeparator position="bottom" color="text-white" />
      </section>

      {/* CTA Section */}
      <Ctasection />

    </div>
  );
};

export default PrivacyPolicyPage;