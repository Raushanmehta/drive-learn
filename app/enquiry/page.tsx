import PageTopSection from "@/components/common/PageTopSection";
import EnquirySection from "@/sections/EnquirySection";
import CtaSection from "@/sections/home/CtaSection";

export default function EnquiryPage() {
    return (
        <main>
            <PageTopSection title="Enquiry" breadcrumb="Enquiry" />
            <EnquirySection />
            <CtaSection />
        </main>
    );
}