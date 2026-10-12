"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    IoCheckmarkCircle,
    IoCall,
    IoMail,
    IoArrowForward,
    IoHome,
    IoCalendarOutline,
    IoRibbonOutline,
    IoCarSportOutline,
} from "react-icons/io5";
import { poppins } from "@/lib/fonts";
import { siteMap, type DriveLearnThankYouData } from "@/data";

interface ThankYouSectionProps {
    data?: DriveLearnThankYouData;
}

export default function ThankYouSection({ data: propData }: ThankYouSectionProps = {}) {
    const data = propData || siteMap.thankYou;
    const { eyebrow, title, description, buttons } = data;

    return (
        <section className={`py-14 sm:py-20 bg-white relative overflow-hidden ${poppins.className}`}>
            {/* Background */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                {/* Icon */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full bg-emerald-50 border-4 border-emerald-100 flex items-center justify-center text-emerald-500 text-5xl sm:text-6xl shadow-xl shadow-emerald-500/10 mb-6"
                >
                    <IoCheckmarkCircle />
                </motion.div>

                {/* Eyebrow */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.15 }}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200/60 mb-4"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#e51a24]" />
                    <span className="text-[#e51a24] text-xs font-bold uppercase tracking-wider">
                        {eyebrow}
                    </span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.2 }}
                    className="text-3xl sm:text-5xl font-extrabold text-[#081839] tracking-tight leading-tight max-w-2xl mx-auto"
                >
                    {title.part1} <span className="text-[#e51a24]">{title.part2}</span>
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.25 }}
                    className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto mt-4 leading-relaxed"
                >
                    {description}
                </motion.p>

                {/* Actions */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.55 }}
                    className="flex flex-wrap items-center justify-center gap-3.5 mt-8"
                >
                    {buttons?.home && (
                        <Link
                            href={buttons.home.href}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#e51a24] hover:bg-[#cc141d] text-white font-bold text-sm transition-all shadow-md shadow-red-500/20"
                        >
                            <IoHome className="text-base" />
                            <span>{buttons.home.text}</span>
                        </Link>
                    )}
                    {buttons?.courses && (
                        <Link
                            href={buttons.courses.href}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-[#081839] font-bold text-sm transition-all"
                        >
                            <span>{buttons.courses.text}</span>
                            <IoArrowForward className="text-base" />
                        </Link>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
