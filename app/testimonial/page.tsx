"use client";

import PageTopSection from "@/components/common/PageTopSection";
import CtaSection from "@/sections/home/CtaSection";
import TestimonialCard, {
    type TestimonialCardProps,
} from "@/components/cards/TestimonialCard";
import { motion } from "framer-motion";
import { IoCar } from "react-icons/io5";
import { poppins } from "@/lib/fonts";

const testimonialsData: TestimonialCardProps[] = [
    {
        title: "Bahut Achha Driving School Hai.",
        review:
            "Yahan ke instructors bahut patient hain aur har cheez ko clearly samjhate hain. Inki training ki wajah se mujhe driving me confidence mila. Main is driving school ko sabko recommend karunga.",
        name: "Amit Sharma",
        location: "NEW DELHI",
        avatar: "/images/reviewer-amit.jpg",
        rating: 5,
    },
    {
        title: "Professional Team & Training.",
        review:
            "Mera driving experience yahan bahut accha raha. Staff bahut supportive hai aur training cars bhi well-maintained hain. Yahan seekhna easy aur comfortable hai. Highly recommended!",
        name: "Priya Verma",
        location: "GURGAON",
        avatar: "/images/reviewer-priya.jpg",
        rating: 5,
    },
    {
        title: "Passed In First Attempt!",
        review:
            "Instructors ne test routes par itni achhi practice karayi ki maine pehle hi attempt me RTO driving test pass kar liya. Inka training system lajawab hai.",
        name: "Rohit Malhotra",
        location: "NOIDA",
        avatar: "/images/reviewer-amit.jpg",
        rating: 5,
    },
    {
        title: "Best For Beginners.",
        review:
            "Mujhe driving se bahut darr lagta tha, par yahan ke calm environment aur step-by-step guidance se mera saara darr khatam ho gaya. Thank you DriveLearn!",
        name: "Sneha Patel",
        location: "NEW DELHI",
        avatar: "/images/reviewer-priya.jpg",
        rating: 5,
    },
    {
        title: "Flexible Timings & Great Cars.",
        review:
            "Meri job ki wajah se weekend batches best the. Training cars bilkul nayi aur clean hain. Dual-control pedals se safe feel hota hai.",
        name: "Vikram Singh",
        location: "FARIDABAD",
        avatar: "/images/reviewer-amit.jpg",
        rating: 5,
    },
    {
        title: "Affordable & Trustworthy.",
        review:
            "Koi hidden charges nahi hain. Jo commit kiya tha, wahi complete training aur guidance provide ki. Sabhi ko yahan se hi driving sikhni chahiye.",
        name: "Ananya Roy",
        location: "GHAZIABAD",
        avatar: "/images/reviewer-priya.jpg",
        rating: 5,
    },
];

export default function TestimonialPage() {
    return (
        <main>
            <PageTopSection title="Testimonials" breadcrumb="Testimonials" />
            <section
                className={`relative py-8 lg:py-12 bg-white text-[#081839] overflow-hidden ${poppins.className}`}
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
                            className="flex items-center justify-center gap-3.5 mb-2"
                        >
                            <span className="w-10 sm:w-14 h-[2px] bg-[#e51a24] rounded-full" />
                            <span className="flex items-center gap-2 text-white font-medium text-[14px] sm:text-[15px] tracking-wide">
                                <IoCar className="text-[#e51a24] text-xl sm:text-2xl shrink-0" />
                                <span className="text-black">Testimonial</span>
                            </span>
                            <span className="w-10 sm:w-14 h-[2px] bg-[#e51a24] rounded-full" />
                        </motion.div>

                        {/* Headline */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.55, delay: 0.1 }}
                            className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight leading-tight"
                        >
                            <span className="text-black">What our </span>
                            <span className="text-[#e51a24]">Students Say</span>
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.55, delay: 0.2 }}
                            className="text-[#556987] text-[14px] sm:text-[15px] max-w-2xl mx-auto mt-2.5 leading-relaxed"
                        >
                            Real stories from our learners who have gained confidence and
                            driving skills with us.
                        </motion.p>
                    </div>

                    {/* 3-Column Testimonial Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-4">
                        {testimonialsData.map((testimonial, idx) => (
                            <TestimonialCard key={idx} {...testimonial} />
                        ))}
                    </div>
                </div>
            </section>
            <CtaSection />
        </main>
    );
}