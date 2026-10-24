"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { IoArrowForward } from "react-icons/io5";
import TestimonialCard from "@/components/cards/TestimonialCard";
import { poppins } from "@/lib/fonts";
import {
  siteMap,
  type DriveLearnTestimonialData,
  type SectionProps,
} from "@/data";

export default function TestimonialSection({
  data: propData,
  className = "",
}: SectionProps<DriveLearnTestimonialData> = {}) {
  const data = propData || siteMap.testimonial;

  return (
    <section
      className={`relative py-8 lg:py-12 bg-[#040e25] text-white overflow-hidden ${poppins.className} ${className}`}
    >
      {/* Image */}
      <div className="absolute top-0 left-0 w-full lg:w-[48%] h-full z-0 opacity-45 pointer-events-none select-none">
        <Image
          src={data.bgImage}
          alt="Happy student driver"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#040e25]/70 to-[#040e25]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#040e25] via-transparent to-[#040e25]" />
      </div>

      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Headline */}
          <div className="lg:col-span-4 space-y-2 sm:space-y-3">
            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-tight leading-tight"
            >
              <span className="text-white block">{data.homeTitle?.part1 || data.title.part1}</span>
              <span className="text-[#e51a24] block">{data.homeTitle?.part2 || data.title.part2}</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[#9db2ce] text-[14.5px] sm:text-[15px] leading-relaxed max-w-sm"
            >
              {data.homeDescription || data.description}
            </motion.p>

            {/* Testimonial */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pt-1"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block"
              >
                <Link
                  href={data.cta.href}
                  className="group inline-flex items-center gap-3 bg-[#e51a24] hover:bg-[#d41720] text-white font-bold text-[13px] tracking-wider uppercase pl-6 pr-2 py-2 rounded-full shadow-lg transition-all"
                >
                  <span>{data.cta.text}</span>
                  <span className="w-7 h-7 rounded-full bg-white text-[#040e25] flex items-center justify-center text-sm font-bold shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">
                    <IoArrowForward />
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Testimonial */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-4">
            {data.testimonials.slice(0, 2).map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}