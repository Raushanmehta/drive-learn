import AboutSection from "@/sections/home/AboutSection";
import CtaSection from "@/sections/home/CtaSection";
import HeroSection from "@/sections/home/HeroSection";
import ServiceSection from "@/sections/home/ServiceSection";
import StatsSection from "@/sections/home/StatsSection";
import TestimonialSection from "@/sections/home/TestimonialSection";
import WhyChooseUsSection from "@/sections/home/WhyChooseUsSection";


export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <WhyChooseUsSection />
      <StatsSection />
      <TestimonialSection />
      <CtaSection />
    </main>
  );
}
