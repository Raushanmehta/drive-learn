import PageTopSection from "@/components/common/PageTopSection";
import DriveTestSection from "@/sections/DriveTestSection";
import CtaSection from "@/sections/home/CtaSection";
import { siteMap } from "@/data";

export default function DriveTestPage() {
    const { cta } = siteMap;

    return (
        <main>
            <PageTopSection title="Driving Test" breadcrumb="Driving Test" />
            <DriveTestSection />
            <CtaSection data={cta} />
        </main>
    );
}