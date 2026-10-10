"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { animate, motion, useInView } from "framer-motion";
import {
  TbSteeringWheel,
  TbUserStar,
  TbMap2,
  TbUserCheck,
} from "react-icons/tb";
import { poppins } from "@/lib/fonts";

interface StatItem {
  id: number;
  verticalLabel: string;
  target: number;
  suffix: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
}

const statsData: StatItem[] = [
  {
    id: 1,
    verticalLabel: "EXPERIENCE",
    target: 16,
    suffix: "+",
    title: "Student Traind",
    icon: TbSteeringWheel,
  },
  {
    id: 2,
    verticalLabel: "LEANERS",
    target: 18,
    suffix: "k",
    title: "Experienced Instructors",
    icon: TbUserStar,
  },
  {
    id: 3,
    verticalLabel: "SERVICE AREAS",
    target: 34,
    suffix: "",
    title: "Modern Training Vehicles",
    icon: TbMap2,
  },
  {
    id: 4,
    verticalLabel: "INSTRUCTORS",
    target: 290,
    suffix: "",
    title: "Success Rate",
    icon: TbUserCheck,
  },
];

function Counter({
  end,
  suffix = "",
  duration = 2.2,
}: {
  end: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, end, {
      duration,
      ease: [0.25, 0.1, 0.25, 1],
      onUpdate: (latest) => setCount(Math.round(latest)),
    });

    return () => controls.stop();
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section
      className={`relative py-8 lg:py-16 bg-[#cf121e] text-white overflow-hidden ${poppins.className}`}
    >
      {/* Background Aerial Cars Image with Crimson Tint */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/stats-cars-bg.jpg"
          alt="Fleet of training vehicles"
          fill
          className="object-cover object-center mix-blend-multiply opacity-30 select-none pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#ba0d17]/95 via-[#cf121e]/90 to-[#ba0d17]/95" />
      </div>

      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-4">
          {statsData.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
                className="flex items-start gap-4"
              >
                {/* Vertical Label & Divider Line */}
                <div className="flex items-center gap-3 self-stretch shrink-0">
                  <span className="[writing-mode:vertical-rl] rotate-180 text-[11px] sm:text-[12px] font-bold text-white/80 tracking-widest uppercase select-none">
                    {stat.verticalLabel}
                  </span>
                  <div className="w-[1.5px] h-full min-h-[110px] bg-white/30 rounded-full" />
                </div>

                {/* Main Stat Content */}
                <div className="flex-1 flex flex-col justify-between">
                  {/* Hollow / Outlined Animated Counter Number */}
                  <div className="select-none">
                    <span className="font-black text-5xl sm:text-6xl lg:text-[70px] leading-none tracking-tight text-transparent [-webkit-text-stroke:2px_white] block tabular-nums">
                      <Counter end={stat.target} suffix={stat.suffix} />
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-[17px] sm:text-[19px] font-bold text-white tracking-tight mt-2 mb-3 leading-snug">
                    {stat.title}
                  </h3>

                  {/* Bottom Icon */}
                  <motion.div
                    whileHover={{ scale: 1.12, rotate: 6 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="w-18 h-18 flex items-center justify-center text-white text-6xl mt-1"
                  >
                    <Icon className="stroke-[1.8]" />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}