import PageTopSection from "@/components/common/PageTopSection";
import EnquirySection from "@/sections/EnquirySection";
import CtaSection from "@/sections/home/CtaSection";
import { siteMap } from "@/data";

export default function EnquiryPage() {
    const { enquiry, cta } = siteMap;

    return (
        <main>
            <PageTopSection title="Enquiry" breadcrumb="Enquiry" />
            <EnquirySection data={enquiry} />
            <CtaSection data={cta} />
        </main>
    );
}