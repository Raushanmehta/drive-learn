"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { IoChevronForward, IoMenu, IoClose } from "react-icons/io5";
import { poppins } from "@/lib/fonts";
import { siteMap, type DriveLearnNavbarData } from "@/data";

interface NavbarProps {
  data?: DriveLearnNavbarData;
}

export default function Navbar({ data: propData }: NavbarProps = {}) {
  const data = propData || siteMap.navbar;
  const { navLinks, cta } = data;
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className={`w-full bg-[#061536] sticky top-0 z-50 shadow-md ${poppins.className}`}>
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex items-center justify-between h-[60px] md:h-[66px]">
          {/* Nav */}
          <ul className="hidden xl:flex items-center gap-6 2xl:gap-8">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(link.href);

              return (
                <li key={link.name}>
                  {isActive ? (
                    <Link
                      href={link.href}
                      className="inline-block bg-[#e51a24] text-white px-5 py-2 rounded-[6px] font-semibold text-[14.5px] transition-all shadow-sm hover:brightness-105"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <Link
                      href={link.href}
                      className="inline-block text-white/95 font-medium text-[14.5px] py-2 hover:text-[#e51a24] transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Table */}
          <div className="flex xl:hidden items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2 rounded-md hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <IoClose className="text-2xl text-white" />
              ) : (
                <IoMenu className="text-2xl text-white" />
              )}
            </button>
            <span className="text-white font-semibold text-sm xl:hidden">
              Navigation Menu
            </span>
          </div>

          {/* Enquiry */}
          <div className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link
                href={cta.href}
                className="group flex items-center gap-2.5 bg-[#e51a24] hover:bg-[#d61720] text-white font-semibold text-[14px] sm:text-[14.5px] pl-5 pr-2 py-1.5 sm:py-2 rounded-full transition-all shadow-md"
              >
                <span>{cta.text}</span>
                <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-[#e51a24] text-xs font-bold shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">
                  <IoChevronForward className="stroke-[2.5]" />
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="xl:hidden border-t border-white/10 bg-[#061536] overflow-hidden"
          >
            <div className="px-4 sm:px-6 pt-3 pb-5 space-y-2">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname?.startsWith(link.href);

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-2.5 rounded-md text-[14.5px] font-medium transition-colors ${
                      isActive
                        ? "bg-[#e51a24] text-white font-semibold"
                        : "text-white/90 hover:bg-white/5 hover:text-[#e51a24]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}