import PageTopSection from "@/components/common/PageTopSection";
import PricingSection from "@/sections/PricingSection";
import CtaSection from "@/sections/home/CtaSection";
import { siteMap } from "@/data";

export default function PackagesPage() {
    const { pricing, cta } = siteMap;

    return (
        <main>
            <PageTopSection title="Packages" breadcrumb="Packages" />
            <PricingSection data={pricing} />
            <CtaSection data={cta} />
        </main>
    );
}