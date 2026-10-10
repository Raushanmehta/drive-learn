"use client";

import { motion } from "framer-motion";
import { IoCar, IoIdCard, IoShieldCheckmark } from "react-icons/io5";
import { PiSteeringWheelBold } from "react-icons/pi";
import ServiceCard, { type ServiceCardProps } from "@/components/cards/ServiceCard";
import { poppins } from "@/lib/fonts";

const servicesData: ServiceCardProps[] = [
  {
    number: "01",
    title: "Driving Courses",
    description:
      "Learn driving with certified instructors training cars. Perfect for beginners and professional learners.",
    image: "/images/service-driving-courses.jpg",
    icon: PiSteeringWheelBold,
    href: "/courses",
  },
  {
    number: "02",
    title: "Driving License",
    description:
      "Get expert guidance and complete support to obtain your driving license with ease and confidence.",
    image: "/images/service-driving-license.jpg",
    icon: IoIdCard,
    href: "/driving-license",
  },
  {
    number: "03",
    title: "Vehicle Insurance",
    description:
      "Get the right vehicle insurance guidance to keep you and your vehicle protected on every journey.",
    image: "/images/service-vehicle-insurance.jpg",
    icon: IoShieldCheckmark,
    href: "/vehicle-insurance",
  },
];

export default function ServiceSection() {
  return (
    <section
      className={`relative py-8 lg:py-12 bg-[#040e25] text-white overflow-hidden ${poppins.className}`}
    >
      {/* Subtle Ambient Background Lighting */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 space-y-2 sm:space-y-2">
          {/* Eyebrow with Flanking Red Lines & Car Icon */}
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
              <span>Our Services</span>
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
            <span className="text-white">Professional </span>
            <span className="text-[#e51a24]">Driving Services</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="text-[#9db2ce] text-[15px] sm:text-[16px] leading-relaxed"
          >
            We offer a variety of driving training programs to help you gain the
            skills, knowledge and confidence needed to become a safe and
            responsible driver.
          </motion.p>
        </div>

        {/* 3-Column Service Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-4"
        >
          {servicesData.map((service) => (
            <ServiceCard key={service.number} {...service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}