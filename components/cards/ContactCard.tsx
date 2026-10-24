"use client";

import { motion } from "framer-motion";

export interface ContactCardProps {
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
  content: React.ReactNode;
  actionText?: string;
  actionHref?: string;
  delay?: number;
}

export default function ContactCard({
  icon: Icon,
  tag,
  content,
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
      {/* Left */}
      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#e51a24] flex items-center justify-center text-white text-2xl sm:text-[26px] shrink-0 shadow-md">
        <Icon />
      </div>

      {/* Badge */}
      <div className="hidden sm:flex items-center justify-center self-stretch border-r border-gray-100 pr-3.5">
        <span className="text-[10.5px] font-extrabold uppercase tracking-widest text-[#081839]/60 [writing-mode:vertical-lr] rotate-180">
          {tag}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-center self-stretch">
        <span className="sm:hidden text-[11px] font-extrabold uppercase tracking-widest text-[#e51a24] mb-1">
          {tag}
        </span>

        {content}
      </div>
    </motion.div>
  );
}
