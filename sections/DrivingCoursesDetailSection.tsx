"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  IoArrowForward,
  IoCheckmarkCircle,
  IoCar,
  IoShieldCheckmark,
  IoTime,
  IoCall,
  IoPeople,
} from "react-icons/io5";
import { poppins } from "@/lib/fonts";
import { siteMap, type DriveLearnServicesData } from "@/data";

const detailIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  IoPeople,
  IoCar,
  IoShieldCheckmark,
  IoTime,
};

export interface DrivingCoursesDetailSectionProps {
  currentSlug?: string;
  data?: DriveLearnServicesData;
}

export default function DrivingCoursesDetailSection({
  currentSlug,
  data: propData,
}: DrivingCoursesDetailSectionProps = {}) {
  const data = propData || siteMap.services;
  const coursesList = data.courseList || [];

  // Services
  const currentCourse =
    (currentSlug ? coursesList.find((c) => c.slug === currentSlug) : null) ||
    coursesList[0];

  // Services
  const activeDetail =
    (currentCourse as unknown as { courseDetail?: Record<string, unknown> })?.courseDetail ||
    (coursesList[0] as unknown as { courseDetail?: Record<string, unknown> })?.courseDetail ||
    (data as unknown as { courseDetail?: Record<string, unknown> })?.courseDetail ||
    {};

  // Sidebar
  const sidebarData =
    (data as unknown as { sidebar?: { title?: string; courses?: Array<{ title: string; href: string }>; callout?: { image: string; title: string; subtitle: string; phone: string; phoneHref: string } } })?.sidebar ||
    (activeDetail as { sidebar?: { title?: string; courses?: Array<{ title: string; href: string }>; callout?: { image: string; title: string; subtitle: string; phone: string; phoneHref: string } } })?.sidebar ||
    {};

  const eyebrow = (activeDetail as { eyebrow?: string })?.eyebrow || "COURSE DETAILS";
  const title = (activeDetail as { title?: { part1: string; part2: string } })?.title;
  const description = (activeDetail as { description?: string })?.description || currentCourse?.description || "";
  const heroImage = (activeDetail as { heroImage?: string })?.heroImage || currentCourse?.image || "/images/service-driving-courses.jpg";

  const intro = (activeDetail as { intro?: { title: string; description: string } })?.intro || {
    title: "We're an Experienced Friendly Driving School",
    description: "Our driving course is specially designed to give you complete confidence behind the wheel with expert training.",
  };

  const highlights = (activeDetail as { highlights?: Array<{ icon: string; title: string }> })?.highlights || [
    { icon: "IoPeople", title: "Certified Instructors" },
    { icon: "IoCar", title: "Modern Training Vehicles" },
    { icon: "IoShieldCheckmark", title: "Safe & Secure Learning" },
    { icon: "IoTime", title: "Flexible Class Timings" },
  ];

  const advantages = (activeDetail as { advantages?: { title: string; description: string; image: string; items: string[] } })?.advantages || {
    title: "Driving School Advantages",
    description: "Learn with professional instructors and get complete support to become a safe and confident driver.",
    image: "/images/driver-girl-clean.png",
    items: [
      "60 Mins Driving Lesson",
      "Additional Time Available",
      "2 Hour Highway Lesson",
      "Car Rental For Road Test",
      "Road Test Appointment",
      "7 Hour Pre-Licensing Course",
    ],
  };

  const features = (activeDetail as { features?: { title: string; description: string; items: string[] } })?.features || {
    title: "Complete Driving Course Features",
    description: "Our beginner course covers everything you need to know to start driving confidently.",
    items: [
      "5 Hour Pre License CB-009 Course",
      "Car To Practice In (Automatic Transmission Only)",
      "Road Test Appointment",
    ],
  };

  const pricingTable = (activeDetail as { pricingTable?: { headers: { package: string; price: string }; packages: Array<{ package: string; price: string }>; inclusiveRow: { title: string; items: string[] } } })?.pricingTable || {
    headers: { package: "Course Package", price: "Price (₹)" },
    packages: [
      { package: "For 5 Hours Training:", price: "₹5,000.00" },
      { package: "For 7.5 Hours (Five Lessons of 1 Hour)", price: "₹8,750.00" },
      { package: "For 10 Hours Training:", price: "₹9,000.00" },
      { package: "Include Road Test Package:", price: "₹4,500.00" },
    ],
    inclusiveRow: {
      title: "Road test package includes:",
      items: [
        "90 Min Simulated Road Test",
        "Free Road Test Appointment (3 Weeks)",
        "Car Rental For Test",
      ],
    },
  };

  const sidebarCourses = sidebarData.courses || coursesList.map((c) => ({
    title: c.title,
    href: c.href || `/driving-courses/${c.slug}`,
  }));

  const sidebarCallout = sidebarData.callout || {
    image: "/images/drivetest-cone.jpg",
    title: "Best Guidance To \nEach Student, That's \nWhy We Produce \nA Confident Drivers",
    subtitle: "Join Our Driving Courses, Call us",
    phone: "+1 000000000",
    phoneHref: "tel:+1000000000",
  };

  return (
    <section
      className={`relative py-8 lg:py-12 bg-white text-[#1a1a1a] ${poppins.className}`}
    >
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-start">
          
          {/* Services */}
          <div className="lg:col-span-8 space-y-4 sm:space-y-6">
            
            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-2 sm:space-y-2"
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-1 h-4 bg-[#e51a24] rounded-full inline-block" />
                <span className="text-[#081839] font-bold text-xs uppercase tracking-widest">
                  {eyebrow}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#081839] tracking-tight leading-tight">
                {title ? (
                  <>
                    <span>{title.part1}</span>
                    <span className="text-[#e51a24]">{title.part2}</span>
                  </>
                ) : (
                  <span>{currentCourse?.title || "Driving Course"}</span>
                )}
              </h1>

              <p className="text-[#556987] text-[14px] sm:text-[15px] mt-2.5 leading-relaxed">
                {description}
              </p>
            </motion.div>

            {/* Hero */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-lg border border-gray-100 bg-gray-100"
            >
              <Image
                src={heroImage}
                alt={currentCourse?.title || "Driving Course"}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 850px"
              />
            </motion.div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-2 sm:space-y-3"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="w-1 h-4 bg-[#e51a24] rounded-full inline-block" />
                <h2 className="text-xl sm:text-[22px] font-extrabold text-[#081839] tracking-tight">
                  {intro.title}
                </h2>
              </div>

              <p className="text-[#556987] text-[14px] sm:text-[15px] leading-relaxed">
                {intro.description}
              </p>

              {/* Image */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-1">
                {highlights.map((item, idx) => {
                  const IconComp = detailIconMap[item.icon] || IoCar;
                  return (
                    <div
                      key={idx}
                      className="bg-[#f0f5fa] rounded-xl p-4 sm:p-5 text-center flex flex-col items-center justify-center border border-gray-100 hover:bg-[#eaf1f8] hover:shadow-md transition-all duration-300 group"
                    >
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white text-[#e51a24] shadow-sm flex items-center justify-center text-xl sm:text-2xl mb-2.5 border border-gray-100 group-hover:scale-105 transition-transform">
                        <IconComp />
                      </div>
                      <span className="text-[#081839] font-bold text-[13px] sm:text-[14px] leading-snug">
                        {item.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-center pt-1"
            >
              {/* Image */}
              <div className="md:col-span-5 relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg border border-gray-100 bg-gray-100">
                <Image
                  src={advantages.image}
                  alt={advantages.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>

              {/* Features */}
              <div className="md:col-span-7 space-y-2 sm:space-y-3">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-1 h-4 bg-[#e51a24] rounded-full inline-block" />
                  <h2 className="text-xl sm:text-[22px] font-extrabold text-[#081839] tracking-tight">
                    {advantages.title}
                  </h2>
                </div>

                <p className="text-[#556987] text-[14px] sm:text-[15px] leading-relaxed">
                  {advantages.description}
                </p>

                <div className="space-y-2 sm:space-y-2.5 pt-1">
                  {advantages.items.map((adv, idx) => (
                    <div key={idx} className="flex items-center gap-2.5">
                      <IoCheckmarkCircle className="text-[#e51a24] text-xl shrink-0" />
                      <span className="text-[#081839] font-semibold text-[13.5px] sm:text-[14.5px]">
                        {adv}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-3 sm:space-y-4 pt-1"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="w-1 h-4 bg-[#e51a24] rounded-full inline-block" />
                <h2 className="text-xl sm:text-[22px] font-extrabold text-[#081839] tracking-tight">
                  {features.title}
                </h2>
              </div>

              <p className="text-[#556987] text-[14px] sm:text-[15px] leading-relaxed">
                {features.description}
              </p>

              {/* Features */}
              <div className="space-y-2 sm:space-y-2.5 pb-1">
                {features.items.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <IoCheckmarkCircle className="text-[#e51a24] text-xl shrink-0" />
                    <span className="text-[#081839] font-semibold text-[13.5px] sm:text-[14.5px]">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>

              {/* Pricing */}
              <div className="rounded-xl overflow-hidden border border-gray-200 shadow-md">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-[#081839] text-white">
                      <th className="py-3.5 px-4 sm:px-6 font-bold text-[13.5px] sm:text-[14px] tracking-wide">
                        {pricingTable.headers.package}
                      </th>
                      <th className="py-3.5 px-4 sm:px-6 font-bold text-[13.5px] sm:text-[14px] tracking-wide">
                        {pricingTable.headers.price}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {pricingTable.packages.map((row, idx) => (
                      <tr
                        key={idx}
                        className={`${
                          idx % 2 === 1 ? "bg-[#f8fafc]" : "bg-white"
                        } hover:bg-blue-50/40 transition-colors`}
                      >
                        <td className="py-3.5 px-4 sm:px-6 text-[#081839] font-medium text-[13.5px] sm:text-[14.5px]">
                          {row.package}
                        </td>
                        <td className="py-3.5 px-4 sm:px-6 text-[#081839] font-bold text-[13.5px] sm:text-[14.5px]">
                          {row.price}
                        </td>
                      </tr>
                    ))}
                    {/* Features */}
                    <tr className="bg-white hover:bg-blue-50/40 transition-colors">
                      <td className="py-4 px-4 sm:px-6 text-[#081839] font-medium align-top text-[13.5px] sm:text-[14.5px]">
                        {pricingTable.inclusiveRow.title}
                      </td>
                      <td className="py-4 px-4 sm:px-6 text-[#556987] space-y-1 font-medium text-[13px] sm:text-[14px]">
                        {pricingTable.inclusiveRow.items.map((item, idx) => (
                          <p key={idx}>{item}</p>
                        ))}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>

          </div>

          {/* Nav */}
          <aside className="lg:col-span-4 space-y-4 sm:space-y-6 lg:sticky lg:top-[88px] self-start z-20">
            
            {/* Nav */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#081839] rounded-xl p-4 sm:p-6 shadow-xl space-y-3 sm:space-y-4 border border-white/5"
            >
              <div>
                <h3 className="text-xl sm:text-[22px] font-extrabold text-white tracking-tight">
                  {sidebarData.title || "Driving Courses"}
                </h3>
                <div className="w-10 h-1 bg-[#e51a24] rounded-full mt-2 mb-3" />
              </div>

              <div className="space-y-2 pt-1">
                {sidebarCourses.map((c, i) => {
                  const isActive = currentSlug
                    ? c.href.includes(currentSlug)
                    : i === 0;
                  return (
                    <Link
                      key={i}
                      href={c.href}
                      className={`flex items-center gap-3 px-3.5 sm:px-4 py-3 rounded-xl font-semibold text-[13.5px] sm:text-[14px] transition-all duration-200 group ${
                        isActive
                          ? "bg-[#e51a24] text-white shadow-md shadow-red-900/30"
                          : "bg-[#f0f5fa] hover:bg-white text-[#081839] hover:text-[#e51a24]"
                      }`}
                    >
                      <IoArrowForward
                        className={`text-sm shrink-0 transition-transform group-hover:translate-x-1 ${
                          isActive ? "text-white" : "text-[#e51a24]"
                        }`}
                      />
                      <span>{c.title}</span>
                    </Link>
                  );
                })}
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="relative rounded-xl overflow-hidden shadow-xl border border-gray-100 flex flex-col bg-[#081839]"
            >
              {/* Image */}
              <div className="relative w-full h-[200px] sm:h-[220px]">
                <Image
                  src={sidebarCallout.image}
                  alt={sidebarCallout.subtitle}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 420px"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#081839]/60" />
              </div>

              {/* Nav */}
              <div className="relative bg-[#081839] text-white p-4 sm:p-6 pt-6 text-center rounded-t-xl -mt-5 z-10 space-y-3 shadow-2xl">
                {/* Frame */}
                <div className="w-10 h-1 bg-[#e51a24] rounded-full mx-auto mt-1 mb-2" />

                <h4 className="text-xl sm:text-[22px] font-extrabold leading-snug tracking-tight text-white whitespace-pre-line">
                  {sidebarCallout.title}
                </h4>

                <p className="text-gray-300 text-[13px] sm:text-[14px] font-medium">
                  {sidebarCallout.subtitle}
                </p>

                {/* Button */}
                <div className="pt-1">
                  <a
                    href={sidebarCallout.phoneHref}
                    className="inline-flex items-center gap-2.5 bg-[#e51a24] hover:bg-[#d41720] text-white font-bold py-3 px-5 sm:px-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02] mx-auto text-[13.5px] sm:text-[14.5px] tracking-wide"
                  >
                    <div className="w-7 h-7 rounded-xl bg-white text-[#e51a24] flex items-center justify-center text-sm shadow-sm shrink-0">
                      <IoCall />
                    </div>
                    <span>{sidebarCallout.phone}</span>
                  </a>
                </div>
              </div>
            </motion.div>

          </aside>

        </div>
      </div>
    </section>
  );
}