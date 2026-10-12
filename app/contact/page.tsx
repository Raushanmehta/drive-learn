import PageTopSection from "@/components/common/PageTopSection";
import ContactSection from "@/sections/ContactSection";
import CtaSection from "@/sections/home/CtaSection";
import { siteMap } from "@/data";

export default function ContactPage() {
    const { contact, cta } = siteMap;

    return (
        <main>
            <PageTopSection title="Contact Us" breadcrumb="Contact Us" />
            <ContactSection data={contact} />
            <CtaSection data={cta} />
        </main>
    );
}