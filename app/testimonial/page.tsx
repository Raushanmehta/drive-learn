"use client";

import Breadcrumb from "@/components/common/Breadcrumb";
import TestimonialCard from "@/components/cards/TestimonialCard";
import { motion } from "framer-motion";
import { IoCar } from "react-icons/io5";
import { poppins } from "@/lib/fonts";
import { siteMap } from "@/data";

export default function TestimonialPage() {
    const { testimonial: data, } = siteMap;

    return (
        <main>
            <Breadcrumb
                title={data.pageTop.title}
                breadcrumb={data.pageTop.breadcrumb}
            />
            <section
                className={`relative py-8 lg:py-12 bg-white text-[#081839] overflow-hidden ${poppins.className}`}
            >
                {/* Background */}
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none -z-10"
                    aria-hidden="true"
                />

                <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 space-y-2 sm:space-y-2">
                        {/* Eyebrow */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center justify-center gap-3.5 mb-2"
                        >
                            <span className="w-10 sm:w-14 h-[2px] bg-[#e51a24] rounded-full" />
                            <span className="flex items-center gap-2 text-white font-medium text-[14px] sm:text-[15px] tracking-wide">
                                <IoCar className="text-[#e51a24] text-xl sm:text-4xl shrink-0" />
                                <span className="text-black">{data.eyebrow}</span>
                            </span>
                            <span className="w-10 sm:w-14 h-[2px] bg-[#e51a24] rounded-full" />
                        </motion.div>

                        {/* Headline */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.55, delay: 0.1 }}
                            className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight leading-tight"
                        >
                            <span className="text-black">{data.title.part1}</span>
                            <span className="text-[#e51a24]">{data.title.part2}</span>
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.55, delay: 0.2 }}
                            className="text-[#556987] text-[14px] sm:text-[15px] max-w-2xl mx-auto mt-2.5 leading-relaxed"
                        >
                            {data.description}
                        </motion.p>
                    </div>

                    {/* Testimonial */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-4">
                        {data.testimonials.map((testimonial, idx) => (
                            <TestimonialCard key={idx} {...testimonial} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}