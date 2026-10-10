"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaXTwitter,
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
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`group flex flex-col ${poppins.className}`}
    >
      {/* Photo Frame Container with Geometric Accents */}
      <div className="relative rounded-2xl overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300 aspect-[360/350] w-full bg-gray-50">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        {/* Clickable Social Icon Overlay in Right Stack */}
        <div className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-10">
          <a
            href={facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} on Facebook`}
            className="w-6 h-6 sm:w-7 sm:h-7 opacity-0 hover:opacity-100 bg-[#e51a24] text-white rounded-md flex items-center justify-center text-xs transition-opacity shadow-sm"
          >
            <FaFacebookF />
          </a>
          <a
            href={twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} on Twitter`}
            className="w-6 h-6 sm:w-7 sm:h-7 opacity-0 hover:opacity-100 bg-[#e51a24] text-white rounded-md flex items-center justify-center text-xs transition-opacity shadow-sm"
          >
            <FaXTwitter />
          </a>
          <a
            href={dribbble}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} on Dribbble`}
            className="w-6 h-6 sm:w-7 sm:h-7 opacity-0 hover:opacity-100 bg-[#e51a24] text-white rounded-md flex items-center justify-center text-xs transition-opacity shadow-sm"
          >
            <FaDribbble />
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} on LinkedIn`}
            className="w-6 h-6 sm:w-7 sm:h-7 opacity-0 hover:opacity-100 bg-[#e51a24] text-white rounded-md flex items-center justify-center text-xs transition-opacity shadow-sm"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      {/* Info Underneath */}
      <div className="pt-4 flex flex-col items-start">
        <span className="text-[#e51a24] text-[12px] sm:text-[13px] font-bold tracking-wide">
          {role}
        </span>
        <h3 className="text-[#081839] text-[17px] sm:text-[19px] font-extrabold tracking-tight mt-0.5 leading-snug">
          {name}
        </h3>
        <div className="w-8 h-[3px] bg-[#e51a24] rounded-full mt-2.5 group-hover:w-12 transition-all duration-300" />
      </div>
    </motion.div>
  );
}
