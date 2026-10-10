"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { IoStar, IoStarOutline, IoArrowForward } from "react-icons/io5";
import TestimonialCard, {
  type TestimonialCardProps,
} from "@/components/cards/TestimonialCard";
import { poppins } from "@/lib/fonts";

const testimonialsData: TestimonialCardProps[] = [
  {
    title: "Bahut Achha Driving School Hai.",
    review:
      "Yahan ke instructors bahut patient hain aur har cheez ko clearly samjhate hain. Inki training ki wajah se mujhe driving me confidence mila. Main is driving school ko sabko recommend karunga.",
    name: "Amit Sharma",
    location: "NEW DELHI",
    avatar: "/images/reviewer-amit.jpg",
  },
  {
    title: "Professional Team  Training.",
    review:
      "Mera driving experience yahan bahut accha raha. Staff bahut supportive hai aur training cars bhi well-maintained hain. Yahan seekhna easy aur comfortable hai. Highly recommended!",
    name: "Priya Verma",
    location: "GURGAON",
    avatar: "/images/reviewer-priya.jpg",
  },
];

export default function TestimonialSection() {
  return (
    <section
      className={`relative py-8 lg:py-12 bg-[#040e25] text-white overflow-hidden ${poppins.className}`}
    >
      {/* Background Student Learner Driver on Left Side */}
      <div className="absolute top-0 left-0 w-full lg:w-[48%] h-full z-0 opacity-45 pointer-events-none select-none">
        <Image
          src="/images/testimonial-bg-girl.jpg"
          alt="Happy student driver"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#040e25]/70 to-[#040e25]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#040e25] via-transparent to-[#040e25]" />
      </div>

      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left Column: Heading, Rating Summary & CTA */}
          <div className="lg:col-span-4 space-y-2 sm:space-y-3">
            {/* Main Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-tight leading-tight"
            >
              <span className="text-white block">Reviews &</span>
              <span className="text-[#e51a24] block">Testimonials</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[#9db2ce] text-[14.5px] sm:text-[15px] leading-relaxed max-w-sm"
            >
              See what our students say about their learning experience, our
              instructors and their journey towards becoming confident drivers.
            </motion.p>

            {/* Rating Box */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="pt-1 space-y-2"
            >
              <h3 className="text-white font-bold text-lg tracking-tight">
                Excellent
              </h3>

              {/* 5 Rating Badges */}
              <div className="flex items-center gap-1.5">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-md bg-[#e51a24] flex items-center justify-center text-white text-sm shadow-xs"
                  >
                    <IoStar />
                  </div>
                ))}
                {/* 5th Star (Outline/Half) */}
                <div className="w-8 h-8 rounded-md border border-[#e51a24] flex items-center justify-center text-[#e51a24] text-sm shadow-xs">
                  <IoStarOutline />
                </div>
              </div>

              {/* Trust Score */}
              <p className="text-[13px] text-[#9db2ce]">
                Trust Score{" "}
                <span className="font-bold text-white">4.5</span> (Based on
                2,500 reviews)
              </p>
            </motion.div>

            {/* CTA Button: ALL REVIEWS */}
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
                  href="/testimonials"
                  className="group inline-flex items-center gap-3 bg-[#e51a24] hover:bg-[#d41720] text-white font-bold text-[13px] tracking-wider uppercase pl-6 pr-2 py-2 rounded-full shadow-lg transition-all"
                >
                  <span>ALL REVIEWS</span>
                  <span className="w-7 h-7 rounded-full bg-white text-[#040e25] flex items-center justify-center text-sm font-bold shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">
                    <IoArrowForward />
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column: 2 Testimonial Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-4">
            {testimonialsData.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}