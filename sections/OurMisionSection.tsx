"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaMountain, FaGem, FaIdCard } from "react-icons/fa6";
import { poppins } from "@/lib/fonts";
import {
  siteMap,
  type DriveLearnOurMissionData,
  type SectionProps,
} from "@/data";

export default function OurMisionSection({
  data: propData,
  className = "",
}: SectionProps<DriveLearnOurMissionData> = {}) {
  const [activeTab, setActiveTab] = useState<"mission" | "vision">("mission");
  const data = propData || siteMap.ourMission;

  return (
    <section
      className={`relative py-8 lg:py-12 bg-gradient-to-r from-[#061536] via-[#051330] to-[#040e24] text-white overflow-hidden ${poppins.className} ${className}`}
    >
      {/* Dots */}
      <div
        className="absolute bottom-6 left-6 opacity-25 pointer-events-none select-none hidden lg:block"
        aria-hidden="true"
      >
        <div className="grid grid-cols-6 gap-2">
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-400" />
          ))}
        </div>
      </div>
      <div
        className="absolute top-1/2 -translate-y-1/2 right-4 opacity-25 pointer-events-none select-none hidden lg:block"
        aria-hidden="true"
      >
        <div className="grid grid-cols-6 gap-2">
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-400" />
          ))}
        </div>
      </div>

      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-4 lg:gap-6 items-center">
          {/* Mission */}
          <div className="lg:col-span-2 flex lg:flex-col justify-center gap-3 sm:gap-4">
            {/* Mission */}
            <button
              type="button"
              onClick={() => setActiveTab("mission")}
              className={`relative flex-1 lg:flex-none flex flex-col items-center justify-center p-4 sm:p-5 rounded-xl transition-all duration-300 cursor-pointer text-center ${
                activeTab === "mission"
                  ? "bg-[#e51a24] text-white shadow-xl shadow-red-900/30 ring-2 ring-red-400/20"
                  : "bg-[#091b40]/60 hover:bg-[#091b40] text-gray-300 border border-white/10"
              }`}
            >
              <div className="w-12 h-12 flex items-center justify-center text-3xl mb-2.5">
                <FaMountain />
              </div>
              <span className="text-[12px] sm:text-[13px] font-extrabold uppercase tracking-wider">
                {data.mission.eyebrow}
              </span>

              {/* Speech */}
              {activeTab === "mission" && (
                <div className="hidden lg:block absolute right-[-8px] top-1/2 -translate-y-1/2 w-0 h-0 border-y-[8px] border-y-transparent border-l-[8px] border-l-[#e51a24]" />
              )}
            </button>

            {/* Vision */}
            <button
              type="button"
              onClick={() => setActiveTab("vision")}
              className={`relative flex-1 lg:flex-none flex flex-col items-center justify-center p-4 sm:p-5 rounded-xl transition-all duration-300 cursor-pointer text-center ${
                activeTab === "vision"
                  ? "bg-[#e51a24] text-white shadow-xl shadow-red-900/30 ring-2 ring-red-400/20"
                  : "bg-[#091b40]/60 hover:bg-[#091b40] text-gray-300 border border-white/10"
              }`}
            >
              <div className="w-12 h-12 flex items-center justify-center text-3xl mb-2.5">
                <FaGem />
              </div>
              <span className="text-[12px] sm:text-[13px] font-extrabold uppercase tracking-wider">
                {data.vision.eyebrow}
              </span>

              {/* Speech */}
              {activeTab === "vision" && (
                <div className="hidden lg:block absolute right-[-8px] top-1/2 -translate-y-1/2 w-0 h-0 border-y-[8px] border-y-transparent border-l-[8px] border-l-[#e51a24]" />
              )}
            </button>
          </div>

          {/* Image */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-7">
            <AnimatePresence mode="wait">
              {activeTab === "mission" ? (
                <motion.div
                  key="mission-content"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-4 sm:space-y-5"
                >
                  {/* Eyebrow */}
                  <div className="flex items-center gap-2">
                    <span className="w-1 h-4 bg-[#e51a24] rounded-full inline-block" />
                    <span className="text-[#e51a24] font-bold text-xs uppercase tracking-widest">
                      {data.mission.eyebrow}
                    </span>
                  </div>

                  {/* Headline */}
                  <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-[1.18]">
                    {data.mission.title.part1} <br />
                    <span className="text-[#e51a24]">{data.mission.title.part2}</span>
                  </h2>

                  {/* Description */}
                  <p className="text-gray-300 text-[14.5px] sm:text-[15.5px] leading-relaxed">
                    {data.mission.description}
                  </p>

                  {/* Stats */}
                  <div className="bg-[#091b40]/70 backdrop-blur-sm border border-white/15 rounded-xl p-4 sm:p-5 flex items-center gap-4 sm:gap-5 shadow-lg">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#e51a24] flex items-center justify-center text-white text-3xl shrink-0 shadow-md">
                      <FaIdCard />
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                        {data.mission.statCard.percentage}
                      </div>
                      <p className="text-xs sm:text-[13px] text-gray-300 font-medium mt-0.5">
                        {data.mission.statCard.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="vision-content"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-4 sm:space-y-5"
                >
                  {/* Eyebrow */}
                  <div className="flex items-center gap-2">
                    <span className="w-1 h-4 bg-[#e51a24] rounded-full inline-block" />
                    <span className="text-[#e51a24] font-bold text-xs uppercase tracking-widest">
                      {data.vision.eyebrow}
                    </span>
                  </div>

                  {/* Headline */}
                  <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-[1.18]">
                    {data.vision.title.part1} <br />
                    <span className="text-[#e51a24]">{data.vision.title.part2}</span>
                  </h2>

                  {/* Description */}
                  <p className="text-gray-300 text-[14.5px] sm:text-[15.5px] leading-relaxed">
                    {data.vision.description}
                  </p>

                  {/* Stats */}
                  <div className="bg-[#091b40]/70 backdrop-blur-sm border border-white/15 rounded-xl p-4 sm:p-5 flex items-center gap-4 sm:gap-5 shadow-lg">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#e51a24] flex items-center justify-center text-white text-3xl shrink-0 shadow-md">
                      <FaGem />
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                        {data.vision.statCard.percentage}
                      </div>
                      <p className="text-xs sm:text-[13px] text-gray-300 font-medium mt-0.5">
                        {data.vision.statCard.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 flex items-center justify-center py-6 sm:py-8 lg:py-4"
          >
            {/* Frame */}
            <div className="relative w-full max-w-[390px] sm:max-w-[420px] lg:max-w-[450px] aspect-square mx-auto">
              {/* Frame */}
              <motion.div
                initial={{ opacity: 0, x: -10, y: -10 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 lg:-top-7 lg:-left-7 w-[90%] h-[90%] rounded-xl border-[2.5px] sm:border-[3px] border-[#e51a24] pointer-events-none z-0"
                aria-hidden="true"
              />

              {/* Frame */}
              <motion.div
                initial={{ opacity: 0, x: 10, y: 10 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 lg:-bottom-7 lg:-right-7 w-[90%] h-[90%] rounded-xl border-[2.5px] sm:border-[3px] border-[#1d4f8d] pointer-events-none z-0"
                aria-hidden="true"
              />

              {/* Image */}
              <div
                className="absolute -bottom-5 -right-5 sm:-bottom-7 sm:-right-7 w-28 h-28 sm:w-36 sm:h-36 rounded-br-xl rounded-tl-xl bg-gradient-to-br from-[#0a2350]/80 to-[#061536] border border-blue-400/30 pointer-events-none z-0 shadow-lg"
                aria-hidden="true"
              />

              {/* Dots */}
              <div
                className="absolute -right-3 sm:-right-5 lg:-right-6 top-1/4 -translate-y-4 grid grid-cols-3 gap-1.5 sm:gap-2 pointer-events-none z-0 select-none opacity-40"
                aria-hidden="true"
              >
                {Array.from({ length: 24 }).map((_, i) => (
                  <span
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-blue-300"
                  />
                ))}
              </div>

              {/* Frame */}
              <div
                className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 w-16 h-16 rounded-bl-xl border-b-2 border-l-2 border-blue-500/35 pointer-events-none z-0"
                aria-hidden="true"
              />

              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 w-full h-full rounded-xl overflow-hidden border-[2.5px] sm:border-[3px] border-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.6)] bg-[#07183d]"
              >
                <Image
                  src={data.driverImage || "/images/driver-mission-clean.jpg"}
                  alt="Confident driver with instructor giving thumbs up"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 460px"
                />

                {/* Frame */}
                <div
                  className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/20 pointer-events-none"
                  aria-hidden="true"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
