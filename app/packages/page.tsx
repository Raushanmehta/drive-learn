import PageTopSection from "@/components/common/PageTopSection";
import PricingSection from "@/sections/PricingSection";
import CtaSection from "@/sections/home/CtaSection";

export default function PackagesPage() {
    return (
        <main>
            <PageTopSection title="Packages" breadcrumb="Packages" />
            <PricingSection />
            <CtaSection />
        </main>
    );
}