import PageTopSection from "@/components/common/PageTopSection";
import AboutSection from "@/sections/home/AboutSection";
import CtaSection from "@/sections/home/CtaSection";
import StatsSection from "@/sections/home/StatsSection";
import WhyChooseUsSection from "@/sections/home/WhyChooseUsSection";
import OurMisionSection from "@/sections/OurMisionSection";
import ProcessSection from "@/sections/ProcessSection";

export default function AboutPage() {
    return (
        <main>
            <PageTopSection title="About Us" breadcrumb="About Us" />
            <AboutSection />
            <OurMisionSection />
            <WhyChooseUsSection />
            <ProcessSection />
            <StatsSection />
            <CtaSection />
        </main>
    );
}