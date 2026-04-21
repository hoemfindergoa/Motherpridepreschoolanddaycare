"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Award, Briefcase, Building2, CheckCircle, Globe, Loader2, Megaphone, TrendingUp } from "lucide-react";
import { Fredoka, Nunito } from "next/font/google";

import { FranchiseFormSchemaType } from "@/lib/schema";
import { IFranchiseDetail } from "@/lib/types";
import franchiseHero from "../public/compressed/woman-yellow-dress-with-bunch-children-background.jpg.webp";
import franchiseSupport from "../public/compressed/happy-family-home-mother-lifting-air-little-toddler-child-daughter-mom-baby-girl-playing-h.jpg.webp";

const headingFont = Fredoka({ subsets: ["latin"], weight: ["600"] });
const bodyFont = Nunito({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

const highlights = [
  { icon: TrendingUp, title: "High ROI", tone: "rose" },
  { icon: Megaphone, title: "Marketing Support", tone: "blue" },
  { icon: Award, title: "Strong Brand", tone: "amber" },
  { icon: Globe, title: "Expansion Ready", tone: "emerald" },
];

export default function FranchisePage({
  onHandleSubmit,
  defaultFranchise,
  isLoading,
}: {
  defaultFranchise?: IFranchiseDetail;
  onHandleSubmit: (data: FranchiseFormSchemaType) => void;
  isLoading: boolean;
}) {
  const form = useForm<FranchiseFormSchemaType>({
    mode: "all",
    defaultValues: {
      name: defaultFranchise?.name || "",
      email: defaultFranchise?.email || "",
      phone: defaultFranchise?.phone || "",
      city: defaultFranchise?.city || "",
      budget: defaultFranchise?.budget || "Playway (5 to 6 lakh)",
      property: defaultFranchise?.property || "Yes, I own commercial property",
    },
  });

  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div className={`overflow-x-hidden text-slate-800 ${bodyFont.className}`}>
      <section className="px-6 pt-32 pb-12 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="relative overflow-hidden rounded-[42px] shadow-[0_28px_90px_rgba(15,23,42,0.12)]">
            <Image src={franchiseHero} alt="Franchise opportunity" fill className="object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(6,95,70,0.20),rgba(15,23,42,0.15),rgba(59,108,168,0.12))]" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <div className="max-w-xl rounded-[30px] bg-white/86 p-6 backdrop-blur-xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-extrabold uppercase tracking-[0.15em] text-emerald-600">
                  <Briefcase className="h-4 w-4" />
                  Franchise With MothersPride
                </div>
                <h1 className={`mt-4 text-4xl leading-[1.03] text-slate-900 md:text-6xl ${headingFont.className}`}>
                  Build a preschool brand with heart and scale.
                </h1>
                <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-600 md:text-lg">
                  A cleaner, more premium franchise journey with strong support, clear positioning, and growth-minded execution.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item.title} className="bubble-card rounded-[30px] p-5">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                      item.tone === "rose"
                        ? "bg-rose-100 text-rose-500"
                        : item.tone === "blue"
                          ? "bg-blue-100 text-blue-500"
                          : item.tone === "amber"
                            ? "bg-amber-100 text-amber-500"
                            : "bg-emerald-100 text-emerald-500"
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className={`mt-4 text-2xl text-slate-900 ${headingFont.className}`}>{item.title}</h3>
                </div>
              ))}
            </div>

            <div className="bubble-card overflow-hidden rounded-[34px]">
              <div className="relative min-h-[220px]">
                <Image src={franchiseSupport} alt="Franchise support" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-slate-950/10 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-[24px] bg-white/88 p-5 backdrop-blur">
                  <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#3b6ca8]">Support System</p>
                  <p className="mt-2 text-sm font-bold leading-relaxed text-slate-700">
                    Setup, branding, curriculum, and launch support designed to reduce friction and build momentum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-6">
            <div className="bubble-card rounded-[34px] p-6 md:p-8">
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-emerald-600">Why It Works</p>
              <div className="mt-5 grid gap-3">
                {["Zero royalty model", "Operational support", "Training and branding", "Growth-ready structure"].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-[22px] bg-white/70 px-4 py-3 text-sm font-bold text-slate-700">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[34px] bg-[#3b6ca8] p-6 text-white shadow-[0_24px_70px_rgba(59,108,168,0.22)] md:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/14 text-white">
                  <Building2 className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-blue-100">Best Fit</p>
                  <h3 className={`text-3xl text-white ${headingFont.className}`}>Growth-minded operators</h3>
                </div>
              </div>
              <p className="mt-4 text-sm font-semibold leading-relaxed text-white/90">
                Ideal for partners looking for a premium preschool identity, support-led launch process, and long-term scale.
              </p>
            </div>
          </div>

          <div className="bubble-card rounded-[38px] p-6 md:p-8 lg:p-10">
            <div className="mb-8">
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#e83d59]">Franchise Enquiry</p>
              <h2 className={`mt-2 text-3xl text-slate-900 md:text-4xl ${headingFont.className}`}>Request the brochure</h2>
            </div>

            <form onSubmit={form.handleSubmit(onHandleSubmit)} className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-extrabold uppercase tracking-[0.12em] text-slate-500">Full Name</label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="Your name"
                  disabled={isLoading}
                  className={`w-full rounded-2xl border-2 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition-colors ${errors.name ? "border-red-400" : "border-slate-100 focus:border-emerald-400"}`}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-extrabold uppercase tracking-[0.12em] text-slate-500">Phone</label>
                <input
                  {...register("phone", { required: true })}
                  type="tel"
                  placeholder="Your number"
                  disabled={isLoading}
                  className={`w-full rounded-2xl border-2 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition-colors ${errors.phone ? "border-red-400" : "border-slate-100 focus:border-emerald-400"}`}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-extrabold uppercase tracking-[0.12em] text-slate-500">Email</label>
                <input
                  {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                  type="email"
                  placeholder="email@example.com"
                  disabled={isLoading}
                  className={`w-full rounded-2xl border-2 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition-colors ${errors.email ? "border-red-400" : "border-slate-100 focus:border-emerald-400"}`}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-extrabold uppercase tracking-[0.12em] text-slate-500">City / Location</label>
                <input
                  {...register("city", { required: true })}
                  type="text"
                  placeholder="Preferred city"
                  disabled={isLoading}
                  className={`w-full rounded-2xl border-2 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition-colors ${errors.city ? "border-red-400" : "border-slate-100 focus:border-emerald-400"}`}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-extrabold uppercase tracking-[0.12em] text-slate-500">Investment Budget</label>
                <select
                  {...register("budget")}
                  disabled={isLoading}
                  className="w-full rounded-2xl border-2 border-slate-100 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition-colors focus:border-emerald-400"
                >
                  <option value="Playway (5 to 6 lakh)">Playway (5 to 6 lakh)</option>
                  <option value="Montessori (6-7 lakh)">Montessori (6-7 lakh)</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-extrabold uppercase tracking-[0.12em] text-slate-500">Property</label>
                <select
                  {...register("property")}
                  disabled={isLoading}
                  className="w-full rounded-2xl border-2 border-slate-100 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition-colors focus:border-emerald-400"
                >
                  <option value="Yes, I own commercial property">Yes, I own commercial property</option>
                  <option value="No, I will rent/lease">No, I will rent/lease</option>
                </select>
              </div>

              <div className="mt-2 md:col-span-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-7 py-4 text-sm font-extrabold uppercase tracking-[0.14em] text-white transition-all hover:-translate-y-1 hover:bg-emerald-600 ${isLoading ? "cursor-not-allowed opacity-70 hover:translate-y-0" : ""}`}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Processing
                    </>
                  ) : (
                    <>
                      Request Franchise Brochure
                      <CheckCircle className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
