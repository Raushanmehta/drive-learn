"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaMountain, FaGem, FaIdCard } from "react-icons/fa6";
import { poppins } from "@/lib/fonts";

export default function OurMisionSection() {
  const [activeTab, setActiveTab] = useState<"mission" | "vision">("mission");

  return (
    <section
      className={`relative py-8 lg:py-12 bg-gradient-to-r from-[#061536] via-[#051330] to-[#040e24] text-white overflow-hidden ${poppins.className}`}
    >
      {/* Decorative Dot Matrix on Left & Right */}
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
          {/* ========================================================= */}
          {/* LEFT 2 COLUMNS: Tab Switcher (Mission / Vision)           */}
          {/* ========================================================= */}
          <div className="lg:col-span-2 flex lg:flex-col justify-center gap-3 sm:gap-4">
            {/* Mission Tab */}
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
                OUR MISSION
              </span>

              {/* Speech bubble pointer pointing right (desktop only) */}
              {activeTab === "mission" && (
                <div className="hidden lg:block absolute right-[-8px] top-1/2 -translate-y-1/2 w-0 h-0 border-y-[8px] border-y-transparent border-l-[8px] border-l-[#e51a24]" />
              )}
            </button>

            {/* Vision Tab */}
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
                OUR VISION
              </span>

              {/* Speech bubble pointer pointing right (desktop only) */}
              {activeTab === "vision" && (
                <div className="hidden lg:block absolute right-[-8px] top-1/2 -translate-y-1/2 w-0 h-0 border-y-[8px] border-y-transparent border-l-[8px] border-l-[#e51a24]" />
              )}
            </button>
          </div>

          {/* ========================================================= */}
          {/* CENTER 5 COLUMNS: Content & Pass Rate Card                */}
          {/* ========================================================= */}
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
                      OUR MISSION
                    </span>
                  </div>

                  {/* Headline */}
                  <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-[1.18]">
                    Our Commitment <br />
                    to <span className="text-[#e51a24]">Safe Driving</span>
                  </h2>

                  {/* Description */}
                  <p className="text-gray-300 text-[14.5px] sm:text-[15.5px] leading-relaxed">
                    At <strong className="text-white font-bold">DriveLearn</strong>,
                    our mission is to provide high-quality driving education with
                    experienced instructors, modern training vehicles and a
                    learner-focused approach, ensuring every student becomes a
                    confident, skilled and responsible driver.
                  </p>

                  {/* Stat Card */}
                  <div className="bg-[#091b40]/70 backdrop-blur-sm border border-white/15 rounded-xl p-4 sm:p-5 flex items-center gap-4 sm:gap-5 shadow-lg">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#e51a24] flex items-center justify-center text-white text-3xl shrink-0 shadow-md">
                      <FaIdCard />
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                        100%
                      </div>
                      <p className="text-xs sm:text-[13px] text-gray-300 font-medium mt-0.5">
                        Driver&apos;s license exam pass rate.
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
                      OUR VISION
                    </span>
                  </div>

                  {/* Headline */}
                  <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-[1.18]">
                    Empowering Drivers <br />
                    for a <span className="text-[#e51a24]">Safer Future</span>
                  </h2>

                  {/* Description */}
                  <p className="text-gray-300 text-[14.5px] sm:text-[15.5px] leading-relaxed">
                    Our vision is to become the nation&apos;s most trusted and
                    innovative driving academy, elevating road safety awareness
                    through modern interactive learning, defensive driving
                    techniques, and personalized mentorship.
                  </p>

                  {/* Stat Card */}
                  <div className="bg-[#091b40]/70 backdrop-blur-sm border border-white/15 rounded-xl p-4 sm:p-5 flex items-center gap-4 sm:gap-5 shadow-lg">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#e51a24] flex items-center justify-center text-white text-3xl shrink-0 shadow-md">
                      <FaGem />
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                        100%
                      </div>
                      <p className="text-xs sm:text-[13px] text-gray-300 font-medium mt-0.5">
                        Commitment to road safety & student excellence.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ========================================================= */}
          {/* RIGHT 5 COLUMNS: Driver Photo with Custom Geometric Frame */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex items-center justify-center"
          >
            <div className="relative w-full max-w-[460px] aspect-square flex items-center justify-center filter drop-shadow-2xl">
              <Image
                src="/images/mission-driver-framed.png"
                alt="Confident driver with instructor giving thumbs up"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 460px"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
