"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { IoChevronForward } from "react-icons/io5";

export interface ContactCardProps {
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
  content: React.ReactNode;
  actionText: string;
  actionHref: string;
  delay?: number;
}

export default function ContactCard({
  icon: Icon,
  tag,
  content,
  actionText,
  actionHref,
  delay = 0,
}: ContactCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-xl p-5 sm:p-6 shadow-[0_4px_25px_rgba(0,0,0,0.04)] border border-gray-100 flex items-start gap-4 sm:gap-5 hover:shadow-lg transition-all duration-300"
    >
      {/* Left Red Icon Circle */}
      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#e51a24] flex items-center justify-center text-white text-2xl sm:text-[26px] shrink-0 shadow-md">
        <Icon />
      </div>

      {/* Vertical Tag */}
      <div className="hidden sm:flex items-center justify-center self-stretch border-r border-gray-100 pr-3.5">
        <span className="text-[10.5px] font-extrabold uppercase tracking-widest text-[#081839]/60 [writing-mode:vertical-lr] rotate-180">
          {tag}
        </span>
      </div>

      {/* Main Content & Action */}
      <div className="flex-1 flex flex-col justify-between self-stretch min-h-[90px]">
        <span className="sm:hidden text-[11px] font-extrabold uppercase tracking-widest text-[#e51a24] mb-1">
          {tag}
        </span>

        {content}

        <div className="mt-3">
          <Link
            href={actionHref}
            className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-[#081839] hover:text-[#e51a24] transition-colors uppercase tracking-wider group"
          >
            <span className="text-[#e51a24] font-extrabold text-sm group-hover:translate-x-0.5 transition-transform">
              <IoChevronForward className="inline -mt-0.5" />
            </span>
            <span>{actionText}</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
