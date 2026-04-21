"use client";

import React from "react";
import Image from "next/image";
import { MapPin, Phone, Mail, MessageCircle, Clock3, Sparkles, ArrowRight } from "lucide-react";
import { Fredoka, Nunito } from "next/font/google";

import heroImage from "../../public/compressed/close-up-portrait-happy-mother-her-little-daughter-happy-family-motherhood-concept.jpg.webp";
import supportImage from "../../public/compressed/young-mother-with-her-little-baby-boy-having-fun-autumn-park.jpg.webp";

const headingFont = Fredoka({ subsets: ["latin"], weight: ["600"] });
const bodyFont = Nunito({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

const contactItems = [
  { icon: Phone, label: "Call", value: "+91 9999996266", tone: "rose" },
  { icon: Mail, label: "Email", value: "admissions@motherspride.in", tone: "blue" },
  { icon: MapPin, label: "Visit", value: "Pitampura, Delhi", tone: "amber" },
];

export default function ContactPage() {
  return (
    <div className={`overflow-x-hidden text-slate-800 ${bodyFont.className}`}>
      <section className="px-6 pt-32 pb-12 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative overflow-hidden rounded-[42px] shadow-[0_28px_90px_rgba(15,23,42,0.12)]">
            <Image src={heroImage} alt="Happy mother and child" fill className="object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(18,24,38,0.18),rgba(232,61,89,0.12),rgba(59,108,168,0.18))]" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <div className="max-w-xl rounded-[30px] bg-white/84 p-6 backdrop-blur-xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#fff4f6] px-4 py-2 text-sm font-extrabold uppercase tracking-[0.15em] text-[#e83d59]">
                  <Sparkles className="h-4 w-4" />
                  Contact MothersPride
                </div>
                <h1 className={`mt-4 text-4xl leading-[1.02] text-slate-900 md:text-6xl ${headingFont.className}`}>
                  Let&apos;s make the first visit feel easy.
                </h1>
                <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-600 md:text-lg">
                  Quick answers, warm guidance, and a campus experience that feels just right for families.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {contactItems.map((item) => (
                <div key={item.label} className="bubble-card rounded-[30px] p-5">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                      item.tone === "rose"
                        ? "bg-rose-100 text-rose-500"
                        : item.tone === "blue"
                          ? "bg-blue-100 text-blue-500"
                          : "bg-amber-100 text-amber-500"
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                  </div>
                  <p className="mt-4 text-xs font-extrabold uppercase tracking-[0.16em] text-slate-400">{item.label}</p>
                  <p className={`mt-2 text-2xl text-slate-900 ${headingFont.className}`}>{item.value}</p>
                </div>
              ))}
            </div>

            <div className="bubble-card overflow-hidden rounded-[34px]">
              <div className="relative min-h-[210px]">
                <Image src={supportImage} alt="Support and campus visit" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-slate-950/10 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-[24px] bg-white/88 p-5 backdrop-blur">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-500">
                      <MessageCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-emerald-500">Quick Chat</p>
                      <p className="text-sm font-bold text-slate-700">WhatsApp support for visits, admissions, and daycare.</p>
                    </div>
                  </div>
                  <button
                    onClick={() => window.open("https://wa.me/919999996266", "_blank")}
                    className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-extrabold uppercase tracking-[0.12em] text-white transition-all hover:-translate-y-1 hover:bg-emerald-600"
                  >
                    Chat on WhatsApp
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.12fr_0.88fr]">
          <div className="bubble-card overflow-hidden rounded-[38px]">
            <div className="border-b border-slate-100 px-6 py-5 md:px-8">
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#3b6ca8]">Visit The Campus</p>
              <h2 className={`mt-2 text-3xl text-slate-900 md:text-4xl ${headingFont.className}`}>See the care in person</h2>
            </div>
            <div className="h-[420px]">
              <iframe
                src="https://maps.google.com/maps?width=600&height=400&hl=en&q=pitampura%20delhi&t=p&z=14&ie=UTF8&iwloc=B&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[0.08]"
              ></iframe>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="bubble-card rounded-[34px] p-6 md:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-100 text-amber-500">
                  <Clock3 className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-amber-600">Visiting Hours</p>
                  <h3 className={`text-3xl text-slate-900 ${headingFont.className}`}>Mon - Sat</h3>
                </div>
              </div>
              <p className="mt-4 text-base font-semibold text-slate-600">9:00 AM to 6:00 PM</p>
            </div>

            <div className="rounded-[34px] bg-[#3b6ca8] p-6 text-white shadow-[0_24px_70px_rgba(59,108,168,0.22)] md:p-8">
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-blue-100">We Can Help With</p>
              <div className="mt-5 grid gap-3">
                {["Programs", "Daycare", "Admissions", "Campus Visits"].map((item) => (
                  <div key={item} className="rounded-[20px] bg-white/12 px-4 py-3 text-sm font-bold">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
