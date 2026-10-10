import PageTopSection from "@/components/common/PageTopSection";
import TestimonialSection from "@/sections/home/TestimonialSection";
import CtaSection from "@/sections/home/CtaSection";

export default function TestimonialPage() {
    return (
        <main>
            <PageTopSection title="Testimonials" breadcrumb="Testimonials" />
            <TestimonialSection />
            <CtaSection />
        </main>
    );
}