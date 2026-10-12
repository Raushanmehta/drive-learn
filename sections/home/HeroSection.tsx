"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  IoArrowForward,
  IoPlay,
  IoChevronDown,
  IoClose,
} from "react-icons/io5";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { poppins } from "@/lib/fonts";
import { siteMap, type DriveLearnHeroData } from "@/data";

interface HeroSectionProps {
  data?: DriveLearnHeroData;
}

export default function HeroSection({ data: propData }: HeroSectionProps = {}) {
  const data = propData || siteMap.hero;
  const { slides, videoButtonText, videoModal } = data;

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const onSelect = useCallback(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
  }, [api]);

  useEffect(() => {
    if (!api) return;
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api, onSelect]);

  return (
    <section className={`relative w-full overflow-hidden bg-[#040e25] ${poppins.className}`}>
      {/* Carousel */}
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
          duration: 35,
        }}
        plugins={[
          Autoplay({
            delay: 5500,
            stopOnInteraction: false,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent className="ml-0">
          {slides.map((slide, index) => (
            <CarouselItem
              key={slide.id}
              className="relative pl-0 w-full min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] flex items-center justify-center"
            >
              {/* Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={slide.image}
                  alt={slide.titleTop}
                  fill
                  priority={index === 0}
                  className="object-cover object-center transition-transform duration-1000 scale-100"
                />

                {/* Background */}
                <div className="absolute inset-0 bg-[#040e25]/60 z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#040e25]/95 via-[#040e25]/65 to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040e25]/90 via-transparent to-[#040e25]/40 z-10" />
              </div>

              {/* Content */}
              <div className="max-w-[1420px] w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-16 sm:py-20 lg:py-20 relative z-20">
                <div className="max-w-xl lg:max-w-2xl">
                  {/* Eyebrow */}
                  <motion.div
                    key={`eyebrow-${current}`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <span className="text-[15px] sm:text-[17px] font-medium text-white/90 tracking-wide block mb-1 sm:mb-2">
                      {slide.eyebrow}
                    </span>
                  </motion.div>

                  {/* Headline */}
                  <motion.h1
                    key={`headline-${current}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
                    className="text-3xl sm:text-5xl lg:text-[58px] font-extrabold text-white leading-[1.12] tracking-tight"
                  >
                    <span className="block">{slide.titleTop}</span>

                    {/* Slanted */}
                    <span className="inline-block relative my-1.5 sm:my-2">
                      <span className="inline-block bg-[#e51a24] text-white px-6 sm:px-8 py-1.5 sm:py-1.5 -skew-x-[20deg] rounded-[3px] shadow-lg">
                        <span className="inline-block skew-x-[20deg] italic font-extrabold tracking-wide">
                          {slide.badge}
                        </span>
                      </span>
                    </span>

                    <span className="block">{slide.titleBottom}</span>
                  </motion.h1>

                  {/* Description */}
                  <motion.p
                    key={`desc-${current}`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
                    className="text-[14.5px] sm:text-[16px] text-gray-200/90 leading-relaxed max-w-lg mt-2 sm:mt-2"
                  >
                    {slide.description}
                  </motion.p>

                  {/* Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.3, ease: "easeOut" }}
                    className="flex flex-wrap items-center gap-5 sm:gap-7 mt-2 sm:mt-2"
                  >
                    {/* Services */}
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <Link
                        href="/driving-courses"
                        className="group inline-flex items-center gap-2.5 bg-[#e51a24] hover:bg-[#d41720] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-[6px] font-semibold text-[15px] sm:text-[16px] transition-all shadow-md"
                      >
                        <span>Explore Our Courses</span>
                        <IoArrowForward className="text-lg transition-transform duration-200 group-hover:translate-x-1" />
                      </Link>
                    </motion.div>

                    {/* Button */}
                    <motion.button
                      type="button"
                      onClick={() => setIsVideoOpen(true)}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="inline-flex items-center gap-3.5 text-white group cursor-pointer focus:outline-none"
                      aria-label="Watch our driving school introduction video"
                    >
                      <span className="relative flex items-center justify-center w-12 h-12 rounded-full bg-[#e51a24] text-white shadow-lg transition-transform duration-200 group-hover:scale-105">
                        <span className="absolute inset-0 rounded-full bg-[#e51a24] animate-ping opacity-30" />
                        <IoPlay className="text-lg ml-0.5" />
                      </span>
                      <span className="font-semibold text-[15px] sm:text-[16px] text-white group-hover:text-[#e51a24] transition-colors">
                        {videoButtonText || "Watch Our Video"}
                      </span>
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Center */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden sm:flex flex-col items-center"
      >
        <a
          href="#about"
          aria-label="Scroll down"
          className="w-7 h-10 rounded-full border border-white/60 flex items-center justify-center hover:border-white transition-colors"
        >
          <IoChevronDown className="text-white text-sm" />
        </a>
      </motion.div>

      {/* Carousel */}
      <div className="absolute right-6 sm:right-10 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col items-center gap-3">
        {slides.map((_, index) => {
          const isActive = current === index;

          return (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              className="flex items-center justify-center focus:outline-none cursor-pointer transition-all duration-300"
            >
              {isActive ? (
                <div className="w-4 h-4 rounded-full border-2 border-white flex items-center justify-center shadow-md">
                  <div className="w-2 h-2 rounded-full bg-[#e51a24]" />
                </div>
              ) : (
                <div className="w-2.5 h-2.5 rounded-full bg-white/70 hover:bg-white transition-colors" />
              )}
            </button>
          );
        })}
      </div>

      {/* Video */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl bg-black rounded-xl overflow-hidden shadow-2xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-[#e51a24] text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close video modal"
              >
                <IoClose className="text-2xl" />
              </button>
              <iframe
                src={videoModal?.embedUrl || "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"}
                title={videoModal?.title || "Driving School Introduction Video"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}