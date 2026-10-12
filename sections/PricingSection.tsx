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
import type { IconType } from "react-icons";
import PricingCard from "@/components/cards/PricingCard";
import { poppins } from "@/lib/fonts";
import { siteMap, type DriveLearnPricingData, type SectionProps } from "@/data";

const iconMap: Record<string, IconType> = {
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
  TbSteeringWheel,
  TbRoad,
  TbParking,
};

export default function PricingSection({
  data: propData,
  className = "",
}: SectionProps<DriveLearnPricingData> = {}) {
  const data = propData || siteMap.pricing;

  return (
    <section
      className={`relative py-8 lg:py-12 bg-[#f8fafc] overflow-hidden ${poppins.className} ${className}`}
    >
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 space-y-4 sm:space-y-6">
        {/* Header */}
        <div className="space-y-4 sm:space-y-6">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 space-y-2 sm:space-y-2">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center gap-2 mb-2"
            >
              <span className="w-1 h-4 bg-[#e51a24] rounded-full inline-block" />
              <span className="text-[#081839] font-bold text-xs uppercase tracking-widest">
                {data.eyebrow}
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#081839] tracking-tight leading-tight"
            >
              {data.title.part1} <span className="text-[#e51a24]">{data.title.part2}</span>
            </motion.h2>

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

          {/* Image */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4 items-stretch">
            {data.packages.map((pkg, idx) => {
              const HeaderIcon = iconMap[pkg.headerIcon] || IoSchool;
              const mappedBottom = pkg.bottomFeatures.map((bf) => ({
                icon: iconMap[bf.icon] || TbSteeringWheel,
                label: bf.label,
              }));

              return (
                <PricingCard
                  key={idx}
                  title={pkg.title}
                  tagline={pkg.tagline}
                  price={pkg.price}
                  headerIcon={HeaderIcon}
                  isPopular={pkg.isPopular}
                  features={pkg.features}
                  bottomFeatures={mappedBottom}
                  delay={idx * 0.1}
                />
              );
            })}
          </div>
        </div>

        {/* Block */}
        <div className="space-y-4 sm:space-y-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1 h-8 bg-[#e51a24] rounded-full inline-block" />
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#081839] tracking-tight">
              {data.includedSection.title.part1}{" "}
              <span className="text-[#e51a24]">{data.includedSection.title.part2}</span>
            </h3>
          </div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl p-5 sm:p-6 shadow-[0_4px_25px_rgba(0,0,0,0.04)] border border-gray-100 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-6 sm:gap-y-6 lg:gap-y-0 items-start"
          >
            {data.includedSection.features.map((item, idx) => {
              const Icon = iconMap[item.icon] || IoBookOutline;
              return (
                <div
                  key={idx}
                  className="relative flex flex-col items-center text-center group px-2 sm:px-3"
                >
                  {/* Vision */}
                  {idx !== 0 && (
                    <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-14 bg-gray-200" />
                  )}

                  {/* Vision */}
                  {idx % 3 !== 0 && (
                    <div className="hidden sm:block lg:hidden absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-14 bg-gray-200" />
                  )}

                  {/* Vision */}
                  {idx % 2 === 1 && (
                    <div className="sm:hidden absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-gray-200" />
                  )}

                  <div className="w-16 h-16 rounded-full bg-red-50 border border-red-100 flex items-center justify-center text-[#e51a24] text-4xl group-hover:bg-[#e51a24] group-hover:text-white transition-all duration-300 shadow-sm mb-3">
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

        {/* Services */}
        <div className="space-y-4 sm:space-y-6">
          <div className="space-y-2 sm:space-y-2">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1 h-8 bg-[#e51a24] rounded-full inline-block" />
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#081839] tracking-tight">
                {data.additionalSection.title}
              </h3>
            </div>
            <p className="text-[#556987] text-[14px] sm:text-[15px]">
              {data.additionalSection.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-stretch">
            {/* Pricing */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 bg-white rounded-xl overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col justify-between"
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
                    {data.additionalSection.services.map((row, idx) => (
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

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 h-full"
            >
              <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-100 w-full h-full min-h-[260px] bg-gray-50">
                <Image
                  src={data.additionalSection.image}
                  alt="Professional driving instructor giving driving lesson to student"
                  fill
                  className="object-cover object-center"
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
