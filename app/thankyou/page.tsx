import type { Metadata } from "next";
import Breadcrumb from "@/components/common/Breadcrumb";
import ThankYouSection from "@/sections/ThankYouSection";
import { siteMap } from "@/data";

export const metadata: Metadata = {
  title: "Thank You | DriveLearn",
  description: "Thank you for getting in touch with DriveLearn. We will reach out to you shortly.",
};

export default function ThankYouPage() {
  const data = siteMap.thankYou;

  return (
    <main>
      {/* Top */}
      <Breadcrumb
        title={data.pageTop.title}
        breadcrumb={data.pageTop.breadcrumb}
      />

      {/* Content */}
      <ThankYouSection data={data} />
    </main>
  );
}