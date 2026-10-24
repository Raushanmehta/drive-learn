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
import type { IconType } from "react-icons";
import { poppins } from "@/lib/fonts";
import { siteMap, type DriveLearnDriveTestData, type SectionProps } from "@/data";

const iconMap: Record<string, IconType> = {
  IoShieldCheckmark,
  IoCar,
  IoDocumentText,
  TbTarget,
  IoBookOutline,
  TbSteeringWheel,
  IoClipboardOutline,
  IoPersonOutline,
  IoCheckmarkCircle,
  IoDocumentTextOutline,
  IoShieldCheckmarkOutline,
};

export default function DriveTestSection({
  data: propData,
  className = "",
}: SectionProps<DriveLearnDriveTestData> = {}) {
  const data = propData || siteMap.driveTest;
  const { hero, about, whyChoose, process } = data;

  return (
    <section
      className={`relative py-8 lg:py-12 bg-white overflow-hidden ${poppins.className} ${className}`}
    >
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 space-y-4 sm:space-y-6">
        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-center">
          {/* Headline */}
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
                {hero.eyebrow}
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#081839] tracking-tight leading-[1.18]">
              {hero.title.part1}{" "}
              <span className="text-[#e51a24]">{hero.title.part2}</span>
            </h2>

            {/* Description */}
            <p className="text-[#556987] text-[14px] sm:text-[15px] leading-relaxed max-w-xl">
              {hero.description}
            </p>

            {/* Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-4 sm:gap-y-0 pt-2 border-t border-gray-100 sm:border-t-0">
              {hero.badges.map((badge, idx) => {
                const Icon = iconMap[badge.icon] || IoShieldCheckmark;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="relative flex flex-col items-center text-center group px-2 sm:px-3"
                  >
                    {idx !== 0 && (
                      <div className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-16 sm:h-20 bg-gray-200" />
                    )}

                    {idx % 2 === 1 && (
                      <div className="sm:hidden absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-16 bg-gray-200" />
                    )}

                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#e51a24] flex items-center justify-center text-white text-3xl sm:text-5xl shadow-md group-hover:scale-105 transition-transform">
                      <Icon />
                    </div>
                    <span className="text-sm sm:text-base font-bold text-[#081839] mt-3 leading-snug">
                      {badge.title}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50 aspect-[700/540] max-w-[500px] mx-auto">
              {/* Frame */}
              <div className="absolute top-0 left-0 w-0 h-0 border-t-[36px] border-t-[#e51a24] border-r-[36px] border-r-transparent z-10" />

              {/* Frame */}
              <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[36px] border-b-[#e51a24] border-l-[36px] border-l-transparent z-10" />

              <Image
                src={hero.image}
                alt={hero.imageAlt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 500px"
              />
            </div>
          </motion.div>
        </div>

        {/* Block: About */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-center">
          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-3 sm:space-y-4"
          >
            {/* Eyebrow */}
            <div className="space-y-2 sm:space-y-2">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1 h-8 bg-[#e51a24] rounded-full inline-block" />
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#081839] tracking-tight">
                  {about.title}
                </h3>
              </div>
              <p className="text-[#556987] text-[14px] sm:text-[15px] leading-relaxed pt-1">
                {about.description}
              </p>
            </div>

            {/* Features */}
            <div className="bg-[#f9fafc] rounded-xl p-4 sm:p-5 border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.04)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3">
              {about.features.map((feat, idx) => {
                const Icon = iconMap[feat.icon] || IoBookOutline;
                return (
                  <div
                    key={idx}
                    className={`flex flex-col items-start p-3 rounded-xl transition-all ${idx !== 0 ? "sm:border-l sm:border-gray-200/60 sm:pl-4" : ""
                      }`}
                  >
                    <div className="text-[#e51a24] text-4xl sm:text-5xl mb-3">
                      <Icon />
                    </div>
                    <h4 className="text-[13px] sm:text-[16.5px] font-bold text-[#081839] leading-snug">
                      {feat.title}
                    </h4>
                    <p className="text-[11.5px] sm:text-[13px] text-[#556987] mt-1 leading-normal">
                      {feat.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-100 aspect-[16/10] max-w-[460px] mx-auto bg-gray-50">
              <Image
                src={about.image}
                alt={about.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 460px"
              />
            </div>
          </motion.div>
        </div>

        {/* Block: Why Choose */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 order-2 lg:order-1"
          >
            <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-100 aspect-[16/9] w-full bg-gray-50">
              <Image
                src={whyChoose.image}
                alt={whyChoose.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 600px"
              />
            </div>
          </motion.div>

          {/* Headline */}
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
                {whyChoose.title}
              </h3>
            </div>

            <ul className="space-y-2.5 sm:space-y-3">
              {whyChoose.points.map((point, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="flex items-center gap-2.5 sm:gap-3 text-[#081839] font-medium text-[13.5px] sm:text-[14.5px]"
                >
                  <IoCheckmarkCircle className="text-[#e51a24] text-2xl sm:text-3xl shrink-0" />
                  <span>{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Process */}
        <div className="space-y-4 sm:space-y-6">
          {/* Header */}
          <div className="space-y-2 sm:space-y-2">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1 h-8 bg-[#e51a24] rounded-full inline-block" />
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#081839] tracking-tight">
                {process.title}
              </h3>
            </div>
            <p className="text-[#556987] text-[14px] sm:text-[15px]">
              {process.description}
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4 relative">
            {process.steps.map((step, idx) => {
              const Icon = iconMap[step.icon] || IoClipboardOutline;
              return (
                <div key={idx} className="relative flex items-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.12 }}
                    className="w-full bg-[#f9fafc] hover:bg-white rounded-xl p-4 sm:p-5 border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300 flex flex-col min-h-[140px] justify-between group"
                  >
                    {/* Badge */}
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <div className="w-12 h-12 rounded-full bg-[#e51a24] text-white flex items-center justify-center font-bold text-base shadow-sm">
                        {step.step}
                      </div>
                      <div className="text-4xl sm:text-5xl text-[#081839] group-hover:text-[#e51a24] transition-colors">
                        <Icon />
                      </div>
                    </div>

                    {/* Headline */}
                    <div>
                      <h4 className="text-[14.5px] sm:text-[15.5px] font-bold text-[#081839] mb-1 leading-snug">
                        {step.title}
                      </h4>
                      <p className="text-[12.5px] sm:text-[13px] text-[#556987] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>

                  {idx < process.steps.length - 1 && (
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
