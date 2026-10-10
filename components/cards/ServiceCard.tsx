"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { IoArrowForward } from "react-icons/io5";

export interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  image: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
}

export default function ServiceCard({
  number,
  title,
  description,
  image,
  icon: Icon,
  href,
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative bg-[#071638]/90 border border-white/10 hover:border-white/20 rounded-xl p-1 sm:p-1 overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-xl hover:shadow-2xl"
    >
      <div>
        {/* Top Image Container */}
        <div className="relative w-full aspect-[16/10] rounded-md overflow-hidden bg-black/40">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Floating Top-Right White Icon Badge */}
          <div className="absolute top-3 right-3 w-14 h-14 rounded-md bg-white flex items-center justify-center shadow-md z-10">
            <Icon className="text-[#0066cc] text-[32px]" />
          </div>

          {/* Bottom Left Big Ghost Number */}
          <div className="absolute bottom-2 left-3 z-10 pointer-events-none select-none">
            <span className="text-4xl sm:text-5xl font-black text-white/35 tracking-tight leading-none">
              {number}
            </span>
          </div>

          {/* Bottom Right Slanted Read More Badge */}
          <div className="absolute bottom-0 right-0 z-10 flex items-end">
            {/* Slanted Red Decorative Stripes */}
            <div className="flex items-center -skew-x-12 space-x-1 pr-1.5 pb-1">
              <span className="w-1.5 h-11 sm:h-11 bg-[#e51a24] rounded-[1px]" />
              <span className="w-1.5 h-11 sm:h-11 bg-[#e51a24] rounded-[1px]" />
            </div>

            {/* White Read More Box */}
            <Link
              href={href}
              className="bg-white hover:bg-gray-50 text-[#081839] -skew-x-12 -mr-3 sm:-mr-4 pl-5 sm:pl-6 pr-6 sm:pr-7 py-3 sm:py-3.5 font-bold text-[12px] sm:text-[13px] tracking-wide flex items-center gap-1.5 shadow-md transition-colors"
            >
              <span className="skew-x-12 inline-flex items-center gap-1.5">
                <span>READ MORE</span>
                <IoArrowForward className="text-sm transition-transform duration-200 group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </div>

        {/* Card Body */}
        <div className="pt-3 pb-2 px-3 sm:px-4">
          <Link href={href}>
            <h3 className="text-xl sm:text-[22px] font-bold text-white tracking-tight group-hover:text-[#e51a24] transition-colors">
              {title}
            </h3>
          </Link>
          <p className="text-[#9db2ce] text-[14px] sm:text-[14.5px] leading-relaxed mt-2.5">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
