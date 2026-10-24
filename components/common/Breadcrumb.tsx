"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { IoChevronForward } from "react-icons/io5";
import { poppins } from "@/lib/fonts";
import { siteMap, type DriveLearnPageTopData } from "@/data";

export interface BreadcrumbProps {
  title?: string;
  breadcrumb?: string;
  bgImage?: string;
  data?: DriveLearnPageTopData;
}

export default function Breadcrumb({
  title,
  breadcrumb,
  bgImage,
  data: propData,
}: BreadcrumbProps) {
  const data = propData || siteMap.pageTopSection;
  const displayTitle = title || data.defaultTitle;
  const displayBreadcrumb = breadcrumb || data.defaultBreadcrumb;
  const displayBgImage = bgImage || data.defaultBgImage;

  return (
    <section
      className={`relative w-full h-[260px] sm:h-[300px] lg:h-[300px] flex items-center justify-center overflow-hidden bg-[#040e25] ${poppins.className}`}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={displayBgImage}
          alt={displayTitle}
          fill
          priority
          className="object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#040e25]/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#040e25]/90 via-[#040e25]/40 to-[#040e25]/60 z-10" />
      </div>

      {/* Page Title */}
      <div className="relative z-20 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-3xl sm:text-5xl lg:text-[56px] font-bold text-white tracking-tight drop-shadow-md"
        >
          {displayTitle}
        </motion.h1>
      </div>

      {/* Breadcrumb Navigation */}
      <div className="absolute bottom-5 sm:bottom-7 inset-x-0 z-20 pointer-events-none">
        <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 pointer-events-auto">
          <motion.nav
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-[12px] sm:text-[13px] font-semibold tracking-wide"
          >
            <Link
              href="/"
              className="text-white hover:text-[#e51a24] transition-colors"
            >
              Home
            </Link>
            <IoChevronForward className="text-white/70 text-xs shrink-0" />
            <span className="text-white">{displayBreadcrumb}</span>
          </motion.nav>
        </div>
      </div>
    </section>
  );
}

// Backward compatibility exports
export { Breadcrumb as PageTopSection };
export type { BreadcrumbProps as PageTopSectionProps };
