import Breadcrumb from "@/components/common/Breadcrumb";
import PricingSection from "@/sections/PricingSection";
import { siteMap } from "@/data";

export default function PackagesPage() {
    const { pricing, cta } = siteMap;

    return (
        <main>
            <Breadcrumb title="Packages" breadcrumb="Packages" />
            <PricingSection data={pricing} />
        </main>
    );
}