"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  IoShieldCheckmark,
  IoCar,
  IoDocumentText,
  IoBookOutline,
  IoClipboardOutline,
  IoPersonOutline,
  IoCheckmarkCircle,
  IoDocumentTextOutline,
  IoShieldCheckmarkOutline,
  IoChevronForward,
} from "react-icons/io5";
import { TbSteeringWheel, TbTarget } from "react-icons/tb";
import { poppins } from "@/lib/fonts";

const topBadges = [
  {
    icon: IoShieldCheckmark,
    title: "Expert Instructors",
  },
  {
    icon: IoCar,
    title: "Real Test Routes",
  },
  {
    icon: IoDocumentText,
    title: "Mock Tests",
  },
  {
    icon: TbTarget,
    title: "Higher Success Rate",
  },
];

const prepFeatures = [
  {
    icon: IoBookOutline,
    title: "Traffic Rules & Regulations",
    description: "Learn all the essential traffic rules and signs.",
  },
  {
    icon: TbSteeringWheel,
    title: "Practical Driving Training",
    description: "Build real-world road experience.",
  },
  {
    icon: IoClipboardOutline,
    title: "Mock Driving Tests",
    description: "Practice with exam-like scenarios.",
  },
  {
    icon: IoPersonOutline,
    title: "Personalized Guidance",
    description: "Get one-on-one support from experts.",
  },
];

const whyChoosePoints = [
  "Experienced and certified driving instructors",
  "Complete training as per RTO guidelines",
  "Flexible class timings (weekdays & weekends)",
  "Real test route practice",
  "High pass rate and proven results",
  "Support until you get your license",
];

const processSteps = [
  {
    step: "01",
    icon: IoClipboardOutline,
    title: "Initial Assessment",
    description: "We check your current skills and requirements.",
  },
  {
    step: "02",
    icon: TbSteeringWheel,
    title: "Training Sessions",
    description: "Get hands-on training with expert instructors.",
  },
  {
    step: "03",
    icon: IoDocumentTextOutline,
    title: "Mock Test",
    description: "Practice with real exam  get your conditions.",
  },
  {
    step: "04",
    icon: IoShieldCheckmarkOutline,
    title: "Test & License",
    description: "Appear for the driving test and get your license.",
  },
];

export default function DriveTestSection() {
  return (
    <section
      className={`relative py-8 lg:py-12 bg-white overflow-hidden ${poppins.className}`}
    >
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 space-y-4 sm:space-y-6">
        {/* ========================================================= */}
        {/* BLOCK 1: Hero / Pass Your Driving Test with Confidence     */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-center">
          {/* Left Column: Heading & 4 Badges */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-3 sm:space-y-4"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1 h-4 bg-[#e51a24] rounded-full inline-block" />
              <span className="text-[#081839] font-bold text-xs uppercase tracking-widest">
                DRIVING TEST PREPARATION
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#081839] tracking-tight leading-[1.18]">
              Pass Your Driving Test{" "}
              <span className="text-[#e51a24]">with Confidence</span>
            </h2>

            {/* Description */}
            <p className="text-[#556987] text-[14px] sm:text-[15px] leading-relaxed max-w-xl">
              Get expert guidance, practical training and mock tests to help you
              prepare for your driving test and get your license with ease.
            </p>

            {/* 4 Feature Badges in a Row with Vertical Division Lines */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-4 sm:gap-y-0 pt-2 border-t border-gray-100 sm:border-t-0">
              {topBadges.map((badge, idx) => {
                const Icon = badge.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="relative flex flex-col items-center text-center group px-2 sm:px-3"
                  >
                    {/* Vertical Division Line (Desktop: between all items) */}
                    {idx !== 0 && (
                      <div className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-gray-200" />
                    )}

                    {/* Vertical Division Line (Mobile: between column 1 and 2) */}
                    {idx % 2 === 1 && (
                      <div className="sm:hidden absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-gray-200" />
                    )}

                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#e51a24] flex items-center justify-center text-white text-xl sm:text-3xl shadow-md group-hover:scale-105 transition-transform">
                      <Icon />
                    </div>
                    <span className="text-xs sm:text-[13px] font-bold text-[#081839] mt-2.5 leading-snug">
                      {badge.title}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Thumbs Up Girl Photo with Red Corner Accents */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50 aspect-[700/540] max-w-[500px] mx-auto">
              {/* Top-Left Red Corner Accent */}
              <div className="absolute top-0 left-0 w-0 h-0 border-t-[36px] border-t-[#e51a24] border-r-[36px] border-r-transparent z-10" />

              {/* Bottom-Right Red Corner Accent */}
              <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[36px] border-b-[#e51a24] border-l-[36px] border-l-transparent z-10" />

              <Image
                src="/images/drivetest-confidences.jpg"
                alt="Student driver passing driving test with confidence"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 500px"
              />
            </div>
          </motion.div>
        </div>

        {/* ========================================================= */}
        {/* BLOCK 2: About Driving Test Preparation                    */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-center">
          {/* Left Column: Heading, Text & 4-Item Feature Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-3 sm:space-y-4"
          >
            {/* Eyebrow & Title */}
            <div className="space-y-2 sm:space-y-2">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1 h-8 bg-[#e51a24] rounded-full inline-block" />
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#081839] tracking-tight">
                  About Driving Test Preparation
                </h3>
              </div>
              <p className="text-[#556987] text-[14px] sm:text-[15px] leading-relaxed pt-1">
                Our driving test preparation program is designed to give you the
                skills, confidence and knowledge needed to pass your driving
                test. We focus on real exam conditions, traffic rules and
                practical driving experience so you can get your license without
                any stress.
              </p>
            </div>

            {/* 4 Feature Cards Row in Box Container */}
            <div className="bg-[#f9fafc] rounded-xl p-4 sm:p-5 border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.04)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3">
              {prepFeatures.map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={idx}
                    className={`flex flex-col items-start p-3 rounded-xl transition-all ${idx !== 0 ? "sm:border-l sm:border-gray-200/60 sm:pl-4" : ""
                      }`}
                  >
                    <div className="text-[#e51a24] text-3xl mb-2">
                      <Icon />
                    </div>
                    <h4 className="text-[13px] sm:text-[13.5px] font-bold text-[#081839] leading-snug">
                      {feat.title}
                    </h4>
                    <p className="text-[11.5px] sm:text-[12px] text-[#556987] mt-1 leading-normal">
                      {feat.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Cones Track Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-100 aspect-[16/10] max-w-[460px] mx-auto bg-gray-50">
              <Image
                src="/images/drivetest-cone.jpg"
                alt="Practical driving test preparation with cones obstacle track"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 460px"
              />
            </div>
          </motion.div>
        </div>

        {/* ========================================================= */}
        {/* BLOCK 3: Why Choose Our Test Preparation?                  */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-center">
          {/* Left Column: Student & Instructor Photo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 order-2 lg:order-1"
          >
            <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-100 aspect-[16/9] w-full bg-gray-50">
              <Image
                src="/images/drivetest-instructors.jpg"
                alt="Instructor guiding learner driver with checklist"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 600px"
              />
            </div>
          </motion.div>

          {/* Right Column: Heading & 6 Checklist Points */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-3 sm:space-y-4 order-1 lg:order-2"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1 h-8 bg-[#e51a24] rounded-full inline-block" />
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#081839] tracking-tight">
                Why Choose Our Test Preparation?
              </h3>
            </div>

            <ul className="space-y-2.5 sm:space-y-3">
              {whyChoosePoints.map((point, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="flex items-center gap-2.5 sm:gap-3 text-[#081839] font-medium text-[13.5px] sm:text-[14.5px]"
                >
                  <IoCheckmarkCircle className="text-[#e51a24] text-2xl shrink-0" />
                  <span>{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* ========================================================= */}
        {/* BLOCK 4: Our Training Process (4 Step Cards Flow)          */}
        {/* ========================================================= */}
        <div className="space-y-4 sm:space-y-6">
          {/* Header */}
          <div className="space-y-2 sm:space-y-2">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1 h-8 bg-[#e51a24] rounded-full inline-block" />
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#081839] tracking-tight">
                Our Training Process
              </h3>
            </div>
            <p className="text-[#556987] text-[14px] sm:text-[15px]">
              A simple and effective process to help you prepare and pass your
              driving test.
            </p>
          </div>

          {/* 4 Process Step Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4 relative">
            {processSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="relative flex items-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.12 }}
                    className="w-full bg-[#f9fafc] hover:bg-white rounded-xl p-4 sm:p-5 border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300 flex flex-col min-h-[140px] justify-between group"
                  >
                    {/* Top Row: Number Badge & Icon */}
                    <div className="flex items-center justify-between mb-2 sm:mb-4">
                      <div className="w-10 h-10 rounded-full bg-[#e51a24] text-white flex items-center justify-center font-bold text-sm shadow-sm">
                        {step.step}
                      </div>
                      <div className="text-3xl sm:text-[32px] text-[#081839] group-hover:text-[#e51a24] transition-colors">
                        <Icon />
                      </div>
                    </div>

                    {/* Step Title & Description */}
                    <div>
                      <h4 className="text-[14.5px] sm:text-[15.5px] font-bold text-[#081839] mb-1 leading-snug">
                        {step.title}
                      </h4>
                      <p className="text-[12.5px] sm:text-[13px] text-[#556987] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>

                  {/* Flow Arrow (Desktop only, between steps) */}
                  {idx < processSteps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-3.5 z-10 w-7 h-7 rounded-full bg-white border border-gray-200 items-center justify-center text-gray-400 text-sm shadow-sm pointer-events-none">
                      <IoChevronForward />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
