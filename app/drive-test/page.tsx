import PageTopSection from "@/components/common/PageTopSection";
import DriveTestSection from "@/sections/DriveTestSection";
import CtaSection from "@/sections/home/CtaSection";

export default function DriveTestPage() {
    return (
        <main>
            <PageTopSection title="Driving Test" breadcrumb="Driving Test" />
            <DriveTestSection />
            <CtaSection />
        </main>
    );
}