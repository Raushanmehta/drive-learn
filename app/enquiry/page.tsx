import Breadcrumb from "@/components/common/Breadcrumb";
import EnquirySection from "@/sections/EnquirySection";
import { siteMap } from "@/data";

export default function EnquiryPage() {
    const { enquiry } = siteMap;

    return (
        <main>
            <Breadcrumb title="Enquiry" breadcrumb="Enquiry" />
            <EnquirySection data={enquiry} />
        </main>
    );
}