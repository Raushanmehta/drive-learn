import type { Metadata } from "next";
import Breadcrumb from "@/components/common/Breadcrumb";
import DriveTestSection from "@/sections/DriveTestSection";
import { siteMap } from "@/data";

export const metadata: Metadata = {
  title: "Driving Test Preparation | DriveLearn",
  description: "Pass your driving test with confidence. Expert guidance, practical training and mock tests.",
};

export default function DriveTestPage() {
  const data = siteMap.driveTest;

  return (
    <main>
      <Breadcrumb
        title={data.pageTop.title}
        breadcrumb={data.pageTop.breadcrumb}
      />
      <DriveTestSection data={data} />
    </main>
  );
}