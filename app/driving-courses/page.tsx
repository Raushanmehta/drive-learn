"use client";

import { motion } from "framer-motion";
import {
    IoCar,
    IoIdCard,
    IoShieldCheckmark,
    IoSpeedometerOutline,
    IoSchoolOutline,
    IoCarSportOutline,
} from "react-icons/io5";
import { PiSteeringWheelBold } from "react-icons/pi";
import type { IconType } from "react-icons";
import ServiceCard from "@/components/cards/ServiceCard";
import PageTopSection from "@/components/common/PageTopSection";
import CtaSection from "@/sections/home/CtaSection";
import { poppins } from "@/lib/fonts";
import WhyChooseUsSection from "@/sections/home/WhyChooseUsSection";
import { siteMap } from "@/data";

const iconMap: Record<string, IconType> = {
    PiSteeringWheelBold,
    IoIdCard,
    IoShieldCheckmark,
    IoSpeedometerOutline,
    IoSchoolOutline,
    IoCarSportOutline,
};

export default function DrivingCourses() {
    const data = siteMap.services;
    const courses = data.courseList;

    return (
        <main>
            <PageTopSection
                title={data.pageTop?.title || "Driving Courses"}
                breadcrumb={data.pageTop?.breadcrumb || "Driving Courses"}
            />

            <section
                className={`relative py-8 lg:py-12 bg-white text-white overflow-hidden ${poppins.className}`}
            >
                {/* Background */}
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none -z-10"
                    aria-hidden="true"
                />

                <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-6 space-y-2 sm:space-y-2">
                        {/* Eyebrow */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center justify-center gap-3.5"
                        >
                            <span className="w-10 sm:w-14 h-[2px] bg-[#e51a24] rounded-full" />
                            <span className="flex items-center gap-2 text-white font-medium text-[14px] sm:text-[15px] tracking-wide">
                                <IoCar className="text-[#e51a24] text-lg sm:text-4xl shrink-0" />
                                <span className="text-black">{data.courseEyebrow || data.eyebrow}</span>
                            </span>
                            <span className="w-10 sm:w-14 h-[2px] bg-[#e51a24] rounded-full" />
                        </motion.div>

                        {/* Headline */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.55, delay: 0.1 }}
                            className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-tight leading-tight"
                        >
                            <span className="text-black">{data.courseTitle?.part1 || data.title.part1} </span>
                            <span className="text-[#e51a24]">{data.courseTitle?.part2 || data.title.part2}</span>
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.55, delay: 0.2 }}
                            className="text-[#9db2ce] text-[15px] sm:text-[16px] leading-relaxed"
                        >
                            {data.description}
                        </motion.p>
                    </div>

                    {/* Services */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-4 mt-6 sm:mt-8"
                    >
                        {courses.map((course) => {
                            const IconComponent = iconMap[course.icon] || PiSteeringWheelBold;
                            return (
                                <ServiceCard
                                    key={course.number}
                                    number={course.number}
                                    title={course.title}
                                    description={course.description}
                                    image={course.image}
                                    icon={IconComponent}
                                    href={course.href}
                                />
                            );
                        })}
                    </motion.div>
                </div>
            </section>
            <WhyChooseUsSection data={siteMap.whyChooseUs} />
            {/* Button */}
            <CtaSection data={siteMap.cta} />
        </main>
    );
}