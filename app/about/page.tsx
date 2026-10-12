import PageTopSection from "@/components/common/PageTopSection";
import AboutSection from "@/sections/home/AboutSection";
import CtaSection from "@/sections/home/CtaSection";
import StatsSection from "@/sections/home/StatsSection";
import WhyChooseUsSection from "@/sections/home/WhyChooseUsSection";
import OurMisionSection from "@/sections/OurMisionSection";
import ProcessSection from "@/sections/ProcessSection";
import { siteMap } from "@/data";

export default function AboutPage() {
    const { about, ourMission, whyChooseUs, process, stats, cta } = siteMap;

    return (
        <main>
            <PageTopSection title="About Us" breadcrumb="About Us" />
            <AboutSection data={about} showActionButton={false} />
            <OurMisionSection data={ourMission} />
            <WhyChooseUsSection data={whyChooseUs} />
            <ProcessSection data={process} />
            <StatsSection data={stats} />
            <CtaSection data={cta} />
        </main>
    );
}