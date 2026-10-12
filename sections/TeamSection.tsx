"use client";

import { motion } from "framer-motion";
import TeamCard from "@/components/cards/TeamCard";
import { poppins } from "@/lib/fonts";
import { siteMap, type DriveLearnTeamData, type SectionProps } from "@/data";

export default function TeamSection({
  data: propData,
  className = "",
}: SectionProps<DriveLearnTeamData> = {}) {
  const data = propData || siteMap.team;

  return (
    <section
      className={`relative py-8 lg:py-12 bg-white overflow-hidden ${poppins.className} ${className}`}
    >
      {/* Dots */}
      <div
        className="absolute top-12 left-6 opacity-35 pointer-events-none select-none hidden md:block"
        aria-hidden="true"
      >
        <div className="grid grid-cols-6 gap-2">
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-gray-300" />
          ))}
        </div>
      </div>
      <div
        className="absolute top-12 right-6 opacity-35 pointer-events-none select-none hidden md:block"
        aria-hidden="true"
      >
        <div className="grid grid-cols-6 gap-2">
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-gray-300" />
          ))}
        </div>
      </div>

      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10 space-y-4 sm:space-y-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 space-y-2 sm:space-y-2">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 mb-2"
          >
            <span className="w-1 h-4 bg-[#e51a24] rounded-full inline-block" />
            <span className="text-[#081839] font-bold text-xs uppercase tracking-widest">
              {data.eyebrow}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#081839] tracking-tight leading-tight"
          >
            {data.title.part1} <span className="text-[#e51a24]">{data.title.part2}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="text-[#556987] text-[14px] sm:text-[15px] max-w-2xl mx-auto mt-2.5 leading-relaxed"
          >
            {data.description}
          </motion.p>
        </div>

        {/* Team */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {data.members.map((member, idx) => (
            <TeamCard
              key={idx}
              {...member}
              delay={idx * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
