"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { IoArrowForward } from "react-icons/io5";
import { poppins } from "@/lib/fonts";

export default function CtaSection() {
  return (
    <section className={`py-8 lg:py-12 bg-white ${poppins.className}`}>
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative bg-[#051538] rounded-xl overflow-hidden px-6 sm:px-12 lg:px-16 py-8 sm:py-10 shadow-2xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 sm:gap-6"
        >
          {/* Decorative Left Angled Red & Blue Stripes */}
          <div
            className="absolute top-0 left-0 w-28 h-full overflow-hidden pointer-events-none select-none z-10"
            aria-hidden="true"
          >
            <div className="absolute -top-10 -left-14 w-24 h-[160%] bg-[#e51a24] -skew-x-[26deg]" />
            <div className="absolute -top-10 -left-5 w-10 h-[160%] bg-[#082054] -skew-x-[26deg]" />
          </div>

          {/* Decorative Right Angled Red Stripe */}
          <div
            className="absolute bottom-0 right-0 w-28 h-full overflow-hidden pointer-events-none select-none z-10"
            aria-hidden="true"
          >
            <div className="absolute -bottom-10 -right-14 w-24 h-[160%] bg-[#e51a24] -skew-x-[26deg]" />
          </div>

          {/* Car Background Image on the Right Side */}
          <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full z-0 opacity-40 lg:opacity-50 pointer-events-none select-none">
            <Image
              src="/images/footer-car-bg.jpg"
              alt="Driving on highway"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#051538] via-[#051538]/75 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#051538] via-transparent to-[#051538]" />
          </div>

          {/* Left Text Content */}
          <div className="relative z-20 max-w-2xl pl-2 sm:pl-4 space-y-2 sm:space-y-3">
            {/* Top Accent Line */}
            <div className="w-12 h-1 bg-[#e51a24] rounded-full" />

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-extrabold tracking-tight text-white leading-tight">
              Start Your{" "}
              <span className="text-[#e51a24]">Driving Journey</span> Today!
            </h2>

            {/* Description */}
            <p className="text-[#9db2ce] text-[14px] sm:text-[15.5px] leading-relaxed">
              Join our expert-led driving courses and build your confidence on
              the road.
            </p>
          </div>

          {/* Right Action Button: ENQUIRE NOW */}
          <div className="relative z-20 shrink-0 self-start lg:self-center pr-2 sm:pr-4">
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3.5 bg-[#e51a24] hover:bg-[#d41720] text-white font-bold text-[13.5px] sm:text-[14.5px] tracking-wider uppercase pl-7 pr-2.5 py-2.5 rounded-full shadow-xl transition-all"
              >
                <span>ENQUIRE NOW</span>
                <span className="w-8 h-8 rounded-full bg-white text-[#051538] flex items-center justify-center text-base font-bold shrink-0 transition-transform duration-200 group-hover:translate-x-1">
                  <IoArrowForward />
                </span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}