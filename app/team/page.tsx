import Breadcrumb from "@/components/common/Breadcrumb";
import TeamSection from "@/sections/TeamSection";
import { siteMap } from "@/data";

export default function TeamPage() {
    const { team } = siteMap;

    return (
        <main>
            <Breadcrumb title="Our Team" breadcrumb="Our Team" />
            <TeamSection data={team} />
        </main>
    );
}