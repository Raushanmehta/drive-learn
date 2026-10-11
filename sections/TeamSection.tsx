"use client";

import { motion } from "framer-motion";
import TeamCard, { TeamCardProps } from "@/components/cards/TeamCard";
import { poppins } from "@/lib/fonts";

const teamMembers: TeamCardProps[] = [
  {
    name: "Mac Alexixe",
    role: "CEO, Founder",
    image: "/images/team-mac-alexixe.jpg",
  },
  {
    name: "Alex Julian",
    role: "Instructor",
    image: "/images/team-alex-julian.jpg",
  },
  {
    name: "Jenifer Lopez",
    role: "Instructor",
    image: "/images/team-jenifer-lopez.jpg",
  },
  {
    name: "Henry Joseph",
    role: "Senior Instructor",
    image: "/images/team-henry-joseph.jpg",
  },
  {
    name: "Poppy Joanne",
    role: "Instructor",
    image: "/images/team-poppy-joanne.jpg",
  },
  {
    name: "Oscar Rhys",
    role: "Instructor",
    image: "/images/team-oscar-rhys.jpg",
  },
  {
    name: "James Charles",
    role: "Senior Instructor",
    image: "/images/team-james-charles.jpg",
  },
  {
    name: "Jessica Madison",
    role: "Junior Instructor",
    image: "/images/team-jessica-madison.jpg",
  },
];

export default function TeamSection() {
  return (
    <section
      className={`relative py-8 lg:py-12 bg-white overflow-hidden ${poppins.className}`}
    >
      {/* Decorative Dot Matrix Patterns */}
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
        {/* Section Header */}
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
              OUR TEAM
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#081839] tracking-tight leading-tight"
          >
            Meet Our <span className="text-[#e51a24]">Expert Instructors</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="text-[#556987] text-[14px] sm:text-[15px] max-w-2xl mx-auto mt-2.5 leading-relaxed"
          >
            Learn from certified and experienced instructors who are passionate
            about teaching and helping you become a safe and confident driver.
          </motion.p>
        </div>

        {/* 8 Team Members in 4x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {teamMembers.map((member, idx) => (
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
