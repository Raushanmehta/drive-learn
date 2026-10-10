"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  IoSchool,
  IoCar,
  IoPeople,
  IoShieldCheckmark,
  IoPersonOutline,
  IoCallOutline,
  IoMailOutline,
  IoBookOutline,
  IoChatbubbleOutline,
  IoArrowForward,
} from "react-icons/io5";
import { poppins } from "@/lib/fonts";

const featureList = [
  {
    icon: IoSchool,
    title: "Professional Driving Training",
  },
  {
    icon: IoCar,
    title: "Flexible Batch Timings",
  },
  {
    icon: IoPeople,
    title: "Certified Instructors",
  },
  {
    icon: IoShieldCheckmark,
    title: "Safe & Modern Vehicles",
  },
];

export default function EnquirySection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section
      className={`relative py-8 lg:py-12 bg-white overflow-hidden ${poppins.className}`}
    >
      {/* Decorative Dot Matrix Patterns */}
      <div
        className="absolute top-10 left-6 opacity-35 pointer-events-none select-none hidden md:block"
        aria-hidden="true"
      >
        <div className="grid grid-cols-6 gap-2">
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-gray-300" />
          ))}
        </div>
      </div>
      <div
        className="absolute bottom-10 right-6 opacity-35 pointer-events-none select-none hidden md:block"
        aria-hidden="true"
      >
        <div className="grid grid-cols-6 gap-2">
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-gray-300" />
          ))}
        </div>
      </div>

      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 space-y-2 sm:space-y-2">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 mb-2.5"
          >
            <span className="w-1 h-4 bg-[#e51a24] rounded-full inline-block" />
            <span className="text-[#081839] font-bold text-xs uppercase tracking-widest">
              ENQUIRY NOW
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-tight text-[#081839] leading-tight"
          >
            Get More <span className="text-[#e51a24]">Information</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="text-[#556987] text-[14.5px] sm:text-[15.5px] max-w-2xl mx-auto mt-3 leading-relaxed"
          >
            Fill out the form below and our team will get back to you with
            complete details about our driving courses, fees, schedules and
            admission process.
          </motion.p>
        </div>

        {/* 2-Column Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-4 items-stretch">
          {/* Left Column: Visual Car Photo with Floating Badge */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            {/* Background Red Tab on Left */}
            <div
              className="absolute -left-3 top-1/3 w-10 h-28 bg-[#e51a24] rounded-l-xl -z-10"
              aria-hidden="true"
            />
            {/* Background Navy Tab at Bottom */}
            <div
              className="absolute -bottom-5 right-6 w-52 h-20 bg-[#091f48] rounded-xl -z-10"
              aria-hidden="true"
            />

            {/* Main Car Photo Container */}
            <div className="relative w-full h-[450px] sm:h-[500px] lg:h-full min-h-[460px] rounded-xl overflow-hidden shadow-xl bg-gray-100">
              <Image
                src="/images/enquiry-car.jpg"
                alt="DriveLearn training car on training track"
                fill
                className="object-cover object-center"
              />

              {/* Floating Feature Card Overlaid on Top-Left */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="absolute top-6 left-6 bg-[#081b3f]/92 backdrop-blur-md rounded-xl p-5 sm:p-6 text-white space-y-3.5 max-w-[230px] sm:max-w-[240px] shadow-2xl border border-white/10"
              >
                {featureList.map((feat, idx) => {
                  const Icon = feat.icon;
                  return (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#e51a24] flex items-center justify-center text-white text-base shrink-0 shadow-sm">
                        <Icon />
                      </div>
                      <span className="text-[12px] sm:text-[13px] font-semibold text-white leading-tight">
                        {feat.title}
                      </span>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Enquiry Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-xl p-6 sm:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-gray-100 h-full flex flex-col justify-between">
              <div>
                {/* Form Heading */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#081839] tracking-tight">
                  Enquiry <span className="text-[#e51a24]">Now</span>
                </h3>
                <div className="w-10 h-1 bg-[#e51a24] rounded-full mt-2 mb-3" />
                <p className="text-[#556987] text-[13.5px] sm:text-[14px] mb-7 leading-relaxed">
                  Have questions? Share your details and we will contact you
                  with all the required information.
                </p>

                {/* Form Elements */}
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="text-[13px] font-bold text-[#081839] mb-1.5 block">
                        Full Name <span className="text-[#e51a24]">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400 text-lg">
                          <IoPersonOutline />
                        </div>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder="Your Name"
                          className="w-full pl-10 pr-4 py-3 rounded-[10px] border border-gray-200 text-sm text-[#081839] placeholder-gray-400 focus:outline-none focus:border-[#e51a24] focus:ring-1 focus:ring-[#e51a24]/30 transition-all"
                        />
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="text-[13px] font-bold text-[#081839] mb-1.5 block">
                        Phone Number <span className="text-[#e51a24]">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400 text-lg">
                          <IoCallOutline />
                        </div>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          placeholder="Your Phone Number"
                          className="w-full pl-10 pr-4 py-3 rounded-[10px] border border-gray-200 text-sm text-[#081839] placeholder-gray-400 focus:outline-none focus:border-[#e51a24] focus:ring-1 focus:ring-[#e51a24]/30 transition-all"
                        />
                      </div>
                    </div>

                    {/* Email Address */}
                    <div>
                      <label className="text-[13px] font-bold text-[#081839] mb-1.5 block">
                        Email Address <span className="text-[#e51a24]">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400 text-lg">
                          <IoMailOutline />
                        </div>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="Your Email Address"
                          className="w-full pl-10 pr-4 py-3 rounded-[10px] border border-gray-200 text-sm text-[#081839] placeholder-gray-400 focus:outline-none focus:border-[#e51a24] focus:ring-1 focus:ring-[#e51a24]/30 transition-all"
                        />
                      </div>
                    </div>

                    {/* Select Course */}
                    <div>
                      <label className="text-[13px] font-bold text-[#081839] mb-1.5 block">
                        Select Course <span className="text-[#e51a24]">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400 text-lg">
                          <IoBookOutline />
                        </div>
                        <select
                          required
                          value={formData.course}
                          onChange={(e) =>
                            setFormData({ ...formData, course: e.target.value })
                          }
                          className="w-full pl-10 pr-8 py-3 rounded-[10px] border border-gray-200 text-sm text-[#081839] bg-white focus:outline-none focus:border-[#e51a24] focus:ring-1 focus:ring-[#e51a24]/30 transition-all appearance-none cursor-pointer"
                        >
                          <option value="">Select Course</option>
                          <option value="beginner">Beginner Driving Course</option>
                          <option value="automatic">Automatic Car Training</option>
                          <option value="license">License Assistance</option>
                          <option value="defensive">Defensive Driving Course</option>
                          <option value="refresher">Refresher Course</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-gray-400 text-xs">
                          ▼
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Your Message */}
                  <div>
                    <label className="text-[13px] font-bold text-[#081839] mb-1.5 block">
                      Your Message <span className="text-[#e51a24]">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute top-3.5 left-3.5 pointer-events-none text-gray-400 text-lg">
                        <IoChatbubbleOutline />
                      </div>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Write your message here..."
                        className="w-full pl-10 pr-4 py-3 rounded-[10px] border border-gray-200 text-sm text-[#081839] placeholder-gray-400 focus:outline-none focus:border-[#e51a24] focus:ring-1 focus:ring-[#e51a24]/30 transition-all resize-none"
                      />
                    </div>
                  </div>

                  {/* Success notification */}
                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3.5 rounded-lg bg-green-50 border border-green-200 text-green-700 text-sm font-medium text-center"
                    >
                      Thank you! Your enquiry has been submitted successfully.
                      We will contact you shortly.
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="w-full relative flex items-center justify-center bg-[#e51a24] hover:bg-[#d41720] text-white font-bold text-[14px] sm:text-[15px] uppercase tracking-wider py-4 px-6 rounded-[12px] shadow-md hover:shadow-lg transition-all cursor-pointer group"
                  >
                    <span>SUBMIT ENQUIRY</span>
                    <span className="absolute right-3.5 sm:right-4 w-8 h-8 rounded-full bg-white text-[#e51a24] flex items-center justify-center text-base font-bold shrink-0 transition-transform duration-300 group-hover:translate-x-1 shadow-sm">
                      <IoArrowForward />
                    </span>
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
