"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { IoCall, IoLocationSharp, IoMail } from "react-icons/io5";
import { poppins } from "@/lib/fonts";

export default function Topbar() {
  return (
    <header className={`w-full bg-white border-b border-gray-100/90 ${poppins.className}`}>
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
        {/* Brand Logo */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="shrink-0 py-1"
        >
          <Link href="/" className="inline-block transition-transform hover:opacity-95" aria-label="DriveLearn Driving School">
            <Image
              src="/logo/logo-blacks.png"
              alt="DriveLearn Driving School"
              width={380}
              height={125}
              priority
              className="h-16 sm:h-20 md:h-[70px] w-auto object-contain"
            />
          </Link>
        </motion.div>

        {/* Contact & Info Details */}
        <motion.div
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", staggerChildren: 0.1 }}
          className="flex flex-wrap items-center justify-center md:justify-end gap-5 sm:gap-7 lg:gap-8"
        >
          {/* Item 1: Location */}
          <motion.div
            whileHover={{ y: -1 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-3"
          >
            <motion.div
              whileHover={{ scale: 1.12 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="text-[#e51a24] text-[26px] shrink-0 flex items-center justify-center"
            >
              <IoLocationSharp />
            </motion.div>
            <div className="flex flex-col leading-tight">
              <span className="text-[13.5px] sm:text-[14px] font-bold text-[#081839] tracking-tight">
                123 Training Street,
              </span>
              <span className="text-[12px] font-normal text-[#5b6b82] mt-0.5">
                New Delhi, India
              </span>
            </div>
          </motion.div>

          {/* Divider 1 */}
          <div className="hidden sm:block w-[1px] h-7 bg-gray-200/90" aria-hidden="true" />

          {/* Item 2: Phone */}
          <motion.div
            whileHover={{ y: -1 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-3"
          >
            <motion.div
              whileHover={{ scale: 1.12, rotate: -8 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="text-[#e51a24] text-[21px] shrink-0 flex items-center justify-center"
            >
              <IoCall />
            </motion.div>
            <a
              href="tel:+919876543210"
              className="text-[14px] sm:text-[15px] font-bold text-[#081839] hover:text-[#e51a24] transition-colors tracking-tight"
            >
              +91 9876543210
            </a>
          </motion.div>

          {/* Divider 2 */}
          <div className="hidden sm:block w-[1px] h-7 bg-gray-200/90" aria-hidden="true" />

          {/* Item 3: Email & Timing */}
          <motion.div
            whileHover={{ y: -1 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-3"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="w-[30px] h-[30px] rounded-[6px] bg-[#e51a24] flex items-center justify-center text-white shrink-0 shadow-xs"
            >
              <IoMail className="text-[17px]" />
            </motion.div>
            <div className="flex flex-col leading-tight">
              <a
                href="mailto:info@drivelearn.com"
                className="text-[13.5px] sm:text-[14px] font-bold text-[#081839] hover:text-[#e51a24] transition-colors tracking-tight"
              >
                info@drivelearn.com
              </a>
              <span className="text-[12px] font-normal text-[#5b6b82] mt-0.5">
                Mon - Sun: 9:00 AM - 8:00 PM
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
}