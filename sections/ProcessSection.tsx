"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  IoCar,
  IoCheckmarkCircle,
  IoPlay,
  IoCall,
  IoHeadsetOutline,
} from "react-icons/io5";
import { poppins } from "@/lib/fonts";
import { siteMap, type DriveLearnProcessData, type SectionProps } from "@/data";

export default function ProcessSection({
  data: propData,
  className = "",
}: SectionProps<DriveLearnProcessData> = {}) {
  const data = propData || siteMap.process;

  return (
    <section
      className={`relative py-8 lg:py-12 bg-white overflow-hidden ${poppins.className} ${className}`}
    >
      {/* Dots */}
      <div
        className="absolute top-1/2 -translate-y-1/2 left-4 opacity-35 pointer-events-none select-none hidden lg:block"
        aria-hidden="true"
      >
        <div className="grid grid-cols-6 gap-2">
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-gray-300" />
          ))}
        </div>
      </div>

      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-4 lg:gap-6 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-6 flex items-center justify-center relative py-6 sm:py-8 px-4"
          >
            {/* Frame */}
            <div className="relative w-full max-w-[460px] sm:max-w-[480px]">
              {/* Dots */}
              <div
                className="absolute -left-7 sm:-left-9 top-1/2 -translate-y-1/2 flex flex-col gap-14 pointer-events-none select-none z-0"
                aria-hidden="true"
              >
                {/* Dots */}
                <div className="grid grid-cols-4 gap-2">
                  {Array.from({ length: 28 }).map((_, i) => (
                    <div
                      key={`dot-mid-${i}`}
                      className="w-1.5 h-1.5 rounded-full bg-gray-300"
                    />
                  ))}
                </div>
                {/* Dots */}
                <div className="grid grid-cols-4 gap-2">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div
                      key={`dot-bot-${i}`}
                      className="w-1.5 h-1.5 rounded-full bg-gray-300"
                    />
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div
                className="absolute -top-7 -left-7 sm:-top-9 sm:-left-9 w-[92%] h-[92%] rounded-xl border-[2.5px] border-[#e51a24] bg-transparent pointer-events-none z-0"
                aria-hidden="true"
              />

              {/* Nav */}
              <div
                className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-[94%] h-[94%] rounded-xl bg-[#081839] shadow-lg z-0"
                aria-hidden="true"
              />

              {/* Bottomright */}
              <div
                className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-36 h-36 sm:w-44 sm:h-44 rounded-xl bg-[#e51a24] shadow-lg z-0"
                aria-hidden="true"
              />

              {/* Image */}
              <div className="relative z-10 w-full aspect-square rounded-xl overflow-hidden shadow-2xl bg-gray-100 border border-white/20">
                <Image
                  src={data.driverImage}
                  alt="Confident student driver driving with guidance and safety"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 480px"
                />
              </div>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-6 space-y-2 sm:space-y-3"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-2">
              <IoCar className="text-[#e51a24] text-4xl shrink-0" />
              <span className="text-[#081839] font-bold text-sm tracking-wide">
                {data.eyebrow}
              </span>
              <span className="w-12 h-[2px] bg-[#e51a24] rounded-full inline-block ml-1" />
            </div>

            {/* Headline */}
            <div className="space-y-2 sm:space-y-2">
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#081839] tracking-tight leading-[1.18]">
                {data.title.part1}
              </h2>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#e51a24] tracking-tight leading-[1.18]">
                {data.title.part2}
              </h2>
            </div>

            {/* Description */}
            <p className="text-[#556987] text-[14.5px] sm:text-[15.5px] leading-relaxed">
              {data.description}
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-6 pt-1">
              {data.checklist.map((row, idx) => (
                <div key={idx} className="contents">
                  <div className="flex items-center gap-2.5">
                    <IoCheckmarkCircle className="text-[#e51a24] text-2xl shrink-0" />
                    <span className="text-[#081839] font-bold text-[13.5px] sm:text-[14.5px]">
                      {row.col1}
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <IoCheckmarkCircle className="text-[#e51a24] text-2xl shrink-0" />
                    <span className="text-[#081839] font-bold text-[13.5px] sm:text-[14.5px]">
                      {row.col2}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="pt-2">
              <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100 grid grid-cols-1 sm:grid-cols-12 items-stretch bg-[#081839]">
                {/* Button */}
                <div className="sm:col-span-5 relative min-h-[120px] sm:min-h-[130px] group overflow-hidden">
                  <Image
                    src={data.calloutCard.videoThumbnail}
                    alt="Watch DriveLearn training session video"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 250px"
                  />
                  {/* Button */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <motion.div
                      whileHover={{ scale: 1.12 }}
                      whileTap={{ scale: 0.92 }}
                      className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center text-[#e51a24] text-lg sm:text-xl shadow-xl cursor-pointer"
                    >
                      <IoPlay className="ml-0.5" />
                    </motion.div>
                  </div>
                </div>

                {/* Support */}
                <div className="sm:col-span-7 p-4 sm:p-5 flex flex-col justify-center space-y-2 text-white">
                  <div className="flex items-center gap-2 text-gray-300 text-xs sm:text-[13px] font-semibold">
                    <IoHeadsetOutline className="text-base text-white shrink-0" />
                    <span>{data.calloutCard.supportTitle}</span>
                  </div>

                  <a
                    href={data.calloutCard.phoneHref}
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-9 h-9 rounded-full bg-[#e51a24] text-white flex items-center justify-center text-base shrink-0 group-hover:scale-110 transition-transform shadow-md">
                      <IoCall />
                    </div>
                    <span className="text-lg sm:text-[21px] font-extrabold text-white tracking-tight group-hover:text-[#e51a24] transition-colors">
                      {data.calloutCard.phone}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
