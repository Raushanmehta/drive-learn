"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  IoCheckmarkCircle,
  IoPlay,
  IoArrowForward,
  IoClose,
  IoSchool,
} from "react-icons/io5";
import { poppins } from "@/lib/fonts";

const checkListCol1 = [
  "Certified Instructors",
  "Practical Training",
  "Parking Skills",
  "Road Safety Rules",
];

const checkListCol2 = [
  "Flexible Timing",
  "Modern Training Cars",
  "Personalized Coaching",
  "100% Success Rate",
];

export default function AboutSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className={`relative py-8 lg:py-12 bg-white overflow-hidden ${poppins.className}`}
    >
      {/* Background Soft Accent Shape */}
      <div
        className="absolute -bottom-10 left-0 w-80 h-44 bg-[#f0f6fd] -skew-y-6 rounded-xl -z-10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Visual Composition with Overlapping Images & Badge */}
          <div className="lg:col-span-6 relative pb-12 sm:pb-16 lg:pb-0">
            {/* Soft Ambient Shape Behind Main Image */}
            <div className="absolute -top-6 -left-6 w-3/4 h-3/4 bg-[#eef5fc] rounded-xl -z-10" />

            {/* Main Top Image: Driving Lesson */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative w-[88%] sm:w-[80%] aspect-[4/3] rounded-xl overflow-hidden shadow-xl"
            >
              <Image
                src="/images/hero-driving-lesson.jpg"
                alt="Student learning to drive with instructor"
                fill
                className="object-cover object-center"
              />
            </motion.div>

            {/* Overlapping Bottom Image: Smiling Student with Keys */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="absolute right-0 bottom-0 sm:bottom-[-20px] lg:bottom-[-30px] w-[62%] sm:w-[56%] aspect-[4/3] rounded-xl overflow-hidden border-4 border-white shadow-2xl z-10"
            >
              <Image
                src="/images/about-woman-keys.jpg"
                alt="Happy licensed driver holding car keys"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Floating 10+ Years Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 14 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
              className="absolute top-[6%] right-[2%] sm:right-[10%] lg:right-[8%] z-20"
            >
              <div className="bg-[#f0f7ff] border border-blue-100/70 shadow-xl px-5 sm:px-6 py-4 rounded-xl flex flex-col items-center">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#e51a24] leading-none">
                  10+
                </span>
                <span className="text-[12px] sm:text-[13px] font-semibold text-[#081839] mt-1 whitespace-nowrap leading-tight">
                  Years Experience
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: About Content */}
          <div className="lg:col-span-6 space-y-2 sm:space-y-2">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-[#0066cc] font-semibold text-[15px]"
            >
              <IoSchool className="text-xl text-[#0066cc]" />
              <span>About Us</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold leading-[1.18] tracking-tight"
            >
              <span className="text-[#081839] block">Learn To Drive,</span>
              <span className="text-[#e51a24] block">Drive With Confidence.</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="text-[#556987] text-[15px] sm:text-[15.5px] leading-relaxed max-w-xl"
            >
              We are a professional driving school committed to providing safe,
              practical and confidence-building driving lessons. Our experienced
              instructors help you learn driving with the right skills, road awareness
              and traffic rules for a safer tomorrow.
            </motion.p>

            {/* Checklist & Video Thumbnail Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pt-2"
            >
              {/* Video Thumbnail with Play Button */}
              <div
                onClick={() => setIsVideoOpen(true)}
                className="relative w-36 sm:w-44 h-24 sm:h-28 rounded-xl overflow-hidden shadow-md shrink-0 cursor-pointer group"
                role="button"
                tabIndex={0}
                aria-label="Play about video"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setIsVideoOpen(true);
                }}
              >
                <Image
                  src="/images/about-video-thumb.jpg"
                  alt="Driving lesson video thumbnail"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/25 flex items-center justify-center transition-colors group-hover:bg-black/35">
                  <div className="w-10 h-10 rounded-full bg-[#0070f3] text-white flex items-center justify-center shadow-lg transition-transform duration-200 group-hover:scale-110">
                    <IoPlay className="text-sm ml-0.5" />
                  </div>
                </div>
              </div>

              {/* 2-Column Features Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                <div className="space-y-2.5">
                  {checkListCol1.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <IoCheckmarkCircle className="text-[#e51a24] text-xl shrink-0" />
                      <span className="text-[13.5px] sm:text-[14px] font-semibold text-[#081839] whitespace-nowrap">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2.5">
                  {checkListCol2.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <IoCheckmarkCircle className="text-[#e51a24] text-xl shrink-0" />
                      <span className="text-[13.5px] sm:text-[14px] font-semibold text-[#081839] whitespace-nowrap">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* CTA Button: ABOUT MORE */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-2"
            >
              <Link
                href="/about"
                className="group inline-flex items-center gap-2.5 bg-[#e51a24] hover:bg-[#d41720] text-white font-bold text-[14px] tracking-wider uppercase px-8 py-3.5 sm:py-4 rounded-xl shadow-md transition-all"
              >
                <span>ABOUT MORE</span>
                <IoArrowForward className="text-base transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Video Modal Popup */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl bg-black rounded-xl overflow-hidden shadow-2xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-[#e51a24] text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close video modal"
              >
                <IoClose className="text-2xl" />
              </button>
              <iframe
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="About DriveLearn Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}