"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaDribbble,
  FaLinkedinIn,
} from "react-icons/fa6";
import { poppins } from "@/lib/fonts";

export interface TeamCardProps {
  name: string;
  role: string;
  image: string;
  facebook?: string;
  twitter?: string;
  dribbble?: string;
  linkedin?: string;
  delay?: number;
}

export default function TeamCard({
  name,
  role,
  image,
  facebook = "https://facebook.com",
  twitter = "https://x.com",
  dribbble = "https://dribbble.com",
  linkedin = "https://linkedin.com",
  delay = 0,
}: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`group flex flex-col ${poppins.className}`}
    >
      {/* Image */}
      <div className="relative aspect-[310/320] w-full select-none">
        {/* Nav */}
        {/* Left */}
        <div className="absolute top-0 left-0 bottom-0 w-[15px] sm:w-[17px] bg-[#072147] rounded-tl-2xl rounded-bl-2xl z-0" />
        {/* Bottom */}
        <div className="absolute bottom-0 left-0 right-[14px] sm:right-[18px] h-[16px] sm:h-[18px] bg-[#072147] rounded-bl-2xl rounded-br-sm z-0" />
        {/* Topleft */}
        <div className="absolute top-0 left-0 w-[44px] sm:w-[48px] h-[15px] sm:h-[17px] bg-[#072147] rounded-tl-2xl z-0" />
        {/* Nav */}
        <div
          className="absolute top-0 left-[43px] sm:left-[47px] w-[28px] sm:w-[32px] h-[15px] sm:h-[17px] bg-[#e51a24] z-0"
          style={{ clipPath: "polygon(0 0, 100% 0, 42% 100%, 0 100%)" }}
        />

        {/* Frame */}
        <div className="absolute top-0 right-0 bottom-[6px] sm:bottom-[7px] left-[65px] sm:left-[72px] border-t-[2px] border-r-[2px] border-b-[2px] border-[#e51a24] rounded-tr-2xl rounded-br-2xl pointer-events-none z-0" />

        {/* Image */}
        <div className="absolute inset-[10px_7px_12px_10px] sm:inset-[11px_8px_13px_11px] rounded-xl overflow-hidden bg-gray-100 z-10 shadow-sm">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />

          {/* Image */}
          <div className="absolute right-2 sm:right-2.5 top-1/2 -translate-y-1/2 flex flex-col gap-2 sm:gap-2.5 z-20">
            <a
              href={facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name} on Facebook`}
              className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.14)] flex items-center justify-center text-[#e51a24] hover:bg-[#e51a24] hover:text-white transition-all duration-200"
            >
              <FaFacebookF className="text-sm sm:text-lg" />
            </a>
            <a
              href={twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name} on Twitter`}
              className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.14)] flex items-center justify-center text-[#e51a24] hover:bg-[#e51a24] hover:text-white transition-all duration-200"
            >
              <FaTwitter className="text-sm sm:text-lg" />
            </a>
            <a
              href={dribbble}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name} on Dribbble`}
              className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.14)] flex items-center justify-center text-[#e51a24] hover:bg-[#e51a24] hover:text-white transition-all duration-200"
            >
              <FaDribbble className="text-sm sm:text-lg" />
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name} on LinkedIn`}
              className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.14)] flex items-center justify-center text-[#e51a24] hover:bg-[#e51a24] hover:text-white transition-all duration-200"
            >
              <FaLinkedinIn className="text-sm sm:text-lg" />
            </a>
          </div>
        </div>
      </div>

      {/* Frame */}
      <div className="pt-3.5 sm:pt-4 flex flex-col items-start">
        <span className="text-[#e51a24] text-[13px] sm:text-[14px] font-bold tracking-wide">
          {role}
        </span>
        <h3 className="text-[#081839] text-xl sm:text-[22px] font-extrabold tracking-tight mt-0.5 leading-snug">
          {name}
        </h3>
        <div className="w-8 h-[3px] bg-[#e51a24] rounded-full mt-2 group-hover:w-14 transition-all duration-300" />
      </div>
    </motion.div>
  );
}
