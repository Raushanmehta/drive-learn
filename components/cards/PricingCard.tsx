"use client";

import { IconType } from "react-icons";
import { IoCheckmarkCircle } from "react-icons/io5";
import { motion } from "framer-motion";
import { poppins } from "@/lib/fonts";

export interface BottomFeature {
  icon: IconType;
  label: string;
}

export interface PricingCardProps {
  title: string;
  tagline: string;
  price: string;
  headerIcon: IconType;
  isPopular?: boolean;
  features: string[];
  bottomFeatures: BottomFeature[];
  delay?: number;
}

export default function PricingCard({
  title,
  tagline,
  price,
  headerIcon: HeaderIcon,
  isPopular = false,
  features,
  bottomFeatures,
  delay = 0,
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`bg-white rounded-xl flex flex-col justify-between border transition-all duration-300 relative shadow-[0_4px_25px_rgba(0,0,0,0.05)] hover:shadow-xl hover:-translate-y-1 ${isPopular
        ? "border-[#e51a24] ring-2 ring-[#e51a24]/10 lg:-translate-y-2"
        : "border-gray-100"
        } ${poppins.className}`}
    >
      {/* Badge */}
      {isPopular && (
        <div className="bg-[#e51a24] text-white py-1.5 px-4 text-center text-[11px] font-extrabold uppercase tracking-widest rounded-t-[14px]">
          MOST POPULAR
        </div>
      )}

      {/* Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4 sm:space-y-5">
        <div>
          {/* Headline */}
          <div className="flex items-start gap-4">
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center text-4xl shrink-0 shadow-sm ${isPopular
                ? "bg-[#e51a24] text-white"
                : "bg-[#081839] text-white"
                }`}
            >
              <HeaderIcon />
            </div>
            <div>
              <h3 className="text-lg sm:text-[19px] font-extrabold text-[#081839] leading-tight">
                {title}
              </h3>
              <p className="text-[#556987] text-[12px] sm:text-[12.5px] mt-1 leading-snug">
                {tagline}
              </p>
            </div>
          </div>

          {/* Pricing */}
          <div className="mt-4 pb-4 border-b border-gray-100 flex items-baseline gap-1.5">
            <span className="text-3xl sm:text-[34px] font-extrabold text-[#e51a24] tracking-tight">
              {price}
            </span>
            <span className="text-xs sm:text-[13px] font-medium text-[#556987]">
              / Package
            </span>
          </div>

          {/* Features */}
          <ul className="mt-4 space-y-2">
            {features.map((feat, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-[13px] sm:text-[13.5px] font-medium text-[#081839] leading-snug"
              >
                <IoCheckmarkCircle className="text-[#e51a24] text-2xl shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Nav */}
      <div className="bg-[#081839] text-white rounded-b-2xl p-3 sm:p-3.5 grid grid-cols-3 divide-x divide-white/10">
        {bottomFeatures.map((bFeat, idx) => {
          const BIcon = bFeat.icon;
          return (
            <div
              key={idx}
              className="flex flex-col items-center justify-center text-center px-1"
            >
              <BIcon className="text-lg sm:text-4xl text-white mb-1" />
              <span className="text-[10px] sm:text-[10.5px] font-bold text-gray-200 leading-tight">
                {bFeat.label}
              </span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
