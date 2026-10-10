"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  IoCar,
  IoPeople,
  IoShieldCheckmark,
  IoCalendar,
} from "react-icons/io5";
import { FaAward, FaHandHoldingDollar } from "react-icons/fa6";
import FeatureCard, { type FeatureCardProps } from "@/components/cards/FeatureCard";
import { poppins } from "@/lib/fonts";

const leftFeatures: FeatureCardProps[] = [
  {
    number: "01",
    title: "Licensed",
    description:
      "We are a fully licensed driving school, ensuring safe, legal and standardized training.",
    icon: FaAward,
    iconBg: "red",
    borderSide: "left",
    borderColor: "red",
    align: "left",
  },
  {
    number: "02",
    title: "Experienced Instructors",
    description:
      "Learn from professional certified instructors who make driving easy, safe and confident.",
    icon: IoPeople,
    iconBg: "navy",
    borderSide: "left",
    borderColor: "navy",
    align: "left",
  },
  {
    number: "03",
    title: "Modern Training Vehicles",
    description:
      "Practice with well-maintained latest model training cars for a better learning experience.",
    icon: IoCar,
    iconBg: "red",
    borderSide: "left",
    borderColor: "red",
    align: "left",
  },
];

const rightFeatures: FeatureCardProps[] = [
  {
    number: "04",
    title: "Safe & Practical Training",
    description:
      "We focus on real-road practical training with defensive skills and safety as top priority.",
    icon: IoShieldCheckmark,
    iconBg: "navy",
    borderSide: "right",
    borderColor: "navy",
    align: "right",
  },
  {
    number: "05",
    title: "Flexible Scheduling",
    description:
      "Choose class timings that work best for your routine, including weekday and weekend options.",
    icon: IoCalendar,
    iconBg: "red",
    borderSide: "right",
    borderColor: "red",
    align: "right",
  },
  {
    number: "06",
    title: "Affordable Rates",
    description:
      "Get high-quality certified driving education with transparent pricing and no hidden costs.",
    icon: FaHandHoldingDollar,
    iconBg: "navy",
    borderSide: "right",
    borderColor: "navy",
    align: "right",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className={`relative py-8 lg:py-12 bg-white overflow-hidden ${poppins.className}`}>
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-2 sm:mb-3 space-y-1.5 sm:space-y-2">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-3.5"
          >
            <span className="w-10 sm:w-14 h-[2px] bg-[#e51a24] rounded-full" />
            <span className="flex items-center gap-2 text-[#081839] font-medium text-[14px] sm:text-[15px] tracking-wide">
              <IoCar className="text-[#e51a24] text-lg sm:text-4xl shrink-0" />
              <span>Why Choose Us</span>
            </span>
            <span className="w-10 sm:w-14 h-[2px] bg-[#e51a24] rounded-full" />
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-tight leading-tight"
          >
            <span className="text-[#081839]">Your Trusted Partner </span>
            <span className="text-[#e51a24]">For Safe Driving</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="text-[#556987] text-[15px] sm:text-[16px] leading-relaxed"
          >
            We are committed to providing high-quality driving education with
            professional instructors, modern vehicles and a student-focused
            approach.
          </motion.p>
        </div>

        {/* 3-Column Visual Layout (Left Features, Steering Wheel Center, Right Features) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-4 lg:gap-4 items-start">
          {/* Left Column (Features 01, 02, 03) */}
          <div className="lg:col-span-4 space-y-2 sm:space-y-3 order-2 lg:order-1">
            {leftFeatures.map((feat) => (
              <FeatureCard key={feat.number} {...feat} />
            ))}
          </div>

          {/* Center Column: Steering Wheel with Red Circular Backdrop & Road */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center relative py-2 lg:py-0 order-1 lg:order-2">
            <div className="relative w-[330px] sm:w-[390px] lg:w-[420px] aspect-square flex items-center justify-center translate-y-6 sm:translate-y-7 lg:translate-y-8">
              {/* Outer Dashed Orbit Ring */}
              <div
                className="absolute inset-2 sm:inset-3 rounded-full border-2 border-dashed border-[#e51a24]/40 animate-[spin_60s_linear_infinite] pointer-events-none"
                aria-hidden="true"
              />

              {/* Central Steering Wheel with Red Circle and Road Graphic */}
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative w-full h-full z-10 drop-shadow-2xl scale-105 sm:scale-110"
              >
                <Image
                  src="/images/car-stering-2.png"
                  alt="Modern car steering wheel"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </div>
          </div>

          {/* Right Column (Features 04, 05, 06) */}
          <div className="lg:col-span-4 space-y-2 sm:space-y-3 order-3">
            {rightFeatures.map((feat) => (
              <FeatureCard key={feat.number} {...feat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}