import Breadcrumb from "@/components/common/Breadcrumb";
import ContactSection from "@/sections/ContactSection";
import { siteMap } from "@/data";

export default function ContactPage() {
    const { contact } = siteMap;

    return (
        <main>
            <Breadcrumb title="Contact Us" breadcrumb="Contact Us" />
            <ContactSection data={contact} />
        </main>
    );
}