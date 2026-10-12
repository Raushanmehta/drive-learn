import PageTopSection from "@/components/common/PageTopSection";
import DrivingCoursesDetailSection from "@/sections/DrivingCoursesDetailSection";
import { siteMap } from "@/data";

export function generateStaticParams() {
  const services = siteMap.services;
  const list = services.courseList || [];
  const slugs = new Set([
    "beginner-driving-course",
    "highway-driving-lesson",
    "complete-driving-course",
    ...list.map((c) => c.slug).filter(Boolean),
  ]);
  return Array.from(slugs).map((slug) => ({ slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function DrivingCoursesDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const data = siteMap.services;
  const coursesList = data.courseList || [];
  const currentCourse = coursesList.find((c) => c.slug === slug) || coursesList[0];
  const courseDetail = (currentCourse as unknown as { courseDetail?: { pageTop?: { title?: string; breadcrumb?: string } } })?.courseDetail;

  const title = currentCourse?.title || courseDetail?.pageTop?.title || "Course Detail";
  const breadcrumb = currentCourse?.title || courseDetail?.pageTop?.breadcrumb || "Course Detail";

  return (
    <main>
      <PageTopSection title={title} breadcrumb={breadcrumb} />
      <DrivingCoursesDetailSection currentSlug={slug} data={data} />
    </main>
  );
}