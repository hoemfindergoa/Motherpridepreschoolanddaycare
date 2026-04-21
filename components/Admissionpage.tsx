"use client";

import React from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { CalendarCheck, CheckCircle, ChevronRight, FileText, Loader2, Mail, MessageSquare, Phone, School, ShieldCheck, Sparkles, User } from "lucide-react";
import { Fredoka, Nunito } from "next/font/google";

import { EmailFormschemaType } from "@/lib/schema";
import { IEmaildetail } from "@/lib/types";
import familyImage from "../public/compressed/young-mother-with-her-little-baby-boy-having-fun-autumn-park.jpg.webp";

const headingFont = Fredoka({ subsets: ["latin"], weight: ["600"] });
const bodyFont = Nunito({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

const processSteps = [
  { icon: FileText, title: "Share your enquiry", copy: "Fill in your child and parent details so our team can guide you clearly." },
  { icon: CalendarCheck, title: "Schedule a visit", copy: "Come see the campus, feel the environment, and meet our team." },
  { icon: School, title: "Interaction and fit", copy: "We understand your child&apos;s needs and help you choose the right start." },
  { icon: CheckCircle, title: "Begin the journey", copy: "Complete the formalities and step into the MothersPride family." },
];

const supportPoints = [
  "Warm, guided admissions support for parents",
  "Clear preschool and daycare program counselling",
  "Comfort-led approach for early school transition",
  "Safe, nurturing environment for little learners",
];

export default function AdmissionPage({
  onHandleSubmit,
  defaultEmail,
  isLoading,
}: {
  defaultEmail?: IEmaildetail;
  onHandleSubmit: (data: EmailFormschemaType) => void;
  isLoading: boolean;
}) {
  const form = useForm<EmailFormschemaType>({
    mode: "all",
    defaultValues: {
      email: defaultEmail?.email || "",
      name: defaultEmail?.name,
      phone: defaultEmail?.phone,
      country: defaultEmail?.country,
      city: defaultEmail?.city,
      state: defaultEmail?.state,
      message: defaultEmail?.message,
      admission_seeking: "Little Explorers - Playgroup (2 - 3 Years)",
    },
  });

  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div className={`overflow-x-hidden bg-[#fff9f5] text-slate-800 ${bodyFont.className}`}>
      <section className="px-6 pt-32 pb-16 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.98fr_1.02fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white px-4 py-2 text-sm font-bold text-[#e83d59] shadow-sm">
              <Sparkles className="h-4 w-4" />
              Admissions Open
            </div>
            <h1 className={`mt-6 text-5xl leading-[1.05] text-slate-900 sm:text-6xl lg:text-7xl ${headingFont.className}`}>
              Begin your child&apos;s journey
              <span className="block text-[#3b6ca8]">with warmth and confidence.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
              We&apos;ve designed the admissions experience to feel calm, supportive, and parent-friendly, so you can focus on finding the right caring environment for your child.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {supportPoints.map((point) => (
                <div key={point} className="flex items-center gap-3 rounded-[22px] bg-white px-4 py-4 shadow-[0_14px_40px_rgba(15,23,42,0.06)]">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fff4f6] text-[#e83d59]">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-bold text-slate-700">{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-8 top-10 h-40 w-40 rounded-full bg-rose-200/40 blur-3xl" />
            <div className="absolute -right-8 bottom-12 h-40 w-40 rounded-full bg-blue-200/40 blur-3xl" />
            <div className="relative overflow-hidden rounded-[42px] bg-white p-4 shadow-[0_30px_90px_rgba(15,23,42,0.14)]">
              <div className="relative min-h-[460px] overflow-hidden rounded-[32px]">
                <Image src={familyImage} alt="Admissions at MothersPride" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-10 left-10 right-10 rounded-[28px] bg-white/88 p-5 backdrop-blur">
                <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#3b6ca8]">MothersPride Promise</p>
                <p className={`mt-2 text-2xl leading-tight text-slate-900 ${headingFont.className}`}>
                  A loving preschool and daycare start for every little learner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-8 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="rounded-[40px] bg-white p-6 shadow-[0_26px_90px_rgba(15,23,42,0.08)] md:p-10">
            <div className="mb-8">
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#e83d59]">Enquiry Form</p>
              <h2 className={`mt-2 text-3xl text-slate-900 md:text-4xl ${headingFont.className}`}>Tell us about your child</h2>
            </div>

            <form onSubmit={form.handleSubmit(onHandleSubmit)} className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-extrabold uppercase tracking-[0.12em] text-slate-500">Parent Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    placeholder="Your name"
                    disabled={isLoading}
                    className={`w-full rounded-2xl border-2 bg-slate-50 py-3 pl-12 pr-4 text-slate-700 outline-none transition-colors ${errors.name ? "border-red-400" : "border-slate-100 focus:border-[#e83d59]"}`}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-extrabold uppercase tracking-[0.12em] text-slate-500">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />
                  <input
                    {...register("phone", { required: true })}
                    type="tel"
                    placeholder="+91"
                    disabled={isLoading}
                    className={`w-full rounded-2xl border-2 bg-slate-50 py-3 pl-12 pr-4 text-slate-700 outline-none transition-colors ${errors.phone ? "border-red-400" : "border-slate-100 focus:border-[#e83d59]"}`}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-extrabold uppercase tracking-[0.12em] text-slate-500">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />
                  <input
                    {...register("email", {
                      required: true,
                      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    })}
                    type="email"
                    placeholder="name@example.com"
                    disabled={isLoading}
                    className={`w-full rounded-2xl border-2 bg-slate-50 py-3 pl-12 pr-4 text-slate-700 outline-none transition-colors ${errors.email ? "border-red-400" : "border-slate-100 focus:border-[#e83d59]"}`}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-extrabold uppercase tracking-[0.12em] text-slate-500">Country</label>
                <input
                  {...register("country", { required: true })}
                  type="text"
                  placeholder="Country"
                  disabled={isLoading}
                  className={`w-full rounded-2xl border-2 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition-colors ${errors.country ? "border-red-400" : "border-slate-100 focus:border-[#e83d59]"}`}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-extrabold uppercase tracking-[0.12em] text-slate-500">City</label>
                <input
                  {...register("city", { required: true })}
                  type="text"
                  placeholder="City"
                  disabled={isLoading}
                  className={`w-full rounded-2xl border-2 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition-colors ${errors.city ? "border-red-400" : "border-slate-100 focus:border-[#e83d59]"}`}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-extrabold uppercase tracking-[0.12em] text-slate-500">State</label>
                <input
                  {...register("state", { required: true })}
                  type="text"
                  placeholder="State"
                  disabled={isLoading}
                  className={`w-full rounded-2xl border-2 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition-colors ${errors.state ? "border-red-400" : "border-slate-100 focus:border-[#e83d59]"}`}
                />
              </div>

              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-sm font-extrabold uppercase tracking-[0.12em] text-slate-500">Seeking Admission For</label>
                <div className="relative">
                  <select
                    {...register("admission_seeking")}
                    disabled={isLoading}
                    className="w-full appearance-none rounded-2xl border-2 border-slate-100 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition-colors focus:border-[#e83d59]"
                  >
                    <option value="Little Explorers - Playgroup (2 - 3 Years)">Little Explorers - Playgroup (2 - 3 Years)</option>
                    <option value="Curious Learners - Nursery (3 - 4 Years)">Curious Learners - Nursery (3 - 4 Years)</option>
                    <option value="Creative Thinkers - Lower Kindergarten (4 - 5 Years)">Creative Thinkers - Lower Kindergarten (4 - 5 Years)</option>
                    <option value="Future Leaders - Upper Kindergarten (5 - 6 Years)">Future Leaders - Upper Kindergarten (5 - 6 Years)</option>
                    <option value="Daycare">Daycare</option>
                  </select>
                  <ChevronRight className="pointer-events-none absolute right-4 top-3.5 h-5 w-5 rotate-90 text-slate-400" />
                </div>
              </div>

              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-sm font-extrabold uppercase tracking-[0.12em] text-slate-500">Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />
                  <textarea
                    {...register("message")}
                    rows={4}
                    placeholder="Share anything important about your child or your visit preference."
                    disabled={isLoading}
                    className="w-full resize-none rounded-2xl border-2 border-slate-100 bg-slate-50 py-3 pl-12 pr-4 text-slate-700 outline-none transition-colors focus:border-[#e83d59]"
                  />
                </div>
              </div>

              <div className="mt-2 md:col-span-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#e83d59] px-7 py-4 text-sm font-extrabold uppercase tracking-[0.14em] text-white transition-all hover:-translate-y-1 hover:bg-[#dc3451] ${isLoading ? "cursor-not-allowed opacity-70 hover:translate-y-0" : ""}`}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending Enquiry
                    </>
                  ) : (
                    <>
                      Submit Enquiry
                      <ChevronRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          <div className="space-y-6">
            <div className="rounded-[38px] bg-[#eef5ff] p-8 shadow-[0_18px_60px_rgba(15,23,42,0.05)]">
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#3b6ca8]">Admission Process</p>
              <div className="mt-6 space-y-5">
                {processSteps.map((step) => (
                  <div key={step.title} className="rounded-[26px] bg-white p-5">
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-100 text-[#3b6ca8]">
                        <step.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className={`text-2xl text-slate-900 ${headingFont.className}`}>{step.title}</p>
                        <p className="mt-1 text-sm leading-relaxed text-slate-600">{step.copy}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[38px] bg-[#fff1da] p-8 shadow-[0_18px_60px_rgba(15,23,42,0.05)]">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-100 text-amber-500">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-amber-600">Documents</p>
                  <h3 className={`text-3xl text-slate-900 ${headingFont.className}`}>Keep these ready</h3>
                </div>
              </div>
              <ul className="mt-6 grid gap-3">
                {[
                  "Birth certificate of the child",
                  "Passport-size photos of child and parents",
                  "Parent ID and address proof",
                  "Medical details if applicable",
                  "Transfer certificate if needed",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-sm font-bold text-slate-700">
                    <CheckCircle className="h-4 w-4 text-amber-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
