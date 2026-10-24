"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  IoHeadset,
  IoLocationSharp,
  IoTime,
  IoChatbubblesOutline,
  IoPersonOutline,
  IoCallOutline,
  IoMailOutline,
  IoDocumentTextOutline,
  IoArrowForward,
} from "react-icons/io5";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa6";
import ContactCard from "@/components/cards/ContactCard";
import { poppins } from "@/lib/fonts";
import {
  siteMap,
  type DriveLearnContactData,
  type SectionProps,
} from "@/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  IoHeadset,
  IoLocationSharp,
  IoTime,
  IoChatbubblesOutline,
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
};

export default function ContactSection({
  data: propData,
  className = "",
}: SectionProps<DriveLearnContactData> = {}) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const data = propData || siteMap.contact;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 4500);
  };

  return (
    <section
      className={`relative py-8 lg:py-12 bg-[#f5f9fc] overflow-hidden ${poppins.className} ${className}`}
    >
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 space-y-4 sm:space-y-6">
        {/* Contact */}
        <div className="space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-4">
            {data.infoCards
              .filter((card) => card.tag !== "FAQ'S")
              .map((card, idx) => {
                const CardIcon = iconMap[card.icon] || IoHeadset;
                const content = (
                  <div className="space-y-1 text-[13.5px] sm:text-[14.5px] text-[#081839]">
                    {"phone" in card && (
                      <p>
                        <span className="font-bold text-[#081839]">Phone: </span>
                        <a
                          href={card.phoneHref}
                          className="hover:text-[#e51a24] transition-colors"
                        >
                          {card.phone}
                        </a>
                      </p>
                    )}
                    {"email" in card && (
                      <p>
                        <span className="font-bold text-[#081839]">Email: </span>
                        <a
                          href={card.emailHref}
                          className="hover:text-[#e51a24] transition-colors"
                        >
                          {card.email}
                        </a>
                      </p>
                    )}
                    {"line1" in card && (
                      <>
                        <p>{card.line1}</p>
                        <p>{card.line2}</p>
                      </>
                    )}
                  </div>
                );

                return (
                  <ContactCard
                    key={idx}
                    delay={idx * 0.1}
                    icon={CardIcon}
                    tag={card.tag}
                    content={content}
                    actionText={card.actionText}
                    actionHref={card.actionHref}
                  />
                );
              })}
          </div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h3 className="text-xl sm:text-[22px] font-extrabold text-[#081839]">
              {data.socialConnect.title}
            </h3>
            <div className="w-10 h-1 bg-[#e51a24] rounded-full mx-auto mt-2 mb-5" />

            <div className="flex items-center justify-center gap-3 sm:gap-6">
              {data.socialConnect.links.map((social, idx) => {
                const Icon = iconMap[social.icon] || FaFacebookF;
                return (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-[#081839] hover:text-white hover:bg-[#e51a24] hover:border-[#e51a24] transition-all duration-300 text-xl sm:text-3xl"
                  >
                    <Icon />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Form */}
        <div>
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 space-y-2 sm:space-y-2">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="flex items-center justify-center gap-2 mb-2"
            >
              <span className="w-1 h-4 bg-[#e51a24] rounded-full inline-block" />
              <span className="text-[#081839] font-bold text-xs uppercase tracking-widest">
                {data.form.eyebrow}
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#081839] tracking-tight"
            >
              {data.form.title.part1}{" "}
              <span className="text-[#e51a24]">{data.form.title.part2}</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[#556987] text-[14px] sm:text-[15px] mt-2.5 leading-relaxed"
            >
              {data.form.description}
            </motion.p>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl p-4 sm:p-6 lg:p-6 shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-gray-100"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-stretch">
                {/* Form */}
                <div className="lg:col-span-6 space-y-3 sm:space-y-4">
                  {/* Name */}
                  <div>
                    <label className="text-[13px] font-bold text-[#081839] mb-1.5 block">
                      Name <span className="text-[#e51a24]">*</span>
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

                  {/* Support */}
                  <div>
                    <label className="text-[13px] font-bold text-[#081839] mb-1.5 block">
                      Phone <span className="text-[#e51a24]">*</span>
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

                  {/* Email */}
                  <div>
                    <label className="text-[13px] font-bold text-[#081839] mb-1.5 block">
                      Email <span className="text-[#e51a24]">*</span>
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

                  {/* Subject */}
                  <div>
                    <label className="text-[13px] font-bold text-[#081839] mb-1.5 block">
                      Subject <span className="text-[#e51a24]">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400 text-lg">
                        <IoDocumentTextOutline />
                      </div>
                      <input
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        placeholder="Subject"
                        className="w-full pl-10 pr-4 py-3 rounded-[10px] border border-gray-200 text-sm text-[#081839] placeholder-gray-400 focus:outline-none focus:border-[#e51a24] focus:ring-1 focus:ring-[#e51a24]/30 transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Form */}
                <div className="lg:col-span-6 flex flex-col justify-between space-y-4 sm:space-y-5">
                  <div className="flex-1 flex flex-col">
                    <label className="text-[13px] font-bold text-[#081839] mb-1.5 block">
                      Message <span className="text-[#e51a24]">*</span>
                    </label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Write your message here..."
                      className="w-full flex-1 min-h-[200px] p-4 rounded-[10px] border border-gray-200 text-sm text-[#081839] placeholder-gray-400 focus:outline-none focus:border-[#e51a24] focus:ring-1 focus:ring-[#e51a24]/30 transition-all resize-none"
                    />
                  </div>

                  {/* Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="w-full relative flex items-center justify-center bg-[#e51a24] hover:bg-[#d41720] text-white font-bold text-[14px] sm:text-[15px] uppercase tracking-wider py-4 px-6 rounded-[12px] shadow-md hover:shadow-lg transition-all cursor-pointer group"
                  >
                    <span>{data.form.submitButton}</span>
                    <span className="absolute right-3.5 sm:right-4 w-8 h-8 rounded-full bg-white text-[#e51a24] flex items-center justify-center text-base font-bold shrink-0 transition-transform duration-300 group-hover:translate-x-1 shadow-sm">
                      <IoArrowForward />
                    </span>
                  </motion.button>
                </div>
              </div>

              {/* Form */}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-xl bg-green-50 border border-green-200 text-green-700 text-sm font-semibold text-center"
                >
                  {data.form.successMessage}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>

        {/* Location */}
        <div id="location-map" className="scroll-mt-20">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1 h-4 bg-[#e51a24] rounded-full inline-block" />
            <span className="text-[#e51a24] font-bold text-sm uppercase tracking-widest">
              {data.locationMap.eyebrow}
            </span>
          </div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full h-[300px] sm:h-[300px] rounded-xl overflow-hidden shadow-lg border border-gray-100 bg-white relative"
          >
            <iframe
              title={data.locationMap.title}
              src={data.locationMap.iframeSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
