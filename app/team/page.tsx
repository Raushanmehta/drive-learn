import PageTopSection from "@/components/common/PageTopSection";
import TeamSection from "@/sections/TeamSection";
import CtaSection from "@/sections/home/CtaSection";
import TestimonialSection from "@/sections/home/TestimonialSection";
import { siteMap } from "@/data";

export default function TeamPage() {
    const { team, testimonial, cta } = siteMap;

    return (
        <main>
            <PageTopSection title="Our Team" breadcrumb="Our Team" />
            <TeamSection data={team} />
            <TestimonialSection data={testimonial} />
            <CtaSection data={cta} />
        </main>
    );
}