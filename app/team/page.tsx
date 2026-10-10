import PageTopSection from "@/components/common/PageTopSection";
import TeamSection from "@/sections/TeamSection";
import CtaSection from "@/sections/home/CtaSection";
import TestimonialSection from "@/sections/home/TestimonialSection";

export default function TeamPage() {
    return (
        <main>
            <PageTopSection title="Our Instructors" breadcrumb="Our Team" />
            <TeamSection />
            <TestimonialSection />
            <CtaSection />
        </main>
    );
}