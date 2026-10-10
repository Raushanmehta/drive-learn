"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  IoSchool,
  IoSettingsSharp,
  IoDiamond,
  IoCar,
  IoMoon,
  IoShieldCheckmark,
  IoPeople,
  IoStar,
  IoHeadset,
  IoBookOutline,
  IoCarOutline,
  IoShieldCheckmarkOutline,
  IoCalendarOutline,
  IoPeopleOutline,
} from "react-icons/io5";
import { TbSteeringWheel, TbRoad, TbParking } from "react-icons/tb";
import PricingCard, { PricingCardProps } from "@/components/cards/PricingCard";
import { poppins } from "@/lib/fonts";

const pricingPackages: PricingCardProps[] = [
  {
    title: "Basic Course",
    tagline: "Perfect for first-time learners who want to start with the basics.",
    price: "₹6,999",
    headerIcon: IoSchool,
    features: [
      "10 Hours of Practical Training",
      "Basic Driving Skills",
      "Traffic Rules & Road Signs",
      "One-on-One Instructor",
      "Flexible Scheduling",
    ],
    bottomFeatures: [
      { icon: TbSteeringWheel, label: "Practical Training" },
      { icon: TbRoad, label: "Road Safety" },
      { icon: IoCalendarOutline, label: "Flexible Timings" },
    ],
  },
  {
    title: "Standard Course",
    tagline: "A balanced package with complete driving training for all learners.",
    price: "₹11,999",
    headerIcon: TbSteeringWheel,
    isPopular: true,
    features: [
      "20 Hours of Practical Training",
      "City & Highway Driving",
      "Parking & Reverse Driving",
      "Traffic Rules & Safety Training",
      "Flexible Class Timings",
      "Dedicated Trainer",
    ],
    bottomFeatures: [
      { icon: IoCar, label: "City Driving" },
      { icon: TbRoad, label: "Highway Driving" },
      { icon: TbParking, label: "Parking Practice" },
    ],
  },
  {
    title: "Advanced Course",
    tagline: "For confident learners who want to master advanced driving skills.",
    price: "₹16,999",
    headerIcon: IoSettingsSharp,
    features: [
      "30 Hours of Practical Training",
      "City, Highway & Night Driving",
      "Advanced Parking Techniques",
      "Defensive Driving Training",
      "Real Traffic Practice",
      "Flexible Scheduling",
    ],
    bottomFeatures: [
      { icon: IoMoon, label: "Night Driving" },
      { icon: IoShieldCheckmark, label: "Defensive Driving" },
      { icon: IoPeople, label: "Expert Instructor" },
    ],
  },
  {
    title: "Premium Course",
    tagline: "Complete training for a safe and confident driving experience.",
    price: "₹22,999",
    headerIcon: IoDiamond,
    features: [
      "40 Hours of Practical Training",
      "City, Highway & Night Driving",
      "Advanced Maneuvers",
      "Defensive & Safe Driving",
      "Mock Driving Test",
      "Lifetime Guidance",
    ],
    bottomFeatures: [
      { icon: IoCar, label: "Complete Training" },
      { icon: IoStar, label: "Mock Test" },
      { icon: IoHeadset, label: "Lifetime Support" },
    ],
  },
];

const includedFeatures = [
  { icon: IoBookOutline, label: "Certified Instructors" },
  { icon: IoCarOutline, label: "Modern Training Vehicles" },
  { icon: IoShieldCheckmarkOutline, label: "Safe & Secure Learning" },
  { icon: IoCalendarOutline, label: "Flexible Batch Timings" },
  { icon: TbRoad, label: "Practical Road Training" },
  { icon: IoPeopleOutline, label: "Personalized Attention" },
];

const addonServices = [
  { service: "Additional Driving Hour", price: "₹700 / Hour" },
  { service: "Automatic Car Training", price: "₹2,000 (Extra)" },
  { service: "Night Driving Session", price: "₹1,500 / Session" },
  { service: "Highway Driving Practice", price: "₹1,500 / Session" },
  { service: "Mock Driving Test", price: "₹1,000 / Test" },
  { service: "License Assistance", price: "₹2,500" },
  { service: "Refresher Course (5 Hours)", price: "₹4,000" },
];

export default function PricingSection() {
  return (
    <section
      className={`py-16 sm:py-20 lg:py-24 bg-[#f8fafc] overflow-hidden ${poppins.className}`}
    >
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 space-y-20 sm:space-y-24">
        {/* ========================================================= */}
        {/* BLOCK 1: Header & 4 Pricing Cards                         */}
        {/* ========================================================= */}
        <div className="space-y-12 sm:space-y-14">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center gap-2 mb-2"
            >
              <span className="w-1 h-4 bg-[#e51a24] rounded-full inline-block" />
              <span className="text-[#081839] font-bold text-xs uppercase tracking-widest">
                PRICING
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#081839] tracking-tight leading-tight"
            >
              Our Driving <span className="text-[#e51a24]">Course Packages</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="text-[#556987] text-[14.5px] sm:text-[15.5px] max-w-2xl mx-auto leading-relaxed pt-1"
            >
              Choose from our flexible driving course packages designed to match
              your learning needs, schedule and experience level.
            </motion.p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 items-stretch">
            {pricingPackages.map((pkg, idx) => (
              <PricingCard
                key={idx}
                {...pkg}
                delay={idx * 0.1}
              />
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* BLOCK 2: What’s Included in All Packages?                 */}
        {/* ========================================================= */}
        <div className="space-y-8">
          <div className="flex items-center gap-2">
            <span className="w-1 h-4 bg-[#e51a24] rounded-full inline-block" />
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#081839] tracking-tight">
              What’s Included in{" "}
              <span className="text-[#e51a24]">All Packages?</span>
            </h3>
          </div>

          {/* 6 Icons Row in White Rounded Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-[0_4px_25px_rgba(0,0,0,0.04)] border border-gray-100 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-4 items-start"
          >
            {includedFeatures.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-14 h-14 rounded-full bg-red-50 border border-red-100 flex items-center justify-center text-[#e51a24] text-2xl group-hover:bg-[#e51a24] group-hover:text-white transition-all duration-300 shadow-sm mb-3">
                    <Icon />
                  </div>
                  <span className="text-[12.5px] sm:text-[13px] font-bold text-[#081839] leading-snug">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* ========================================================= */}
        {/* BLOCK 3: Additional Services Table & Image                */}
        {/* ========================================================= */}
        <div className="space-y-6">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="w-1 h-4 bg-[#e51a24] rounded-full inline-block" />
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#081839] tracking-tight">
                Additional Services
              </h3>
            </div>
            <p className="text-[#556987] text-[14px] sm:text-[15px]">
              Enhance your learning experience with our add-on services.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Left Column: Pricing Table */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 bg-white rounded-2xl overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col justify-between"
            >
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#081839] text-white">
                      <th className="py-3.5 px-5 text-sm font-bold">Service</th>
                      <th className="py-3.5 px-5 text-sm font-bold text-right sm:text-left">
                        Price (₹)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-sm">
                    {addonServices.map((row, idx) => (
                      <tr
                        key={idx}
                        className={`${
                          idx % 2 === 0 ? "bg-white" : "bg-[#fcfdfe]"
                        } hover:bg-red-50/40 transition-colors`}
                      >
                        <td className="py-3 px-5 text-[#081839] font-medium text-[13.5px]">
                          {row.service}
                        </td>
                        <td className="py-3 px-5 text-[#081839] font-bold text-[13.5px] text-right sm:text-left">
                          {row.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Right Column: Instructor & Student In-Car Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white h-full min-h-[300px] sm:min-h-[340px] aspect-[800/513] w-full bg-gray-50">
                <Image
                  src="/images/pricing-addon-lesson.jpg"
                  alt="Professional driving instructor giving driving lesson to student"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
