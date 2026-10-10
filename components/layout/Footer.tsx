"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import {
  IoCall,
  IoChevronForward,
  IoLocationSharp,
  IoMail,
  IoTimeSharp,
} from "react-icons/io5";
import { poppins } from "@/lib/fonts";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Courses", href: "/courses" },
  { name: "Driving License", href: "/driving-license" },
  { name: "Vehicle Insurance", href: "/vehicle-insurance" },
  { name: "FAQs", href: "/faqs" },
  { name: "Contact Us", href: "/contact" },
];

const ourServices = [
  { name: "Driving Courses", href: "/courses" },
  { name: "Driving License Assistance", href: "/license-assistance" },
  { name: "RTO Services", href: "/rto-services" },
  { name: "Vehicle Insurance", href: "/vehicle-insurance" },
  { name: "Refresher Courses", href: "/refresher-courses" },
  { name: "Defensive Driving", href: "/defensive-driving" },
  { name: "Road Safety Training", href: "/road-safety-training" },
];

const socialLinks = [
  { icon: FaFacebookF, href: "https://facebook.com", label: "Facebook" },
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
  { icon: FaYoutube, href: "https://youtube.com", label: "YouTube" },
  { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className={`relative bg-[#061536] text-white overflow-hidden ${poppins.className}`}>
      {/* Background Car Ambient Overlay */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full opacity-20 pointer-events-none select-none">
        <Image
          src="/images/footer-car-bg.jpg"
          alt="Driving background"
          fill
          priority={false}
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061536] via-[#061536]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#061536] via-transparent to-[#061536]" />
      </div>

      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Brand & About */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block" aria-label="DriveLearn Driving School">
              <Image
                src="/logo/logo-whites.png"
                alt="DriveLearn Driving School"
                width={380}
                height={125}
                className="h-16 sm:h-20 md:h-[70px] w-auto object-contain"
              />
            </Link>

            <p className="text-[#9db2ce] text-[13.5px] sm:text-[14px] leading-relaxed max-w-sm">
              At DriveLearn, we are committed to providing high-quality driving education
              with experienced instructors, modern training vehicles and a focus on safe
              driving for every learner.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.12, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/90 hover:text-white hover:bg-[#e51a24] hover:border-[#e51a24] transition-all duration-200 text-sm shadow-xs"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-[17px] tracking-tight">
              Quick Links
            </h3>
            <div className="w-8 h-[3px] bg-[#e51a24] rounded-full mt-2 mb-5" />

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-[14px] text-white/80 hover:text-white transition-colors"
                  >
                    <IoChevronForward className="text-[#e51a24] text-xs shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-bold text-[17px] tracking-tight">
              Our Services
            </h3>
            <div className="w-8 h-[3px] bg-[#e51a24] rounded-full mt-2 mb-5" />

            <ul className="space-y-3">
              {ourServices.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="group flex items-center gap-2 text-[14px] text-white/80 hover:text-white transition-colors"
                  >
                    <IoChevronForward className="text-[#e51a24] text-xs shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Get In Touch */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-bold text-[17px] tracking-tight">
              Get In Touch
            </h3>
            <div className="w-8 h-[3px] bg-[#e51a24] rounded-full mt-2 mb-5" />

            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-[#e51a24] flex items-center justify-center text-white shrink-0 mt-0.5 shadow-sm">
                  <IoLocationSharp className="text-[17px]" />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-[14px] font-medium text-white">
                    123 Training Street,
                  </span>
                  <span className="text-[13px] text-[#9db2ce] mt-0.5">
                    New Delhi, India
                  </span>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-full bg-[#e51a24] flex items-center justify-center text-white shrink-0 shadow-sm">
                  <IoCall className="text-[15px]" />
                </div>
                <a
                  href="tel:+919876543210"
                  className="text-[14px] font-medium text-white hover:text-[#e51a24] transition-colors"
                >
                  +91 9876543210
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-full bg-[#e51a24] flex items-center justify-center text-white shrink-0 shadow-sm">
                  <IoMail className="text-[15px]" />
                </div>
                <a
                  href="mailto:info@drivelearn.com"
                  className="text-[14px] font-medium text-white hover:text-[#e51a24] transition-colors"
                >
                  info@drivelearn.com
                </a>
              </div>

              {/* Operating Hours */}
              <div className="flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-full bg-[#e51a24] flex items-center justify-center text-white shrink-0 shadow-sm">
                  <IoTimeSharp className="text-[16px]" />
                </div>
                <span className="text-[13.5px] font-medium text-white">
                  Mon - Sun: 9:00 AM - 8:00 PM
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-white/10 relative z-10">
        <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-5 text-center text-[13.5px] text-[#9db2ce]">
          <p>
            © 2026{" "}
            <span className="font-semibold text-white">
              Drive<span className="text-[#e51a24]">Learn</span>
            </span>{" "}
            Driving School. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}